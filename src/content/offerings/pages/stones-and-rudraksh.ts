import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "stones-and-rudraksh",
  slug: "",
  title: "Stones and Rudraksh",
  metaTitle: "Gemstones and Rudraksha guidance",
  metaDescription: "What gemstones (ratna) and Rudraksha beads are in the Indian tradition, how Narayani approaches them, and what to check before you spend anything.",
  lead: "Do you need to wear a stone or bead at all? Understand the tradition, check the claims and know what to ask before you buy. There is no pressure to purchase.",
  card: "When you have been told to wear a stone or bead and want to weigh it up before you spend.",
  icon: "hub-stones-and-rudraksh",
  group: "",
  covers: [
    "Ratna and Rudraksha explained",
    "Whether any is worth wearing",
    "How a stone is chosen",
    "Checking what you are sold",
    "Wearing and care customs",
    "What the evidence shows",
    "Questions before you spend",
  ],
  art: { kind: "stones" },
  enquiryTopic: "Stones and Rudraksh",
  cta: "Enquire about stones and Rudraksha",
  indexHeading: "Gemstones and Rudraksha, each with its own page",
  intro: [
    {
      type: "p",
      text: "A stone or a bead often reaches you as a name, a weight and a price from someone else, with a promise attached. Many people want to know whether any of it is sound before they spend.",
    },
    {
      type: "p",
      text: "Start with your question, not a purchase. The guides explain traditional associations, authenticity checks and the limits of the evidence, so you can weigh the advice you receive.",
    },
  ],
  sections: [
    {
      id: "what-they-are",
      chip: "What they are",
      heading: "What a ratna and a Rudraksha bead are",
      icon: "rud-seed",
      blocks: [
        {
          type: "p",
          text: "A ratna is a gem. Jyotish, the Indian tradition of astrology, links nine of them, the navaratna, with the nine grahas, or planets. The Gemstones page gives the nine and says where the pairing comes from.",
        },
        {
          type: "p",
          text: "Rudraksha beads are seeds from Elaeocarpus trees. They are strung into malas for prayer and counting, and the name ties them to Rudra, a name of Shiva. Each bead has natural grooves, called mukhi, or faces.",
        },
        {
          type: "p",
          text: "The word crystal causes confusion. In shops it often means the ornamental stones of modern crystal practice, such as quartz or tiger’s eye, chosen by intention, sign or birth month. Gemstone, on these pages, means the nine ratna, which tradition reads from the chart.",
        },
      ],
    },
    {
      id: "her-order",
      chip: "Her order",
      heading: "Why a stone is never where she starts",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "She starts with you and your question, and with what is going on in your mind, before any object comes up. She does not tell anyone that something will go wrong if a stone is not worn.",
        },
        {
          type: "steps",
          title: "The order she keeps",
          items: [
            {
              title: "Your question, and the mind first",
              text: "The question you bring, what you have already tried, and any advice about a stone or bead you were given. The conversation begins here.",
              icon: "gen-listen",
            },
            {
              title: "Your chart and your numbers",
              text: "Both are read for the question you brought. Tradition reads a stone from the whole chart, so a Sun sign or a birth month alone settles nothing.",
              icon: "astro-lagna",
            },
            {
              title: "Whether anything needs wearing",
              text: "A question may need a decision, a conversation or a daily habit instead. Where nothing needs to be worn, she says so.",
              icon: "astro-no-remedy",
            },
            {
              title: "How to choose and check, if one suits",
              text: "She explains the reasoning, what tradition says, and what to ask a seller: what the stone is, what has been done to it and who says so.",
              icon: "gem-certificate",
            },
            {
              title: "Wearing and care",
              text: "Which customs are only customs, how to look after the piece, and what to do if you change your mind. The decision stays with you.",
              icon: "gem-care",
            },
          ],
        },
      ],
    },
    {
      id: "help",
      chip: "What she helps with",
      heading: "What she helps with, and what no conversation can test",
      icon: "gen-session-person",
      blocks: [
        {
          type: "list",
          items: [
            "Whether any stone or bead is worth considering at all",
            "How to choose, if one is, and what tradition says about the choice",
            "How to tell what is genuine, and what to ask a seller",
            "How to wear it and look after it",
          ],
        },
        {
          type: "p",
          text: "A conversation cannot test a stone or a bead. For a stone, the usual proof of what it is comes from an independent laboratory. For a bead, the check sellers rate highest is an X-ray or CT image of its inner chambers.",
        },
      ],
    },
    {
      id: "evidence",
      chip: "The evidence",
      heading: "What the evidence shows about benefit claims",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "Most of what is said about stones and beads is belief. The table sets the common claims beside what has been tested.",
        },
        {
          type: "table",
          head: ["The claim", "What can be said"],
          rows: [
            [
              "A stone changes your health, money, luck or relationships",
              "No study found has shown it. In trials that gave people real crystals or look-alikes, both groups reported the same effects. In a 2025 trial of rose quartz against glass, less anxiety appeared only in people who believed in crystals, whichever stone they held.",
            ],
            [
              "The right stone for your planet is read from your chart",
              "A tradition. No test of stones paired with planets was found. The wider evidence on chart reading is on the Astrology page.",
            ],
            [
              "A wrongly chosen stone does harm",
              "A belief that leans on fear, with no evidence found for it. The real risks are ordinary: paying for a stone that turns out to be something else, pressure to buy more, and putting off medical or practical help.",
            ],
            [
              "A heated, lab-grown or unenergised stone is weaker",
              "Some sellers say so. The trade bodies treat heating as an old practice to be disclosed and say nothing about any effect. No evidence supports an effect from a stone, treated or untreated, and an energised label cannot be checked.",
            ],
            [
              "Wearing Rudraksha improves health or acts on the body electrically",
              "Seed extracts have been studied in laboratory dishes and in animals. One trial of a swallowed powder had no control group, and no human trial of wearing a bead was found. Claims of electrical or electromagnetic effects cite no study.",
            ],
            [
              "A stone or bead protects against the evil eye, negative energy or phone radiation",
              "These are beliefs that some guides state as fact. No evidence supports them.",
            ],
          ],
        },
        {
          type: "note",
          text: "If a seller ties a stone or bead to an illness, a debt or a court case, take that as the cue to stop and ask for evidence. A doctor, a lawyer or a qualified financial adviser is the right person for those questions, and no stone replaces them.",
        },
      ],
    },
    {
      id: "lists",
      chip: "Lists and labels",
      heading: "Lists and labels you will meet, and what they rest on",
      icon: "rem-crystals",
      blocks: [
        {
          type: "p",
          text: "Shops, videos and friends offer many ways to choose a stone. Most are modern overlays, and it helps to know which is which.",
        },
        {
          type: "list",
          items: [
            "Birth-month stones are a Western birthstone custom. The modern American list was set in 1912 and has been revised since, and it is not a Jyotish method.",
            "Lists by Sun sign leave most of the chart out, because Jyotish ties stones to planets and reads the whole chart. Lists by ruling number come from numerology guides and shops, and they are a separate scheme from the chart-based method.",
            "Chakra and element pairings are modern overlays on the nine-stone tradition. Chakras come from yoga and tantra, they are not a medical concept, and no matching structure in the body has been established.",
            "Carrying a stone, holding it in meditation, setting an intention, charging it in moonlight and choosing one for a goal such as calm or love come from modern crystal practice. No effect has been measured, and some stones fade in strong light.",
            "A stone given as a gift is a keepsake. A stone chosen from a chart was chosen for one person.",
            "Some minerals are toxic, so a stone should not be soaked in water you mean to drink.",
          ],
        },
      ],
    },
    {
      id: "paying",
      chip: "Price and supply",
      heading: "Prices, supply and what to ask before you pay",
      icon: "gen-limits",
      blocks: [
        {
          type: "p",
          text: "The same stone can cost very different amounts from different sellers, because size, quality, treatment and rarity all move the price, and none of them measures an effect. Whoever you buy from, settle the terms in writing first.",
        },
        {
          type: "p",
          text: "These are information guides, not a shop. Ask the team what guidance is available and what it includes before booking or buying anything.",
        },
        {
          type: "list",
          title: "Before you pay for anything, anywhere",
          items: [
            "What exactly it is: natural, treated or laboratory-grown, stated in writing.",
            "Who says so: an independent laboratory, or only the seller, and whether the laboratory’s report costs extra.",
            "The return terms, in writing, and how long they last.",
            "Whether any claim is made for health, money or luck. If so, take it as a reason to ask for the evidence.",
          ],
        },
      ],
    },
    {
      id: "next",
      chip: "Where to read next",
      heading: "Which page answers your question",
      icon: "astro-stream-choice",
      blocks: [
        {
          type: "list",
          items: [
            "Which stone is linked with which planet, how one is chosen, worn and cared for, and what a laboratory report shows: the Gemstones page.",
            "What a bead is, what mukhi means, how malas are counted, and whether a given bead is real: the Rudraksha page.",
            "Whether you need a remedy at all, and what the others are: the Astrology remedies page.",
          ],
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she weighs before any stone or bead comes up",
    icon: "gen-explain",
    items: [
      { icon: "brain-thought", text: "What is prompting the question: a warning someone gave you, a worry, or plain curiosity" },
      { icon: "astro-mahadasha", text: "Your chart: the rising sign, the planet in question and the period now running" },
      { icon: "numc-mulank", text: "Your numbers, where they bear on the question" },
      { icon: "habit-evidence", text: "Any stone or bead you already wear, who advised it, and how it has gone" },
      { icon: "work-finance", text: "What a purchase would mean for your budget and your household" },
    ],
  },
  bring: {
    heading: "Before you enquire: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "Your birth date, time and place, because the chart is where any stone advice starts" },
      { icon: "gen-bring-photo", text: "A clear photograph of any stone or bead you own, with any receipt or paper that came with it" },
      { icon: "brain-words", text: "Any warning or deadline that came with the advice, in the words it was put to you" },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "someone has told you to wear a stone or bead, and you want the reasoning before you decide",
      "you already own one and want to know what to ask about it",
      "you would rather hear that nothing is needed, if that turns out to be the answer",
    ],
    no: [
      "you want a promise that a stone will bring luck, money or relief",
      "you are hoping a stone will help with symptoms or a diagnosis, which belong with a doctor",
      "you want a stone named for you without a conversation about your question",
    ],
  },
  faqs: [
    {
      q: "Do I need a gemstone or a Rudraksha bead at all?",
      a: "No. Tradition offers many remedies, and a stone or bead is only one of them. A good number of people never wear either, and many conversations end with a decision to make, a talk to have or a habit to build, and nothing to put on.",
    },
    {
      q: "How is a stone chosen for a particular person?",
      a: "Tradition reads the whole birth chart, starting from the planet that rules the rising sign and the period now running, and does not choose from a Sun sign or a birth month. There is no beginner stone. Practitioners weigh the factors differently, and no test of any method was found, so ask for the reasoning as well as the name. The Gemstones page works through an example.",
    },
    {
      q: "What does a laboratory certificate tell me?",
      a: "It names the stone, says whether it is natural or laboratory-grown, lists the treatments the laboratory could detect, and gives the weight and size. It carries no price, it cannot show that an undetectable treatment is absent, and it says nothing about your chart. A report written by the seller proves only what the seller says. The Gemstones page covers what a report shows and leaves out.",
    },
    {
      q: "What is the difference between natural, treated and lab-grown?",
      a: "Natural means formed in the earth and then cut and polished. Treated means a natural stone changed after it was found, by heat, oil, dye or filling. Lab-grown means grown in a laboratory with the same chemistry as the natural stone, so the eye cannot separate them. Imitation means another material altogether, such as glass. Ask for the kind in writing. The Gemstones page explains each.",
    },
    {
      q: "How can I tell that a Rudraksha is genuine?",
      a: "Look at the grooves first. On a real bead they run unbroken from end to end, and carved extras are a known copy. Sellers rate an X-ray or CT image highest, since the inner chambers should match the grooves, and they add that even an image can mislead without an expert reading. The water test is not conclusive. The Rudraksha page sets out the checks and the copies in full.",
    },
    {
      q: "Can anyone wear Rudraksha?",
      a: "The Shiva Purana sets no limit of class, stage of life or sex. Conditions about diet and menstruation come from modern guides, who disagree with one another, so regard them as household custom. A loose small bead can choke a young child. The Rudraksha page covers who may wear it, and what is and is not claimed for it.",
    },
    {
      q: "Is there a trial period, and should I take one?",
      a: "Some guides suggest wearing a stone for a few days before you commit, with the length ranging from three days to two weeks or more. No evidence shows that a trial reveals whether a stone suits you, but it can serve as a cooling-off period if the return terms are agreed in writing before you pay. The Gemstones page sets out how to run one.",
    },
    {
      q: "Will a stone work straight away?",
      a: "No timeline can be given. Guides quote anything from a day or two to many weeks, and no study found shows a stone itself producing an effect, so a date would be a promise nobody can keep. If you feel steadier after putting one on, the ritual and the attention it brings may be the reason, which is worth noticing.",
    },
    {
      q: "Can a stone or bead help with an illness, stress or money worries?",
      a: "No study found shows that it can. In the controlled trials on crystals, belief explained the effect, and no trial of people wearing a bead was found. Symptoms belong with a doctor, and any treatment you already have should continue. If money is the worry, a qualified financial adviser is the person to ask, and nothing on this page is advice of either kind.",
    },
    {
      q: "Will I be pushed to buy a stone or bead?",
      a: "No. Her advice does not depend on any purchase, and a conversation can end with nothing to buy and nothing to wear. If you do decide to buy, from anyone, settle in writing what the stone is, who says so and what the return terms are, and take whatever time you need.",
    },
  ],
  related: [
    "/services/stones-and-rudraksh/gemstones/",
    "/services/stones-and-rudraksh/rudraksha/",
    "/services/astrology/astrology-remedies/",
    "/services/brain-training/",
  ],
  showFees: true,
};
