import { createRef, useCallback, useEffect, useState,  } from 'react'
import { Button, Modal, Space, Input, Divider } from 'antd'
import TagSetter from '../../component/TagSetter/TagSetter'
import { ItemNote } from '../../redux/actions'
import { FormatDate } from '../../utils/utils'



export interface NoteSetterProps {
  type: 'make' | 'set' | 'none',
  name: string,
  tags: Array<string>,
  key: string
}

export default function NoteSetter(
  props: {usage?: NoteSetterProps, cb?:Function}
  ) {
  const [title, setTitle] = useState('none')
    const [showModal, setShowModal] = useState(false)
    // const [modalNameShowTag, setModalNameShowTag] = useState(true)
    const [modalNameInputValue, setModalNameInputValue] = useState('')
    const [modalNameTags, setModalNameTags] = useState<Array<string>>([])
    const modalNameTagRef = createRef()

  useEffect(()=>{
    if(!props.usage){
      return
    }
    // console.log('trigger')
    setTitle(props.usage.type)
    setModalNameInputValue(props.usage.name)
    setModalNameTags(props.usage.tags)

    if(props.usage.type!=='none'){
      // console.log('trigger')
      setShowModal(true)
    }

  }, [props.usage])

  const handleSure = useCallback(()=>{
    // // @ts-ignore
    // console.log({name: modalNameInputValue, tags: modalNameTagRef.current.getTags()})
    if(props.cb){
      // @ts-ignore
      let rlt: ItemNote={
        title: modalNameInputValue, 
        // @ts-ignore
        tags: modalNameTagRef.current.getTags(),  
        // @ts-ignore
        key: props.usage.key,
        image: '',
        part: '',
        createTime: FormatDate('"yyyy-MM-dd HH:mm:ss"'),
        modifyTime: FormatDate('"yyyy-MM-dd HH:mm:ss"')
      }
      props.cb(rlt)
    }
    setShowModal(false)
  }, [props.cb, modalNameInputValue, modalNameTagRef])

  return (
    <Modal
      title={{none: '', make: '新建笔记', set: '修改笔记'}[title]}
      closable={false}
      visible={showModal}
      onCancel={() => setShowModal(false)}
      footer={<Space style={{marginBottom: 16}}>
        <Button onClick={handleSure}>确定</Button>,
      </Space>}
    >
      <Space direction="vertical" align="baseline">
        <Input addonBefore="name" value={modalNameInputValue} onChange={e => setModalNameInputValue(e.target.value)} />
        <Space direction="vertical" style={{width: '100%'}}>
          <Divider orientation="left" plain>标签</Divider>
          <TagSetter 
            // @ts-ignore
            onRef={modalNameTagRef} tags={modalNameTags} 
            />
        </Space>
      </Space>
    </Modal>
  )
}
