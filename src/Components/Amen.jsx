import React from 'react'
import'./amen.css'
import Input from './Input'
import Button from './Button'
const Amen = () => {
  return (
    <div className='amen-main'>
      <div className='amen-box'>
        <div><Input title="Internet access" type='number'/></div><div><Button color='white' text='delete'back='#d7ae63' padding="10px" wid='92px' hi='40px'/></div>
        </div>
         <Input title="Television" type='number'/>
         <Input title="Air conditioner" type='number'/>
         <Input title="Water Heat" type='number'/>
    </div>
  )
}

export default Amen