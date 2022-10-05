import React from 'react'

const Button = ({color,back,text,padding,wid,hi,funtionality,bod,butn,disabled}) => {
  return (
    <button className={`${butn} ${disabled && "disabled"}`}style={{color:color,backgroundColor:back,padding:padding,width:wid,height:hi,}} onClick={funtionality}>
        {text}
    </button>
  )
}

export default Button