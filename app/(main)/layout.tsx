import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import WhatsAppFloating from "@/components/shared/whatsAppFloating.tsx/WhatsAppFloating";
import { Analytics } from "@vercel/analytics/next"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <main className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloating/>
        <Analytics/>
      </main>
    </SessionProvider>
  );
}
