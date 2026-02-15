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
    default: "Ezzan Global",
    template: "%s | Ezzan-Global",
  },
  description:
    "Experience the best travel agency services. We offer affordable tour packages, hotel bookings, and flight tickets worldwide.",
  keywords: [
    "Ezzan Global",
    "Ezzan Global",
    "Ezzan Global",
    "Ezzan Global",
    "Ezzan Global",
    "Ezzan Global",
    "Ezzan Global",
    "Ezzan Global",
  ],
  authors: [{ name: "Ezzan Global" }],
  icons: {
    icon: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
  },
  openGraph: {
    title: "Ezzan Global",
    description: "Your trusted partner for global exploration.",
    url: "https://www.izzanglobalhospitality.com",
    siteName: "Ezzan Global",
    images: [
      {
        url: "/assets/office/image6.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
      </body>
    </html>
  );
}
