import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "dashas-and-transits",
  title: "Dashas and transits: reading the timing",
  metaTitle: "Dashas, transits and Sade Sati in Jyotish",
  metaDescription: "How Jyotish reads timing: the Vimshottari dasha cycle, the moving sky of transits, Sade Sati explained calmly, and how the two are read together.",
  lead: "Jyotish reads timing in two layers: the long cycle of periods you carry from birth, and the sky as it moves now. Narayani reads both as themes to think with, never as verdicts.",
  card: "When you want to understand a long stretch, a decision window or a run of difficulty.",
  icon: "page-dashas-and-transits",
  group: "chart",
  covers: [
    "Vimshottari dasha, 120 years",
    "Mahadasha and antardasha",
    "Saturn, Jupiter and the nodes",
    "Sade Sati, explained calmly",
    "Dasha and transit together",
    "Choosing a date: muhurta",
    "Questions about timing",
  ],
  art: { kind: "timeline" },
  enquiryTopic: "Astrology: dashas and transits",
  cta: "Enquire about dashas and transits",
  intro: [
    {
      type: "p",
      text: "Many of the questions that bring someone to a chart are questions about time: when a heaviness might lift, whether this is the year to move, why the last two years have gone the way they have. Jyotish answers with two clocks, and it helps to know which one is being read.",
    },
    {
      type: "p",
      text: "The first is the *dasha*, a long cycle of planetary periods that begins at your birth and runs through your life. The second is the *transit*, or *gochar*, the planets’ movement across the sky now. The dasha is the season you carry with you. The transit is the sky above you today. Narayani reads each as a theme, and then reads the two together.",
    },
    {
      type: "p",
      text: "Neither clock forecasts events. This page explains how both work, so that a reading about timing is something you can follow, question and test against your own life.",
    },
  ],
  sections: [
    {
      id: "two-clocks",
      chip: "Two clocks",
      heading: "Two clocks, and how they differ",
      icon: "gen-time",
      blocks: [
        {
          type: "table",
          head: ["Compared", "Dasha", "Transit (gochar)"],
          rows: [
            ["Set by", "The Moon’s nakshatra at your birth", "The planets’ positions in the sky today"],
            ["Read against", "Your birth chart, as a calendar of periods", "Your birth chart, usually counted from your Moon sign"],
            ["Moves in", "A main period lasts 6 to 20 years, and a sub-period runs from a few months to over three years", "A little over two days in each sign for the Moon, about a year for Jupiter, about two and a half years for Saturn"],
            ["Good for", "The long season: which themes are in the foreground", "The present weather inside that season"],
            ["Same for everyone?", "No. It starts differently for each birth", "The sky is shared. What it touches in your chart is personal"],
          ],
        },
      ],
    },
    {
      id: "vimshottari",
      chip: "Vimshottari",
      heading: "The Vimshottari dasha: 120 years, nine periods",
      icon: "astro-dasha-cycle",
      blocks: [
        {
          type: "p",
          text: "Vimshottari is the most widely used dasha system, and the classical text called Brihat Parashara Hora Shastra rates it highest. A cycle of 120 years is shared among the nine grahas in a fixed order, each with a fixed length. You do not live through all of it. You step into the cycle at the point your birth sets.",
        },
        {
          type: "table",
          head: ["Period", "Years", "Themes tradition links with it"],
          rows: [
            ["Ketu", "7", "Detachment, turning inward"],
            ["Venus", "20", "Love, comfort and the arts"],
            ["Sun", "6", "Self, authority and vitality"],
            ["Moon", "10", "Mind, feeling and nurture"],
            ["Mars", "7", "Drive, effort and conflict"],
            ["Rahu", "18", "Worldly desire, the appetite for more"],
            ["Jupiter", "16", "Learning, guidance and fortune"],
            ["Saturn", "19", "Discipline, limits and long effort"],
            ["Mercury", "17", "Speech, trade and intellect"],
          ],
          caption: "The order is fixed, and the years add up to 120.",
          icons: ["graha-ketu", "graha-venus", "graha-sun", "graha-moon", "graha-mars", "graha-rahu", "graha-jupiter", "graha-saturn", "graha-mercury"],
        },
        {
          type: "p",
          text: "The order matches the nakshatras. Every nakshatra has one of these nine as its lord, and whichever lord belongs to the star the Moon occupied when you were born rules the period you are born into. The nakshatras page lists the 27 with their lords.",
        },
        {
          type: "p",
          text: "You do not begin that period at its start. The balance depends on how much of the nakshatra the Moon had already crossed. If the Moon was in Rohini, whose lord is the Moon, with a quarter of Rohini behind it, three quarters of the ten-year Moon period remained at birth. The first period then lasted seven and a half years, and the Mars period followed.",
        },
        {
          type: "terms",
          title: "The levels of a dasha",
          items: [
            {
              term: "Mahadasha",
              text: "The main period, as in the table: seven years of Ketu, twenty of Venus, and so on. It sets the broad theme.",
              icon: "astro-mahadasha",
            },
            {
              term: "Antardasha",
              text: "A sub-period inside a main period. Each main period is shared among all nine grahas in the same order, starting with its own lord, and a sub-period lasts the main years times the sub-period years, divided by 120. Saturn’s main period with a Venus sub-period is 19 times 20 over 120, about three years and two months.",
              icon: "astro-antardasha",
            },
            {
              term: "Finer levels",
              text: "The pratyantardasha splits each sub-period once more, and the levels below it repeat the pattern, down to a few days. Because a birth time out by a quarter of an hour shifts every date by weeks, the finer the level, the less far its dates can be trusted.",
              icon: "astro-focus",
            },
          ],
        },
        {
          type: "p",
          text: "Other systems exist, including Ashtottari, which runs a cycle of its own, and the sign-based Chara dasha of the Jaimini school. Practitioners also differ on the length of a year, 365.25 days or 360, a gap that drifts by about six months over 35 years. It is fair to ask which system and year length a reading uses.",
        },
      ],
    },
    {
      id: "reading-a-period",
      chip: "Reading a period",
      heading: "How a period is read, as a theme to think with",
      icon: "astro-aspect",
      blocks: [
        {
          type: "p",
          text: "A period is read through its graha: where that planet sits in your chart, which houses it rules, which planets it is joined to, and what it stands for. Together these give the themes the period brings forward.",
        },
        {
          type: "p",
          text: "Take someone with Taurus as the lagna who is running a Mercury period. Mercury rules the second and fifth houses for this person, and suppose it sits in the seventh. The themes of the period are then speech, money, learning and children, worked out through partnership. That does not say what occurs. It says where to look, and the question worth asking is how money and partnership press on each other in this stretch.",
        },
        {
          type: "p",
          text: "Tradition calls some periods demanding, usually when the graha is strained in the chart or rules houses that tradition counts as difficult. It adds that results depend on the whole chart, and every chart holds periods of both kinds. A demanding period is an ordinary part of any cycle, and its sub-periods often change its tone partway through.",
        },
        {
          type: "p",
          text: "A period ends on a date in a table. That date marks a change of emphasis in a reading, and it predicts no event.",
        },
      ],
    },
    {
      id: "transits",
      chip: "Transits",
      heading: "Transits: the moving sky against your chart",
      icon: "astro-transit",
      blocks: [
        {
          type: "p",
          text: "A transit is where a planet stands in the sky today, read against your birth chart. The traditional rules, called gochar, count houses from your natal Moon sign. Saturn moving through the fourth sign from your Moon is read as a fourth-house transit, whatever your lagna is. A set of obstruction rules, called *vedha*, then adjusts how a transit is read.",
        },
        {
          type: "list",
          title: "How long each stays in one sign",
          items: [
            "Saturn: about two and a half years in each sign, and about 29.4 years to circle the zodiac.",
            "Jupiter: about a year in each sign, and about 12 years for the full circle.",
            "Rahu and Ketu: about a year and a half in each sign, and 18.6 years for the full circle, moving backward.",
            "The Moon: about two and a quarter days in each sign, and about 27 days for the circle. Tradition reads the Moon’s transit for the mood of a few days, which is why it is used for short-term timing and for choosing a date.",
          ],
        },
        {
          type: "p",
          text: "The slow planets carry the long themes. Jupiter is linked in tradition with growth and guidance, so its passage through a house is read as an opening in that area. Saturn is linked with discipline and review, so its passage is read as a call for structure there. Rahu and Ketu, linked with appetite and release, are read as a pull toward or away from the area they cross.",
        },
        {
          type: "p",
          text: "A transit is a prompt for a question. Narayani uses it to look at what an area of your life is asking for right now, and what you can do about it with the time you have.",
        },
      ],
    },
    {
      id: "sade-sati",
      chip: "Sade Sati",
      heading: "Sade Sati, explained calmly",
      icon: "astro-sade-sati",
      blocks: [
        {
          type: "p",
          text: "*Sade Sati* means seven and a half. It is the long spell during which Saturn moves through three signs in a row: the one before your Moon sign, the Moon sign itself and the one after. Each phase takes about two and a half years. Some practitioners count it by a 45-degree window on either side of the Moon’s position at your birth instead of by whole signs, so two practitioners can give different dates for the same person.",
        },
        {
          type: "p",
          text: "It comes round about every 29 to 30 years, so anyone who reaches old age has met it more than once. It fills about a quarter of Saturn’s circuit, which means roughly one person in four is inside one at any moment. It is a common stretch.",
        },
        {
          type: "p",
          text: "Because Saturn stands for discipline, limits and long effort, the tradition reads these years as a time of testing and review: of responsibilities, structures and whatever has been put off. Summaries of the tradition also describe it as a time of achievement and recognition. Experience varies a great deal, and no evidence tying Sade Sati to specific events has been found.",
        },
        {
          type: "p",
          text: "A related period of roughly two and a half years is counted when Saturn is in the fourth or the eighth sign from the Moon sign, and practitioners give it less weight. They also disagree about how much weight Sade Sati itself deserves: some regard it as a major theme and some as a footnote. Narayani gives it neither a dramatic reading nor a dismissive one. She looks at where Saturn sits in your chart, what your running period says, and what is actually going on in your life.",
        },
        {
          type: "list",
          title: "What people do during it",
          items: [
            "Nothing in particular, which is a common and reasonable choice.",
            "A small steady practice, such as a Saturday routine or an hour of service to people who work with their hands.",
            "A closer look at commitments: what to finish, what to set down and what to pace.",
            "A conversation about the fear itself, when the fear is the heavy part.",
          ],
        },
        {
          type: "p",
          text: "Sade Sati is no reason to buy a remedy, and no reason to defer a medical, legal or financial decision.",
        },
      ],
    },
    {
      id: "together",
      chip: "Together",
      heading: "Reading dasha and transit together to ask when",
      icon: "astro-two-clocks",
      blocks: [
        {
          type: "p",
          text: "The dasha shows which themes are in the foreground. The transit shows what the sky is doing to the areas of your chart right now. Practitioners look for agreement between them: when the houses a running period emphasises are also the houses a slow planet is crossing, that area becomes the subject of the reading.",
        },
        {
          type: "p",
          text: "Suppose a Venus period is running and Venus rules the seventh house in the chart, and suppose Jupiter is passing through the seventh sign from the Moon. Both clocks point at partnership, so partnership is where the reading spends its time, asking what the stretch is asking of you and what is yours to do. When the clocks point at different areas the picture is mixed, and a careful reader says so.",
        },
        {
          type: "p",
          text: "This is how Narayani answers “when”. She gives a window and no date: a stretch in which a theme is in the foreground, with the dates in the table at which the emphasis shifts. A window is a way of speaking, and it promises nothing about what occurs inside it.",
        },
      ],
    },
    {
      id: "muhurta",
      chip: "Choosing a date",
      heading: "Choosing a date: muhurta in brief",
      icon: "astro-muhurta",
      blocks: [
        {
          type: "p",
          text: "*Muhurta* is the tradition of choosing a favourable time for something you have already decided to do: a housewarming, a signing, the opening of a business. It draws on the *panchang*, the traditional almanac of the day, and on your own chart.",
        },
        {
          type: "list",
          title: "The five limbs of the panchang",
          items: [
            "Tithi: the lunar day, 30 in a lunar month.",
            "Vara: the weekday, each ruled by a graha.",
            "Nakshatra: the Moon’s star for the day, one of 27.",
            "Yoga: one of 27 divisions of the Sun’s and Moon’s combined movement.",
            "Karana: half a tithi, 60 in a lunar month.",
          ],
        },
        {
          type: "p",
          text: "A date is checked against your own chart as well. A muhurta is a choice among dates for a decision already made. It cannot make an unready decision ready, and it is no key to wealth or success. It says nothing about price, loans, title or the quality of construction, and those belong with qualified professionals.",
        },
      ],
    },
    {
      id: "in-practice",
      chip: "In practice",
      heading: "What she does with timing",
      icon: "gen-listen",
      blocks: [
        {
          type: "p",
          text: "People bring timing questions in three common shapes.",
        },
        {
          type: "terms",
          items: [
            {
              term: "A long stretch",
              text: "A stretch that has gone on for years. A dasha gives the years a shape: a period that began, a sub-period that changes its tone, a date at which the emphasis moves. Seeing the shape does not shorten the stretch, though it can help you plan how to carry it.",
              icon: "astro-stalled-project",
            },
            {
              term: "A decision with room to move",
              text: "A change of work, a move, a launch. Windows can help you choose among dates and ask what the present period supports, and the practical facts are weighed first.",
              icon: "astro-stream-choice",
            },
            {
              term: "A run of difficulty",
              text: "When things have gone badly for a while she looks at two things: what is in the foreground in the chart, and which of your own habits and beliefs may be feeding the loop. The second is where Brain Training begins.",
              icon: "astro-recurring-obstacle",
            },
          ],
        },
        {
          type: "note",
          text: "When a hard stretch begins to affect your sleep, mood, health or safety, a doctor or a mental health professional is the first call, and a reading can wait.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she checks when the question is timing",
    icon: "astro-sky-moment",
    items: [
      { icon: "gen-calendar", text: "The date your current main period began and the date the next one begins" },
      { icon: "astro-jupiter-transit", text: "Where Jupiter and the nodes stand against your Moon sign now" },
      { icon: "astro-question-chart", text: "The houses your question touches, and how the running period connects to them" },
      { icon: "brain-belief", text: "The belief or habit that makes a long stretch heavier than it needs to be" },
      { icon: "astro-no-remedy", text: "Whether any practice would add something to the stretch you are in" },
    ],
  },
  bring: {
    heading: "For a question about timing: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Your birth details in full, since the whole dasha table is built from them" },
      { icon: "gen-explain", text: "The question about time, stated plainly: a decision, a stretch, a date you are weighing" },
      { icon: "habit-evidence", text: "When the stretch began, and what changed around then" },
      { icon: "astro-rectification", text: "Any doubt about the birth time, since a dasha date can move by weeks" },
    ],
  },
  faqs: [
    {
      q: "Can a dasha be changed?",
      a: "No. The cycle is arithmetic from your Moon’s nakshatra at birth, so the periods and their dates are fixed. A wrong date can only come from a wrong input, such as a doubtful birth time. What you can change is how you meet a period. Where a remedy is offered, it is a practice you choose, and none is claimed to alter the table.",
    },
    {
      q: "Is a bad dasha a bad life?",
      a: "No. “Bad dasha” is shorthand for a period that tradition calls demanding, and every chart holds easy periods and demanding ones. Tradition itself says results depend on the whole chart and not on one graha, and a demanding period has sub-periods that change its tone. A period is a theme to understand, and nothing in it has to be served out like a sentence.",
    },
    {
      q: "How accurate is timing in Jyotish?",
      a: "Less precise than most people hope. So far as is known, dasha and transit timing has never been tested under controlled conditions. Practitioners also work with different systems and year lengths, and a birth time that is 15 minutes out shifts every dasha date by roughly 3 to 11 weeks. Narayani offers windows in place of dates and says plainly what a reading cannot know. Be cautious about any exact date from a chart, whoever gives it.",
    },
    {
      q: "Why is Saturn feared, and is a hard Saturn period a punishment?",
      a: "Saturn stands for discipline, limits and time, and it moves slowly, so its periods run long and are hard to miss. Popular tellings turned that into a fear of punishment, yet the tradition’s own list for Saturn also includes patience, service and long effort. In Indian numerology it is also the planet of the number 8. Narayani reads a hard stretch under Saturn as a request for structure, and looks at what in your life is asking for it.",
    },
    {
      q: "What is the Saturn return?",
      a: "Saturn takes about 29.4 years to circle the zodiac, so it comes back to the sign it held at your birth at around 29 to 30 years of age, and again near 59. The name Saturn return comes from Western astrology. Jyotish counts Saturn’s passages from the Moon sign instead, which is where Sade Sati comes from. Either way, it marks a point in the calendar and says nothing about what happens.",
    },
    {
      q: "What do this year’s planetary movements mean for my sign?",
      a: "A forecast for a whole sign gives everyone born under it the same reading. Jyotish reads transits from your Moon sign, against your whole chart and the dasha running, so the same movement can sit very differently on two people of one sign. Year-ahead articles can give a general sense of the sky’s mood. For your own year, a reading looks at your chart and your question.",
    },
    {
      q: "Should I delay a decision because a period looks hard?",
      a: "Not on that ground alone. A period is one input, and the practical facts come first: the money, the papers, the people involved and your own readiness. A decision that is ready does not need a date to bless it, and one that is not ready is not helped by a date. Where you have room to choose, a window can help you pick among dates. Qualified professionals advise on money and law.",
    },
  ],
  related: [
    "/services/astrology/birth-chart-reading/",
    "/services/astrology/nakshatras/",
    "/services/astrology/property-and-big-decisions/",
    "/services/astrology/astrology-remedies/",
  ],
  showFees: true,
};
