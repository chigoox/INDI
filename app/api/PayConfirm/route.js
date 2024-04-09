import { addDocument, addToDatabase, fetchDocument } from "@/app/MyCodes/ed5";
import { sendEmail } from "@/app/apiCalls/Email";
import Cors from "micro-cors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


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
            const { massageID } = await fetchDocument('Admin', 'meta')
            await sendEmail(email, 'Booked with Indi!', { ...event.data.object.metadata }, 'send')
            await addDocument('Reservations', `M-${massageID}`, event.data.object.metadata)
            await addToDatabase('Admin', 'meta', 'massageID', massageID + 1)



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