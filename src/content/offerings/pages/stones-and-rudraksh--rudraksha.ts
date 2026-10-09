import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "stones-and-rudraksh",
  slug: "rudraksha",
  title: "Rudraksha beads, mukhi and malas",
  metaTitle: "Rudraksha: mukhi, malas and authenticity",
  metaDescription: "What Rudraksha beads are, where they grow, what each mukhi is linked with in the texts, how malas are counted, and how to tell a real bead from a copy.",
  lead: "Understand Rudraksha seeds, their natural grooves and their use as prayer beads. Compare traditional meanings with authenticity checks before accepting a seller’s claims.",
  card: "When you want to know what a mukhi means, which bead is real, and how a mala is worn.",
  icon: "page-rudraksha",
  group: "wearing",
  covers: [
    "What Rudraksha is",
    "Nepal, Indonesia and India",
    "Mukhi, one to fourteen",
    "Where texts and sellers differ",
    "Malas of 108 and one",
    "Telling real from copy",
    "Who may wear it",
  ],
  art: { kind: "bead", mukhi: 5 },
  enquiryTopic: "Rudraksha",
  cta: "Enquire about Rudraksha",
  intro: [
    {
      type: "p",
      text: "A Rudraksha bead is a seed that people have strung and prayed with for a long time. It is plain and grooved, and it carries a great many claims. Some come from the texts, some from sellers, and some from neither.",
    },
    {
      type: "p",
      text: "This is background reading from published sources, and the page keeps the three apart. It says what the two main texts say about each bead, what modern sellers add, where botany and the trade disagree, and how to check that a bead is what it is called. It also says plainly what has and has not been tested.",
    },
  ],
  sections: [
    {
      id: "seed",
      chip: "What it is",
      heading: "What a Rudraksha is, and where the tree grows",
      icon: "rud-tree",
      blocks: [
        {
          type: "p",
          text: "Rudraksha is the hard stone inside the fruit of Elaeocarpus trees, called Elaeocarpus ganitrus in the trade. The tree is an evergreen with blue fruit about 1.5 to 2.3 centimetres across. The stone inside carries natural grooves running from end to end, and internal chambers that botanists call locules, usually counted at four to seven depending on the source. Elaeocarpus trees grow from north-east India and the Himalayan foothills through South-East Asia to northern Australia and the Pacific.",
        },
        {
          type: "p",
          text: "The name means Rudra’s eye. According to the Rudrakshajabala Upanishad, the beads were born from the eyes of Rudra, another name for Shiva, and a popular version of the legend speaks of tears. That is tradition, and for many people the bead is a devotional object before anything else.",
        },
        {
          type: "p",
          text: "Even the tree’s name depends on whom you ask. The trade and many Indian papers use Elaeocarpus ganitrus, while plant databases list the tree as E. angustifolius or E. sphaericus. A seller who states one correct botanical name is simplifying.",
        },
      ],
    },
    {
      id: "origins",
      chip: "Nepal, Indonesia, India",
      heading: "Nepal, Indonesia or India: what sellers say, and what is unsettled",
      icon: "rud-size",
      blocks: [
        {
          type: "p",
          text: "Sellers sort beads mainly by where they grew. The ranges below are the sellers’ own, they differ from one seller to the next, and none is an official grade.",
        },
        {
          type: "table",
          head: ["Origin", "Size sellers quote", "Surface", "What is said of it"],
          rows: [
            ["Nepal", "Larger, 14 to 40 mm; a five-mukhi bead 18 to 28 mm", "Deep grooves", "The Arun valley is named as a source"],
            ["Indonesia", "Smaller, 5 to 12 mm in one seller’s range and up to 25 mm in others; a five-mukhi bead about 7 to 10 mm", "Fine grooves", "Java and Sumatra are named as sources"],
            ["India", "No agreed range", "No agreed description", "Assam and Haridwar are named by one seller, Kulu and Rameswaram by a reference work"],
          ],
          icons: ["rud-nepal", "rud-indonesia", "rud-india"],
        },
        {
          type: "p",
          text: "Sellers say Nepali and Indonesian beads are one species, and one reference work suggests that the small stones used in classic malas may come from a special cultivation technique or from an unknown race. Sellers also take opposite sides on which is better. One prices large Nepali beads at a premium. Another argues that Java beads and small beads are as good as large ones. Neither side has evidence of an effect to offer.",
        },
        {
          type: "p",
          text: "The sizes themselves raise a question. Botanical references give the fruit as 1.5 to 2.3 centimetres across, so the largest sizes sellers quote do not sit easily with them, and the point is unresolved. Scripture does not settle it either. The Shiva Purana grades beads by size, from the size of an amla fruit, the Indian gooseberry, down to a gram seed, and elsewhere praises small beads. Size and origin are fair reasons to prefer a bead for how it looks and feels, and they say nothing about what it does.",
        },
      ],
    },
    {
      id: "mukhi",
      chip: "Mukhi",
      heading: "What mukhi means, and where the counts come from",
      icon: "rud-seed",
      blocks: [
        {
          type: "p",
          text: "Mukhi means face. Each bead carries natural grooves from one end to the other, and the count of grooves is its mukhi. Botanists describe the faces as matching the chambers inside the seed, normally five, and regional studies report from one to fourteen faces, with most beads showing five or six. Sellers list beads of fifteen to twenty-one faces. No academic source for those counts has been found, and botanical references give four to seven chambers, so treat them as unverified.",
        },
        {
          type: "p",
          text: "Two texts name a deity for each bead: chapter 25 of the Shiva Purana and the Rudrakshajabala Upanishad. Neither names a planet for any bead. Planets, Moon signs and chakras come from modern sellers, and the sellers disagree. The catalogue on this page gives each bead’s deities from both texts and shows the planet readings side by side wherever sellers differ.",
        },
        {
          type: "table",
          head: ["Source", "What it gives", "How far to rely on it"],
          rows: [
            ["Shiva Purana, chapter 25", "A deity or form for each of the fourteen beads, with rules for wearing and a grading by size", "Tradition, read here in a 1950 English translation, with wearing rules of its own"],
            ["Rudrakshajabala Upanishad", "A deity for each bead, often a different one", "A second text. The two differ in name on the seven-, ten- and thirteen-faced beads, name different forms of Shiva for the two- and five-faced, and agree in whole or in part on the rest. The Shiva Purana names no deity for the three-faced"],
            ["Modern seller guides", "Planets, Moon signs, chakras and needs", "Not in either text. Guides disagree on the planet for at least the one-, three-, four-, six-, seven-, eight-, nine-, thirteen- and fourteen-faced beads"],
          ],
        },
        {
          type: "p",
          text: "Some guides use the nine grahas as an index and give each bead a planet. Because the assignments conflict and no study found tests them, nothing here describes what a bead does for a planet. The Astrology remedies page covers how remedies of every kind are chosen.",
        },
      ],
    },
    {
      id: "mala",
      chip: "Malas",
      heading: "Malas: 108 beads and one more",
      icon: "rud-mala",
      blocks: [
        {
          type: "p",
          text: "A mala is a string of 108 counting beads plus one larger bead, called the meru, sumeru, bindu or guru bead, which is not counted. When your fingers reach it, you turn the mala around rather than cross it. Malas of 27 and one, and of 54 and one, also exist, and the reasons given for 108 vary from one source to the next. The Shiva Purana chapter mentions strings of several lengths, 108 among them.",
        },
        {
          type: "p",
          text: "A mala is used for japa, the repeated saying of a mantra, and japa malas often use small beads of around 5 millimetres. The counting rule is a custom. It keeps the count steady so that attention can stay with the words, and a mala of any count does that.",
        },
      ],
    },
    {
      id: "wearing",
      chip: "Wearing and care",
      heading: "Wearing and caring for a bead: what the texts say, what sellers add",
      icon: "rud-wearing",
      blocks: [
        {
          type: "p",
          text: "The Shiva Purana says a Rudraksha should be worn with a mantra, and that beads which are worm-eaten, unpierced or damaged should be avoided. The texts also ask the wearer to abstain from meat, garlic, onion and liquor, which one modern seller calls optional. Everything else comes from sellers and families, and it differs.",
        },
        {
          type: "table",
          head: ["Custom", "What guides say"],
          rows: [
            ["Thread or chain", "A thread, red in one guide, or a chain, with the bead resting against the skin. A broken thread should be restrung."],
            ["First wearing", "Monday in one guide, other days in others. The Shiva Purana asks for a mantra, and the guides name different ones."],
            ["Sleep and bathing", "Some guides say to remove it for soap and swimming. One says to keep it under the pillow at night."],
            ["Oil", "A drop of light oil, with advice that runs from monthly to every three to six months, and perfume and chemicals kept away."],
            ["Cleaning", "Lukewarm water, without soap."],
            ["Diet and menstruation", "The texts’ diet rule, which one seller calls optional. Rules about menstruation vary from guide to guide, and some guides give none."],
          ],
        },
        {
          type: "p",
          text: "None of these customs has evidence behind it, and none is a test of devotion. Pick the few that fit your own week.",
        },
      ],
    },
    {
      id: "real",
      chip: "Real or copy",
      heading: "Telling a real bead from a copy",
      icon: "rud-authenticity",
      blocks: [
        {
          type: "p",
          text: "A genuine bead has grooves that run unbroken from one end to the other, a rough natural texture, small irregularities and no carved symbols. Sellers rate the usual checks as follows.",
        },
        {
          type: "table",
          head: ["Check", "What it can show", "How far to rely on it"],
          rows: [
            ["Grooves, by eye or with a loupe", "Whether the grooves are unbroken and natural, and whether the surface looks carved", "A fair first look, and better with a trained eye"],
            ["X-ray or CT image", "Whether the inner chambers match the number of grooves", "Rated highest by sellers, who also say it can mislead without an expert reading, and an under-developed seed may not show well"],
            ["Water test", "Little. Dry beads may float, oiled ones sink, and weighted copies sink", "Not reliable. All four sellers say it is not conclusive, though one still takes sinking as the usual sign"],
            ["Milk, copper coin and flame tests", "Very little", "Misleading or weak, and a flame can damage the bead"],
          ],
        },
        {
          type: "terms",
          title: "Copies you will meet",
          items: [
            {
              term: "Carved grooves",
              text: "Extra grooves cut into a bead to raise its mukhi count. Natural grooves run unbroken from end to end and line up with the seed’s chambers, which is what an X-ray can show.",
              icon: "rud-fakes",
            },
            {
              term: "Glued joined beads",
              text: "Gauri Shankar is the name for two beads naturally joined, and trijuti for three. Sellers warn that glued pairs and triples are common, so look closely at the seam first.",
              icon: "stone-joined-beads",
            },
            {
              term: "Bhadraksha as a one-mukhi",
              text: "A half-moon bead called kaju dana, or bhadraksha, is sold as a one-mukhi. One seller calls it a different seed and a round one-mukhi a myth, so ask exactly what is being sold.",
              icon: "mukhi-1",
            },
          ],
        },
        {
          type: "p",
          text: "Sellers also report other seeds and carved wood passed off as Rudraksha, and Indonesian beads sold as Nepali ones.",
        },
      ],
    },
    {
      id: "claims",
      chip: "Claims and limits",
      heading: "Who may wear it, and what is claimed for it",
      icon: "gen-limits",
      blocks: [
        {
          type: "p",
          text: "The Shiva Purana opens wearing to any class, stage of life or sex, and modern guides add conditions that differ. None of the guides read for this page gives a rule for children, and small beads can choke, so a young child is better without one. A bead is a devotional object. Nobody has to wear one, and no evidence shows that a person is worse off without.",
        },
        {
          type: "p",
          text: "Claims for health call for the most care. The table sets what exists beside what is claimed.",
        },
        {
          type: "table",
          head: ["Kind of evidence", "What exists", "What it supports"],
          rows: [
            ["Seed extracts in laboratory dishes", "A few studies, for example on fungi", "Nothing about wearing a bead"],
            ["Animal studies", "Several, using seed extracts", "Nothing about people"],
            ["One trial of an oral powder", "A 2022 study of a swallowed powder, with no control group", "It cannot separate the powder’s effect from chance, other treatment or expectation, and it was not about wearing a bead"],
            ["Measurements of powdered bead chips", "A laboratory paper on electrical properties, which calls earlier evidence sparse and tested no people", "No effect on a wearer"],
            ["Wearing a bead", "No human trial was found", "Nothing"],
          ],
        },
        {
          type: "p",
          text: "Texts and sellers alike attach promises of health, wealth and protection to particular beads. None of them is repeated here, and none has evidence behind it.",
        },
        {
          type: "note",
          text: "No study found shows that wearing a bead has a medical use. Take any symptom to a doctor, and ask a seller who attaches a health claim to a bead for the evidence behind it.",
        },
      ],
    },
  ],
  catalogue: {
    heading: "The fourteen beads, one card each",
    chip: "The fourteen beads",
    icon: "stone-bead-set",
    intro: "Fourteen beads, from one face to fourteen. Each card gives the deities the two texts name, the planet readings sellers add, and a fact about the bead itself. A planet is shown only as a seller’s reading, and counts such as “in two” refer to the three seller guides read for this page. Where they differ, the card says so. No card is a recommendation.",
    items: [
      {
        id: "one-mukhi",
        name: "1 Mukhi",
        other: "Ek Mukhi",
        tradition: "Shiva Purana: Shiva himself. Upanishad: the Supreme Truth",
        summary: "A count where look-alikes are a known problem.",
        points: [
          "One seller says a half-moon bead called bhadraksha is a different seed, and also calls a round one-mukhi a myth",
          "Planet in modern guides: the Sun in one, suited to every planet in another",
          "Ask exactly what is being sold, and for an X-ray image",
        ],
        art: { kind: "bead", mukhi: 1 },
      },
      {
        id: "two-mukhi",
        name: "2 Mukhi",
        other: "Do Mukhi",
        tradition: "Shiva Purana: Isha. Upanishad: Ardhanarishvara",
        summary: "The two texts name different forms of Shiva.",
        points: [
          "Ardhanarishvara is Shiva joined with Parvati in a single figure",
          "Planet in modern guides: the Moon, where a guide gives one",
        ],
        art: { kind: "bead", mukhi: 2 },
      },
      {
        id: "three-mukhi",
        name: "3 Mukhi",
        other: "Teen Mukhi",
        tradition: "Shiva Purana: no deity named. Upanishad: the three fires",
        summary: "The Shiva Purana names no deity for this bead, and the Upanishad speaks of three sacred fires, with Agni as the deity.",
        points: [
          "Planet in modern guides: Mars in two, the Sun in one",
          "A bead the guides divide on, so ask which reading a seller is using",
        ],
        art: { kind: "bead", mukhi: 3 },
      },
      {
        id: "four-mukhi",
        name: "4 Mukhi",
        other: "Char Mukhi",
        tradition: "Both texts: Brahma",
        summary: "One of the beads on which the two texts agree.",
        points: [
          "Planet in modern guides: Mercury in two, Jupiter in one",
          "The agreement is about the deity only, and says nothing of any planet",
        ],
        art: { kind: "bead", mukhi: 4 },
      },
      {
        id: "five-mukhi",
        name: "5 Mukhi",
        other: "Panch Mukhi",
        tradition: "Shiva Purana: Kalagni Rudra. Upanishad: Panchabrahman, the five-faced Shiva",
        summary: "Botanists describe five chambers as normal in the seed, and five and six are the faces most beads show in regional studies.",
        points: [
          "Planet in modern guides: Jupiter, where a guide gives one",
          "Sellers quote about 18 to 28 mm from Nepal and about 7 to 10 mm from Indonesia",
        ],
        art: { kind: "bead", mukhi: 5 },
      },
      {
        id: "six-mukhi",
        name: "6 Mukhi",
        other: "Chhah Mukhi",
        tradition: "Shiva Purana: Kartikeya. Upanishad: Kartikeya or Ganesha",
        summary: "The texts name Kartikeya, Shiva’s son, and the Upanishad allows Ganesha as well.",
        points: [
          "Planet in modern guides: Venus in two, Mars in one",
          "The deity is the texts’ reading, and the planet is the sellers’",
        ],
        art: { kind: "bead", mukhi: 6 },
      },
      {
        id: "seven-mukhi",
        name: "7 Mukhi",
        other: "Saat Mukhi",
        tradition: "Shiva Purana: Ananga, a name of Kama. Upanishad: the seven Mothers",
        summary: "One of three beads on which the texts name quite different deities.",
        points: [
          "The seven Mothers are the Matrikas",
          "Planet in modern guides: Saturn in two, Venus in one",
        ],
        art: { kind: "bead", mukhi: 7 },
      },
      {
        id: "eight-mukhi",
        name: "8 Mukhi",
        other: "Aath Mukhi",
        tradition: "Shiva Purana: Vasumurti and Bhairava. Upanishad: the eight Mothers, dear to the Vasus and to Ganga",
        summary: "The texts overlap here through the eight Vasus.",
        points: [
          "Planet in modern guides: Ketu in some guides and Rahu in others",
          "Neither pairing is in either text, and a seller who gives one as settled is simplifying",
        ],
        art: { kind: "bead", mukhi: 8 },
      },
      {
        id: "nine-mukhi",
        name: "9 Mukhi",
        other: "Nau Mukhi",
        tradition: "Shiva Purana: Bhairava and the goddess Durga. Upanishad: the nine Shaktis",
        summary: "Both texts include goddess forms.",
        points: [
          "Planet in modern guides: Rahu in some guides and Ketu in others, the reverse of the eight-mukhi dispute",
          "Where a guide shows only one reading, ask why",
        ],
        art: { kind: "bead", mukhi: 9 },
      },
      {
        id: "ten-mukhi",
        name: "10 Mukhi",
        other: "Das Mukhi",
        tradition: "Shiva Purana: Janardana, a name of Vishnu. Upanishad: Yama",
        summary: "The texts name different deities, Vishnu in one and Yama in the other.",
        points: [
          "Planet in modern guides: two of the three read say it suits every planet",
          "Neither text names a planet",
        ],
        art: { kind: "bead", mukhi: 10 },
      },
      {
        id: "eleven-mukhi",
        name: "11 Mukhi",
        other: "Gyarah Mukhi",
        tradition: "Shiva Purana: Rudra. Upanishad: the eleven Rudras",
        summary: "Both texts name Rudra, as one form in the Purana and as eleven in the Upanishad.",
        points: [
          "Planet in modern guides: no agreed planet. One guide says it suits every planet, and another ties it to Jupiter’s periods",
          "Rudra is also the name inside the word Rudraksha",
        ],
        art: { kind: "bead", mukhi: 11 },
      },
      {
        id: "twelve-mukhi",
        name: "12 Mukhi",
        other: "Barah Mukhi",
        tradition: "Shiva Purana: the twelve Adityas. Upanishad: Vishnu or the twelve Adityas",
        summary: "Both texts link it with the Adityas, twelve solar deities.",
        points: [
          "Planet in modern guides: the Sun, in every guide that gives one",
          "Regional studies report faces up to fourteen, so twelve is near the top of the range",
        ],
        art: { kind: "bead", mukhi: 12 },
      },
      {
        id: "thirteen-mukhi",
        name: "13 Mukhi",
        other: "Terah Mukhi",
        tradition: "Shiva Purana: the Vishvedevas. Upanishad: Kama",
        summary: "The texts differ: a group of gods in one and Kama in the other.",
        points: [
          "Planet in modern guides: Venus in one, Venus with Jupiter in another",
          "Thirteen is at the edge of the range regional studies report",
        ],
        art: { kind: "bead", mukhi: 13 },
      },
      {
        id: "fourteen-mukhi",
        name: "14 Mukhi",
        other: "Chaudah Mukhi",
        tradition: "Shiva Purana: the highest Shiva. Upanishad: said to be born from Rudra’s eyes",
        summary: "The Shiva Purana names the highest form of Shiva, and the Upanishad says only that the bead is born from Rudra’s eyes. Sellers attach large promises to this bead, and none is repeated on this page.",
        points: [
          "Planet in modern guides: Saturn in one, Mars in another, both in a third",
          "The highest count that regional studies report",
        ],
        art: { kind: "bead", mukhi: 14 },
      },
    ],
  },
  lookAt: {
    heading: "What she looks at when a bead comes up",
    icon: "gen-listen",
    items: [
      { icon: "brain-thought", text: "What is prompting the question: a family custom, a wish to pray with a mala, or a warning someone gave you" },
      { icon: "brain-origin", text: "Where the advice came from: a text, a seller’s table or a practitioner, and whether it gives its reasons" },
      { icon: "habit-evidence", text: "What you have already bought or been shown, and what paper came with it" },
      { icon: "astro-mahadasha", text: "Your chart and the period running, where the question is about timing" },
      { icon: "astro-remedy-mantra", text: "Whether a plain mala for japa is all you need" },
    ],
  },
  bring: {
    heading: "Before you ask about a bead: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-photo", text: "Clear photographs of the bead or mala, showing both ends and the grooves, and any paper that came with it" },
      { icon: "brain-words", text: "What the seller or adviser said about the mukhi and why, in their words if you can" },
      { icon: "astro-birth-time", text: "Your birth date, time and place, only if you want a bead weighed against your chart" },
    ],
  },
  faqs: [
    {
      q: "Which mukhi is right for me?",
      a: "Neither main text names a bead for a person. The Shiva Purana and the Upanishad link each bead with a deity. Planets, Moon signs and needs such as protection or wealth are added by modern guides, which choose by a full chart, by the Moon sign or by present needs, and disagree with one another. So ask any adviser for the reasoning. Liking a bead, and wanting to pray with it, is also a reason.",
    },
    {
      q: "Can women wear Rudraksha?",
      a: "The Shiva Purana puts no bar on sex, so the text allows it. Guides of recent date differ on menstruation: some set conditions and some set none, which leaves the matter to a household’s custom. If someone says a woman must not wear a bead, you can reasonably ask which text says so. Whether to wear one is a devotional decision for the person wearing it.",
    },
    {
      q: "How do I wear a Rudraksha, and is there a day to start?",
      a: "The Shiva Purana says to wear it with a mantra, and the guides add a thread, often red, or a chain. One guide names Monday for the first wearing and others name different days. No rule is common to all, and no evidence shows that the day, the thread or the mantra changes anything. Choose a way you will keep up without fuss, and begin on a day that suits your own routine.",
    },
    {
      q: "Is a laboratory certificate for a Rudraksha trustworthy?",
      a: "No public standard for Rudraksha reports, comparable to the one gem laboratories follow, was found. One seller calls its partner laboratory government-authorised, and another warns that many laboratories are unverified. Read what the paper shows: an image, a chamber count, the laboratory’s name, an identifying number and a date. Count it as the seller’s own evidence, and ask whether the image on it is of the bead in your hand.",
    },
    {
      q: "Does a Rudraksha need to be energised before it is worn?",
      a: "Energising is a ritual some sellers add, with mantras and offerings. No effect of it has been measured, and a label that says a bead is energised cannot be checked, so it is no reason to pay more. If a rite means something to you, the Shiva Purana mentions a mantra said when the bead is worn, and that is a practice you can follow yourself without paying extra.",
    },
    {
      q: "Can I wear several mukhis on one thread?",
      a: "Combined sets are on sale, and several guides recommend wearing two or more mukhis together, but the pairings differ from one guide to the next and no test of any of them was found. Starting with a single bead, and seeing whether you keep wearing it, is a gentler first step. A string of many different faces is largely a question of taste and cost.",
    },
    {
      q: "Do I take it off to sleep or bathe, and how do I care for it?",
      a: "Guides disagree, so there is no single rule to follow. A seed can dry out and crack, which is the reason guides give for a drop of light oil now and then, and soap, perfume and chemicals are the usual things to keep away from it. Whether to sleep in it is a matter of comfort and custom, and a broken thread simply needs restringing.",
    },
    {
      q: "Is a larger Nepali bead better than a small Indonesian one?",
      a: "No evidence says so. The two sellers’ claims are opposite, and neither is backed by a measured effect, as the section on origins shows. What does differ is practical: size, the depth of the grooves and how comfortably a bead sits in a mala. Choose on those, on your budget and on the paperwork the seller can offer. A higher price for a larger bead is a price for size.",
    },
    {
      q: "Why do some mukhis cost more than others?",
      a: "Price follows size, rarity and what the seller can show about the bead. It does not follow any effect, because none has been shown. Counts above six are unusual, since regional studies report most beads at five or six faces, and unusual counts cost more. A high price is no evidence that a bead is real, and a very low one is a reason to ask what it is. This page gives no prices; where one applies, it is shared when you enquire.",
    },
    {
      q: "Which Rudraksha is suggested during Sade Sati or a hard period?",
      a: "Some sellers tie a mukhi to Saturn or to another planet, and so to a period, but neither main text makes any such tie and the sellers disagree with each other. Sade Sati is the roughly seven-and-a-half-year period when Saturn passes the signs around the Moon sign, and the dashas and transits page has the detail. No study found shows that a bead changes a period. In the order she keeps, a bead, if any, comes last.",
    },
    {
      q: "Is a Rudraksha linked with a chakra, a nakshatra or a Moon sign?",
      a: "Sellers publish tables that pair beads with Moon signs, nakshatras and chakras. None of these pairings is in the two main texts, the tables differ between sellers, and no test of these pairings turned up. Chakras come from yoga and tantra, and they are not a medical concept. A table that gives one bead per Moon sign is one seller’s scheme and says nothing about your own chart.",
    },
  ],
  related: [
    "/services/stones-and-rudraksh/gemstones/",
    "/services/astrology/astrology-remedies/",
    "/services/brain-training/hooponopono/",
  ],
  showFees: true,
};
