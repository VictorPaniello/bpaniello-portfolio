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
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('surname', data.surname);
            formData.append('email', data.email);
            formData.append('subject', data.subject);
            formData.append('message', data.message);

            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
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
        <Card className="w-full max-w-2xl shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
                <CardDescription className="text-base">
                    Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Field>
                            <FieldLabel className="text-sm font-semibold">Name *</FieldLabel>
                            <FieldGroup>
                                <Input 
                                    {...form.register('name')} 
                                    placeholder="John" 
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                />
                            </FieldGroup>
                            {form.formState.errors.name && (
                                <FieldError>{form.formState.errors.name.message}</FieldError>
                            )}
                        </Field>
                        
                        <Field>
                            <FieldLabel className="text-sm font-semibold">Surname *</FieldLabel>
                            <FieldGroup>
                                <Input 
                                    {...form.register('surname')} 
                                    placeholder="Doe" 
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                                />
                            </FieldGroup>
                            {form.formState.errors.surname && (
                                <FieldError>{form.formState.errors.surname.message}</FieldError>
                            )}
                        </Field>
                    </div>

                    <Field>
                        <FieldLabel className="text-sm font-semibold">Email *</FieldLabel>
                        <FieldGroup>
                            <Input 
                                {...form.register('email')} 
                                type="email"
                                placeholder="john.doe@example.com" 
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            />
                        </FieldGroup>
                        {form.formState.errors.email && (
                            <FieldError>{form.formState.errors.email.message}</FieldError>
                        )}
                    </Field>

                    <Field>
                        <FieldLabel className="text-sm font-semibold">Subject *</FieldLabel>
                        <FieldGroup>
                            <Input 
                                {...form.register('subject')} 
                                placeholder="What would you like to discuss?" 
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                            />
                        </FieldGroup>
                        {form.formState.errors.subject && (
                            <FieldError>{form.formState.errors.subject.message}</FieldError>
                        )}
                    </Field>

                    <Field>
                        <FieldLabel className="text-sm font-semibold">Message *</FieldLabel>
                        <FieldGroup>
                            <textarea 
                                {...form.register('message')} 
                                placeholder="Tell me more about your inquiry..." 
                                rows={6}
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none"
                            />
                        </FieldGroup>
                        {form.formState.errors.message && (
                            <FieldError>{form.formState.errors.message.message}</FieldError>
                        )}
                    </Field>
                    <CardFooter className="flex justify-between gap-4 px-0 pt-4">
                        <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => form.reset()}
                            className="w-full md:w-auto hover:cursor-pointer"
                        >
                            Reset
                        </Button>
                        <Button 
                            type="submit" 
                            disabled={form.formState.isSubmitting}
                            className="w-full md:w-auto min-w-[120px] hover:cursor-pointer"
                        >
                            {form.formState.isSubmitting ? (
                                <>
                                    <span className="animate-spin mr-2">⏳</span>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </Button>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    );
}