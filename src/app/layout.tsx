import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Enrollet | Simplifying University Applications",
  description: "Apply to multiple universities with ease. Fill out one form to apply to several universities at once. Save time and reduce stress with Enrollet.",
  keywords: ["university applications", "college admissions", "application platform", "higher education", "India", "university", "college"],
  authors: [{ name: "Enrollet Team" }],
  metadataBase: new URL("https://enrollet.vercel.app"),
  icons: {
    icon: "/enrollet-logo.svg",
    apple: "/enrollet-logo.svg",
  },
  openGraph: {
    title: "Enrollet | Simplifying University Applications",
    description: "Apply to multiple universities with ease using one application form",
    url: "https://enrollet.vercel.app",
    siteName: "Enrollet",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/meta/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Enrollet - Simplifying University Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrollet | Simplifying University Applications",
    description: "Apply to multiple universities with ease using one application form",
    images: ["/meta/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
