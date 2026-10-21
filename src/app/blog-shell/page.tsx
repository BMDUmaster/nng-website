import type { Metadata } from "next";

// Placeholders the sync script turns into each blog page's own values (set in the Blade views as $blTitle,
// $blDescription, $blCanonical and $blImage). They sit in the head and in React's page data alike, so the tags stay
// right after the page hydrates.
const title = "__BL_TITLE__";
const description = "__BL_DESC__";
const url = "https://nngarg.com/__BL_CANON__";
const image = "https://nngarg.com/__BL_IMAGE__";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "Transformation with NNG", title, description, url, images: [{ url: image }] },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

/**
 * The frame for Laravel's blog (/blog and /blog/{slug}, written in the admin panel). Not a page of its own: the sync
 * script (scripts/sync-to-laravel.mjs) turns this page's export into resources/views/blog/layout.blade.php, so the
 * blog carries the current header, footer and styles. The slot is filled by Blade; dangerouslySetInnerHTML keeps
 * React from replacing the server's article markup when the page hydrates.
 */
export default function BlogShell() {
  return <div className="rr bl" data-blog-page dangerouslySetInnerHTML={{ __html: "<!--BLOG_SLOT-->" }} />;
}
