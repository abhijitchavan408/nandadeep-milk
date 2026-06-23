import type { Metadata, Viewport } from 'next'

import { Providers } from '@/components/providers'
import './globals.css'

import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/inter.ttf",
  variable: "--font-inter",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk.ttf",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    default: "Gokul Dairy | Farm Fresh Milk & Dairy Products",
    template: "%s | Gokul Dairy",
  },
  description:
    "Gokul Dairy delivers farm-fresh milk, curd, paneer, ghee, and traditional dairy products to your doorstep daily. 100% pure and natural.",
  keywords: [
    "dairy farm",
    "fresh milk",
    "milk delivery",
    "paneer",
    "ghee",
    "curd",
    "dairy products",
    "Pune dairy",
    "दुग्ध उत्पादने",
    "ताजे दूध",
  ],
  openGraph: {
    title: "Gokul Dairy | Farm Fresh Milk & Dairy Products",
    description:
      "Farm-fresh milk, curd, paneer, ghee, and traditional dairy products delivered daily to your doorstep.",
    type: "website",
  },
  verification: {
    google: "VpwDnwDxQ93BDwvhfmqvzvFuJkuMq4-_1z0m1DKuCMo",
  },
};

export const viewport: Viewport = {
  themeColor: "#2d8a4e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
