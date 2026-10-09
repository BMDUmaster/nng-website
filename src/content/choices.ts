/**
 * "Start from what you are facing": every consultation, in the words a person would use about their own
 * situation, each leading to the page that answers it. Written in the first person on purpose: people
 * arrive with a question, not a service name. Every entry must point at a route in routes.json.
 */
export type Choice = { say: string; href: string };
export type ChoiceGroup = { heading: string; /** The icon beside the heading, from src/components/icons. */ icon: string; choices: Choice[] };

export const choiceGroups: ChoiceGroup[] = [
  {
    heading: "Work and money",
    icon: "page-career-and-business",
    choices: [
      { say: "I am not being recognised at work, or things feel stuck", href: "/services/astrology/career-and-business/" },
      { say: "I am weighing a job change, a promotion or a new direction", href: "/services/astrology/career-and-business/" },
      { say: "I want a clear plan for the next few years", href: "/services/numerology/astro-numerology/" },
      { say: "I run a business and want guidance on growth and timing", href: "/services/astrology/career-and-business/" },
      { say: "I want to grow as a leader over the next few years, not just change jobs", href: "/services/astrology/career-growth/" },
      { say: "I want my business's numbers and chart read together", href: "/services/numerology/business-astro-numerology/" },
      { say: "Money comes in and goes out again, and I want to see the pattern", href: "/services/brain-training/" },
    ],
  },
  {
    heading: "Study and children",
    icon: "page-education",
    choices: [
      { say: "I am choosing a stream, a course or a career path", href: "/services/astrology/education/" },
      { say: "Exams, focus and concentration are a worry", href: "/services/astrology/education/" },
    ],
  },
  {
    heading: "Marriage and relationships",
    icon: "group-relationships",
    choices: [
      { say: "Marriage is delayed, or I am looking for the right partner", href: "/services/astrology/marriage/" },
      { say: "We want to know how well our charts fit", href: "/services/astrology/kundali-matching/" },
      { say: "The same pattern keeps repeating in my relationships", href: "/services/brain-training/" },
      { say: "I want a conversation about a relationship question, without a chart as the starting point", href: "/services/astrology/intuitive-consult/" },
    ],
  },
  {
    heading: "Mind and wellbeing",
    icon: "hub-brain-training",
    choices: [
      { say: "I want to understand my stress patterns and rhythms", href: "/services/astrology/health-and-wellbeing/" },
      { say: "I want to change a habit or calm a racing mind", href: "/services/brain-training/" },
      { say: "I want to explore a recurring pattern with a Psychic Reader", href: "/services/brain-training/nlp/" },
      { say: "I am not sure where to begin, or what I should be asking", href: "/services/brain-training/discovery-session/" },
      { say: "I want a guided session to settle myself and the space around me", href: "/services/vastu/energy-balancing/" },
    ],
  },
  {
    heading: "Your chart and its timing",
    icon: "group-chart",
    choices: [
      { say: "I want my birth chart read around a pressing concern", href: "/services/astrology/birth-chart-reading/" },
      { say: "I want to know what this period of my life is about", href: "/services/astrology/dashas-and-transits/" },
      { say: "I want to understand my Moon nakshatra", href: "/services/astrology/nakshatras/" },
      { say: "I have one specific concern that does not fit anywhere else", href: "/services/astrology/specific-issue-reading/" },
      { say: "I am in a legal matter and want to understand the timing and my own approach", href: "/services/astrology/legal-matters/" },
      { say: "I do not have my birth details", href: "/services/astrology/reading-without-birth-details/" },
      { say: "I am asked to do a remedy and want to know if I need one", href: "/services/astrology/astrology-remedies/" },
      { say: "I am wondering whether a gemstone or a Rudraksha suits me", href: "/services/stones-and-rudraksh/" },
    ],
  },
  {
    heading: "Names and numbers",
    icon: "group-your-numbers",
    choices: [
      { say: "I want to understand the numbers in my date of birth", href: "/services/numerology/personal-numbers/" },
      { say: "I am thinking about the spelling of my name", href: "/services/numerology/name-numerology/" },
      { say: "I want to check my mobile number, or choose a new one", href: "/services/numerology/mobile-and-house-numbers/" },
      { say: "I want my signature looked at", href: "/services/numerology/signature/" },
      { say: "I want my Lo Shu grid read", href: "/services/numerology/lo-shu-grid/" },
      { say: "I am naming a business or a brand", href: "/services/numerology/business-name/" },
      { say: "I want guidance on a logo before it is designed", href: "/services/numerology/business-logo/" },
      { say: "Different numerologists give me different answers", href: "/services/numerology/numerology-systems/" },
    ],
  },
  {
    heading: "Home and property",
    icon: "group-homes",
    choices: [
      { say: "I want my home looked at, room by room", href: "/services/vastu/home/" },
      { say: "I am choosing between two homes, or buying a plot", href: "/services/vastu/property-and-land/" },
      { say: "I want to know the right time to buy, sign, move or launch", href: "/services/astrology/property-and-big-decisions/" },
      { say: "I cannot change the structure and want corrections that need none", href: "/services/vastu/vastu-remedies/" },
      { say: "I want to read my directions together with my chart", href: "/services/vastu/astro-vastu/" },
      { say: "I want to understand the directions and the five elements", href: "/services/vastu/directions-and-elements/" },
    ],
  },
  {
    heading: "Work spaces and projects",
    icon: "group-workplaces",
    choices: [
      { say: "I want my office, shop, clinic or showroom looked at", href: "/services/vastu/office-and-shop/" },
      { say: "I am a builder, architect or developer planning a project", href: "/services/vastu/real-estate-and-developers/" },
      { say: "I run a factory, a hotel, a school, a hospital or a farm", href: "/services/vastu/specialised-spaces/" },
      { say: "I want steady Vastu support through a project or a year", href: "/services/vastu/ongoing-guidance/" },
    ],
  },
  {
    heading: "Guidance over months",
    icon: "gen-six-months",
    choices: [{ say: "I want steady guidance over six months, not a single session", href: "/hand-holding-program/" }],
  },
];
