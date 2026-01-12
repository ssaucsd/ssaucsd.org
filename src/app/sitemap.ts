import { MetadataRoute } from "next";
import { createAnonClient } from "@/utils/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ssaucsd.org";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Fetch events for dynamic pages
  let eventPages: MetadataRoute.Sitemap = [];
  try {
    const supabase = createAnonClient();
    const { data: events } = await supabase
      .from("events")
      .select("id, updated_at")
      .order("start_time", { ascending: false });

    if (events) {
      eventPages = events.map((event) => ({
        url: `${baseUrl}/events/${event.id}`,
        lastModified: event.updated_at
          ? new Date(event.updated_at)
          : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Error fetching events for sitemap:", error);
  }

  return [...staticPages, ...eventPages];
}
