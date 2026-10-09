import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "kundali-matching",
  title: "Kundali matching and the 36 points",
  metaTitle: "Kundali matching and Guna Milan",
  metaDescription:
    "Kundali matching explained: the eight kootas and 36 points, how a score is read, Nadi, Bhakoot and Manglik, and why a score alone is never a verdict.",
  lead: "Understand what the 36-point match includes and what a total can miss. A chart comparison is one traditional perspective, not a decision about your relationship.",
  card: "When two people or two families want their charts compared before deciding.",
  icon: "page-kundali-matching",
  group: "relationships",
  covers: [
    "The eight kootas and 36 points",
    "How a score is read",
    "Nadi, Bhakoot and Manglik",
    "Chart read against chart",
    "Love and arranged marriages",
    "Couples already together",
  ],
  art: { kind: "drawing", id: "hero-kundali-matching" },
  enquiryTopic: "Astrology: kundali matching",
  cta: "Enquire about kundali matching",
  intro: [
    {
      type: "p",
      text: "Before many weddings, a family asks for the two charts to be matched. Two sets of birth details go in, a number out of 36 comes back, and that number can end up carrying a decision it was never built to carry.",
    },
    {
      type: "p",
      text: "After the score come the two charts side by side: the seventh houses, the two Moons, the periods each person is moving through, and the places where two temperaments are likely to rub. The couple decides what to do with it, even when parents are closely involved.",
    },
  ],
  sections: [
    {
      id: "what-matching-is",
      chip: "What it is",
      heading: "Two charts compared, with the Moon at the centre",
      icon: "group-relationships",
      blocks: [
        {
          type: "p",
          text: "In Jyotish, matching compares the charts of two people who may marry. It is called *kundli milan*, and its best-known part is *guna milan* (also written gun milan), a points system known as Ashtakoota, the eight-fold match. It is the method in common use across North India.",
        },
        {
          type: "p",
          text: "Ashtakoota works almost entirely from the Moon: each person’s Moon sign (*rashi*) and Moon star (*nakshatra*), the lunar mansion the Moon stood in at birth. Tradition reads the Moon as mind and feeling, so a comparison of two Moons is read as a comparison of how two people respond. Because it leaves out the rising sign, it tolerates a birth time that is a little off better than most other parts of a chart reading. A birth time that is missing altogether is a different matter.",
        },
        {
          type: "p",
          text: "Much of South India uses a different method, the ten *poruthams*. Each is mostly read as a match or no match, with no score. The two systems ask different questions, so they can read the same pair differently.",
        },
      ],
    },
    {
      id: "kootas",
      chip: "The eight kootas",
      heading: "Eight kootas, and what each one looks at",
      icon: "astro-koota-score",
      blocks: [
        {
          type: "p",
          text: "A koota is one angle of comparison. Each carries a set number of points, and the eight values simply run from one to eight, which is why they add up to 36.",
        },
        {
          type: "table",
          head: ["Koota", "Points", "What it looks at"],
          rows: [
            [
              "Varna",
              "1",
              "A scale of temperament and ego, using the four old class names. In matching it is read as temperament only, never as rank of any kind.",
            ],
            ["Vashya", "2", "How far each person tends to sway the other: who leads, who gives way, and whether that suits both."],
            [
              "Tara",
              "3",
              "How well the two birth stars sit together. The stars are counted off in groups of nine, and each group is read as supportive or testing.",
            ],
            ["Yoni", "4", "Instinctive ease, drawn from fourteen animal symbols given to the nakshatras."],
            [
              "Graha Maitri",
              "5",
              "Whether the lords of the two Moon signs are friends, neutral or opposed, read as how easily two minds meet.",
            ],
            [
              "Gana",
              "6",
              "Temperament in three types, Deva, Manushya and Rakshasa, loosely gentle, mixed and forceful. The names are old labels for temperaments, and they pass no judgement on anyone’s character.",
            ],
            [
              "Bhakoot",
              "7",
              "How the two Moon signs lie from one another. The pairings tradition flags are the sixth and eighth, the second and twelfth, and the fifth and ninth places counted from each other.",
            ],
            [
              "Nadi",
              "8",
              "Three classes, Adi, Madhya and Antya, given by birth star. Two people in the same class is the pairing tradition flags. Commentators explain its purpose in different ways, and it is not read here as a statement about anyone’s health.",
            ],
          ],
          icons: [
            "koota-varna",
            "koota-vashya",
            "koota-tara",
            "koota-yoni",
            "koota-graha-maitri",
            "koota-gana",
            "koota-bhakoot",
            "koota-nadi",
          ],
        },
        {
          type: "p",
          text: "These weights follow the tradition’s convention, and they do not measure how much each matters in a marriage. Nadi carries eight points and Bhakoot seven, which is why a zero in either one can pull a total down so sharply.",
        },
      ],
    },
    {
      id: "reading-a-score",
      chip: "Reading a score",
      heading: "How a score is read, and why a total is not enough",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "Eighteen out of 36 is the traditional minimum for going ahead. One widely published set of bands calls 18 to 24 acceptable, 25 to 32 very good and 33 to 36 excellent, and other sources draw the edges in different places. Below 18, the traditional advice is not to go ahead.",
        },
        {
          type: "p",
          text: "A total is a sum, and a sum hides what supplied it. Take two pairs, invented for the example, who both score 21.",
        },
        {
          type: "table",
          head: ["Where the points come from", "Pair A", "Pair B"],
          rows: [
            ["Bhakoot and Nadi (15 points available)", "0", "15"],
            ["The other six kootas (21 points available)", "21", "6"],
            ["Total", "21", "21"],
          ],
        },
        {
          type: "p",
          text: "Pair A has full marks on the six smaller kootas and nothing on Bhakoot and Nadi, the two kootas that tradition flags. Pair B has full marks on Bhakoot and Nadi and little ease in the other six. The totals match and both reach the 18 minimum, yet the two pairs need very different conversations. So Narayani reads a score as a list of questions: which kootas gave nothing, and what would that mean for these two people?",
        },
      ],
    },
    {
      id: "beyond-the-points",
      chip: "Beyond the points",
      heading: "What she reads beyond the points",
      icon: "astro-aspect",
      blocks: [
        {
          type: "p",
          text: "The score uses only the Moon. A fuller matching reads both charts as wholes, and the two lives behind them. Manglik balance, the other chart-to-chart check, comes up in the next section with the other flags.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The seventh houses",
              text: "Each person’s house of partnership, its lord and the planets in it, read side by side for what each expects of a marriage and how each tends to meet commitment.",
              icon: "house-7",
            },
            {
              term: "The two dasha timelines",
              text: "The planetary period each person is in, and whether two periods that tradition calls testing overlap, in the first years of a marriage for instance.",
              icon: "astro-mahadasha",
            },
            {
              term: "The navamsa",
              text: "Built from the ninth parts of every sign, one chart for each person, read for what each brings to a marriage and how steady the planets are inside it.",
              icon: "astro-navamsa",
            },
            {
              term: "Temperament and talk",
              text: "The two Moons read as people: what settles each of them, what unsettles them, and how each argues, withdraws or goes quiet. This is checked against how the two of you describe yourselves.",
              icon: "brain-words",
            },
            {
              term: "Family and money",
              text: "What each family expects of the marriage, and how each of you was brought up to think about money. This is a conversation about habits that makes no forecast of income, and it is not financial advice.",
              icon: "astro-family",
            },
            {
              term: "Where friction is likely",
              text: "The points at which the two charts pull in different directions, named plainly so that the two of you can decide in advance how to handle them.",
              icon: "astro-dispute",
            },
          ],
        },
        {
          type: "p",
          text: "A named friction point is useful only if it leads to a decision. What couples do about one is ordinary and practical: agreeing who handles money, how often to see each set of parents, how long to wait before talking after an argument.",
        },
      ],
    },
    {
      id: "doshas",
      chip: "Doshas",
      heading: "Doshas in a match, and the exceptions",
      icon: "gen-caution",
      blocks: [
        {
          type: "p",
          text: "A dosha, in matching, is a pairing that tradition marks as needing a closer look. Three come up most often. Nadi is flagged when both people fall in the same class, and Bhakoot when the two Moon signs stand in one of the flagged pairings in the table above. Manglik balance is flagged when Mars stands in a counted house in one chart and not in the other. A flag asks for a closer look, though families sometimes hear it as a verdict.",
        },
        {
          type: "list",
          title: "Exceptions that traditions describe",
          items: [
            "Nadi: often set aside when the Moon signs match but the stars differ, or when the stars match but fall in different quarters, called padas.",
            "Bhakoot: often set aside when the lords of the two Moon signs are the same planet or are friends.",
            "Manglik: usually set aside when both charts carry the placement. The Marriage page lists the other exceptions.",
          ],
        },
        {
          type: "p",
          text: "Lists of exceptions differ from teacher to teacher, and some accept fewer than others. Writers inside the tradition have also warned against refusing a match on a score or a flag alone.",
        },
        {
          type: "p",
          text: "For any flag, Narayani asks what it is flagged for, what that would mean in these two lives and whether an exception applies. What remains is a conversation about what the couple would do with it.",
        },
      ],
    },
    {
      id: "evidence",
      chip: "Research",
      heading: "What research has found about matching",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "Matching is a tradition, and the research on it is thin. No controlled, blinded test of Ashtakoota or of Manglik was found. A few small, uncontrolled surveys of couples exist, a 2020 survey of 19 couples among them, and they cannot support a claim either way.",
        },
        {
          type: "p",
          text: "The nearest evidence concerns compatibility in general. A large study of Swedish population records tested Western-style compatibility and found no consistent link with marriage or divorce. The Astrology page covers controlled tests of chart reading in general.",
        },
        {
          type: "p",
          text: "So Narayani offers matching as a structure for conversation: a way for two people, and the families around them, to talk through how each tends to respond and what each family expects. A high score does not promise a happy marriage, and a low one does not promise an unhappy one.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she reads when two charts meet",
    icon: "astro-yoga",
    items: [
      { icon: "graha-moon", text: "How the two Moons stand to each other, by sign and by star" },
      { icon: "astro-manglik", text: "Any Mars placement tradition counts, and whether the usual exceptions apply" },
      { icon: "astro-antardasha", text: "Whether two periods that tradition calls testing overlap for the two of you" },
      { icon: "gen-parents", text: "What each of you, and each family, expects of the marriage" },
      { icon: "brain-reaction", text: "How the two of you already handle disagreement" },
    ],
  },
  bring: {
    heading: "Before a matching: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "Birth details for both of you, each with a date, a time and a place: a matching cannot be read from one chart alone" },
      { icon: "astro-rectification", text: "If either time is a guess, say so, and how far out it might be" },
      { icon: "gen-bring-name", text: "Any score or flag you have already been given, and who worked it out" },
      { icon: "gen-listen", text: "The questions the two of you, and your families, most want answered" },
      { icon: "gen-privacy", text: "Both people’s agreement to share their details, before anything is sent" },
    ],
  },
  session: {
    heading: "How a matching session runs",
    icon: "gen-explain",
    steps: [
      {
        title: "Both sets of details",
        text: "Each person’s date, time and place of birth are checked, and any uncertain time is named, since it affects some parts of the reading more than others.",
        icon: "astro-birth-date",
      },
      {
        title: "The score, point by point",
        text: "The eight kootas are read one at a time, with attention to which of them supplied the total and which gave nothing.",
        icon: "tap-rating",
      },
      {
        title: "The two charts side by side",
        text: "The seventh houses, the Moons, the periods, the navamsa and any Manglik placement are read against each other.",
        icon: "astro-compatibility",
      },
      {
        title: "Your questions, and what you decide",
        text: "The questions you came with, including the ones you were unsure how to ask, and the places where friction is likely. What you do with the reading stays with the two of you.",
        icon: "brain-meta-model",
      },
    ],
  },
  suits: {
    icon: "gen-couple",
    yes: [
      "you are considering marriage, whether the match was arranged, introduced or chosen by the two of you",
      "you are a parent or elder helping with a match and want the couple’s own views in the reading",
      "you are already together, or already married, and want to see how your two charts meet",
      "you are unsure about the relationship and want a structured way to begin the conversation",
    ],
    no: [
      "you want a pass or fail to settle a family argument",
      "you hope the reading will promise that the marriage will work",
      "the other person has not been told, or has not agreed to share their details",
    ],
  },
  faqs: [
    {
      q: "What is kundali matching, or Guna Milan?",
      a: "Two birth charts compared before a marriage. Guna milan is the part that scores the pair: eight comparisons, called kootas, worth 36 points in all and worked from the two Moon signs and Moon stars. North India commonly uses it, while much of South India uses the ten poruthams. Narayani takes the score as the place a matching starts, then reads the two charts against each other.",
    },
    {
      q: "What are the 36 points in matching, and how is a score read?",
      a: "The eight kootas are Varna (1 point), Vashya (2), Tara (3), Yoni (4), Graha Maitri (5), Gana (6), Bhakoot (7) and Nadi (8). Eighteen is the traditional minimum, and the bands above it vary from source to source. A total hides which kootas supplied it, so two pairs on the same score can need very different conversations. Treat the number as a map of where to look.",
    },
    {
      q: "Beyond the score, what does a compatibility reading look at?",
      a: "The two charts as wholes, with the seventh houses, the periods and any Mars placement read against each other, and then the two lives behind them: temperament, the way each of you handles disagreement, what each family expects and how each of you was raised to think about money. Narayani names where friction is likely, so that you can plan for it together. If you wish, the two dates of birth can also be set side by side as numbers, a separate lens from the charts.",
    },
    {
      q: "Does a high score mean a happy marriage?",
      a: "No. A high score means the Moon-based comparison came out well, and no more than that. Two people on a high score still have to talk about money, family and how they handle a quarrel, and a low score does not condemn a marriage either. The tradition’s own writers treat the total as one input among several.",
    },
    {
      q: "Is matching useful for love marriages as well as arranged ones?",
      a: "Yes, with a different emphasis. In an arranged match, two people who have just met, and their two families, often use the reading to find questions to ask. In a love marriage the couple already know each other, so the reading is more useful for naming patterns they may have noticed and for talking about how their families may respond. Narayani begins with the couple’s own view.",
    },
    {
      q: "If a match shows a dosha, does a rite have to follow?",
      a: "No. Tradition describes rites and prayers for several flags, and some families arrange one while others decline. No test has shown that a rite alters how a marriage turns out, so Narayani does not present any as necessary, and none is needed in order to decide whether to marry. Ask about a particular rite and she will tell you what it is meant to address, leaving the decision with you and your partner.",
    },
    {
      q: "Can a couple already together use a compatibility reading?",
      a: "Yes. A couple who are engaged, living together or married can use it to see how their two charts meet: where they pull together, where they pull apart, and which periods may ask more of both. It gives the two of you a structured way to talk and passes no verdict on the relationship. If your doubt is about the relationship itself, say so up front, since that changes where the time is best spent.",
    },
    {
      q: "What if one of us does not know the exact birth time?",
      a: "Ashtakoota is less affected than most of the chart, because it uses only the Moon’s sign and star, and a time that is out by some minutes rarely changes either. A missing time is harder, since the Moon crosses roughly one nakshatra a day. Narayani will tell you which parts of the matching still stand on an approximate time, and which do not: the navamsa and the dasha dates move faster with any error. A parent’s memory or a hospital record is worth looking for before you enquire.",
    },
    {
      q: "Do the South Indian poruthams give the same answer?",
      a: "Not always. The ten poruthams are mostly read as a match or no match, with no points, and sources disagree on which are essential: Rajju is most often treated as essential, and many add Yoni and Vedha. Six or seven of the ten is a common minimum, and some teachers allow exceptions. Because the two methods ask different questions, one pair can look different under each. If your family goes by the porutham method, say so when you enquire, so that the team can tell you what is possible.",
    },
  ],
  related: [
    "/services/astrology/marriage/",
    "/services/astrology/nakshatras/",
    "/services/astrology/birth-chart-reading/",
  ],
  note: "A matching is a way to reflect on two charts. It is not a health check on either of you, and it does not replace a doctor’s advice before a marriage or a lawyer’s on its legal side.",
  showFees: true,
};
