import React from 'react'
import'./button.css'
const Button = ({color,back,text,padding,wid,hi,funtionality,bod,butn,disabled=false}) => {
  return (
    <button className={`${butn} ${disabled && "disabled"}`}style={{color:color,backgroundColor:back,padding:padding,width:wid,height:hi,}} onClick={(e)=>!disabled && funtionality(e)}>
        {text}
    </button>
  )
}

export default Button