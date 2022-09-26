import React, { useState } from 'react'
import "./roomdata.css"
import Button from './Button'
import Popup from './Popup'
import { useEffect } from 'react'
import apiCall from '../serivce/apiCall'
const Roomdata = ({btn_text}) => {
    const [roomData, setRoomData] = useState([])
    const [addroom, setaddroom] = useState(false)
    const [editid, setEditId] = useState(null)
    useEffect(()=>{
        apiCall("/rooms","GET")
       
        .then(respones=>{
            setRoomData(respones);
            console.log(roomData);
        })
    },[setaddroom])
 function popuproom() {
    console.log(setaddroom);
    setaddroom(true);
    
 }


  return (
    <div className='roomdata-main'>
        <div className='roomdata-head'>
            Room
        <div className='roomdata-adbtn'>
        <Button color='white' text={btn_text}back='#d7ae63' padding="10px" wid='92px' hi='40px' funtionality={popuproom}/>
        </div>
        </div>
        <div className='roomdata-table'>
            <div className='roomdata-heading'>
                <div>
                    Room no
                </div>
                <div>
                    Adult capacity
                </div>
                <div>
                    children capacity
                </div>
                <div>
                    Price
                </div>
                
            </div>
            <div className='roomdata-row'>
                    {roomData?.map((data,index)=>{
                        return(
                            <div className='roomdata-data' key={data.id}>
                             <div>{data.roomNumber}</div>
                            <div>{data.adultCapacity}</div>
                            <div>{data.childCapacity}</div>
                            <div>{data.price}</div>
                            <svg  onClick={()=>{
                                setaddroom(true);
                                setEditId(data.id);
                 
                            }} height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg>
                            </div>
                           
                        )
                    })}
                </div>
<div className={addroom ? "popwindow":"" }>
    {addroom && <Popup setaddroom={setaddroom} editid={editid} setEditId={setEditId} roomData={roomData} />}
</div>
        </div>
    </div>
  )
}

export default Roomdata