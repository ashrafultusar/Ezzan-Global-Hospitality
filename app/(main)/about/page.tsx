import type { Metadata } from "next";
import About from "@/components/main/about/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Izzan Global Hotels & Resorts — our mission, vision, and commitment to delivering world-class hospitality services across Malaysia.",
  keywords: ["about Izzan Global", "hospitality company Malaysia", "hotel management company"],
  openGraph: {
    title: "About Us | Izzan Global Hotels & Resorts",
    description: "Learn about our mission to deliver world-class hospitality services across Malaysia.",
    url: "https://www.izzanglobalhospitality.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
}
