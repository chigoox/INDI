'use client'
import { Button } from "@nextui-org/react";
import { Checkbox } from 'antd';
import { useState } from 'react';

function ClientManager({ clientList }) {
    const [menu, setMenu] = useState('All')
    return (
        <div className=' flex  text-white w-full flex-col' >
            <div className='bg-white h-10 w-full text-xl font-bold'>
                {['All', 'Active', 'Completed'].map((item) => {
                    return (
                        <Button key={item} className={`${menu == item ? 'bg-blue-500' : 'bg-black-800'} h-full w-1/3 trans shadow-sm rounded-none shadow-black`} onPress={() => { item == menu ? setMenu('All') : setMenu(item) }}>
                            {item}
                        </Button>
                    )
                })}

            </div>
            <div className='center-col p-2 lg:px-40 bg-white text-sm  md:text-base text-gray-700'>
                <div className='w-full shadow-sm font-bold   h-10  flex items-center justify-between px-4'>
                    <h1 className='w-1/4'>Name</h1>
                    <h1 className='w-1/4'>Appointment</h1>
                    <h1 className='w-1/4'>Contact</h1>
                    <h1 className='w-1/4 lg:block hidden'>Status</h1>
                </div>
                {(clientList).map((item) => {
                    return (
                        <div key={item} className='w-full my-1  shadow-sm text-left  bg-gray-300 h-10  flex items-center justify-between px-4'>
                            {<h1 className='w-1/4 font-extralight'>{item?.name}</h1>}
                            {<h1 className='w-1/4 font-extralight'>{item?.apointment}</h1>}
                            <div className="">
                                {<h1 className='w-1/4 font-extralight'>{item?.email}</h1>}
                                {<h1 className='w-1/4 font-extralight'>{item?.email}</h1>}
                            </div>
                            <div className=' w-1/4 px-2 items-center justify-between  lg:flex hidden'>
                                <Checkbox defaultChecked={item?.contacted} onChange={() => { }} className='h-20  text-black'></Checkbox>
                                <div className='flex gap-1'>
                                    <Button>...</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>



        </div >
    )
}

export default ClientManager