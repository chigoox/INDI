import React from 'react'

const Packages = ({ item, setMyPackage, myPackage }) => {
    const seletected = (myPackage.type?.includes(item))

    return (
        <button onClick={() => { setMyPackage(old => ({ ...old, type: (myPackage.type == item) ? undefined : item })) }} className={`h-screen ${myPackage.type ? 'w-1/3' : 'w-1/2'} ${seletected ? 'border-y-8  border-pink-700  text-2xl    md:text-3xl' : 'border-0 text-2xl md:text-3xl'} bg-red-900  relative group   overflow-hidden trans-slow`}>
            <div className={`z-10 absolute top-[50%]   group-hover:bg-black w-full  ${seletected ? 'bg-[#5c295c] bg-opacity-50 text-pink-500' : 'bg-black bg-opacity-20 text-pink-300'} group-hover:scale-[1.05]  group-hover:bg-opacity-100 trans`}>
                <h1 className=' group-hover:text-pink-200 text-center'>{item}</h1>
            </div>
            <img className='h-full w-full object-cover relative'
                src={item == 'Standard Massage' ?
                    "https://img.freepik.com/free-photo/young-couple-relaxing-during-back-massage-health-spa-focus-is-young-woman_637285-2209.jpg?w=1060&t=st=1692209177~exp=1692209777~hmac=3b4fd506f110100501f33232f12fdb90efa7b37b5eae0752a27315ce256de121"
                    : 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80'} alt="" />

        </button>
    )
}

export default Packages