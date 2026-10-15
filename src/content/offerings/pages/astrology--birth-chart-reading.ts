import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "birth-chart-reading",
  title: "Birth chart reading",
  metaTitle: "Birth chart (kundli) reading in Jyotish",
  metaDescription: "What a kundli holds: the lagna, twelve houses, nine grahas, signs, D9 and D10 charts and yogas, and how a chart is read around one question.",
  lead: "A kundli is the sky drawn for the moment and place of your birth. Narayani reads it around the question you bring, rather than reciting it from the first house to the twelfth.",
  card: "When you want to understand your chart, or have one question you want it read around.",
  icon: "page-birth-chart-reading",
  group: "chart",
  covers: [
    "What a kundli holds",
    "Lagna and the twelve houses",
    "The nine grahas, in full",
    "Signs, D9, D10, yogas",
    "Why birth time matters",
    "Reading around a question",
    "What a first reading covers",
  ],
  art: { kind: "drawing", id: "hero-birth-chart-reading" },
  enquiryTopic: "Astrology: birth chart reading",
  cta: "Enquire about a birth chart reading",
  intro: [
    {
      type: "p",
      text: "A *kundli*, also called a *janam patrika*, is a drawing of the sky for the moment and place you were born: the rising sign, the sign and house of each graha, the Moon’s nakshatra and a table of planetary periods. It is usually set out as a diamond or a square of twelve boxes, and it can look closed to anyone who has not been taught to read it.",
    },
    {
      type: "p",
      text: "Begin with the question you want to discuss. Narayani explains the relevant parts of the chart and their limits, so you can follow the reasoning and question the interpretation.",
    },
  ],
  sections: [
    {
      id: "birth-details",
      chip: "Birth details",
      heading: "What a chart needs, and why the time matters",
      icon: "astro-birth-date",
      blocks: [
        {
          type: "p",
          text: "A chart needs the day you were born, the hour, and the place. The place counts because the chart is drawn for the sky as seen from that spot, and each degree of longitude shifts local time by four minutes, about 100 km across India. The hour counts most: the rising sign changes every two hours or so as the sky wheels round.",
        },
        {
          type: "p",
          text: "A slip in the birth time moves some parts of a chart far more than others, and the size of the effect can be worked out from the speed of the sky. At Indian latitudes a rising sign lasts about two hours on average.",
        },
        {
          type: "list",
          title: "What a slip in the birth time changes",
          items: [
            "The rising sign: about one chance in eight of a change from a 15-minute slip, one in four from 30 minutes, and one in two from an hour.",
            "The Moon sign, nakshatra and pada: for an hour’s slip, about one chance in fifty, one in twenty-five and one in six.",
            "The rising sign of the D9 and D10 charts: it changes every 9 to 16 minutes in D9 and every 8 to 14 in D10, so the finer the divisional chart, the more it leans on the exact time.",
          ],
        },
        {
          type: "p",
          text: "Some older Indian records follow a clock other than today’s standard time, which is one more reason to ask where a recorded time came from. The page about readings without birth details lists those clocks.",
        },
      ],
    },
    {
      id: "rectification",
      chip: "Rectifying the time",
      heading: "A doubtful birth time: what rectification can and cannot do",
      icon: "astro-rectification",
      blocks: [
        {
          type: "p",
          text: "Rectification is the attempt to find a birth time when none is known or the one on record is doubtful. The practitioner works backwards from dated events in a life, for example a wedding, a house move or a new job, and looks for a time at which the chart seems to fit them. Many practitioners use it, and the answer depends on the practitioner’s judgement. Careful practitioners working from the same events can still land on different times, and the result is only as sound as the memory and dating behind those events.",
        },
        {
          type: "p",
          text: "Narayani regards a rectified time as an assumption to keep testing as the reading goes on. She says which parts of a reading depend on the time and which do not, and prefers to say a part of the chart cannot be read than to read it from a guess.",
        },
        {
          type: "p",
          text: "Two other routes are open when the time is missing. One is the *prashna* chart, drawn for the moment a person puts a question to a reader, which the classical texts describe. The other is a reading kept to what the day and place alone can support, which is less than most people expect. Neither is as firm as a recorded time. The page for readings without birth details goes through each in turn.",
        },
      ],
    },
    {
      id: "lagna",
      chip: "Lagna",
      heading: "The lagna: the rising sign that anchors the chart",
      icon: "astro-lagna",
      blocks: [
        {
          type: "p",
          text: "The *lagna* is the sign that stood on the eastern horizon where you were born, at the moment you were born. It is taken as the first house, and the other eleven are counted from it, so every other part of the chart is placed in relation to it.",
        },
        {
          type: "p",
          text: "That is why it works as an anchor. The same planet means something different in different houses, and the houses depend on the lagna. Jupiter in the seventh house is read around partnership, and Jupiter in the fourth around home. Two people born in the same city on the same day, a few hours apart, can have almost the same planets in the same signs and still carry different charts, because their lagnas differ.",
        },
        {
          type: "p",
          text: "At Indian latitudes a sign takes between roughly 1.4 and 2.3 hours to rise, which is why the lagna is the part of a chart most exposed to a mistake in the birth time. The Moon sign, called the *janma rashi*, is read beside it, because the Moon stands for the mind and the Moon’s nakshatra is where the cycle of periods begins. Whole-sign houses, in which a house is one complete sign, are widely used in India, and other ways of dividing the houses exist.",
        },
      ],
    },
    {
      id: "houses",
      chip: "Twelve houses",
      heading: "The twelve houses, and what each is about",
      icon: "astro-twelve-houses",
      blocks: [
        {
          type: "p",
          text: "Twelve houses split a life into areas, counted round the chart starting from the lagna. A planet sitting in a house lends its own themes to that area. The sign on a house has a ruler, the house’s lord, and wherever the lord sits shows where that area is being worked out. Take the right-hand column as a list of themes to think with.",
        },
        {
          type: "table",
          head: ["House", "Sanskrit name", "What it is about"],
          rows: [
            ["First house", "Tanu", "Self, body and presence: how you arrive in a room and how you meet the world."],
            ["Second house", "Dhana", "Money you hold, speech and the resources of your family."],
            ["Third house", "Sahaja", "Courage, effort and communication, with younger siblings."],
            ["Fourth house", "Bandhu, or Sukha", "Home, mother, property, vehicles and your inner ground."],
            ["Fifth house", "Putra", "Creativity, children, intelligence and learning."],
            ["Sixth house", "Ari", "Daily work and routines, health habits, rivals, service and debts."],
            ["Seventh house", "Yuvati, or Kalatra", "Partnerships and marriage, and business partners too."],
            ["Eighth house", "Randhra", "Change, shared resources, inheritance, hidden matters and depth."],
            ["Ninth house", "Dharma", "Beliefs, teachers, father, higher learning and fortune."],
            ["Tenth house", "Karma", "Career, livelihood and public standing."],
            ["Eleventh house", "Labha", "Gains, friends and networks."],
            ["Twelfth house", "Vyaya", "Rest, expenses and losses, solitude, living abroad and letting go."],
          ],
          icons: ["house-1", "house-2", "house-3", "house-4", "house-5", "house-6", "house-7", "house-8", "house-9", "house-10", "house-11", "house-12"],
        },
        {
          type: "list",
          title: "Four groups of houses",
          items: [
            "Kendra, the corners: houses 1, 4, 7 and 10. Tradition counts them as the strong, active houses.",
            "Trikona, the triangle: houses 5 and 9, and for many readers house 1 as well. Tradition counts them as supportive.",
            "Dusthana: houses 6, 8 and 12. Tradition calls them difficult, and many readers also link them with service, depth and rest.",
            "Upachaya: houses 3, 6, 10 and 11, which tradition says grow better with time and effort.",
          ],
        },
        {
          type: "note",
          text: "Traditional lists tie the first house to the body, and the sixth to health habits and, in older lists, to illness. These are symbolic associations, and they are no diagnosis: symptoms belong with a doctor. Some classical lists also give the eighth house a say in length of life. Narayani does not read lifespan, and no chart should be used for it.",
        },
      ],
    },
    {
      id: "grahas",
      chip: "Nine grahas",
      heading: "The nine grahas, and what each signifies",
      icon: "numc-vedic",
      blocks: [
        {
          type: "p",
          text: "Jyotish counts nine grahas. Seven are bodies you can see in the sky: the Sun, the Moon, Mars, Mercury, Jupiter, Venus and Saturn. Rahu and Ketu are different: they are crossing points, the places where the Moon’s orbit cuts through the Sun’s yearly track. They sit opposite each other and move backward through the zodiac, completing a circuit in about 18.6 years. Uranus, Neptune and Pluto, all found with telescopes, have no place in classical Jyotish.",
        },
        {
          type: "table",
          head: ["Graha", "What it signifies", "Number in Indian numerology"],
          rows: [
            ["Sun (Surya)", "Self, soul, vitality and authority", "1"],
            ["Moon (Chandra)", "Mind, feeling and nurture", "2"],
            ["Mars (Mangala)", "Strength, drive and conflict, and land", "9"],
            ["Mercury (Budha)", "Speech, intellect and trade", "5"],
            ["Jupiter (Guru)", "Knowledge, guidance and fortune", "3"],
            ["Venus (Shukra)", "Love, partnership, comfort and the arts", "6"],
            ["Saturn (Shani)", "Discipline, limits, patience and long effort", "8"],
            ["Rahu", "Worldly desire, the appetite for more", "4"],
            ["Ketu", "Detachment, and letting go", "7"],
          ],
          icons: ["graha-sun", "graha-moon", "graha-mars", "graha-mercury", "graha-jupiter", "graha-venus", "graha-saturn", "graha-rahu", "graha-ketu"],
        },
        {
          type: "p",
          text: "A graha is never read alone. Each is read by the sign it occupies, the house it sits in, the planets it is joined to and the period that is running, so the same planet can read as strained in one chart and at ease in another.",
        },
      ],
    },
    {
      id: "signs",
      chip: "Signs",
      heading: "The twelve signs, and how a planet is read in one",
      icon: "astro-planet-reading",
      blocks: [
        {
          type: "p",
          text: "The zodiac is divided into twelve signs, called *rashis*, of 30 degrees each. Jyotish measures the signs against the fixed stars, the sidereal zodiac, which trails the season-based tropical zodiac of Western astrology by about 24 degrees. Each sign has a ruler among the grahas, and that ruler is the lord of any house the sign falls on.",
        },
        {
          type: "table",
          head: ["Sign", "Sanskrit name", "Ruled by", "In brief"],
          rows: [
            ["Aries", "Mesha", "Mars", "Initiative and drive"],
            ["Taurus", "Vrishabha", "Venus", "Steadiness and comfort"],
            ["Gemini", "Mithuna", "Mercury", "Curiosity and exchange"],
            ["Cancer", "Karka", "Moon", "Care and feeling"],
            ["Leo", "Simha", "Sun", "Warmth and visibility"],
            ["Virgo", "Kanya", "Mercury", "Detail and service"],
            ["Libra", "Tula", "Venus", "Balance and relating"],
            ["Scorpio", "Vrischika", "Mars", "Depth and intensity"],
            ["Sagittarius", "Dhanu", "Jupiter", "Search and belief"],
            ["Capricorn", "Makara", "Saturn", "Structure and patience"],
            ["Aquarius", "Kumbha", "Saturn", "Detachment and groups"],
            ["Pisces", "Meena", "Jupiter", "Imagination and release"],
          ],
          icons: ["sign-aries", "sign-taurus", "sign-gemini", "sign-cancer", "sign-leo", "sign-virgo", "sign-libra", "sign-scorpio", "sign-sagittarius", "sign-capricorn", "sign-aquarius", "sign-pisces"],
        },
        {
          type: "p",
          text: "A planet in a chart is read in layers. The planet is the theme, the sign is the manner in which the theme is expressed, and the house is the area of life where it shows up. Venus in Libra in the seventh house is a short example. Venus stands for love and partnership. Libra is a sign Venus itself rules, which tradition reads as a comfortable setting. The seventh house is the house of partnership. All three point at the same area.",
        },
        {
          type: "p",
          text: "Then the lord of the house is followed. If the lord of the seventh house sits in the tenth, tradition reads a link between partnership and work, and a conversation can follow that thread by asking how the two areas press on each other. The link is a prompt for a question.",
        },
      ],
    },
    {
      id: "divisional",
      chip: "Divisional charts",
      heading: "Divisional charts: D1, D9, D10 and the rest",
      icon: "astro-divisional-charts",
      blocks: [
        {
          type: "p",
          text: "A divisional chart cuts each sign into equal parts and redraws the chart from them, to look more closely at one area of life. They are named with a D and the number of parts.",
        },
        {
          type: "terms",
          items: [
            {
              term: "D1, the main chart",
              text: "The chart of the sky at the moment of birth, with the signs, houses and planets described above. Every reading starts here, and the other charts are read against it.",
              icon: "group-chart",
            },
            {
              term: "D9, the navamsa",
              text: "Each sign is cut into nine parts of 3 degrees 20 minutes. It is read for marriage and dharma, and for the inner strength of each planet, and it gives a second look at what D1 shows about partnership.",
              icon: "astro-navamsa",
            },
            {
              term: "D10, the dashamsa",
              text: "Each sign is cut into ten parts of 3 degrees. It is read for profession and public role, and for what you contribute through your work.",
              icon: "astro-dashamsa",
            },
          ],
        },
        {
          type: "p",
          text: "The classical scheme lists sixteen divisional charts in all, called the *shodashavarga*. Others include D7, read for children, D16, for vehicles, D24, for education, and D60, for deep-rooted patterns. A reading usually takes D1 with one or two of them, chosen by the question. Because each is cut so fine, they are the first to change when a birth time is a few minutes out.",
        },
      ],
    },
    {
      id: "yogas",
      chip: "Yogas",
      heading: "Yogas: named combinations of planets",
      icon: "astro-yoga",
      blocks: [
        {
          type: "p",
          text: "A *yoga* is a named combination in a chart: planets linked by position, by the houses they rule, or by the way they look at one another. The classical texts list a great many, and each has a traditional label and a traditional meaning.",
        },
        {
          type: "list",
          title: "Three examples, in plain terms",
          items: [
            "Gajakesari: Jupiter in a corner house, counted from the Moon. Tradition links it with learning, good counsel and a good name.",
            "Raja yoga: a link between the lord of a corner house and the lord of a triangle house. Tradition links it with standing and responsibility.",
            "The five Mahapurusha yogas: Mars, Mercury, Jupiter, Venus or Saturn in its own or its exalted sign, in a corner house from the lagna. Each has its own name and is linked with a strong expression of that planet’s theme.",
          ],
        },
        {
          type: "p",
          text: "None of these is a promise. The rest of the chart can weaken or strengthen a combination, and traditions disagree about the conditions. The classical texts speak of yogas in strong terms. Narayani reads them as descriptions of a theme that is available to you, and nothing in a reading depends on any one of them. No chart shows that a yoga guarantees wealth or status, or that a ritual is needed to activate one.",
        },
      ],
    },
    {
      id: "how-she-reads",
      chip: "Her way of reading",
      heading: "How she reads a chart around a question",
      icon: "astro-question-chart",
      blocks: [
        {
          type: "p",
          text: "A chart holds far more than any one question needs. Reading all of it aloud, house by house, would bury the thing you came to ask. So the reading follows an order.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Your question comes first",
              text: "She asks what you are asking, why now, and what you have already tried. The same chart is read differently for a question about work than for one about a relationship.",
              icon: "gen-listen",
            },
            {
              title: "The frame is checked",
              text: "How sure the birth time is, then the lagna, the Moon sign and the Moon’s nakshatra. If the time is shaky, she says which parts of the reading lean on it.",
              icon: "astro-birth-time",
            },
            {
              title: "The parts your question touches",
              text: "The houses, their lords and the grahas that bear on the question, and a divisional chart where one fits: D9 for partnership, D10 for work.",
              icon: "astro-aspect",
            },
            {
              title: "The period you are in",
              text: "The dasha running now, and where the slow planets stand. This is where a reading meets timing, and the dashas and transits page explains that part.",
              icon: "astro-mahadasha",
            },
            {
              title: "The reasoning, and your part in it",
              text: "She explains why each point matters and what it does not show. Where a remedy would add something, she says what it is for and when to stop it, and the page on astrology remedies covers the kinds. The decision stays with you.",
              icon: "gen-explain",
            },
          ],
        },
        {
          type: "p",
          text: "A first reading follows this same order, and it can stay with one concern. Where the chart cannot answer something, she says so instead of stretching it to fit.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she reads first in your chart",
    icon: "astro-sky-moment",
    items: [
      { icon: "gen-four-areas", text: "Which area of life the question sits in, and so which houses it touches" },
      { icon: "astro-antardasha", text: "The main period and sub-period running now, and the one that follows" },
      { icon: "astro-transit", text: "Where Saturn and Jupiter stand against your chart at present" },
      { icon: "astro-recurring-obstacle", text: "Any pattern that shows in more than one place in the chart, and more than one stretch of your life" },
      { icon: "brain-belief", text: "Any belief or habit that gathers around the question, since that part is yours to work on" },
    ],
  },
  bring: {
    heading: "Before a chart reading: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-focus", text: "The question you want the chart read around, and the area of life it sits in" },
      { icon: "gen-bring-name", text: "Your date of birth as it stands on your records: a wrong day moves the Moon far more than a wrong hour" },
      { icon: "gen-time", text: "The time of birth, as exact as you can make it, and its source: a certificate, a hospital record or family memory" },
      { icon: "astro-birth-place", text: "The place of birth, town and state, since the chart is cast for the sky above that spot" },
      { icon: "habit-evidence", text: "If the time is a guess, a few dated events from your life to test it against: a wedding, a move, a new job" },
    ],
  },
  faqs: [
    {
      q: "What is a kundli, and how is it different from a Sun-sign forecast?",
      a: "A kundli is your own chart, and a Sun-sign forecast is a single line written for everyone born under one Sun sign. The forecast uses one fact, roughly the month of birth, so about a twelfth of all people receive the same words. A kundli uses the day, hour and place together. Two people born on the same day, at different times or in different towns, can hold very different charts. The opening of this page lists what a kundli contains.",
    },
    {
      q: "Can my chart show my purpose in life?",
      a: "Not as an answer. Tradition links the ninth house with dharma, the tenth with work and the Moon with the mind, so a reader can point to themes that recur. Those are prompts, and the astrology page sets out what the research does and does not show. Narayani uses them to ask what keeps drawing you back, what has felt like yours, and what you want to do about it now. The purpose is yours to name.",
    },
    {
      q: "What do readers point to when they talk about past-life patterns?",
      a: "Three things, mostly: the axis of Rahu and Ketu and the houses it falls across, a prominent or strained Saturn, and retrograde planets. Readers take them as pointers to patterns that seem to return, and call them karmic. Take that as a way of speaking about habit. It makes no finding about earlier lives. The useful reading is plainer: which theme comes back in your own life, and what you would do with it now.",
    },
    {
      q: "Which houses show marriage?",
      a: "The seventh house, the house of partnership, is read first, with its lord and with Venus. The navamsa chart, D9, comes next, because tradition regards it as the finer picture of marriage. The second house, for family, and the eleventh, for gains and friendship, are sometimes added. Narayani uses these to talk about what marriage means to you and what the present period asks. She does not name a date or promise a match.",
    },
    {
      q: "What shows career in a chart?",
      a: "The tenth house, the house of livelihood and standing, comes first, with its lord. The second and eleventh are read for earnings and gains, the seventh for partners and contracts, and the sixth for service. The dashamsa chart, D10, adds a closer look at work. Planets add colour: Mercury for trade and accounts, Saturn for long structured work, Jupiter for teaching and advice. This is a prompt to discuss strengths and timing. It forecasts no promotion or profit, and money decisions rest with qualified professionals.",
    },
    {
      q: "Does a reading tell me what is going to happen?",
      a: "No. A chart describes periods and themes, and a reading looks at what the present period asks of you and which options it brings into view. Narayani gives no dates for events and no verdicts about people. What you take from the reading, and what you do next, are for you to weigh against your own life. The astrology page covers what the research says about prediction.",
    },
    {
      q: "What if I do not know my birth time?",
      a: "Say so at the start. Three routes exist: rectification from dated life events, a chart drawn for the moment of your question, and a reading kept to what the day and place can support. With only a date, the Moon’s nakshatra stays unsettled on almost every day, so that last reading is narrower than people expect. It is worth searching for a birth certificate or hospital record before trying any of them. The rectification section above and the page on readings without birth details say more.",
    },
    {
      q: "What does a retrograde planet mean in a chart?",
      a: "Retrograde means a planet appears, from Earth, to move backward against the stars for a while. It comes from the way orbits line up, and the planet itself does not change. Readers differ on what it means in a chart. Some read the planet’s theme as turning inward or returning for a second look, and some count it among the pointers to repeating patterns. The Sun and Moon are never retrograde, and Rahu and Ketu are counted as always moving backward. No reading rests on this alone.",
    },
    {
      q: "Who should have a detailed chart reading?",
      a: "A chart reading suits someone whose question has time in it: a decision still open, a change under way, a stretch that has gone on a long while. It is a poor fit for anyone hoping for a date, a guarantee or a ruling on another person, since a chart gives none of these. A small question can still be a good reason to ask, because the reading follows the question and need not cover the whole chart.",
    },
    {
      q: "What does a first reading cover, and can it stay with one concern?",
      a: "It can stay with one concern. The reading begins with your question, checks how sure the birth time is, looks at the houses and planets the question touches, and places it in the period you are in. The option you choose sets how much ground it can cover, and the fees on this page list the options. If a remedy would add something, she explains it, and the dashas and transits page covers the timing.",
    },
  ],
  related: [
    "/services/astrology/dashas-and-transits/",
    "/services/astrology/nakshatras/",
    "/services/astrology/specific-issue-reading/",
    "/services/astrology/reading-without-birth-details/",
  ],
  showFees: true,
};
