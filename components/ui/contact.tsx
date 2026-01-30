import React from 'react';

import { ContactForm } from '@/components/ui/contact-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet
} from '@/components/ui/field';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollToTopButton } from '@/components/ui/scroll-to-top';

export function Contact() {
    return(
        <footer id="contact" className="bg-foreground p-24 w-full">
            <div className="max-w-7xl mx-auto px-2">
                <h1 className="text-5xl font-bold mb-4 text-background">Contact</h1>
                <ContactForm />
            </div>
        </footer>
    );
}