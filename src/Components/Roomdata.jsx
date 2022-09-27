import React, { useState } from 'react'
import "./roomdata.css"
import Button from './Button'
import Popup from './Popup'
import { useEffect } from 'react'
import apiCall from '../serivce/apiCall'
const Roomdata = ({ btn_text }) => {
    const [roomData, setRoomData] = useState([])
    const [addroom, setaddroom] = useState(false)
    const [editid, setEditId] = useState(null)
    const [deleteid, setdeleteid] = useState(null)

    useEffect(() => {
        apiCall("/rooms", "GET")

            .then(respones => {
                setRoomData(respones);
                console.log(roomData);
            })
    }, [setaddroom,addroom,editid,deleteid])
    function popuproom() {
        console.log(setaddroom);
        setaddroom(true);

    }
    const deleteroom=async()=>{
        const res=await apiCall(`/rooms/${deleteid}`,"DELETE")
        setdeleteid(null)
    }


    return (
        <div className='roomdata-main'>
            <div className='roomdata-head'>
                Room
                <div className='roomdata-adbtn'>
                    <Button color='white' text={btn_text} back='#d7ae63' padding="10px" wid='92px' hi='40px' funtionality={popuproom} />
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
                    {roomData?.map((data, index) => {
                        return (
                            <div className='roomdata-data' key={data.id}>
                                <div>{data.roomNumber}</div>
                                <div>{data.adultCapacity}</div>
                                <div>{data.childCapacity}</div>
                                <div>{data.price}</div>

                                <div><svg onClick={() => {
                                    setaddroom(true)
                                    setEditId(data.id);

                                }} height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" /></svg>
                                </div>
                                <div onClick={()=>{setdeleteid(data.id)}}><svg xmlns="http://www.w3.org/2000/svg"
                                    height='20px' viewBox="0 0 448 512"><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" /></svg>
                                </div>

                            </div>

                        )
                    })}
                </div>

                <div className={addroom || deleteid ? "popwindow" : ""}>
                    {addroom && <Popup setaddroom={setaddroom} editid={editid} setEditId={setEditId} roomData={roomData} deleteid={deleteid} />}
                    {
                        deleteid && 
                        
                        <div className="delete_popup">
                            <div className="delete_text"><h3>Are You Sure Wanted to Delete</h3></div>
                            <div className="delete_buttons">
                                <button  onClick={deleteroom}>Delete</button>
                                <button onClick={()=>{setdeleteid(null)}}>close</button>
                            </div>
                        
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default Roomdata