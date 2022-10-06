import React from 'react'
import Navbar from '../Components/Navbar'
import Slide from '../Components/Slide'
import Footer from '../Components/Footer'
import '../App.css'
import  {checkdata,checkout} from '../Components/data'
import Dropdown from '../Components/Dropdown'
import { useState } from 'react'
import { useEffect } from 'react'
import apiCall from '../serivce/apiCall'

const Homepage = () => {
  const [Checkin, setCheckin] = useState([])
  const [Checkout, setCheckout] = useState([])
  
  useEffect(()=>{
    apiCall("/booking/today-check-in").then(response=>{
      setCheckin(response)
    })
   },[])
   useEffect(()=>{
    apiCall("/booking/today-check-out").then(response=>{
      setCheckout(response)
    })
   },[])

  
  return (
    <div className='home'>
      
      <Navbar/>
      <Slide/>
      <div className='check'>
      <Footer title='Checking in Today' btn_text='check in' data={Checkin}/>
    
      <Footer title='Checking Out Today' btn_text='check out' data={Checkout}/>
      </div>
      <div>
       
      </div>
      </div>
  )
}

export default Homepage