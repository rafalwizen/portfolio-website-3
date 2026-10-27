"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FaqSectionProps {
    translations: {
        title: string
        subtitle: string
        items: Array<{
            question: string
            answer: string
        }>
    }
}

export function FaqSection({ translations }: FaqSectionProps) {
    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{translations.title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{translations.subtitle}</p>
                </motion.div>

                <div className="space-y-4">
                    {translations.items.map((item, index) => (
                        <motion.details
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-lg border border-gray-200 shadow-sm open:shadow-md transition-shadow"
                        >
                            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-4 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                                <span>{item.question}</span>
                                <ChevronDown
                                    className="w-5 h-5 text-brand flex-shrink-0 transition-transform group-open:rotate-180"
                                    aria-hidden="true"
                                />
                            </summary>
                            <p className="px-6 pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    )
}
