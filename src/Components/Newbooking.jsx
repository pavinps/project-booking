import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import './newbooking.css'
import { useEffect } from 'react'
import apiCall from '../serivce/apiCall'
const Newbooking = ({ title, text }) => {

  const [bookData, setBookData] = useState({

    guestFirstName: "",
    guestLastName: "",
    checkInData: "",
    checkOutData: "",
    numberOfAdults: "",
    numberOfChild: "",
    

  })



  const [book, setbook] = useState(false)
  const [Check, setCheck] = useState(false)



  const { guestFirstName, guestLastName, checkInDate, checkOutDate, status, roomNumber,numberOfAdults,numberOfChild } = bookData
  const onChange = (value, key) => {
    setBookData({
      ...bookData,
      [key]: value
    })

  }

  const senddata = (e) => {
    e.preventDefault()
    let res = addbook();

    console.log(bookData);

  }
  const addbook = () => apiCall("/booking", "POST",{
  ...bookData,
  checkOutDate: new Date(bookData.checkOutData).toISOString(),
  checkInDate: new Date(bookData.checkInData).toISOString(),
  room:undefined,
  roomId:1


  })

  return (
    <div className='newbooking-main'>

      <div className='newbooking-box'>
        <form action="" onSubmit={senddata}>
          <div className='newbooking-heading'>
            <div>
              New Booking
            </div>

          </div>
          <Input title='Guest Fristname' type="" setstate={v => onChange(v, "guestFirstName")} value={guestFirstName} />
          <Input title='Guest Lastname' type='' setstate={v => onChange(v, "guestLastName")} value={guestLastName} />
          <Input title='Check in Date' type='date' setstate={v => onChange(v, "checkInDate")} value={checkInDate} />
          <Input title='Check out Date' type='date' setstate={v => onChange(v, "checkOutDate")} value={checkOutDate} />
          <Input title='Adult Capacity' type='number'  setstate={v => onChange(v, "numberOfAdults")} value={numberOfAdults}/>
          <Input title='ChildCapacity' type='number'  setstate={v => onChange(v, "numberOfChild")} value={numberOfChild} />

          <div className='newbooking-btn' >
            <div className='newbooking-btn-booking'><Button color='white' text='GET AVALIABLE ROOM' back='#d7ae63' padding="10px" wid='182px' hi='40px' funtionality={() => { setbook(!book) }} /></div>
            {
              book && <div className='newbooking-btn-booking'><Button color='white' text='BOOKING' back='#d7ae63' padding="10px" wid='182px' hi='40px' funtionality={() => { setbook(!book) }} /></div>
            }
            {
              book && <div><Button color='#d7ae63' text='Back' padding="10px" wid='182px' hi='40px' funtionality={() => { setCheck(!Check) }} /></div>
            }
          </div>

          <div className='newbooking-btn2'>
            {
              Check && <div><Button color='white' text='Check In' padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={() => { setCheck(!Check) }} /></div>
            }

            {
              Check && <div><Button color='white' text='Check OuT' padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={() => { setCheck(!Check) }} /></div>
            }

            {
              Check && <div><Button color='white' text='cancel
      'padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={() => { setCheck(!Check) }} /></div>
            }

          </div>
        </form>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Newbooking