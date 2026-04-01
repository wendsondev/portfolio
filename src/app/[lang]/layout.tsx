import type { Metadata } from "next";
import { IBM_Plex_Mono, Rajdhani } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/src/components/footer";
import { Header } from "@/src/components/header";
import { ScrollToTop } from "@/src/components/scroll-to-top";
import { ThemeProvider } from "@/src/components/theme-provider";
import { isLocale, type Locale, locales } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/get-dictionary";
import "../globals.css";

const rajdhani = Rajdhani({
	variable: "--font-display",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>;
}): Promise<Metadata> {
	const { lang } = await params;
	const isEn = lang === "en";

	return {
		title: "Wendson Sousa | Full Stack Developer",
		description: isEn
			? "Full Stack Developer building scalable web applications, APIs, and AI-powered solutions."
			: "Desenvolvedor Full Stack construindo aplicações web escaláveis, APIs e soluções com IA.",
		openGraph: {
			title: "Wendson Sousa | Full Stack Developer",
			description: isEn
				? "Full Stack Developer building scalable web applications, APIs, and AI-powered solutions."
				: "Desenvolvedor Full Stack construindo aplicações web escaláveis, APIs e soluções com IA.",
			type: "website",
			locale: isEn ? "en_US" : "pt_BR",
			images: ["/share-image.jpg"],
		},
		twitter: {
			card: "summary_large_image",
			title: "Wendson Sousa | Full Stack Developer",
			images: ["/share-image.jpg"],
		},
		alternates: {
			languages: {
				en: "/en",
				"pt-BR": "/pt-br",
			},
		},
		icons: {
			icon: "/favicon.png",
		},
	};
}

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ lang: string }>;
}) {
	const { lang: rawLang } = await params;
	if (!isLocale(rawLang)) {
		notFound();
	}
	const lang: Locale = rawLang;
	const dictionary = await getDictionary(lang);

	return (
		<html lang={lang} suppressHydrationWarning>
			<body
				className={`${rajdhani.variable} ${ibmPlexMono.variable} crt-scanlines vignette antialiased`}
			>
				<ThemeProvider>
					<Header dictionary={dictionary} lang={lang} />
					<main className="pt-20">{children}</main>
					<Footer dictionary={dictionary} />
					<ScrollToTop />
				</ThemeProvider>
			</body>
		</html>
	);
}
