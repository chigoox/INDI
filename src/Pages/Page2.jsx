import React, { useState } from 'react'



const Item = ({ index }) => {
    const [currentImage, setCurrentImage] = useState('https://media.istockphoto.com/id/1357320952/photo/close-up-of-a-man-getting-massage.jpg?s=1024x1024&w=is&k=20&c=dafDviVoV3hGPvhkm2DHwlxIjrmsjI-WXoyAhiGE1N4=')
    return (
        <div key={index} className='h-[27rem] w-72 border-purple-200 border m-auto  rounded-lg col-span-1 overflow-hidden '>
            <div className='h-[70%] w-full relative '>
                <div className="absolute grid grid-cols-3 gap-2 w-full  z-50 left-0 bottom-4">
                    {['https://media.istockphoto.com/id/1357320952/photo/close-up-of-a-man-getting-massage.jpg?s=1024x1024&w=is&k=20&c=dafDviVoV3hGPvhkm2DHwlxIjrmsjI-WXoyAhiGE1N4=',
                        'https://media.istockphoto.com/id/1443062220/photo/skincare-massage-and-physiotherapy-hands-for-zen-couple-in-spa-for-wellness-relax-or-health.jpg?s=1024x1024&w=is&k=20&c=oe3uUWbjnCLKLAdre3ug6EToMGYkCBAHKOYUKHkx4nw=',
                        'https://media.istockphoto.com/id/1079058338/photo/couple-getting-a-massage-together.jpg?s=1024x1024&w=is&k=20&c=yh9MLMF062_LFeDWAp0QeSxDbkt2TFVjvJOEAuHbZoQ='].map(item => {
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
                <h1 className='text-4xl font-bold file: text-center'>Name</h1>
                <h1 className='text-2xl  file: text-center'>$75.99/hr</h1>
                <button className='p-2 bg-purple-700 h-12 w-3/4 rounded'>Book Now</button>


            </div>
        </div>
    )
}



function Page2() {

    return (
        <div className='h-screen w-screen  border-2 border-red-600 bg-white'>


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
                    [1, 1, 1, 1, 1].map((value, index) => (<Item index={index} />))
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