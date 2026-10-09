/** Aryan's 8 October decisions. Offers are enquiries, not priced or confirmed packages. */
export const psychicChoices = [
  { name: "Past Life Regression", icon: "gen-next-step", line: "Ask about a guided session exploring this spiritual practice." },
  { name: "Health Abundance", icon: "hub-brain-training", line: "Bring a question about wellbeing and everyday patterns." },
  { name: "Relationship Abundance", icon: "group-relationships", line: "Explore the beliefs and responses within a relationship concern." },
  { name: "Wealth Abundance", icon: "group-business-numbers", line: "Reflect on your approach to money and the choices around it." },
  { name: "Career Abundance", icon: "page-career-and-business", line: "Discuss a work concern, a recurring pattern or a change of direction." },
  { name: "Chakra Healing with Brain Patterns", icon: "group-energy", line: "Ask about chakra practice within Narayani’s spiritual approach." },
] as const;

export const vastuChoices = [
  { name: "Residential Vastu", icon: "page-home", line: "Your home, its layout and the way your household uses it.", href: "/services/vastu/home/" },
  { name: "Commercial Vastu", icon: "page-office-and-shop", line: "Offices, shops, factories, clinics and other working spaces.", href: "/services/vastu/office-and-shop/" },
  { name: "Property Selection Vastu", icon: "page-property-and-land", line: "A separate conversation before choosing a property or plot.", href: "/services/vastu/property-and-land/" },
  { name: "Body Vastu", icon: "group-energy", line: "शरीर का वास्तु. Ask Narayani’s team about the scope of this consultation." },
  { name: "Office Desk Vastu", icon: "group-workplaces", line: "Desk-focused guidance for job professionals. Discuss the scope before booking." },
] as const;

export const shortGuidance: Record<string, { lead: string; points: string[] }> = {
  "numerology": { lead: "Your date of birth, name and everyday numbers, considered around the question you bring.", points: ["Date of birth and name", "Mobile, home and business numbers", "Personal choices and recurring patterns"] },
  "numerology/personal-numbers": { lead: "Start with your date of birth. Narayani considers its traditional number meanings alongside your situation.", points: ["Birth date and personal numbers", "Your question about health, relationship, money or career", "The choices you want to understand"] },
  "numerology/name-numerology": { lead: "Considering a name or a spelling change? Discuss its traditional number reading before you decide.", points: ["Your current name and spelling", "An alternative you are considering", "The reason for the change"] },
  "numerology/lo-shu-grid": { lead: "A traditional grid offers another way to look at your birth-date numbers. It is a framework for reflection, not a verdict.", points: ["Your date of birth", "The traditional grid and its patterns", "Your circumstances alongside the interpretation"] },
  "numerology/mobile-and-house-numbers": { lead: "Explore the numbers you use every day, from your mobile to your home, around a specific question.", points: ["Mobile and house numbers", "Who uses the number or space", "A current number or an alternative"] },
  "numerology/signature": { lead: "Discuss your signature as part of a traditional numerology reading. The decision to change it stays with you.", points: ["Your name and usual signature", "What you want to understand", "Practical implications of any change"] },
  "numerology/business-name": { lead: "Bring your business name and the decision behind it. Narayani considers the traditional number reading in context.", points: ["Current or proposed business names", "Your work and its audience", "The decision you are weighing"] },
  "numerology/astro-numerology": { lead: "Explore your numbers beside your birth chart, rather than treating either as the whole answer.", points: ["Date of birth and name", "Relevant chart details", "The question you bring"] },
  "numerology/numerology-systems": { lead: "Different traditions read numbers differently. Ask which approach is relevant to your question.", points: ["The method behind your reading", "Why interpretations can differ", "One clear context for your decision"] },
  "numerology/business-astro-numerology": { lead: "Numbers and chart themes considered together around a business concern or decision.", points: ["Your business context", "Names and relevant birth details", "The decision in front of you"] },
  "numerology/business-logo": { lead: "Explore the traditional interpretation of a business identity without losing sight of what the brand needs to communicate.", points: ["Your name and existing logo", "The proposed change", "Your audience and practical brand needs"] },
  "vastu": { lead: "Your home, workplace or next property, considered alongside how you live and what you need.", points: ["Direction and layout", "Everyday use of the space", "Practical changes without fear"] },
  "vastu/home": { lead: "A room-by-room conversation about your home, its layout and the way you live in it.", points: ["Entrance and living room", "Kitchen, bedroom and study", "Sleep direction, toilets and stairs"] },
  "vastu/property-and-land": { lead: "Before buying, discuss the property or plot you are considering. Selection guidance is separate from a review of an existing home.", points: ["Residential, commercial or plot selection", "Entrance, orientation and layout", "Your intended use and practical constraints"] },
  "vastu/office-and-shop": { lead: "Consider the arrangement of your workplace alongside the way people work and move through it.", points: ["Office, shop, factory, clinic or studio", "Entrances, seating and work areas", "A full review or desk-focused enquiry"] },
  "vastu/real-estate-and-developers": { lead: "Discuss Vastu within a larger property project, alongside the planning and professional constraints already in place.", points: ["Site layout and intended uses", "Project stage and available plans", "Coordination with your professional team"] },
  "vastu/specialised-spaces": { lead: "A space with a specific purpose needs a conversation about its users, layout and everyday demands.", points: ["Education, care or other specialised premises", "How people use the space", "Safety and operational requirements"] },
  "vastu/astro-vastu": { lead: "Explore a space and relevant chart themes together around the concern you bring.", points: ["Your layout and daily routines", "Relevant birth details", "The question behind the review"] },
  "vastu/vastu-remedies": { lead: "Understand the reasoning behind a suggested change before deciding what is practical for your space.", points: ["The concern and existing layout", "What can reasonably change", "Traditional suggestions alongside practical needs"] },
  "vastu/directions-and-elements": { lead: "Direction and the five elements form a traditional way to think about space. Start with the layout and everyday use.", points: ["Earth, water, fire, air and space", "Direction and room use", "Balance within practical constraints"] },
  "vastu/energy-balancing": { lead: "Ask about Narayani’s spiritual approach to the person and the space, with the scope explained before you book.", points: ["Your concern and surroundings", "Personal and spiritual practice", "What this consultation includes"] },
  "vastu/ongoing-guidance": { lead: "Working through a move or project over time? Ask whether ongoing Vastu guidance fits the support you need.", points: ["Your project and its stages", "The questions that need review", "Format and frequency agreed with the team"] },
};
