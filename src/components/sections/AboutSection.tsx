"use client"

import { motion } from "framer-motion"
import { Check, Database, Smartphone, Cloud } from "lucide-react"
import { FaReact } from "react-icons/fa"
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
        { icon: FaReact, name: "React", animation: "spin" },
        { icon: Database, name: "Node.js", animation: "bounce" },
        { icon: Smartphone, name: "Mobile", animation: "none" },
        { icon: Cloud, name: "AWS", animation: "none" },
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

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{translations.technologies}</h3>

                        <div className="grid grid-cols-4 gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center mb-2 mx-auto hover:bg-[hsl(188.74deg_94.5%_42.75%)]/20 transition-colors">
                                        {tech.animation === "spin" ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    ease: "linear",
                                                }}
                                            >
                                                <tech.icon className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                            </motion.div>
                                        ) : tech.animation === "bounce" ? (
                                            <motion.div
                                                animate={{
                                                    y: [0, -10, 0, -5, 0, -2, 0],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    repeatDelay: 1.5,
                                                    ease: "easeOut",
                                                    times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
                                                }}
                                            >
                                                <tech.icon className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                            </motion.div>
                                        ) : (
                                            <tech.icon className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                        )}
                                    </div>
                                    <span className="text-sm text-gray-600">{tech.name}</span>
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
