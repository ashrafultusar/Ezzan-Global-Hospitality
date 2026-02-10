import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/profile", "/api/", "/izzan-staff-portal", "/izzan-staff-portal/"],
        },
        sitemap: "https://www.izzanglobalhospitality.com/sitemap.xml",
    };
}
