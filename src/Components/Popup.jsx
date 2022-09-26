import React, { useState } from 'react'
import Input from './Input'
import './popup.css'
import Button from './Button'
import Amenities from './Amenities'
import apiCall from '../serivce/apiCall'
import { useEffect } from 'react'

const Popup = ({ setaddroom, editid, setEditId, roomData }) => {
  const [formData, setFormData] = useState({
    roomNumber: "",
    adultCapacity: "",
    childCapacity: "",
    price: ""
  })

  useEffect(() => {
    console.log(editid);
    if(editid)setFormData(roomData.find(r => r.id === editid))
   
  }, [editid])
  
  const { roomNumber, adultCapacity, childCapacity, price } = formData;

  const onChange = (value, key) => {
    setFormData({
      ...formData,
      [key]: value
    })

  }

  const [Selectarray, setSelectarray] = useState([])
  const senddata = async (e) => {
    e.preventDefault()

    let res;
    if (editid) {
      res = await updateroom()

    } else {
      // console.log("add");
      res =await addRoom()
    }
    closeWindow();
  };
  const updateroom = () => apiCall(`/rooms/${formData.id}`, "PUT", formData)
  const addRoom = () => apiCall("/rooms", "POST", formData)

  const closeWindow = () => {
    setEditId(null);
    setaddroom(false);

  }
  return (
    <div className='popup' >
      <div className='popup-head'>
        <div className='name'> Room</div>
        <div onClick={closeWindow}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='20px' className='cancel'><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" /></svg></div>
      </div>
      <form action="" onSubmit={senddata}>
        <div className='box-one'>
          <Input title="Room no" type='number' setstate={v => onChange(v, "roomNumber")} value={roomNumber} />
          <Input title="Adult capacity" type='number' setstate={v => onChange(v, "adultCapacity")} value={adultCapacity} />
          <Input title="Children capacity" type='number' setstate={v => onChange(v, "childCapacity")} value={childCapacity} />
          <Input title="Price" type='number' setstate={v => onChange(v, "price")} value={price} />
        </div>
        <div className='save'>
          <Button color='white' text='save' back='#d7ae63' padding="10px" wid='92px' hi='40px' />

        </div>

      </form>
      {editid &&
        <div className='amen'>
          <div>Amenities</div>
          <select className='select' onChange={(e) => { setSelectarray([...Selectarray, e.target.value]) }}>
            <option>Select</option>
            <option value="Television">Television</option>
            <option value="Air-Conditioner">Air Conditioner</option>
            <option value="internet-access">internet access</option>

          </select>
          <div>
            {Selectarray.map((data, index) => {
              return (
                <Amenities select={Selectarray} data={data} key={index} index={index} Selectarray={setSelectarray} />

              )
            })}
          </div>
        </div>
      }
    </div>


  )
}

export default Popup