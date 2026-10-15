import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "astrology-remedies",
  title: "Astrology remedies",
  metaTitle: "Astrology remedies (upay) in Jyotish",
  metaDescription: "Mantra, colour, direction, charity, fasting, worship and breath as Jyotish remedies: how one is chosen, how to judge it, and when none is needed.",
  lead: "Understand why an upay is suggested before choosing it. Narayani explains its purpose and limits, including when no remedy is needed.",
  card: "When you have been given a remedy and want to know why, or whether you need one at all.",
  icon: "page-astrology-remedies",
  group: "remedies",
  covers: [
    "Mantra, colour and direction",
    "Charity, fasting and worship",
    "Behaviour, breath and routine",
    "The nine grahas and their days",
    "How a remedy is chosen",
    "When no remedy is needed",
    "Stones and beads, with care",
  ],
  art: { kind: "drawing", id: "hero-astrology-remedies" },
  enquiryTopic: "Astrology: remedies",
  cta: "Enquire about astrology remedies",
  intro: [
    {
      type: "p",
      text: "An upay is a small practice addressed to one planet: a mantra said each morning, a fast on that planet’s day, food given in its name, or a change in the way you work. Many people arrive with several already, gathered from relatives, videos and earlier readings.",
    },
    {
      type: "p",
      text: "Narayani starts with the person rather than the list. She wants to know what is happening, what has been tried and what your days can actually hold, because a practice that does not fit your days will not last. Where a remedy fits, she names it and gives the reason. Where none is needed, she says so.",
    },
  ],
  sections: [
    {
      id: "what-it-is",
      chip: "What it is",
      heading: "What a remedy is, and what it cannot do",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "Tradition reads each graha, or planet, as a thread running through a life: the Sun through self and authority, the Moon through mind and feeling, Saturn through discipline and long effort. When your question touches one of them, because its period is running or because it sits under strain in your chart, tradition offers a practice addressed to that planet, kept for a while, with attention.",
        },
        {
          type: "p",
          text: "The chart itself does not change: it records the sky at the moment of birth, and the tradition speaks of indications. A remedy is aimed at how you meet a stretch of time. It gives a hard period a daily point of attention, something to do and something to stop doing.",
        },
        {
          type: "p",
          text: "That is the tradition’s own account. No test shows a remedy changing outcomes. What you can observe is nearer to hand: what you attend to, what you let go of, how you treat the people around you. Narayani works with that part.",
        },
      ],
    },
    {
      id: "kinds",
      chip: "Kinds of remedy",
      heading: "Nine kinds of remedy, and how each is used",
      icon: "group-remedies",
      blocks: [
        {
          type: "p",
          text: "This page groups remedies into nine broad kinds. Most cost nothing but time and attention, and several can sit inside one short daily practice.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Mantra and sound",
              text: "Japa, the steady repetition of a mantra, is among the most common remedies. The mantra may be the planet’s name with a word of respect, a verse from the Navagraha Stotram, a well-known hymn to the nine planets, or a longer traditional text. The count is often kept on a mala of 108 beads, with a larger guide bead, not counted, to mark where you turn. A short mantra said daily, slowly and with attention, is easier to keep than a large count rushed once. A bell or a hymn sung at home belongs here too.",
              icon: "astro-remedy-mantra",
            },
            {
              term: "Colour",
              text: "Each graha has colours in tradition, and many lists follow the images in the Navagraha Stotram, which likens the Sun to a red hibiscus, the Moon to curd, conch shell and snow, Jupiter to gold, Venus to snow and jasmine, and Saturn to dark kohl. A colour remedy means wearing that colour, or keeping it near you, on the planet’s day. It costs nothing and asks only to be remembered, which is its use: a small, visible reminder of what you are attending to that week.",
              icon: "astro-remedy-colour",
            },
            {
              term: "Direction",
              text: "Tradition cares which way you face. Japa is often done facing east, toward the sunrise, and a home shrine usually sits in the north-east. Lists that give each planet its own direction differ from one source to the next, so treat a direction as a convenience. The Vastu page on directions and elements explains how direction is read there.",
              icon: "astro-remedy-direction",
            },
            {
              term: "Behaviour and routine",
              text: "Some practitioners connect a remedy with conduct: the way you work, speak or keep commitments. A recurring habit may be a more practical focus than an elaborate ritual. The duration of a planetary period does not require keeping one remedy for that entire period. The table below offers ordinary examples, not prescriptions based on a chart.",
              icon: "astro-remedy-behaviour",
            },
            {
              term: "Charity and service",
              text: "Daan, giving, is among the oldest remedies. Tradition pairs particular gifts with particular planets and days, and food given on a Saturday in Saturn’s name is a familiar one. Seva, service given as time, counts as well: an hour with an elder, a morning’s help at a school or a shelter, feeding birds or animals. The Bhagavad Gita describes the purest gift as one given because it ought to be given, at a fitting place and time, to someone who cannot repay it. A gift made in panic, or one your household cannot afford, works against that spirit.",
              icon: "astro-remedy-charity",
            },
            {
              term: "Fasting",
              text: "A vrat, a fast kept on a planet’s day, can mean anything from skipping one meal to eating one simple meal in the day. In tradition its point is restraint and remembrance as much as food. Anyone with a health condition, on regular medicine, pregnant, elderly or still growing should ask a doctor before fasting at all. A lighter form, such as giving up one item for the day, keeps the spirit without the strain.",
              icon: "astro-remedy-fasting",
            },
            {
              term: "Worship",
              text: "Puja can be as small as lighting a lamp at home with a short prayer, or offering water to the rising sun, called arghya, a common daily practice for the Sun. It can be a formal rite led by a priest, such as a graha shanti, a rite to settle the planets, with mantras and offerings into a sacred fire. It can be a visit to a navagraha shrine, where people walk around the nine images. Some traditions add a yantra, a geometric diagram used in worship. Small acts kept regularly are easier to sustain than one large ceremony.",
              icon: "astro-remedy-worship",
            },
            {
              term: "Breath and quiet practice",
              text: "Many remedies begin with a few slow breaths and a sankalpa, a short statement of what you are about to do and why. A few minutes of silence before or after a mantra belongs here too. This is where a remedy and the mind-first work meet, because a practice begun in a settled state is easier to keep. The Brain Training page describes that side of her work.",
              icon: "astro-remedy-breath",
            },
            {
              term: "Stones and beads",
              text: "Stones and beads are among the remedies people ask about most. Tradition links a gem with each planet, ruby with the Sun among them, and some people also wear a Rudraksha bead. Of all the remedies here, this is the one that calls for the most care, for the reasons given further down.",
              icon: "astro-remedy-stone",
            },
          ],
        },
      ],
    },
    {
      id: "nine-grahas",
      chip: "Nine grahas",
      heading: "The nine grahas, their days, and an everyday remedy for each",
      icon: "numc-vedic",
      blocks: [
        {
          type: "p",
          text: "Each graha rules a weekday, which is why remedies so often name one, and each Hindi weekday name comes from its planet: Ravivar from Ravi (the Sun), Somvar from Soma (the Moon), Shanivar from Shani (Saturn), and so on through the week. Rahu and Ketu, the two lunar nodes, have no weekday of their own.",
        },
        {
          type: "table",
          head: ["Graha", "Day and colour", "Stands for", "A remedy in its spirit"],
          rows: [
            ["Sun (Surya)", "Sunday; red", "Self and authority", "Rise in time to see the sunrise, and keep your word to those who rely on you."],
            ["Moon (Chandra)", "Monday; white", "Mind, feeling and nurture", "Keep a regular bedtime, and make time for your mother, or whoever raised you."],
            ["Mars (Mangala)", "Tuesday; red", "Strength, energy and conflict", "Spend restlessness on physical work or exercise, and take a breath before a quarrel."],
            ["Mercury (Budha)", "Wednesday; green", "Speech, intellect and trade", "Keep your accounts in order, put agreements in writing, and choose words with care."],
            ["Jupiter (Guru)", "Thursday; yellow", "Knowledge and guidance", "Study something steadily, honour your teachers, and help a child with lessons."],
            ["Venus (Shukra)", "Friday; white", "Love, partnership and the arts", "Give unhurried time to the person closest to you, and keep some music or beauty at home."],
            ["Saturn (Shani)", "Saturday; dark blue or black", "Discipline, service and long effort", "Keep one commitment on time each day, and treat people who do hard physical work with care."],
            ["Rahu", "No day of its own, though Saturday is often used; colours vary", "Worldly desire", "Notice what you chase and why, and give up one habit of excess."],
            ["Ketu", "No day of its own, though Tuesday or Saturday is often used; colours vary", "Detachment", "Make room for quiet, and let go of one thing you keep only out of habit."],
          ],
          icons: ["graha-sun", "graha-moon", "graha-mars", "graha-mercury", "graha-jupiter", "graha-venus", "graha-saturn", "graha-rahu", "graha-ketu"],
        },
        {
          type: "p",
          text: "The day and the colour are reminders, and lists differ on both. The last column gives plain examples written for this page, each in the spirit of its planet.",
        },
      ],
    },
    {
      id: "her-approach",
      chip: "Her approach",
      heading: "Why she starts with the person",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "People often come with a remedy and a warning to go with it: do this, or something will go wrong. Narayani does not work that way. A mantra is only ever said by a person, and someone frightened or unconvinced will drop it, or keep it in a way that feeds the fear. So she looks first at the person who has to carry the practice.",
        },
        {
          type: "p",
          text: "For any remedy she suggests, a few plain commitments apply.",
        },
        {
          type: "list",
          items: [
            "You are told the reason for a remedy before you begin it.",
            "It has to fit your life: your time, health, budget, faith and the practices your family already keeps.",
            "It is offered and never pressed, you may decline it, and it never comes with a threat.",
            "The aim is a practice you understand well enough to keep, change or stop on your own.",
            "No purchase is a condition of her advice.",
          ],
        },
      ],
    },
    {
      id: "choosing",
      chip: "Choosing",
      heading: "How a remedy is chosen for one particular life",
      icon: "group-decisions",
      blocks: [
        {
          type: "p",
          text: "In tradition the starting point is the matter and the planet linked with it. A question about work leads to the planets and periods tied to work; a question about marriage leads elsewhere. The choice is read from the whole chart, never from a Sun sign alone, and against the period now running.",
        },
        {
          type: "p",
          text: "Next comes the life it has to fit. Take two people, invented for the example, who are told the same thing: Saturn’s period is running and work feels heavy. One already prays each morning and has an hour free on Saturdays, so a short Saturn mantra added to her prayer and an hour of service at the weekend may suit her. The other works night shifts, cannot fast for health reasons and worries about getting rituals wrong, so for him one behaviour may be the whole remedy: doing the hardest task of each shift first.",
        },
        {
          type: "p",
          text: "One practice at a time is easier to keep and easier to judge. It should be small enough to survive a bad week.",
        },
      ],
    },
    {
      id: "is-it-helping",
      chip: "Is it helping",
      heading: "How to tell whether a remedy has been useful",
      icon: "tap-rating",
      blocks: [
        {
          type: "p",
          text: "A planet will not send you a sign, so judge a remedy by what you can observe: whether you kept it, whether you meet the matter with more patience than before, and whether you took the practical step you had been putting off.",
        },
        {
          type: "p",
          text: "Say a remedy for Mercury was an hour with your accounts every Wednesday and more care with words at work. After six weeks the check is plain: were the accounts done, were there fewer misunderstandings, did the conversation you were avoiding happen? If so, keep what helped. If the hour became one more thing to feel guilty about, shrink it or stop.",
        },
        {
          type: "p",
          text: "Sometimes a remedy proves unnecessary. The matter settles, or turns out to be practical, a document or a deadline that was never a planet’s to solve. That is worth knowing too, and it is a good reason to stop.",
        },
      ],
    },
    {
      id: "none-needed",
      chip: "Leaving one out",
      heading: "Reasons to leave a remedy out",
      icon: "astro-no-remedy",
      blocks: [
        {
          type: "p",
          text: "Not every reading ends with a remedy. Four cases are the clearest.",
        },
        {
          type: "list",
          items: [
            "The matter is practical. A contract, a diagnosis, a visa or a loan needs the right professional, and a remedy would only add delay.",
            "The hard stretch is an ordinary one. Sade Sati, the spell of about seven and a half years when Saturn passes the signs around your Moon sign, comes round every 29 to 30 years, so a long life holds two or three of them. One widely read summary calls it a time of many challenges and also of achievement, and the Dashas and transits page covers it.",
            "The cost is too high. A remedy that takes money, health or time you cannot spare is the wrong remedy.",
            "Fear is doing the asking. If the main reason for a remedy is a warning someone gave you, the first thing to look at is the fear, and Brain Training starts from beliefs and reactions like that.",
          ],
        },
      ],
    },
    {
      id: "cautions",
      chip: "Cautions",
      heading: "Where a remedy needs the most care",
      icon: "gen-caution",
      blocks: [
        {
          type: "p",
          text: "Take the most care with stones and beads. They cost real money, they are hard to reverse, and many are sold with claims that no study supports. The Gemstones page sets out what to check before buying, and the Rudraksha page does the same for beads.",
        },
        {
          type: "p",
          text: "Words such as “energised” or “siddh” on a stone or bead state a belief that nobody can test, and they are no reason to pay more.",
        },
        {
          type: "note",
          text: "A remedy is a practice for steadiness. It does not treat an illness, and it does not settle a legal or money matter. Symptoms go to a doctor first, treatment you already have carries on, and a question about law or money goes to a lawyer or an adviser. If worry over a remedy is wearing you down, talk to a doctor or a counsellor.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she weighs before suggesting a remedy",
    icon: "gen-listen",
    items: [
      { icon: "brain-thought", text: "What is going on, which remedies you have already tried, and what you make of them" },
      { icon: "group-chart", text: "The planet or period in your chart that your question touches, if your birth details are known" },
      { icon: "habit-evidence", text: "Any remedy you already keep, or were given, and how it has gone so far" },
      { icon: "gen-time", text: "How much time, money and energy a practice can honestly take in your week" },
      { icon: "astro-stress", text: "Whether worry about remedies has itself become part of the problem" },
    ],
  },
  bring: {
    heading: "Before you ask about a remedy: what to write down",
    icon: "gen-bring-details",
    items: [
      { icon: "brain-words", text: "The exact wording of any remedy you were given, who suggested it, and the reason they gave" },
      { icon: "astro-birth-time", text: "Your birth details, if you would like the question tied to a planet or a period in your chart" },
      { icon: "habit-stacking", text: "What you already practise, such as a morning prayer, a weekly fast or a stone you wear" },
      { icon: "gen-limits", text: "What would rule a practice out for you: a fast you cannot keep, a custom at home, a faith you follow" },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "you have been given a remedy and want to understand it before you begin, or before you stop",
      "you would rather keep one small practice well than several out of worry",
      "you want the reasoning, including the possibility that no remedy is needed",
    ],
    no: [
      "your question needs a doctor, a lawyer or a financial adviser first (please start there)",
      "you want certainty about what a planet will do",
      "you want a stone or bead named for you without a reading of your question first",
    ],
  },
  faqs: [
    {
      q: "Do mantras really work?",
      a: "Not in the sense of making events happen, and Narayani does not offer a mantra on those terms. What a daily mantra gives is a fixed few minutes of attention, which some people find a useful anchor in a difficult week. Kept that way, as a practice with no bargain attached, it can be worthwhile. If it turns into anxiety about a mispronounced word or a missed count, it has stopped helping.",
    },
    {
      q: "Someone told me a dosha needs an expensive puja. Must I do it?",
      a: "No remedy is compulsory, and none should be chosen in fear. Doshas are counted differently from one tradition to the next: the Marriage page shows how many charts qualify as Manglik under the common list, before any exception is applied. Kaal Sarp is contested, since it is not clearly a classical idea and practitioners disagree about its weight. Ask what exactly was found, why this rite, and whether a simpler practice would do, and decide only when the answers make sense to you.",
    },
    {
      q: "How soon should I expect a change?",
      a: "There is no honest date to give, and a promise of results in a fixed number of days is one nobody can keep. A better question is when to take stock. Choose a span before you begin, a few weeks for a daily practice, and at the end look at what you can observe in yourself and in the matter. Then keep the practice, change it or let it go.",
    },
    {
      q: "What happens if I miss a day, or stop?",
      a: "Nothing that should worry you. A remedy is a practice you chose, and a missed day is simply a missed day: pick it up again tomorrow. If you keep missing it, that is useful information. The practice is too large for your life as it is, and it should be made smaller or changed. Stopping is allowed as well. If you want to understand why a remedy did not fit, ask about it in a consultation.",
    },
    {
      q: "Can a family member do a remedy on my behalf?",
      a: "For some kinds, tradition says yes. A parent often keeps a fast or offers a puja for a child, and a formal rite is usually performed by a priest in the person’s name, with a sankalpa that names them. Behaviour remedies are different. Nobody else can keep your commitments on time or choose your words for you. So for a child, a parent can carry the practice; for an adult, the parts that touch daily life have to be their own.",
    },
    {
      q: "Can I follow remedies if I am not religious?",
      a: "Yes. Some remedies are devotional, such as a mantra or a puja, and they make sense only if you can offer them sincerely. Many are not: a change of behaviour linked with a planet, a gift of food or time, a colour worn on a particular day, a few quiet minutes of breathing. If you follow another faith, or none, mention it when you enquire, along with anything you would rather not do. A practice that feels false to you is one you will not keep.",
    },
    {
      q: "Can a remedy be kept alongside medical treatment?",
      a: "A quiet practice can sit beside medical care as long as it never replaces or delays it. A prayer, a mantra or a few slow breaths are things some people find steadying while they follow a doctor’s advice. A fast changes what you eat, so ask your doctor before keeping one, and never stop or change a medicine because of a remedy.",
    },
    {
      q: "I have remedies from several people. Should I keep them all?",
      a: "Probably not. A long list is hard to keep and harder to judge, because you cannot tell which practice did what, and it can add the very worry the remedies were meant to ease. Write down every remedy you have been given, with who gave it and why, and bring the list to a consultation. Narayani can go through it with you, keep what fits your life and explain why the rest can be set aside.",
    },
  ],
  related: [
    "/services/stones-and-rudraksh/gemstones/",
    "/services/stones-and-rudraksh/rudraksha/",
    "/services/brain-training/",
    "/services/vastu/vastu-remedies/",
  ],
  showFees: true,
};
