import React, { useEffect, useState } from 'react'
import { disableScroll } from '../MyCodes/ed5'
import { AiOutlineMenu } from 'react-icons/ai'
import Packages from '../Componets/Packages'
import AddOns1 from '../Componets/AddOns1'
import AddOns2 from '../Componets/AddOns2'
import AddOns3 from '../Componets/AddOns3'
import Bookings from './SubPages/Booking'


function Home() {
    const [myPackage, setMyPackage] = useState({})
    const [selectedAddOn1, setSelectedAddOn1] = useState(false)
    const [selectedAddOn2, setSelectedAddOn2] = useState(false)
    const [booking, setBooking] = useState(false)
    const Package = ['Standard Massage', 'sensual Massage']
    const addOn30 = ['Hot Stones', 'Hot Wax', 'Shroom Tea', 'Smoking', 'None']
    const addOn100 = ['Double Trouble', 'Facials', 'None']
    const addOn200 = ['Ball Trampling', 'Golden Shower', 'Mummification', 'Impact Play', 'Breath Play', 'Restraints', 'Queening', 'Foot Worship(Mine of course)', 'None']
    const addTime = ['Yes, add 30min', 'No']

    const hasAddOn1 = myPackage?.addOn1?.length > 0
    const hasAddOn2 = myPackage?.addOn2?.length > 0


    console.log(myPackage)

    useEffect(() => {
        if (!hasAddOn1) setSelectedAddOn1(hasAddOn2 && hasAddOn1)

    }, [myPackage])

    useEffect(() => {
        if (!hasAddOn1) setMyPackage(old => ({ ...old, addOn2: [] }))



    }, [hasAddOn1])



    return (
        <div className='center relative '>
            {booking && <Bookings setBooking={setBooking} myPackage={myPackage} />}
            {hasAddOn1 && <div className={`absolute  z-20 top-12 left-0 ${selectedAddOn2 ? 'h-full' : 'h-0'} trans-slow overflow-hidden w-full bg-black`}>
                <div className='h-[40rem]  md:w-1/2 m-auto center gap-2 flex-col'>
                    {addOn200.map(item => (<AddOns3 item={item} setMyPackage={setMyPackage} myPackage={myPackage} key={item} />))}

                </div>
                {myPackage?.addOn3?.length > 0 && <button onClick={() => { setBooking(true) }} className='  right-0 h-10 w-full center  bg-white'>
                    <h1>Book Massage</h1>

                </button>}
                <button onClick={() => { setSelectedAddOn2(false) }} className='mt-2  right-0 h-10 w-full center  bg-white'>
                    <h1>Back</h1>

                </button>
            </div>}
            {Package.map(item => (<Packages item={item} setMyPackage={setMyPackage} myPackage={myPackage} key={item} />))}
            {myPackage.type && <div className='w-1/2 relative z-10'>
                <div className='grid grid-cols-1 h-[16rem] md:h-full md:grid-cols-3 grid-flow-row gap-4 relative p-4'>
                    {addOn100.map(item => (<AddOns1 item={item} key={item} setSelectedAddOn1={setSelectedAddOn1} setMyPackage={setMyPackage} myPackage={myPackage} />))}
                    {(hasAddOn1 && !hasAddOn2) && <button onClick={() => { setSelectedAddOn1(true) }} className='absolute -top-10 right-0 h-10 w-full center  bg-white'>
                        <h1>Next</h1>

                    </button>}
                </div>
                <div className={`w-full trans-slow   center flex-col overflow-hidden ${(selectedAddOn1 && hasAddOn1) ? 'h-[30rem] bottom-1 md:h-96 border-y' : 'h-0'}`}>
                    {(selectedAddOn1 && hasAddOn1) && <div className='grid md:grid-cols-3 grid-cols-1  h-full w-full  grid-rows-2 '>
                        {addOn30.map(item => (<AddOns2 setMyPackage={setMyPackage} myPackage={myPackage} item={item} key={item} />))}

                    </div>}
                    {myPackage?.addOn2?.length > 0 && <button onClick={() => { setSelectedAddOn2(true) }} className=' absolute  h-10 w-32 -bottom-12 center  bg-white'>
                        <h1>Next</h1>

                    </button>}


                </div>
            </div>
            }
            {myPackage.type && <img className='h-screen w-[42.7%] absolute  top-0 right-0  opacity-20' src={'https://images.unsplash.com/photo-1549445069-d1125f7a129c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'} alt="" />}

        </div>
    )
}

export default Home