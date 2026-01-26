import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";

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
                >
                    {children}
            </ThemeProvider>
        </body>
    </html>
    );
}