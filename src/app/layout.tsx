import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Contact } from '@/components/ui/contact';

export const metadata: Metadata = {
    title: "Blanca Paniello Castillo | Biomedical Researcher",
    description: "Dr. Blanca Paniello Castillo - Biomedical researcher specializing in climate change, health impacts, gender studies, and socioeconomic research. View publications and academic portfolio.",
    keywords: ["Blanca Paniello Castillo", "B. Paniello-Castillo", "Paniello-Castillo B.", "biomedical research", "climate change health", "gender health research", "socioeconomic health"],
    authors: [{ name: "Blanca Paniello Castillo" }],
    creator: "Blanca Paniello Castillo",
    publisher: "Blanca Paniello Castillo",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        title: "Blanca Paniello Castillo | Biomedical Researcher",
        description: "Biomedical researcher specializing in climate change, health impacts, gender studies, and socioeconomic research",
        type: "profile",
        url: "https://blancapaniello.com",
        siteName: "Blanca Paniello Castillo Portfolio",
        images: [{ 
            url: "/photo/Picture_BPC.jpeg",
            width: 1200,
            height: 630,
            alt: "Blanca Paniello Castillo"
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blanca Paniello Castillo | Biomedical Researcher",
        description: "Biomedical researcher specializing in climate change and health research",
        images: ["/photo/Picture_BPC.jpeg"],
    },
    alternates: {
        canonical: "https://blancapaniello.com",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Blanca Paniello Castillo",
        "url": "https://blancapaniello.com",
        "jobTitle": "Biomedical Researcher",
        "description": "Biomedical researcher specializing in climate change, health impacts, gender studies, and socioeconomic research",
        "sameAs": [
            "https://orcid.org/0000-0002-3754-6571",
            "https://www.linkedin.com/in/blanca-paniello-castillo-a738b5114/"
        ],
        "knowsAbout": ["Biomedicine", "Climate Change", "Health Research", "Gender Studies", "Socioeconomic Research"]
    };

    return (
    <html lang="en" suppressHydrationWarning>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://blancapaniello.com" />
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </head>
        <body>
            <FloatingNavbar />
                {children}
            <Contact />
            <ScrollToTopButton />
        </body>
    </html>
    );
}