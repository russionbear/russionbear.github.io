import { useState, useRef, useEffect, useCallback, useMemo, createRef } from "react";
// import { Provider } from "react-redux";
import Store from "../../redux/store";
import MDEditor, { commands, TextState, TextAreaTextApi, ICommand, fullscreen } from '@uiw/react-md-editor';
import katex from 'katex';
import mermaid from "mermaid";
import { setMrakdownSize, setEditValue, setEditSourceShow, setEditValueModified, setMarkdownShowType } from '../../redux/actions'
import style from './Markdown.module.css'
import myAxios from "../../sokect/myAxios";
import {
  InboxOutlined,
  FullscreenOutlined,
  ProfileOutlined,
  EditOutlined,
  EyeOutlined,
  MergeCellsOutlined
} from '@ant-design/icons';
import { Button, Space, Radio } from "antd";


const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36);
const Code = ({ inline, children = [], className, ...props }: any) => {
  const demoid = useRef(`dome${randomid()}`);
  const code = getCode(children);
  const demo = useRef(null);
  useEffect(() => {
    if (demo.current) {
      try {
        const str = mermaid.render(demoid.current, code, () => null, demo.current);
        // @ts-ignore
        demo.current.innerHTML = str;
      } catch (error) {
        // @ts-ignore
        demo.current.innerHTML = error;
      }
    }
  }, [code, demo]);

  if (
    typeof code === "string" && typeof className === "string" &&
    /^language-mermaid/.test(className.toLocaleLowerCase())
  ) {
    return (
      <code ref={demo}>
        <code id={demoid.current} style={{ display: "none" }} />
      </code>
    );
  }

  const txt = children[0] || '';
  if (inline) {
    if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
      const html = katex.renderToString(txt.replace(/^\$\$(.*)\$\$/, '$1'), {
        throwOnError: false,
      });
      return <code dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <code>{txt}</code>;
  }
  if (
    typeof txt === 'string' &&
    typeof className === 'string' &&
    /^language-katex/.test(className.toLocaleLowerCase())
  ) {
    const html = katex.renderToString(txt, {
      throwOnError: false,
    });
    return <code dangerouslySetInnerHTML={{ __html: html }} />;
  }
  // return <code className={String(className)}>{txt}</code>;
  return <code className={String(className)}>{children}</code>;
};

// @ts-ignore
const getCode = (arr = []) => arr.map((dt) => {
  if (typeof dt === "string") {
    return dt;
  }
  // @ts-ignore
  if (dt.props && dt.props.children) {
    // @ts-ignore
    return getCode(dt.props.children);
  }
  return false;
}).filter(Boolean).join("");

let CAN_UNDO = false


const resButton: ICommand = {
  name: 'title3',
  keyCommand: 'title3',
  buttonProps: { 'aria-label': 'Insert title3' },
  icon: (
    <InboxOutlined />
  ),
  execute: (state: TextState, api: TextAreaTextApi) => {
    // @ts-ignore
    Store.dispatch(setEditSourceShow(true))
  },
};


export default function Markdown() {
  const [value, setValue] = useState('');
  const [quoteVlue, setquoteVlue] = useState('')
  let _editSzie = Store.getState().markdownSize
  const [editSize, setEditSize] = useState({ h: _editSzie.markdownHeight, ew: _editSzie.editWidth, vw: _editSzie.viewWidth })
  const [showType, setshowType] = useState({ edit: true, view: true })
  const [toolbarHeight] = useState(_editSzie.toolbarHeight)
  const [can_undo, setcan_undo] = useState(0)
  // const leftViewRef = createRef()
  // const rightViewRef = createRef()


  const subResizeEditSize = useCallback(() => {
    let _editSzie = Store.getState().markdownSize
    setEditSize({ h: _editSzie.markdownHeight, ew: _editSzie.editWidth, vw: _editSzie.viewWidth })
  }, [])

  useEffect(() => {

    let unsub1 = Store.subscribe(subResizeEditSize)
    let unsub2 = Store.subscribe(sendValue)
    let unsub3 = Store.subscribe(() => {
      setshowType({ edit: Store.getState().markdownSize.editShow, view: Store.getState().markdownSize.viewShow })
      // if(value!==Store.getState().editValue.value){
      //   console.log("vlaue changed")
      setValue(Store.getState().editValue.value)
      setquoteVlue(Store.getState().editValue.quoteValue)
      if (!Store.getState().editValue.modified) {
        // CAN_UNDO = 0
        setcan_undo(0)
      }
      // }
      // console.log(Store.getState().markdownSize)

    })

    return () => {
      unsub1()
      unsub2()
      unsub3()
    }
  }, [])

  const sendValue = useCallback(() => {
    Store.getState().editValue.getValueFunc(value)
  }, [value])

  // @ts-ignore
  const handleChange = (value_) => {

    // setValue(value_)

    Store.dispatch(setEditValue(value_))
    if (CAN_UNDO) {
      CAN_UNDO = false
      return
    }
    // CAN_UNDO ++
    setcan_undo(can_undo + 1)
    // console.log('modifed', can_undo)
    // @ts-ignore
    Store.dispatch(setEditValueModified(true))
  }

  // @ts-ignore
  const handleKeydown = (e) => {
    // console.log(e)
    switch (e.key.toLocaleLowerCase()) {
      case 's':
        if (e.ctrlKey) {
          let bookKey = Store.getState().books.nowBook
          let noteKey = Store.getState().notes.nowNote
          if (bookKey === '' || noteKey === '') {
            return
          }
          myAxios.post('/value', { type: 'set', bookKey, noteKey, value }).then(response => {
            if (response.data['status'] !== 0) {
              console.log('save note error', response.data['status'])
              return
            }
          })
        }
        break;
      case 'z':
        // console.log('can undo', can_undo)
        if (e.ctrlKey) {
          if (can_undo === 0) {
            e.preventDefault()
          } else {
            CAN_UNDO = true
            setcan_undo(can_undo - 1)
          }
        }
        break
      default:
        break;
    }

  }

  const toolbar = useMemo(() => {

  }, [])

  // const handleScrollLeft = useCallback((e)=>{
  //   console.log(e, 'left', leftViewRef)
  //   // commands.s
  // }, [])

  // const handleScrollRight = useCallback((e)=>{
  //   console.log(e, 'right')
  // }, [])

  return (
    <div className={style.body}>
      <div className={style.toolbar} style={{ height: toolbarHeight + 'px' }}>
        <Space>
          <Button type="primary" ghost icon={<ProfileOutlined />}
            // @ts-ignore
            onClick={() => Store.dispatch(setEditSourceShow(true))}
          />
        </Space>
        <Space>
          <Radio.Group buttonStyle="solid" size="small" onChange={(e) => {
            switch (e.target.value) {
              case 'edit':
                // @ts-ignore
                Store.dispatch(setMarkdownShowType({ editShow: true, viewShow: false }))
                break;
              case 'view':
                // @ts-ignore
                Store.dispatch(setMarkdownShowType({ editShow: false, viewShow: true }))
                break;

              case 'both':
                // @ts-ignore
                Store.dispatch(setMarkdownShowType({ editShow: true, viewShow: true }))
                break;

              default:
                break;
            }
          }} defaultValue="both" optionType="button">
            <Radio.Button value="edit"><EditOutlined /></Radio.Button>
            <Radio.Button value="view"><EyeOutlined /></Radio.Button>
            <Radio.Button value="both"><MergeCellsOutlined /></Radio.Button>
          </Radio.Group>
          <Button type="primary" ghost icon={<FullscreenOutlined />}
            // @ts-ignore
            onClick={() => Store.dispatch(setMarkdownShowType({ fullscreen: !Store.getState().markdownSize.fullscreen }))}
          ></Button>
        </Space>
      </div>
      <div className={style.container}>
        {showType.edit ? <MDEditor
          className={style.markdown}
          onChange={handleChange}
          textareaProps={{
            placeholder: "Please enter Markdown text",
          }}
          onKeyDown={handleKeydown}
          style={{ width: editSize.ew }}
          height={editSize.h}
          minHeight={editSize.h}
          maxHeight={editSize.h}
          toolbarHeight={toolbarHeight}
          value={value}
          visiableDragbar={true}
          overflow={true}
          preview="edit"
          hideToolbar={true}
          previewOptions={{
            components: {
              code: Code
            }
          }}
        /> : ''}

        {showType.view?<MDEditor
          height={editSize.h}
          minHeight={editSize.h}
          maxHeight={editSize.h}
          value={value + quoteVlue}
          style={{ width: editSize.vw }}
          preview="preview"
          hideToolbar={true}
          toolbarHeight={toolbarHeight}
          className={style.markdown}
        >

        </MDEditor>:''}
        
      </div>
    </div>
  );
}
