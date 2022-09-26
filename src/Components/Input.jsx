import React from 'react'
import './input.css'
const Input = ({title,setstate,type,holder,value}) => {
  return (
    <div className='input-container'>
       <div className='input-label'> <label htmlFor="">
          {title} <label style={{color:'red'}}>*</label>
        </label>
        </div>
        <div className='input-text'>
        <input type={type} placeholder={holder} value={value} onChange={(e)=>{setstate(e.target.value)}} required />
        </div>

    </div>
  )
}

export default Input