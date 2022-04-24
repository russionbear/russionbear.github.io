import { Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import Store from '../../redux/store';
import { useCallback, useEffect, useState } from 'react';
import style from './GithubNotes.module.css';
import { GithubNote, setGithubState } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

export default function GithubBooks() {
  
  const [notes, setnotes] = useState<GithubNote[]>([])
  const nav_ = useNavigate()


  useEffect(() => {
    let sub1 = Store.subscribe(() => {
      let github = Store.getState().github
      if(github.data[github.nowBook]===undefined){
        nav_('/books')
        return
      }
      console.log(Object.values(github.data[github.nowBook].children))
      setnotes(Object.values(github.data[github.nowBook].children))
      
      if(Store.getState().github.state!=='notes'){
        nav_('/'+Store.getState().github.state)
        
      }
    })

    return () => {
      sub1()
    }
  }, [])

  const handleClidk = useCallback(
    (e) => {
      Store.dispatch(setGithubState('value', Store.getState().github.nowBook, e.target.dataset.key))
    },
    [],
  )
  


  return (
    <div className={style.body}>
      {notes.length === 0 ? <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
      /> : notes.map(item=>
      <div className={style.item} key={item.key} onClick={handleClidk} data-key={item.key}>
        <h4>{item.title}</h4>
        <p>{item.part}</p>
        <p>{item.modifyTime}</p>
        </div>
        )}
    </div>
  )
}
