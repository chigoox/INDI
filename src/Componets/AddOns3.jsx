import React from 'react'

function AddOns3({ item, myPackage, setMyPackage }) {

    const selected = myPackage?.addOn3?.includes(item)
    const pickaddOn3 = () => {
        if (selected) {

            setMyPackage(old => {
                return (
                    {
                        ...old,
                        addOn3: (old.addOn3.length > 1 && item != 'None') ? old.addOn3.filter(i => i != item) : ['None']

                    }
                )
            })
        } else {

            setMyPackage(old => ({ ...old, addOn3: item == 'None' ? ['None'] : old.addOn3 ? [...old.addOn3, item].filter(i => i != 'None') : [item] }))

        }

    }
    return (
        <button onClick={pickaddOn3} className={`h-[10%] md:h-[5%]  center relative ${selected ? ' text-pink-100  w-full ' : ' text-white text-xl w-[80%] md:w-[90%]'} hover:scale-110 overflow-hidden  m-auto trans`}>
            <img className={`h-full  w-full  object-cover ${selected ? 'border-y-4 border-pink-700' : ''}`}
                src={
                    item == 'Ball Trampling' ?
                        'https://video-images.vice.com/test-uploads/articles/5e7e4d6d1511e6009c56768f/lede/1585335668717-3_27_2020_COCK_TRAMPLING_AND_BALL_BUSTING_CV.jpeg?crop=1xw:1xh;center,center&resize=1800:*'
                        : item == 'Golden Shower' ?
                            'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2561,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1491846656/articles/2017/01/11/wet-and-wild-the-history-of-golden-showers/170111-crocker-golden-showers-tease_vnv1no'
                            : item == 'Mummification' ?
                                'https://images.unsplash.com/photo-1649365245035-1f29626ebfe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
                                : item == 'Impact Play' ?
                                    'https://assets-global.website-files.com/5f921ea5cf0058796a47ee47/62ba1343866d408165d66131_62b9db9cf59801231a0732f6_impact_play_guide.jpeg'
                                    : item == 'None' ?
                                        'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg?w=2000&t=st=1692582067~exp=1692582667~hmac=94da7d7c50cbd5a5d6474346c5b493cef1c52cdc70de6bfab679ffb13de19e88'
                                        : item == "Breath Play" ?
                                            'https://i.etsystatic.com/40384404/r/il/2c9151/4579339181/il_1588xN.4579339181_s6bx.jpg'
                                            : item == "Restraints" ?
                                                'https://i.etsystatic.com/11763829/r/il/f0a436/4141153769/il_1588xN.4141153769_d77z.jpg'
                                                : item == 'Queening' ?
                                                    'https://m.media-amazon.com/images/I/71RBbx0xovL.__AC_SX300_SY300_QL70_FMwebp_.jpg'


                                                    : 'https://images.unsplash.com/4/feet.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80'
                } alt="" />
            <h1 className='bg-black absolute bottom-0   text-center  md:text-3xl  w-full h-full center bg-opacity-25'>{item}</h1>



        </button>)
}

export default AddOns3