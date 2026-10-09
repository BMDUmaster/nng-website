import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "astro-numerology",
  title: "Astro numerology: chart and numbers",
  metaTitle: "Astro-numerology: chart and numbers",
  metaDescription: "A five-year view that sets your Jyotish chart and your numbers side by side, with a business version. A reflective plan, not a forecast.",
  lead: "Bring one question to two traditions. Narayani considers your chart alongside your numbers to support reflection, without forecasting fixed events.",
  card: "When you want your chart and your numbers read together, one year at a time.",
  icon: "page-astro-numerology",
  group: "larger",
  covers: [
    "Chart and numbers together",
    "A five-year view, year by year",
    "Dasha, transit, personal year",
    "Career and income questions",
    "The business version",
    "When the two lenses disagree",
    "Remedies, only where useful",
  ],
  art: { kind: "drawing", id: "hero-astro-numerology" },
  enquiryTopic: "Numerology: AstroNumerology",
  cta: "Enquire about a chart and numbers reading",
  intro: [
    {
      type: "p",
      text: "A birth chart and a set of numbers count a life in different ways. One starts from the sky at the hour of birth, the other from dates and names, and each keeps its own timetable: periods called dashas in the chart, and a personal year in the numbers.",
    },
    {
      type: "p",
      text: "Indian numerology ties every digit to a planet, and those planets are the grahas of Jyotish. Sharing them is what links the two lenses: a planet can be looked up in your chart and again in your numbers, and the two readings set side by side. Narayani does this when a question, usually about work, a business or the next few years, is worth looking at twice.",
    },
    {
      type: "p",
      text: "Neither lens has been shown to predict events, and that limit belongs at the start. What a combined reading offers is a structured conversation about the years ahead, with each step of the reasoning in view.",
    },
  ],
  sections: [
    {
      id: "two-lenses",
      chip: "Two lenses",
      heading: "Two lenses on one question",
      icon: "astro-compatibility",
      blocks: [
        {
          type: "p",
          text: "Each lens has its own strengths. The chart is detailed, and the numbers are simple. Used together they let you look at a theme from two directions, and see where the two agree and where they do not.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The chart",
              text: "The sky at your moment of birth, set out by sign, house and planetary period. It depends on the birth time as well as the date and place.",
              icon: "group-chart",
            },
            {
              term: "The numbers",
              text: "Worked from your birth date and the name you use, as Mulank, Bhagyank, a name total and a personal year. None of them needs a birth time.",
              icon: "hub-numerology",
            },
            {
              term: "The shared planets",
              text: "Indian numerology links each digit to a graha, so a Mulank of 5 points to Mercury, and the chart can then be asked where Mercury sits and whether its period is running. Set beside the planets of the running period and of the slow transits, the planets of your Mulank and Bhagyank make a short list to compare. The page on numerology systems lists all nine and the schools’ disagreement over 4 and 7.",
              icon: "numc-vedic",
            },
          ],
        },
      ],
    },
    {
      id: "personal-year",
      chip: "Personal year",
      heading: "The numbers side: the personal year",
      icon: "numc-personal-year",
      blocks: [
        {
          type: "p",
          text: "In many numerology books the personal year is the number that sets the theme of a calendar year. It is worked from the birth day, the birth month and the year, each reduced to one digit and added, and the page on personal numbers has the sums. The table below uses a 21 July birthday, which gives 3 for 2027, and the number then rises by one each year.",
        },
        {
          type: "p",
          text: "The books attach a theme to every number, and the table shows five of them. These are labels from the books, and no test of them was found. Writers also split on when the year starts, some on 1 January and some on the birthday.",
        },
      ],
    },
    {
      id: "chart-side",
      chip: "Periods and transits",
      heading: "The chart side: the period you are in and the slow planets",
      icon: "astro-mahadasha",
      blocks: [
        {
          type: "p",
          text: "Dashas are the chart’s traditional time periods. Their starting point and nested periods are described in the dedicated dashas and transits explanation. In a combined reading, this calendar can be placed beside the numerology cycle, with each kept identifiable rather than merged into a prediction.",
        },
        {
          type: "p",
          text: "Transits, called gochar, are the planets’ present positions, read from your Moon sign. In a five-year view the slow planets matter most. Saturn stays about two and a half years in a sign, Jupiter about one and the nodes about one and a half, so over five years Saturn moves through about two signs and Jupiter through about five. The best known long passage is Sade Sati, Saturn’s passage through the Moon sign and the signs either side of it, which the same page describes.",
        },
      ],
    },
    {
      id: "year-by-year",
      chip: "Year by year",
      heading: "Putting five years side by side",
      icon: "numc-annual-forecast",
      blocks: [
        {
          type: "p",
          text: "The five-year view sets the two timetables beside each other, one year at a time. The numbers half is arithmetic, shown here for a 21 July birthday. The chart half needs your own birth data, which is why the last column poses a question.",
        },
        {
          type: "table",
          head: ["Year", "Personal year", "Theme the books give", "A question to put beside the chart"],
          rows: [
            ["2027", "3", "Creativity", "What could you make, teach or put in front of people, and which period is running when you begin?"],
            ["2028", "4", "Hard work", "What needs steady effort, and which slow planets are passing your Moon sign?"],
            ["2029", "5", "Change", "What change are you already weighing, and what practical steps does it need first?"],
            ["2030", "6", "Responsibility", "Whose needs are you carrying, and what does the period then running ask of you?"],
            ["2031", "7", "Reflection", "What deserves a pause or a review, and where are Saturn and Jupiter passing by then?"],
          ],
          caption: "A 21 July birthday, by calendar year",
        },
        {
          type: "p",
          text: "The year-by-year example is a way to compare traditional themes with practical questions. Preparing for a promotion could involve a skill or a conversation; it is not a promise of income or a five-year consultation deliverable.",
        },
        {
          type: "list",
          title: "What the chart brings to work and money questions",
          items: [
            "The tenth house, for livelihood and standing, and the second, for earnings.",
            "The eleventh house, for gains, and the seventh, for partners and contracts.",
            "The dashamsa chart, which tradition reads for profession.",
            "The planet that rules the period running, and where Saturn and Jupiter are passing.",
          ],
        },
      ],
    },
    {
      id: "business",
      chip: "For a business",
      heading: "The business version",
      icon: "gen-owner",
      blocks: [
        {
          type: "p",
          text: "The same two lenses can be turned on a business. The owner’s chart and numbers come first, and the business’s own dates and name come in where the question needs them.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Decisions",
              text: "A large purchase, a hire, a change of premises or of supplier. The lenses add a look at timing and temperament beside the practical case, which comes first.",
              icon: "group-decisions",
            },
            {
              term: "Growth",
              text: "How a period of expansion sits with the owner’s own pace. Saturn’s number, 8, and a period the chart links with Saturn may both ask for discipline ahead of speed. Neither forecasts revenue.",
              icon: "numc-pinnacle",
            },
            {
              term: "Launch",
              text: "The date and time of a start can be considered in traditional muhurta and date-number calculations. Their meanings do not override stock, funding, staff or permits. Ask whether timing is within your consultation's scope.",
              icon: "astro-business-launch",
            },
            {
              term: "Partnerships",
              text: "How the numbers and charts of two or more owners sit together, and where roles and decisions are likely to need agreement. The seventh house, which Jyotish links with partners and contracts, is one place to look.",
              icon: "astro-partnership",
            },
            {
              term: "Long-term direction",
              text: "Where the business is heading over five years, set beside where the owner wants to be. A reading cannot choose the direction. It can ask whether the plan fits the person who has to carry it.",
              icon: "numc-life-path",
            },
          ],
        },
        {
          type: "p",
          text: "A business name is a separate question, and the page on business names covers how it is added up and set beside an owner’s numbers. Logo design is not part of this reading.",
        },
      ],
    },
    {
      id: "disagree",
      chip: "When they disagree",
      heading: "When the chart and the numbers disagree",
      icon: "astro-dispute",
      blocks: [
        {
          type: "p",
          text: "They do, sometimes. A year that the books call a 3, open and creative, can sit inside a long Saturn period that asks for steady work. A personal year of 8 can fall in a stretch the chart reads as quiet. Neither lens has been tested for timing, and no source settles what to do when they part.",
        },
        {
          type: "p",
          text: "If two interpretations disagree, keep their inputs and methods visible. A number calculation and a chart theme need not be forced into one verdict. This is a question to discuss, not a confirmed Narayani protocol.",
        },
        {
          type: "p",
          text: "A disagreement between the lenses is a reason to look more closely, and it carries no warning.",
        },
      ],
    },
    {
      id: "remedies",
      chip: "Remedies",
      heading: "Remedies, only where they help",
      icon: "group-remedies",
      blocks: [
        {
          type: "p",
          text: "Both lenses come with traditional remedies: a mantra, a small habit, an offering. Narayani suggests one only where it adds something, explains why, and leaves the decision with you. None is claimed to change an outcome, and none is required.",
        },
        {
          type: "p",
          text: "A reading can end without any remedy. A year that asks for a decision, a conversation or a slower pace may need nothing else.",
        },
      ],
    },
    {
      id: "limits",
      chip: "Limits",
      heading: "A reflective plan, not a forecast",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "The sources checked contain no controlled test of dasha, transit or personal-year timing. The main astrology page gives the wider evidence on charts, and the numerology page does the same for numbers. This plan is therefore a conversation, with no forecast in it.",
        },
        {
          type: "p",
          text: "A year labelled 1 or 4 is only a label, and the decisions stay yours. Money decisions belong with a qualified adviser, contracts and company law with a lawyer, and health with a doctor. Nothing on this page is advice of those kinds, and no number or period is a reason to delay such a step.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions when comparing two traditions",
    icon: "astro-yoga",
    items: [
      { icon: "numc-bhagyank", text: "Your Mulank and Bhagyank, and the planets they point to" },
      { icon: "astro-antardasha", text: "The period running in your chart now, and the one that follows" },
      { icon: "astro-transit", text: "Where Saturn, Jupiter and the nodes are passing, counted from your Moon sign" },
      { icon: "numc-personal-month", text: "The personal year for each year you want to look at" },
      { icon: "astro-job-change", text: "The question itself: a new role, an income plan, a launch, a partner, a move" },
    ],
  },
  bring: {
    heading: "Before a chart and numbers reading: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "The date, time and place you were born, from a birth certificate or hospital record if there is one" },
      { icon: "gen-bring-name", text: "Your name as you use it, and any other spelling you have used" },
      { icon: "gen-calendar", text: "The years you want to look at, and the decision or question in each" },
      { icon: "work-signage", text: "For a business: its start date, its name, and the owners’ dates of birth" },
      { icon: "astro-rectification", text: "A note of how sure you are of the birth time, since a guessed time weakens the chart half and leaves the numbers alone" },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "you are weighing a decision over the next few years and want to look at timing from two directions",
      "you would like to see how each conclusion is reached, and are content to hear that something is a convention",
      "you have a reading from a chart or from numbers and want to see how the other lens compares",
    ],
    no: [
      "you want to be told what will happen in a given year",
      "you want a verdict on whether a business will succeed",
      "you want a yes or no on a health, legal or money decision (please start with a doctor, a lawyer or an adviser)",
    ],
  },
  faqs: [
    {
      q: "What is astro-numerology, and why combine a chart with numbers?",
      a: "Astro-numerology sets a Jyotish birth chart beside the numbers of a life: Mulank, Bhagyank and the personal year. The two meet in the planets, because each digit belongs to a graha. Narayani combines them because a question often looks different from two directions, and where the two agree or part is worth talking about.",
    },
    {
      q: "Which birth details does a combined reading need?",
      a: "The chart half needs the date, time and place you were born, because the time and place fix the rising sign and the periods. The numbers half needs only the date and the name you use. If the birth time is a guess, say so: the chart half then carries less weight, and the numbers are unaffected. For a business, add the date it started and each owner’s birth date.",
    },
    {
      q: "Which areas of life can a combined reading cover?",
      a: "The reading is built around work, income, business and the years ahead. A relationship, a family matter or a move can be looked at beside them when it belongs to the same year. Health is outside it, and symptoms are a matter for a doctor. Questions of law or money go to a lawyer or an adviser first, since a chart or a set of numbers cannot settle them.",
    },
    {
      q: "What does a five-year view include, and how is it built?",
      a: "The chart gives the period running now and the next, and where Saturn, Jupiter and the nodes are passing, counted from your Moon sign. The numbers give a personal year for each calendar year. The two are set side by side, one year at a time, with a question for each: what to start, what to keep steady, what to leave alone. It is a plan to reflect on, not a forecast.",
    },
    {
      q: "Does the five-year view forecast promotions or income?",
      a: "No. For each year it offers questions and practical steps, such as a conversation to have or a skill to build. Whether a promotion or a rise in income follows depends on your employer, your market and your own choices, and neither a chart nor a set of numbers has been shown to foresee them. For money decisions, an adviser comes first.",
    },
    {
      q: "What does a business consultation using astrology and numerology cover?",
      a: "Decisions, growth, a launch, partnerships and long-term direction, read from the owner’s chart and numbers, with the business’s own dates and name where the question needs them. Narayani sets this beside the practical case, which comes first. A reading is not financial or legal advice, and logo design is not part of it.",
    },
    {
      q: "What is the difference between a personal year and a dasha?",
      a: "A personal year is a number worked from the birth day, the birth month and the calendar year, and it changes every January or every birthday, depending on the writer. A dasha is a planetary period in the chart, and a main period lasts from six to twenty years. The two keep different clocks, which is one reason they can seem to disagree, and why the five-year view sets them side by side.",
    },
  ],
  related: [
    "/services/numerology/personal-numbers/",
    "/services/astrology/birth-chart-reading/",
    "/services/astrology/dashas-and-transits/",
    "/services/numerology/business-name/",
  ],
  showFees: true,
};
