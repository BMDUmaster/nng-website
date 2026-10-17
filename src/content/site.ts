/**
 * Site-wide facts. One place to change a name, a link or a number.
 *
 * Sources: the Codex homepage Aryan chose (21 Sept 2026), his answers of 23 Sept 2026 (identity line,
 * Codex type and colour), the 21 Sept voice note (WhatsApp/call enquiry preference), and his
 * 30 Sept 2026 confirmation of the 10,000+ and 15+ figures. Recheck changing contact details.
 */
export const site = {
  name: "Transformation with NNG",
  /** Display name confirmed by Aryan on 30 September 2026; no degree detail is asserted. */
  person: "Narayani Garg",
  /** Positioning updated by Aryan on 4 October 2026, superseding the earlier identity line. */
  title: "Psychic Spiritual Mentor",
  method: "Mind. Direction. Alignment.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3400",
  /** Business enquiry number selected from the NNG packages PDF by Aryan on 30 September 2026. */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919205511101",
  email: "enquiry@nngarg.com",
  indexable: process.env.SITE_INDEXABLE === "true",
  /** Set on a copy that is shared for review, so nobody mistakes it for the live site. */
  previewNote: process.env.NEXT_PUBLIC_PREVIEW_NOTE ?? "",
  social: {
    youtube: "https://www.youtube.com/@transformationwithnng",
    instagram: "https://www.instagram.com/transformationwithnng/",
    /** Aryan supplied the official share URL on 30 September 2026; it redirects here. */
    facebook: "https://www.facebook.com/transformationwithnng/",
  },
} as const;

/** 10,000+ and 15+ confirmed by Aryan on 30 September 2026; the wording and 5K+ set by the team on 17 October 2026. */
export const figures = [
  { value: "10,000+", label: "Worldwide" },
  { value: "15+", label: "Years of experience" },
  { value: "5K+", label: "Lives transformed" },
] as const;

export type NavChild = { label: string; href: string; note?: string };
export type NavItem = { label: string; href: string; short?: string; overviewLabel?: string; children?: NavChild[]; excludePaths?: string[]; dropdownOnly?: boolean };

/**
 * Temple Darshan stays out: it is Phase 2 and on the never-build list for this site.
 * Services contains consultation practices. Educational stone guides live under Resources;
 * their existing URLs are retained so shared links keep working.
 */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Consultation",
    href: "/consultations/",
    overviewLabel: "Consultation overview",
    children: [
      { label: "Where to begin", href: "/consultations/#choose", note: "Find the right consultation for your current situation." },
      { label: "Options and fees", href: "/consultations/#fees", note: "Consultation formats, duration and fee details." },
      { label: "How it works", href: "/consultations/#how", note: "Simple steps to book and what to expect." },
      { label: "Hand Holding Program", href: "/hand-holding-program/", note: "Ongoing guidance and support over six months." },
    ],
  },
  {
    label: "Services",
    href: "/services/",
    excludePaths: ["/services/stones-and-rudraksh/"],
    // The same order as the service cards: she starts with the mind.
    children: [
      { label: "Brainology Program", href: "/services/brain-training/", note: "Understand the mind behind your choices." },
      { label: "Numerology", href: "/services/numerology/", note: "Discover the power of your numbers." },
      { label: "Vastulogy", href: "/services/vastu/", note: "Harmony in your home and space." },
      { label: "Astrology", href: "/services/astrology/", note: "Planetary influences for a better you." },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    dropdownOnly: true,
    children: [
      { label: "Crystals, Stones and Rudraksha", href: "/services/stones-and-rudraksh/", note: "Explore natural crystals, stones and sacred rudraksha." },
      { label: "Blogs", href: "/resources/blogs/", note: "Read articles on spirituality, astrology and self-growth." },
    ],
  },
  // The shop shows a coming-soon note for now, so it is a single link.
  { label: "Shop", href: "/shop/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/** The four areas, always in this order. */
export const areas = ["Health", "Relationship", "Money", "Career"] as const;

/**
 * Options for the WhatsApp enquiry dialog, in three groups. The value goes into the
 * prepared message ("I would like to enquire about <value> with Narayani Garg").
 */
export const enquiryTopics = [
  { value: "a personal consultation", label: "A personal consultation", group: "Where to begin" },
  { value: "choosing the right service", label: "I'm not sure where to begin", group: "Where to begin" },
  { value: "a consultation on my health", label: "Health", group: "An area of life" },
  { value: "a consultation on a relationship", label: "Relationship", group: "An area of life" },
  { value: "a consultation on money", label: "Money", group: "An area of life" },
  { value: "a consultation on my career", label: "Career", group: "An area of life" },
  { value: "Brainology Program", label: "Brainology Program", group: "A service" },
  { value: "Numerology", label: "Numerology", group: "A service" },
  { value: "Vastulogy", label: "Vastulogy", group: "A service" },
  { value: "Astrology", label: "Astrology", group: "A service" },
  { value: "Crystals, Stones and Rudraksha", label: "Crystals, Stones and Rudraksha", group: "A service" },
  { value: "the Personalised Hand Holding Program", label: "Personalised Hand Holding Program", group: "A service" },
] as const;

/**
 * The listed topics, or any other string: a page can pass its own topic ("Astrology: marriage and
 * compatibility") and the enquiry dialog adds it to its list for that visit.
 */
export type EnquiryTopic = (typeof enquiryTopics)[number]["value"] | (string & {});

/** The four areas, each opening the enquiry for that area (the ribbon on the homepage). */
export const areaTopics: Record<(typeof areas)[number], EnquiryTopic> = {
  Health: "a consultation on my health",
  Relationship: "a consultation on a relationship",
  Career: "a consultation on my career",
  Money: "a consultation on money",
};

/** The dialog and the form group their options in this order. */
export const topicGroups = ["Where to begin", "An area of life", "A service"] as const;

export const legal = {
  disclaimer:
    "Psychic guidance is personal and spiritual. Numerology, Vastulogy and astrology are interpretive traditions. Guidance here is personal and spiritual, not medical, mental health, legal or financial advice.",
  copyright: "© 2026 Transformation with NNG",
};
