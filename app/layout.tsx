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
    default: "Nandadeep Milk Dairy | Pure Milk & Dairy Products",
    template: "%s | Nandadeep Milk Dairy",
  },
  description:
    "Nandadeep Milk Dairy collects fresh milk from local farmers, processes it hygienically, and delivers pure dairy products to your doorstep daily. 100% pure and natural.",
  keywords: [
    "dairy products",
    "milk delivery",
    "fresh milk",
    "paneer",
    "ghee",
    "curd",
    "Mumbai dairy",
    "milk supplier",
    "दुग्ध उत्पादने",
    "ताजे दूध",
  ],
  openGraph: {
    title: "Nandadeep Milk Dairy | Pure Milk & Dairy Products",
    description:
      "Pure milk sourced from local farmers, processed hygienically, and delivered fresh daily to your doorstep.",
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
