"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServicesSectionProps {
    translations: {
        title: string
        subtitle: string
        steps: Array<{
            title: string
            description: string
        }>
    }
}

export function ServicesSection({ translations }: ServicesSectionProps) {
    return (
        <section id="services" className="py-20 bg-gray-50">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {translations.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-[hsl(188.74deg_94.5%_42.75%)]">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)] text-white rounded-lg flex items-center justify-center mb-4">
                                        {index + 1}
                                    </div>
                                    <CardTitle className="text-xl">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600">{step.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
