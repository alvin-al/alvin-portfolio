import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans } from "next/font/google";

import Script from "next/script";
import { jsonLd } from "./json-ld";


const PlusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alvinxal.my.id"), // Ganti dengan domain asli
  title: {
    default: "Alvin Al - Web Developer Portfolio",
    template: "%s | Alvin Al",
  },
  description:
    "Portfolio of Alvin Al, a Web Developer specializing in Next.js, React, and minimalist design. View my projects and contact me.",
  keywords: [
    "Alvin Al",
    "alvinxal",
    "Alvin Al Temanggung",
    "Web Developer Indonesia",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Minimalist Web Design",
    "Web Developer Temanggung",
    "Tailwind CSS",
    "TypeScript Developer",
  ],
  openGraph: {
    title: "Alvin Al - Web Developer Portfolio",
    description:
      "Explore the portfolio of Alvin Al, featuring minimalist and effective web development projects.",
    url: "https://alvinxal.my.id",
    siteName: "Alvin Al Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin Al - Web Developer Portfolio",
    description:
      "Explore the portfolio of Alvin Al, featuring minimalist and effective web development projects.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://alvinxal.my.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='My Portfolio' content='Alvin Al - Portfolio Web' />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-N7V1X7SS9B'
          strategy='afterInteractive'
        />
        <Script
          id='json-ld'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-N7V1X7SS9B');
  `}
        </Script>
      </head>
      <body className={`${PlusJakarta.className} antialiased scroll-smooth overflow-x-hidden`}>
            <main>{children}</main>
          <Analytics />
      </body>
    </html>
  );
}
