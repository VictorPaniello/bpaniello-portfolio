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
        return (
        <div className="relative min-h-screen">
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
        </div>
    );
}