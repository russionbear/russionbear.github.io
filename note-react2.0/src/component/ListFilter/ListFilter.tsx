import style from './ListFilter.module.css'
import { Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import React, { useCallback, useState, useEffect, useImperativeHandle } from 'react'


export interface ListFielterDataItem {
  key: string,
  name: string,
  icon: React.ReactNode,
  check?: boolean,
  usage?: 'radio' | 'checkbox' | undefined,
  hide: boolean,
  children: Array<{
    key: string,
    name: string,
    icon: React.ReactNode,
    check?: boolean
  }>
}

// const testData = [
//   {
//     key: 'type1',
//     name: 'type1',
//     icon: '',
//     hide: false,
//     children: [
//       {
//         key: 'aaa',
//         name: 'sdfsd',
//         icon: ''
//       }
//     ]
//   }
// ]


const fromFilterData = (data: Array<ListFielterDataItem>) => {
  let states_ = {}
  data.map(item => {
    // @ts-ignore
    states_[item.key] = Boolean(item.check)

    item.children.map(item1 => {
      // @ts-ignore
      states_[item1.key] = Boolean(item1.check)
    })
  })
  return states_
}

// @ts-ignore
const toFilterData = (data: Array<ListFielterDataItem>, states_) => {
  data.map(item => {
    // @ts-ignore
    item.check = states_[item.key]
    // states_[item.key] = Boolean(item.check)

    item.children.map(item1 => {
      // @ts-ignore
      item1.check = states_[item1.key]
      // states_[item1.key] = Boolean(item1.check)
    })
  })
  return data
}

export default function ListFilter(
  // @ts-ignore
  props: { data: Array<ListFielterDataItem>, onRef, cb?:Function }
  ) {

  const [states, setStates] = useState({})
  useEffect(() => {
    // console.log('update')
    setStates(fromFilterData(props.data))
  }, [props.data])

  // 对外接口
  // @ts-ignore
  // useImperativeHandle(props.onRef, () => {
  //   return {
  //     getFilterData: getFilterData,
  //     setFilterData: setFilterData
  //   };
  // });

  // const getFilterData = useCallback(() => {
  //   return toFilterData(props.data, states)
  // }, [states])

  // const setFilterData = useCallback((filterData) => {
  //   setStates(fromFilterData(filterData))
  // }, [])

  const renderData = useCallback((data: Array<ListFielterDataItem>) => {

    // console.log(data)
    let rlt: Array<React.ReactNode> = []
    data.map(item => {
      let tmp_arr = [<Button onClick={handleClick} block type='text' disabled style={{ textAlign: "left", pointerEvents: "none", display: item.hide ? 'none' : 'initial' }} key={item.key} icon={item.icon}><span data-key={item.key}>{item.name}</span></Button>]

      // let check_type = item.usage === "radio" ? 1 : -1
      tmp_arr.push(...item.children.map(item1 => {
        return <Button onMouseDown={handleClick} value={item1.key} block type='text' style={{ textAlign: "left" }}
          key={item1.key}
          // @ts-ignore
          icon={states[item1.key] ? item1.icon : ''}
        >
          <span data-key={item1.key}>{item1.name}</span>
        </Button>
      })
      )
      rlt.push(...tmp_arr)
    })

    return rlt
  }, [states])

  // @ts-ignore
  const handleClick = (event) => {
    let new_states = { ...states }
    const nowKey = event.target.dataset.key || event.target.value
    // console.log(event, nowKey, event.target.dataset.key, event.target.value)
    let isEnd = false
    for (let i of props.data) {
      if(i.usage===undefined){
        continue
      }
      for (let j of i.children) {
        if(j.key!==nowKey){
          continue
        }
        if (i.usage == 'radio') {
          for (let k of i.children) {
            // @ts-ignore
            new_states[k.key] = false
          }
          // @ts-ignore
          new_states[nowKey] = true
          setStates(new_states)
        }
        else if (i.usage === 'checkbox') {
          // @ts-ignore
          new_states[nowKey] = !new_states[nowKey]
          setStates(new_states)
        }
        isEnd = true
        break
      }
      if (isEnd) {
        break
      }
    }
    if(props.cb){
      // console.log(new_states)
      props.cb(toFilterData(props.data, new_states))
    }
    event.preventDefault()
  }

  return (
    <div className={style.body}>
      <div className={style.container}>
        {renderData(props.data)}
      </div>
    </div>
  )
}
