import { useState, useRef, useEffect, useCallback } from "react";
// import { Provider } from "react-redux";
import Store from "../../redux/store";
import MDEditor, { commands, TextState, TextAreaTextApi, ICommand } from '@uiw/react-md-editor';
import katex from 'katex';
import mermaid from "mermaid";
import { setMrakdownSize, setEditValue, setEditSourceShow, setEditValueModified } from '../../redux/actions'
import style from './Markdown.module.css'
import myAxios from "../../sokect/myAxios";
import { 
  InboxOutlined,
  FullscreenOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import { Button, Space } from "antd";


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

let CAN_UNDO = 0


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
  const [toolbarHeight] = useState(_editSzie.toolbarHeight)


  const subResizeEditSize = useCallback(() => {
    let _editSzie = Store.getState().markdownSize
    setEditSize({ h: _editSzie.markdownHeight, ew: _editSzie.editWidth, vw: _editSzie.viewWidth })
  }, [])

  useEffect(() => {

    let unsub1 = Store.subscribe(subResizeEditSize)
    let unsub2 = Store.subscribe(sendValue)
    let unsub3 = Store.subscribe(() => {
      // if(value!==Store.getState().editValue.value){
      //   console.log("vlaue changed")
      setValue(Store.getState().editValue.value)
      setquoteVlue(Store.getState().editValue.quoteValue)
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

  const handleChange = useCallback((value_) => {
    setValue(value_)
    console.log('modifed')
    // @ts-ignore
    Store.dispatch(setEditValueModified(true))
    Store.dispatch(setEditValue(value_))
  }, [])

  const handleKeydown = useCallback((e) => {
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
      // case ''
      default:
        break;
    }

  }, [value])

  return (
    <div className={style.body}>
      <div className={style.toolbar} style={{height: toolbarHeight+ 'px'}}>
        <Space>
          <Button type="primary" ghost icon={<ProfileOutlined />} 
          // @ts-ignore
          onClick={()=>Store.dispatch(setEditSourceShow(true))} 
          />
        </Space>
        <Space>
          {/* <Button type="primary" ghost icon={<FullscreenOutlined />}
          // @ts-ignore
          onClick={()=>Store.dispatch(setEditSourceShow(true))} 
          ></Button> */}
        </Space>
      </div>
      <div className={style.container}>
        <MDEditor
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
        />
        {/* <MDEditor.Markdown
    source={value+quoteVlue} style={{ width: editSize.vw, height: editSize.h}}
    ></MDEditor.Markdown> */}
        <MDEditor
          height={editSize.h}
          minHeight={editSize.h}
          maxHeight={editSize.h}
          value={value + quoteVlue}
          style={{ width: editSize.ew }}
          preview="preview"
          hideToolbar={true}
          toolbarHeight={toolbarHeight}
          className={style.markdown}
        >

        </MDEditor>
      </div>
    </div>
  );
}
