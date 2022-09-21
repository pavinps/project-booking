import React from 'react'
import './dropdown.css'
import { NavLink } from 'react-router-dom';
const Dropdown = () => {
  return (
    <div className='dropdown-main'>
        <div className='dropdown-item'>
            <div className='dropdown-item-row' >Admin</div>
            <div  className='dropdown-item-row' ><NavLink to='/' className='link' style={({isActive})=>({color:isActive ? 'orange':'black'})}>Home</NavLink></div>
            <div  className='dropdown-item-row'><NavLink to='/room' className='link' style={({isActive})=>({color:isActive ? 'orange':'black'})}>Room</NavLink></div>
            <div  className='dropdown-item-row'><NavLink to='/booking' className='link' style={({isActive})=>({color:isActive ? 'orange':'black'})}>Booking</NavLink></div>

        </div>
    </div>
  )
}

export default Dropdown