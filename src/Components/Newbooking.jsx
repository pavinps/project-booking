import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import './newbooking.css'
const Newbooking = ({title,text}) => {
  const [gstlname, setGstlname] = useState('')
  const [gstfname, setGstfname] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [adultno, setAdultno] = useState('')
  const [childrenno, setChildrenno] = useState('')
  const [first, set] = useState([])
  const senddata=(e)=>{
    e.preventDefault()
    console.log(gstlname,gstfname,checkin,checkout,adultno,childrenno);
      }
  return (
    <div className='newbooking-main'>
       
        <div className='newbooking-box'>
          <form action="" onSubmit={senddata}>
        <div className='newbooking-heading'>
            <div>
                New Booking
            </div>

        </div>
      <Input  title='Guest Fristname' type="number"setstate={setGstlname}/>
      <Input title='Guest Lastname' type='number' setstate={setGstfname}/>
      <Input title='Check in Date' type='number' setstate={setCheckin}/>
      <Input title='Check out Date' type='number'setstate={setCheckout}/>
      <Input title='Status' setstate={setAdultno}/>
      <Input  title='Room no' type='number' setstate={setChildrenno}/>

      <div className='newbooking-btn' >
      <Button color='white' text='GET AVALIABLE ROOM'back='#d7ae63' padding="10px" wid='182px' hi='40px'/>
      </div>
      </form>
      </div>
    </div>
  )
}

export default Newbooking