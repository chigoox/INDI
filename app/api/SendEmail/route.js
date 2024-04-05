import NewEmail from '@/app/Componets/Email Componets/NewClient';
import SendEmailBody from '@/app/Componets/Email Componets/SendEmailBody';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = process.env.RESEND_KEY;
const resend = new Resend(RESEND_API_KEY)

export async function POST(request) {
    let data = await request.json();




    try {
        const res = await resend.emails.send({
            from: 'IKCO <IKCO@resend.dev>',
            to: data.toEmail,
            subject: data.subject,
            react: data.html == 'send' ? SendEmailBody({ userData: data.userData }) :
                data.html == 'new' ? NewEmail({ userData: data.userData }) : (<div></div>),
        });

        return NextResponse.json(res.id);
    } catch (error) {
        return NextResponse.json({ error: error.message });

    }




}
