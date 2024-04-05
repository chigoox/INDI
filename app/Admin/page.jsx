
import React from 'react'
import ClientManager from './Componets/ClientManager'
import { fetchInOrder } from '../MyCodes/Database'

async function page() {

    const clientList = await fetchInOrder('Users', 'name')


    return (
        <div>
            <ClientManager clientList={clientList} />
        </div>
    )
}

export default page