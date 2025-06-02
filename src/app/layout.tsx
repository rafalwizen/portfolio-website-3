import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Rafał Wiżeń - Full-Stack Developer & UI/UX Designer",
    description:
        "Profesjonalny web developer i designer tworzący oszałamiające, wydajne strony internetowe, które przynoszą rezultaty dla Twojego biznesu.",
    keywords: "web developer, full-stack developer, UI/UX designer, React, Next.js, TypeScript, Warszawa",
    authors: [{ name: "Rafał Wiżeń" }],
    openGraph: {
        title: "Rafał Wiżeń - Full-Stack Developer & UI/UX Designer",
        description:
            "Profesjonalny web developer i designer tworzący oszałamiające, wydajne strony internetowe, które przynoszą rezultaty dla Twojego biznesu.",
        type: "website",
        locale: "pl_PL",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rafał Wiżeń - Full-Stack Developer & UI/UX Designer",
        description:
            "Profesjonalny web developer i designer tworzący oszałamiające, wydajne strony internetowe, które przynoszą rezultaty dla Twojego biznesu.",
    },
    robots: {
        index: true,
        follow: true,
    },
}

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
