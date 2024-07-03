

function Home({ setPage }) {






    return (
        <div className='flex flex-col  items-center justify-center relative '>





            <div className='w-full h-auto  border-white z-10 absolute top-[41%] center'>
                <button onClick={() => { setPage(1) }} className='text-2xl   bg-black bg-opacity-75 font-bold text-center w-auto p-4 drop-shadow-lg text-purple-700 rounded-full  h-auto '>
                    <h1>Start Booking...</h1>
                </button>
            </div>

            <div className='flex flex-col gap-4 absolute bottom-24 md:w-1/2 w-screen z-10 p-2 h-auto  text-white'>
                <h1 className='text-6xl md:text-3xl font-extrabold'>
                    Delightful massage
                </h1>
                <h1 className='text-lg font-bold'>
                    Relax and rejuvenate with personalized massages tailored to your needs. Book your session today for ultimate wellness.
                </h1>
            </div>

            <div className='absolute bottom-0   h-12 w-full bg-black  bg-opacity-25 z-50'>
                <div className='center gap-4 p-4'>
                    {[1, 1, 1, 1].map((value, index) => {
                        if (index == 0) {
                            return (
                                <div key={index} className='rounded-full h-4 w-4 bg-white'>

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

            <div className='h-1/2 w-[101%] bottom-0 left-0 absolute opacity-75 z-[1] bg-black'>
                <div className='relative bottom-40 h-40'>
                    <h1 className='text-8xl text-center font-extrabold'>IndIi</h1>

                </div>
            </div>


            <video type='video/mp4' loop autoPlay playsInline muted className='top-0 h-screen w-full object-cover relative' src={'/Videos/intro.mp4'}></video>




        </div>
    )
}

export default Home


/* 


{booking && <Bookings setBooking={setBooking} myPackage={myPackage} />}
            {hasAddOn1 && <div className={`absolute  z-20 top-12 left-0 ${selectedAddOn2 ? 'h-full' : 'h-0'} trans-slow overflow-hidden w-full bg-black`}>
                <div className='h-[40rem]  md:w-1/2 m-auto center gap-2 flex-col'>
                    {addOn200.map(item => (<AddOns3 item={item} setMyPackage={setMyPackage} myPackage={myPackage} key={item} />))}

                </div>
                {myPackage?.addOn3?.length > 0 && <button onClick={() => { setBooking(true) }} className='hover:bg-pink-700  right-0 h-10 w-full center  bg-white'>
                    <h1>Book Massage</h1>

                </button>}
                <button onClick={() => { setSelectedAddOn2(false) }} className='mt-2  right-0 h-10 w-full center hover:bg-pink-700  bg-white'>
                    <h1>Back</h1>

                </button>
            </div>}
            {Package.map(item => (<Packages item={item} setMyPackage={setMyPackage} myPackage={myPackage} key={item} />))}
            {myPackage.type && <div className='w-1/2  relative z-10'>
                <div className='grid grid-cols-1 h-[16rem] md:h-full md:grid-cols-3 grid-flow-row gap-4 relative p-4'>
                    {addOn100.map(item => (<AddOns1 item={item} key={item} setSelectedAddOn1={setSelectedAddOn1} setMyPackage={setMyPackage} myPackage={myPackage} />))}
                    {(hasAddOn1 && !hasAddOn2) && <button onClick={() => { setSelectedAddOn1(true) }} className='absolute -top-10 right-0 h-10 w-full center  bg-white hover:bg-pink-700 trans'>
                        <h1>Next</h1>

                    </button>}
                </div>
                <div className={`w-full trans-slow   center flex-col overflow-hidden ${(selectedAddOn1 && hasAddOn1) ? 'h-[29rem] bottom-1 md:h-96 border-y' : 'h-0'}`}>
                    {(selectedAddOn1 && hasAddOn1) && <div className='grid md:grid-cols-3 grid-cols-1  h-full w-full  grid-rows-2 '>
                        {addOn30.map(item => (<AddOns2 setMyPackage={setMyPackage} myPackage={myPackage} item={item} key={item} />))}

                    </div>}
                    {myPackage?.addOn2?.length > 0 &&
                        <div className='absolute -bottom-[6.2rem] md:-bottom-24 center flex-col md:flex-row gap-1  h-24 '>

                            <button onClick={() => { myPackage.type == 'BDSM Massage' ? setSelectedAddOn2(true) : noBDSM() }} className='hover:bg-pink-700 trans  h-12 w-32 center  bg-white'>
                                {myPackage.type == 'BDSM Massage' ? <h1>Next</h1> : <h1>Book Now</h1>}

                            </button>
                        </div>

                    }


                </div>
            </div>
            }
            {myPackage.type && <img className='h-screen w-[40%] absolute  top-0 right-0  opacity-20' src={'https://images.unsplash.com/photo-1549445069-d1125f7a129c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'} alt="" />}



*/
