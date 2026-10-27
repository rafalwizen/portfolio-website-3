"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
    quote: string
    name: string
    role: string
}

interface TestimonialsSectionProps {
    translations: {
        title: string
        subtitle: string
        items: Testimonial[]
    }
}

export function TestimonialsSection({ translations }: TestimonialsSectionProps) {
    // Stay hidden until real client quotes are provided in translations
    if (translations.items.length === 0) {
        return null
    }

    return (
        <section id="testimonials" className="py-20 bg-white">
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
                    {translations.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-t-4 border-t-brand">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <Quote className="w-8 h-8 text-brand/40 mb-4" aria-hidden="true" />
                                    <p className="text-gray-700 leading-relaxed flex-1">„{item.quote}”</p>
                                    <div className="mt-6 pt-4 border-t border-gray-100">
                                        <div className="font-semibold text-gray-900">{item.name}</div>
                                        <div className="text-sm text-gray-500">{item.role}</div>
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
