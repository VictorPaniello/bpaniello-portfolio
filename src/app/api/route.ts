import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const FormData = await request.formData();

    const email = FormData.get('email') as string;
    const name = FormData.get('name') as string;
    const surname = FormData.get('surname') as string;
    const subject = FormData.get('subject') as string;
    const message = FormData.get('message') as string;

    try {
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['panivictor14@gmail.com'],
            subject: subject || 'Contact Form Submission',
            react: EmailTemplate({ 
                name: name,
                surname: surname,
                email: email,
                subject: subject ,
                message: message}),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, {status: 500});
    }
}