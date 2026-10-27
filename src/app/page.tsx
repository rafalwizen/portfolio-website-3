"use client"

import { useState } from "react"
import { Navigation } from "@/components/sections/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { OfferSection } from "@/components/sections/OfferSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { PortfolioSection } from "@/components/sections/PortfolioSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FaqSection } from "@/components/sections/FaqSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"
import { translations } from "@/lib/translations"

export default function Portfolio() {
  const [language, setLanguage] = useState<"pl" | "en">("pl")

  const t = translations[language]

  return (
      <div className="min-h-screen bg-white">
        <Navigation language={language} setLanguage={setLanguage} translations={t.nav} />
        <HeroSection translations={t.hero} />
        <OfferSection translations={t.offer} />
        <ServicesSection translations={t.services} />
        <AboutSection translations={t.about} />
        <PortfolioSection translations={t.portfolio} language={language} />
        <TestimonialsSection translations={t.testimonials} />
        <FaqSection translations={t.faq} />
        <ContactSection translations={t.contact} />
        <Footer translations={t.footer} />
      </div>
  )
}
