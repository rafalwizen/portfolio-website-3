interface FooterProps {
    translations: {
        rights: string
    }
}

export function Footer({ translations }: FooterProps) {
    return (
        <footer className="bg-gray-900 border-t-4 border-brand text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400">
                    © {new Date().getFullYear()} Rafał Wiżeń. {translations.rights}
                </p>
            </div>
        </footer>
    )
}
