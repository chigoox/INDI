import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home';
import UserManager from './Componets/Header/UserManager';
import { addToDatabase, fetchDocument, notify, updateArrayDatabaseItem, updateDatabaseItem } from './MyCodes/ed5';
import UserPages from './Pages/UserPages/UserPages';
import { getAuth, onAuthStateChanged } from "firebase/auth";



export const UserContext = createContext()
const auth = getAuth();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const uid = loggedInUser?.uid
  const [openUserPage, setOpenUserPage] = useState()
  const [adminReservation, setAdminadminReservation] = useState()
  const [userReservation, setUserReservation] = useState()


  const addadminReservationToDataBase = async () => {

    await addToDatabase('Users', uid, 'reservation', adminReservation[uid])
    await updateArrayDatabaseItem('Admin', 'reservations', 'allRes', adminReservation[uid])
  }


  if (adminReservation) {
    addadminReservationToDataBase()
    setAdminadminReservation()
  }

  const successBook = async () => {

    await fetchDocument('Admin', 'onHold', setAdminadminReservation)

    updateDatabaseItem('Admin', 'onHold', uid)
    updateDatabaseItem('Users', uid, 'willBook')

  }
  const canceledBook = () => {
    if (loggedInUser) {
      updateDatabaseItem('Admin', 'onHold', uid)
      updateDatabaseItem('Users', uid, 'willBook')
    }

  }
  if (!userReservation) {
    if (uid) fetchDocument('Users', uid, setUserReservation)
  }
  useEffect(() => {

    if (userReservation) {
      updateArrayDatabaseItem('Users', uid, 'pastReservation', userReservation.reservation)

    }
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("successBook")) successBook();
    if (query.get("canceledBook")) canceledBook();


  }, [loggedInUser, userReservation]);

  useEffect(() => {


    const query = new URLSearchParams(window.location.search);

    if (query.get("successBook")) notify("Appointment booked");
    if (query.get("canceledBook")) notify("Booking Canceled");
    if (query.get("success")) notify("Order placed");
    if (query.get("canceled")) notify("Order Canceled");

  }, []);



  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedInUser(user)

    } else {

    }
  });



  return (
    <div className="App w-full h-screen overflow-hidden bg-[#4d194d]  scroll-able relative">
      <div className='h-12 bg-black center gap-2 w-full z-[999] fixed'>
        <a className='center gap-1 relative right-28 md:right-0' href="./">
          <h1 className='text-white'>iNDY</h1>
        </a>

        <UserManager loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setOpenUserPage={setOpenUserPage} />
      </div>
      {/* PAGES */}
      <UserContext.Provider value={[loggedInUser]}>
        <UserPages openUserPage={openUserPage} setOpenUserPage={setOpenUserPage} />
        <Home />
      </UserContext.Provider>
      {/* Footer */}
      <div className='bg-black bottom-0 w-full '>

      </div>


    </div >
  )
}

export default App
