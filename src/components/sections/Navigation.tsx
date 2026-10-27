"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import Image from 'next/image'

interface NavigationProps {
    language: "pl" | "en"
    setLanguage: (lang: "pl" | "en") => void
    translations: {
        home: string
        offer: string
        process: string
        portfolio: string
        contact: string
        menu: string
    }
}

export function Navigation({ language, setLanguage, translations }: NavigationProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsMenuOpen(false)
        }
    }

    const links = [
        { id: "offer", label: translations.offer },
        { id: "services", label: translations.process },
        { id: "portfolio", label: translations.portfolio },
        { id: "contact", label: translations.contact },
    ]

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Image src="/logo.png" alt="Logo" width={50} height={50} />
                    </div>

                    {/* Desktop Navigation - Moved to right side */}
                    <div className="hidden md:flex items-center space-x-6">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-gray-600 hover:text-brand px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
                            className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-brand"
                            aria-label={translations.menu}
                        >
                            <Globe className="w-4 h-4" aria-hidden="true" />
                            <span>{language.toUpperCase()}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button & Language Toggle */}
                    <div className="flex items-center space-x-4 md:hidden">
                        <button
                            onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
                            className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-brand"
                            aria-label={translations.menu}
                        >
                            <Globe className="w-4 h-4" aria-hidden="true" />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-900"
                            aria-label={translations.menu}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {links.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-brand hover:bg-gray-50"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
