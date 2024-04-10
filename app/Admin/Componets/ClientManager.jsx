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
            <div className='center-col p-2 lg:px-40 border h-auto bg-white text-sm   md:text-base text-gray-700'>
                <div className='w-full fixed top-10 shadow-sm font-bold bg-black text-whites  h-10  flex items-center justify-between px-4'>
                    <h1 className='w-1/4'>Name</h1>
                    <h1 className='w-1/4'>Appointment</h1>
                    <h1 className='w-1/3'>Contact</h1>
                    <h1 className='w-1/4 lg:block hidden'>Status</h1>
                </div>
                <div className="top-10 relative center-col">
                    {(clientList).map((item) => {
                        return (
                            <div key={item} className='w-full bg-black my-1 overflow-hidden rounded shadow-sm text-left   text-white h-32 lg:h-10  flex items-center justify-between p-4'>
                                {<h1 className='w-1/4  font-bold'>{item?.name}</h1>}
                                {<h1 className='w-1/4 font-extralight'>{item?.appointment}</h1>}
                                <div className="w-1/3 p-2">
                                    {<h1 className='lg:font-extralight break-words lg:text-sm'>{item?.email}</h1>}
                                    {<h1 className='lg:font-extralight text-sm'>{item?.phone}</h1>}
                                </div>
                                <div className=' w-1/4 px-2 items-center justify-between h-full lg:flex hidden'>
                                    <Checkbox defaultChecked={item?.contacted} onChange={() => { }} className='h-20  text-black'></Checkbox>
                                    <div className='center h-full gap-1 font-extrabold text-2xl '>
                                        <Button>...</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>



        </div >
    )
}

export default ClientManager