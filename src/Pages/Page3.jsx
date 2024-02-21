import React, { useState } from 'react'






function Page3({ setBookingInfo, setPages }) {
    const addOns = ['Massage Gun', 'Hot Stones', 'Electro Therapy', 'Face Mask', 'Scalp Massage', 'Extra Time(15mins)']

    return (
        <div className='h-screen w-screen text-white flex flex-col md:items-center justify-center  bg-black'>
            <div className=' md:w-1/2'>
                <div className=' '>
                    <h1 className='text-center'>Bundel and save!</h1>
                    <div className=' h-12 w-3/4 m-auto border center hover:bg-purple-600 '>
                        Save $100 buy bundle
                    </div>

                </div>

                <div className=' h-20 m-4 relative'>
                    <h1 className='md:text-8xl text-7xl text-center text-white'>Addons</h1>
                </div>
                <div className='p-2 border'>
                    <h1>Select</h1>
                    {addOns.map((item, index) => {
                        return (

                            <div className=' h-12 border center hover:bg-purple-700 ' key={index}>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='center w-1/2'>
                <button className='h-12 w-3/4 border rounded mt-4'>Continue</button>
            </div>


            <div className='h-10 mt-12 border-black'>
                <div className='center gap-4 p-4'>
                    {[1, 1, 1, 1].map((value, index) => {
                        if (index == 2) {
                            return (
                                <div key={index} className='rounded-full h-4 w-4 border bg-gray-200'>

                                </div>

                            )
                        }
                        else {
                            return (<div key={index} className='rounded-full h-4 w-4 bg-gray-900'>

                            </div>)
                        }
                    })}
                </div>
            </div>


        </div>
    )
}

export default Page3