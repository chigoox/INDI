'use client'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import { addToDatabase, fetchDocument, getRandTN, notify, updateArrayDatabaseItem, updateDatabaseItem } from './MyCodes/ed5';
import Home from './Pages/Home';
import Home2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Bookings from './Pages/SubPages/Booking';
import './globals.css';
import Loading from "./Componets/Loading";



export const UserContext = createContext()
const auth = getAuth();

function Page() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const uid = loggedInUser?.uid || (typeof window !== 'undefined') ? localStorage.getItem('LOCAL_UID') : ''
  const [adminReservation, setAdminadminReservation] = useState()
  const [userReservation, setUserReservation] = useState()
  const [loading, setLoading] = useState(false)

  const addadminReservationToDataBase = async () => {
    await addToDatabase('Users', uid, 'reservation', adminReservation[uid])
    await updateArrayDatabaseItem('Admin', 'reservations', 'allRes', adminReservation[uid])
  }


  if (adminReservation) {
    addadminReservationToDataBase()
    setAdminadminReservation()
  }
  if (!userReservation) {
    if (uid) fetchDocument('Users', uid, setUserReservation)
  }

  const successBook = async () => {
    setLoading(true)

    await fetchDocument('Admin', 'onHold', setAdminadminReservation)

    await fetchDocument('Admin', 'onHold', setAdminadminReservation)
    await updateDatabaseItem('Admin', 'onHold', uid)
    await updateDatabaseItem('Users', uid, 'willBook')
    setLoading(false)

    window.location.href = '/'

  }

  const canceledBook = async () => {
    setLoading(true)
    await updateDatabaseItem('Admin', 'onHold', uid)
    await updateDatabaseItem('Users', uid, 'willBook')
    if (loggedInUser) {
    }
    setLoading(false)
    window.location.href = '/'

  }


  useEffect(() => {

    if (userReservation?.reservation) {
      updateArrayDatabaseItem('Users', uid, 'pastReservation', userReservation?.reservation)

    }
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("successBook")) successBook();
    if (query.get("canceledBook")) canceledBook();


  }, [loggedInUser, userReservation]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user)

      } else {

      }
    });

    const query = new URLSearchParams(window.location.search);

    if (query.get("successBook")) notify("Appointment booked");
    if (query.get("canceledBook")) notify("Booking Canceled");
    if (query.get("success")) notify("Order placed");
    if (query.get("canceled")) notify("Order Canceled");


  }, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem('LOCAL_UID')) localStorage?.setItem('LOCAL_UID', getRandTN(10));

    }
  }, [])

  const [page, setPage] = useState(0)
  const [bookingInfo, setBookingInfo] = useState({
    type: '',
    total: 0,
  })



  return (
    <div className="App w-full h-screen overflow-x-hidden    scroll-able relative">
      {loading && <Loading />}
      {/* PAGES */}
      <UserContext.Provider value={[loggedInUser]}>
        {/* <UserPages openUserPage={openUserPage} setOpenUserPage={setOpenUserPage} /> */}
        {page == 0 && <Home setPage={setPage} />}
        {page == 1 && <Home2 setPage={setPage} setBookingInfo={setBookingInfo} />}
        {page == 2 && <Page3 setPage={setPage} setBookingInfo={setBookingInfo} />}
        {page == 3 && <Bookings bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} />}
      </UserContext.Provider>
      {/* Footer */}
      <div className='bg-black bottom-0 w-full '>

      </div>


    </div >
  )
}

export default Page
