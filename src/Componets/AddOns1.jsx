import React from 'react'

const AddOns1 = ({ item, myPackage, setMyPackage }) => {
    const selected = myPackage?.addOn1?.includes(item)
    const pickAddon1 = () => {
        if (selected) {
            console.log(myPackage.addOn1.length == 1)

            setMyPackage(old => {
                return (
                    {
                        ...old,
                        //addOn1: (old.addOn1.length > 1) ? old.addOn1.filter(i => i != item) : []
                        addOn1: (old.addOn1.length > 1 && item != 'None') ? old.addOn1.filter(i => i != item) : []


                    }
                )
            })
        } else {

            setMyPackage(old => ({ ...old, addOn1: item == 'None' ? [] : old.addOn1 ? [...old.addOn1, item] : [item] }))


        }

    }
    return (
        <button onClick={pickAddon1} className={`h-[70%] md:h-[70%] w-[80%] md:w-full center relative rounded-2xl ${selected ? 'bg-pink-800  border-4 border-pink-700' : ''} text-white hover:scale-110 overflow-hidden  m-auto trans`}>
            <h1 className=' absolute  center h-full  md:text-3xl  bg-black w-full  bg-opacity-25'>{item}</h1>
            <img className='h-full w-full object-cover'
                src={
                    item == 'Double Trouble' ?
                        'https://images.unsplash.com/photo-1593526666682-a5bb356fc575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                        :
                        item == 'Facials' ?
                            'https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/articles-2/mens-facial/loreal-paris-article-why-facials-for-men-are-a-good-idea-d.jpg?rev=8914f9f6cd6947af94a71f01681aab8a'
                            : 'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?w=2000&t=st=1692582067~exp=1692582667~hmac=94da7d7c50cbd5a5d6474346c5b493cef1c52cdc70de6bfab679ffb13de19e88'
                } alt="" />


        </button>
    )

}

export default AddOns1