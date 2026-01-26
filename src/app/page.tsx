"use client"

import * as React from 'react';
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { NavigationMenuItem, NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu'
import { ModeToggle } from "@/components/ui/mode-toggle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
    
    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const contactSection = document.getElementById('contact')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="relative min-h-screen">
            {/* Navigation Header */}
            <header className="border-b border-gray-200/50 backdrop-blur-sm">
                <nav className="max-w-7xl mx-auto px-0 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-semibold">Blanca Paniello-Castillo</h1>
                        <div className="flex justify-between items-end">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href="/">Home</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href="/articles">Articles</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href="/">Seminars / Teaching</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href="/media">Media</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href="/about-me">About Me</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href="/volunteering">Volunteering</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Link href="#contact" onClick={handleContactClick}><FontAwesomeIcon icon={faEnvelope} bounce style={{
                                                '--fa-animation-delay': '2s',
                                                '--fa-animation-iteration-count': '3',
                                                } as any} />&nbsp;Contact</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                </nav>
            </header>
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-2 py-12">
                {/* Hero Section */}
                <section className="mb-20 flex items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold mb-4">Hi!<br />I'm Blanca!</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Brief introduction about yourself and your work in biomedicine.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <img 
                            src="/photo/Picture_BPC.jpeg" 
                            alt="Blanca Paniello-Castillo"
                            className="max-w-80 rounded-full shadow-lg object-cover"
                        />
                    </div>
                </section>
                {/* Quick Links Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <a href="/publications" className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
                        <h3 className="text-xl font-semibold mb-2">Publications</h3>
                        <p className="text-gray-600">View my research publications</p>
                    </a>
                </section>
            </main>
            {/* Contact Section */}
            <footer id="contact" className="bg-gray-100 dark:bg-gray-900 rounded-lg p-10 mt-20 w-full">
                <div className="max-w-7xl mx-auto px-2">
                    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                    <p className="text-gray-700 dark:text-gray-300">Email: your.email@example.com</p>
                </div>
            </footer>

            {/* Floating Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 hover:opacity-80 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 cursor-pointer"
                style={{ backgroundColor: 'var(--foreground)' }}
                aria-label="Scroll to top"
            >
                <FontAwesomeIcon icon={faArrowUp} size="lg" />
            </button>
        </div>
    );
}