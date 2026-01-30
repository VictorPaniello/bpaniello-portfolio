import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    console.log('API route called');
    
    try {
        // Verifica que la API key esté configurada
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set');
            return NextResponse.json(
                { error: 'Email service not configured' }, 
                { status: 500 }
            );
        }

        const formData = await request.formData();
        console.log('FormData received');

        const email = formData.get('email') as string;
        const name = formData.get('name') as string;
        const surname = formData.get('surname') as string;
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        console.log('Form data:', { name, surname, email, subject });

        if (!email || !name || !surname || !subject || !message) {
            console.error('Missing required fields');
            return NextResponse.json(
                { error: 'Missing required fields' }, 
                { status: 400 }
            );
        }

        console.log('Sending email via Resend...');

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <contact@pblanca.com>',
            to: ['paniblanca@gmail.com'],
            subject: subject,
            react: EmailTemplate({ 
                name,
                surname,
                email,
                subject,
                message
            }) as React.ReactElement,
        });

        if (error) {
            console.error('Resend API error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }, 
            { status: 500 }
        );
    }
}