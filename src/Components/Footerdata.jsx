import React from 'react'
import Button from './Button'
import './footerdata.css'
 const Footerdata = ({data,btn_text}) => {
   
  return (
    <div className='data'>
        
            <label>{data.guestFirstName+" "+data.guestLastName}</label>
           <label> {data.room.roomNumber}</label>
        
        
        <div className='btn'>
            <div>
                <Button color='white' text={btn_text}back='#d7ae63' padding="10px" wid='92px' hi='40px'/>
            </div>
        </div>
    </div>
  )
}

export default Footerdata