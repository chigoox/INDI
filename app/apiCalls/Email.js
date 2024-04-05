import axios from 'axios'
export const sendEmail = async (toEmail, subject, userData, html) => {
    const { data } = await axios.post('/api/SendEmail', {
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

