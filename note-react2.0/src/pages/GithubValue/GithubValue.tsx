import MDEditor from '@uiw/react-md-editor';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myAxios from '../../sokect/myAxios';
import style from './GithubValue.module.css'
import Store from '../../redux/store';


export default function GithubValue() {
  const [nowNote, setnowNote] = useState('')
  const [value, setvalue] = useState('')
  const [quote, setquote] = useState('')
  const nav_ = useNavigate()

  useEffect(() => {
    let sub1 = Store.subscribe(() => {
      let github = Store.getState().github

      if(Store.getState().github.state!=='notes'){
        nav_('/'+github.state)
      }

      if(github.data[github.nowBook]===undefined){
        nav_('/books')
        return
      }
      if(github.data[github.nowBook].children[github.nowNote]===undefined){
        nav_('/notes')
        return
      }
      if(github.nowNote===nowNote){
        return
      }
      setnowNote(github.nowNote)
      
      let rlt = ['\n']
      for(let i of Object.values(github.data[github.nowBook].children[github.nowNote].children)){
          rlt.push(`[${i.title}]: ${i.type==='outer url'?i.url:i.gitUrl} (${i.title})`)
      }
      setquote(rlt.join('\n'))

      myAxios.get('/'+github.nowBook+'/'+github.nowBook).then(response=>{
        console.log(response)
        setvalue(response.data)
      }).catch(response=>{
        // console.log(response)
        setvalue('error')
      })
    })

    return () => {
      sub1()
    }
  }, [])


  return (
    <div className={style.contianer}>
      <MDEditor.Markdown source={value+quote} />
    </div>
  );
}
