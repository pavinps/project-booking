import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../Components/Navbar.css'
import Dropdown from './Dropdown';

const Navbar = () => {
// const [burger,setBurger] = useState(false)
const [burgers, setBurger] = useState(false)
console.log(burgers);


  return (
    <div className='Navbar'>
      <div className='leftnav'>
      <div>
        <img className='img' src='/bag-icon.jpg' alt=''></img>
        </div>
        <div className='booking'>Booking System</div>
        <div className='option'>
          <NavLink to='/' className='link'style={({isActive})=>({color:isActive ? 'orange':'black'})}>Home</NavLink></div>
        <div className='option'>
        <NavLink to='/Room' className='link' style={({isActive})=>({color:isActive ? 'orange':'black'})}>Room</NavLink></div>
          
        <div className='option'>
        <NavLink to='/Booking' className='link'style={({isActive})=>({color:isActive ? 'orange':'black'})}>Booking</NavLink></div>
        </div>
        
        <div className='rightnav'>
        <div className='admlogo'>
          <img className='logo' src='/OOjs_UI_icon_userAvatar.svg.png' alt=''></img>
          <div className='adm'>Administrator</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill='orange'  height='20px' viewBox="0 0 512 512"><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg>
        </div>
        </div>
        <div className='menu' onClick={()=>(setBurger(!burgers))} >
        <svg xmlns="http://www.w3.org/2000/svg" height='20px' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        
        </div>
        {burgers && <Dropdown/>}
    </div>
  )
}

export default Navbar