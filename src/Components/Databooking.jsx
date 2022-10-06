import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateStatus } from '../serivce/api';
const Databooking = ({data}) => {

    const[status,setStatus] = useState(data.status);


    const changeStatus = async(newStatus)=>{
        const res = await updateStatus(data.id,newStatus);
        if(res.status){
          setStatus(newStatus);
        }
      }
      const formateDate=(date)=>{
        return(new date(date)).toDateString();
      }

      const navigate=useNavigate();

  return (
    <div className='booking-row-data'>
    <div className='row'
    onClick={()=>{
        navigate(`/booking/${data.id}`)
    }}
    >{data.guestFirstName}</div>
    <div className='row'>{data.guestLastName}</div>
    <div className='row'>{data.room.roomNumber}</div>
    <div className='row'>{data.checkInDate}</div>
    <div className='row'>{data.checkOutDate}</div>
    <div className='row'>
    {status === "Booked" &&
              <>
                {status}
                <button onClick={()=>changeStatus("Check In")}>Check In</button>
                <button onClick={()=>changeStatus("Cancelled")}>Cancel</button>
              </>
              }
              {status === "Check In" &&
              <>
                {status}
                <button onClick={()=>changeStatus("Check Out")}>Check Out</button>
              </>
              }
              {(status === "Check Out" || status === "Cancelled") &&
              <>
                {status}
              </>
              }
    </div>
    </div>
  )
}

export default Databooking