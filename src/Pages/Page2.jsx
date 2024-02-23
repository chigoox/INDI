import React, { useState } from 'react'



const Item = ({ index, service, setBookingInfo, setPage }) => {
    const [currentImage, setCurrentImage] = useState(service.imgs[0])
    return (
        <div key={index} className='h-[27rem] w-72 border-black shadow-sm shadow-black border m-auto  rounded-lg col-span-1 overflow-hidden '>
            <div className='h-[65%] w-full relative '>
                <div className="absolute grid grid-cols-3 gap-2 w-full  z-50 left-0 bottom-4">
                    {service.imgs.map(item => {
                        return (
                            <div onMouseOver={() => {
                                if (currentImage == item) return
                                setCurrentImage(item)
                            }} key={item} className='w-20 overflow-hidden col-span-1 h-20 m-auto rounded-lg bg-white '>
                                <img className='h-full w-full object-cover' src={item} alt="" />
                            </div>
                        )
                    })}
                </div>
                <img
                    className='h-full w-full object-cover'
                    src={currentImage} alt="" />

            </div>
            <div className='h-auto p-2 w-full  center-col'>
                <h1 className='text-2xl font-bold file: text-center'>{service.name}</h1>
                <h1 className='text-xl  file: text-center'>${service.price}/hr</h1>
                <button onClick={() => { setBookingInfo(service); setPage(2) }} className='p-2 bg-black text-white hover:text-purple-700 trans h-12 w-3/4 rounded'>Book Now</button>


            </div>
        </div>
    )
}



function Page2({ setBookingInfo, setPage }) {
    const Services = [
        {
            name: 'Aroma Therapy Massage',
            price: 125,
            imgs: [
                'https://pranarom.ca/blog/wp-content/uploads/2019/05/african-woman-enjoying-aromatherapy-massage-in-7Q48E9W-min-1170x658.jpg',
                'https://i0.wp.com/www.sayangsmassagespa.com/wp-content/uploads/2019/08/Aromatherapy-Massage-1.png?resize=768%2C469&ssl=1',
                'https://cdn-klodd.nitrocdn.com/ehXILJrndyIcitDskefUVpAzoEBvyyQO/assets/images/optimized/rev-b7fb3b5/sochi.edu/wp-content/uploads/aromatherapy-massage.jpg',
            ]

        },
        {
            name: 'Hot Stone Massage',
            price: 125,
            imgs: [
                'https://www.wisniewskichiropracticomaha.com/images/uploads/entries/_cover/Wisniewski_Chiropractic-10.23-Blog_.jpg',
                'https://zimsusa.com/wp-content/uploads/2021/03/hot-stone.jpg',
                'https://zimsusa.com/wp-content/uploads/2021/03/hot-stone-2.jpg',
            ]

        },
        {
            name: 'Reflexology Massage',
            price: 150,
            imgs: [
                'https://images.everydayhealth.com/images/what-is-reflexology-guide-1440x810.jpg',
                'https://secretspa.imgix.net/2022/02/Reflexology-Massage.jpg?auto=compress%2Cformat&ixlib=php-3.3.0&s=5325922b6418804862ba96d5cd263f2f',
                'https://media.post.rvohealth.io/wp-content/uploads/2020/08/10780-What_is_Reflexology_and_How_Does_it_Work-_Benefits_Research_Safety_732x549-thumbnail-732x549.jpg',
            ]

        },
        {
            name: 'Full Body Massage',
            price: 150,
            imgs: [
                'https://qph.cf2.quoracdn.net/main-qimg-05efdb4eee9d2ad925a87328faa77372-lq',
                'https://blog.skillsuccess.com/wp-content/uploads/2019/11/full-body-massage.webp',
                'https://www.treatyourfeetbuckhead.com/wp-content/uploads/2016/01/body-massage-002-1.jpg',
            ]

        },
        {
            name: 'Sensual Massage',
            price: 350,
            imgs: [
                'https://sensuosity.co.uk/wp-content/uploads/2022/11/tantric-bg.jpg',
            ]

        },

    ]

    return (
        <div className='h-screen w-screen  bg-white'>


            <div className='flex flex-col item-centers justify-center gap-4 h-auto relative top-2 '>
                <h1 className='w-full  text-center font-bold text-3xl'>
                    Services
                </h1>
                <h1 className='text-center'>
                    For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3   xl:w-3/4 hidescroll m-auto top-8 mb-20 border-t relative p-2 overflow-hidden overflow-y-scroll h-[70%] '>
                {
                    Services.map((service, index) => (<Item index={index} service={service} setBookingInfo={setBookingInfo} setPage={setPage} />))
                }


            </div>

            <div className='h-10  border-black'>
                <div className='center gap-4 p-4'>
                    {[1, 1, 1, 1].map((value, index) => {
                        if (index == 1) {
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

export default Page2