import { Button, Result, Tag } from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import Store from '../../redux/store';
import { useCallback, useEffect, useState } from 'react';
import style from './GithubSource.module.css';
import { GithubNote, ItemSource, setGithubState } from '../../redux/actions';
import { useLocation, useNavigate } from 'react-router-dom';

export default function GithubSource() {
  const [sources, setsources] = useState<ItemSource[]>([])
  const loc = useLocation()

  useEffect(() => {
    
    let sub1 = Store.subscribe(()=>{
      let github = Store.getState().github
      if(github.data[github.nowBook]===undefined||github.data[github.nowBook].children[github.nowNote]===undefined){
        setsources([])
      }else{
        setsources(Object.values(github.data[github.nowBook].children[github.nowNote].children))
      }
    })

    if(loc.search.length===0){
      setsources([])
      return
    }
    let params = loc.search.substring(1)
    let args = params.split('&')
    if(args.length<2){
      setsources([])
      return
    }
    let [a, b] = [args[0].substring(2), args[1].substring(2)]

    Store.dispatch(setGithubState('source', a, b))

    return () => {
      sub1()
    }
  }, [])


  return (
    <div className={style.body}>
      {sources.length === 0 ? <Result
        icon={<SmileOutlined />}
        title="Great, we have done all the operations!"
      /> : sources.map(item=>
      <div className={style.item} key={item.sourceId} data-key={item.sourceId}>
        <h4>{item.title}</h4>
        <p><Tag color={"cyan"}>{item.type}</Tag> size:{item.size.toString()}</p>
        <p>{item.gitUrl}</p>
        <p>{item.url}</p>
        </div>
        )}
    </div>
  )
}
