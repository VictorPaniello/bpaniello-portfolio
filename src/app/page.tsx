import * as React from "react";
import ReactDOM from 'react-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import CardNav from '@/components/CardNav'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu'
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
    const items = [
        {
            label: "About",
            bgColor: "#fff",
            textColor: "#000",
            links: [
                { label: "Company", ariaLabel: "About Company"},
                { label: "Career", ariaLabel: "About Career"}
            ]
        }
    ];
    
    return (
        <div className="relative min-h-screen">
          {/* Navigation Header */}
            <header className="border-b border-gray-200/50 backdrop-blur-sm">
                <nav className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold">Blanca Paniello</h1>
                        <ModeToggle />
                    </div>
                </nav>
            </header>

        <CardNav
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
            />
        
          {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                {/* Hero Section */}
                <section className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">Welcome</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Brief introduction about yourself and your work in biomedicine.
                    </p>
                </section>
                {/* Quick Links Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <a href="/publications" className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">Publications</h3>
                        <p className="text-gray-600">View my research publications</p>
                    </a>
                    <a href="/projects" className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">Projects</h3>
                        <p className="text-gray-600">Explore my research projects</p>
                    </a>
                    <a href="/about-me" className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">About Me</h3>
                        <p className="text-gray-600">View my profile</p>
                    </a>
                    <a href="/cv" className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">CV</h3>
                        <p className="text-gray-600">Download my curriculum vitae</p>
                    </a>
                </section>

            {/* Contact Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-700">
                Email: your.email@example.com
                    </p>
                </section>
            </main>
        </div>
    );
}