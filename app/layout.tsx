import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navigation from "@/components/element/Navigation";

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
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='My Portfolio' content='Alvin Al - Portfolio Web' />
      </head>
      <body className={`${PlusJakarta.className} antialiased scroll-smooth`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
