import type { MetadataRoute } from "next";
import routes from "@/content/routes.json";
import { site } from "@/content/site";

// Needed for a static export; the content never changes between requests.
export const dynamic = "force-static";

/**
 * Every indexable page in src/content/routes.json. The consultation landing page is marked
 * indexable: false there, so it never enters the sitemap. Temple Darshan is Phase 2 and not part of this site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes
    .filter((route) => route.indexable)
    .map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency as "monthly" | "yearly",
      priority: route.priority,
    }));
}
