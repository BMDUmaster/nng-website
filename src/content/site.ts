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
  person: "Dr. Narayani Garg",
  /** Approved by Aryan on 23 Sept 2026 as the identity lock-up. */
  title: "The Life Strategist",
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

/** Confirmed by Aryan on 30 September 2026. Experience means total professional experience. */
export const figures = [
  { value: "10,000+", label: "Clients guided" },
  { value: "15+", label: "Years of professional experience" },
] as const;

export type NavItem = { label: string; href: string; short?: string };

/** Temple Darshan stays out: it is Phase 2 and on the never-build list for this site. */
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Hand Holding Program", short: "Program", href: "/hand-holding-program/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/** The four areas, always in this order. */
export const areas = ["Health", "Relationship", "Career", "Money"] as const;

/**
 * Options for the WhatsApp enquiry dialog, in three groups. The value goes into the
 * prepared message ("I would like to enquire about <value> with Narayani Garg").
 */
export const enquiryTopics = [
  { value: "a personal consultation", label: "A personal consultation", group: "Where to begin" },
  { value: "choosing the right service", label: "I'm not sure where to begin", group: "Where to begin" },
  { value: "a consultation on my health", label: "Health", group: "An area of life" },
  { value: "a consultation on a relationship", label: "Relationship", group: "An area of life" },
  { value: "a consultation on my career", label: "Career", group: "An area of life" },
  { value: "a consultation on money", label: "Money", group: "An area of life" },
  { value: "Mind Training", label: "Mind Training", group: "A service" },
  { value: "Numerology", label: "Numerology", group: "A service" },
  { value: "Vastu", label: "Vastu", group: "A service" },
  { value: "Astrology", label: "Astrology", group: "A service" },
  { value: "the Personalised Hand Holding Program", label: "Personalised Hand Holding Program", group: "A service" },
] as const;

export type EnquiryTopic = (typeof enquiryTopics)[number]["value"];

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
    "Numerology, vastu and astrology are interpretive traditions. Guidance here is personal and spiritual, not medical, mental health, legal or financial advice.",
  copyright: "© 2026 Transformation with NNG",
};
