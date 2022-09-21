import React from 'react'
import Button from './Button'
import './footerdata.css'
 const Footerdata = ({data,btn_text}) => {
   
  return (
    <div className='data'>
        <div className='user'>
            <div>{data.name}</div>
            <div>{data.date}</div>
        </div>
        <div className='id'>
            <div>{data.id}</div>
        </div>
        <div className='btn'>
            <div>
                <Button color='white' text={btn_text}back='#d7ae63' padding="10px" wid='92px' hi='40px'/>
            </div>
        </div>
    </div>
  )
}

export default Footerdata