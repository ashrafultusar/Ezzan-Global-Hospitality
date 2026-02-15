import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/profile",
                "/api/",
                "/izzan-staff-portal",
                "/izzan-staff-portal/",
                "/login",
                "/register",
            ],
        },
        sitemap: "https://www.izzanglobalhospitality.com/sitemap.xml",
    };
}
