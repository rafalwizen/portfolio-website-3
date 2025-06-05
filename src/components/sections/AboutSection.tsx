"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Image from "next/image"

interface AboutSectionProps {
    translations: {
        title: string
        subtitle: string
        skills: string[]
        technologies: string
    }
}

export function AboutSection({ translations }: AboutSectionProps) {

    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{translations.title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{translations.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6 mb-8">
                            {translations.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="relative">
                                            <div className="w-6 h-6 bg-gradient-to-r from-[hsl(188.74deg_94.5%_42.75%)] to-blue-500 rounded-full flex items-center justify-center">
                                                <Check className="w-3.5 h-3.5 text-white" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(188.74deg_94.5%_42.75%)] to-blue-500 rounded-full blur-sm opacity-30 animate-pulse"></div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{skill}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src="/placeholder.svg?height=500&width=500"
                            alt="Developer workspace"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
