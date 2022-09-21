
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage'
import Room from './Pages/Room'
import Booking from './Pages/Booking'
import Newbooking from './Components/Newbooking';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Room' element={<Room/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/Newbooking' element={<Newbooking/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
