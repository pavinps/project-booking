import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import './newbooking.css'
// import { useEffect } from 'react'
import apiCall from '../serivce/apiCall'
import { Navigate, useNavigate } from 'react-router-dom'
const Newbooking = ({ title, text }) => {

  const [bookData, setBookData] = useState({

    guestFirstName: "",
    guestLastName: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: "",
    numberOfChild: "",
    

  })
  const Navigate=useNavigate()
  const getAvailable=async()=>{
    let room =await getRooms();
    if(room.id){
      setRoom(room);
      console.log(room);
      setGetavailbleroom(true)
    }
  }
  const book=async()=>{
    const booking=await addBooking();
    console.log(booking);
    setBookNow(true);

  }
function backclick(){
  Navigate(-1);
}


  // const [Book, setBook] = useState(false)
  const [Check, setCheck] = useState(false)
  const [Getavailbleroom, setGetavailbleroom] = useState(false)
  const [room, setRoom] = useState(null)



  const { guestFirstName, guestLastName, checkInDate, checkOutDate,numberOfAdults,numberOfChild } = bookData
  const onChange = (value, key) => {
    // console.log(value,key);
    if (room) return
    setBookData({
      ...bookData,
      [key]: value
    })

  }

  // const senddata = (e) => {
  //   e.preventDefault()
  //   let res = addBooking();

  //   console.log(bookData);

  // }
  const formatbooking=()=>{
    return{
  ...bookData,
  checkOutDate: new Date(bookData.checkOutDate).toISOString(),
  checkInDate: new Date(bookData.checkInDate).toISOString(),
    }


  }
  const addBooking=()=>apiCall("/booking","POST",{...formatbooking(),roomId:room.id,status:"Booked"})
  const getRooms=()=>apiCall("/get-rooms","POST",formatbooking())
  const [BookNow, setBookNow] = useState(false)


  return (
    <div className='newbooking-main'>

      <div className='newbooking-box'>
       
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
            <div className='newbooking-btn-booking'><Button color='white' text='GET AVALIABLE ROOM' back='#d7ae63' padding="10px" wid='182px' hi='40px' funtionality={getAvailable} /></div>
            {
             Getavailbleroom  && <div className='newbooking-btn-1'> <div className='newbooking-btn-booking'><Button color='white' text='BOOKING' back='#d7ae63' padding="10px" wid='182px' hi='40px' funtionality={book} /></div>
            
            <div><Button color='#d7ae63' text='Back' padding="10px" wid='182px' hi='40px' funtionality={backclick} /></div>
           </div>
            }
          </div>

          <div className='newbooking-btn2'>
            {
              BookNow && <div className='newbooking-btn2-2'><div><Button color='white' text='Check In' padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={() => { setCheck(!Check) }} /></div>
            

            
              <div><Button color='white' text='Check OuT' padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={() => { setCheck(!Check) }} /></div>
            

            
              <div><Button color='white' text='cancel
      'padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={() => { setCheck(!Check) }} /></div>
          </div>  }

          </div>
        
        <div>

        </div>
      </div>
    </div>
  )
}

export default Newbooking