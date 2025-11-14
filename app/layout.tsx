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
  title: "procleanfamily - Professzionális Takarítási Szolgáltatások",
  description: "Professzionális takarítási szolgáltatások, amelyek megfelelnek az Ön igényeinek.",
	keywords: [
		"takarítás",
		"professzionális takarítás",
		"irodatakarítás",
		"mélytisztítás",
		"ablaktisztítás",
		"szőnyegtisztítás",
		"budapest"
	]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
