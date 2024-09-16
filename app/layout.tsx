import type { Metadata } from "next";
import "./globals.css";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";

export const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

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
      <body className={`${PlusJakarta.className} --font-syne antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
