import React, { useState } from 'react'






function Page3({ setBookingInfo, setPage }) {
    const addOns = ['Massage Gun', 'Hot Stones', 'Electro Therapy', 'Face Mask', 'Scalp Massage', 'Extra Time(15mins)']
    const [selectedAddons, setSelectedAddons] = useState({})
    const [addBundle, setAddBundle] = useState(false)
    const toggleBundle = () => setAddBundle(!addBundle)

    //removeItemFromArry
    return (
        <div className='h-screen w-screen center text-white flex flex-col md:items-center justify-center  bg-black'>
            <div className=' md:w-1/2'>
                <div className=' '>
                    <h1 className='text-center'>Bundel and save!</h1>
                    <button onClick={() => { toggleBundle() }} className={`${addBundle ? 'bg-purple-700' : 'bg-black'} h-12 w-3/4 m-auto border center trans`}>
                        Save $100 buy bundle
                    </button>

                </div>

                <div className=' h-20 m-4 relative'>
                    <h1 className='md:text-8xl text-7xl text-center text-white'>Addons</h1>
                </div>
                <div className='p-2 border'>
                    <h1>Select</h1>
                    {addOns.map((item, index) => {
                        return (

                            <button onClick={() => { setSelectedAddons(old => { return ({ ...old, [item]: old[item] ? !old[item] : true }) }) }} className={` h-12 w-full border center trans ${selectedAddons[item] ? 'bg-purple-700' : 'bg-none'} `} key={index}>
                                {item}
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className='center w-1/2'>
                <button onClick={() => { setBookingInfo(old => { return ({ ...old, addOns: selectedAddons, bundle: addBundle }) }); setPage(3) }} className='h-12 w-3/4 border rounded mt-4'>Continue</button>
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