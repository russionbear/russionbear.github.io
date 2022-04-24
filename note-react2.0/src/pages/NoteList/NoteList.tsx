import style from './NoteList.module.css'
import { Menu, Button, Space, Select, Input, Dropdown, Layout, Modal, message, List } from 'antd'
import {
  RollbackOutlined,
  SettingOutlined,
  PlusCircleOutlined,
  FilterOutlined,
  CheckOutlined
} from '@ant-design/icons';
import React, { useState, useRef, useCallback, createRef, useEffect, useMemo } from 'react'
import ListFilter, { ListFielterDataItem } from '../../component/ListFilter/ListFilter';
// import TagSetter from '../../component/TagSetter/TagSetter';
import BookManager from '../../modals/BookManager/BookManager';
import NoteSetter, { NoteSetterProps } from '../../modals/NewANote/NoteSetter';
import MyList from '../../component/MyList/MyList';
import Store from '../../redux/store';
// import axios from 'axios';
import myAxios from '../../sokect/myAxios';
import {
  ItemBook as BookDataType,
  ItemNote as NoteDataType,
  TYPE_BOOKMANAGER_BOOKS,
  TYPE_BOOKMANAGER_NOWBOOK,
  setBooksUpdate,
  setBooksSwapNow,
  setEditValue,
  setNotesUpdate,
  ItemNote,
  ItemSource,
  setEditSourceUpdate,
  setNotesSwapNow,
  setEditValueModified
} from '../../redux/actions'
import copy from 'copy-to-clipboard';
import { FormatDate } from '../../utils/utils';

const CopyToClipBoard = copy

const initFilterData: Array<ListFielterDataItem> = [
  {
    key: 'sort',
    name: 'sort',
    icon: '',
    check: false,
    usage: 'radio',
    hide: false,
    children: [
      {
        key: 'sort_name',
        name: '名称',
        icon: <CheckOutlined />,
        check: true
      }, {
        key: 'sort_createTime',
        name: '创建时间',
        icon: <CheckOutlined />,
        check: false
      }, {
        key: 'sort_modifyTime',
        name: '修改时间',
        icon: <CheckOutlined />,
        check: false
      },
    ]
  },
  {
    key: 'rsort',
    name: 'rsort',
    icon: '',
    check: false,
    usage: 'checkbox',
    hide: true,
    children: [
      {
        key: 'radio_rev',
        name: '逆置',
        icon: <CheckOutlined />,
        check: false
      }
    ]
  }, {
    key: 'show',
    name: '显示',
    icon: '',
    check: false,
    usage: 'checkbox',
    hide: false,
    children: [
      {
        key: 'show_modifyTime',
        name: '修改时间',
        icon: <CheckOutlined />,
        check: true
      }, {
        key: 'show_tags',
        name: '标签',
        icon: <CheckOutlined />,
        check: false
      }, {
        key: 'show_part',
        name: '摘要',
        icon: <CheckOutlined />,
        check: false
      }, {
        key: 'show_image',
        name: '缩略图',
        icon: <CheckOutlined />,
        check: false
      },
    ]
  }, {
    key: 'tags',
    name: '按标签显示',
    icon: '',
    check: false,
    usage: 'checkbox',
    hide: false,
    children: []
  }
]

const initListNoteRightMenu = [
  'new note',
  'setting',
  "delete",
  // 'copyStaticUrl'
]


const testNoteList = [
  {
    key: '1',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '2',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '3',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '4',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '5',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '6',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '7',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '8',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '9',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '11',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  },
  {
    key: '112',
    title: 'title1',
    time: 'time',
    tags: ['11', '22'],
    image: '',
    part: 'sdfsdfsdf'
  }
]


export default function NoteList() {
  /**
   * rule  组件内更新全局性的变量用 Store
   */
  // state that should be gotten from server
  const [containerW] = useMemo(() => {
    return [Store.getState().markdownSize.left]
  }, [])
  // console.log('contianer', containerW)
  const [nowBook, setNowBook] = useState('')
  const [allBooks, setAllBooks] = useState(Store.getState().books.books)

  const [nowNote, setNowNote] = useState('')
  const [allNotes, setAllNotes] = useState(Store.getState().notes.notes)

  const operaBarHeight = 32
  const [listAreaHeight, setListAreaHeight] = useState<number>(
    window.innerHeight - Store.getState().markdownSize.top - operaBarHeight)

  // global events
  const handleSub = () => {
    let store_state = Store.getState()
    // 高度
    let newHeight = window.innerHeight - store_state.markdownSize.top - operaBarHeight
    if (newHeight !== listAreaHeight) {
      setListAreaHeight(newHeight)
    }

    // books
    setAllBooks(store_state.books.books)
    setNowBook(store_state.books.nowBook)

    // notes
    setAllNotes(store_state.notes.notes)
    setNowNote(store_state.notes.nowNote)

  }

  // in and out
  useEffect(() => {
    let unsub1 = Store.subscribe(handleSub)

    handleGetBooks()
    return () => {
      unsub1()
    }
  }, [])

  useEffect(() => {
    let nowBook_ = Store.getState().books.nowBook
    // @ts-ignore
    let newBook = allBooks.find((item) => item.key === nowBook_)
    if (newBook === undefined) {
      if (allBooks.length === 0) {
        // console.log('76hf')
        // @ts-ignore
        Store.dispatch(setBooksSwapNow(''))
      } else {
        // console.log(allBooks[0].key, 'sdf')
        // @ts-ignore
        Store.dispatch(setBooksSwapNow(allBooks[0].key))
      }
    }
  }, [allBooks])

  useEffect(() => {
    // console.log('nowBook', nowBook)
    if (nowBook === '' || nowBook === undefined) {
      // setAllNotes([])
      setRenderNowBook([])
      // @ts-ignore
      Store.dispatch(setNotesUpdate([]))
      return
    }
    handleGetNotes(nowBook)
    setRenderNowBook([nowBook])
  }, [nowBook])

  useEffect(() => {
    // @ts-ignore
    let newNote = allNotes.find(item => item.key === nowNote)
    if (newNote === undefined) {
      if (allNotes.length === 0) {
        // setNowNote('')
        // @ts-ignore
        Store.dispatch(setNotesSwapNow(''))
      } else {
        // setNowNote(allNotes[0].key)
        // @ts-ignore
        Store.dispatch(setNotesSwapNow(allNotes[0].key))
      }
    }

    let tags = []
    for (let i of allNotes) {
      tags.push(...i.tags)
    }
    tags = Array.from(new Set(tags))
    let newChildren = tags.map(item => ({ key: 'tags_' + item, name: item, check: false, icon: <CheckOutlined /> }))
    // console.log(notesFilterDataRef)
    // @ts-ignore
    let newfilter = [...notesFilterData]
    let tmp_ = newfilter.find(item => item.key === 'tags')
    if (!tmp_) {
      console.log('dangerous error!!!')
      return
    }

    for (let i of newChildren) {
      for (let j of tmp_.children) {
        if (j.key === i.key) {
          i.check = !!j.check
          break
        }
      }
    }

    tmp_.children = newChildren

    setNotesFilterData(newfilter)
    setNotesFilterDataRender(newfilter)
  }, [allNotes])

  useEffect(() => {
    handleGetNoteValue(Store.getState().books.nowBook, nowNote)
    setRenderNowNote(nowNote)
    // console.log(Store.getState().books.nowBook, 'f7hg')
  }, [nowNote])

  // server : fetch
  //-- books
  const handleGetBooks = useCallback(() => {

    // let newBooks = [
    //   {
    //     key: '111',
    //     name: 'name',
    //     dsc: 'dsc'
    //   },
    //   {
    //     key: '1222',
    //     name: 'name',
    //     dsc: 'dsc'
    //   },
    //   {
    //     key: '333',
    //     name: 'name',
    //     dsc: 'dsc'
    //   }
    // ]

    myAxios({
      method: 'post',
      url: '/books',
      data: {
        type: 'get'

      }
    }).then(function (response) {
      // console.log(response, 'response');
      if (response.data['status'] !== 0) {
        console.log('error handleGetBooks')
        return
      }
      let newBooks = response.data['books']
      // @ts-ignore
      newBooks = newBooks.filter(item=>item.key!=='')
      // @ts-ignore
      Store.dispatch(setBooksUpdate(newBooks))
      // console.log(newBooks, 'newbooks')

    })
  }, [])

  //-- notes
  const handleGetNotes = useCallback((bookKey) => {
    if (bookKey === undefined) {
      return
    }
    //
    // let newNotes = [
    //   { key: '190', title: '1', createTime: 'ffff', modifyTime: 'fff', part: '89', tags: ['11'] }
    // ]
    myAxios.post('/notes', { type: 'get', bookKey }).then(response => {
      if (response.data['status'] !== 0) {
        console.log('error handleGetNotes', bookKey)
        return
      }
      let newNotes = response.data['notes']
      // @ts-ignore
      newNotes = newNotes.filter(item=>item.key!=='')
      // console.log('new notes:', newNotes)
      // @ts-ignore
      Store.dispatch(setNotesUpdate(newNotes))

    })

  }, [])
  //-- note value
  const handleGetNoteValue = useCallback((bookKey, noteKey) => {
    if (bookKey === '' || noteKey === '' || bookKey === undefined || noteKey === undefined) {
      Store.dispatch(setEditValue(''))
      // @ts-ignore
      Store.dispatch(setEditSourceUpdate([]))
      return
    }

    myAxios.post('/value', { type: 'get', bookKey, noteKey }).then(response => {
      if (response.data['status'] !== 0) {
        console.log('error handleGetNoteValue')
        return
      }
      let value_ = response.data['value']
      if (value_ !== Store.getState().editValue.value) {
        Store.dispatch(setEditValue(value_))
      }
    })
    myAxios.post('/source', { type: 'get', bookKey, noteKey }).then(response => {
      if (response.data['status'] !== 0) {
        console.log('error handleGetSource', response.data)
        return
      }
      let value_ = response.data['sources']
      // @ts-ignore
      Store.dispatch(setEditSourceUpdate(value_))
      // console.log('source:', response.data)
    })

  }, [nowBook])

  // state for modal
  const [renderNowBook, setRenderNowBook] = useState<Array<string>>([])
  const [renderNowNote, setRenderNowNote] = useState<string>('')
  const [showBookSetter, setShowBookSetter] = useState(false)
  const [showNoteSetter, setShowNoteSetter] = useState<NoteSetterProps>(
    { type: 'none', name: 'name', tags: ['111', '222'], key: '11' })

  //state for render, sort, filter, true ntoes data
  const [renderedNotes, setRenderedNotes] = useState([])
  const [searchKW, setSearchKW] = useState('')
  const notesFilterDataRef = createRef()
  const [notesFilterData, setNotesFilterData] = useState<Array<ListFielterDataItem>>(initFilterData)
  const [notesFilterDataRender, setNotesFilterDataRender] = useState<Array<ListFielterDataItem>>(initFilterData)

  useEffect(() => {
    let item_tags = notesFilterData.find(item => item.key === 'tags')
    if (!item_tags) {
      console.log('dangrous error !!')
      return
    }

    let tags: string[] = []
    for (let i of item_tags.children) {
      if (i.check === true) {
        tags.push(i.name)
      }
    }

    // console.log(searchKW)
    let searchKW_ = searchKW.replace(/\\/g, '')
    let newNotes = allNotes.filter(item => {
      if (searchKW_ !== '' && item.title.search(searchKW_) === -1) {
        return false
      }
      if (tags.length === 0) {
        return true
      }
      for (let i of item.tags) {
        for (let j of tags) {
          if (i === j) {
            return true
          }
        }
      }
      return false
    })

    let item_sortKey = notesFilterData.find(item => item.key === 'sort')
    if (!item_sortKey) {
      console.log('dangrous error !!')
      return
    }
    let sort_key = item_sortKey.children.find(item => item.check)
    if (!sort_key) {
      console.log('dangrous error !!')
      return
    }

    let item_r_sort = notesFilterData.find(item => item.key === 'rsort')
    let r_sort = item_r_sort?.children[0].check
    // children: [
    //   {
    //     key: 'sort_name',
    //     name: '名称',
    //     icon: <CheckOutlined />,
    //     check: true
    //   }, {
    //     key: 'sort_createTime',
    //     name: '创建时间',
    //     icon: <CheckOutlined />,
    //     check: false
    //   }, {
    //     key: 'sort_modifyTime',
    //     name: '修改时间',
    //     icon: <CheckOutlined />,
    //     check: false
    //   },
    // ]
    switch (sort_key.key) {
      case 'sort_name':
        newNotes = newNotes.sort((a, b) => (a.title > b.title) ? 1 : 0)
        break;
      case 'sort_createTime':
        newNotes = newNotes.sort((a, b) => (a.createTime > b.createTime) ? 1 : 0)
        break;
      case 'sort_modifyTime':
        newNotes = newNotes.sort((a, b) => (a.modifyTime > b.modifyTime) ? 1 : 0)
        break;

      default:
        console.log('sdfsre69')
        break;
    }

    // console.log(r_sort, 'r_sort')
    if (r_sort) {
      // console.log('exe rev')
      newNotes = newNotes.reverse()
    }

    // @ts-ignore
    setRenderedNotes(newNotes)

  }, [searchKW, notesFilterData, allNotes])

  // 处理子组件的事件 --
  const handleBook = useCallback((e) => {
    // console.log(e, allBooks)
    switch (e.type) {
      case TYPE_BOOKMANAGER_BOOKS:
        let newBooks = e.books
        myAxios.post('/books', { type: 'update', newBooks }).then(response => {
          if (response.data['status'] !== 0) {
            return
          }
          // @ts-ignore
          Store.dispatch(setBooksUpdate(newBooks))
        })

        break;
      case TYPE_BOOKMANAGER_NOWBOOK:
        console.log('here', e.nowBook)
        // @ts-ignore
        Store.dispatch(setBooksSwapNow(e.nowBook.key))
        break

      default:
        break;
    }
    setShowBookSetter(false)
  }, [])

  const handleNoteList = (e: string) => {
    // setNowNote(e)
    if (e === nowNote) {
      return
    } else {
      // @ts-ignore
      Store.dispatch(setEditValueModified(false))
    }

    //  这个步骤是不可能的
    if (nowBook === '' || nowNote === '' || nowBook === undefined || nowNote === undefined) {
      Store.dispatch(setEditValue(''))
      // @ts-ignore
      Store.dispatch(setEditSourceUpdate([]))
    }
    let newNotes = [...allNotes]
    // @ts-ignore
    let nowNote_ = newNotes.find(item => item.key === nowNote)
    if (nowNote_ === undefined) {
      console.log('dangerous error !!!')
      return
    }
    let shouldModify = Store.getState().editValue.modified
    if (shouldModify) {
      nowNote_['modifyTime'] = FormatDate('"yyyy-MM-dd HH:mm:ss"')
    }

    myAxios.post('/value',
      {
        type: 'set',
        bookKey: nowBook,
        noteKey: nowNote,
        value: Store.getState().editValue.value,
        source: shouldModify ? nowNote_ : undefined
      }
    ).then((response) => {
      if (response.data['status'] !== 0) {
        console.log('save error', response)
      }
      if (shouldModify) {
        // @ts-ignore
        Store.dispatch(setNotesUpdate(newNotes))
      }
    }).catch(response => console.log(response))
    // @ts-ignore
    Store.dispatch(setNotesSwapNow(e))
  }

  // @ts-ignore
  const handleNoteSetter = (event: ItemNote) => {
    let tmp_index = allNotes.findIndex(item => item.key === event.key)
    // @ts-ignore
    let tmp_all;
    if (tmp_index === -1) {
      // new note
      tmp_all = [event, ...allNotes]
    } else {
      tmp_all = [...allNotes]
      // 指定修改内容
      tmp_all[tmp_index].tags = event.tags
      tmp_all[tmp_index].title = event.title
    }

    myAxios.post('/notes', { type: 'update', bookKey: nowBook, newNotes: tmp_all }).then(response => {
      if (response.data['status'] !== 0) {
        console.log('update notes eror', response.data['status'])
        return
      }
      // @ts-ignore
      console.log(tmp_all, 'newntoes')
      // @ts-ignore
      Store.dispatch(setNotesUpdate(tmp_all))
      // setAllNotes(tmp_all)

    })

    //------------------------------------------- fetch notes

  }

  // @ts-ignore
  const handleFilter = (e) => {
    // console.log(e)
    setNotesFilterData([...e])
  }

  // @ts-ignore
  const handleNoteListRightMenu = (selectedKey, operation) => {
    // console.log('fsdfsd', selectedKey)
    let tmp_index = allNotes.findIndex(item => item.key === selectedKey)

    // console.log(selectedKey, operation, 'right', tmp_index)
    switch (operation) {
      case 'delete':
        // console.log('delete')
        if (tmp_index === -1) {
          return
        }
        let new_all = [...allNotes]
        new_all.splice(tmp_index, 1)

        if (nowBook === '') {
          return
        }
        // @ts-ignore
        myAxios.post('/notes', { type: 'update', bookKey: nowBook, newNotes: new_all }).then(response => {
          if (response.data['status'] !== 0) {
            return
          }
          // @ts-ignore
          Store.dispatch(setNotesUpdate(new_all))
        })
        //------------------------------------------- fetch notes
        break;

      case 'setting':
        if (tmp_index === -1) {
          return
        }
        setShowNoteSetter({
          type: 'set', name: allNotes[tmp_index].title,
          tags: allNotes[tmp_index].tags, key: allNotes[tmp_index].key
        })
        break
      case 'new note':
        setShowNoteSetter({
          type: 'make', name: '未命名笔记', tags: [],
          key: new Date().getTime().toString()
        })
        break
      case 'copyStaticUrl':
        // drop
        // console.log(nowBook+'/'+selectedKey, 'sel')
        // CopyToClipBoard('/#/'+nowBook+'/'+selectedKey+'/index.html')
        break
      default:
        break;
    }

  }

  return (
    <div className={style.container}>
      <div
        style={{ display: 'flex', alignItems: "center", justifyContent: "space-around", padding: "0 5px 0 5px" }}>
        <Button icon={<SettingOutlined />} style={{ border: 'none' }} onClick={() => setShowBookSetter(true)}></Button>
        <Input style={{ marginLeft: '5px' }} value={searchKW} onChange={(e) => setSearchKW(e.target.value)} />
        <Dropdown
          overlay={<ListFilter data={notesFilterDataRender} onRef={notesFilterDataRef} cb={handleFilter} />}
        >
          <Button icon={<FilterOutlined />} >
          </Button>
        </Dropdown>
      </div>
      <div className={style.scroll_container} style={{ height: listAreaHeight, width: containerW + 'px' }}>
        <MyList
          // @ts-ignore
          sourceData={renderedNotes} cb={handleNoteList} activeItem={renderNowNote}
          rightMenu={initListNoteRightMenu} rightMenuCb={handleNoteListRightMenu}
        />
      </div>
      <BookManager
        show={showBookSetter} cb={handleBook}
        dataSource={allBooks} defaultSelectedRowKeys={renderNowBook}
      />
      <NoteSetter usage={showNoteSetter} cb={handleNoteSetter} />
    </div>
  )
}

