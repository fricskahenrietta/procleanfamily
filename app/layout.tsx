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
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							
							// Default denied - GDPR compliance
							gtag('consent', 'default', {
								'analytics_storage': 'denied',
								'ad_storage': 'denied',
								'wait_for_update': 500
							});
						`,
					}}
				/>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-4R07G0VN5V"></script>

				<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Toaster />
				<CookieConsent />
			</body>
		</html>
	);
}
