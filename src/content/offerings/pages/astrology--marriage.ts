import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "marriage",
  title: "Marriage, timing and delay",
  metaTitle: "Marriage timing and delay in Jyotish",
  metaDescription:
    "How Jyotish reads marriage: the seventh house, Venus and Jupiter, the navamsa, dasha timing and Manglik, explained calmly and without promises.",
  lead: "A proposal, a delay or family pressure can leave you unsure. Narayani considers the chart alongside your experience, without letting it decide whom you should marry.",
  card: "When marriage feels delayed, uncertain or hard to decide.",
  icon: "page-marriage",
  group: "relationships",
  covers: [
    "Seventh house and its lord",
    "Venus, Jupiter and the navamsa",
    "Timing as windows of months",
    "Manglik, explained calmly",
    "Delay, and what a chart can say",
    "Second marriage, family pressure",
    "The person as well as the chart",
  ],
  art: { kind: "drawing", id: "hero-marriage" },
  enquiryTopic: "Astrology: marriage",
  cta: "Enquire about a marriage reading",
  intro: [
    {
      type: "p",
      text: "A marriage question seldom arrives alone. It comes with a family, an age that other people keep mentioning, a proposal that looked right on paper, or an engagement that ended and left a question behind. Narayani begins by listening for which of these is yours.",
    },
    {
      type: "p",
      text: "Jyotish gives her a structured way to read a *kundli*, the birth chart. One house is read for partnership, certain planets for what you look for in it, and a system of planetary periods for when the question may come forward. She offers all of it as indications to think with. No chart can promise a partner, and none can name the day.",
    },
    {
      type: "p",
      text: "Where a delay has a pattern in it, something repeated in how you choose, wait or say yes, she names that as well, without blame. A chart shows a stretch of time. What to do in it stays with you.",
    },
  ],
  sections: [
    {
      id: "situations",
      chip: "What people bring",
      heading: "The situations people bring to a marriage reading",
      icon: "group-relationships",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Delay",
              text: "The years have passed without a marriage, and the people around you have noticed. She looks at what the chart says about this stretch of time, and at what the stretch has actually held: introductions, refusals, hesitations, other priorities.",
              icon: "astro-stalled-project",
            },
            {
              term: "Not meeting the right person",
              text: "You have met people, or been introduced to them, and nobody has felt right. The conversation turns to what “right” means for you, where you are meeting people, and what the chart says about the stretch ahead.",
              icon: "astro-partner-search",
            },
            {
              term: "Timing",
              text: "You want to know when marriage might come into focus, so that work, a move or a family conversation can be planned around it. Jyotish reads periods and transits for windows of time, and Narayani gives no dates. The timing section below explains how a window is read.",
              icon: "astro-marriage-timing",
            },
            {
              term: "A proposal you cannot decide on",
              text: "Someone has said yes, or is waiting for you to. The chart can sit beside what you know of the person and the family. If the two charts are to be compared, the Kundali matching page describes that separate reading. The decision is yours.",
              icon: "group-decisions",
            },
            {
              term: "Family pressure",
              text: "Elders are asking, hoping or deciding for you, or have not yet accepted a choice you have made, and a chart is sometimes brought in as an argument. She keeps the chart to what it can say, and asks what you would want to tell your family if the chart were not in the room.",
              icon: "astro-family",
            },
            {
              term: "A second marriage",
              text: "The questions change the second time: what you want from it, children or families already in place, how fast to move. Jyotish reads the same house and the same periods, but she begins with the life you are living now.",
              icon: "astro-second-marriage",
            },
            {
              term: "A broken engagement",
              text: "An engagement ended, or a wedding was called off, and the question it left is still open. She looks at what that stretch of time was asking of you, without deciding who was right, and at what you would want to be different next time.",
              icon: "astro-broken-engagement",
            },
          ],
        },
      ],
    },
    {
      id: "in-the-chart",
      chip: "In the chart",
      heading: "Where marriage sits in a chart",
      icon: "group-chart",
      blocks: [
        {
          type: "p",
          text: "Jyotish reads a marriage through several parts of the chart at once. The seventh house is the centre, and the others add what it cannot say alone.",
        },
        {
          type: "table",
          head: ["Part of the chart", "What tradition reads there"],
          rows: [
            [
              "Seventh house",
              "Called Yuvati or Kalatra bhava: the house of the spouse and of any committed partnership. It is read through its sign, its lord, the planets sitting in it and the planets that look at it.",
            ],
            [
              "Venus",
              "Love and partnership. Read in every chart for what a person wants from a bond and how they offer affection. Many schools also take it as the indicator of a wife in a man’s chart.",
            ],
            [
              "Jupiter",
              "Guidance and good fortune. Many schools take it as the indicator of a husband in a woman’s chart, and watch its passage over the seventh house and its lord for timing.",
            ],
            [
              "Navamsa",
              "The ninth-part chart, made by dividing each sign into nine parts and placing the planets again. It is read for the marriage itself, for what a person holds to be right, and for the inner strength of each planet.",
            ],
            ["Second house", "Family and speech: how a household talks and holds together."],
            ["Fourth house", "Home and peace of mind: whether a house feels like a home."],
            ["Eighth house", "Inheritance and hidden matters: what two people keep private."],
            [
              "Twelfth house",
              "Expenses, losses and living in a foreign place, which is why a question about settling abroad after marriage is read here.",
            ],
          ],
          icons: ["house-7", "graha-venus", "graha-jupiter", "astro-navamsa", "house-2", "house-4", "house-8", "house-12"],
        },
        {
          type: "p",
          text: "The lord of the seventh house matters as much as the house. Where it sits, what it is joined with and what looks at it all colour the reading. Take a seventh lord placed in the tenth house, the house of work: a reader will ask how partnership and work are tied together in that life, and how the person is balancing the two now.",
        },
        {
          type: "p",
          text: "Some readers also use the *upapada*, a point from the Jaimini school of Jyotish. It is found by a counting rule that starts from the twelfth house and its lord, and it is read for how a marriage shows itself in family and public life. Not every practitioner uses it, and Narayani brings it in briefly, as one more angle on the same question.",
        },
      ],
    },
    {
      id: "timing",
      chip: "Timing",
      heading: "How timing windows are read",
      icon: "astro-mahadasha",
      blocks: [
        {
          type: "p",
          text: "Two things are read together. One is the *dasha*, the planetary period running now: Jyotish divides a life into stretches ruled by one planet after another, and the Moon at your birth sets where in the sequence you begin. The other is *gochar*, or transit, which is where the planets are moving at present. The Dashas and transits page explains both.",
        },
        {
          type: "p",
          text: "For marriage, a reader looks at which planet’s period is running and whether that planet is tied to the seventh house, as its lord, as a planet sitting in it or as one that looks at it. Jupiter and Saturn are watched too, in relation to the seventh house and its lord. Jupiter moves on after about a year in a sign and Saturn after about thirty months, so both are slow enough to follow. When the period and the transit both point to the seventh house or its lord, readers speak of a window.",
        },
        {
          type: "p",
          text: "A window is a stretch of months, and Narayani does not turn one into a date, for two reasons. The periods depend on the birth time: a time that is out by fifteen minutes can move dasha dates by between three weeks and two and a half months. And timing by period and transit rests on tradition: no controlled test of it has been found. A window is a time to pay attention to the question.",
        },
        {
          type: "p",
          text: "Say your seventh lord is Mercury, and Mercury’s period is running. Tradition reads that as a time when partnership questions are in the foreground. That points to where to look, and says nothing about what will happen. A window helps someone who acts in it, by saying yes to introductions, having the family conversation or finishing what has been in the way.",
        },
      ],
    },
    {
      id: "manglik",
      chip: "Manglik",
      heading: "Manglik, explained calmly",
      icon: "astro-manglik",
      blocks: [
        {
          type: "p",
          text: "Manglik, also called Mangal or Kuja dosha, is the name for Mars standing in certain houses of the chart. A dosha, in this sense, is a combination that tradition reads as a strain on the area concerned, here partnership. Which houses count depends on the text and the teacher. The most common list has six: the first, second, fourth, seventh, eighth and twelfth, counted from the rising sign. Many also count from the Moon and from Venus.",
        },
        {
          type: "p",
          text: "It is more common than the word suggests. With six of the twelve houses on the list, roughly one chart in two qualifies from the rising sign alone, and counting from the Moon and Venus as well brings in more. The tradition itself does not agree on the list: different verses name four or five of these houses, some writers inside the tradition call the whole matter overemphasised, and others advise a measured use of it.",
        },
        {
          type: "p",
          text: "The list of exceptions is long. Tradition names Mars in its own sign or in its sign of strength, the influence of benefic planets on Mars or on the seventh house, and the case where both partners carry the placement, in which the strain is held to lapse. A Manglik chart is read with care, like any other.",
        },
        {
          type: "list",
          title: "What families commonly do",
          items: [
            "Check whether the other chart carries the same placement.",
            "Go through the exceptions with someone who knows the chart.",
            "Arrange a prayer on a Tuesday, the day of Mars, or a symbolic rite before the wedding.",
            "Decide that the placement carries no weight at all.",
          ],
        },
        {
          type: "p",
          text: "Narayani sets out the placement and its exceptions and, if you ask about a rite, what it is meant to address. Whether to arrange one is for you and your family to decide. Manglik is one placement among many in a chart, and no reason on its own to accept or refuse anyone.",
        },
      ],
    },
    {
      id: "delay",
      chip: "Delay",
      heading: "Delay: what people describe, and what a chart can say",
      icon: "astro-recurring-obstacle",
      blocks: [
        {
          type: "list",
          title: "What people describe",
          items: [
            "Proposals that reach a late stage and then stop",
            "Introductions that lead nowhere, one after another",
            "A sense of waiting until work, study or a family duty is done",
            "Saying yes to meetings to please others, then feeling flat",
            "A hesitation that is hard to put into words",
          ],
        },
        {
          type: "p",
          text: "In Jyotish, Saturn stands for discipline and for long, slow effort. When it sits in the seventh house or looks at it, or is joined with its lord or looks at it, readers speak of a marriage that matures later and asks for more deliberate choice. By the usual rules of aspect, Saturn sits in or looks at the seventh house in about one chart in three, so this is a common finding. A seventh lord placed in one of the harder houses (the sixth, eighth or twelfth), or a strained Venus, is read in a similar way.",
        },
        {
          type: "p",
          text: "A chart cannot say why a particular proposal stopped or what your family would accept, and it cannot see the people you have met or the decisions you made last year. Study, work and moving cities push many people’s plans back, with or without Saturn. What Narayani can do is set the chart’s reading beside the pattern in your own account, and see which explains more of it.",
        },
      ],
    },
    {
      id: "the-person",
      chip: "The person",
      heading: "The person as well as the chart",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "Two people with the same seventh house can stand in very different places. One has met many people and ends things when they turn serious. Another has met almost nobody, because the days run between work and home. The chart shows the same house for both, and only a conversation shows the difference.",
        },
        {
          type: "p",
          text: "So Narayani asks what an ordinary weekday with the right person would look like, what you have already said no to and why, and what your family expects of you. She listens for the beliefs and habits behind your answers, because those are the part you can work with. A pattern is something you learned to do for reasons that made sense at the time, and she does not see it as a fault.",
        },
        {
          type: "p",
          text: "Where a pattern keeps returning, Brain Training starts from the same place: noticing the belief or reaction behind it and practising something different. The Discovery session page describes a first conversation that looks for the pattern before any practice is chosen. It is offered where it applies, and never as a condition of the reading.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she weighs in a marriage reading",
    icon: "astro-yoga",
    items: [
      { icon: "astro-aspect", text: "The seventh house and its lord, read beside Venus, Jupiter and the navamsa" },
      { icon: "astro-antardasha", text: "The planetary period running now and its sub-period, and the planet that rules them" },
      { icon: "astro-transit", text: "Where Jupiter and Saturn are passing now, and how that sits with the seventh house and its lord" },
      { icon: "brain-pattern", text: "What repeats in your story: how proposals begin, where they stop, what you say yes and no to" },
      { icon: "gen-parents", text: "What your family hopes for, and how much of it you share" },
    ],
  },
  bring: {
    heading: "Before a marriage reading: what to note down",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "Your birth date, time and birthplace, as exactly as you can: the navamsa and dasha dates move with the clock time" },
      { icon: "astro-rectification", text: "If the time is only approximate, say so, and by how much you think it could be out" },
      { icon: "gen-calendar", text: "A short account of what has happened so far: proposals, meetings, any engagement that ended, with rough dates" },
      { icon: "brain-words", text: "What you have already been told about Manglik or timing, and by whom" },
      { icon: "gen-privacy", text: "If one proposal is on your mind, the other person’s details only if they have agreed to share them" },
    ],
  },
  suits: {
    icon: "gen-limits",
    yes: [
      "you are weighing a decision and want the tradition’s view beside your own",
      "you have been told something about Manglik or delay and want to make sense of it before you react",
      "you would like to look at your own part in a pattern, without blame",
    ],
    no: [
      "you want a date, a name or a promise that a partner will arrive",
      "you want the chart to choose for you between two people",
      "you hope a chart will settle an argument with your family",
    ],
  },
  faqs: [
    {
      q: "Should I wear a stone or bead for marriage?",
      a: "Tradition links a stone with each planet, and some people wear the one for Venus or Jupiter when marriage is in question. No study shows that a stone or bead brings a partner or changes when a marriage happens, and Narayani does not suggest one for that purpose. Buying one means real money, and it is hard to reverse. Read the Gemstones guidance on evidence, authenticity and purchase terms before considering that expense.",
    },
    {
      q: "Can a chart describe the kind of partner who suits me?",
      a: "In tradition, the seventh house, its sign and lord, and Venus are read for the qualities you look for in a partner and for how relationships tend to unfold for you. These are themes to think with, and they do not describe a particular person; the Astrology page summarises what controlled studies of chart readings show. Narayani puts the themes to you as questions: whether they sound like what you want, and what you would need to see in someone before saying yes.",
    },
    {
      q: "Can a chart show the right timing for marriage?",
      a: "It can show windows, as the timing section above describes. It cannot show a right time, because that depends on things no chart holds, such as whether you have met someone, what your work allows and what your family needs. Narayani offers a window as a reason to act or to decide, and when to marry remains your call.",
    },
    {
      q: "Which houses and planets show the quality of a marriage?",
      a: "The seventh house comes first, read through its lord, with the second, fourth, eighth and twelfth beside it, as the table above shows. Among the planets, Venus and Jupiter lead; the Moon is read for feeling, Mars for energy and friction, Saturn for discipline and delay. None of this grades a marriage. These are themes to talk through, and the navamsa shows how the same planets behave inside the marriage itself.",
    },
    {
      q: "Does Manglik mean I have to marry another Manglik?",
      a: "Not necessarily. Many sources hold that the strain lapses when both partners carry the placement, which is why some families look for a match who is also Manglik. Exceptions can also apply to a single chart, as listed above, and many practitioners give the whole matter little weight. Whether to follow that preference is for you and your family to decide, and nothing in Narayani’s advice depends on a rite or a purchase.",
    },
    {
      q: "My birth time is only approximate. What can still be read for marriage?",
      a: "Some of it. The navamsa rising sign changes every nine to sixteen minutes, and dasha dates move by days for every minute of error, so these are the first parts to lose reliability. The Moon’s sign and star change far less often, so a reading built on them still has something to say, though less than a full chart would. Narayani says which parts hold on the time you have and which do not. If no time can be found, the page on readings without birth details describes what is still possible.",
    },
    {
      q: "Is a second marriage read differently?",
      a: "The chart is the same, and the seventh house and the periods are read in the same way. What changes is the conversation. A second marriage often comes with children, with two families already formed and with lessons from the first, so Narayani spends more of the time on what you want this time and on the pace that suits you and the people who depend on you.",
    },
    {
      q: "Can the reading help choose a wedding date?",
      a: "Choosing a date is a separate question, called muhurta in Jyotish, and the Dashas and transits page explains how it is worked out. A date normally follows the decision to go ahead, and many families put it to their own priest. If you would like to talk about one, say so when you enquire.",
    },
  ],
  related: [
    "/services/astrology/kundali-matching/",
    "/services/astrology/dashas-and-transits/",
    "/services/astrology/birth-chart-reading/",
    "/services/brain-training/discovery-session/",
  ],
  note: "A marriage that is breaking down, any question of separation, divorce or custody, and any worry about your safety at home belong first with a counsellor, a lawyer or a helpline. A reading is not counselling or legal advice, and it cannot stand in for either.",
  showFees: true,
};
