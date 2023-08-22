import React from 'react'

function AddOns2({ item, myPackage, setMyPackage }) {

    const selected = myPackage?.addOn2?.includes(item)
    const pickAddon2 = () => {
        if (selected) {

            setMyPackage(old => {
                return (
                    {
                        ...old,
                        addOn2: (old.addOn2.length > 1 && item != 'None') ? old.addOn2.filter(i => i != item) : ['None']

                    }
                )
            })
        } else {

            setMyPackage(old => ({ ...old, addOn2: item == 'None' ? ['None'] : old.addOn2 ? [...old.addOn2, item].filter(i => i != 'None') : [item] }))

        }

    }
    return (
        <button onClick={pickAddon2} className={`h-[50%] fadeInZoom md:h-[30%]  center relative ${selected ? ' text-pink-100  w-full ' : ' text-white text-xl w-[80%] md:w-[90%]'} hover:scale-110 overflow-hidden  m-auto trans`}>
            <img className={`h-full  w-full  object-cover ${selected ? 'border-y-4 border-pink-700' : ''}`}
                src={
                    item == 'Hot Stones' ?
                        'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                        : item == 'Hot Wax' ?
                            'https://images.unsplash.com/photo-1541972270946-e171618455a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2276&q=80'
                            : item == 'Shroom Tea' ?
                                'https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                                : item == 'Smoking' ?
                                    'https://images.unsplash.com/photo-1555959304-4cfdc80a15d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80'
                                    : item == 'None' ?
                                        'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                                        : ''
                } alt="" />
            <h1 className='bg-black absolute bottom-0   text-center  md:text-3xl  w-64 h-full center bg-opacity-25'>{item}</h1>



        </button>)
}

export default AddOns2