import { Result } from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import Store from '../../redux/store';
import { useState } from 'react';

export default function GithubBooks() {
  let tmp_ = Store.getState().github?.data
  const [books, setbooks] = useState(tmp_===undefined?[]:Object.keys(tmp_))
  const [loading, setloading] = useState(false)

  const render = () => {
    if(loading){
      return <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
    />
    }
    else if(books.length===0){
      return <Result
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
    />
    }else {
      return <div>
        jjjjj
      </div>
    }
  }
  
  return (
    <div>
      {render()}
    </div>
  )
}
