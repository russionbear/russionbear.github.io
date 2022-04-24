import MDEditor from '@uiw/react-md-editor';
import { Key, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { webAxios } from '../../sokect/myAxios';
import style from './GithubValue.module.css'
import Store from '../../redux/store';
import { setGithubState } from '../../redux/actions';
import { message, Spin } from 'antd';
import { MessageType } from 'antd/lib/message';


let MessageKey = 'ju7bf59kg5g09'

export default function GithubValue() {
  const [value, setvalue] = useState('')
  const [quote, setquote] = useState('')
  const loc = useLocation()

  useEffect(() => {

    let sub1 = Store.subscribe(() => {
      let github = Store.getState().github

      if (github.data[github.nowBook] === undefined || github.data[github.nowBook].children[github.nowNote] === undefined) {
        setvalue('')
        setquote('')

      } else {
        let rlt = ['\n']
        for (let i of Object.values(github.data[github.nowBook].children[github.nowNote].children)) {
          rlt.push(`[${i.title}]: ${i.type === 'outer url' ? i.url : i.gitUrl} (${i.title})`)
        }
        setquote(rlt.join('\n'))

        message.loading({content: 'loading...', key:MessageKey})
        webAxios.get('/' + github.nowBook + '/' + github.nowNote).then(response => {
          // console.log(response)
          setvalue(response.data)
          message.success({content: '', key: MessageKey, duration:0.8})
        }).catch(response => {
          // console.log(response)
          // setvalue('error')
          message.error({content: '加载失败', key: MessageKey, duration:0.8})
        })

        // setvalue('sldjflskdjf  \nsdjflskdjfslkdf\nsdlfjsdlkfjsdkljfskldfjfjfjfjfjfjfjfjfjfjfjfffskdjklfjsldkjfslkdf88888888888jsdlkfjsdkljfskldfjfjfjfjfjfjfjfjfjfjfjfffskdjklfjsldkjfslkdf88888888888888888888jsdlkfjsdkljfskldfjfjfjfjfjfjfjfjfjfjfjfffskdjklfjsldkjfslkdf8888888888888888888888888888888888888888888888888888888')
      }


    })

    if (loc.search.length === 0) {
      setvalue('')
      return
    }
    let params = loc.search.substring(1)
    let args = params.split('&')
    if (args.length < 2) {
      setvalue('')
      return
    }
    let [a, b] = [args[0].substring(2), args[1].substring(2)]

    Store.dispatch(setGithubState('value', a, b))

    return () => {
      sub1()
    }
  }, [])


  return (
    <div className={style.container}>
      <MDEditor.Markdown source={value + quote} className={style.markdown} />
    </div>
  );
}
