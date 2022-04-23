import { useEffect, useState } from "react"
import Store from "../../redux/store"
import style from './MyCanvas.module.css'


export default function MyCanvas() {
  let size_1 = Store.getState().markdownSize
  
  const [size, setsize] = useState({w: size_1.canvasWidth, h: size_1.markdownHeight, th: size_1.toolbarHeight})
  useEffect(()=>{
    let sub1 = Store.subscribe(()=>{
      let size_ = Store.getState().markdownSize
      setsize({w: size_.canvasWidth, h: size_.markdownHeight, th: size_.toolbarHeight})
    })

    return () => {
      sub1()
    }
  }, [])
  
  return (
    <div className={style.body}>
      <div className={style.toolbar} style={{height: size.th}}>
        <button>color</button>        
      </div>
      <div className={style.container} style={{height: size.h-size.th}}>
        <canvas>
        </canvas>
      </div>
    </div>
  )
}
