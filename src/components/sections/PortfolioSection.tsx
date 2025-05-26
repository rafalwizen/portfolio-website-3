"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { projects } from "@/lib/projects"

interface PortfolioSectionProps {
    translations: {
        title: string
        subtitle: string
        viewLive: string
        viewCode: string
    }
    language: "pl" | "en"
}

export function PortfolioSection({ translations, language }: PortfolioSectionProps) {
    return (
        <section id="portfolio" className="py-20 bg-gray-50">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className="relative">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-4">
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-white"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                {translations.viewLive}
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-white"
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                {translations.viewCode}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description[language]}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="bg-[hsl(188.74deg_94.5%_42.75%)]/10 text-[hsl(188.74deg_94.5%_42.75%)] hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-white"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
