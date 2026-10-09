import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "reading-without-birth-details",
  title: "A reading without birth details",
  metaTitle: "Astrology without a birth time or date",
  metaDescription:
    "No birth time, or no date at all? A question chart, numbers from what you know and a plain conversation can still shape a reading, within honest limits.",
  lead: "Missing a birth time or date need not end the conversation. Narayani explains what can still be considered, and where uncertainty remains.",
  card: "When your birth date, time or place is missing, or you doubt the time on record.",
  icon: "page-reading-without-birth-details",
  group: "decisions",
  covers: [
    "A date, time or place missing",
    "A chart for the moment you ask",
    "Numbers from what is known",
    "Why a few minutes matter",
    "Rectification, and its limits",
    "Records worth checking",
  ],
  art: { kind: "moment" },
  enquiryTopic: "Astrology: a reading without birth details",
  cta: "Enquire about a reading without birth details",
  intro: [
    {
      type: "p",
      text: "Birth details go missing in ordinary ways. A certificate gives a date and no time. A mother remembers “just after lunch”. The family moved, and nobody wrote down the town. Some people were born at home, or adopted, and have no date at all.",
    },
    {
      type: "p",
      text: "Missing details narrow what a chart can support. Narayani explains those limits before considering another approach. A remembered time should never be treated as a verified record, and uncertainty needs to stay visible in the reading.",
    },
  ],
  sections: [
    {
      id: "whats-missing",
      chip: "What is missing",
      heading: "What each missing detail costs",
      icon: "group-chart",
      blocks: [
        {
          type: "p",
          text: "A kundli, the birth chart, is worked out from a date, a time and a place. Each does a different job, so a missing one costs something different.",
        },
        {
          type: "table",
          head: ["Detail", "What it sets in the chart", "If it is missing"],
          rows: [
            ["Date", "The positions of the planets, and with them the Moon’s sign and star", "Everything. A birth chart cannot be drawn without a date, so she works another way."],
            ["Time", "The rising sign, the twelve houses, the divisional charts and the dates each planetary period begins", "The houses, the divisional charts and the period dates cannot be trusted. The Moon’s sign and star usually hold."],
            ["Place", "The local clock behind the time, and with it the rising sign", "A town within about a hundred kilometres is usually close enough for the rising sign, since that distance is only about four minutes of local time. The divisional charts are less forgiving."],
          ],
          icons: ["astro-birth-date", "astro-birth-time", "astro-birth-place"],
        },
        {
          type: "p",
          text: "A missing time costs the most, and the next section puts a number on it.",
        },
      ],
    },
    {
      id: "why-minutes",
      chip: "Why minutes matter",
      heading: "Why a few minutes change so much",
      icon: "astro-lagna",
      blocks: [
        {
          type: "p",
          text: "The sky turns once a day, so the sign rising over the eastern horizon changes about every two hours. At Indian latitudes a sign stays up for between about 85 and 140 minutes. That sounds forgiving until the recorded time is slightly off.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The rising sign",
              text: "The rising sign, or lagna, starts the first house, and the other houses follow from it. An error of 15 minutes moves it in about one chart in eight, 30 minutes in about one in four, and an hour in about one in two. These odds come from how long each sign takes to rise, and no study of birth records stands behind them.",
              icon: "house-1",
            },
            {
              term: "The navamsa",
              text: "The navamsa is the ninth-part chart, read for partnership and for the inner strength of the planets. Its rising sign changes every 9 to 16 minutes, so even a small error can move it.",
              icon: "astro-navamsa",
            },
            {
              term: "The dashamsa",
              text: "The dashamsa is the tenth-part chart, read for work and public role. Its rising sign changes every 8 to 14 minutes. A reading of marriage or career that leans on these two charts is only as good as the recorded time.",
              icon: "astro-dashamsa",
            },
            {
              term: "The dasha dates",
              text: "The planetary periods start from where the Moon stood at birth. For each minute of error their dates move by between about a day and a half and five days, depending on the planet that rules the birth star. A slip of 15 minutes can therefore shift a period by anything from about three weeks up to two and a half months.",
              icon: "astro-mahadasha",
            },
            {
              term: "The Moon’s sign and star",
              text: "The Moon moves about 13 degrees in a day, little more than half a degree an hour. Its sign and its nakshatra, the lunar star, therefore hold steady through an error of an hour on most dates. This is the part of a chart that a doubtful time leaves mostly intact.",
              icon: "graha-moon",
            },
          ],
        },
      ],
    },
    {
      id: "question-chart",
      chip: "Question chart",
      heading: "A chart cast for the moment you ask",
      icon: "astro-question-chart",
      blocks: [
        {
          type: "p",
          text: "*Prashna* means question. A question chart is drawn for the time and place at which a question is asked, just as a birth chart is drawn for the moment of birth. The tradition holds that the sky at the moment a question takes shape describes the matter it is about. Practitioners turn to it when a birth time cannot be trusted.",
        },
        {
          type: "p",
          text: "In the usual scheme, the rising sign at that moment stands for you. The house that governs the subject stands for the matter: the seventh for a partnership, the tenth for work, the fourth for a home. The Moon is watched as the state of mind from which the question is asked. Read together, they give a picture of how the matter stands, as the tradition describes it.",
        },
        {
          type: "p",
          text: "What it can reflect is that picture, and what is weighing on you as you ask. It cannot describe your whole life, build a timeline of periods or say how you are made. It answers one question at a time.",
        },
        {
          type: "p",
          text: "On reliability, start with a plain difficulty: the moment of asking is itself a choice. A question forms, is written, is sent and is read at different times, sometimes hours apart, and the rising sign changes about every two hours. A twentieth-century text on predictive Jyotish, in the passage that sets out the old rules for working back from a question chart to an unknown birth chart, calls those rules not conclusive and in need of further research.",
        },
        {
          type: "p",
          text: "Question charts stand on tradition: no controlled test of them has turned up, and the Astrology page describes how birth charts fared in controlled tests. Narayani uses a question chart to keep a conversation to one question, and tells you how far to lean on it.",
        },
      ],
    },
    {
      id: "numbers",
      chip: "Numbers",
      heading: "Numbers from what you know",
      icon: "group-your-numbers",
      blocks: [
        {
          type: "p",
          text: "Numerology asks nothing of the birth hour, which is why it can start where a chart cannot. Its numbers are patterns to reflect on, and the Numerology page sets out where it stands as evidence.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The birth-day number (mulank)",
              text: "This comes from the calendar day alone, reduced to one digit, so a birth on the 28th gives 1. The page on personal numbers shows the method for this and for the destiny number.",
              icon: "numc-mulank",
            },
            {
              term: "The destiny number (bhagyank)",
              text: "This comes from every digit of the full date, reduced in the same way.",
              icon: "numc-bhagyank",
            },
            {
              term: "The name number",
              text: "The letters of a name are each given a value, and the values are added down to one digit. Systems give the letters different values, so the same name can add to different numbers, and a system should always be named. The page on numerology systems sets out the tables.",
              icon: "numc-name",
            },
            {
              term: "Numbers you live with",
              text: "A mobile number or a house or flat number exists whether or not a birth record does, and either can be read beside a name or a date.",
              icon: "numc-mobile",
            },
          ],
        },
        {
          type: "p",
          text: "She holds that a date of birth is the steadier place to begin, because it does not change, while a time written down by someone else may be wrong. With the date in hand, the numbers can be worked out before anything else. The Numerology pages go further into each.",
        },
      ],
    },
    {
      id: "conversation",
      chip: "The conversation",
      heading: "The conversation, which needs no chart",
      icon: "gen-listen",
      blocks: [
        {
          type: "p",
          text: "A good deal of any reading is conversation, and that part works without birth data. Narayani listens for the beliefs and habits behind how you tell the matter: what you assume will happen, what you keep returning to, what you have tried and where you stopped short. The pattern sometimes shows in the telling. This is the mind-first part of her work, and all it needs is a question.",
        },
        {
          type: "p",
          text: "Where the question is about timing, she says plainly what cannot be known without a trustworthy chart.",
        },
      ],
    },
    {
      id: "rectification",
      chip: "Rectification",
      heading: "Rectification, and why she is careful with it",
      icon: "astro-rectification",
      blocks: [
        {
          type: "p",
          text: "Rectification means testing candidate birth times against dated events in a life, such as a marriage, a change of work or a move, until a time is found that fits them. It is a common practice and a subjective one. It rests on the reader’s judgement, so two readers working from the same events can reach different times.",
        },
        {
          type: "p",
          text: "She is careful with it for three reasons. First, the method can run in a circle, because events are used to choose the time and the time is then used to explain the events. Second, people recall dates imperfectly, and an error in the event becomes an error in the time. Third, a reading built on an estimated time inherits its doubt, and the person hearing it may not know.",
        },
        {
          type: "p",
          text: "What she does instead is name the doubt: which parts of a reading become less reliable, and which still hold. A rectified time is taken as a working estimate, and anything built on it is kept to what an estimate can bear.",
        },
      ],
    },
    {
      id: "records",
      chip: "Records",
      heading: "Records worth checking before you give up",
      icon: "habit-evidence",
      blocks: [
        {
          type: "p",
          text: "Before working around a missing time, it is worth looking for one. A time of birth may be written in a hospital discharge summary or birth register, on a birth certificate issued from it, in a baby book or family diary, or in the kundli a family priest wrote at the birth. Take each as someone’s note of the time, and ask the person who was there, usually a parent. If two sources agree to within a few minutes, that is reassuring.",
        },
        {
          type: "p",
          text: "Then ask which clock the time was written on. Indian Standard Time came into force only on 1 January 1906, and some places and years kept other clocks. A time that is right on one clock can be off by tens of minutes on another.",
        },
        {
          type: "table",
          head: ["Place and years", "The clock a record may have used"],
          rows: [
            ["India before 1906", "Local or railway time, with no single standard clock"],
            ["Kolkata until 1948", "Calcutta Time, about 23 minutes ahead of Indian Standard Time"],
            ["Mumbai until 1955", "Bombay Time, about 39 minutes behind Indian Standard Time"],
            ["1 September 1942 to 15 October 1945", "War time, an hour ahead of Indian Standard Time. Sources differ on an earlier spell in 1941 and 1942"],
            ["Tea gardens in Assam", "A garden clock an hour ahead of Indian Standard Time"],
          ],
        },
        {
          type: "p",
          text: "By the same arithmetic as above, a time written on Calcutta Time and read as Indian Standard Time is off by about 23 minutes, enough to change the rising sign in about one chart in five. A time written on Bombay Time and read the same way is off by about 39 minutes, which is about one chart in three.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she reads when details are missing",
    icon: "gen-mind-first",
    items: [
      { icon: "gen-time", text: "The moment and place at which you ask, noted as exactly as you can give them" },
      { icon: "gen-limits", text: "Which of your details are firm, and which rest on memory or on a record she cannot trace" },
      { icon: "numc-destiny", text: "The numbers your date, your name and the numbers you live with can offer" },
      { icon: "brain-belief", text: "The beliefs and habits in how you describe the matter" },
      { icon: "brain-research", text: "How much weight each method can honestly bear, and which parts rest on tradition alone" },
    ],
  },
  bring: {
    heading: "With few birth details: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Your full name and any date you are sure of, even if only the year, and the town or nearest town of birth" },
      { icon: "gen-parents", text: "What a parent or elder remembers of the birth: the hour, the season, a festival or an event nearby" },
      { icon: "astro-birth-record", text: "Any written record of the time, even one you doubt: a certificate, a hospital note, a baby book or a family kundli" },
      { icon: "brain-words", text: "Your question in one sentence. The more exact it is, the more a question chart has to work with" },
    ],
  },
  session: {
    heading: "How a session begins from one question",
    icon: "gen-session-person",
    steps: [
      {
        title: "One question first",
        text: "A question chart needs a single, specific question, so the session begins by shaping yours into one sentence. The time and place at which you ask it are noted, because the chart is drawn for that moment.",
        icon: "brain-meta-model",
      },
      {
        title: "The chart, drawn and read",
        text: "The rising sign, the house for your subject and the Moon are read as the tradition describes them, and she tells you how much weight each can bear.",
        icon: "astro-aspect",
      },
      {
        title: "Numbers, where there is a date or a name",
        text: "Numbers from what is known are set beside the chart. A date gives two of them. A name gives another, and she names the system used.",
        icon: "numc-life-path",
      },
      {
        title: "What can be trusted",
        text: "She sorts what was said into three piles: what rests on a solid fact, what rests on an estimate, and what is tradition that cannot be checked.",
        icon: "gen-explain",
      },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "you have a date but no time, and your question is about one matter rather than a whole life",
      "you have no details at all and want to begin from a question",
      "you want an honest account of how far a reading can be trusted",
    ],
    no: [
      "you want a marriage or career timeline built on the navamsa or dashamsa, which need a trusted time",
      "you hope a reading will discover your exact birth time",
      "you want a forecast with dates",
    ],
  },
  faqs: [
    {
      q: "Can I get a reading if I do not have my date of birth?",
      a: "Yes, in a different form. Without a date there is no birth chart, so she works from a question chart cast for the moment you ask, from numbers drawn from your name and from the numbers you live with, such as a mobile or house number, and from the conversation itself. Each has limits, and she states them. If an older relative remembers the year and a festival or season, a panchanga for that year lists the festivals and can sometimes narrow the date.",
    },
    {
      q: "How does an intuitive reading differ from a chart-based reading?",
      a: "An intuitive reading rests on the reader’s impression of you, and the steps behind it cannot be shown. A chart-based reading follows stated rules: a chart is drawn for a stated moment and read by stated methods. What this page describes belongs to the second kind. A question chart, numbers worked from what is known and a conversation can each be explained and questioned. A reading from impression alone is not what is described here.",
    },
    {
      q: "Can astrology work without a birth time?",
      a: "Partly. The Moon’s sign and star usually hold through an error of an hour, so parts of a reading that rest on the Moon can stand. The rising sign, the houses, the divisional charts and the exact dates of the periods cannot be trusted without a time, and she says which is which. A question that depends on those, such as a marriage timeline built on the navamsa, is better left until a time is found.",
    },
    {
      q: "How reliable is a question chart?",
      a: "Modestly. A question chart rests on tradition, and the moment of asking is itself a judgement, because a question forms and reaches the reader at separate times. She keeps a question chart to one question and gives its suggestions modest weight. Asking again does not make the answer firmer.",
    },
    {
      q: "What if I know only my date of birth?",
      a: "Then you have more to work with than you may think. The numbers drawn from the date need nothing beyond the date. With a date alone, the Moon’s sign is settled on about six dates in ten and could be either of two on the rest, while its star is unsettled on nearly every date. She can read those numbers, work with the Moon’s sign where it is settled, and use a question chart for the matter you are asking about.",
    },
    {
      q: "My certificate gives one time and my mother remembers another. Which should I use?",
      a: "Bring both, with the source of each. If both times fall inside one rising sign, which lasts about two hours, the sign holds either way and, in the whole-sign house system widely used in India, so do the houses. Only the divisional charts and the period dates differ. If they fall in different signs, she says so and takes the time as uncertain. A certificate may have been copied from a hospital note, and a memory may have drifted, so neither is better by default.",
    },
    {
      q: "Can rectification find my real birth time?",
      a: "Not with certainty. Rectification gives the time that best fits the events supplied, and that is a best guess. A different reader, given the same events, may land on a different time. If a corrected time has been handed to you, ask which events it was built on and how they were weighed. Narayani builds only modestly on such a time, and says which parts of a reading it can carry.",
    },
    {
      q: "I was born abroad. Does that change anything?",
      a: "Only in the clock. A birth record made abroad is in local civil time, which may have been summer time, so the time needs converting before a chart is drawn. Name the town and the year, and the conversion can be checked. The chart is then read as for a birth in India.",
    },
    {
      q: "Can I ask my question more than once?",
      a: "It is better not to. Each time you ask, a new chart is drawn for a new moment, and several charts can give several readings, which tempts a person to keep the one they prefer. If your understanding of the matter has changed, or the situation has, that is a new question and can be asked afresh.",
    },
  ],
  related: [
    "/services/astrology/specific-issue-reading/",
    "/services/astrology/birth-chart-reading/",
    "/services/numerology/personal-numbers/",
    "/services/numerology/name-numerology/",
  ],
  showFees: true,
};
