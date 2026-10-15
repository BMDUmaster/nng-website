import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "specific-issue-reading",
  title: "A reading for one specific concern",
  metaTitle: "Astrology reading for one specific concern",
  metaDescription:
    "A short, focused Jyotish reading for one concern that fits no other page: a dispute, travel, a family conflict, a stalled project or a recurring obstacle.",
  lead: "Some questions do not belong under marriage, career or any other heading. Narayani reads the chart and the timing for that one concern, and looks with you at how you have been meeting it.",
  card: "When one concern fits no other page: a dispute, a trip, a stalled project.",
  icon: "page-specific-issue-reading",
  group: "decisions",
  covers: [
    "One concern, read closely",
    "A dispute or a family conflict",
    "Travel and a stalled project",
    "A recurring obstacle",
    "A legal matter, with limits",
    "A short, focused session",
  ],
  art: { kind: "drawing", id: "hero-specific-issue" },
  enquiryTopic: "Astrology: a specific concern",
  cta: "Enquire about a reading for one concern",
  intro: [
    {
      type: "p",
      text: "Most readings are built around a theme: a marriage, a career, the chart as a whole. Many concerns sit under no theme. A neighbour disputes a boundary. A trip abroad keeps being postponed. A project that was nearly finished has not moved for a year. The same kind of trouble keeps arriving in a new form.",
    },
    {
      type: "p",
      text: "For these, Narayani offers a reading built around one concern. You state it in a sentence or two. She reads the part of the chart that tradition links with it, the period you are in and the way you have been meeting the matter, and the session stays with that one concern from start to finish.",
    },
    {
      type: "p",
      text: "If your concern already has a page of its own, such as marriage, career or education, start there, because those pages go further into their subjects. This page is for what fits none of them.",
    },
  ],
  sections: [
    {
      id: "concerns",
      chip: "The concerns",
      heading: "Six concerns people bring",
      icon: "astro-focus",
      blocks: [
        {
          type: "p",
          text: "The six below are examples, not a closed list. What they share is a beginning and a shape: you can say what the matter is in a sentence.",
        },
        {
          type: "terms",
          items: [
            {
              term: "A dispute",
              text: "A dispute might be with a neighbour, a relative, a partner, a colleague or a landlord. The first useful question is what you want from the matter: an apology, a payment, an end to contact, or only to be heard. The reading looks at how the quarrel is built and at what you do when it flares.",
              icon: "astro-dispute",
            },
            {
              term: "A legal matter",
              text: "A legal matter means a case, a notice or a negotiation that is already with a lawyer. The section on legal matters below sets out what a reading can and cannot do with it.",
              icon: "astro-legal",
            },
            {
              term: "Travel",
              text: "Travel might mean a trip that keeps slipping, a visa you are waiting on, or a posting or yatra you are weighing. Jyotish reads travel through particular houses, listed below, and she looks at the period you are in. Visa rules, tickets and the weather are not in a chart, so the practical dates stay in charge.",
              icon: "astro-travel",
            },
            {
              term: "A family conflict",
              text: "A family conflict can run between parents and children, brothers, a couple or in-laws. These tend to be old, and the quarrel of the week is seldom the real one. She asks who has not been heard, and what each person is protecting.",
              icon: "astro-family",
            },
            {
              term: "A stalled project",
              text: "A stalled project is a shop fitted out and never opened, a book half written, a course of study put on hold. She asks what is holding it back: money, people, an approval, or a loss of belief that it matters. The chart adds the period you are in, and the question about belief is often where the work lies.",
              icon: "astro-stalled-project",
            },
            {
              term: "A recurring obstacle",
              text: "A recurring obstacle is the same kind of trouble arriving more than once: a deal that fails at the last step, a promotion that goes to someone else, a friendship that ends the same way. She checks which period was running at each episode, and asks what you did in the weeks before.",
              icon: "astro-recurring-obstacle",
            },
          ],
        },
      ],
    },
    {
      id: "one-sentence",
      chip: "One sentence",
      heading: "Putting a concern into a sentence",
      icon: "brain-reframing",
      blocks: [
        {
          type: "p",
          text: "A concern is easier to read when it is stated as a situation and a decision, and harder when it is stated as a mood. A few before-and-after pairs show the difference.",
        },
        {
          type: "list",
          items: [
            "Instead of “my family is a mess”, try “my sister and I have not spoken since our mother’s birthday, and I need to decide whether to call.”",
            "Instead of “my travel plans never work”, try “my posting abroad has been delayed twice, and I must tell my employer by the end of the month whether to keep waiting.”",
            "Instead of “nothing ever works out for me”, try “three projects of mine have stalled at the same stage, the final approval, and I am about to start a fourth.”",
          ],
        },
        {
          type: "p",
          text: "Two details help most: what has already happened, and what you have to decide. If you cannot find the sentence, send your best attempt and say so.",
        },
      ],
    },
    {
      id: "where-first",
      chip: "In the chart",
      heading: "Where she looks first in the chart",
      icon: "astro-lagna",
      blocks: [
        {
          type: "p",
          text: "Tradition gives each house a set of meanings, and a concern is placed in the chart by asking which houses it touches. These are the ones she turns to first.",
        },
        {
          type: "table",
          head: ["In the chart", "Tradition reads it for", "Concerns it comes into"],
          rows: [
            ["The third house", "Effort, courage and younger siblings, and for many practitioners short trips", "A stalled project; a short trip"],
            ["The fourth house", "Home, mother and peace of mind", "A family conflict"],
            ["The sixth house", "Opponents and debts", "A dispute; a legal matter"],
            ["The seventh house", "Spouse and partners, including the other party to an agreement or a quarrel", "A dispute with a partner; a contract"],
            ["The ninth house", "Fortune and higher learning, and for many practitioners long-distance travel", "Long travel; a study plan"],
            ["The tenth house", "Work, livelihood and standing", "A stalled project at work; matters with an authority"],
            ["The twelfth house", "Expenses, losses and foreign residence", "Travel abroad; a long stay away"],
            ["Mars", "Strength, drive and conflict", "A dispute; a legal matter"],
            ["The Moon", "Mind, feeling and nurture", "A family conflict; an obstacle that feels like a mood"],
            ["Saturn", "Discipline and limits, and by convention delay", "A stalled project; a recurring obstacle"],
          ],
          icons: ["house-3", "house-4", "house-6", "house-7", "house-9", "house-10", "house-12", "graha-mars", "graha-moon", "graha-saturn"],
        },
        {
          type: "p",
          text: "These are the first places she looks, not the only ones. The period running when the concern began, and the one running now, can matter more to the conversation than any single house, because they show how near you are to the start of a stretch, or to its end.",
        },
      ],
    },
    {
      id: "can-reflect",
      chip: "What it can reflect",
      heading: "What a reading can reflect, and what it cannot",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "A chart can bring out three things for one concern.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The timing you are in",
              text: "A dasha is a traditional planetary period, not a deadline for your problem to resolve. The dashas and transits guide explains its arithmetic. Here the relevant question is narrower: whether the period’s customary theme adds anything useful to the issue you raised, without displacing practical evidence.",
              icon: "astro-mahadasha",
            },
            {
              term: "The temperament you bring",
              text: "Tradition finds a description of temperament in the chart and in the numbers drawn from your date of birth. She puts it to you as a question, and what you recognise is what counts. The Astrology page says how far such descriptions can be trusted.",
              icon: "brain-reaction",
            },
            {
              term: "The pattern that repeats",
              text: "Habits of response tend to travel from one matter to the next, and an obstacle can turn out to be the same one in a new form. Naming the pattern is the part of a reading you can use the next day.",
              icon: "brain-pattern",
            },
          ],
        },
        {
          type: "p",
          text: "It cannot decide the facts of a matter. It cannot say who is right, forecast an outcome, or stand in for the doctor, lawyer, counsellor or adviser the concern may need.",
        },
      ],
    },
    {
      id: "numbers",
      chip: "Numerology",
      heading: "Numbers beside the chart",
      icon: "numc-life-path",
      blocks: [
        {
          type: "p",
          text: "She can read numbers beside the chart: those drawn from your date of birth and from your name. For a single concern this stays light: a second look at the same question, left out where it adds nothing. Where numerology stands as evidence is set out on the Numerology page.",
        },
        {
          type: "p",
          text: "These numbers need no birth time, which is why they are useful when the time is in doubt. Where birth details are missing altogether, the page called A reading without birth details covers what can still be done.",
        },
      ],
    },
    {
      id: "legal",
      chip: "A legal matter",
      heading: "When a case or a notice is involved",
      icon: "gen-limits",
      blocks: [
        {
          type: "p",
          text: "Something already with a lawyer, such as a case, a notice or a negotiation, can be brought here, with firm limits. Working from the chart and, where useful, from numbers drawn from your birth date and name, the reading can reflect on the planetary period you are in, how you respond when pressed and any pattern that repeats from earlier matters. A verdict is outside its reach, as are the merits of the case and the question of whether to settle. It is not legal advice, and strategy stays with your lawyer. For property, family, contract or business disputes, the Legal matters page goes deeper.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she looks at for one concern",
    icon: "astro-aspect",
    items: [
      { icon: "astro-yoga", text: "The houses and planets that tradition ties to your concern, and how they stand in your chart" },
      { icon: "astro-antardasha", text: "The period running now, the sub-period inside it, and when each changes" },
      { icon: "brain-action-loop", text: "What you have already tried, and what followed each attempt" },
      { icon: "brain-habit", text: "How you tend to respond when the matter flares, and whether the same response has appeared before" },
    ],
  },
  bring: {
    heading: "Before a one-concern reading: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "brain-words", text: "The concern in a sentence or two, in your own words" },
      { icon: "gen-bring-name", text: "Birth date, recorded birth time and birthplace, marking any uncertain detail" },
      { icon: "habit-evidence", text: "What has been tried so far, and what came of each attempt" },
      { icon: "gen-calendar", text: "Any dates that bear on it: a hearing, a departure, a deadline, the day it began" },
      { icon: "gen-privacy", text: "Other people in the matter by role, such as “my landlord” or “my sister”. Their names and birth details are not needed" },
    ],
  },
  session: {
    heading: "How a short, focused session runs",
    icon: "gen-time",
    steps: [
      {
        title: "Your concern, in your words",
        text: "She starts with the sentence or two you sent, and asks what you want from the matter and what has been tried. Nothing else is opened until that is plain.",
        icon: "gen-listen",
      },
      {
        title: "The chart for that matter",
        text: "Only the houses and planets that touch the concern are read. The rest of the chart stays closed, which is what keeps a short session short.",
        icon: "group-chart",
      },
      {
        title: "The period, and the pattern",
        text: "She places the concern inside the period you are in, and checks any earlier episode against the periods that were running then.",
        icon: "astro-transit",
      },
      {
        title: "What stays in your hands",
        text: "She gives her reading and her reasons, says how much weight each part can bear, and leaves the next step with you.",
        icon: "gen-explain",
      },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "you can state the concern in a sentence or two",
      "you want one matter looked at properly, and not your whole chart",
      "you are willing to look at your own part in it, as well as the circumstances",
    ],
    no: [
      "you want a verdict, a date for the matter to end or a promise about how it turns out",
      "you want the whole chart read, for which the Birth chart reading page is the better start",
      "the matter needs a doctor, a lawyer or an adviser first, and you have not yet spoken to one",
    ],
  },
  faqs: [
    {
      q: "Can a reading tell me whether I will win a case?",
      a: "No. A case is decided on what the evidence shows, how the law applies and how each side argues it, and a chart holds none of that. Narayani forecasts no outcome in any matter. A reading can touch only the long wait: the period you are in, and the choices you make along the way. For the merits, ask your lawyer.",
    },
    {
      q: "Should I use this page or the Legal matters page for a case?",
      a: "Use the Legal matters page for a case, a notice or a negotiation: it covers four kinds of dispute and what to hold back at first. Use this page when your concern fits none of the others, or when a legal matter is one thread among several, such as a family conflict that has also reached a lawyer. Say which you mean when you enquire.",
    },
    {
      q: "What if my concern does not fit any listed service?",
      a: "Send it anyway, in a sentence or two. The pages on this site are a convenience, and a reading is built around the question you bring: a relative’s request you cannot answer, a choice between two small offers, a sense that a place no longer suits you. Narayani says honestly whether a reading can help. If a doctor, a lawyer or another professional is needed first, she says so before anything else.",
    },
    {
      q: "Can I bring a concern that is about someone else?",
      a: "Yes, where it touches you, such as a parent’s quarrel with a sibling or a child’s stalled plans. The reading rests on your details and your part in it. For an adult, it is fair to ask their agreement before sharing theirs. Narayani asks only for what the question needs.",
    },
    {
      q: "How is this different from a full chart reading?",
      a: "A full chart reading opens the whole chart and takes the shape of your life as its subject. This one starts from a single concern and reads only what bears on it, so it is narrower. If the concern turns out to belong to a larger pattern, she says so, and you can decide whether a wider reading is worth asking for.",
    },
    {
      q: "I have more than one concern. Should I send them together?",
      a: "If one cause sits behind them, such as repeated setbacks in one workplace, send them together: the pattern is what matters. If they are unrelated, take them one at a time, because a focused reading stays with a single matter. Say in your enquiry which you have in mind.",
    },
    {
      q: "Will she tell me what to do about it?",
      a: "She gives her reading and her reasons, and where a step looks sensible she says so. She does not give orders and does not ask you to follow her blindly. Where a remedy may help, she explains why and what it asks of you, and the decision stays with you.",
    },
  ],
  related: [
    "/services/astrology/birth-chart-reading/",
    "/services/astrology/reading-without-birth-details/",
    "/services/astrology/dashas-and-transits/",
    "/services/astrology/legal-matters/",
  ],
  showFees: true,
};
