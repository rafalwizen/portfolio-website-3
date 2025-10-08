import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Rafał Wiżeń – Tworzenie stron internetowych, wizytówek i portfolio",
    description:
        "Projektuję nowoczesne, szybkie i dopasowane do potrzeb strony internetowe – wizytówki, portfolio i strony firmowe. Pomagam budować profesjonalną obecność online dla małych firm i twórców.",
    keywords:
        "tworzenie stron internetowych, strony wizytówki, portfolio online, strony firmowe, projektowanie stron, Rafał Wiżeń, web developer, front-end, Next.js, React, strony dla firm, strony dla freelancerów",
    authors: [{ name: "Rafał Wiżeń", url: "https://rafal-wizen.vercel.app" }],
    openGraph: {
        title: "Rafał Wiżeń – Tworzenie stron internetowych i portfolio",
        description:
            "Strony internetowe dopasowane do Ciebie – szybkie, estetyczne i skuteczne. Sprawdź moją ofertę tworzenia stron wizytówek i portfolio.",
        type: "website",
        locale: "pl_PL",
        url: "https://rafal-wizen.vercel.app/",
        siteName: "Rafał Wiżeń Web Design",
        images: [
            {
                url: "https://rafal-wizen.vercel.app/images/screenshot7.jpg",
                width: 1200,
                height: 630,
                alt: "Nowoczesna strona internetowa cukierni stworzona przez pasjonata!",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rafał Wiżeń – Tworzenie stron internetowych i portfolio",
        description:
            "Tworzę strony wizytówki i portfolio, które pomagają Ci wyróżnić się w sieci.",
        creator: "@rafal_wizen",
        images: ["https://rafal-wizen.vercel.app/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
    alternates: {
        canonical: "https://rafal-wizen.vercel.app",
    },
    metadataBase: new URL("https://rafal-wizen.vercel.app"),
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl" className="scroll-smooth">
        <body className={inter.className}>
        {children}
        <Toaster />
        </body>
        </html>
    )
}
