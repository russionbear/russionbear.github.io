import style from './GithubTopbar.module.css'
import { Breadcrumb, Button, Dropdown, Input, Select, Space, Menu, message, Tag } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Store from '../../redux/store';
import { GithubBook, GithubNote, ItemSource, setGithubState } from '../../redux/actions'

import myAxios, { github_url } from '../../sokect/myAxios';

export default function GithubTopbar() {
    const continerH = useMemo(() => Store.getState().github.top, [])
    let github = Store.getState().github
    const [nowState, setnowState] = useState(Store.getState().github.state)
    const [nowBook, setnowBook] = useState(github.nowBook)
    const [nowNote, setnowNote] = useState(github.nowNote)
    const nav_ = useNavigate()

    useEffect(() => {
        myAxios.defaults.baseURL = github_url

        let sub1 = Store.subscribe(() => {
            let github = Store.getState().github

            if (github.state === undefined) {
                console.log('dangerous error !!!')
                return
            }

            setnowState(github.state)
            setnowBook(github.nowBook)
            setnowNote(github.nowNote)
        })

        return () => {
            sub1()
        }
    }, [])


    useEffect(() => {
        let github = Store.getState().github
        switch (nowState) {
            case 'books':
                nav_('/books')
                break;
            case 'notes':
                nav_('/notes?b=' + github.nowBook)
                break
            case 'value':
                nav_('/value?b=' + github.nowBook + '&n=' + github.nowNote)
                break
            case 'source':
                nav_('/source?b=' + github.nowBook + '&n=' + github.nowNote)
                break
            default:
                break;
        }

        if (github.data === {}) {
            // ---------------------------------
        }
    }, [nowState])


    const handleToBooks = useCallback(() => {
        Store.dispatch(setGithubState('books'))
    }, [])

    const handleToNotes = useCallback(() => {
        Store.dispatch(setGithubState('notes', Store.getState().github.nowBook))
    }, [])
    const handleToSource = useCallback(() => {
        Store.dispatch(setGithubState('source', Store.getState().github.nowBook, Store.getState().github.nowNote))
    }, [])

    const handleToValue = useCallback(()=>{
        Store.dispatch(setGithubState('value', Store.getState().github.nowBook, Store.getState().github.nowNote))
    }, [])

    console.log(nowState)

    return (
        <div className={style.body} style={{ height: continerH + 'px' }}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Button type='text' onClick={handleToBooks} icon={<HomeOutlined />}></Button>
                </Breadcrumb.Item>

                {nowState !== 'books' ? <Breadcrumb.Item>
                    <Button type='text' onClick={handleToNotes}>{github.data[nowBook].name}</Button>
                </Breadcrumb.Item> : ''}

                {nowState !== 'books' && nowState !== 'notes' ? <Breadcrumb.Item>
                    <Button type='text'>{github.data[nowBook].children[nowNote].title}</Button>
                </Breadcrumb.Item> : ''}

            </Breadcrumb>

            <Space>
                {nowState === 'value' ? <Button type='text' onClick={handleToSource}>→<Tag>source list</Tag></Button> : ''}
                {nowState === 'source' ? <Button type='text' onClick={handleToValue}>→<Tag>markdown</Tag></Button> : ''}
            </Space>

        </div>
    )
}
