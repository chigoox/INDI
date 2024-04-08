import axios from 'axios'


const isDev = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return true
    } else {
        return false
    }
}

const inDev = isDev()


export const sendEmail = async (toEmail, subject, userData, html) => {
    const isUserDataEmpty = Object.keys(userData).length === 0

    try {
        const { data } = await axios.post(inDev ? 'http://localhost:3000/api/SendEmail' : 'https://www.indimassage.com/api/SendEmail', {
            toEmail: toEmail || 'dikeemmanuel54@gmail.com',
            subject: subject || 'test',
            html: html || 'send',
            userData: isUserDataEmpty ? { name: 'emmanuel', phone: '9088888888' } : userData

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
    } catch (error) {
        console.log(error)
    }
}

