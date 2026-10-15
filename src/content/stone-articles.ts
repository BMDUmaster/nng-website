export const stoneHubPath = "/services/stones-and-rudraksh/";

export type StoneArticle = {
  slug: string;
  category: "Gemstones" | "Crystals" | "Rudraksha" | "Buying thoughtfully";
  title: string;
  summary: string;
  takeaway: string;
  banner: string;
  alt: string;
  sections: { heading: string; text: string; points?: string[] }[];
  sources: { title: string; url: string; note: string }[];
};

/** Demo editorial copy, not Narayani's authored or approved advice. */
export const stoneArticles: StoneArticle[] = [
  {
    slug: "natural-lab-grown-and-imitation-gemstones",
    category: "Gemstones",
    title: "Natural, lab-grown or imitation: what are you choosing?",
    summary: "Three labels that can look similar, but tell different stories about a stone.",
    takeaway: "A beautiful stone and a correctly described stone are two different things. Ask about both.",
    banner: "stone-identification",
    alt: "Illustrative rough amethyst, faceted purple gemstone and smooth glass object beside a loupe",
    sections: [
      { heading: "Start with the material", text: "Natural describes geological origin. Laboratory-grown gems are made by people and share essentially the chemical composition and properties of their natural counterparts. An imitation resembles another gem but is a different material. These are not interchangeable descriptions." },
      { heading: "Treatment is a separate question", text: "A natural stone can also be treated. Heat, dyes or other processes may change appearance. Ask what is known about treatment and whether it changes how the piece should be cared for. A label that says natural does not answer every question." },
      { heading: "Ask before you compare prices", text: "Colour alone cannot settle identity or origin. Compare pieces only after their descriptions are clear.", points: ["What material am I being offered?", "Is it natural, laboratory-grown or an imitation?", "What treatments are disclosed?", "Is independent identification available for this exact piece?"] },
      { heading: "Keep meaning and identification separate", text: "You may value a stone as jewellery, a keepsake or part of a spiritual practice. That meaning does not identify the material. Give yourself room to appreciate the piece while asking practical questions about it." },
    ],
    sources: [
      { title: "GIA: synthetic gem materials", url: "https://www.gia.edu/gem-synthetic", note: "Natural counterparts and laboratory-grown materials." },
      { title: "GIA: imitation gem materials", url: "https://www.gia.edu/gem-imitation", note: "How an imitation differs from the gem it resembles." },
      { title: "GIA: gem treatments", url: "https://www.gia.edu/gem-treatment", note: "Treatment types and material-specific care." },
    ],
  },
  {
    slug: "understanding-a-gemstone-report",
    category: "Gemstones",
    title: "What a gemstone report can tell you",
    summary: "Understand the material, the treatment and the limits of the paperwork.",
    takeaway: "A laboratory report identifies a stone. It does not promise what wearing it will do for your life.",
    banner: "gemstone-report",
    alt: "Illustrative blue gemstone beside a loupe, measurement caliper and sample report sheet",
    sections: [
      { heading: "Read the identification first", text: "GIA's coloured-stone identification reports describe the gemstone, whether it is natural or laboratory-grown, and detectable treatments. Report formats and services differ between laboratories, so ask exactly what the document covers." },
      { heading: "Check that it describes your piece", text: "Look at the photograph and the recorded shape, measurements and weight where supplied. Ask the seller to explain any mismatch. For a significant purchase, do not rely on an image of a report that cannot be connected to the piece in front of you." },
      { heading: "Verify through the issuing laboratory", text: "Use the laboratory's own verification service where available. A seller's listing, a branded pouch or a decorative certificate is not the same as independent identification.", points: ["Who issued the report?", "Which tests or services does it cover?", "Can its details be checked with the issuer?", "Is the documented piece the one being supplied?"] },
      { heading: "Know what remains outside it", text: "Do not read spiritual suitability, a guaranteed resale price or a health outcome into an identification report. For a purchase, settle the description, total cost and return terms separately in writing." },
    ],
    sources: [{ title: "GIA: sample coloured-stone reports", url: "https://www.gia.edu/analysis-grading-sample-report-colored-stone", note: "Report scope, identification and detectable treatments." }],
  },
  {
    slug: "crystal-care-without-the-confusion",
    category: "Crystals",
    title: "Crystal care without the confusion",
    summary: "Care for the material first. Not every stone belongs in water or sunlight.",
    takeaway: "There is no single cleaning routine for every crystal. Start by identifying the material and its treatment.",
    banner: "crystal-care",
    alt: "Illustrative amethyst cluster and rose quartz pebble on linen beside a soft brush",
    sections: [
      { heading: "A care routine is not a ritual", text: "Cleaning a piece protects its surface and setting. A ritual may hold personal meaning, but it is a separate choice. You do not need a complicated routine to enjoy an object that matters to you." },
      { heading: "Use a specific stone as your reference", text: "For amethyst, GIA notes that sudden temperature changes can cause fractures and prolonged intense light may fade some colour. Its guidance allows warm soapy water, while advising against steam and heat. Do not generalise that advice to every mineral, treated stone or jewellery setting." },
      { heading: "Keep a simple care note", text: "Ask the supplier for instructions that match the exact piece. Keep them alongside its description rather than relying on a general social-media tip.", points: ["Record the material and any disclosed treatment.", "Ask whether water, chemicals or heat should be avoided.", "Check the string, metal or setting as well as the stone.", "Store pieces so they do not knock against one another."] },
      { heading: "Choose meaning without adding promises", text: "Holding a stone, placing it on your desk or giving it as a keepsake can be a personal preference. This guide does not recommend crystal-infused drinking water or claim that a care ritual changes health, relationships or financial outcomes." },
    ],
    sources: [{ title: "GIA: amethyst care and cleaning", url: "https://www.gia.edu/amethyst-care-cleaning", note: "Material-specific guidance; not a universal crystal-cleaning rule." }],
  },
  {
    slug: "rudraksha-mukhi-and-mala-explained",
    category: "Rudraksha",
    title: "Rudraksha, mukhi and mala: a clear starting point",
    summary: "Understand the bead and the vocabulary before choosing a piece.",
    takeaway: "Learn what the label means, ask how the bead is identified, and keep spiritual meaning separate from a promised result.",
    banner: "rudraksha-basics",
    alt: "Illustrative textured brown Rudraksha beads and a mala on natural linen",
    sections: [
      { heading: "Begin with three words", text: "Rudraksha names the seed bead used in spiritual traditions. Mukhi refers to its faces or natural lines. A mala is a string of beads. Knowing these terms makes it easier to understand a listing without treating every description as a recommendation." },
      { heading: "A number is not a complete description", text: "A mukhi label tells you one part of what a seller claims to offer. Ask about the bead's size, condition, source and any work done to it. A photograph helps you see the surface; it does not settle every authenticity question." },
      { heading: "Ask about the piece you will receive", text: "Keep the conversation practical, especially when a bead is expensive or described as rare.", points: ["Is the photo of the exact bead or an example?", "How is the mukhi description supported?", "What identification documents, if any, are supplied?", "What are the stringing, care and return terms?"] },
      { heading: "Leave room for personal belief", text: "Different traditions attach different meanings and customs to beads. Those meanings are not a medical prescription or a guarantee of prosperity. This article introduces vocabulary; it does not select a mukhi for you or replace a conversation about your question." },
    ],
    sources: [{ title: "Isha: an introduction to Rudraksha", url: "https://innerengineering.sadhguru.org/online/blog/the-modern-minimalists-guide-to-choosing-your-first-rudraksha", note: "Referenced for bead terminology only. Its benefit claims are not adopted here." }],
  },
  {
    slug: "five-questions-before-buying-a-stone-or-bead",
    category: "Buying thoughtfully",
    title: "Five questions before buying a stone or bead",
    summary: "A short checklist for a decision you can make without pressure.",
    takeaway: "Know the piece, the evidence and the terms. A purchase should never feel like the price of avoiding harm.",
    banner: "before-you-buy",
    alt: "Illustrative green gemstone, quartz specimen and Rudraksha bead beside a loupe and purchase document",
    sections: [
      { heading: "1. What exactly am I buying?", text: "Ask for a written description of the material, size or weight, and what is included. For a stone, clarify natural, laboratory-grown or imitation. For a bead, ask how its type is described and supported." },
      { heading: "2. What is being claimed?", text: "A traditional association, a personal intention and a material test are different things. Ask which one the seller is talking about. Do not treat a promise about healing, wealth or protection as proof of the object's identity." },
      { heading: "3. What supports the description?", text: "Ask who identified the piece and what any document actually checks. An explanation of a tradition is not a laboratory assessment. For a significant purchase, be clear about whether independent identification is available." },
      { heading: "4. What is the total commitment?", text: "Confirm the full price, any report or setting charge, delivery arrangements, care instructions and return terms before paying. These are questions to settle with the seller, not terms this demo article promises on NNG's behalf." },
      { heading: "5. Would I choose this without pressure?", text: "Give yourself time. You can enjoy a meaningful object without accepting a warning that something bad will happen if you do not buy it. If the description or terms remain unclear, pause the purchase rather than filling the gaps yourself." },
    ],
    sources: [{ title: "GIA: imitation gem materials", url: "https://www.gia.edu/gem-imitation", note: "The material distinction behind the first buying question." }],
  },
];

export const stoneArticlePath = (slug: string) => `${stoneHubPath}articles/${slug}/`;
export const articleReadingMinutes = (article: StoneArticle) => Math.max(1, Math.ceil([article.summary, article.takeaway, ...article.sections.flatMap(section => [section.heading, section.text, ...(section.points ?? [])])].join(" ").split(/\s+/).length / 180));
