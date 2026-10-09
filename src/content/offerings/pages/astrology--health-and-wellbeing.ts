import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "health-and-wellbeing",
  title: "Health and wellbeing",
  metaTitle: "Wellbeing in Jyotish, not medical advice",
  metaDescription: "A non-medical look at rhythm and care in Jyotish: the Moon, the sixth, eighth and twelfth houses, and your running period. Not medical advice.",
  lead: "Explore the routines, worries and habits around your wellbeing through a personal conversation and chart reading. A doctor leads on symptoms and treatment; this is not medical advice.",
  card: "A non-medical look at energy, stress and the periods that ask for more care.",
  icon: "page-health-and-wellbeing",
  group: "life",
  covers: [
    "Wellbeing rhythms, not medicine",
    "Moon, Saturn and Mars",
    "Periods of strain and of ease",
    "Sleep, stress and routine",
    "Mind-first practices",
    "What astrology cannot do",
    "When to see a doctor",
  ],
  art: { kind: "drawing", id: "hero-health" },
  enquiryTopic: "Astrology: health and wellbeing",
  cta: "Enquire about a wellbeing reading",
  intro: [
    {
      type: "p",
      text: "People bring a health question to a chart when a hard stretch has gone on for a long time, when illness in the family has made everything feel fragile, or when someone has said that a period in the chart means trouble ahead. Astrology cannot diagnose, treat or predict illness, and it cannot say how long anyone will live. If you have a symptom, please see a qualified doctor first.",
    },
    {
      type: "p",
      text: "What a chart can offer is a way of looking at rhythm: the Moon’s link with mind and rest, the houses that speak of routine, change and withdrawal, and the long periods that tradition calls demanding or easier. Narayani uses these as prompts to ask how you are spending your energy, what is wearing on you and where you could give yourself more care. It is a conversation about the shape of your days, and she keeps it apart from medicine.",
    },
  ],
  sections: [
    {
      id: "is-and-is-not",
      chip: "Is and is not",
      heading: "What a wellbeing reading is, and is not",
      icon: "gen-explain",
      blocks: [
        {
          type: "table",
          head: ["It is", "It is not"],
          rows: [
            ["A look at when your energy and routine come under pressure", "A diagnosis, or an opinion on any symptom"],
            ["A conversation about sleep, workload and rest", "Treatment, or a stand-in for it"],
            ["A calmer way to think about a demanding period", "A prediction of illness, accident or the length of a life"],
            ["A prompt to book the check-up you have been putting off", "A reason to stop, start or change any medicine"],
            ["A place to name what is wearing on you", "A stone, bead or mantra offered for a condition"],
          ],
        },
      ],
    },
    {
      id: "in-the-chart",
      chip: "In the chart",
      heading: "What the chart is read for",
      icon: "group-chart",
      blocks: [
        {
          type: "p",
          text: "In Jyotish the Moon, some houses and a few planets are tied to body and mind. A reading uses them as prompts to ask where your energy goes, where strain builds and where rest is missing.",
        },
        {
          type: "table",
          head: ["In the chart", "Tradition links it with", "What a reading asks"],
          rows: [
            ["Moon", "Mind, mood and the rhythm of the day", "How you sleep, and how your mood shifts across the month"],
            ["Sixth house", "Daily routine, service and effort", "What your week asks of you, and the habits you lean on"],
            ["Eighth house", "Change, hidden matters and depth", "What you carry alone, and where you hold on"],
            ["Twelfth house", "Rest, solitude and letting go", "How and when you switch off"],
            ["Saturn", "Patience, discipline and limits", "Where you are over-extended, and where a limit would help"],
            ["Mars", "Energy, drive and conflict", "How you spend your energy, and what you do with irritation"],
          ],
          icons: ["graha-moon", "house-6", "house-8", "house-12", "graha-saturn", "graha-mars"],
        },
        {
          type: "p",
          text: "Classical texts go further, tying houses and planets to illness, to long-standing conditions, to parts of the body and to length of life. Narayani does not use those readings. They cannot be checked, and a list of ailments read from a chart can frighten without informing.",
        },
      ],
    },
    {
      id: "periods",
      chip: "Periods of strain",
      heading: "Periods that ask for more care",
      icon: "astro-mahadasha",
      blocks: [
        {
          type: "p",
          text: "Tradition divides life into periods and calls some of them demanding and others easier. A demanding period is not a diagnosis. At most it is a reason, if you want one, to look at sleep, workload and rest, which deserve a look in any period.",
        },
        {
          type: "p",
          text: "People ask most about Sade Sati, Saturn’s slow passage around your Moon sign, which takes about seven and a half years and comes round about every thirty. No study has been found linking it with health. The page on dashas and transits has the detail.",
        },
        {
          type: "p",
          text: "What the chart can honestly add is a calendar for attention. In a stretch that tradition calls demanding, it may be a good time to keep a steadier bedtime, spread out a heavy workload, and put the overdue check-up into the diary. A stretch called easier is no reason to skip any of these.",
        },
      ],
    },
    {
      id: "rhythms",
      chip: "Sleep and routine",
      heading: "Sleep, stress and routine, with the mind first",
      icon: "astro-wellbeing-rhythm",
      blocks: [
        {
          type: "p",
          text: "Much of what shapes wellbeing in a given month is ordinary: how late you sleep, what you eat, how long you sit, what you take in on a screen, and what you do when something goes wrong. Narayani asks about these first, because a hard stretch often shows up in the day-to-day before it shows up anywhere else.",
        },
        {
          type: "terms",
          title: "Three things she asks about",
          items: [
            {
              term: "Sleep",
              text: "Bedtime, waking time and whether you can switch off. The twelfth house is the traditional house of rest, which is why it comes into the conversation. Sleep that stays poor for a long time is a matter for a doctor, and a reading does not treat it.",
              icon: "astro-sleep",
            },
            {
              term: "Stress",
              text: "What happens in you under pressure: what goes through your mind, how you react, what you do next. It is a pattern you can watch, and watching it is the first step.",
              icon: "astro-stress",
            },
            {
              term: "Routine",
              text: "The shape of an ordinary day: when you wake, eat, work and wind down. The sixth house, the house of daily routine, is where tradition looks. A routine that fits your life survives a bad week, and a perfect one rarely does.",
              icon: "habit-morning",
            },
          ],
        },
        {
          type: "p",
          text: "A change small enough to repeat is worth more than a plan too large to start. Choose one thing, give it weeks rather than days, and notice what happens.",
        },
        {
          type: "p",
          text: "If you are looking after someone who is ill, the strain is yours as well. A reading does not speak to their condition at all. It is about you: how much sleep you are getting, what the days are asking of you, and where some rest could come from.",
        },
      ],
    },
    {
      id: "practices",
      chip: "Quiet practices",
      heading: "Quiet practices, and what research says about them",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "People often ask what they can do for themselves, and three practices come up most: slow breathing, EFT tapping and habit plans. None of the three is a treatment. The Brain Training pages go further into each, and the table gives the plain picture.",
        },
        {
          type: "table",
          head: ["Practice", "What it is", "What research shows"],
          rows: [
            ["Slow breathing", "A few minutes of slow, easy breaths", "Reviews of trials find small to moderate gains in stress and anxiety scores. Fast or forced breathing carries risks, and anyone with a heart or blood-pressure condition, or who is pregnant, should take medical advice first."],
            ["EFT tapping", "Tapping set points on the face and body while naming a worry aloud", "Some small trials find less distress, mostly against waiting lists. Researchers disagree about why, and about whether the tapping itself matters."],
            ["Habit plans", "A small change attached to a set moment in the day, such as after breakfast", "Studies find that specific if-then plans make it likelier that people do what they planned, and that habits take weeks to months to settle, with large differences between people."],
          ],
          icons: ["breath-work", "tap-eyebrow", "habit-stacking"],
        },
      ],
    },
    {
      id: "cannot",
      chip: "What it cannot do",
      heading: "What astrology cannot say about health",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "A chart cannot say what a symptom means, whether a test result matters or how long a person will live. Those questions belong with a doctor, who can examine you and order the tests.",
        },
        {
          type: "p",
          text: "No study has shown that a chart can foretell illness. For the wider picture on controlled tests of chart reading, see the main Astrology page.",
        },
      ],
    },
    {
      id: "see-a-doctor",
      chip: "See a doctor",
      heading: "When to see a doctor, and who else can help",
      icon: "brain-professional-help",
      blocks: [
        {
          type: "p",
          text: "Medicines stay exactly as prescribed. Nothing a chart says, and nothing on this page, is a reason to start, stop or change one. For anything physical, a qualified doctor comes first.",
        },
        {
          type: "list",
          title: "Reasons to see a professional without waiting",
          items: [
            "A symptom that is new, lasting, or different from what you are used to.",
            "Low mood, worry or exhaustion that has gone on for weeks or is getting in the way of daily life.",
            "Sleep that has stayed poor for a long time.",
            "Any thought of harming yourself.",
          ],
        },
        {
          type: "p",
          text: "In India, a registered medical practitioner can see you for anything physical, and a qualified mental health professional can help with low mood or worry. Tele-MANAS, the national mental health helpline, answers on 14416 at any hour. In an emergency, call the emergency number for your area. If what you describe in a reading seems to call for a doctor, Narayani will pause the conversation and say so.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she looks at in a wellbeing question",
    icon: "gen-listen",
    items: [
      { icon: "astro-energy-low", text: "When your energy has been low, for how long, and what else was changing around then" },
      { icon: "brain-action-loop", text: "How you tend to respond when pressure builds, and whether the same pattern keeps returning" },
      { icon: "astro-antardasha", text: "Whether the period you are in is one tradition calls demanding or easier, and what that suggests about rest and workload" },
      { icon: "gen-caution", text: "Which of your questions belong with a doctor, and which can be talked through" },
    ],
  },
  bring: {
    heading: "Your birth details and a picture of your week",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "Your birth date, place and time. The Moon and the running period carry this reading, and both start from them." },
      { icon: "gen-calendar", text: "When the stretch you are asking about began, and what changed around then." },
      { icon: "habit-evidence", text: "A rough picture of an ordinary week: when you wake, eat, work and sleep." },
      { icon: "gen-privacy", text: "Leave medical records and test results out of a first message. A doctor’s advice stays in force, and the reading sits beside it." },
    ],
  },
  faqs: [
    {
      q: "Can a chart show periods that ask for more care of my wellbeing?",
      a: "Only in a modest way. Tradition calls some periods demanding and others easier, and Narayani can tell you which kind you are in. She uses that as a prompt to look at your sleep, workload and rest, and she makes no forecast that something will go wrong. The reading is no substitute for a check-up.",
    },
    {
      q: "Can astrology predict illness, health problems or length of life?",
      a: "No. A chart cannot foretell illness or the length of a life, and no study has shown that it can. A reading here stays with sleep, workload and rest. If you are worried about your health, a qualified doctor is the person to ask.",
    },
    {
      q: "Is there a health-related consultation, and what does it cover?",
      a: "There is a reading about wellbeing rhythms, and it is not a health consultation. It looks at the periods in your chart, your routines, your sleep and the way you handle stress, and it stays separate from medicine. If a symptom comes up, Narayani will pause and point you to a doctor.",
    },
    {
      q: "A period in my chart was described as bad for my health. Should I worry?",
      a: "A prediction of that kind is no reason to worry. No study has shown that a period in a chart brings illness, and a warning like that can stay with a person for years. Tradition calls some periods demanding and does not diagnose anyone. Look after the ordinary things, such as sleep, food and rest, and see a doctor about any symptom. If the warning keeps returning to your mind, that worry is worth talking through.",
    },
    {
      q: "Can a stone, bead or mantra help my health?",
      a: "No stone, bead or mantra has been shown to affect health, and none is offered here for a condition. Tradition keeps them in its planetary and devotional sides, and some people value them there. They sit beside medical care and never in place of it.",
    },
    {
      q: "Can I use a reading to decide about a treatment or a surgery?",
      a: "No. Decisions about treatment belong to you and your doctors, with a second medical opinion if you want one. A chart cannot weigh a diagnosis or a risk, and choosing a date for surgery from a chart could delay care that you need. Narayani does not advise for or against any treatment.",
    },
    {
      q: "Will you advise me on diet, exercise or supplements?",
      a: "No. Advice on food, exercise, supplements or any condition belongs to a doctor, a dietitian or another qualified professional. A wellbeing reading can talk about the shape of your days, such as when you sleep and how you spend your energy. It cannot prescribe anything or judge what suits your body.",
    },
  ],
  related: [
    "/services/astrology/birth-chart-reading/",
    "/services/astrology/dashas-and-transits/",
    "/services/brain-training/",
  ],
  note: "If a symptom is on your mind, see a doctor before you book a reading. A chart cannot weigh a symptom, a test result or a medicine.",
  showFees: true,
};
