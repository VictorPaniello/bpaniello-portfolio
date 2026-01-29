import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    surname: string;
    email: string;
    subject: string;
    message: string;
}

export function EmailTemplate({ name, surname, email, subject, message }: EmailTemplateProps) {
    return (
        <div>
            <h1>Welcome, { name }</h1>
        </div>
    );
}