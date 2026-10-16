import type { HubSlug } from "./offerings/types";

/**
 * The five services. The first four were rewritten on 23 Sept 2026 to say what she actually looks at, in place
 * of the general lines that read as template copy. Everything draws only on what she has said or published:
 * her calls (10 and 15 Sept 2026), her content pillars (the home mandir, ancestors' photographs, name
 * spelling, mobile numbers) and her book (breathwork, affirmations, Ho'oponopono, EFT, habits). The quote is
 * her words from the 10 Sept discovery call, translated from Hindi. On 1 Oct 2026 Aryan chose "Psychic Reader"
 * as the public name (her own phrase on the price sheet) in place of "Mind Training", and asked for a
 * fifth service, Crystals, Stones and Rudraksha. All of it is draft copy for Narayani's approval.
 *
 * Each service opens a hub page at /services/<slug>/ with its own pages beneath it (src/content/offerings).
 */
export type Service = {
  slug: HubSlug;
  name: string;
  /** The WhatsApp enquiry topic for this service. */
  topic: string;
  card: string;
  lead: string;
  look: string[];
  quote?: string;
};

export const services: Service[] = [
  {
    slug: "brain-training",
    name: "Brainology Program",
    topic: "Brainology Program",
    card: "The beliefs and habits behind a recurring concern. Where she starts.",
    lead: "A look at the beliefs, habits and reactions that shape how you respond to the question you bring.",
    quote: "Couldn’t Krishna have fixed the Vastulogy and ended the war between the brothers? He didn’t. He worked on Arjuna’s mind.",
    look: [
      "The patterns that keep returning in health, relationships, money or career",
      "How you respond under pressure, and what you tell yourself",
      "The beliefs behind a recurring situation, explored through personal guidance",
      "Daily habits you can practise between conversations",
    ],
  },
  {
    slug: "numerology",
    name: "Numerology",
    topic: "Numerology",
    card: "Your date of birth, your name and its spelling, your mobile number.",
    lead: "A reading of your date of birth, name and the numbers you use regularly, considered alongside your question.",
    look: [
      "Your date of birth, and what it points to",
      "Your name and the way it is spelt",
      "The numbers you live with every day, such as your mobile number",
    ],
  },
  {
    slug: "vastu",
    name: "Vastulogy",
    topic: "Vastulogy",
    card: "Your home, office or shop, and where things belong in it.",
    lead: "A look at how your home or workplace is arranged and used by the people in it.",
    look: [
      "The layout of your home, office or shop",
      "Where things belong, from the home mandir to family photographs",
      "How the space is used, day to day, by the people in it",
    ],
  },
  {
    slug: "astrology",
    name: "Astrology",
    topic: "Astrology",
    card: "Your birth chart, read around the question you bring.",
    lead: "Your birth chart, read in relation to the concern or decision you bring.",
    look: [
      "Your birth chart, read around the question you bring",
      "The larger decisions: career, marriage, property, business",
      "What to do next, and the reason for it",
    ],
  },
  {
    slug: "stones-and-rudraksh",
    name: "Crystals, Stones and Rudraksha",
    topic: "Crystals, Stones and Rudraksha",
    card: "Gemstones and Rudraksha beads: what they are, and how to choose with care.",
    lead: "Guidance on gemstones and Rudraksha beads, given alongside your chart and your question, never ahead of them.",
    look: [
      "Whether a stone or a bead is worth considering for you at all",
      "How to tell what is genuine, and what to ask before you buy",
      "How to wear and look after what you choose",
    ],
  },
];

export const serviceHref = (slug: HubSlug) => `/services/${slug}/`;

/** Mind. Direction. Alignment. The lock-up line, read as the order of a consultation (proposed). */
export const method = [
  {
    word: "Mind",
    text: "Notice the thoughts and habits that recur in the situation you bring.",
    services: ["brain-training"],
  },
  {
    word: "Direction",
    text: "Work out what matters now and the next step you can take.",
    services: ["numerology", "astrology"],
  },
  {
    word: "Alignment",
    text: "Bring that step into your routines and surroundings.",
    services: ["vastu"],
  },
] as const;

/** Service order confirmed by Aryan on 8 October 2026. */
const displayOrder: HubSlug[] = ["brain-training", "astrology", "numerology", "vastu", "stones-and-rudraksh"];
services.sort((a, b) => displayOrder.indexOf(a.slug) - displayOrder.indexOf(b.slug));

/** Educational stone material is a resource, not a bookable practice (8 October 2026). */
export const consultationServices = services.filter(service => service.slug !== "stones-and-rudraksh");
