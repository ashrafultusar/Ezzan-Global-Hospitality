import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import ToasterProvider from "@/components/toasterProvider/ToasterProvider";
// import WhatsAppFloating from "@/components/shared/whatsAppFloating.tsx/WhatsAppFloating";


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
        {/* <WhatsAppFloating/> */}
      </main><ToasterProvider />
    </SessionProvider>
  );
}
