import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Contact } from '@/components/ui/contact';

export const metadata: Metadata = {
    title: "Blanca Paniello's Portfolio",
    description: "Academic portfolio showcasing research and publications in the field of biomedicine",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

    return (
    <html lang="en" suppressHydrationWarning>
        <body>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                >
                    <FloatingNavbar />
                    {children}
            </ThemeProvider>
            <Contact />
            {/* Scroll to Top Button */}
            <ScrollToTopButton />
        </body>
    </html>
    );
}