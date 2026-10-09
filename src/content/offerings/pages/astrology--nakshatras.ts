import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "nakshatras",
  title: "The 27 nakshatras",
  metaTitle: "The 27 nakshatras and your Moon star",
  metaDescription: "All 27 nakshatras with their ruling planets, symbols and deities, how the Moon’s nakshatra sets your first dasha, and how to find yours.",
  lead: "Jyotish divides the Moon’s path into 27 nakshatras. Learn how your birth star is read, what its symbols mean and why it does not define you.",
  card: "When you want to know your Moon nakshatra, or what the 27 are and how they are used.",
  icon: "page-nakshatras",
  group: "chart",
  covers: [
    "What a nakshatra and a pada are",
    "All 27, with lord and symbol",
    "Your janma nakshatra",
    "The first dasha",
    "Matching and name syllables",
    "Finding yours",
    "Harsh names, calmly read",
  ],
  art: { kind: "wheel" },
  enquiryTopic: "Astrology: my Moon nakshatra",
  cta: "Enquire about my Moon nakshatra",
  intro: [
    {
      type: "p",
      text: "The Moon goes once around the sky in about 27 days, and Jyotish divides its path into 27 equal stretches, close to one for each day of the round. Each is a *nakshatra*, a lunar mansion, with a name, a ruling planet, a symbol and a presiding deity. The nakshatra the Moon occupied at your birth is your *janma nakshatra*, your Moon star.",
    },
    {
      type: "p",
      text: "It is a small fact with wide use. It sets the planetary period you were born into, supplies four of the eight scores used when two charts are compared, gives a child’s name its first syllable and enters the choice of a date. Narayani reads the Moon star as a single voice about temperament and rhythm, and no nakshatra is good or bad in itself.",
    },
  ],
  sections: [
    {
      id: "what-it-is",
      chip: "Nakshatra and pada",
      heading: "What a nakshatra is, and what a pada is",
      icon: "graha-moon",
      blocks: [
        {
          type: "p",
          text: "The word is usually translated as lunar mansion or lunar station. Each of the 27 stretches along the Moon’s path measures 13 degrees 20 minutes, is named for a star or small cluster that marks it, and is thought of as a lodging for the Moon on the night it passes.",
        },
        {
          type: "p",
          text: "Every nakshatra is divided again into four *padas*, quarters of 3 degrees 20 minutes. Four padas make one nakshatra and nine make one sign, so the zodiac holds 108 of them, and each pada falls in exactly one division of the navamsa chart. A pada is the finest detail a Moon star offers.",
        },
        {
          type: "p",
          text: "Four labels travel with each nakshatra: a ruling planet taken from the Vimshottari order, a symbol, a presiding deity and a temperament. The ruling planet is the one that matters in calculation. The symbol, the deity and the temperament are the tradition’s way of painting a mood, and they are best read as images to think with.",
        },
      ],
    },
    {
      id: "your-moon-star",
      chip: "Your Moon star",
      heading: "Your Moon star, and why it carries weight",
      icon: "astro-moon-at-birth",
      blocks: [
        {
          type: "p",
          text: "The Moon travels about 13 degrees a day, close to one nakshatra a day, so the Moon star changes quickly. Two people born a day apart usually have different ones, while an hour’s error in the birth time only rarely changes it. The sign the Moon stood in at your birth is your *janma rashi*, and it is read beside the Moon star.",
        },
        {
          type: "p",
          text: "Tradition reads the Moon as the mind, so the Moon star is read as a description of temperament: how the mind tends to move and what it needs in order to feel settled. It also matters for practical reasons, and the section on uses takes them in turn.",
        },
        {
          type: "p",
          text: "The descriptions are the tradition’s way of speaking, and none has been measured. A one-line portrait fits many people, because general lines feel personal. Use the table below as a vocabulary to hold against your own experience.",
        },
      ],
    },
    {
      id: "the-27",
      chip: "The 27",
      heading: "The full list, from the first degree of Aries",
      icon: "astro-nakshatra-ring",
      blocks: [
        {
          type: "p",
          text: "The list begins at 0 degrees of Aries. The lords follow the dasha order, so the same planet comes round again every ninth row. The last column gives each nakshatra’s traditional temperament, strength and shadow together, in a line.",
        },
        {
          type: "table",
          head: ["Nakshatra", "Lord", "Symbol and deity", "How tradition describes its temperament"],
          rows: [
            ["Ashwini", "Ketu", "A horse’s head; the Ashwini Kumaras", "Quick and eager to begin, and impatient with delay."],
            ["Bharani", "Venus", "A womb; Yama", "Carries weight well, with strong feelings held close."],
            ["Krittika", "Sun", "A blade and a flame; Agni", "Sharp, clear and exacting, with a cutting edge."],
            ["Rohini", "Moon", "A bullock cart; Prajapati", "Warm and rooted, drawn to comfort and beauty."],
            ["Mrigashira", "Mars", "A deer’s head; Soma", "Curious and searching, slow to settle on one thing."],
            ["Ardra", "Rahu", "A teardrop; Rudra", "Intense and questioning, with feelings that come in storms."],
            ["Punarvasu", "Jupiter", "A bow and quiver; Aditi", "Finds its footing again, optimistic and forgiving."],
            ["Pushya", "Saturn", "An arrow and a lotus; Brihaspati", "Nourishing and steady, inclined to care for others."],
            ["Ashlesha", "Mercury", "A coiled serpent; the Nagas", "Perceptive and guarded, with a hold that can tighten."],
            ["Magha", "Ketu", "A throne; the Pitris, the ancestors", "Dignified and proud of its roots, at ease with status."],
            ["Purva Phalguni", "Venus", "A hammock, or the front legs of a bed; Bhaga", "Sociable and affectionate, fond of rest and pleasure."],
            ["Uttara Phalguni", "Sun", "A bed, or the back legs of one; Aryaman", "Reliable and generous, loyal to commitments."],
            ["Hasta", "Moon", "An open hand; Savitar", "Skilful with the hands, practical and quick-witted."],
            ["Chitra", "Mars", "A faceted jewel; Tvashtar", "Drawn to craft and finish, and to how things look."],
            ["Swati", "Rahu", "A shoot bending in the wind; Vayu", "Independent and adaptable, bending without losing direction."],
            ["Vishakha", "Jupiter", "A ceremonial gateway; Indra and Agni", "Determined and goal-driven, sometimes single-minded."],
            ["Anuradha", "Saturn", "A lotus; Mitra", "Devoted, good at friendship and at working in company."],
            ["Jyeshtha", "Mercury", "A round amulet; Indra", "Protective and senior in manner, carrying responsibility, often guarded."],
            ["Mula", "Ketu", "A bundle of roots; Nirriti", "Probing to the root of things, willing to uproot what it questions."],
            ["Purva Ashadha", "Venus", "A winnowing fan; the Waters", "Enthusiastic and persuasive, hard to discourage."],
            ["Uttara Ashadha", "Sun", "An elephant’s tusk; the Vishvedevas", "Steady and principled, in it for the long haul."],
            ["Shravana", "Moon", "An ear; Vishnu", "A listener who learns by hearing, attentive to what is said."],
            ["Dhanishta", "Mars", "A small drum; the eight Vasus", "Rhythmic and ambitious, at home in groups and in music."],
            ["Shatabhisha", "Rahu", "A ring holding a hundred stars; Varuna", "Private and reflective, drawn to the unusual and to solitude."],
            ["Purva Bhadrapada", "Jupiter", "A sword, or the front legs of a cot; Aja Ekapada", "Intense and idealistic, pulled between fervour and detachment."],
            ["Uttara Bhadrapada", "Saturn", "Two pillars over water, read as the back legs of a cot; Ahir Budhnya", "Deep and composed, patient and slow to be provoked."],
            ["Revati", "Mercury", "A fish; Pushan", "Gentle and imaginative, protective, a guide to others on the way."],
          ],
          icons: [
            "nak-ashwini", "nak-bharani", "nak-krittika", "nak-rohini", "nak-mrigashira", "nak-ardra", "nak-punarvasu", "nak-pushya", "nak-ashlesha",
            "nak-magha", "nak-purva-phalguni", "nak-uttara-phalguni", "nak-hasta", "nak-chitra", "nak-swati", "nak-vishakha", "nak-anuradha", "nak-jyeshtha",
            "nak-mula", "nak-purva-ashadha", "nak-uttara-ashadha", "nak-shravana", "nak-dhanishta", "nak-shatabhisha", "nak-purva-bhadrapada", "nak-uttara-bhadrapada", "nak-revati",
          ],
        },
        {
          type: "p",
          text: "Some muhurta work adds a 28th nakshatra, Abhijit, between Uttara Ashadha and Shravana. The 27 above are the ones used for the Moon star, the first dasha and matching. Lists differ on some symbols and on the spelling of names, so a table elsewhere may not match this one line for line.",
        },
      ],
    },
    {
      id: "uses",
      chip: "Uses",
      heading: "Four ways the Moon star is used",
      icon: "gen-four-areas",
      blocks: [
        {
          type: "p",
          text: "Beyond describing a temperament, the Moon star does practical work in four places.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The first dasha",
              text: "Whichever planet rules your Moon’s nakshatra also rules the first period of your Vimshottari cycle, which is why the Moon star is where the timing calendar begins. How much of that period remained at birth depends on how far the Moon had travelled through the star. The dashas and transits page carries the cycle and its table.",
              icon: "astro-mahadasha",
            },
            {
              term: "Matching",
              text: "When two charts are compared, four of the eight scores come from the nakshatras: Tara, how the two birth stars count from one to the other (3 points); Yoni, instinctive fit, read from 14 animal symbols (4); Gana, temperament, in three types named Deva, Manushya and Rakshasa that describe manner and are not moral grades (6); and Nadi, a grouping of the nakshatras into three (8). Together they carry 21 of the 36 points. They are one input among several, and no score settles whether two people suit each other.",
              icon: "astro-compatibility",
            },
            {
              term: "Naming syllables",
              text: "Each pada has a syllable traditionally used to begin a child’s name, so a family can choose the first sound from the pada of the Moon at birth. It is a custom, and families follow it as far as they wish.",
              icon: "numc-initials",
            },
            {
              term: "Setting a date",
              text: "The Moon’s nakshatra on a given day is one of the five limbs of the panchang, so it enters the choice of a date for a housewarming or a signing. It is one input among several, and the page on dashas and transits covers muhurta.",
              icon: "astro-muhurta",
            },
          ],
        },
      ],
    },
    {
      id: "finding-yours",
      chip: "Finding yours",
      heading: "How to find yours, and what to do with it",
      icon: "astro-question-chart",
      blocks: [
        {
          type: "p",
          text: "You need the Moon’s position in a Jyotish chart, which uses the sidereal zodiac. A chart drawn for Western astrology places the Moon about 24 degrees away from where Jyotish puts it, so it gives the wrong nakshatra.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Find the Moon in your chart",
              text: "Note its sign and its degrees and minutes within the sign. Suppose it stands at 10 degrees 30 minutes of Cancer. Cancer begins 90 degrees from 0 Aries, so the Moon is 100.5 degrees from the start.",
              icon: "astro-sky-moment",
            },
            {
              title: "Divide by 13 degrees 20 minutes",
              text: "100.5 divided by 13.33 comes to a little over 7.5. Take the whole number, 7, and add one: the Moon is in the eighth nakshatra, Pushya.",
              icon: "tap-rating",
            },
            {
              title: "Find the pada",
              text: "Pushya begins at 93 degrees 20 minutes, so the Moon is 7 degrees 10 minutes into it. Each pada spans 3 degrees 20 minutes, and 7 degrees 10 minutes falls in the third.",
              icon: "astro-navamsa",
            },
            {
              title: "Check the time",
              text: "An unreliable birth time rarely changes the nakshatra, but it can change the pada: an hour’s slip does so about one time in six, against one in twenty-five for the nakshatra. If your Moon sits near a boundary, say so.",
              icon: "astro-birth-time",
            },
          ],
        },
        {
          type: "p",
          text: "Once you have it, take the Moon star as a place to begin a conversation. Read its line in the table, hold it against your own experience, and notice what fits and what does not. Narayani reads it together with the Moon sign, the running dasha and the houses your question touches. Alone, it is not a sound basis for any decision.",
        },
      ],
    },
    {
      id: "harsh-names",
      chip: "Harsh names",
      heading: "Harsh-sounding names, and the gand mool worry",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "Some names and symbols sound severe to a modern ear, such as the coiled serpent of Ashlesha or the roots of Mula, and that is where worry usually starts. The lists give every nakshatra both a strength and a shadow side, and the table above carries both.",
        },
        {
          type: "p",
          text: "One group deserves a plain word, because it can alarm families. Six nakshatras sit at the junctions between a water sign and a fire sign: Ashlesha and Magha, Jyeshtha and Mula, Revati and Ashwini. A birth in one of them is sometimes called *gand mool*, and a rite may be recommended. They are six of the 27, so roughly one person in four or five is born under one, and practitioners give the idea very different weight, from a firm rule to a footnote.",
        },
        {
          type: "p",
          text: "If a rite was suggested to you, you can ask what exactly was found, what the rite is for and whether anything simpler would do, and take your own time to decide. A label on a Moon star is never a verdict on a child or an adult.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she weighs in your Moon nakshatra",
    icon: "gen-listen",
    items: [
      { icon: "gen-calendar", text: "Which period you began in, and how much of it the Moon had left at your birth" },
      { icon: "gen-couple", text: "How your Moon star sits beside another person’s, when two charts are being compared" },
      { icon: "habit-evidence", text: "Which parts of the one-line description match your own experience, and which do not" },
      { icon: "astro-stress", text: "Whether a harsh-sounding label is causing worry that a conversation could settle" },
      { icon: "astro-no-remedy", text: "Whether a rite someone advised has a clear purpose, or a simpler step would do" },
    ],
  },
  bring: {
    heading: "To find your Moon star: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "If you already hold a Jyotish chart, the Moon’s sign and degree from it" },
      { icon: "astro-birth-date", text: "If you do not, the day and town of birth and, if known, the hour: a wrong day shifts the Moon star far more than a wrong hour" },
      { icon: "astro-rectification", text: "Any doubt about the birth time, since it can shift the pada even when the nakshatra holds" },
      { icon: "brain-words", text: "Any rite or warning given to you about a nakshatra, in the words used, and by whom" },
    ],
  },
  faqs: [
    {
      q: "Do nakshatras affect relationships?",
      a: "Nothing in the sky has been shown to act on a relationship, and no controlled test of the Moon star against how relationships go is known. What Jyotish offers is a way to compare two temperaments, through the matching scores and through a conversation about where the two of you move at different speeds. Narayani uses it that way, beside everything else about how you live together. A low score is no sentence, and a high one does not remove the ordinary work of a shared life.",
    },
    {
      q: "Which nakshatra is mine?",
      a: "It is the one the Moon stood in at your birth. With a Jyotish chart in hand, find the Moon’s degree and follow the steps above. Without one, a reader can cast the chart from when and where you were born. A different date usually means a different nakshatra, so a wrong birth date matters far more than a small slip in the time.",
    },
    {
      q: "Are some nakshatras bad or unlucky?",
      a: "No. In the traditional lists each nakshatra carries a strength and a shadow side, and a severe-sounding name says nothing final about a person. One group, gand mool, worries families more than the rest, and practitioners weigh it very differently. The section above on harsh names covers it, including what to ask if a rite is suggested.",
    },
    {
      q: "Do nakshatras point to suitable kinds of work?",
      a: "Some traditional lists attach trades or settings to each nakshatra. The table here leaves them out, because a line about a trade reads like a career forecast and a Moon star alone cannot carry one. Work is read from the tenth house, its lord and the dashamsa chart, with the running period. The Moon star can add a note on temperament, such as whether you work best alone, in company or at a steady pace, and that is as far as it goes.",
    },
    {
      q: "What do a nakshatra’s symbol and deity mean?",
      a: "They are the tradition’s way of fixing a mood. A horse’s head for Ashwini suggests speed and a first step, and the throne of Magha suggests dignity and inheritance. The deity names the presiding power the tradition links with the star, such as Yama for Bharani or Savitar for Hasta, and the old stories around that figure supply the imagery. They work as memory aids for a temperament, and they make no claim about forces acting on you.",
    },
    {
      q: "Does my Moon star decide my first dasha?",
      a: "Yes. The first period belongs to the lord of your Moon’s nakshatra. Someone born with the Moon in Ashwini starts in a Ketu period, in Rohini a Moon period, in Pushya a Saturn period. The table above lists every lord. For how much of the first period remains at birth, and what follows, see the dashas and transits page.",
    },
    {
      q: "Which matters more, the Moon star or the rising sign?",
      a: "Neither outranks the other, because they answer different questions. The lagna anchors the houses and is read for the areas of life. The Moon sign and star describe the mind and set the timing. Readers often begin with both, which is also why an uncertain birth time harms the lagna first and the Moon star far less.",
    },
  ],
  related: [
    "/services/astrology/birth-chart-reading/",
    "/services/astrology/dashas-and-transits/",
    "/services/astrology/kundali-matching/",
  ],
  showFees: true,
};
