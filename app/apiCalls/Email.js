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
    const { data } = await axios.post(inDev ? '/api/SendEmailz' : 'https://www.indimassage.com/api/SendEmail', {
        toEmail: toEmail,
        subject: subject,
        html: html,
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

