import { IHotel } from "@/types/hotel.types";

export function OrganizationJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Izzan Global Hotels & Resorts",
        url: "https://www.izzanglobalhospitality.com",
        logo: "https://www.izzanglobalhospitality.com/assets/logo/logo.jpg",
        description:
            "Luxury hotel bookings, premium homestays, tour packages, and world-class hospitality services across Malaysia.",
        address: {
            "@type": "PostalAddress",
            addressCountry: "MY",
        },
        sameAs: [],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export function HotelJsonLd({ hotel }: { hotel: IHotel }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        name: hotel.name,
        description: hotel.description,
        image: hotel.image,
        address: {
            "@type": "PostalAddress",
            addressLocality: hotel.location,
            addressCountry: "MY",
        },
        starRating: {
            "@type": "Rating",
            ratingValue: hotel.stars?.toString() || "5",
        },
        url: `https://www.izzanglobalhospitality.com/homestay/${hotel._id}`,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
