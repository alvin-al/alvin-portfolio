import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navigation from "@/components/element/Navigation";
import Script from "next/script";

const PlusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Alvin Al - Portfolio Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='My Portfolio' content='Alvin Al - Portfolio Web' />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-N7V1X7SS9B'
          strategy='afterInteractive'
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
      <body className={`${PlusJakarta.className} antialiased scroll-smooth`}>
        <Navigation />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
