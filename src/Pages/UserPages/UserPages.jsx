import React from 'react'
import UserPageApointments from '../../Componets/Header/UserPageApointments'

function UserPages({ openUserPage, setOpenUserPage }) {
    return (
        <div className={`${openUserPage ? 'fixed fadeInUp trans h-[94.9vh] w-screen z-[99]' : 'h-[0vh] z-0'} `}>
            {openUserPage?.Apointments && <UserPageApointments setOpenUserPage={setOpenUserPage} />}

        </div>
    )
}

export default UserPages