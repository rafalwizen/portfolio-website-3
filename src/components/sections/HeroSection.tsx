"use client"

import { motion } from "framer-motion"
import { ChevronDown, Code, Database, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroSectionProps {
    translations: {
        greeting: string
        title: string
        subtitle: string
        cta: string
        ctaSecondary: string
        stats: {
            projects: string
            clients: string
            experience: string
        }
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
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        >
            {/* Technical Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                {/* Floating Code Elements */}
                <div className="absolute top-20 left-10 text-green-400 font-mono text-sm opacity-30 animate-pulse">
                    {"const developer = {"}
                    <br />
                    {'  name: "Alex Johnson",'}
                    <br />
                    {'  skills: ["React", "Node.js"]'}
                    <br />
                    {"}"}
                </div>

                <div className="absolute top-40 right-20 text-blue-400 font-mono text-sm opacity-30 animate-pulse animation-delay-2000">
                    {"function buildAmazingApps() {"}
                    <br />
                    {"  return innovation + code;"}
                    <br />
                    {"}"}
                </div>

                <div className="absolute bottom-40 left-20 text-purple-400 font-mono text-sm opacity-30 animate-pulse animation-delay-4000">
                    {"npm install success"}
                    <br />
                    {"> Building the future..."}
                    <br />
                    {"✓ Ready to deploy"}
                </div>

                {/* Geometric Shapes */}
                <div className="absolute top-32 right-32 w-32 h-32 border border-[hsl(188.74deg_94.5%_42.75%)] opacity-20 rotate-45 animate-spin-slow" />
                <div className="absolute bottom-32 right-16 w-24 h-24 border border-green-400 opacity-20 rotate-12 animate-bounce-slow" />
                <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-r from-[hsl(188.74deg_94.5%_42.75%)] to-purple-500 opacity-20 rounded-full animate-pulse" />

                {/* Tech Icons Floating */}
                <div className="absolute top-1/4 left-1/4 opacity-10">
                    <Code className="w-8 h-8 text-white animate-float" />
                </div>
                <div className="absolute top-3/4 right-1/4 opacity-10">
                    <Database className="w-8 h-8 text-white animate-float animation-delay-2000" />
                </div>
                <div className="absolute top-1/2 right-1/3 opacity-10">
                    <Cloud className="w-8 h-8 text-white animate-float animation-delay-4000" />
                </div>

                {/* Binary Rain Effect */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-[hsl(188.74deg_94.5%_42.75%)] font-mono text-xs opacity-20 animate-fall"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 2}s`,
                            }}
                        >
                            {Math.random() > 0.5 ? "1" : "0"}
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <p className="text-lg text-[hsl(188.74deg_94.5%_42.75%)] mb-4 font-mono">{translations.greeting}</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{translations.title}</h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">{translations.subtitle}</p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button
                                size="lg"
                                onClick={() => scrollToSection("contact")}
                                className="bg-[hsl(188.74deg_94.5%_42.75%)] hover:bg-[hsl(188.74deg_94.5%_35%)] text-black px-8 py-3 font-semibold"
                            >
                                {translations.cta}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => scrollToSection("portfolio")}
                                className="px-8 py-3 border-[hsl(188.74deg_94.5%_42.75%)] text-[hsl(188.74deg_94.5%_42.75%)] hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-black"
                            >
                                {translations.ctaSecondary}
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 max-w-md">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[hsl(188.74deg_94.5%_42.75%)]">50+</div>
                                <div className="text-sm text-gray-400">{translations.stats.projects}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[hsl(188.74deg_94.5%_42.75%)]">30+</div>
                                <div className="text-sm text-gray-400">{translations.stats.clients}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[hsl(188.74deg_94.5%_42.75%)]">5+</div>
                                <div className="text-sm text-gray-400">{translations.stats.experience}</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Photo Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glowing Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(188.74deg_94.5%_42.75%)] via-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />

                            {/* Photo Container */}
                            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[hsl(188.74deg_94.5%_42.75%)] shadow-2xl">
                                <Image
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Alex Johnson - Full-Stack Developer"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Tech Badges */}
                            <div className="absolute -top-4 -right-4 bg-gray-800 border border-[hsl(188.74deg_94.5%_42.75%)] rounded-lg px-3 py-1 text-[hsl(188.74deg_94.5%_42.75%)] text-sm font-mono animate-bounce">
                                React
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-green-400 rounded-lg px-3 py-1 text-green-400 text-sm font-mono animate-bounce animation-delay-2000">
                                Node.js
                            </div>
                            <div className="absolute top-1/2 -right-8 bg-gray-800 border border-purple-400 rounded-lg px-3 py-1 text-purple-400 text-sm font-mono animate-bounce animation-delay-4000">
                                TypeScript
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
                <ChevronDown className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
            </motion.div>
        </section>
    )
}
