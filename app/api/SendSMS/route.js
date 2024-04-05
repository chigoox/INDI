import { NextResponse } from 'next/server';
import * as Twilio from 'twilio';




const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = Twilio(accountSid, authToken);


export async function POST(request) {
    let data = await request.json();



    console.log(data)
    try {
        const message = await client.messages
            .create({
                body: data.body,
                messagingServiceSid: 'MG55bab5d2a4c7892710908e903ba6f4d9',
                to: data.toNumber
            });

        return NextResponse.json(message.sid);
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({ error: error.message });

    }




}





