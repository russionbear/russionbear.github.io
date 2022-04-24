import { Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import Store from '../../redux/store';
import { useCallback, useEffect, useState } from 'react';
import style from './GithubNotes.module.css';
import { GithubNote, setGithubState } from '../../redux/actions';
import { useLocation, useNavigate } from 'react-router-dom';

export default function GithubBooks() {
  
  const [notes, setnotes] = useState<GithubNote[]>([])
  const loc = useLocation()
  // console.log(loc)

  useEffect(() => {
    let sub1 = Store.subscribe(() => {
      let github = Store.getState().github
      if(github.data[github.nowBook]===undefined){
        setnotes([])
      }else{
        setnotes(Object.values(github.data[github.nowBook].children))
      }
      
    })

    let name = loc.search.substring(3)
    // console.log(name, 'name')
    Store.dispatch(setGithubState('notes', name))

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
