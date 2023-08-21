import { createContext, useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook } from "react-icons/ai";
import './App.css'
import Home from './Pages/Home';
import LOGO from './assets/httpLOGO.png'
import UserManager from './Componets/Header/UserManager';
import { notify } from './MyCodes/ed5';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("successBook")) notify("Appointment Booked");
    if (query.get("success")) notify("Order placed");
    if (query.get("canceledBook")) notify("Booking Canceled");
    if (query.get("canceled")) notify("Order Canceled");

  }, []);

  return (
    <div className="App w-full h-fit bg-[#4d194d]  scroll-able ">
      <div className='h-12 bg-black center gap-2 w-full z-[999] fixed'>
        <a className='center gap-1 relative right-28 md:right-0' href="./">
          <h1 className='text-white'>iNDI</h1>
        </a>

        <UserManager loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      </div>
      {/* PAGES */}
      <UserContext.Provider value={loggedInUser}>
        <Home />
      </UserContext.Provider>
      {/* Footer */}
      <div className='bg-black bottom-0 w-full '>

      </div>


    </div >
  )
}

export default App
