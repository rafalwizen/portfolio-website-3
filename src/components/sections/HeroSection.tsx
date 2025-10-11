"use client"

import { motion } from "framer-motion"
import { ChevronDown, Code, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HeroSectionProps {
    translations: {
        greeting: string
        title: string
        subtitle: string
        cta: string
        ctaSecondary: string
    }
}

interface BinaryRainDrop {
    id: number
    left: string
    animationDelay: string
    animationDuration: string
    value: string
}

export function HeroSection({ translations }: HeroSectionProps) {
    const [desktopRaindrops, setDesktopRaindrops] = useState<BinaryRainDrop[]>([])
    const [mobileRaindrops, setMobileRaindrops] = useState<BinaryRainDrop[]>([])
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)

        // Generate raindrops only on client-side
        const desktopDrops = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            value: Math.random() > 0.5 ? "1" : "0",
        }))

        const mobileDrops = Array.from({ length: 5 }, (_, i) => ({
            id: i + 100, // Different IDs from desktop drops
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            value: Math.random() > 0.5 ? "1" : "0",
        }))

        setDesktopRaindrops(desktopDrops)
        setMobileRaindrops(mobileDrops)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section
            id="hero"
            className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16 pb-20"
        >
            {/* Technical Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                {/* Floating Code Elements - Hidden on mobile for better performance */}
                <div className="hidden md:block absolute top-20 left-10 text-green-400 font-mono text-sm opacity-30 animate-pulse">
                    {"const developer = {"}
                    <br />
                    {'  name: "Rafał Wiżeń",'}
                    <br />
                    {'  skills: ["React", "Node.js"]'}
                    <br />
                    {"}"}
                </div>

                <div className="hidden md:block absolute top-40 right-20 text-blue-400 font-mono text-sm opacity-30 animate-pulse animation-delay-2000">
                    {"function buildAmazingApps() {"}
                    <br />
                    {"  return innovation + code;"}
                    <br />
                    {"}"}
                </div>

                <div className="hidden md:block absolute bottom-40 left-20 text-purple-400 font-mono text-sm opacity-30 animate-pulse animation-delay-4000">
                    {"npm install success"}
                    <br />
                    {"> Building the future..."}
                    <br />
                    {"✓ Ready to deploy"}
                </div>

                {/* Geometric Shapes - Adjusted for mobile */}
                <div className="absolute top-32 right-8 md:right-32 w-16 h-16 md:w-32 md:h-32 border border-[hsl(188.74deg_94.5%_42.75%)] opacity-20 rotate-45 animate-spin-slow" />
                <div className="absolute bottom-32 right-4 md:right-16 w-12 h-12 md:w-24 md:h-24 border border-green-400 opacity-20 rotate-12 animate-bounce-slow" />
                <div className="absolute top-1/2 left-4 md:left-16 w-8 h-8 md:w-16 md:h-16 bg-gradient-to-r from-[hsl(188.74deg_94.5%_42.75%)] to-purple-500 opacity-20 rounded-full animate-pulse" />

                {/* Tech Icons Floating - Hidden on mobile */}
                <div className="hidden md:block absolute top-1/4 left-1/4 opacity-10">
                    <Code className="w-8 h-8 text-white animate-float" />
                </div>
                <div className="hidden md:block absolute top-3/4 right-1/4 opacity-10">
                    <Database className="w-8 h-8 text-white animate-float animation-delay-2000" />
                </div>
                <div className="hidden md:block absolute top-1/2 right-1/3 opacity-10">
                    <Cloud className="w-8 h-8 text-white animate-float animation-delay-4000" />
                </div>

                {/* Binary Rain Effect - Only rendered client-side */}
                {isClient && (
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Desktop raindrops */}
                        {desktopRaindrops.map((drop) => (
                            <div
                                key={drop.id}
                                className="absolute text-[hsl(188.74deg_94.5%_42.75%)] font-mono text-xs opacity-20 animate-fall hidden md:block"
                                style={{
                                    left: drop.left,
                                    animationDelay: drop.animationDelay,
                                    animationDuration: drop.animationDuration,
                                }}
                            >
                                {drop.value}
                            </div>
                        ))}

                        {/* Mobile raindrops */}
                        {mobileRaindrops.map((drop) => (
                            <div
                                key={drop.id}
                                className="absolute text-[hsl(188.74deg_94.5%_42.75%)] font-mono text-xs opacity-20 animate-fall md:hidden"
                                style={{
                                    left: drop.left,
                                    animationDelay: drop.animationDelay,
                                    animationDuration: drop.animationDuration,
                                }}
                            >
                                {drop.value}
                            </div>
                        ))}
                    </div>
                )}
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
                        <p className="text-base sm:text-lg text-[hsl(188.74deg_94.5%_42.75%)] mb-3 sm:mb-4 font-mono">
                            {translations.greeting}
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                            {translations.title}
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl">
                            {translations.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button
                                size="lg"
                                onClick={() => scrollToSection("contact")}
                                className="bg-[hsl(188.74deg_94.5%_42.75%)] hover:bg-[hsl(188.74deg_94.5%_35%)] text-black px-6 sm:px-8 py-3 font-semibold text-sm sm:text-base"
                            >
                                {translations.cta}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToSection("portfolio")}
                                className="px-6 sm:px-8 py-3 border-[hsl(188.74deg_94.5%_42.75%)] text-black hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-black text-sm sm:text-base"
                            >
                                {translations.ctaSecondary}
                            </Button>
                        </div>
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
                            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(188.74deg_94.5%_42.75%)] via-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />

                            {/* Photo Container - Responsive sizing */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[hsl(188.74deg_94.5%_42.75%)] shadow-2xl">
                                <Image
                                    src="/images/me_myself_and_I.webp?height=400&width=400"
                                    alt="Rafał Wiżeń - to ja!"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Tech Badges - Adjusted for mobile */}
                            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gray-800 border border-[hsl(188.74deg_94.5%_42.75%)] rounded-lg px-2 py-1 sm:px-3 sm:py-1 text-[hsl(188.74deg_94.5%_42.75%)] text-xs sm:text-sm font-mono animate-bounce">
                                React
                            </div>
                            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gray-800 border border-green-400 rounded-lg px-2 py-1 sm:px-3 sm:py-1 text-green-400 text-xs sm:text-sm font-mono animate-bounce animation-delay-2000">
                                Node.js
                            </div>
                            <div className="absolute top-1/2 -right-4 sm:-right-8 bg-gray-800 border border-purple-400 rounded-lg px-2 py-1 sm:px-3 sm:py-1 text-purple-400 text-xs sm:text-sm font-mono animate-bounce animation-delay-4000">
                                TypeScript
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <ChevronDown className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
            </motion.div>
        </section>
    )
}
