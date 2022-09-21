import React from 'react'
import Navbar from '../Components/Navbar'
import Popup from '../Components/Popup'
import Roomdata from '../Components/Roomdata'
import { roomdata } from '../Components/Tabledata'


const Room = () => {
  return (
    <div>
     <div>
      <Navbar/>
     </div>
    <Roomdata btn_text='Add Room' data={roomdata}/>
    <div>
      
    </div>
    
    
    </div>
  )
}

export default Room