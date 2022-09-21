import React, { useState } from 'react'
import Input from './Input'
import './popup.css'
import Button from  './Button'
import Amenities from './Amenities'
const Popup = ({setaddroom}) => {
  const [roomno, setRoomno] = useState('')
  const [adultcapacity, setAdultcapacity] = useState('')
  const [childrencapacity, setChildrencapacity] = useState('')
  const [price, setPrice] = useState('')
   const [Selectarray, setSelectarray] = useState([])
  const senddata=(e)=>{
e.preventDefault()
console.log(roomno,adultcapacity,childrencapacity,price);
  }
  
  return (
    <div className='popup' >
      <div className='popup-head'>
        <div className='name'> Room</div>
        <div onClick={()=>(setaddroom(false))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='20px' className='cancel'><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg></div>
        </div>
       <form action="" onSubmit={senddata}>
        <div className='box-one'>
        <Input title="Room no" type='number' setstate={setRoomno}/>
        <Input title="Adult capacity"  type='number' setstate={setAdultcapacity}/>
        <Input title="Children capacity"  type='number' setstate={setChildrencapacity}/>
        <Input title="Price"  type='number'setstate={setPrice}/>
        </div>
        <div className='save'>
        <Button color='white' text='save'back='#d7ae63' padding="10px" wid='92px' hi='40px'/>
        
        </div>

        </form>
        <div className='amen'>Amenities</div>
        <div>
        <select className='select' onChange={(e)=>{setSelectarray([...Selectarray,e.target.value])}}>
          <option>Select</option>
          <option value="Television">Television</option>
          <option value="Air-Conditioner">Air Conditioner</option>
          <option value="internet-access">internet access</option>

         </select>
         <div>
        {Selectarray.map((data,index)=>{
          return(
            <Amenities select={Selectarray} data={data} key={index} index={index} Selectarray={setSelectarray} />
            
          )
        })}
      </div>
      </div>
        </div>
   
   
  )
}

export default Popup