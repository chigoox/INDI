import NewEmail from "@/app/Componets/Email Componets/NewClient";
import SendEmailBody from "@/app/Componets/Email Componets/SendEmailBody";
import Cors from "micro-cors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from 'resend';


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const RESEND_API_KEY = process.env.RESEND_KEY;
const resend = new Resend(RESEND_API_KEY)


const cors = Cors({
    allowMethods: ["POST", "HEAD"],
});

const secret = process.env.STRIPE_WEBHOOK_KEY || "";

export async function POST(request) {
    try {
        const body = await request.text();

        const signature = headers().get("stripe-signature");

        const event = stripe.webhooks.constructEvent(body, signature, secret);



        if (event.type === "checkout.session.completed") {
            const { email } = event.data.object.metadata

            console.log('before resend')
            await resend.emails.send({
                from: 'Indi <Indi@resend.dev>',
                to: email,
                subject: 'Booked with Indi!',
                react: data.html == 'send' ? SendEmailBody({ userData: event.data.object.metadata }) :
                    data.html == 'new' ? NewEmail({ userData: data.userData }) : (<div></div>),
            });




        }
        return NextResponse.json({ result: event, ok: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "something went wrong",
                ok: false,
            },
            { status: 500 }
        );
    }
}