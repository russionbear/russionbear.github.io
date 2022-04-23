import { Drawer, Radio, message, Select, Upload } from 'antd'
import { ItemSource } from '../../redux/actions'
import React, { useState, useRef, useContext, useEffect, useMemo, useCallback } from 'react'
import { Button, Space, Input, Table, Form, InputRef, Popconfirm } from 'antd'
import { FormInstance } from 'antd/lib/form';
import {
  TYPE_EDIT_SOURCE_UPDATE,
  ItemBook as DataType, // 
  setEditSourceUpdate,
  setEditSourceShow
} from '../../redux/actions';
import copy from 'copy-to-clipboard';
import { InboxOutlined } from '@ant-design/icons';
import myAxios from '../../sokect/myAxios';
import Store from '../../redux/store';
// import { useLocation, useNavigate } from 'react-router-dom';

const { Dragger } = Upload;

const testData: Array<ItemSource> = [
  {
    sourceId: '1111',
    type: 'outer url',
    title: 'url',
    size: 234234,
    url: 'sdfser235sf',
    gitUrl: ''
  },
  {
    sourceId: 'fr23222',
    type: 'music',
    title: 'muci',
    size: 234234,
    url: '',
    gitUrl: ''
  },
  {
    sourceId: 'fr21233',
    type: 'image',
    title: 'image',
    size: 234234,
    url: '',
    gitUrl: ''
  },
  {
    sourceId: 'fr22f3',
    type: 'video',
    title: 'vieo',
    size: 234234,
    url: '',
    gitUrl: ''
  },
]


const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

// interface DataType {
//     key: React.Key;
//     name: string;
//     dsc: string
// }

/**
 * dataIndex couldn't be 'operation'
 */
const colunmsSetting = [
  {
    title: 'title',
    dataIndex: 'title',
    editable: true,
    ellipsis: true
  }, {
    title: 'type',
    dataIndex: 'type',
    ellipsis: true,
    editable: true,
  }, {
    title: 'from',
    dataIndex: 'url',
    ellipsis: true,
    copyable: true
  }, {
    title: 'size',
    dataIndex: 'size',
    ellipsis: true
  }, {
    title: 'gitUrl',
    dataIndex: 'gitUrl',
    ellipsis: true,
    copyable: true
  }
]

const itemFormat: ItemSource = {
  sourceId: '1111',
  type: 'outer url',
  title: 'url',
  size: 234234,
  url: 'sdfser235sf',
  gitUrl: ''
}

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof ItemSource;
  record: ItemSource;
  handleSave: (record: ItemSource) => void;
  handleView: (record: ItemSource) => void
}

// @ts-ignore
const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  handleView,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    // console.log('hihi7645', title, children)
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      // console.log('values', values, dataIndex)
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;
  if (title === 'type') {
    childNode = <Button onClick={() => handleView(record)}>{children}</Button>
  }
  // @ts-ignore
  else if (restProps && restProps['copyable']) {
    // @ts-ignore
    if (children.length && children[1] !== '') {

      // @ts-ignore
      childNode = <Button type='text' onClick={() => { copy(children[1]); message.success('copied', 1.2) }}>{children}</Button>
    }
  }
  else if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        // @ts-ignore
        name={title}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const components = {
  body: {
    row: EditableRow,
    cell: EditableCell,
  },
};

export default function SourceManager(
  // props: {
  //   show?: boolean
  // }
) {
  const [showModal, setShowModal] = useState(false)
  const [dataSource, setDataSource] = useState<Array<ItemSource>>([])
  const [selectedRowKeys, setselectedRowKeys] = useState<Array<string>>([])

  const [addSourceType, setaddSourceType] = useState<'music' | 'image' | 'video' | 'outer url'|'local url'>('image')
  // const addSourceUrlInput = useRef<InputRef>(null)
  const [addSourceInputV, setaddSourceInputV] = useState('')
  const [dropFileList] = useState([])
  // const location = useNavigate()

  useEffect(() => {
    let sub1 = Store.subscribe(() => {
      setDataSource(Store.getState().editValue.source)
      // console.log(Store.getState().editValue.showSource , 'show source')
      setShowModal(Store.getState().editValue.showSource)
      // console.log(location, 'loc')
    })
    return () => {
      sub1()
    }
  }, [])


  const columns = colunmsSetting.map(col => {
    // @ts-ignore
    if (!col.editable && !col.copyable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: ItemSource) => ({
        record,
        // @ts-ignore
        editable: col.editable,
        // dataIndex: col.dataIndex,
        // @ts-ignore
        dataIndex: col.sourceId,
        title: col.title,
        // @ts-ignore
        copyable: col.copyable,
        handleSave: handleSave,
        handleView: handleView
      }),
    };
  });

  const handleView = () => { }

  const handleDelete = () => {
    // console.log(selectedRowKeys)
    let bookKey = Store.getState().books.nowBook
    let noteKey = Store.getState().notes.nowNote
    if(bookKey===''||noteKey===''){
      return
    }
    const newDataSources = dataSource.filter(item=>selectedRowKeys.indexOf(item.sourceId)===-1)
    myAxios({
      method: 'post',
      url: '/source',
      data: {
        type: 'delete',
        deleteIds: selectedRowKeys,
        bookKey, noteKey
      }
    }).then(response=>{
      if(response.data['status']!==0){
        console.log(response.data)
        return
      }
      // @ts-ignore
      Store.dispatch(setEditSourceUpdate(newDataSources))
    })
  };

  const handleAddUrl = () => {
    let newSource: ItemSource = {
      title: '引用',
      type: addSourceType,
      size: -1,
      sourceId: new Date().getTime().toString(),
      url: addSourceInputV,
      gitUrl: ''
    }
    setaddSourceInputV('')
    let nowBook = Store.getState().books.nowBook
    let nowNote = Store.getState().notes.nowNote
    
    if (nowBook === '' || nowNote === '') {
      return
    }
    if (addSourceType === 'outer url'||addSourceType==='local url') {
      myAxios({
        url: '/source',
        method: 'post',
        data: {
          type: 'add',
          bookKey: nowBook,
          noteKey: nowNote,
          source: newSource
        }
      }).then(
        request => {
          if (request.data['status'] === 0) {
            console.log(request.data, 'gitUrl23')
            newSource['gitUrl'] = request.data['gitUrl']
            // @ts-ignore
            Store.dispatch(setEditSourceUpdate([newSource, ...dataSource]))
          }
        }
      )
    }
    else {
      myAxios({
        url: '/source',
        method: 'post',
        // headers:{'Content-Type':'multipart/form-data'},
        data: {
          type: 'uploadByUrl',
          bookKey: nowBook,
          noteKey: nowNote,
          source: newSource
        }
      }).then(
        request => {
          if (request.data['status'] === 0) {
            newSource['gitUrl'] = request.data['gitUrl']
            newSource.size = request.data['size']
            // @ts-ignore
            Store.dispatch(setEditSourceUpdate([newSource, ...dataSource]))
          }
        }
      )
    }
  }

  const handleSave = (row: ItemSource) => {
    let bookKey = Store.getState().books.nowBook
    let noteKey = Store.getState().notes.nowNote
    if(bookKey===''||noteKey===''){
      return
    }
    console.log('modify')
    myAxios({
      url: '/source',
      method: 'post',
      data: {
        type: 'update',
        sourceId: row.sourceId,
        newSource: row,
        bookKey,noteKey
      }
    }).then(response=>{
      if(response.data['status']!==0){
        console.log(response.data)
        return
      }
      const newData = [...dataSource];
      const index = newData.findIndex(item => row.sourceId === item.sourceId);
      const item = newData[index];
      // @ts-ignore
      newData.splice(index, 1, { ...item, ...row });
      // setDataSource(newData)
      // @ts-ignore
      Store.dispatch(setEditSourceUpdate(newData))
    })
  };

  const handleCancel = useCallback(() => {
    // setShowModal(false)
    // @ts-ignore
    Store.dispatch(setEditSourceShow(false))
  }, [])

  const rowSelection = useMemo(() => {
    return {
      onChange: (selectedRowKeys_: React.Key[], selectedRows: ItemSource[]) => {
        // console.log(selectedRowKeys_)
        // let newRlt = selectedRowKeys_.filter(item=>item!==undefined)
        // @ts-ignore
        setselectedRowKeys(selectedRowKeys_)
      },
    }
  }, []);


  const draggerProps = {
    name: 'file',
    multiple: true,
    fileList: dropFileList,
    // @ts-ignore
    customRequest: e => {
      // console.log(e)
      // return
      let file1 = e.file
      let formdata = new FormData()
      // console.log(formdata)
      // return
      let nowBook = Store.getState().books.nowBook
      let nowNote = Store.getState().notes.nowNote
      if (nowBook === '' || nowNote === '') {
        return
      }
      formdata.append("upload", file1)
      formdata.append("type", 'add')
      formdata.append("bookKey", nowBook)
      formdata.append("noteKey", nowNote)

      let sourceId = file1.uid;
      let tmp = file1.name.split('.')
      if(tmp.length===0){
        message.info("上传文件资源", 0.8)
      }else{
        sourceId = sourceId + '.' + tmp[tmp.length-1]
      }
      let newSource: ItemSource = {
        title: '引用',
        type: addSourceType,
        size: file1.size,
        sourceId: sourceId,
        url: '',
        gitUrl: ''
      }
      formdata.append('source', JSON.stringify(newSource))
      myAxios({
        url: '/source',
        method: 'post',
        // headers:{'Content-Type':'multipart/form-data'},
        data: formdata
      }).then(
        request => {
          if(request.data['status']!==0){
            console.log('error', request.data)
            return
          }
          newSource['gitUrl'] = request.data['gitUrl']
          // @ts-ignore
          Store.dispatch(setEditSourceUpdate([newSource, ...dataSource]))
        }
      )
    },
  }

  return (
    <Drawer
      title="source manager"
      width={640}
      placement="right"
      closable={false}
      onClose={handleCancel}
      visible={showModal}
    >
    <Space>
      <Select value={addSourceType} onSelect={setaddSourceType}>
        {["music", 'video', 'outer url', 'image', 'local url'].map(item => <Select.Option key={item}>{item}</Select.Option>)}
      </Select>
      <Input addonBefore={"url"} value={addSourceInputV} onChange={e => setaddSourceInputV(e.target.value)} onPressEnter={handleAddUrl} />
    </Space>
      <div style={{ width: '200px' }}>
        {!(addSourceType === 'outer url'||addSourceType==="local url" )?
          <Dragger {...draggerProps} >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
          </Dragger> : ''}
      </div>
      <Table
        scroll={{ y: '600px' }}
        size="small"
        components={components}
        rowSelection={{ type: "checkbox", ...rowSelection, selectedRowKeys: selectedRowKeys }}
        rowClassName={() => 'editable-row'}
        // bordered
        dataSource={dataSource.map(item=>({...item, key: item.sourceId}))}
        // @ts-ignore
        columns={columns as ColumnTypes}
      />
      <Button onClick={handleDelete}>delete</Button>
    </Drawer>

  )
}


