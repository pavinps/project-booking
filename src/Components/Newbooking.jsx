import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import './newbooking.css'
import { updateStatus } from '../serivce/api'
// import { useEffect } from 'react'
import apiCall from '../serivce/apiCall'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
const Newbooking = ({ title, text }) => {

  const [bookData, setBookData] = useState({

    guestFirstName: "",
    guestLastName: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: "",
    numberOfChildren: "",
    

  })
  const {id} =useParams();
const [status, setStatus] = useState();
  const [room, setRoom] = useState(null)
  const Navigate=useNavigate()
  const [Booking, setBooking] = useState(null);
  const getAvailable=async()=>{
    let room =await getRooms();
    if(room.id){
      setRoom(room);
      console.log(room);
      setGetavailbleroom(true)
      setShowRoom(true)
    }
  }
  const changeStatus = async(status)=>{
    await updateStatus(Booking.id,status);
    setStatus(status)
  }



   useEffect(() => {
     if (!id) return
      
    getBookingdata();
   
     
   }, [id]);
   
   const getBookingdata =async()=>{
    const data =await apiCall(`/booking/${id}`);
    if(data){
      setBookData({
        ...data,
        checkInDate:data.checkInDate.split("T")[0],
        checkOutDate:data.checkOutDate.split("T")[0]
      })
      setRoom(data.room)
      setStatus(data.status)
      setBooking(data)
    }
   }





  const book=async()=>{
    const booking=await addBooking();
    setBooking(booking)
    setStatus("Booked")
    setBookNow(true);

  }
function backclick(){
  Navigate(-1);
}


  // const [Book, setBook] = useState(false)
  const [Check, setCheck] = useState(false)
  const [Getavailbleroom, setGetavailbleroom] = useState(false)
  
  const [ShowRoom, setShowRoom] = useState(false)
  




  const { guestFirstName, guestLastName, checkInDate, checkOutDate,numberOfAdults,numberOfChildren } = bookData
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
  // const updateStatus = (status)=>apiCall("/booking","PUT",{id:Booking.id,status})

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
          <Input title='ChildCapacity' type='number'  setstate={v => onChange(v, "numberOfChildren")} value={numberOfChildren} />
            {ShowRoom && <div className='newbooking-label'><label>RoomNumber:</label>{room.roomNumber}<label> Price:</label>{room.price}</div>}
          <div className='newbooking-btn' >
            <div className='newbooking-btn-booking'><Button color='white' text='GET AVALIABLE ROOM' disabled={room}  back='#d7ae63' padding="10px" wid='182px' hi='40px' funtionality={getAvailable} /></div>
            {
             Getavailbleroom  && <div className='newbooking-btn-1'> <div className='newbooking-btn-booking'><Button disabled={status} color='white' text='BOOKING' back='#d7ae63' padding="10px" wid='182px' hi='40px' funtionality={book} /></div>
            
            <div><Button color='#d7ae63' text='Back' padding="10px" wid='182px' hi='40px' funtionality={backclick} /></div>
           </div>
            }
          </div>

          <div className='newbooking-btn2'>
            {
              BookNow && <div className='newbooking-btn2-2'><div><Button disabled={status !== "Booked"} color='white' text='Check In' padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={()=>{updateStatus("CheckIn")}} /></div>
            

            
              <div><Button color='white'disabled={status !== "Check In"} text='Check Out' padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={()=>{updateStatus("CheckOut")}}/></div>
            

            
              <div><Button color='white' disabled={status !== "Booked"} text='cancel
      ' padding="10px" wid='182px' hi='40px' back='#d7ae63' funtionality={() => { setCheck(!Check) }} /></div>
          </div>  }
      
          </div>
        
        <div>

        </div>
      </div>
    </div>
  )
}

export default Newbooking