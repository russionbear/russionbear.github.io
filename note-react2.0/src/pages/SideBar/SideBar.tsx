import { Menu, Tooltip } from 'antd'
import style from './SideBar.module.css'
// import { StepForwardOutlined} from '@ant-design/icons';
import Store from '../../redux/store';
import { setSidbarNow, setSidbarDouble, setMarkdownShowType } from '../../redux/actions'
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function SideBar() {
  const [menus, containerW] = useMemo(() => {
    let tmp = Store.getState().sidebar
    return [tmp.menus, Store.getState().markdownSize.left_side];
  }, [])
  const [isShow, setIsShow] = useState(!Store.getState().markdownSize.fullscreen)
  const [value, setValue] = useState(Store.getState().sidebar.menus[0].key)

  useEffect(() => {
    let sub1 = Store.subscribe(() => {
      setValue(Store.getState().sidebar.nowValue)
      setIsShow(!Store.getState().markdownSize.fullscreen)
    })
    return () => {
      sub1()
    }
  }, [])
  // @ts-ignore
  const valueChange = (e) => {

    let key1 = Store.getState().sidebar.menus.find(item => item.key === e.key)
    if (key1 === undefined) {
      console.log('sidebar eroor, dangerous !!!!!')
      return
    }
    Store.dispatch(setSidbarNow(e.key))

    if (e.key === value) {
      if (key1.hasListbar) {
        // @ts-ignore
        Store.dispatch(setMarkdownShowType({ showSidebar: !Store.getState().markdownSize.showSidebar }))
      }
    }
    else {
      if (key1.hasListbar) {
        console.log('showfsdjiwe true', )
        // @ts-ignore
        Store.dispatch(setMarkdownShowType({ showSidebar: true }))
      } else {
        // @ts-ignore
        Store.dispatch(setMarkdownShowType({ showSidebar: false }))
      }
    }
  }
  return (
    <div className={style.container}
      style={{ width: containerW + 'px', display: isShow ? 'flex' : 'none' }}>
      <Menu mode="inline" inlineCollapsed={true} selectedKeys={[value]} onClick={valueChange}>
        {menus.map(item => <Menu.Item key={item.key} icon={item.icon}></Menu.Item>)}
      </Menu>
    </div>
  )
}
