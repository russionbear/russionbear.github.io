import React from 'react'
import { useMemo } from 'react'

import Store from '../../redux/store'

export default function TopBar() {
  const height = useMemo(()=>Store.getState().markdownSize.top, [])
  return (
    <div style={{width: '100%', height: height+'px', backgroundColor: 'red'}}>TopBar</div>
  )
}
