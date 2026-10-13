/**
 * Plik /robots.txt dla wyszukiwarek: pozwala indeksować całą stronę i wskazuje mapę strony.
 */
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
