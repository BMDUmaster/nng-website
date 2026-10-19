/** Public view counts checked on 25 September 2026. A curated snapshot, not a live analytics feed.
 * YouTube Popular Shorts + both long-form uploads; Instagram's 67 public reel entries.
 * Titles below are concise subject labels, not promises of spiritual or medical outcomes.
 */
/** `video`: a reel supplied as a file, played on the page instead of linking out. */
export type SocialPost = { id: string; title: string; views: string; url: string; image: string; video?: string };
export const youtubePosts: SocialPost[] = [
  { id: "Fvr2yq5V_B0", title: "Why remedies alone may not be enough", views: "53K", url: "https://www.youtube.com/shorts/Fvr2yq5V_B0", image: "/images/social/yt-Fvr2yq5V_B0.avif" },
  { id: "jT5mTfqwlVQ", title: "Goddess Laxmi and professional life", views: "19K", url: "https://www.youtube.com/shorts/jT5mTfqwlVQ", image: "/images/social/yt-jT5mTfqwlVQ.avif" },
  { id: "hHQcolnZGNs", title: "Ganesh Chaturthi: a tradition around marriage", views: "17K", url: "https://www.youtube.com/shorts/hHQcolnZGNs", image: "/images/social/yt-hHQcolnZGNs.avif" },
  { id: "H20_QgNhylE", title: "Radha Ashtami and the wish for motherhood", views: "9.6K", url: "https://www.youtube.com/shorts/H20_QgNhylE", image: "/images/social/yt-H20_QgNhylE.avif" },
  { id: "jomLBYO9l8Y", title: "Three Janmashtami practices", views: "4.6K", url: "https://www.youtube.com/shorts/jomLBYO9l8Y", image: "/images/social/yt-jomLBYO9l8Y.avif" },
];
export const instagramPosts: SocialPost[] = [
  { id: "DdJA2Cluy_g", title: "Ganesh Chaturthi: a mantra and its meaning", views: "558K", url: "https://www.instagram.com/reel/DdJA2Cluy_g/", image: "/images/social/ig-DdJA2Cluy_g.jpg" },
  { id: "DdQWCCGvpy4", title: "The tradition behind Ganesh Visarjan", views: "246K", url: "https://www.instagram.com/reel/DdQWCCGvpy4/", image: "/images/social/ig-DdQWCCGvpy4.jpg" },
  { id: "DdMN-GAtcX5", title: "The Lotus Principle: beyond office politics", views: "211K", url: "https://www.instagram.com/reel/DdMN-GAtcX5/", image: "/images/social/ig-DdMN-GAtcX5.jpg" },
  { id: "Dck01SAx7yD", title: "Why remedies alone may not be enough", views: "159K", url: "https://www.instagram.com/reel/Dck01SAx7yD/", image: "/images/social/ig-Dck01SAx7yD.jpg" },
  { id: "DdHUd1ytnh7", title: "Ganesh Chaturthi and marriage", views: "83.5K", url: "https://www.instagram.com/reel/DdHUd1ytnh7/", image: "/images/social/ig-DdHUd1ytnh7.jpg" },
];

/** Reels by topic for the home page filter (Oct 18). YouTube Shorts of the same reels, with public view counts read
 * from the channel on 18 October 2026; titles are English labels for the Hindi originals. Trending = most viewed. */
export type ReelTopic = "vastu" | "numerology" | "brainology" | "rashi";
export type Reel = SocialPost & { platform: "instagram" | "youtube"; topics: ReelTopic[]; count: number };
const yt = (id: string, title: string, views: string, count: number, topics: ReelTopic[]): Reel => ({ id, title, views, count, topics, platform: "youtube", url: `https://www.youtube.com/shorts/${id}`, image: `/images/social/yt-${id}.webp` });
const ig = (post: SocialPost, count: number, topics: ReelTopic[]): Reel => ({ ...post, count, topics, platform: "instagram" });
export const reelTopics: { id: "all" | "trending" | ReelTopic; label: string }[] = [
  { id: "all", label: "All" },
  { id: "trending", label: "Trending" },
  { id: "brainology", label: "Brainology" },
  { id: "numerology", label: "Numerology" },
  { id: "vastu", label: "Vastulogy" },
  { id: "rashi", label: "Rashi" },
];
export const reels: Reel[] = [
  ig(instagramPosts[0], 558000, []),
  ig(instagramPosts[1], 246000, []),
  ig(instagramPosts[2], 211000, ["brainology"]),
  ig(instagramPosts[3], 159000, ["brainology"]),
  ig(instagramPosts[4], 83500, []),
  { ...youtubePosts[0], platform: "youtube", count: 53000, topics: ["brainology"] },
  yt("njhCtKPybGE", "Can a direction made by God be negative?", "26K", 26000, ["vastu"]),
  yt("qrR5hZyImuM", "Astrology, Vastulogy and numerology work when your mind does", "26K", 25968, ["brainology"]),
  yt("IuadhB2QAdY", "Who succeeds first: 1, 10, 19 or 28?", "22.8K", 22815, ["numerology"]),
  yt("dPWGN8hN9Mg", "Mulank 2: remedies and balance", "22.8K", 22846, ["numerology"]),
  yt("IfZW1sewCpo", "Why Mulank 7 people often feel let down", "22K", 22170, ["numerology"]),
  yt("Jk6XWe53nWU", "Mulank 3: remedies and guidance", "20.9K", 20922, ["numerology"]),
  yt("dBOl-Gcc0Bw", "Mulank 4: remedies and guidance", "16.5K", 16450, ["numerology"]),
  yt("lCOe-L-YQYI", "Is worship enough, or does the temple's direction matter?", "13K", 13337, ["vastu"]),
  yt("0RJvxJBfd0E", "Does a Vastulogy change need a big renovation?", "13K", 13047, ["vastu"]),
  yt("BYloeQRqm6I", "Is a south entrance really negative?", "12.8K", 12819, ["vastu"]),
  yt("MGOF8YL0V9Y", "When faith and self-interest start to blur", "11K", 11000, ["brainology"]),
  yt("jVr6IgOEOx4", "Understand Vastulogy, don't fear it", "8.5K", 8500, ["vastu"]),
  yt("2LOXzLwgyco", "Your body has its own Vastulogy", "7.5K", 7504, ["vastu"]),
  yt("URf3BkMvQw0", "Navratri for Simha (Leo)", "6.5K", 6500, ["rashi"]),
  yt("HGcQMVtb5F0", "Navratri for Vrishchik (Scorpio)", "5.5K", 5500, ["rashi"]),
  yt("hIPY0FKbJPY", "Navratri for Vrishabh (Taurus)", "4.9K", 4900, ["rashi"]),
  yt("LAjKPupQXG4", "Navratri for Mithun (Gemini)", "4.9K", 4899, ["rashi"]),
  yt("5_WxJ7DKQZs", "Navratri for Tula (Libra)", "3.8K", 3800, ["rashi"]),
  yt("owOpcXnHZAU", "Navratri for Mesh (Aries)", "3.5K", 3500, ["rashi"]),
  yt("Cl_-r5tTenk", "Navratri for Kanya (Virgo)", "3.5K", 3499, ["rashi"]),
  yt("hTd8bo1HLus", "Navratri for Kark (Cancer)", "3.5K", 3498, ["rashi"]),
  yt("7YhekPAmHQ8", "Navratri for Meen (Pisces)", "3.4K", 3400, ["rashi"]),
  yt("TQ1mGpazuRM", "Navratri for Makar (Capricorn)", "2.8K", 2800, ["rashi"]),
  yt("7-ONIvOjQpU", "Navratri for Kumbh (Aquarius)", "2.5K", 2500, ["rashi"]),
  yt("2ApCeqqxY14", "Doing everything right, but no results?", "1.3K", 1300, ["brainology"]),
  yt("d8ZGSPxRW2s", "How to find your driver and conductor numbers", "210", 210, ["numerology"]),
  yt("GLc2iOTLfYs", "Are your chakras helping your prosperity?", "146", 146, ["brainology"]),
];
