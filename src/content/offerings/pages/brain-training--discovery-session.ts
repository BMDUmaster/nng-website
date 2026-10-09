import type { OfferingPage } from "../types";
export const page: OfferingPage = {
  hub: "brain-training", slug: "discovery-session",
  title: "Not sure where to begin?",
  metaTitle: "Choosing where to begin",
  metaDescription: "Put your question into words, explore the guidance pages and ask the NNG team about relevant consultation options.",
  lead: "You can enquire before choosing a practice. A few notes about your question can help you explain what you need.",
  card: "A guide to putting your question into words before you enquire.",
  icon: "page-discovery-session", group: "begin",
  covers: ["Your question", "What keeps repeating", "What you have tried", "Choosing a next step", "Details to confirm", "Limits of guidance"],
  art: { kind: "drawing", id: "hero-discovery-session" },
  enquiryTopic: "help choosing where to begin", cta: "Ask the team where to begin",
  intro: [
    { type: "p", text: "You may have a clear question about work, a relationship or your home. You may simply feel that the same difficulty keeps returning. You do not need to choose a practice before asking about the available options." },
    { type: "p", text: "Narayani offers personal guidance through astrology, numerology and Vastu alongside mindset work. These pages explain the areas of guidance. The team can confirm what is available, what an appointment involves and any fee before you decide." },
  ],
  sections: [
    { id: "your-question", chip: "Your question", heading: "Start with what is happening", icon: "gen-listen", blocks: [
      { type: "p", text: "Write a sentence about the question you are carrying. If the same situation keeps returning, note two or three examples and what you would like to be different." },
      { type: "p", text: "You can also note what you have already tried. These are prompts for your own preparation, rather than a required assessment or a promised session format." },
    ] },
    { id: "next-step", chip: "Next steps", heading: "Explore before you choose", icon: "group-decisions", blocks: [
    { type: "p", text: "A discovery session is available when you want to discuss where to begin. You can explore your concern before choosing a specific practice. The team confirms the format and fee; no free session is implied." },
      { type: "p", text: "Ask the team which option relates to your question. Confirm the fee, format and preparation before booking. You can take time to decide." },
    ] },
    { id: "limits", chip: "Limits", heading: "Keep the limits clear", icon: "gen-limits", blocks: [
      { type: "p", text: "Personal guidance does not promise a result or replace medical, mental health, legal or financial advice. Astrology, numerology and Vastu are interpretive traditions." },
      { type: "p", text: "You do not need to include private records in an initial enquiry. Share only what helps you ask about an option." },
    ] },
  ],
  lookAt: { heading: "Questions to consider before you enquire", icon: "brain-research", items: [
    { icon: "brain-pattern", text: "What keeps repeating, if anything" },
    { icon: "gen-time", text: "When the question started and what you have tried" },
    { icon: "brain-words", text: "What you would like help understanding" },
  ] },
  bring: { heading: "A few notes for your first message", icon: "gen-bring-details", items: [
    { icon: "gen-whatsapp", text: "A sentence about your question" },
    { icon: "gen-calendar", text: "The option you are considering, if you have one" },
    { icon: "gen-privacy", text: "A question about fees, format or preparation" },
  ] },
  faqs: [
    { q: "Do I need to choose a practice first?", a: "No. You can ask the team about relevant options before deciding. Say briefly what your question concerns." },
    { q: "Does this page offer a discovery session?", a: "Yes. You can enquire about a discovery session with Narayani to discuss your concern and a suitable starting point. The team explains the appointment format, preparation and fee before you book. Enquiring does not reserve or pay for a session." },
    { q: "Should I send birth details straight away?", a: "Ask what preparation your chosen consultation needs before sending personal details." },
    { q: "Is guidance online or in person?", a: "Ask the team to confirm the available format for your chosen option." },
    { q: "Can someone join me?", a: "Mention your preference when you enquire. The team can confirm what is possible for the appointment." },
    { q: "Will a result be guaranteed?", a: "No. Personal guidance and interpretive traditions do not guarantee changes in health, relationships, career or finances." },
  ],
  related: ["/services/brain-training/", "/services/astrology/", "/hand-holding-program/"],
  note: "Confirm the option, format, fee and preparation with the team before booking.",
  showFees: false,
};
