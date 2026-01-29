"use client";

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea
} from '@/components/ui/input-group'

const formSchema = z.object({
    name: z
    .string(),
    surname: z
    .string(),
    email: z
    .string()
    .email('Please enter a valid email address.'),
    subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters long.')
    .max(100, 'Subject must be at most 100 characters long.'),
    message: z
    .string()
    .min(10, 'Message must be at least 10 characters long.')
    .max(500, 'Message must be at least 500 characters long.'),
})

export function ContactForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            subject: '',
            message: ''
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        try {
            const FormData = new FormData();
            FormData.append('name', data.name);
            FormData.append('surname', data.surname);
            FormData.append('email', data.email);
            FormData.append('subject', data.subject);
            FormData.append('message', data.message);

            const response = await fetch('/api', {
                method: 'POST',
                body: FormData,
            })

            if (!response.ok) {
                throw new Error('Failed to send message. Please try again later.');
            }

            toast.success('Message sent successfully!');
            form.reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again later.');
        }
    }
    return(
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Contact Me
                    </CardTitle>
                </CardHeader>
            </Card>
        </form>
    );
}