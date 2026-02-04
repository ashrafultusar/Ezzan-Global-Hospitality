import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/profile", "/api/", "/ts-staff-portal", "/ts-staff-portal/"],
        },
        sitemap: "https://tstourtravels.com/sitemap.xml",
    };
}
