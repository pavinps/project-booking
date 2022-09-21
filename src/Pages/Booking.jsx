import React from 'react'

import { bookingdata } from '../Components/booking'
import Bookingtable from '../Components/Bookingtable'
import Navbar from '../Components/Navbar'
// import Newbooking from '../Components/Newbooking'


const Booking = () => {
  return (
    <div>
      <div>
   <Navbar/>
   </div>
   
    <div>
      <Bookingtable data={bookingdata}/>
    </div>
  
      
    
   
    </div>
  )
}

export default Booking