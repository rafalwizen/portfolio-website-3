"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
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
            emailLabel?: string
            phoneLabel?: string
            locationLabel?: string
        }
        messages: {
            success: {
                title: string
                description: string
            }
            error: {
                title: string
                description: string
            }
        }
    }
}

export function ContactSection({ translations }: ContactSectionProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
    const [formData, setFormData] = useState({
        domain: "Portfolio Rafał",
        name: "",
        email: "",
        message: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        const form = e.target as HTMLFormElement
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string

        emailjs
            .sendForm(serviceID, templateID, form, userID)
            .then(
                () => {
                    console.log("Wiadomość wysłana pomyślnie")
                    setSubmitStatus("success")
                    setFormData({
                        domain: "Portfolio Rafał",
                        name: "",
                        email: "",
                        message: "",
                    })
                },
                (error) => {
                    console.log("Błąd podczas wysyłania wiadomości")
                    console.log(error)
                    setSubmitStatus("error")
                },
            )
            .finally(() => {
                setIsSubmitting(false)
            })
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
                                <input type="hidden" name="domain" value={formData.domain} />
                                <div>
                                    <Label htmlFor="name" className="text-gray-900">
                                        {translations.form.name}
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
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
                                        value={formData.email}
                                        onChange={handleInputChange}
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
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 border-gray-300 focus:border-[hsl(188.74deg_94.5%_42.75%)] focus:ring-[hsl(188.74deg_94.5%_42.75%)]"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[hsl(188.74deg_94.5%_42.75%)] text-white hover:bg-[hsl(188.74deg_94.5%_35%)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? translations.form.sending : translations.form.send}
                                </Button>

                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-[hsl(188.74deg_94.5%_42.75%_/0.4)] rounded-md">
                                        <div className="font-semibold text-gray-900">{translations.messages.success.title}</div>
                                        <div className="text-gray-600">{translations.messages.success.description}</div>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-[hsl(188.74deg_94.5%_42.75%_/0.4)] rounded-md">
                                        <div className="font-semibold text-gray-900">{translations.messages.error.title}</div>
                                        <div className="text-gray-600">{translations.messages.error.description}</div>
                                    </div>
                                )}
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
                                    <div className="font-semibold text-gray-900">{translations.info.emailLabel || "Email"}</div>
                                    <div className="text-gray-600">{translations.info.email}</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{translations.info.phoneLabel || "Phone"}</div>
                                    <div className="text-gray-600">{translations.info.phone}</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-[hsl(188.74deg_94.5%_42.75%)]" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{translations.info.locationLabel || "Location"}</div>
                                    <div className="text-gray-600">{translations.info.location}</div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200">
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/rafalwizen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-[hsl(188.74deg_94.5%_42.75%)]/10 rounded-lg flex items-center justify-center hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-white transition-colors"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/rafał-wiżeń-637357258"
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
