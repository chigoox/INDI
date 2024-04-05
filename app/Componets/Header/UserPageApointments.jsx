import React, { useContext, useEffect, useState } from 'react'
import { fetchDocument } from '../../MyCodes/ed5'
import { UserContext } from '../../page'



function UserPageApointments({ setOpenUserPage }) {
    const [loggedInUserDATA, setLoggedInUserDATA] = useState({})
    const [adminDATA, setAdminDATA] = useState({})
    const user = useContext(UserContext)[0]
    const uid = user.uid

    useEffect(() => {
        fetchDocument('Users', uid, setLoggedInUserDATA)
    }, [])





    return (
        <div className='h-full w-full bg-black top-12 relative'>
            <div className='md:w-1/2 h-full m-auto'>
                <h1 className='text-center text-3xl text-white'>My Apointments</h1>
                <br />
                <br />
                <h1 className='text-[#8b288b] text-center text-sm'>current </h1>
                <div className='h-12 bg-gray-700 center'>
                    <h1 className='text-white text-lg fadeInZoom'>{loggedInUserDATA.reservation}</h1>
                </div>
                <h1 className='text-gray-300 text-center text-sm mt-12'>Past </h1>
                <div className='bg-gray-700 h-96 overflow-y-scroll hidescroll center flex-col rounded'>
                    {loggedInUserDATA?.pastReservation?.map(item => {
                        return (
                            <div className='my-auto bg-purple-800 fadeInBottom rounded text-white p-2'>
                                {item}
                            </div>
                        )
                    })}
                </div>
                <div className='w-full center mt-12'>
                    <button onClick={() => { setOpenUserPage() }} className='h-12 w-32 rounded bg-white '>Close</button>

                </div>

            </div>


        </div>
    )

}

export default UserPageApointments