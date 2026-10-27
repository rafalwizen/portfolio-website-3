"use client"

import { motion } from "framer-motion"
import { ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
    translations: {
        greeting: string
        title: string
        subtitle: string
        badges: string[]
        cta: string
        ctaSecondary: string
        ctaNote: string
    }
}

export function HeroSection({ translations }: HeroSectionProps) {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16 pb-20"
        >
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left order-2 lg:order-1"
                    >
                        <p className="text-base sm:text-lg text-brand mb-3 sm:mb-4 font-mono">
                            {translations.greeting}
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            {translations.title}
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 max-w-2xl">
                            {translations.subtitle}
                        </p>

                        {/* Credibility badges */}
                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                            {translations.badges.map((badge, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center gap-1.5 border border-white/20 bg-white/5 text-gray-300 text-xs sm:text-sm rounded-full px-3 py-1"
                                >
                                    <Check className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button
                                size="lg"
                                onClick={() => scrollToSection("contact")}
                                className="bg-brand text-brand-foreground hover:bg-brand-dark px-6 sm:px-8 py-3 font-semibold text-sm sm:text-base"
                            >
                                {translations.cta}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToSection("portfolio")}
                                className="px-6 sm:px-8 py-3 border-brand bg-transparent text-white hover:bg-brand hover:text-brand-foreground text-sm sm:text-base"
                            >
                                {translations.ctaSecondary}
                            </Button>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-400 mt-4">{translations.ctaNote}</p>
                    </motion.div>

                    {/* Photo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative">
                            {/* Glowing Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-brand via-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />

                            {/* Photo Container - Responsive sizing */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-brand shadow-2xl">
                                <Image
                                    src="/images/me_myself_and_I.webp"
                                    alt="Rafał Wiżeń — twórca stron internetowych"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    priority
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <ChevronDown className="w-6 h-6 text-brand" aria-hidden="true" />
            </motion.div>
        </section>
    )
}
