"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
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
    // Track current image index for each project
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({})
    // Track animation direction for each project
    const [animationDirection, setAnimationDirection] = useState<Record<number, "left" | "right">>({})

    // Navigate to previous image
    const prevImage = (projectIndex: number) => {
        setAnimationDirection((prev) => ({ ...prev, [projectIndex]: "left" }))
        setCurrentImageIndex((prev) => {
            const currentIndex = prev[projectIndex] || 0
            const projectImages = projects[projectIndex].images || []
            const newIndex = currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1
            return { ...prev, [projectIndex]: newIndex }
        })
    }

    // Navigate to next image
    const nextImage = (projectIndex: number) => {
        setAnimationDirection((prev) => ({ ...prev, [projectIndex]: "right" }))
        setCurrentImageIndex((prev) => {
            const currentIndex = prev[projectIndex] || 0
            const projectImages = projects[projectIndex].images || []
            const newIndex = currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1
            return { ...prev, [projectIndex]: newIndex }
        })
    }

    // Get current image for a project
    const getCurrentImage = (projectIndex: number) => {
        const index = currentImageIndex[projectIndex] || 0
        const projectImages = projects[projectIndex].images || []
        return projectImages[index] || projects[projectIndex].image || "/placeholder.svg?height=300&width=500"
    }

    // Check if project has multiple images
    const hasMultipleImages = (projectIndex: number) => {
        return (projects[projectIndex].images?.length || 0) > 1
    }

    // Animation variants for smooth transitions
    const imageVariants = {
        enter: (direction: "left" | "right") => ({
            x: direction === "right" ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            zIndex: 1,
        },
        exit: (direction: "left" | "right") => ({
            x: direction === "right" ? -300 : 300,
            opacity: 0,
            zIndex: 0,
        }),
    }

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
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    {/* Image carousel with smooth transitions */}
                                    <div className="relative w-full h-full">
                                        <AnimatePresence mode="sync" custom={animationDirection[index] || "right"}>
                                            <motion.div
                                                key={`${index}-${currentImageIndex[index] || 0}`}
                                                custom={animationDirection[index] || "right"}
                                                variants={imageVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{
                                                    x: { type: "spring", stiffness: 250, damping: 25, duration: 0.72 },
                                                    opacity: { duration: 0.6, ease: "easeInOut" },
                                                }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={getCurrentImage(index) || "/placeholder.svg"}
                                                    alt={`${project.title[language]} - Image ${(currentImageIndex[index] || 0) + 1}`}
                                                    width={500}
                                                    height={300}
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Navigation arrows - only show if project has multiple images */}
                                        {hasMultipleImages(index) && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        prevImage(index)
                                                    }}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors z-10"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        nextImage(index)
                                                    }}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors z-10"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image indicators */}
                                        {hasMultipleImages(index) && (
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
                                                {(projects[index].images || []).map((_, imageIndex) => (
                                                    <button
                                                        key={imageIndex}
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            const direction = imageIndex > (currentImageIndex[index] || 0) ? "right" : "left"
                                                            setAnimationDirection((prev) => ({ ...prev, [index]: direction }))
                                                            setCurrentImageIndex((prev) => ({ ...prev, [index]: imageIndex }))
                                                        }}
                                                        className={`w-2 h-2 rounded-full transition-colors ${
                                                            (currentImageIndex[index] || 0) === imageIndex ? "bg-white" : "bg-white/50"
                                                        }`}
                                                        aria-label={`Go to image ${imageIndex + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <CardHeader className="flex-1">
                                    <CardTitle>{project.title[language]}</CardTitle>
                                    <CardDescription>{project.description[language]}</CardDescription>
                                </CardHeader>

                                <CardFooter className="flex gap-3">
                                    <Button
                                        size="sm"
                                        variant="default"
                                        className="bg-[hsl(188.74deg_94.5%_42.75%)] hover:bg-[hsl(188.74deg_94.5%_35%)] text-white"
                                        onClick={() => window.open(project.liveUrl, "_blank")}
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        {translations.viewLive}
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-[hsl(188.74deg_94.5%_42.75%)] text-[hsl(188.74deg_94.5%_42.75%)] hover:bg-[hsl(188.74deg_94.5%_42.75%)] hover:text-white"
                                        onClick={() => window.open(project.codeUrl, "_blank")}
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        {translations.viewCode}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
