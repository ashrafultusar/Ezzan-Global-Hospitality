import { MetadataRoute } from "next";
import { connectDB } from "@/db/dbConfig";
import Hotel from "@/models/Hotel";

const BASE_URL = "https://www.izzanglobalhospitality.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/homestay`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tourPackages`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ourServices`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contactUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic hotel pages
  let hotelPages: MetadataRoute.Sitemap = [];

  try {
    await connectDB();
    const hotels = await Hotel.find({})
      .select("_id updatedAt")
      .lean();

    hotelPages = hotels.map((hotel) => ({
      url: `${BASE_URL}/homestay/${hotel._id}`,
      lastModified: hotel.updatedAt || new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Sitemap: Failed to fetch hotels", error);
  }

  return [...staticPages, ...hotelPages];
}
