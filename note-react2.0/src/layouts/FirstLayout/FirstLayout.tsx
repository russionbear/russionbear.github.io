import SideBar from '../../pages/SideBar/SideBar'
import TopBar from '../../pages/TopBar/TopBar'
import style from './FirstLayout.module.css'
import Markdown from '../../pages/Markdown/Markdown'
import NoteList from '../../pages/NoteList/NoteList'
// import myAxios from '../../sokect/myAxios'
import SourceManager from '../../modals/SourceManger/SourceManager'
import { useCallback, useEffect, useState } from 'react'
import Store from '../../redux/store'
import { INIT_SIDEBAR, setMrakdownSize } from '../../redux/actions'
import MyCanvas from '../../pages/MyCanvas/MyCanvas'
import { Result } from 'antd'
import { useLocation } from 'react-router-dom'
import myAxios from '../../sokect/myAxios'

// const legalKeys = INIT_SIDEBAR.menus.map(item => item.key)
// interface 

// @ts-ignore
export default function FirstLayout() {
  const [showList, setshowList] = useState(Store.getState().markdownSize.showSidebar)
  const [fullscreen, setfullscreen] = useState(Store.getState().markdownSize.fullscreen)
  const loc = useLocation()

  const [nowMenu, setNowMenu] = useState(Store.getState().sidebar.nowValue)

  const resieEditSize = useCallback((e) => {
    // console.log(e, 'e')
    Store.dispatch(setMrakdownSize(e.target.innerWidth, e.target.innerHeight))
  }, [])
  
  useEffect(()=>{

    window.addEventListener('resize', resieEditSize)

    let sub1 = Store.subscribe(()=>{
      let tmp_ = Store.getState().markdownSize
      // console.log(Store.getState().markdownSize.showSidebar, 'double')
      setshowList(tmp_.showSidebar&&!tmp_.fullscreen)
      setNowMenu( Store.getState().sidebar.nowValue)
      setfullscreen(tmp_.fullscreen)
      // console.log(tmp_.showList, tmp_.nowValue)
    })
    return () => {
      window.removeEventListener('resize', resieEditSize)
      sub1()
    }
  }, [])
  const renderSide = () => {
    if (!showList) {
      return <span></span>
    }
    switch (nowMenu) {
      case "books":
        console.log('books')
        return <NoteList></NoteList>
      default:
        return <span></span>
    }
  }

  const renderCenter = () => {
    // console.log('modify')
    switch (nowMenu) {
      case 'books':
        return <Markdown />
      case 'canvas':
        return <MyCanvas></MyCanvas>
      default:
        return <Result
          title="Your operation has been executed"
        />
    }
  }
  return (
    <div className={style.body}>
      {!fullscreen?<TopBar />:<span />}
      <div className={style.center}>
        {!fullscreen?<SideBar />:<span />}
        {/* <NoteList></NoteList> */}
        {renderSide()}
        <div className={style.edit}>
          {/* <Markdown /> */}
          {renderCenter()}
        </div>
        <SourceManager />
      </div>
    </div>
  )
}
