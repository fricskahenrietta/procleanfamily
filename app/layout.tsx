import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ProCleanFamily - Professzionális Takarítási Szolgáltatások",
	description: "Professzionális takarítási szolgáltatások, amelyek megfelelnek az Ön igényeinek.",
	keywords: [
		"takarítás",
		"professzionális takarítás",
		"irodatakarítás",
		"mélytisztítás",
		"ablaktisztítás",
		"szőnyegtisztítás",
		"budapest"
	],
	metadataBase: new URL('https://www.procleanfamily.com'),
	openGraph: {
		type: 'website',
		locale: 'hu_HU',
		url: 'https://www.procleanfamily.com',
		siteName: 'ProCleanFamily',
		title: 'ProCleanFamily - Professzionális Takarítási Szolgáltatások',
		description: 'Professzionális takarítási szolgáltatások, amelyek megfelelnek az Ön igényeinek.',
		images: [
			{
				url: '/images/parallax-office.jpg',
				width: 1200,
				height: 630,
				alt: 'ProCleanFamily - Professzionális Takarítás',
			}
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ProCleanFamily - Professzionális Takarítási Szolgáltatások',
		description: 'Professzionális takarítási szolgáltatások, amelyek megfelelnek az Ön igényeinek.',
		images: ['/images/parallax-office.jpg'],
	},
	other: {
		'Content-Security-Policy': 'upgrade-insecure-requests'
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WVKTLQQK');`,
					}}
				/>

				{/* Preload critical images */}
				<link rel="preload" as="image" href="/images/hero-cleaners.jpg" fetchPriority="high" />
				<link rel="preload" as="image" href="/images/logo.svg" fetchPriority="high" />

				<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />

				<meta name="google-site-verification" content="gZ6Ed6h7J0DoI1tYsvXJD-o41fnJcWP34RipEcgNWno" />

			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe 
						src="https://www.googletagmanager.com/ns.html?id=GTM-WVKTLQQK"
						height="0" 
						width="0" 
						style={{ display: 'none', visibility: 'hidden' }}
					/>
				</noscript>
				{children}
				<Toaster />
				<CookieConsent />
			</body>
		</html>
	);
}
