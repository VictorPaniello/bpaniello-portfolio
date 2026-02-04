import React from 'react';

import { Contact7 } from '../contact7';

export function Contact() {
    return(
        <footer id="contact" className="bg-foreground p-16 w-full">
            <div className="max-w-7xl mx-auto px-2">
                <h1 className="text-5xl font-bold mb-4 text-background">Contact</h1>
                <Contact7 />
            </div>
        </footer>
    );
}