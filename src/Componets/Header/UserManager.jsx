import React, { useState } from 'react'
import { BsApple, BsFacebook, BsGoogle, BsKeyFill, BsMailbox, BsMailbox2, BsPersonFill, BsPhone } from "react-icons/bs";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { AiFillCalendar, AiFillCloseCircle, AiFillCloseSquare } from 'react-icons/ai';
import { Mail, MailIcon } from 'lucide-react';
import { notify } from '../../MyCodes/ed5';

const UserManager = ({ loggedInUser, setLoggedInUser, setOpenUserPage, openUserPage }) => {


    const [showAccountPanel, setShowAccountPanel] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [loginInfo, setLoginInfo] = useState({})
    const toggleAccountPanel = () => {
        setShowRegister(false)
        setShowAccountPanel(!showAccountPanel)
    }
    const onChange = ({ target }) => {
        setLoginInfo(old => ({ ...old, [target.name]: target.value }))
    }

    const auth = getAuth();
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();


        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setLoggedInUser(user)
                notify('Logged in')
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                notify(errorMessage)

            });
    }

    const loginWithEmail = () => {
        if (loginInfo.email && loginInfo.password) signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
            .then((userCredential) => {
                // Signed in 
                notify('Signed In')
                const user = userCredential.user;
                setLoggedInUser(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                notify(errorMessage)
            });
    }

    const sendForgotPass = () => {
        if (loginInfo.email) sendPasswordResetEmail(auth, loginInfo.email)
            .then(() => {
                notify('Password reset email sent!')
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                notify(errorMessage)
                // ..
            });
    }



    const RegisterMenu = ({ setShowRegister, setLoggedInUser }) => {
        const [registerInfo, setRegisterInfo] = useState({})
        const onChange = ({ target }) => {
            setRegisterInfo(old => ({ ...old, [target.name]: target.value }))
        }
        const passwordPass = () => {
            const p1 = registerInfo.password
            const p2 = registerInfo.password2

            return (
                (p1 == p2) && (p1?.match(/[\p{P}\p{S}]/u)) ? true : false
            )
        }
        const SignUpWithEmail = () => {
            if (passwordPass()) {
                createUserWithEmailAndPassword(auth, registerInfo.email, registerInfo.password)
                    .then((userCredential) => {
                        notify('Signed in!')

                        const user = userCredential.user;
                        setLoggedInUser(user)
                        //add info to database here
                        sendEmailVerification(auth.currentUser)
                            .then(() => {
                                notify('Email verification sent!')

                            });
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        notify(errorMessage)
                        // ..
                    });
            } else {
                notify('Password does not match!')
            }
        }
        return (
            <div className={`w-full ${showRegister ? 'h-[26rem]' : 'h-0'} absolute top-12 left-0 bg-black-800 overflow-hidden `}>
                <button onClick={() => { setShowRegister(false) }}><AiFillCloseSquare /></button>
                <div className='center gap-2 flex-col'>
                    <div className='center'>
                        <MailIcon color='white' size={40} className='border' />
                        <input onChange={onChange} type="email" name='email' className='p-2' />
                    </div>
                    <div className='center'>
                        <BsPhone color='white' size={40} className='border' />
                        <input onChange={onChange} type="tel" name='phone' className='p-2' />
                    </div>
                    <div className='center'>
                        <BsKeyFill color='white' size={40} className='border' />
                        <input onChange={onChange} type="password" name='password' className='p-2' />
                    </div>
                    <div className='center'>
                        <BsKeyFill color='white' size={40} className='border' />
                        <input onChange={onChange} type="password" name='password2' className='p-2' />
                    </div>

                    <button onClick={SignUpWithEmail} className='p-2 bg-red-500 text-black text-2xl hover:scale-105 trans-slow'>Register</button>

                </div>
            </div>
        )
    }

    const UserMenuIcons = ['Apointments']

    const MenuIcon = ({ item, setOpenUserPage }) => {
        console.log(openUserPage)
        const openPage = () => {
            setOpenUserPage({ [item]: true })

        }
        return (
            <button onClick={openPage} className='h-12 w-12  center m-auto'>
                <AiFillCalendar size={48} />
            </button>
        )

    }

    const UserMenu = ({ loggedInUser, setLoggedInUser }) => {

        const signOutButton = () => {
            signOut(auth).then(() => {
                notify('Sign-out successful.')
                setLoggedInUser()
            }).catch((error) => {
                notify(error.message)
            });
        }
        return (
            <div className={`w-full ${loggedInUser?.uid ? ' h-[26rem] opacity-100' : 'h-0'} absolute top-[2.5rem] p-2 left-0 bg-black-800 z-[999] shadow-xl  shadow-black`}>
                <div className='grid grid-cols-3 grid-flow-row h-[20rem] border m-2 p-2 '>
                    {UserMenuIcons.map(item => {
                        return (
                            <MenuIcon key={item} item={item} setOpenUserPage={setOpenUserPage} />
                        )
                    })}
                </div>
                <button onClick={signOutButton} className='bg-red-500 rounded p-2 text-white'>Logout</button>
            </div>
        )
    }


    return (
        <div className='text-red-600 absolute right-0 top-2 center flex-col overflow-hidden  '>
            <button className='relative top-1 md:top-0 left-20 md:left-0' onClick={toggleAccountPanel}>
                <BsPersonFill color={'white'} size={24} />
            </button>
            <RegisterMenu setShowRegister={setShowRegister} setLoggedInUser={setLoggedInUser} />
            {loggedInUser?.uid && <UserMenu loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />}
            <div className={`${showAccountPanel ? 'h-[26rem]' : 'h-0'} trans overflow-hidden w-72 bg-black-900 mt-4 flex-col center gap-2 rounded-b-xl`}>
                <h1>Welcome Back</h1>
                <div className='border-2 p-2 center flex-col'>
                    <p>login with</p>
                    <div className='center gap-2'>
                        <button onClick={loginWithGoogle} className='hover:scale-110  trans'><BsGoogle /></button>
                    </div>
                </div>
                <h1>or</h1>
                <div className='center'>
                    <BsPersonFill color='white' size={40} className='border' />
                    <input onChange={onChange} type="text" name='email' className='p-2' />
                </div>
                <div className='center'>
                    <BsKeyFill color='white' size={40} className='border' />
                    <input onChange={onChange} type="text" name='password' className='p-2' />
                </div>


                <button onClick={loginWithEmail} className='w-32 h-12 bg-red-500 text-white rounded-lg'>Login</button>

                <div className='center gap-1'>
                    <h1 className='text-sm text-white'>Forgot password?</h1>
                    <button onClick={sendForgotPass}>Click here</button>


                </div>
                <div className='center text-xs gap-1'>
                    <h1 className=' text-white'>New to void apps? </h1>
                    <button onClick={() => { setShowRegister(true) }}>Sign up now.</button>
                </div>

            </div>

        </div>
    )
}

export default UserManager


