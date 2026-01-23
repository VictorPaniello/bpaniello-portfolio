import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Blanca Paniello's Portfolio",
    description: "Academic portfolio showcasing research and publications in the field of biomedicine",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <html lang="en">
        <body>
            <div className="min-h-screen bg-white">
                {children}
            </div>
        </body>
    </html>
    );
}