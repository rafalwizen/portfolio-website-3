"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"

interface NavigationProps {
    language: "pl" | "en"
    setLanguage: (lang: "pl" | "en") => void
    translations: {
        home: string
        contact: string
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

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">AJ</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button
                                onClick={() => scrollToSection("hero")}
                                className="text-gray-600 hover:text-[hsl(188.74deg_94.5%_42.75%)] px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {translations.home}
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-gray-600 hover:text-[hsl(188.74deg_94.5%_42.75%)] px-3 py-2 text-sm font-medium transition-colors"
                            >
                                {translations.contact}
                            </button>
                        </div>
                    </div>

                    {/* Language Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
                            className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-[hsl(188.74deg_94.5%_42.75%)]"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-white border-t border-gray-100"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <button
                            onClick={() => scrollToSection("hero")}
                            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-[hsl(188.74deg_94.5%_42.75%)] hover:bg-gray-50"
                        >
                            {translations.home}
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-[hsl(188.74deg_94.5%_42.75%)] hover:bg-gray-50"
                        >
                            {translations.contact}
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}
