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

const siteUrl = new URL("https://www.wendson.dev");

const metadataByLocale = {
	en: {
		title: "Wendson Sousa | Full Stack Developer",
		description:
			"Full Stack Developer building scalable web applications, APIs, and AI-powered solutions.",
		openGraphLocale: "en_US",
	},
	"pt-br": {
		title: "Wendson Sousa | Desenvolvedor Full Stack",
		description:
			"Desenvolvedor Full Stack construindo aplicações web escaláveis, APIs e soluções com IA.",
		openGraphLocale: "pt_BR",
	},
	ja: {
		title: "Wendson Sousa | フルスタックエンジニア",
		description:
			"スケーラブルなWebアプリケーション、API、AIを活用したソリューションを設計・開発するフルスタックエンジニアです。",
		openGraphLocale: "ja_JP",
	},
} satisfies Record<
	Locale,
	{ title: string; description: string; openGraphLocale: string }
>;

export async function generateStaticParams() {
	return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>;
}): Promise<Metadata> {
	const { lang } = await params;
	if (!isLocale(lang)) {
		notFound();
	}
	const metadata = metadataByLocale[lang];

	return {
		metadataBase: siteUrl,
		title: metadata.title,
		description: metadata.description,
		openGraph: {
			title: metadata.title,
			description: metadata.description,
			type: "website",
			url: `/${lang}`,
			locale: metadata.openGraphLocale,
			images: ["/share-image.jpg"],
		},
		twitter: {
			card: "summary_large_image",
			title: metadata.title,
			images: ["/share-image.jpg"],
		},
		alternates: {
			canonical: `/${lang}`,
			languages: {
				en: "/en",
				"pt-BR": "/pt-br",
				ja: "/ja",
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
					<Footer dictionary={dictionary} lang={lang} />
					<ScrollToTop />
				</ThemeProvider>
			</body>
		</html>
	);
}
