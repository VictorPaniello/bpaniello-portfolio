import React from 'react';

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
        <footer id="contact" className="bg-gray-100 dark:bg-gray-900 rounded-lg p-10 mt-20 w-full">
            <div className="max-w-7xl mx-auto px-2">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-700 dark:text-gray-300">Email: your.email@example.com</p>
            </div>
        </footer>
    );
}