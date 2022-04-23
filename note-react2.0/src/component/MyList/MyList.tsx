import { useState, useEffect, useCallback } from 'react';
import { List, Skeleton, Divider, Tag, Dropdown, Button } from 'antd';
// 多余的
// import InfiniteScroll from 'react-infinite-scroll-component';
import style from './MyList.module.css'
import { ItemNote } from '../../redux/actions'


interface DataType extends ItemNote {

}

const testDataSource = [
    {
        key: '1',
        title: 'title1',
        time: 'time',
        tags: ['11', '22'],
        image: '',
        part: 'sdfsdfsdf'
    },
    {
        key: '2',
        title: 'title1',
        time: 'time',
        tags: ['11', '22'],
        image: '',
        part: 'sdfsdfsdf'
    }
]


export default function MyList(
    props: {
        // loadData?: (suc: Function, fail?: Function) => void, 
        sourceData?: Array<DataType>,
        rightMenu?: Array<string>,
        activeItem?: string,
        rightMenuCb?: (selectedItemKey: string, operation: string) => void,
        cb?: (key?: string) => void,
    }) {
    // const [loading, setLoading] = useState(false);
    const [data, setData] = useState<Array<DataType>>(props.sourceData || []);
    // const [callLoader, setCallLoader] = useState<Function | undefined>(props.loadData)
    const [activeItem, setActiveItem] = useState<string>('')
    const [rightMenuActions, setRightMenuActions] = useState(props.rightMenu || ['111', '222'])
    const [rightSeleted, setRightSeleted] = useState('')

    // const loadMoreData = () => {
    //     if (loading) {
    //         return;
    //     }
    //     console.log('here', callLoader)
    //     if (callLoader) {
    //         console.log('hhhh')
    //         setLoading(true);
    //         // @ts-ignore
    //         callLoader((rlt) => {
    //             setData(rlt);
    //             setLoading(false);
    //         }, () => {
    //             setLoading(false);
    //         })
    //     }
    //     /**   不能删 */
    //     // fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
    //     //   .then(res => res.json())
    //     //   .then(body => {
    //     //     setData([...data, ...body.results]);
    //     //     setLoading(false);
    //     //   })
    //     //   .catch(() => {
    //     //     setLoading(false);
    //     //   });
    // };

    // // 第一步
    // useEffect(() => {
    //     if (props.loadData) {
    //         setCallLoader(props.loadData)
    //     }
    // }, [props.loadData]);

    // // 第二步
    // useEffect(() => {
    //     if (callLoader) {
    //         loadMoreData()
    //     }
    // }, [callLoader])

    // @ts-ignore

    useEffect(() => {
        if (props.sourceData) {
            setData(props.sourceData)
        }
        // console.log('data', props.sourceData)

    }, [props.sourceData])

    useEffect(()=>{
        if(props.activeItem&&activeItem!==props.activeItem){
            setActiveItem(props.activeItem)
        }
    }, [props.activeItem])

    // @ts-ignore
    const handleClick = (e) => {
        // console.log(e, 'csfs86hj', e.target.dataset.key)
        // e.preventDefault()
        // if (e.button === 2) {
        //     console.log(e.target.dataset.key)
        //     setRightSeleted(e.target.dataset.key)
        // } else {
        //     // setRightSeleted('')
        // }
        setActiveItem(e.target.dataset.key)
        e.preventDefault()
        if(props.cb&&e.button===0){
            props.cb(e.target.dataset.key)
        }
    }

    // @ts-ignore
    const handleRightMenuClick = (e) => {
        if (props.rightMenuCb) {
            // console.log('activeItem', activeItem)
            props.rightMenuCb(activeItem, e.target.innerText)
        }
    }

    const renderContextMenu = useCallback((menu: Array<string>) => {
        return (
            <div className={style.rbody}>
                <div className={style.rcontainer}>
                    {menu.map(item => <Button type="text" key={item} onClick={handleRightMenuClick}>{item}</Button>)}
                </div>
            </div>
        )
    }, [activeItem])

    return (
        // <InfiniteScroll
        //     dataLength={data.length}
        //     next={()=>}
        //     hasMore={false}
        //     loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        //     endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        //     scrollableTarget="scrollableDiv"
        // >
        <Dropdown overlay={renderContextMenu(rightMenuActions)} trigger={['contextMenu']}>
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item key={item.key} style={{ padding: 0 }} data-key={item.key}>
                        <div onMouseDown={handleClick} className={item.key === activeItem ? style.list_item_active : style.list_item} data-key={item.key}>
                            <div style={{ display: 'flex', flexDirection: "column", width: '100%', alignItems: "baseline" }} data-key={item.key}>
                                <div style={{ display: 'flex', justifyContent: "space-between", width: '100%' }}>
                                    <div>{item.title}</div>
                                    <div>{item.modifyTime}</div>
                                </div>
                                <div>{item.part}</div>
                                <div>{item.tags.map(item1 => <Tag>{item1}</Tag>)}</div>
                            </div>
                            <img src={item.image} style={{ height: '100%' }} />
                        </div>
                    </List.Item>
                )}
            />
        </Dropdown>
        // </InfiniteScroll>
    );
};


