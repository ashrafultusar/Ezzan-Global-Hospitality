import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.izzanglobalhospitality.com"),
  title: {
    default: "Izzan Global Hotels & Resorts | Luxury Hospitality in Malaysia",
    template: "%s | Izzan Global Hotels & Resorts",
  },
  icons: {
    icon: "/assets/logo/logo.png",
    shortcut: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/assets/logo/logo.png",
    },
  },
  description:
    "Izzan Global Hotels & Resorts — luxury hotel bookings, premium homestays, tour packages, and world-class hospitality services across Malaysia. Book your dream stay today.",
  keywords: [
    "Izzan Global",
    "luxury hotels Malaysia",
    "hotel booking Malaysia",
    "homestay Malaysia",
    "5 star hotel Kuala Lumpur",
    "Malaysia tour packages",
    "resort booking",
    "hospitality services Malaysia",
    "premium accommodation",
    "Izzan Global Hotels & Resorts",
  ],
  authors: [{ name: "Izzan Global Hotels & Resorts" }],
  creator: "Izzan Global Hotels & Resorts",
  publisher: "Izzan Global Hotels & Resorts",
  openGraph: {
    title: "Izzan Global Hotels & Resorts",
    description:
      "Luxury hotel bookings, premium homestays, and tour packages across Malaysia. Experience world-class hospitality.",
    url: "https://www.izzanglobalhospitality.com",
    siteName: "Izzan Global Hotels & Resorts",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Izzan Global Hotels & Resorts — Luxury Hospitality",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izzan Global Hotels & Resorts",
    description:
      "Luxury hotel bookings, premium homestays, and tour packages across Malaysia.",
    images: ["/assets/about/image1.jpg"],
  },
};

import { OrganizationJsonLd } from "@/components/seo/JsonLd";

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
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
