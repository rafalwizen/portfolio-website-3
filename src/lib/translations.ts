export const translations = {
    pl: {
        nav: {
            home: "Strona główna",
            offer: "Oferta",
            process: "Współpraca",
            portfolio: "Realizacje",
            contact: "Kontakt",
            menu: "Menu",
        },
        hero: {
            greeting: "Cześć, jestem Rafał",
            title: "Tworzę strony, które przyciągają klientów",
            subtitle: "Od pomysłu po gotową stronę — zajmę się wszystkim za Ciebie. Bez zaliczki i bez technicznego żargonu.",
            badges: [
                "7+ lat doświadczenia",
                "Płacisz dopiero za gotowy efekt",
                "Strona w 100% Twoja",
            ],
            cta: "Rozpocznij projekt",
            ctaSecondary: "Zobacz moje prace",
            ctaNote: "Odpowiadam zwykle w ciągu 24 godzin",
        },
        offer: {
            title: "Co mogę dla Ciebie zrobić?",
            subtitle: "Trzy najpopularniejsze typy stron — każda zaprojektowana pod Twoją firmę i Twoich klientów",
            items: [
                {
                    title: "Strona-wizytówka",
                    description: "Idealna dla lokalnych firm — salony, warsztaty, gabinety. Twoi klienci znajdą Cię w Google i skontaktują się jednym kliknięciem.",
                    features: [
                        "Wygląd dopasowany do Twojej marki",
                        "Wersja mobilna w standardzie",
                        "Telefon, formularz i mapa dojazdu",
                    ],
                },
                {
                    title: "Portfolio online",
                    description: "Dla fotografów, artystów i rzemieślników. Pięknie zaprezentujesz swoje prace i zaczniesz dostawać zapytania od klientów.",
                    features: [
                        "Oryginalna galeria Twoich prac",
                        "Sekcja o Tobie i Twoich usługach",
                        "Łatwy kontakt dla zainteresowanych",
                    ],
                },
                {
                    title: "Strona firmowa",
                    description: "Rozbudowana prezentacja Twojej firmy — usługi, cennik, opinie klientów. Wszystko w jednym, nowoczesnym miejscu.",
                    features: [
                        "Podstrony: usługi, cennik, o firmie",
                        "Integracja z mediami społecznościowymi",
                        "Przyjazna dla wyszukiwarek (SEO)",
                    ],
                },
            ],
            note: "Nie wiesz, co się sprawdzi w Twoim przypadku? Napisz — doradzę bezpłatnie.",
        },
        services: {
            title: "Jak wygląda współpraca?",
            subtitle: "Od pomysłu do gotowej strony — wspólnie stworzymy coś dopasowanego do Twoich potrzeb",
            steps: [
                {
                    title: "Rozmawiamy o Twoich potrzebach",
                    description: "Zaczynamy od krótkiej rozmowy — telefonicznie lub przy kawie. Opowiadasz mi o swojej firmie i celu strony, a ja wszystko tłumaczę prostym językiem.",
                },
                {
                    title: "Otrzymujesz pierwszą wersję do testów",
                    description: "W kilka dni dostajesz link do działającej strony — testujesz ją wygodnie na swoim komputerze i telefonie, zanim cokolwiek zapłacisz.",
                },
                {
                    title: "Dopracowujemy ją razem",
                    description: "Mówisz mi, co zmienić — ja wprowadzam poprawki. Kontynuujemy, aż powiesz: „dokładnie o to chodziło”.",
                },
                {
                    title: "Strona startuje i jest w 100% Twoja",
                    description: "Publikuję stronę na Twoim własnym adresie www. Od tej pory wszystko należy do Ciebie — bez abonamentów i ukrytych kosztów.",
                },
            ],
        },
        about: {
            title: "Dlaczego warto mnie wybrać?",
            subtitle: "Dla mnie liczy się efekt, który spełnia Twoje oczekiwania i działa bez zarzutu",
            skills: [
                "Nie pobieram żadnej zaliczki — rozliczamy się dopiero wtedy, gdy strona całkowicie Cię zadowoli.",
                "Strona trafia na Twój własny adres i hosting — masz 100% kontroli i pełną niezależność. Żadnych ukrytych kosztów.",
                "Mam ponad 7 lat doświadczenia i samodzielnie tworzę strony od pierwszego szkicu po publikację — od prostej wizytówki po rozbudowaną stronę firmową.",
            ],
        },
        portfolio: {
            title: "Wybrane realizacje",
            subtitle: "Każdą stronę projektuję pod konkretne potrzeby — zobacz, co powstało dla innych",
            viewLive: "Zobacz na żywo",
        },
        testimonials: {
            // TODO: paste 2-3 real client quotes here; the section stays hidden until at least one item exists
            title: "Co mówią klienci",
            subtitle: "Najlepszą rekomendacją jest zadowolony klient",
            items: [] as Array<{ quote: string; name: string; role: string }>,
        },
        faq: {
            title: "Masz pytania?",
            subtitle: "Odpowiadam na te, które słyszę najczęściej",
            items: [
                {
                    question: "Ile kosztuje strona?",
                    answer: "Każdy projekt wyceniam indywidualnie — po krótkiej rozmowie dostajesz konkretną cenę przed startem. Bez niespodzianek i ukrytych kosztów.",
                },
                {
                    question: "Jak długo trwa realizacja?",
                    answer: "Prosta strona-wizytówka to zwykle 1–2 tygodnie, bardziej rozbudowane strony nieco dłużej. Termin ustalamy razem na starcie.",
                },
                {
                    question: "Muszę mieć domenę i hosting?",
                    answer: "Nie musisz się tym martwić — pomogę Ci wszystko wybrać i skonfigurować. Domena i hosting są rejestrowane na Ciebie, więc strona jest w 100% Twoja.",
                },
                {
                    question: "Co, jeśli nie będę zadowolony z efektu?",
                    answer: "Dlatego nie pobieram zaliczki — płacisz dopiero wtedy, gdy efekt Cię usatysfakcjonuje.",
                },
            ],
        },
        contact: {
            title: "Gotowy, aby ruszyć z projektem?",
            subtitle: "Opowiedz mi o swoim pomyśle — odpowiadam zwykle w ciągu 24 godzin.",
            form: {
                name: "Imię i nazwisko",
                email: "Adres e-mail",
                message: "Szczegóły projektu",
                namePlaceholder: "Jan Kowalski",
                emailPlaceholder: "jan@firma.pl",
                messagePlaceholder: "Np. prowadzę salon fryzjerski i potrzebuję prostej strony z cennikiem i mapą…",
                send: "Wyślij wiadomość",
                sending: "Wysyłanie…",
                note: "Napisz bez zobowiązań. Wolisz rozmowę? Zadzwoń: +48 726 593 099.",
            },
            info: {
                email: "rafal.wizen@gmail.com",
                phone: "+48 726 593 099",
                phoneHref: "tel:+48726593099",
                emailHref: "mailto:rafal.wizen@gmail.com",
                location: "Tarnowskie Góry, Polska",
                emailLabel: "E-mail",
                locationLabel: "Lokalizacja",
                phoneLabel: "Telefon",
                gitHubAreaLabel: "Profil na GitHub",
                linkedInAreaLabel: "Profil na LinkedIn",
            },
            messages: {
                success: {
                    title: "Wiadomość wysłana pomyślnie!",
                    description: "Dziękuję za wiadomość. Odpowiem najszybciej, jak to możliwe.",
                },
                error: {
                    title: "Błąd podczas wysyłania wiadomości",
                    description: "Spróbuj ponownie lub skontaktuj się ze mną bezpośrednio.",
                },
            },
        },
        footer: {
            rights: "Wszelkie prawa zastrzeżone.",
        },
    },
    en: {
        nav: {
            home: "Home",
            offer: "Services",
            process: "Process",
            portfolio: "Work",
            contact: "Contact",
            menu: "Menu",
        },
        hero: {
            greeting: "Hi, I'm Rafał",
            title: "I build websites that attract customers",
            subtitle: "From idea to a finished website — I'll take care of everything for you. No upfront payments and no technical jargon.",
            badges: [
                "7+ years of experience",
                "You pay only for the finished result",
                "Your website is 100% yours",
            ],
            cta: "Start your project",
            ctaSecondary: "See my work",
            ctaNote: "I usually reply within 24 hours",
        },
        offer: {
            title: "What can I create for you?",
            subtitle: "The three most popular types of websites — each designed around your business and your customers",
            items: [
                {
                    title: "Business card website",
                    description: "Perfect for local businesses — salons, workshops, practices. Your customers will find you on Google and reach you with a single click.",
                    features: [
                        "Design tailored to your brand",
                        "Mobile version included",
                        "Phone, contact form and location map",
                    ],
                },
                {
                    title: "Online portfolio",
                    description: "For photographers, artists and craftspeople. Present your work beautifully and start getting inquiries from clients.",
                    features: [
                        "A unique gallery of your work",
                        "A section about you and your services",
                        "Easy contact for interested clients",
                    ],
                },
                {
                    title: "Company website",
                    description: "A complete presentation of your business — services, pricing and customer reviews, all in one modern place.",
                    features: [
                        "Subpages: services, pricing, about",
                        "Social media integration",
                        "Search-engine friendly (SEO)",
                    ],
                },
            ],
            note: "Not sure which one fits your case? Write to me — happy to advise for free.",
        },
        services: {
            title: "How does it work?",
            subtitle: "From idea to launch — let's build something that fits your needs perfectly",
            steps: [
                {
                    title: "We talk about your needs",
                    description: "We start with a short conversation — by phone or over coffee. You tell me about your business and your goals, and I explain everything in plain language.",
                },
                {
                    title: "You get the first version to test",
                    description: "Within days you receive a link to a working website — try it comfortably on your computer and phone before paying anything.",
                },
                {
                    title: "We refine it together",
                    description: "Tell me what to change — I make it happen. We continue until you say: “that's exactly what I wanted”.",
                },
                {
                    title: "Your site goes live — 100% yours",
                    description: "I publish the website on your own address. From that moment everything belongs to you — no subscriptions or hidden fees.",
                },
            ],
        },
        about: {
            title: "Why choose me?",
            subtitle: "What matters to me is a result that meets your expectations and works flawlessly",
            skills: [
                "I don't take any upfront payment — we settle only when the website completely satisfies you.",
                "Your site lives on your own domain and hosting — you have 100% control and full independence. No hidden costs.",
                "With over 7 years of experience, I build websites single-handedly from the first sketch to publication — from a simple business card site to an extensive company website.",
            ],
        },
        portfolio: {
            title: "Selected work",
            subtitle: "Every website is designed for specific needs — see what I've created for others",
            viewLive: "View live",
        },
        testimonials: {
            // TODO: paste 2-3 real client quotes here; the section stays hidden until at least one item exists
            title: "What clients say",
            subtitle: "The best recommendation is a happy client",
            items: [] as Array<{ quote: string; name: string; role: string }>,
        },
        faq: {
            title: "Questions?",
            subtitle: "Answers to the ones I hear most often",
            items: [
                {
                    question: "How much does a website cost?",
                    answer: "I quote each project individually — after a short conversation you get an exact price before we start. No surprises or hidden costs.",
                },
                {
                    question: "How long does it take?",
                    answer: "A simple business card site usually takes 1–2 weeks, more complex sites a bit longer. We set the deadline together at the start.",
                },
                {
                    question: "Do I need a domain and hosting?",
                    answer: "Don't worry about that — I'll help you choose and set everything up. The domain and hosting are registered in your name, so the website is 100% yours.",
                },
                {
                    question: "What if I'm not happy with the result?",
                    answer: "That's why I don't take upfront payments — you pay only when the result satisfies you.",
                },
            ],
        },
        contact: {
            title: "Ready to start your project?",
            subtitle: "Tell me about your idea — I usually reply within 24 hours.",
            form: {
                name: "Full name",
                email: "Email address",
                message: "Project details",
                namePlaceholder: "John Smith",
                emailPlaceholder: "john@company.com",
                messagePlaceholder: "e.g. I run a hair salon and need a simple website with pricing and a map…",
                send: "Send message",
                sending: "Sending…",
                note: "Write with no obligation. Prefer to talk? Call: +48 726 593 099.",
            },
            info: {
                email: "rafal.wizen@gmail.com",
                phone: "+48 726 593 099",
                phoneHref: "tel:+48726593099",
                emailHref: "mailto:rafal.wizen@gmail.com",
                location: "Tarnowskie Góry, Poland",
                emailLabel: "Email",
                locationLabel: "Location",
                phoneLabel: "Phone",
                gitHubAreaLabel: "GitHub profile",
                linkedInAreaLabel: "LinkedIn profile",
            },
            messages: {
                success: {
                    title: "Message sent successfully!",
                    description: "Thank you for your message. I'll get back to you as soon as possible.",
                },
                error: {
                    title: "Error sending message",
                    description: "Please try again or contact me directly.",
                },
            },
        },
        footer: {
            rights: "All rights reserved.",
        },
    },
}
