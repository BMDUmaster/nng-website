import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "legal-matters",
  title: "What a reading can say about a legal matter",
  metaTitle: "Astrology and legal matters: what it can say",
  metaDescription:
    "What a Jyotish consultation can look at in a dispute or case, such as timing and how you meet pressure, and what it cannot do: no verdict, no legal advice.",
  lead: "Support for the waiting, pressure and personal decisions around a legal matter. Your lawyer leads on the law; a reading cannot establish facts or predict a judgment.",
  card: "When a dispute or case is running and you want to look at your timing and your choices.",
  icon: "page-legal-matters",
  group: "decisions",
  covers: [
    "Property and family disputes",
    "Contract and business disputes",
    "Timing, as tradition sees it",
    "How you meet pressure",
    "Thinking about settling",
    "What a reading cannot do",
  ],
  art: { kind: "drawing", id: "hero-legal-matters" },
  enquiryTopic: "Astrology: a legal matter",
  cta: "Enquire about a legal matter",
  intro: [
    {
      type: "p",
      text: "People arrive with a matter already in motion: a property dispute that has run for years, a quarrel in the family over a will or a house, a contract that has gone wrong, a business partner who has stopped talking and started writing letters. Three questions tend to follow: whether you will win, whether to settle, and whether a date matters.",
    },
    {
      type: "p",
      text: "Narayani cannot say whether you will win. Whether to settle is for you and your lawyer, and she will not make that choice for you. On dates she has something to say, but only where a date is yours to choose. Her attention goes to your side of it: the planetary period you are in, the way you respond under pressure, and how decisions get made while the matter runs.",
    },
    {
      type: "p",
      text: "It is a reflective reading, offered beside the legal work and never in place of it. Your lawyer’s advice comes first, on every point.",
    },
  ],
  sections: [
    {
      id: "can-look-at",
      chip: "What it can look at",
      heading: "What a consultation can look at",
      icon: "gen-listen",
      blocks: [
        {
          type: "p",
          text: "Four things are within reach. Each concerns you and the way you are carrying the matter, and none concerns the merits of the case.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The stretch you are in",
              text: "Jyotish counts a life in planetary periods called dashas, and also follows Saturn and Jupiter as they pass your Moon sign. She names the stretch you are in, says what tradition associates with it, and gives the date it ends, as closely as your birth time allows. It gives you a way to think about pace, such as whether this is a week to press, to rest or to leave a decision alone. It does not name the day a case will turn. How these periods are counted is set out on the page about dashas and transits.",
              icon: "astro-mahadasha",
            },
            {
              term: "How you meet pressure",
              text: "A person who feels wronged may push harder, or go quiet, or explain at length, or leave every decision to the lawyer. She looks at how you have responded so far, in this matter and in any earlier dispute, and at what each response has cost you. The chart, and numbers drawn from your birth date, offer words for a temperament; whether they fit is for you to say.",
              icon: "brain-reaction",
            },
            {
              term: "How decisions are being made",
              text: "Decisions in a long matter are made by someone: you, a parent, a brother, an adviser the family has trusted for years. Each rests on something: the lawyer’s advice, a need to be right, tiredness, the cost of one more hearing. A matter that has run long can end up decided more by fatigue than by judgement, and it helps to notice when that is happening.",
              icon: "brain-action-loop",
            },
            {
              term: "Patterns around authority and disputes",
              text: "If this is the third dispute with a landlord, a manager or a relative, the shape of the earlier ones is worth a look. She asks what usually sits at the start, and what you did in the weeks before each one turned hard.",
              icon: "brain-pattern",
            },
          ],
        },
      ],
    },
    {
      id: "cannot-do",
      chip: "What it cannot do",
      heading: "What a reading cannot do for a case",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "A reading cannot predict a verdict. It cannot judge the merits of a case or say who is in the right, and it cannot stand in for your lawyer. It is not legal advice.",
        },
        {
          type: "p",
          text: "The research gives no reason to expect a chart to say how a case will end. For what controlled tests of birth charts have shown, see the Astrology page.",
        },
        {
          type: "p",
          text: "A person in the middle of a long matter is easy to alarm. A prediction of a hard stretch, a loss or a slow court costs nothing to make and is hard to forget, so she makes none.",
        },
      ],
    },
    {
      id: "who-comes",
      chip: "Who comes",
      heading: "Four kinds of dispute, and the question under each",
      icon: "astro-dispute",
      blocks: [
        {
          type: "p",
          text: "Four kinds of matter come here: property, family, contract and business. Tradition reads certain houses for each, and each has a question underneath the legal one.",
        },
        {
          type: "table",
          head: ["Kind of matter", "The houses tradition reads", "What the conversation looks at"],
          rows: [
            ["Property dispute", "The fourth house, for home and land", "What the property stands for to each person, and whether the quarrel is really about the asset."],
            ["Family dispute", "The second house, for family, and the fourth, for home and mother", "Whether the dispute is about the thing in question or about an older hurt, and what each person fears losing."],
            ["Contract dispute", "The seventh house, for agreements and partners", "How you enter agreements, whether quickly, on trust or on a handshake, and what you would ask for next time."],
            ["Business dispute", "The tenth house, for work and standing, the seventh, for partners, and the sixth, for opponents", "What the business means to you, and whether the dispute is using up the time the work needs."],
          ],
          icons: ["group-homes", "astro-family", "astro-signing", "astro-partnership"],
        },
      ],
    },
    {
      id: "planets",
      chip: "The planets",
      heading: "The planets tradition links with law and dispute",
      icon: "astro-aspect",
      blocks: [
        {
          type: "p",
          text: "Jyotish gives each planet a set of meanings, and a few have long been read in matters of law and dispute. She uses each as a prompt for a question to you, and not as a finding about your case.",
        },
        {
          type: "table",
          head: ["Planet", "What tradition links with it", "The question it prompts"],
          rows: [
            ["Sun", "Authority, government and law", "How do you deal with authority, and is the other side an official body?"],
            ["Jupiter", "Advice, guidance and law", "Whose advice are you following, and how do you feel about it?"],
            ["Mercury", "Speech, writing and accounts", "What was said, what was written, and what did each side understand?"],
            ["Mars", "Strength, drive and conflict", "How is the quarrel being fought, and how much of it do you still want to fight?"],
            ["Saturn", "Discipline and limits, and by convention delay", "How do you carry a slow matter, and what do you do while you wait?"],
            ["Moon", "Mind, feeling and nurture", "How does the matter sit with you from one day to the next?"],
          ],
          icons: ["graha-sun", "graha-jupiter", "graha-mercury", "graha-mars", "graha-saturn", "graha-moon"],
        },
      ],
    },
    {
      id: "testing-stretch",
      chip: "A testing stretch",
      heading: "How a testing stretch is described",
      icon: "gen-caution",
      blocks: [
        {
          type: "p",
          text: "Saturn is the planet tradition links with limits and, by custom, with delay. When its period is running, or when it passes through the signs around your Moon sign, a spell called Sade Sati, tradition calls the time slow and testing, but also one of review and achievement.",
        },
        {
          type: "p",
          text: "Slowness is common in legal matters whatever planet is running. So she would say it directly: expect the matter to take its time, plan your weeks for a longer road, and do not read the slowness as a sign that you are losing. If a stretch is described as supportive, she would say that just as directly and add that it changes nothing about the law.",
        },
      ],
    },
    {
      id: "settle",
      chip: "Settling",
      heading: "Thinking about whether to settle",
      icon: "group-decisions",
      blocks: [
        {
          type: "p",
          text: "Whether to settle is a legal and financial question first, and your lawyer is the person to ask: what the claim is worth, what another year of hearings will cost, and what the other side is likely to accept. Narayani cannot weigh any of that, and she will not tell you to settle or to fight. This is not legal or financial advice.",
        },
        {
          type: "p",
          text: "What she can do is help with the part that is yours. She asks what would count as enough, whether a settlement is being resisted because the terms are poor or because accepting feels like losing, and whether a fight goes on because it can be won or because stopping would mean admitting something. These questions are about you and not about the case, and the answers often change what you ask your lawyer.",
        },
        {
          type: "p",
          text: "Where two brothers co-own a family shop, and one wants to fight to the end while the other wants it over before the next festival season, the chart cannot say who is right. The conversation can ask each of them what winning would give him, and whether that is available any other way.",
        },
      ],
    },
    {
      id: "dates",
      chip: "Dates",
      heading: "Dates you choose, and dates you do not",
      icon: "astro-muhurta",
      blocks: [
        {
          type: "p",
          text: "Most dates in a legal matter are set by the court or by law. A few are yours: the day to file, to sign, to meet the other side. For those, tradition offers muhurta, the choice of a favourable day and hour, and she describes a window only in the tradition’s terms, never as a prediction of how the case will turn out.",
        },
        {
          type: "p",
          text: "One rule outranks every muhurta, and it is the legal calendar. A limitation period, a filing deadline or a hearing date comes before any auspicious time, and she would never ask you to delay or miss a legal date for the sake of one. If your lawyer says a document must go in on a particular day, it goes in on that day.",
        },
        {
          type: "p",
          text: "Where a date is still open, she places it beside the period you are in and says what the tradition would say of it. Then she asks what your lawyer says about the same date. If the two differ, the lawyer’s view stands.",
        },
      ],
    },
    {
      id: "the-wait",
      chip: "The wait",
      heading: "The long wait",
      icon: "astro-stress",
      blocks: [
        {
          type: "p",
          text: "Legal matters tend to run longer than anyone expects, and the waiting wears on people in ways the paperwork never records. Patience thins, small decisions pile up, and the matter starts to sit in every conversation. Here the mind-first side of her work matters most.",
        },
        {
          type: "p",
          text: "She asks how you are holding up, and about the habits that have grown around the matter: looking at the phone every hour, replaying arguments at night, deferring every other decision until it is over. She may mention a steadying practice, such as slow breathing for a few minutes at a set time each day, along with the reasons for it and the limits of the research behind it. It is a self-development practice, not a treatment.",
        },
        {
          type: "note",
          text: "If the strain is heavy, please speak to a doctor or a qualified counsellor. A reading is not mental-health care.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she looks at with you in a legal matter",
    icon: "gen-explain",
    items: [
      { icon: "astro-transit", text: "The planetary period running now and the date it ends, set beside the stage your matter has reached" },
      { icon: "brain-habit", text: "Your usual habits when you feel wronged or cornered: pressing, withdrawing, over-explaining" },
      { icon: "brain-words", text: "How you describe the matter and the other side, and whether the telling has changed over time" },
      { icon: "gen-calendar", text: "Which upcoming dates a court or the law decides, and which are yours to set" },
      { icon: "brain-belief", text: "What you believe settling, or losing, would say about you" },
    ],
  },
  bring: {
    heading: "Before a legal-matter reading: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "The birth information used for your chart, including the source and reliability of its recorded time" },
      { icon: "brain-timeline", text: "A few sentences on the matter: what it concerns, who is on the other side, and what stage it has reached" },
      { icon: "gen-time", text: "The dates ahead: the next hearing, filing or signing, and which of them can move" },
      { icon: "brain-meta-model", text: "What you plan to ask your lawyer, if you have a list" },
      { icon: "gen-privacy", text: "Notices, orders and case files can stay with your lawyer, and a few plain sentences are enough to begin" },
    ],
  },
  faqs: [
    {
      q: "Can astrology say whether I will win my case?",
      a: "No. A chart is built from one person’s birth, while a case is made of other people, papers, the law and a judge. Narayani predicts no outcome of any kind. What she can look at is your own part in the waiting, and your lawyer deals with the case itself.",
    },
    {
      q: "Someone has told me my chart shows a long case or a loss. Should I believe it?",
      a: "Take it as one person’s opinion, not a finding. Ask what in the chart it rests on, which rule that comes from, and what would show it wrong. A forecast that nothing could contradict tells you nothing. Narayani makes no such prediction, and she will go through the reasoning with you if you tell her what was said.",
    },
    {
      q: "Do you need my case papers?",
      a: "Not for a first enquiry, and please do not send them. What the reading needs is short: the nature of the matter, the other party and the stage it has reached. It does not examine documents or weigh evidence, since that is your lawyer’s work. If a date from the papers matters, such as the next hearing, mention the date alone.",
    },
    {
      q: "I know the other party’s date of birth. Can the two charts be compared?",
      a: "No, and there are two reasons. A comparison would suggest a winner, and no reading can name one. The other party’s birth details are also theirs, and they may not have agreed to share them. The reading stays with you: your timing, your pattern and the choices in front of you.",
    },
    {
      q: "I am up against a company or an official. Is that read differently?",
      a: "Only in the questions she asks. Tradition links the Sun with authority, government and law, so the Sun is one prompt, and she looks at your own pattern with authority: deferring to it, resisting it or avoiding it. The reading does not change the practical balance of power or the odds. On how to deal with a large opponent, your lawyer is the one to ask.",
    },
    {
      q: "My case has been decided. Is there anything left to look at?",
      a: "Yes. A judgement leaves decisions behind it: whether to appeal, how to deal with the other party afterwards, and how to take stock of the time and trust the matter used up. She can look at the stretch ahead and at your pattern of response. Whether to appeal is for your lawyer, and she does not weigh the merits.",
    },
    {
      q: "Should I do a puja or a remedy for my case?",
      a: "Some people keep a prayer or a practice through a long matter, and she will talk through one if you ask. None is claimed to change a verdict, none is required, and no puja or purchase is ever a condition of her advice. If you are being pressed to pay for a ritual, take that as a reason to pause and ask why.",
    },
    {
      q: "Can the case number or the date of a hearing be read in numerology?",
      a: "She does not use a case number or a hearing date to say how a matter will go. A case number is assigned by a registry and a hearing date by a court, so neither comes from you. Where numbers are read, they are the ones from your own date of birth and name, as a description of temperament and cycles, with the same limits as the chart.",
    },
    {
      q: "Can a reading be used in court, or shown to my lawyer?",
      a: "A reading is not prepared as evidence, and she does not offer it as such. What you take from it is your own understanding, and you may share it with your lawyer or keep it to yourself. If it helps you explain to your lawyer what matters most to you, it has done a useful job, but it adds nothing to the case itself.",
    },
    {
      q: "I am in Sade Sati. Does that mean I will lose my case?",
      a: "No. Sade Sati is a timing label from tradition, which describes it as testing and links it with review and achievement. Nothing has turned up that ties it to particular events, still less to how a case ends. She takes it as a stretch that asks for patience, and the case itself turns on the facts, the law and your lawyer’s advice.",
    },
  ],
  related: [
    "/services/astrology/specific-issue-reading/",
    "/services/astrology/property-and-big-decisions/",
    "/services/astrology/dashas-and-transits/",
    "/services/brain-training/",
  ],
  note: "Court dates, filing deadlines and limitation periods come before any reading and before any auspicious time. Where one is close, ask your lawyer first.",
  showFees: true,
};
