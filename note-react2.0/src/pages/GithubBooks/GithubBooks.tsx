import { Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import Store from '../../redux/store';
import { useCallback, useEffect, useState } from 'react';
import style from './GithubBooks.module.css';
import { setGithubState } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

export default function GithubBooks() {
  
  const [books, setbooks] = useState(Object.values(Store.getState().github.data))

  useEffect(() => {
    let sub1 = Store.subscribe(() => {
      setbooks(Object.values(Store.getState().github.data))
    })

    return () => {
      sub1()
    }
  }, [])

  const handleClidk = useCallback(
    (e) => {
      Store.dispatch(setGithubState('notes', e.target.dataset.key))
    },
    [],
  )
  


  return (
    <div className={style.body}>
      {books.length === 0 ? <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
      /> : books.map(item=>
      <div className={style.item} key={item.key} onClick={handleClidk} data-key={item.key}>
        <h4>{item.name}</h4>
        <p>{item.dsc}</p>
        </div>
        )}
    </div>
  )
}
