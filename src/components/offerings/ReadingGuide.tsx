import type { HubSlug, OfferingPage } from "@/content/offerings/types";
import { SectionReading } from "./SectionReading";

const introductions: Partial<Record<string, string>> = {
  astrology: "Bring the decision you are facing. Narayani reads the relevant chart themes alongside your circumstances. The chart is an interpretive tradition, not a verdict on your future.",
  numerology: "Start with the number or name you want to understand. Narayani explains the interpretation and connects it with your choices. A number does not decide your life.",
  "brain-training": "Bring one situation that keeps repeating. Together, you look at your thoughts, reactions and habits, then discuss a practice that fits. NLP, EFT and Ho'oponopono are available for personal guidance, not treatment.",
  vastu: "Tell her how you use the space and what you want to change. She considers the layout alongside everyday needs. Vastu guidance does not replace structural, safety or professional advice.",
  "stones-and-rudraksh": "Before choosing a stone or bead, discuss why you are considering it. Narayani explains the traditional reasoning without pressure to purchase. Authenticity and buying terms need separate checks.",
  "stones-and-rudraksh/gemstones": "A stone should come with an explanation, not a warning. Discuss why it was suggested, what it is and how to check it. The nine traditional pairings are in the catalogue below; none guarantees an outcome.",
  "stones-and-rudraksh/rudraksha": "Understand the bead before choosing it: its natural grooves, authenticity and care. Narayani can explain its place in personal practice. A higher price or mukhi count does not establish a health benefit.",
};

/** Authored first-layer explanations. The original reference material stays accessible. */
export const sectionTakeaways: Partial<Record<HubSlug, Record<string, string>>> = {
  astrology: {
    "what-it-is": "Jyotish interprets a birth chart through traditional meanings. It can frame a conversation, but it cannot establish what must happen to you.",
    "the-map": "The chart brings planets, signs, houses and timing together. No single placement tells the whole story.",
  },
  numerology: {
    ideas: "Dates, names and everyday numbers are read in different ways. The calculation is arithmetic; the meaning attached to it is an interpretation.",
    origins: "Different systems can give different totals. Ask which method is being used before comparing two readings.",
    evidence: "Numerology is not a proven way to predict events. Use a reading as something to reflect on, not evidence that a decision will succeed.",
    lens: "Narayani connects the interpretation with the habits and decisions behind your question. What you choose to do matters more than the number alone.",
  },
  "brain-training": {
    "mind-first": "A remedy still needs to fit your everyday life. Narayani starts with the thoughts and habits that affect how you put advice into practice.",
    patterns: "Notice what happens, what you tell yourself and how you respond. That gives you a specific moment to work with, rather than a label to live under.",
    practices: "NLP, EFT tapping, Ho'oponopono, breathing, affirmations and habit work are available. The practice is chosen around your concern; none is a substitute for medical or mental health care.",
    everyday: "Start small: a comfortable breathing practice, a believable sentence or one action you can repeat. Responses differ, and there is no universal routine or deadline.",
  },
  vastu: {
    "what-it-is": "Vastu is a tradition for interpreting space. Your layout, daily use and practical constraints all matter when discussing a change.",
    ideas: "Direction, layout and the five elements form the traditional framework. Start with an accurate plan, not a list of supposed faults.",
    evidence: "Traditional associations are not proof of an effect on health or prosperity. Light, ventilation, safety and comfort still need practical attention.",
  },
  "stones-and-rudraksh": {
    "what-they-are": "Gemstones and Rudraksha beads have different origins and uses. Rudraksha beads have natural grooves. Their traditional associations are not proof of a benefit.",
    evidence: "No reliable evidence establishes that wearing a stone or bead changes health, money or relationships. Authenticity checks tell you what you are buying, not what it will do.",
    lists: "Labels such as birthstone, chakra stone or energised describe different traditions or selling conventions. Ask what a label actually means before paying more for it.",
  },
};

export const duplicateDirectories: Partial<Record<HubSlug, string>> = {
  astrology: "where-to-start", numerology: "routes", vastu: "where-to-start", "stones-and-rudraksh": "next",
};

export const stoneTakeaways: Record<string, Record<string, string>> = {
  gemstones: {
    origins: "The nine planetary pairings come from tradition, and some historical names are disputed. Check the mineral being discussed rather than relying on its trade name.",
    substitutes: "A substitute is usually a less expensive stone suggested in place of another. Lists differ, and neither an original nor a substitute has a proven planetary effect.",
    choosing: "The traditional choice considers the whole chart, not just a Sun sign. Ask why a particular stone was suggested and what else was considered.",
    customs: "Finger, metal and day are wearing customs, not established requirements. Sources differ; ask for the reasoning without accepting threats or pressure.",
    weight: "Carat measures weight: one carat is 200 milligrams. Ratti values vary, so request the weight in carats. A larger stone does not establish a stronger effect.",
    treatments: "Natural, treated, lab-grown and imitation describe different things. Ask the seller to disclose the material and any treatment before agreeing to a price.",
    reports: "An independent laboratory report can identify a stone and its treatments. It cannot confirm spiritual effects or guarantee what wearing it will change.",
    trial: "A wearing trial is a custom, not a test of planetary effects. Agree any return terms in writing before purchasing; an event during the trial proves nothing about the stone.",
  },
  rudraksha: {
    seed: "Rudraksha is a seed bead used in personal and prayer practice. Its natural grooves distinguish it from the polished mineral stones in the collection.",
    origins: "Origin labels and seller grades are not a universal quality standard. Check the individual bead and the supporting evidence, not the country label alone.",
    mukhi: "Mukhi means face: the count of natural grooves on the bead. Traditional meanings vary, and the count does not establish a medical benefit.",
    mala: "A traditional mala has 108 counting beads and a separate guru bead. Customs guide how it is used; they are not guarantees of an outcome.",
    real: "Appearance alone cannot settle authenticity. Ask about an independent inspection or imaging and confirm buying terms. Floating a bead in water is not reliable proof.",
    claims: "Wearing a bead is a personal choice, not protection against a predicted danger. Do not replace medical care or practical decisions with benefit claims.",
  },
};

export function ReadingGuide({ page }: { page: OfferingPage }) {
  const key = page.slug ? `${page.hub}/${page.slug}` : page.hub;
  const takeaway = introductions[key];
  return <div className="offer-reading-intro">
    <SectionReading blocks={page.intro} label="the introduction" takeaway={takeaway} />
  </div>;
}
