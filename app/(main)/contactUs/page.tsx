import type { Metadata } from "next";
import ContactUs from "@/components/main/contactUs/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Izzan Global Hotels & Resorts. Reach out for hotel bookings, tour inquiries, cleaning services, or any hospitality needs in Malaysia.",
  keywords: ["contact Izzan Global", "hotel booking inquiry", "Malaysia hospitality contact"],
  openGraph: {
    title: "Contact Us | Izzan Global Hotels & Resorts",
    description: "Reach out for hotel bookings, tour inquiries, and hospitality services in Malaysia.",
    url: "https://www.izzanglobalhospitality.com/contactUs",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactUs />
    </div>
  );
}
