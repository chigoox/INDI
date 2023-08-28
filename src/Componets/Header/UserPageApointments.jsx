import React, { useEffect, useState } from 'react'



function UserPageApointments({ setOpenUserPage }) {
    const [loggedInUserDATA, setLoggedInUserDATA] = useState({})
    const [adminDATA, setAdminDATA] = useState({})
    console.log(adminDATA)





    return (
        <div className='h-full w-full bg-black top-12 relative'>
            <div className='md:w-1/2 h-full m-auto'>
                <h1 className='text-center text-3xl text-white'>My Apointments</h1>
                <br />
                <br />
                <h1 className='text-[#8b288b] text-center text-sm'>current </h1>
                <div className='h-12 bg-gray-700'></div>
                <h1 className='text-gray-300 text-center text-sm mt-12'>Past </h1>
                <div className='bg-gray-700 h-96 overflow-y-scroll hidescroll'></div>
                <div className='w-full center mt-12'>
                    <button onClick={() => { setOpenUserPage() }} className='h-12 w-32 rounded bg-white '>Close</button>

                </div>

            </div>


        </div>
    )

}

export default UserPageApointments