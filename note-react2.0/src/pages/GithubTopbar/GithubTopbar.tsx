import style from './GithubTopbar.module.css'
import { Breadcrumb, Button, Dropdown, Input, Select, Space, Menu } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Store from '../../redux/store';
import { GithubBook, GithubNote, ItemSource, setGithubState } from '../../redux/actions'


export default function GithubTopbar() {
    const [nowState, setnowState] = useState(Store.getState().github.state)
    const [data, setdata] = useState(Store.getState().github?.data)
    const [books, setbooks] = useState<GithubBook[]>([])
    const [notes, setnotes] = useState<GithubNote[]>([])
    const [sources, setsources] = useState<ItemSource[]>([])
    // const nav_ = useNavigate()

    useEffect(()=>{
        let sub1 = Store.subscribe(()=>{
            let github = Store.getState().github

            if(github?.state===undefined){
                console.log('dangerous error !!!')
                return
            }
            setnowState(github?.state)

            setdata(github?.data)
            setbooks(github?.data===undefined?[]:Object.values(github.data))
            if(github?.data===undefined){
                setbooks([])
                setnotes([])
                setsources([])
            }else{
                setbooks(Object.values(github.data))
                if(github.data[github.nowBook]===undefined){
                    setnotes([])
                    setsources([])
                }else{
                    setnotes(Object.values(github.data[github.nowBook].children))
                    if(github.data[github.nowBook].children[github.nowNote]===undefined){
                        setsources([])
                    }else{
                        setsources(Object.values(github.data[github.nowBook].children[github.nowNote].children))
                    }
                }
            }
            setnowState(github.state)

        })

        return ()=>{
            sub1()
        }
    }, [])


    useEffect(()=>{
        let tmp = Store.getState().github
        if(books.length===0){
            if(tmp.state!=='books')
            Store.dispatch(setGithubState('books'))
        }
        else if(notes.length===0){
            if(tmp.state !== 'books'&&tmp.state !== 'notes')
                Store.dispatch(setGithubState('notes'))
        }
        // else if(sources.length===0){
        //     if(Store.getState().github.state === 'books')
        //         Store.dispatch(setGithubState('notes'))
        // }
    }, [books, notes])

    const handleBookClick = useCallback((e) => {
        // console.log(e, 'e')
        // let github = Store.getState().github
        Store.dispatch(setGithubState('notes', e))
    },
        [],
    )

    const handleNoteClick = useCallback(
        (e) => {
            let github = Store.getState().github
            Store.dispatch(setGithubState(github.state, github.nowBook, e))
        },
        [],
    )

    return (
        <div className={style.body}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='books'><HomeOutlined /></Link>
                </Breadcrumb.Item>

                {nowState==="books"?'': <Breadcrumb.Item>
                    <Select
                        size="small"
                        bordered={false}
                        style={{ minWidth: '100px' }}
                        showSearch
                        placeholder="Select a person"
                        showArrow={false}
                        onChange={handleBookClick}
                    >
                        {books.map(item=><Select.Option key={item.key}>{item.name}</Select.Option>)}
                    </Select>
                </Breadcrumb.Item>}

                {/* {nowState==="notes"||nowState==="books"?'':<Breadcrumb.Item>
                    <Link to='notes'><HomeOutlined /></Link>
                </Breadcrumb.Item>} */}

                {nowState==="notes"||nowState==="books"?'': <Breadcrumb.Item>
                    <Select
                        size="small"
                        bordered={false}
                        style={{ minWidth: '100px' }}
                        showSearch
                        placeholder="Select a person"
                        showArrow={false}
                        onChange={handleNoteClick}
                    >
                        {notes.map(item=><Select.Option key={item.key}>{item.title}</Select.Option>)}
                    </Select>
                </Breadcrumb.Item>}
            </Breadcrumb>
            
            <Space>
                {nowState==='value'?<Dropdown overlay={<Menu>
                    {sources.map(item=><Menu.Item key={item.sourceId}>{item.title}</Menu.Item>)}
                </Menu>}>
                    <Link to="/source"><Button type='text'>source</Button></Link>
                </Dropdown>:<span />}
            </Space>

        </div>
    )
}
