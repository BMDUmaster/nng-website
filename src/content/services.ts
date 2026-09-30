import type { EnquiryTopic } from "./site";

/**
 * The four services. Rewritten on 23 Sept 2026 to say what she actually looks at, in place of the
 * general lines that read as template copy. Everything draws only on what she has said or published:
 * her calls (10 and 15 Sept 2026), her content pillars (the home mandir, ancestors' photographs, name
 * spelling, mobile numbers) and her book (breathwork, affirmations, Ho'oponopono, EFT, habits). The two
 * quotes are her words from the 10 Sept discovery call, translated from Hindi. All of it is draft copy
 * for Narayani's approval.
 */
export type Service = {
  slug: "mind-training" | "numerology" | "vastu" | "astrology";
  name: string;
  topic: EnquiryTopic;
  card: string;
  lead: string;
  look: string[];
  quote?: string;
};

export const services: Service[] = [
  {
    slug: "mind-training",
    name: "Mind Training",
    topic: "Mind Training",
    card: "The beliefs and habits behind a recurring concern. Where she starts.",
    lead: "A look at the beliefs, habits and reactions that shape how you respond to the question you bring.",
    quote: "Couldn’t Krishna have fixed the vastu and ended the war between the brothers? He didn’t. He worked on Arjuna’s mind.",
    look: [
      "The patterns that keep returning in health, relationships, career or money",
      "How you respond under pressure, and what you tell yourself",
      "Practices from her book: breathwork, affirmations, Ho’oponopono and EFT tapping",
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
    name: "Vastu",
    topic: "Vastu",
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
];

/** Mind. Direction. Alignment. The lock-up line, read as the order of a consultation (proposed). */
export const method = [
  {
    word: "Mind",
    text: "Notice the thoughts and habits that recur in the situation you bring.",
    services: ["mind-training"],
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
