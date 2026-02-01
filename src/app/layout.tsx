import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Contact } from '@/components/ui/contact';

export const metadata: Metadata = {
    title: "Blanca Paniello Castillo",
    description: "Academic portfolio showcasing research and publications in the field of biomedicine",
    keywords: ["Blanca Paniello", "B. Paniello-Castillo", "Paniello-Castillo B.", "research", "climate change", "health", "gender", "socioeconomic"],
    openGraph: {
        title: "Blanca Paniello Castillo",
        description: "Academic portfolio showcasing research and publications in the field of biomedicine",
        type: "website",
        url: "https://blancapaniello.com",
        images: [{ url: "/public/photo/Picture_BPC.jpeg" }],
    }
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Blanca Paniello Castillo",
        "url": "https://blancapaniello.com",
        "jobTitle": "Researcher",
        "sameAs": [
            "https://orcid.org/0000-0002-3754-6571",
            "https://www.linkedin.com/in/blanca-paniello-castillo-a738b5114/"
        ]
    };

    return (
    <html lang="en" suppressHydrationWarning>
        <head>
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </head>
        <body>
            <FloatingNavbar />
                {children}
            <Contact />
            {/* Scroll to Top Button */}
            <ScrollToTopButton />
        </body>
    </html>
    );
}