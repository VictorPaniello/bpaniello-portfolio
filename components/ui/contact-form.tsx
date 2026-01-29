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

    /*function onSubmit(data: z.infer<typeof formSchema>) {
        toast('You submitted the following values:', {
            name: ()
        })
    }
    return();*/
}