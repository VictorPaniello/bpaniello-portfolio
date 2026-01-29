import * as React from 'react';
import { Html, Body, Container, Text, Heading } from '@react-email/components';

interface EmailTemplateProps {
    name: string;
    surname: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
    name,
    surname,
    email,
    subject,
    message,
    }) => (
    <Html>
        <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
            <Heading>New Contact Form Submission</Heading>
            <Text><strong>From:</strong> {name} {surname}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Subject:</strong> {subject}</Text>
            <Text><strong>Message:</strong></Text>
            <Text>{message}</Text>
        </Container>
        </Body>
    </Html>
);