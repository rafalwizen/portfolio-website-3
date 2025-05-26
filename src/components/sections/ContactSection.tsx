"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

interface ContactSectionProps {
    translations: {
        title: string
        subtitle: string
        form: {
            name: string
            email: string
            message: string
            send: string
            sending: string
        }
        info: {
            email: string
            phone: string
            location: string
        }
    }
}

export function ContactSection({ translations }: ContactSectionProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.currentTarget

        try {
            // Replace with your EmailJS service ID, template ID, and public key
            await emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")

            toast({
                title: "Message sent successfully!",
                description: "Thank you for your message. I'll get back to you soon.",
            })

            form.reset()
        } catch (error) {
            toast({
                title: "Error sending message",
                description: "Please try again or contact me directly.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 shadow-lg border-t-4 border-t-[hsl(188.74deg_94.5%_42.75%)]">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="name" className="text-gray-900">
                                        {translations.form.name}
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        required
                                        className="mt-1 border-gray-300 focus:border-[hsl(188.74deg_94.5%_42.75%)] focus:ring-[hsl(188.74deg_94.5%_42.75%)]"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-gray-900">
                                        {translations.form.email}
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="mt-1 border-gray-300 focus:border-[hsl(188.74deg_94.5%_42.75%)] focus:ring-[hsl(188.74deg_94.5%_42.75%)]"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="message" className="text-gray-900">
                                        {translations.form.message}
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="mt-1 border-gray-300 focus:border-[hsl(188.74deg_94.5%_42.75%)] focus:ring-[hsl(188.74deg_94.5%_42.75%)]"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[hsl(188.74deg_94.5%_42.75%)] text-white hover:bg-[hsl(188.74deg_94.5%_35%)]"
                                >
                                    {isSubmitting ? translations.form.sending : translations.form.send}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <Card className="p-6 shadow-lg">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Email</div>
                                    <div className="text-gray-600">{translations.info.email}</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Phone</div>
                                    <div className="text-gray-600">{translations.info.phone}</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Location</div>
                                    <div className="text-gray-600">{translations.info.location}</div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-white transition-colors"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-white transition-colors"
                                    >
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
