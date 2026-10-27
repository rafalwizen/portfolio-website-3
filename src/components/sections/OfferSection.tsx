"use client"

import { motion } from "framer-motion"
import { Store, Camera, Building2, Check, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const icons = [Store, Camera, Building2]

interface OfferSectionProps {
    translations: {
        title: string
        subtitle: string
        items: Array<{
            title: string
            description: string
            features: string[]
        }>
        note: string
    }
}

export function OfferSection({ translations }: OfferSectionProps) {
    const scrollToContact = () => {
        const element = document.getElementById("contact")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="offer" className="py-20 bg-white">
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
                    {translations.items.map((item, index) => {
                        const Icon = icons[index] ?? Store
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow border-t-4 border-t-brand flex flex-col">
                                    <CardHeader>
                                        <div className="w-12 h-12 bg-brand/10 text-brand rounded-lg flex items-center justify-center mb-4">
                                            <Icon className="w-6 h-6" aria-hidden="true" />
                                        </div>
                                        <CardTitle className="text-xl">{item.title}</CardTitle>
                                        <CardDescription className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="mt-auto">
                                        <ul className="space-y-2">
                                            {item.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                                                    <Check className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" aria-hidden="true" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <button
                        onClick={scrollToContact}
                        className="inline-flex items-center space-x-2 text-brand font-medium hover:text-brand-dark transition-colors"
                    >
                        <span>{translations.note}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
