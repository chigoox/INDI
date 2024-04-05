import axios from 'axios'
export const sendSMS = async (toNumber, body, userData) => {
    const { data } = await axios.post('/api/SendSMS', {
        toNumber: toNumber,
        body: body,
        userData: userData

    },
        {
            headers: {
                'Cache-Control': 'no-cache',
                "Content-Type": "application/json",
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        })

    return (data)
}

