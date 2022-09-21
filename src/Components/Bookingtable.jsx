import React, { useState } from 'react'
import Button from './Button'
import'./bookingtable.css'
import Newbooking from './Newbooking'
import { NavLink } from 'react-router-dom';


const Bookingtable = ({data}) => {
  const [booking, setBooking] = useState(false)
  // function poproom() {
  //   console.log(setBooking);
  //   setBooking(true);}

  return (
    <div className='booking-main'>
          <div className='booking-header'>
              <div className='booking-header-title'>
                Bookings
              </div>
              <div style={{color:'orange'}} className='booking-header-btn'>
              <NavLink to='/Newbooking' className='link'>New Booking</NavLink>
</div>
              {/* <div className='booking-header-btn'><Button color='white' text='New Booking'back='#d7ae63' padding="10px" wid='109px' hi='46px' funtionality={poproom}/></div> */}
              </div>
<div className='booking-item'>
                  <div className='booking-item-one'><input type="text" holder /></div>
                  <div className='booking-item-one'><input type="text" /></div>
                  <div className='booking-item-three'><Button color='white' text='search'back='#d7ae63' padding="10px" wid='92px' hi='34px'/></div>
                </div>
                 <div className='booking-table'>
                      <div className='booking-table-heading'>
                        <div>Guest name</div>
                        <div>Guest last name</div>
                        <div>Room no</div>
                        <div>Check in Date</div>
                        <div>Check out Date</div>
                        <div>Status</div>
                      </div>
                    <div className='booking-table-row'>
                     {
                      data.map((data,index)=>{
                        return(
                          <div className='booking-row-data'>
                            <div className='row'>{data.lname}</div>
                            <div className='row'>{data.fname}</div>
                            <div className='row'>{data.rno}</div>
                            <div className='row'>{data.checkin}</div>
                            <div className='row'>{data.checkout}</div>
                            <div className='row'>{data.status}</div>
                              

                          </div>

                        )
                      })
                     }
                    </div>
                    {/* <div className={booking ? "popwindow":"" }>
    {booking && <Newbooking/>}
</div> */}
                 </div>
            
          

    </div>
  )
}

export default Bookingtable