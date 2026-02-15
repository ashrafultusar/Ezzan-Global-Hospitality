import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import ToasterProvider from "@/components/toasterProvider/ToasterProvider";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
// import WhatsAppFloating from "@/components/shared/whatsAppFloating.tsx/WhatsAppFloating";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <main>
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
        {/* <WhatsAppFloating/> */}
      </main>
      <ToasterProvider />
    </SessionProvider>
  );
}
