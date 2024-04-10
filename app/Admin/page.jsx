
import React from 'react'
import ClientManager from './Componets/ClientManager'
import { fetchInOrder } from '../MyCodes/ed5'


async function page() {


    const clientList = await fetchInOrder('Reservations', 'appointment')


    return (
        <div>
            <ClientManager clientList={clientList.reverse()} />
        </div>
    )
}

export default page