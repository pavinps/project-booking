import React from 'react'

const Button = ({color,back,text,padding,wid,hi,funtionality}) => {
  return (
    <button className='butn' style={{color:color,backgroundColor:back,padding:padding,width:wid,height:hi}} onClick={funtionality}>
        {text}
    </button>
  )
}

export default Button