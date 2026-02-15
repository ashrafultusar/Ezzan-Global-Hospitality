import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

// --- Types ---
interface ContactMethod {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
  btnLabel?: string;
  btnColor?: string;
}

// --- Data ---
const TOP_CONTACTS: ContactMethod[] = [
  {
    title: "Call Us",
    description: "Available 24/7 for your inquiries",
    value: "+888045425560",
    icon: <Phone className="w-6 h-6 text-[#d4a373]" />,
  },
  {
    title: "WhatsApp",
    description: "Quick responses via WhatsApp",
    value: "+888045425560",
    icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
    btnLabel: "Chat Now",
    btnColor: "bg-[#25D366]",
  },
  {
    title: "Email Us",
    description: "We'll respond within 24 hours",
    value: "izzanglobalhospitality@gmail.com",
    icon: <Mail className="w-6 h-6 text-[#4285F4]" />,
  },
];

const LOCATIONS = [
  {
    id: 1,
    name: "AXON Residence",
    address:
      "5, Lorong Walter Grenier, Bukit Bintang, Kuala Lumpur, 55100, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=...", // এখানে সঠিক Embed URL দেবেন
  },
  {
    id: 2,
    name: "Mercu Summer Suites",
    address:
      "8 Jalan Cendana Mercu Summer Suites, Kampung Baru, Kuala Lumpur, 50250, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=...",
  },
  {
    id: 3,
    name: "The Majestic Hotel Kuala Lumpur",
    address:
      "5, Jalan Sultan Hishamuddin, Tasik Perdana, 50000 Kuala Lumpur, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=...",
  },
  {
    id: 4,
    name: "THE FACE Suites Hotel",
    address:
      "1020, Jln Sultan Ismail, Kampung Baru, 50250 Kuala Lumpur, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=...",
  },
  {
    id: 5, // Fixed Duplicate ID
    name: "Lucentia Suites by HomeHorizon",
    address:
      "City Centre, 2, Jln Hang Tuah, Bukit Bintang, 55100 Kuala Lumpur, Malaysia",
    mapUrl: "https://www.google.com/maps/embed?pb=...",
  },
];

export default function ContactUs() {
  return (
    <section className="bg-[#fdfbf7] min-h-screen">
      
      {/* Header Section */}
      <section className="bg-[#1a2a4d] pt-28 pb-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Sub-title */}
          <p className="text-[#d48e28] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            GET IN TOUCH
          </p>

          {/* Main Title */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Contact Us
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Have questions or need assistance? Our team is here to help you plan your perfect stay.
          </p>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        
        {/* Top 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TOP_CONTACTS.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="mb-4 p-3 bg-gray-50 rounded-full">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a2b4b] mb-1">
                {contact.title}
              </h3>
              <p className="text-gray-400 text-xs mb-4">
                {contact.description}
              </p>
              {contact.btnLabel ? (
                <a
                  href="https://wa.me/60177085596?text=Hello, I am interested in booking a room."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${contact.btnColor} text-white px-6 py-2 rounded text-xs font-bold hover:opacity-90 transition-all`}
                >
                  {contact.btnLabel}
                </a>
              ) : (
                <p className="text-[#f2b830] font-bold">{contact.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Hotel Cards Grid Section */}
        <section className="pb-20 bg-[#FDFCFB]">
          <div className="max-w-7xl mx-auto"> 
            <h2 className="text-3xl font-serif font-bold text-[#1a2b4b] text-center mb-12">
              Our Hotel Locations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LOCATIONS.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 group hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Google Map Embed */}
                  <div className="h-64 w-full relative">
                    <iframe
                      title={hotel.name}
                      src={hotel.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[0.2] contrast-[1.1]"
                    />
                  </div>

                  {/* Hotel Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a2b4b] mb-3 group-hover:text-[#D4A373] transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="flex items-start gap-2 text-gray-500">
                      <MapPin className="w-4 h-4 text-[#D4A373] mt-1 shrink-0" />
                      <p className="text-sm leading-relaxed">
                        {hotel.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}