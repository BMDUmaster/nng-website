import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "",
  title: "Astrology",
  metaTitle: "Astrology (Jyotish) consultations",
  metaDescription: "Jyotish as a way to reflect on timing, relationships, work and choices, read around your question and always beside the mind-first conversation.",
  lead: "Narayani reads the birth chart in the Jyotish tradition as a way to reflect on timing and choices, always beside the mind-first conversation. Each reading starts from the question you bring.",
  card: "When you want your chart read around one question, without a verdict or a warning.",
  icon: "hub-astrology",
  group: "",
  covers: [
    "What Jyotish is and is not",
    "Houses, planets, nakshatras",
    "Timing: dashas and transits",
    "Marriage, work and study",
    "Remedies, only where useful",
    "Birth time questions",
    "Limits of any reading",
  ],
  art: { kind: "chart" },
  enquiryTopic: "Astrology",
  cta: "Enquire about astrology",
  indexHeading: "Each part of the chart and each kind of question has its own page",
  intro: [
    {
      type: "p",
      text: "A birth chart is a map of the sky at the moment you were born. Jyotish, the traditional Indian way of reading that map, takes its name from *jyoti*, light. It looks at where the Sun, the Moon and the planets stood then, and it describes patterns and periods.",
    },
    {
      type: "p",
      text: "Narayani uses it as one part of a mind-first conversation. The chart gives that conversation a structure for thinking about timing. The thinking, and the decision, stay with you. She begins with your question and the beliefs and habits around it, and opens the chart after that.",
    },
  ],
  sections: [
    {
      id: "what-it-is",
      chip: "Jyotish",
      heading: "What Jyotish claims, and what it does not",
      icon: "astro-sky-moment",
      blocks: [
        {
          type: "p",
          text: "Jyotish is counted among the six Vedanga, the limbs of the Vedic tradition, and is also called Vedic or Hindu astrology. A chart divides the sky into twelve signs and twelve houses and follows nine grahas: the Sun, the Moon, five planets and two lunar points. Many teachers describe what a chart offers as indications, and a person can meet an indication with awareness.",
        },
        {
          type: "p",
          text: "Narayani does not read a chart as fate, and she does not offer it as a way to control events. It can help you see a pattern or a stretch of time. What you do inside that stretch is your choice.",
        },
        {
          type: "p",
          text: "Jyotish is a tradition, and the research has not confirmed it. Controlled tests have given practitioners three kinds of task: pairing birth charts with personality profiles, picking out children rated bright from children at special schools, and judging the compatibility of married and divorced couples. Their results did not beat chance. In a 1985 test, 28 practitioners matched 116 charts to personality profiles, choosing among three each time, and picked the right one about a third of the time, which is the chance level. Some researchers within astrology dispute how such tests are read. No controlled test of dasha or transit timing is known.",
        },
        {
          type: "p",
          text: "A reading can still feel accurate, because general statements feel personal, an effect psychologists call the Forer effect. In a 1948 classroom test, 39 students each rated the same generic sketch as a description of themselves, and the average was about 4.3 out of 5. Use a reading as a conversation to check against your own life.",
        },
      ],
    },
    {
      id: "her-approach",
      chip: "Mind and chart",
      heading: "Why the mind comes first, and where the chart fits",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "A chart is sometimes read out with a warning attached: do this, or that will follow. Narayani does not begin there, and she says so in her own words.",
        },
        { type: "quote", text: "It is not a business of fear.", source: "Narayani Garg, translated from Hindi" },
        {
          type: "p",
          text: "In her view a remedy works only when the mind is working with it, so the person who has to carry it comes before the planet. The chart comes in where it helps: it gives a structure for questions about timing, for why a stretch of time feels as it does, and for weighing a choice against the period you are in. A hard period is described plainly, along with how common it is and how traditions differ about it.",
        },
      ],
    },
    {
      id: "a-reading",
      chip: "A reading",
      heading: "What a reading is, and how a consultation runs",
      icon: "gen-session-person",
      blocks: [
        {
          type: "p",
          text: "A reading starts from one question: a decision that keeps being put off, a change of work, a relationship, a stretch that feels heavy. Narayani asks about the question first, and about the beliefs and habits gathered round it. She opens the chart after that, picks out the parts that touch the question, and explains why each one matters. Sessions can be online or in person, and how long one takes depends on the option you choose, which the fees on this page set out. Once you enquire, the team will confirm the format and timing with you, and the amount, before anything is booked.",
        },
        {
          type: "p",
          text: "Birth details give the chart its frame, so bring the day, hour and town of birth if you know them. Without them the conversation can still begin from the question, and a separate page on readings without birth details explains what remains possible. Wherever the chart points, she gives the reasoning too, so that you can test it for yourself.",
        },
      ],
    },
    {
      id: "the-map",
      chip: "The map",
      heading: "A map of the ideas in a chart",
      icon: "astro-chart-parts",
      blocks: [
        {
          type: "p",
          text: "Every chart is built from the same few parts. Each has a page of its own, and none needs to be understood before you ask a question.",
        },
        {
          type: "terms",
          title: "The parts of a chart",
          items: [
            {
              term: "Lagna",
              text: "The sign rising on the eastern horizon where and when you were born. Every house is counted from it, so it is the part of a chart most sensitive to the birth time. The birth chart reading page has the detail.",
              icon: "astro-lagna",
            },
            {
              term: "The twelve houses",
              text: "The twelve areas a life is divided into, each read through the planets that sit in it. The birth chart reading page lists all twelve.",
              icon: "astro-twelve-houses",
            },
            {
              term: "The nine grahas",
              text: "Seven bodies you can see, the Sun, the Moon and five planets, plus the two lunar points Rahu and Ketu. The birth chart reading page says what each one stands for.",
              icon: "numc-vedic",
            },
            {
              term: "Nakshatras",
              text: "The 27 stretches of sky the Moon moves through, roughly one for each day of its round. The one holding your birth Moon sets your first dasha and is used in matching. The nakshatras page lists all 27.",
              icon: "graha-moon",
            },
            {
              term: "Dashas and transits",
              text: "A cycle of planetary periods that starts at birth, and the planets as they stand in the sky at present. The dashas and transits page covers both, with Sade Sati and the choice of dates.",
              icon: "astro-mahadasha",
            },
            {
              term: "Divisional charts",
              text: "Finer charts cut from the same birth moment, such as D9 for partnership and D10 for work. The birth chart reading page explains them.",
              icon: "astro-navamsa",
            },
          ],
        },
        {
          type: "p",
          text: "The planets are also where Jyotish meets numerology. In the Indian system the numbers 1 to 9 are tied in turn to the Sun, Moon, Jupiter, Rahu, Mercury, Venus, Ketu, Saturn and Mars, and a consultation can look at both when the question calls for it.",
        },
      ],
    },
    {
      id: "where-to-start",
      chip: "Your question",
      heading: "Which page fits the question you have",
      icon: "astro-where-to-start",
      blocks: [
        {
          type: "table",
          head: ["If you are asking", "Start with"],
          rows: [
            ["What is in my chart, and what do its parts mean?", "Birth chart reading"],
            ["What is this period about, and when might it change?", "Dashas and transits"],
            ["What does my Moon star say about temperament?", "The 27 nakshatras"],
            ["Is a marriage delayed, or being decided?", "Marriage"],
            ["How do two charts compare?", "Kundli matching"],
            ["Where is my work heading, and should I change it?", "Career and business, and career growth"],
            ["How should a child, or I, approach studies?", "Education"],
            ["How do rhythm, stress and routine look in my chart?", "Health and wellbeing"],
            ["Should I buy, sell or move, or sign something?", "Property and big decisions"],
            ["A dispute or a legal matter is on my mind.", "Legal matters"],
            ["One concern keeps returning.", "A specific concern"],
            ["I do not have my birth time, or any details.", "A reading without birth details"],
            ["A remedy was suggested to me and I want to know why.", "Astrology remedies"],
            ["I would like to know what an intuitive consultation is.", "Intuitive consultation"],
          ],
        },
      ],
    },
    {
      id: "remedies",
      chip: "Remedies",
      heading: "Remedies, offered and never pressed",
      icon: "gen-no-pressure",
      blocks: [
        {
          type: "p",
          text: "In Jyotish a difficult planet or period is often paired with an *upay*, a remedy: a mantra, a colour, a fast, a gift, a change of habit, sometimes a stone. Narayani offers one only where it adds something to the reading, gives the reason, and says plainly when none is needed. No remedy comes with a warning, no remedy is claimed to alter an outcome, and her advice is never tied to buying anything.",
        },
        {
          type: "p",
          text: "The mind comes first here too. A remedy has to fit the week you actually have, so the first question is what your days can hold. The page on astrology remedies sets out the kinds, how one is chosen and when to leave it out.",
        },
      ],
    },
    {
      id: "limits",
      chip: "Limits of a reading",
      heading: "What a reading cannot do",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "A chart can describe a period and raise a question about a decision. It cannot name the date of an event, say whether a relationship should continue, or judge a person as good or bad.",
        },
        {
          type: "list",
          title: "A reading is not",
          items: [
            "a forecast of fixed events",
            "medical advice, since symptoms belong with a doctor",
            "legal or financial advice, since a lawyer or an adviser decides strategy",
            "mental-health advice",
          ],
        },
        {
          type: "p",
          text: "Where a question would be better served by a doctor, a lawyer, an adviser or a mental health professional, Narayani may say so herself.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What a reading pays attention to",
    icon: "gen-listen",
    items: [
      { icon: "astro-question-chart", text: "The houses and planets that touch your question, taken one area at a time" },
      { icon: "astro-birth-time", text: "How reliable your birth time is, and which parts of the chart depend on it" },
      { icon: "astro-transit", text: "Which period is running and where Saturn and Jupiter stand, as a frame for the question" },
      { icon: "brain-belief", text: "The belief or habit around the question, because that part is yours to work with" },
      { icon: "astro-no-remedy", text: "Whether a remedy has any place in the reading at all" },
    ],
  },
  bring: {
    heading: "Before an astrology reading: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-explain", text: "The question itself, in a sentence or two, and why it is on your mind now" },
      { icon: "gen-bring-name", text: "The day, hour and town of your birth, since the chart is cast from all three" },
      { icon: "astro-rectification", text: "If the hour is uncertain, where the figure came from: a family memory, a record or a rough estimate" },
      { icon: "habit-evidence", text: "Any remedy, stone or warning given to you earlier, and by whom" },
    ],
  },
  faqs: [
    {
      q: "What is Jyotish?",
      a: "Jyotish is the traditional Indian way of reading the sky at a given moment, often called Vedic or Hindu astrology. It uses a zodiac fixed to the stars, called the sidereal zodiac, along with nine grahas, 27 nakshatras and planetary periods called dashas. Narayani uses it as a structured way to think about patterns and timing. It has a long history as a tradition, and it has not been shown to predict anything.",
    },
    {
      q: "Is Jyotish prediction, and is there scientific proof for it?",
      a: "No. Many teachers speak of indications, and Narayani does not use a chart to forecast events. There is no scientific proof for it, and the section above on what Jyotish claims sets out what the tests found. What a reading offers is a structured way to look at a period, a pattern or a choice.",
    },
    {
      q: "Do I need my exact birth time?",
      a: "Mostly yes, though not for every part of the chart. The rising sign sets how the houses fall and changes about every two hours, and the finer divisional charts change within minutes. The Moon sign and nakshatra are steadier, but dasha dates still move with the time. If you are unsure of yours, say so and say where it came from. The birth chart reading page shows how much a small error changes, and a separate page on readings without birth details covers the alternatives.",
    },
    {
      q: "Can a chart show past-life patterns?",
      a: "Some practitioners say it can, because the idea of karma, action and its fruit carried from one life into the next, runs through Indian thought. That is a belief, and it cannot be tested. Narayani does not claim to see past lives. She uses the idea as a prompt to look at what keeps repeating in this life and what you can do about it now. The birth chart reading page says which parts of a chart readers point to when they speak this way.",
    },
    {
      q: "Do mantras work?",
      a: "Tradition says they do. That is a belief, and no test shows that a mantra changes events. The question worth asking is what you can see for yourself: said slowly each morning, a mantra is a fixed minute of quiet and something to return to when a period feels heavy, and some people value that. If it turns into a source of worry, set it aside. The page on astrology remedies goes further.",
    },
    {
      q: "Are gemstones necessary?",
      a: "No. A stone is one of many remedies Jyotish lists, and many people never wear one. No test shows that a stone changes health, money or luck, and since it is a purchase, it is the remedy to take slowly. Narayani raises one only where it fits the chart and your question, and her advice is never conditional on it. Before buying one, see the Gemstones page for what to check.",
    },
    {
      q: "What is Sade Sati?",
      a: "Sade Sati means seven and a half, and it names the long spell when Saturn travels past your Moon sign and the signs on either side of it. It recurs roughly every three decades. Tradition reads it as a time of testing and review, though some summaries stress achievement and recognition too. Experience varies a great deal. The dashas and transits page covers how it is counted, where practitioners differ and what people do during it.",
    },
    {
      q: "What is a dasha?",
      a: "A dasha is a planetary period. The system most often used, Vimshottari, spreads a 120-year cycle across the nine grahas, and the Moon’s nakshatra at your birth decides which period you begin with. Tradition links each period with the themes of its planet, and a reading takes those as themes to think about. The full table is on the dashas and transits page.",
    },
    {
      q: "Do nakshatras affect relationships?",
      a: "In Jyotish the Moon star enters the comparison of two charts: four of the eight traditional matching scores come from the two birth nakshatras. So far as is known, whether those scores say anything about a real relationship has not been tested in a controlled way, and a score is never a verdict. A reading takes the star as one voice among several on temperament. The nakshatras page has the detail.",
    },
    {
      q: "Can Vastulogy work with my chart?",
      a: "They are separate traditions that can be read side by side. Jyotish reads the sky as it stood at your birth, and Vastulogy reads direction and layout in the place where you live or work. Where it helps the question, Narayani looks at both, the chart for timing and temperament and the space for how a day actually runs. No effect on events is claimed for either. The Vastulogy section has a page on reading a space beside a chart.",
    },
    {
      q: "How is Jyotish different from Western astrology?",
      a: "Western astrology ties its signs to the seasons, and Jyotish ties them to the stars. Over the centuries the two have drifted about 24 degrees apart. For roughly four in five birthdays that moves your Sun sign back by one, so many people find their Vedic Sun sign differs from the one in newspaper columns. Jyotish also takes the Moon as a main reference, uses 27 nakshatras and reads timing through dashas. They are separate systems, and neither corrects the other.",
    },
  ],
  related: [
    "/services/astrology/birth-chart-reading/",
    "/services/astrology/dashas-and-transits/",
    "/services/astrology/marriage/",
    "/services/astrology/career-and-business/",
  ],
  showFees: true,
};
