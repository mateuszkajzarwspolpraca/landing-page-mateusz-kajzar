/**
 * Plik /sitemap.xml: lista podstron dla Google.
 */
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Gdy dodasz nową podstronę, dopisz ją tutaj. priority: 1 = najważniejsza, 0.2 = mało ważna.
  const pages = [
    { path: "", priority: 1 },
    { path: "/online", priority: 0.9 },
    { path: "/jaworzno", priority: 0.9 },
    { path: "/regulamin", priority: 0.2 },
    { path: "/polityka-prywatnosci", priority: 0.2 },
  ];
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
