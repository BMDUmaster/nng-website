import type { HubSlug, IconId } from "./types";

/**
 * The map of what Narayani works with: five areas, and inside each the sub-categories its pages sit in.
 * One source for the home page, the services page, every hub page and the validators, so the structure a
 * visitor sees on the home page is exactly the structure of the site. A page names its sub-category by `id`
 * in its own `group` field.
 */
export type HubGroup = {
  id: string;
  label: string;
  /** One line under the label, 90 characters or fewer. */
  line: string;
  icon: IconId;
};

export type HubInfo = {
  slug: HubSlug;
  /** The name as a visitor reads it. */
  name: string;
  /** One or two sentences: what this area is, in plain words. 170 characters or fewer. */
  blurb: string;
  icon: IconId;
  groups: HubGroup[];
};

export const hubs: HubInfo[] = [
  {
    slug: "astrology",
    name: "Astrology",
    blurb: "Jyotish used as a way to reflect on timing, relationships, work and choices, always beside the mind-first conversation.",
    icon: "hub-astrology",
    groups: [
      { id: "chart", label: "Your chart and its timing", line: "The chart itself, the periods running through it, and the nakshatras.", icon: "group-chart" },
      { id: "relationships", label: "Marriage and relationships", line: "Timing, delay and compatibility, for one person or for two.", icon: "group-relationships" },
      { id: "life", label: "Work, study and wellbeing", line: "Career and business, a child's studies, and the rhythm of your energy.", icon: "group-work-study" },
      { id: "decisions", label: "Decisions and specific concerns", line: "A property, a move, one concern, or a question without birth details.", icon: "group-decisions" },
      { id: "remedies", label: "Remedies", line: "What is chosen, why, and when none is needed.", icon: "group-remedies" },
    ],
  },
  {
    slug: "numerology",
    name: "Numerology",
    blurb: "The numbers in a life, from a date of birth to a name, a phone, a house or a business, read as patterns to reflect on.",
    icon: "hub-numerology",
    groups: [
      { id: "yours", label: "Your numbers", line: "Your date of birth, your name and the grid they form.", icon: "group-your-numbers" },
      { id: "daily", label: "Numbers you use every day", line: "Your mobile and house number, and the way you sign.", icon: "group-daily-numbers" },
      { id: "larger", label: "Business, chart and systems", line: "A business name, numbers with a chart, and the systems compared.", icon: "group-business-numbers" },
    ],
  },
  {
    slug: "vastu",
    name: "Vastu",
    blurb: "Direction, elements and layout in a home, a workplace or a whole project, with practical corrections where they are needed.",
    icon: "hub-vastu",
    groups: [
      { id: "foundations", label: "The foundations", line: "The directions and the five elements every reading starts from.", icon: "group-foundations" },
      { id: "homes", label: "Homes and property", line: "Your home, and choosing a property or a plot.", icon: "group-homes" },
      { id: "workplaces", label: "Workplaces and projects", line: "Offices and shops, developers and townships, and special spaces.", icon: "group-workplaces" },
      { id: "chart-space", label: "With your chart, and corrections", line: "A space read beside a chart, and fixes that do not need demolition.", icon: "group-chart-space" },
      { id: "energy", label: "Energy and balance", line: "A guided session to settle a space, and the person in it.", icon: "group-energy" },
      { id: "ongoing", label: "Guidance over time", line: "Support through a project or a year, not a single visit.", icon: "group-ongoing" },
    ],
  },
  {
    slug: "brain-training",
    name: "Brainology Program",
    blurb: "Personal and spiritual guidance around recurring patterns, thoughts and beliefs.",
    icon: "hub-brain-training",
    groups: [
      { id: "begin", label: "Personal guidance", line: "Begin with the question you bring.", icon: "group-begin" },
      { id: "practices", label: "Consultation choices", line: "Discuss the right starting point with the team.", icon: "group-practices" },
    ],
  },
  {
    slug: "stones-and-rudraksh",
    name: "Crystals, Stones and Rudraksha",
    blurb: "Guidance on gemstones and Rudraksha beads: what each tradition links them with, how to choose with care, and when not to buy at all.",
    icon: "hub-stones-and-rudraksh",
    groups: [{ id: "wearing", label: "Stones and beads", line: "What is worn, what it is linked with, and how to choose.", icon: "group-guidance" }],
  },
];

export const hubInfo = (slug: HubSlug): HubInfo => {
  const hub = hubs.find((item) => item.slug === slug);
  if (!hub) throw new Error(`No hub ${slug}`);
  return hub;
};

/** Which sub-category each page sits in. Used by the validators and by page_specs. */
export const groupOfPage: Record<string, string> = {
  "astrology/birth-chart-reading": "chart",
  "astrology/dashas-and-transits": "chart",
  "astrology/nakshatras": "chart",
  "astrology/marriage": "relationships",
  "astrology/kundali-matching": "relationships",
  "astrology/career-and-business": "life",
  "astrology/education": "life",
  "astrology/health-and-wellbeing": "life",
  "astrology/property-and-big-decisions": "decisions",
  "astrology/specific-issue-reading": "decisions",
  "astrology/reading-without-birth-details": "decisions",
  "astrology/astrology-remedies": "remedies",
  "astrology/career-growth": "life",
  "astrology/legal-matters": "decisions",
  "astrology/intuitive-consult": "relationships",
  "numerology/personal-numbers": "yours",
  "numerology/name-numerology": "yours",
  "numerology/lo-shu-grid": "yours",
  "numerology/mobile-and-house-numbers": "daily",
  "numerology/signature": "daily",
  "numerology/business-name": "larger",
  "numerology/astro-numerology": "larger",
  "numerology/numerology-systems": "larger",
  "numerology/business-astro-numerology": "larger",
  "numerology/business-logo": "larger",
  "vastu/directions-and-elements": "foundations",
  "vastu/home": "homes",
  "vastu/property-and-land": "homes",
  "vastu/office-and-shop": "workplaces",
  "vastu/real-estate-and-developers": "workplaces",
  "vastu/specialised-spaces": "workplaces",
  "vastu/astro-vastu": "chart-space",
  "vastu/vastu-remedies": "chart-space",
  "vastu/energy-balancing": "energy",
  "vastu/ongoing-guidance": "ongoing",
  "brain-training/discovery-session": "begin",
  "brain-training/nlp": "practices",
  "brain-training/eft-tapping": "practices",
  "brain-training/hooponopono": "practices",
  "stones-and-rudraksh/gemstones": "wearing",
  "stones-and-rudraksh/rudraksha": "wearing",
};
