import React, { useState } from 'react'
import "./roomdata.css"
import Button from './Button'
import Popup from './Popup'
const Roomdata = ({btn_text,data}) => {
    const [addroom, setaddroom] = useState(false)
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
                    {data.map((data,index)=>{
                        return(
                            <div className='roomdata-data'>
                             <div>{data.no}</div>
                            <div>{data.ac}</div>
                            <div>{data.cc}</div>
                            <div>{data.price}</div>
                            
                            </div>
                           
                        )
                    })}
                </div>
<div className={addroom ? "popwindow":"" }>
    {addroom && <Popup setaddroom={setaddroom}/>}
</div>
        </div>
    </div>
  )
}

export default Roomdata