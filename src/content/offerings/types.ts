import type { Faq } from "../faq";

/**
 * The shape of every page under /services/<hub>/ and /services/<hub>/<page>/.
 *
 * One typed model, one template (src/components/offerings), so all 38 pages carry their parts in a known
 * order and a wrong shape fails at typecheck, not in production. Copy is written fresh in Narayani's voice:
 * nothing is lifted from any other practitioner's site. Every page is draft copy for her approval.
 *
 * House rules for strings (npm run lint:copy enforces the mechanical ones, and scripts/copy-lint.mjs holds the
 * banned words and phrases):
 * - No em dashes or en dashes.
 * - Headings are plain sentences. No label above a heading. No arrows in links that stay on the site.
 * - *Italics* (asterisks) only for her own words, a client's words, a book title or a term being defined.
 * - No guarantees, no fear, no claim to diagnose, treat or cure. Traditions are described as traditions.
 *
 * Icons: every heading and every defined term carries an icon of its own, drawn for that idea
 * (src/components/icons). An icon id is used once per page. The ids come from src/components/icons/vocab.tsv.
 */

export type HubSlug = "astrology" | "numerology" | "vastu" | "brain-training" | "stones-and-rudraksh";

/**
 * An id from src/components/icons/vocab.tsv, for example "graha-sun" or "room-kitchen". Four ids belong to the
 * template and are never used in page content: gen-question (the questions heading), gen-fees (the fees
 * heading), gen-next-step (keep reading) and gen-six-months (a link to the Hand Holding Program).
 */
export type IconId = string;

export type Term = {
  term: string;
  text: string;
  /** The icon for this one idea. */
  icon: IconId;
};

export type Step = {
  title: string;
  text: string;
  icon: IconId;
};

/** A unit of body copy. Strings may use *italic* and, in a paragraph, a newline for a line break. */
export type Block =
  | { type: "p"; text: string }
  /** A short list for scanning. `title` renders as a small heading above it. No icons: a list is not a set of definitions. */
  | { type: "list"; items: string[]; title?: string }
  /** Terms and what they mean: a definition list. Every term has its own icon. */
  | { type: "terms"; items: Term[]; title?: string }
  /**
   * A compact table. Every row must have as many cells as `head`. When the first cell of each row names a
   * thing (a house, a planet, a nakshatra, a direction, a stone), give `icons`, one per row, in row order.
   */
  | { type: "table"; head: string[]; rows: string[][]; caption?: string; icons?: IconId[] }
  /** Steps where order matters. Every step has its own icon. */
  | { type: "steps"; items: Step[]; title?: string }
  /** Narayani's own words only, from her calls or writing. `source` names where they come from. */
  | { type: "quote"; text: string; source: string }
  /** A quiet aside: a limit, a caution, a point of honesty. */
  | { type: "note"; text: string };

export type Section = {
  /** Anchor id, lowercase with hyphens. Unique within the page. */
  id: string;
  /** A short label for the jump bar, 24 characters or fewer: "Marriage", "Choosing", "Wearing". */
  chip: string;
  /** An H2 written as a plain sentence or a plain noun phrase. Not a label. */
  heading: string;
  /** The icon beside the heading, drawn for what this section is about. */
  icon: IconId;
  blocks: Block[];
};

/** Which original drawing opens the page. Every drawing is authored for this site and no two pages share one. */
export type ArtSpec =
  /** North Indian birth chart; `houses` (1 to 12) are lit. */
  | { kind: "chart"; houses?: number[] }
  /** Numbers set as type: a Lo Shu square, or a date, a name, a phone number, a signature, a plaque. */
  | { kind: "numbers"; variant: "loshu" | "dob" | "name" | "mobile" | "signature" | "business" }
  /** A plan drawing: a home, an office, a plot, a township, a compass, or the five elements. */
  | { kind: "plan"; variant: "home" | "office" | "site" | "astro" | "township" | "elements" }
  /** The nine planetary periods of the 120-year dasha cycle, in their true proportions. */
  | { kind: "timeline" }
  /** The 27 nakshatras around the sky. */
  | { kind: "wheel" }
  /** A clock face: a reading cast for the moment a question is asked. */
  | { kind: "moment" }
  /** Practice drawings for brain training. */
  | { kind: "practice"; variant: "threads" | "nlp" | "tapping" | "ripple" }
  /** Stones and Rudraksha. */
  | { kind: "stones" }
  | { kind: "bead"; mukhi?: number }
  /** A scene drawn for this page alone (src/components/icons/heroes). */
  | { kind: "drawing"; id: string };

export type GemCut = "oval" | "round" | "cushion" | "emerald" | "cabochon" | "pear";

/** One stone or one bead in a catalogue. A drawing stands in for a product photograph. */
export type CatalogueItem = {
  id: string;
  /** "Ruby", "5 Mukhi". */
  name: string;
  /** Another name in common use: "Manik". */
  other?: string;
  /** What the tradition links it with, worded as tradition: "Linked with the Sun in Jyotish". */
  tradition: string;
  summary: string;
  /** Two to four short points worth knowing. No benefit claims. */
  points: string[];
  art: { kind: "gem"; cut: GemCut; tint: string } | { kind: "bead"; mukhi: number };
};

export type OfferingPage = {
  hub: HubSlug;
  /** "" for the hub page itself; otherwise the last path segment, as listed in src/content/routes.json. */
  slug: string;
  /** The H1. A plain sentence or noun phrase, 60 characters or fewer. */
  title: string;
  /** The <title>, 44 characters or fewer. The page adds " | Narayani Garg" after it. */
  metaTitle: string;
  /** The meta description, 155 characters or fewer. */
  metaDescription: string;
  /** One or two sentences under the H1. */
  lead: string;
  /** One line for lists and cards, 90 characters or fewer. Says what the page is for, in the reader's terms. */
  card: string;
  /** This page's own icon (the "page-..." or "hub-..." id given in page_specs.json). Unique across the site. */
  icon: IconId;
  /** The sub-category this page sits in, as listed in src/content/offerings/taxonomy.ts. Empty for a hub page. */
  group: string;
  /** Three to seven short phrases naming what the page covers, 32 characters or fewer each. Shown on the home page and the hub page. */
  covers: string[];
  art: ArtSpec;
  /** What goes into the WhatsApp message: "I would like to enquire about <enquiryTopic> with Narayani Garg". */
  enquiryTopic: string;
  /** The enquiry button label. */
  cta: string;
  /** Two to four short paragraphs straight after the opening. */
  intro: Block[];
  /** The body: three to nine sections. */
  sections: Section[];
  /** What she looks at together with you: a heading written for this subject, an icon, and three to six items, each with its own icon. */
  lookAt: { heading: string; icon: IconId; items: { icon: IconId; text: string }[] };
  /** What to have ready for this subject. Written for this page, not generic. */
  bring: { heading?: string; icon: IconId; items: { icon: IconId; text: string }[] };
  /**
   * How a session runs, only where the way it runs differs from the usual (a site visit, two charts, a long
   * period of guidance). Leave it out where it would repeat what the services page already says.
   */
  session?: { heading?: string; icon: IconId; steps: Step[] };
  /** Who this suits and who it does not: two to four items each, honest. Only where the subject needs it. */
  suits?: { icon: IconId; yes: string[]; no: string[] };
  /** Hub pages only: the heading above the list of pages beneath the hub, as a plain sentence. */
  indexHeading?: string;
  /** Stones and Rudraksha catalogue pages only. */
  catalogue?: { heading: string; chip: string; intro: string; items: CatalogueItem[]; icon: IconId };
  /** Six to twelve questions and answers: every common question a visitor asks about this subject. */
  faqs: Faq[];
  /** Route paths from src/content/routes.json, two to four, for "keep reading". */
  related: string[];
  /** One page-specific careful note, where the subject calls for it. */
  note?: string;
  /** Show the four consultation options and their fees on this page. */
  showFees: boolean;
};
