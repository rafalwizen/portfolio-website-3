"use client"

import { motion } from "framer-motion"
import { Check, Code, Database, Smartphone, Cloud } from "lucide-react"
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
    const techStack = [
        { icon: Code, name: "React" },
        { icon: Database, name: "Node.js" },
        { icon: Smartphone, name: "Mobile" },
        { icon: Cloud, name: "AWS" },
    ]

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
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {translations.skills.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <Check className="w-5 h-5 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                    <span className="text-gray-700">{skill}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{translations.technologies}</h3>

                        <div className="grid grid-cols-4 gap-4">
                            {techStack.map((tech, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center mb-2 mx-auto hover:bg-[hsl(188.74deg_94.5%_42.75%)]/20 transition-colors">
                                        <tech.icon className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                    </div>
                                    <span className="text-sm text-gray-600">{tech.name}</span>
                                </div>
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
