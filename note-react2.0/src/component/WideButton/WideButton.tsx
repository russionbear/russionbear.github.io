import React from 'react';
import style from './WideButton.module.css'


interface WideButtonProps{
    type?: string;
    icon?: React.ReactNode;
    /** @default default */
    size?: number;
    className?: string;
    children?: React.ReactNode;
}

export default function WideButton(props: WideButtonProps = {type: '', icon: '', size: 12, className: '', children: ''}) {
  return (
    <div className={style.container+' '+props.className}>
        <span>{props.children}</span>
        {props.icon}
    </div>
  )
}
