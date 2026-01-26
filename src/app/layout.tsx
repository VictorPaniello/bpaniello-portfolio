import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top";
import { FloatingNavbar } from "@/components/ui/floating-navbar";

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
            {/* Contact Section */}
            <footer id="contact" className="bg-gray-100 dark:bg-gray-900 rounded-lg p-10 mt-20 w-full">
                <div className="max-w-7xl mx-auto px-2">
                    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                    <p className="text-gray-700 dark:text-gray-300">Email: your.email@example.com</p>
                </div>
            </footer>
            {/* Scroll to Top Button */}
            <ScrollToTopButton />
        </body>
    </html>
    );
}