import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "personal-numbers",
  title: "Your date of birth numbers",
  metaTitle: "Date of birth numbers: Mulank and Bhagyank",
  metaDescription: "How Mulank, Bhagyank, life path and the nine numbers are worked out from a date of birth, with karma numbers, personal years and what the evidence shows.",
  lead: "Understand the numbers calculated from your birth date, with worked examples and clear distinctions between methods. Their traditional meanings invite reflection; they do not determine who you are.",
  card: "When you want to know what your birth numbers are, how they are made and what they mean.",
  icon: "page-personal-numbers",
  group: "yours",
  covers: [
    "Mulank and Bhagyank",
    "Life path and destiny numbers",
    "Master and karma numbers",
    "The nine numbers, one to nine",
    "Personal year and cycles",
    "Relationship numbers",
    "Small routines, no claims",
  ],
  art: { kind: "numbers", variant: "dob" },
  enquiryTopic: "Numerology: my date of birth numbers",
  cta: "Enquire about my birth numbers",
  intro: [
    {
      type: "p",
      text: "A date of birth is the one number nobody can change, which is why numerology begins there. From the same date you can work out several numbers: the day you were born, the whole date added down, the year you are in now, and, once a name is added, a few more. Each has a rule you can follow with a pencil, and each has a customary reading attached.",
    },
    {
      type: "p",
      text: "Follow the worked examples to check the totals for yourself. The traditional meanings and year cycles are explained separately, including where methods disagree. Narayani treats a number as a question about your habits and choices, not a ruling on your character or future.",
    },
  ],
  sections: [
    {
      id: "core",
      chip: "Core numbers",
      heading: "The core numbers, worked from one date",
      icon: "astro-birth-date",
      blocks: [
        {
          type: "p",
          text: "The running example is 28 March 1981. Each number below is worked from it by a plain rule, and most rules end the same way: keep adding digits until one is left.",
        },
        {
          type: "table",
          head: ["Number", "Worked from", "The rule", "For 28 March 1981"],
          rows: [
            ["Mulank", "The day of birth", "Add the digits of the day down to one digit.", "28 gives 2 + 8 = 10, then 1 + 0 = 1."],
            ["Bhagyank", "The whole date", "Add every digit of the date, then reduce.", "2 + 8 + 0 + 3 + 1 + 9 + 8 + 1 = 32, then 3 + 2 = 5."],
            ["Life path", "Day, month and year", "Reduce each part first, add the three, then reduce.", "28 gives 1, March is 3, 1981 gives 1: 1 + 3 + 1 = 5."],
            ["Birthday number", "The day of birth", "Take the day as it stands, from 1 to 31.", "28."],
          ],
          icons: ["numc-mulank", "numc-bhagyank", "numc-life-path", "numc-birthday"],
        },
        {
          type: "p",
          text: "The labels overlap. Mulank is also called the birth, root, driver or radical number. Bhagyank is also called the conductor number, and it is the destiny number in most Indian writing and the life path number in Western books, so the second and third rows above are two routes to one number. Taken all the way down, both routes end on the same digit. They part only if you stop at a master number or read the compound on the way, a point taken up under master numbers below.",
        },
        {
          type: "p",
          text: "Several days share one Mulank. The 8th, 17th and 26th all give 8, and the compound, 17 or 26, is sometimes read beside the root as a finer shade of the same number.",
        },
      ],
    },
    {
      id: "nine",
      chip: "The nine numbers",
      heading: "The nine numbers, their planets and a pattern to watch",
      icon: "numc-vedic",
      blocks: [
        {
          type: "p",
          text: "These are the descriptions most often given in the Indian system, with the planet each number belongs to. They are conventions from books and practitioners, none has been tested, and a list like this tends to read as true of almost anyone, so hold it lightly. Writers usually apply the same nine descriptions whichever number is being read, whether Mulank, Bhagyank, life path or a name total.",
        },
        {
          type: "table",
          head: ["Number", "Planet in Indian use", "Often described as", "A pattern to watch"],
          rows: [
            ["1", "Sun (Surya)", "Self-directed, happiest setting their own course", "Carrying everything alone, or finding it hard to ask for help"],
            ["2", "Moon (Chandra)", "Sensitive, tuned to people, a good listener", "Taking on other people’s moods, or putting off a decision"],
            ["3", "Jupiter (Guru)", "Expressive, curious, a natural teacher", "Spreading effort across too many interests"],
            ["4", "Rahu in Indian use, Uranus in many Western books", "Practical, orderly, at ease with routine, and unconventional in thought", "Rigidity, or restlessness under rules"],
            ["5", "Mercury (Budha)", "Quick, adaptable, good with words and trade", "Boredom, and starting more than gets finished"],
            ["6", "Venus (Shukra)", "Warm, fond of harmony, comfort and beauty", "Smoothing things over instead of saying them"],
            ["7", "Ketu in Indian use, Neptune in many Western books", "Reflective, private, drawn to questions of meaning", "Withdrawing when company would help"],
            ["8", "Saturn (Shani)", "Disciplined, responsible, steady under load", "Overwork, and strictness with yourself"],
            ["9", "Mars (Mangal)", "Energetic, courageous, ready to act", "Impatience, and finishing things in a rush"],
          ],
          icons: ["num-1", "num-2", "num-3", "num-4", "num-5", "num-6", "num-7", "num-8", "num-9"],
        },
        {
          type: "p",
          text: "The planets agree across traditions for seven of the nine numbers and differ for two. Indian practice gives 4 to Rahu and 7 to Ketu, the Moon’s two nodes, which it calls shadow planets. The early Western handbooks give them to Uranus and Neptune, and one early writer read 4 as a second Sun number and 7 as a second Moon number. None of these schemes has been tested.",
        },
        {
          type: "p",
          text: "Why 8 sits with Saturn is a matter of convention. Indian practice reads Saturn, the slowest of the seven classical planets at about 29 and a half years round the Sun, as patience and long effort, and the 8 is read through that. It forecasts nothing for anyone born on an 8 day.",
        },
        {
          type: "p",
          text: "If you do not like your number, the last column is the one to look at. It names a tendency to keep an eye on, and the rest of the description can be set aside. Putting off decisions, for instance, is worth noticing in your own week. The number does not explain it, though it can give it a name.",
        },
      ],
    },
    {
      id: "master",
      chip: "11, 22 and 33",
      heading: "Master numbers, and when to stop adding",
      icon: "numc-master",
      blocks: [
        {
          type: "p",
          text: "Some practitioners stop adding when a total reaches 11, 22 or 33 and call it a master number. Others always reduce to a single digit. The two habits give different answers for some dates. Take 1 January 1980.",
        },
        {
          type: "table",
          head: ["Route", "Working", "Result"],
          rows: [
            ["Add every digit, then reduce", "1 + 1 + 1 + 9 + 8 + 0 = 20, then 2", "2"],
            ["Reduce the parts first, then add", "Day 1, month 1, and 1980 gives 18, then 9: 1 + 1 + 9 = 11", "11 if kept, or 2 if you go on adding"],
          ],
        },
        {
          type: "p",
          text: "If a practitioner keeps master numbers in the birth-day calculation, the 11th and 29th can give 11, while the 22nd can remain 22. Under the single-digit Mulank rule they become 2, 2 and 4 instead. No calendar day is 33. Some writers also keep 44 in other totals, but that is not a shared rule. Ask where reduction stops before comparing readings.",
        },
      ],
    },
    {
      id: "name-numbers",
      chip: "Name numbers",
      heading: "The name numbers in Western books",
      icon: "numc-name",
      blocks: [
        {
          type: "p",
          text: "Western books describe further numbers using the full birth name, and sometimes combine a name total with a birth-date total. The numerology systems page holds the Pythagorean letter table used here. Take Anita Singh: her letters are A1 N5 I9 T2 A1 and S1 I9 N5 G7 H8.",
        },
        {
          type: "table",
          head: ["Number", "Letters used", "Working for Anita Singh"],
          rows: [
            ["Destiny or expression", "Every letter", "18 + 30 = 48, then 12, then 3."],
            ["Soul urge", "The vowels", "A, I, A and I: 1 + 9 + 1 + 9 = 20, then 2."],
            ["Personality", "The consonants", "7 + 21 = 28, then 10, then 1."],
            ["Maturity", "Life path plus expression", "5 + 3 = 8, if Anita was born on 28 March 1981."],
          ],
          icons: ["numc-destiny", "numc-soul-urge", "numc-personality", "numc-maturity"],
        },
        {
          type: "p",
          text: "Books differ on the details. Some count Y as a vowel and others as a consonant, and some work from the name a person goes by instead of the birth name. The questions at the end explain why two sources can give different destiny numbers for the same person.",
        },
      ],
    },
    {
      id: "karma",
      chip: "Karma numbers",
      heading: "Karma numbers and karmic lessons, read calmly",
      icon: "numc-karma",
      blocks: [
        {
          type: "p",
          text: "Some modern books single out four totals: 13, 14, 16 and 19. A total that passes through one of them is called a karma number, or a karmic debt, and each is paired with the digit it reduces to. The word debt sounds heavier than the idea needs. All the idea says is that such a total is read as a theme for the person to notice.",
        },
        {
          type: "list",
          title: "Themes that books attach",
          items: [
            "13 and 4: steady effort, without looking for shortcuts.",
            "14 and 5: moderation, and handling freedom and change with care.",
            "16 and 7: humility, and questioning your own certainties.",
            "19 and 1: self-reliance, and being able to accept help as well as give it.",
          ],
        },
        {
          type: "p",
          text: "Books differ, most of all over 19. A karma number is found in one of two ways. One is the birth day itself: someone born on the 14th has a 14 and 5 from the start. The other is a total that passes through the number on its way to a single digit. A date whose digits add to 19, such as 10 January 1970, reduces through 19 and 10 to 1, and a name, a phone number or a personal year can do the same. Four days of the month carry one outright, and many totals pass through one on the way down. One source calls them common, not a curse.",
        },
        {
          type: "p",
          text: "Whether a karma number changes depends on where it comes from. The ones in your date are fixed. The ones in a name change if the spelling does, and the ones in a personal year come and go: for a 28 March birthday, the year 2031 adds to 19 and reduces to 1, while 2030 passes through none of the four.",
        },
        {
          type: "p",
          text: "Karma is a religious idea. A numerical interpretation does not establish what happened in a previous life or what will happen to health, relationships or work. A number is no reason to worry.",
        },
        {
          type: "terms",
          title: "Karmic lessons",
          items: [
            {
              term: "A missing number in the name",
              text: "In Western books a karmic lesson is any number from 1 to 9 that does not appear among the letter values of the full birth name. For Anita Singh, 3, 4 and 6 are missing. Many names lack a few. Books treat a lesson as an area that asks for deliberate attention, with no end date and no blame attached.",
              icon: "numc-karmic-lessons",
            },
            {
              term: "A missing number in the date grid",
              text: "Indian practitioners use the same words for a different thing: a number absent from the grid made from the birth date, which the Lo Shu page lays out. Keep the two apart, because a name can lack a number that your date has, and the other way round.",
              icon: "numc-missing-number",
            },
          ],
        },
      ],
    },
    {
      id: "cycles",
      chip: "Cycles",
      heading: "Personal year, and the cycles around it",
      icon: "gen-time",
      blocks: [
        {
          type: "p",
          text: "Numerology also reads time. In most books a personal year is worked from your birth day and month and the calendar year, and the nine numbers then repeat as a nine-year cycle.",
        },
        {
          type: "steps",
          title: "Worked for a 28 March birthday",
          items: [
            {
              title: "Year number",
              text: "Combine the day, the month and the calendar year, then reduce. For 2026: the day gives 2 + 8 = 10, the month is 3, the year gives 2 + 0 + 2 + 6 = 10, and 10 + 3 + 10 = 23, then 5.",
              icon: "numc-personal-year",
            },
            {
              title: "Month number",
              text: "Add the calendar month to the personal year, then reduce. For October, which counts as 10: 5 + 10 = 15, then 6.",
              icon: "numc-personal-month",
            },
            {
              title: "Day number",
              text: "Add the day of the month to the personal month. For 3 October: 6 + 3 = 9.",
              icon: "gen-calendar",
            },
          ],
        },
        {
          type: "p",
          text: "The usual themes, from personal year 1 to personal year 9, are new beginnings, partnership, creativity, hard work, change, responsibility, reflection, success and completion. Some books group the nine in threes: a first third for starting things, a middle third for building and tending, and a last third for gathering and letting go. It is a frame for reflection, with no rule behind it. The 28 March birthday is in year 5 in 2026, reaches year 9 in 2030 and begins the cycle again at 1 in 2031. Year 9 is read as a time of wrapping up. That labels a phase and puts no event on the calendar. Books also split on whether a personal year starts on 1 January or on your birthday.",
        },
        {
          type: "terms",
          title: "Other cycles",
          items: [
            {
              term: "Universal year",
              text: "The calendar year’s own digits added down: 2026 gives 10, then 1. It is the same for everyone, and it is read as the background against which each personal year runs.",
              icon: "numc-universal-year",
            },
            {
              term: "Pinnacles",
              text: "Western books divide a life into four phases and give each a number worked from the month, day and year of birth. For 28 March 1981 the first number is the month plus the day, each reduced first: 3 + 1 = 4. How the phases are timed varies from book to book.",
              icon: "numc-pinnacle",
            },
            {
              term: "Challenges",
              text: "Four further numbers, worked from the differences between the month, the day and the year, each reduced first. They are read as the themes a phase asks you to work on. The method is a modern Western one, and nothing tests it.",
              icon: "numc-challenge",
            },
            {
              term: "An annual look",
              text: "A conversation about the year ahead takes the personal year as a starting point and sets it beside what you want from the year: what to begin, what to tend and what to put down. It is a plan for reflection and makes no forecast.",
              icon: "numc-annual-forecast",
            },
          ],
        },
        {
          type: "p",
          text: "Personal months and days, and the weekly or daily energy numbers some writers add, are popular extensions that the sources consulted do not examine. No test shows that a personal year, month or day shapes how that stretch of time goes.",
        },
      ],
    },
    {
      id: "relationships",
      chip: "Relationships",
      heading: "Relationship numbers: comparing two sets",
      icon: "numc-relationships",
      blocks: [
        {
          type: "p",
          text: "When two people set their numbers side by side, the usual question is whether they are compatible. In Indian practice each number has friendly, neutral and unfriendly numbers, which practitioners tie to the friendships and rivalries between the planets. The lists disagree. For a 1, one source gives 4, 6, 7 and 8 as the unfriendly numbers and another gives only 8, and 1 is a friend of 4 in one source and an enemy of it in another. For that reason this page gives no table.",
        },
        {
          type: "p",
          text: "A comparison can give two people a way of talking. Say one partner’s Mulank is 2 and the other’s is 5. The usual descriptions call the first sensitive and slow to decide, and the second quick and adaptable. The pair can use that to ask who needs time, who wants to move, and how they decide together. It cannot say whether a marriage will work. For a match worked from two charts, the Kundali matching page is the one to read.",
        },
        {
          type: "p",
          text: "Some writers call a person who stirs strong feelings a karmic lesson. That is a way of finding meaning, and no number can show it. If a relationship is painful or unsafe, the helpful step is practical support from people who can give it, and a reading cannot replace that.",
        },
      ],
    },
    {
      id: "remedies",
      chip: "Everyday remedies",
      heading: "Numerology remedies: four everyday kinds, and what they do not do",
      icon: "group-remedies",
      blocks: [
        {
          type: "p",
          text: "Numerology sources describe practices associated with a number, such as a sound, colour or routine. These are traditional associations, not treatment or a promise of an outcome. Ask what any suggestion involves and why before deciding.",
        },
        {
          type: "terms",
          items: [
            {
              term: "A sentence to practise",
              text: "A line that matches the number’s theme, said or written each day. For a 5 whose pattern is starting more than finishing, it might be “I finish one thing before I begin the next”.",
              icon: "numc-remedy-mindset",
            },
            {
              term: "A sound",
              text: "A word or short mantra said aloud at a fixed time. Some practitioners choose the mantra that Indian practice attaches to the number’s planet. It is a practice of attention, and it makes no claim about the body.",
              icon: "numc-remedy-sound",
            },
            {
              term: "A colour",
              text: "Wearing, or keeping near you, the colour that Indian practice links with the number’s planet. Lists vary between sources. It works as a small, visible reminder.",
              icon: "numc-remedy-colour",
            },
            {
              term: "A routine",
              text: "A habit that matches the theme and fits your week. For an 8, it might be one commitment kept on time each day. For a 2, a short pause to decide something before asking anyone’s view.",
              icon: "numc-remedy-habit",
            },
          ],
        },
        {
          type: "p",
          text: "People often ask about stones. Some sellers pair stones with birth numbers. Jyotish chooses a stone by looking at the whole chart, which a date alone cannot supply, and no study shows that a stone changes anything. The Gemstones page explains what to look for before buying.",
        },
        {
          type: "note",
          text: "Sound, colour and routine are reminders. None is a treatment, and if a health concern or a low mood sits behind your question, a doctor is the place to begin.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions about your birth numbers",
    icon: "gen-listen",
    items: [
      { icon: "gen-explain", text: "How each of your numbers is worked, with the method named, so that you can check every step" },
      { icon: "habit-evidence", text: "Where the nine descriptions fit the way you really work, and where they miss" },
      { icon: "astro-stress", text: "Any number that has troubled you, such as a karma number, and what the idea does and does not say" },
      { icon: "astro-wellbeing-rhythm", text: "The personal year now running, and what you would like from the year ahead" },
      { icon: "astro-compatibility", text: "Two people’s numbers side by side, if the question is about a partner, used as a way to talk" },
      { icon: "habit-two-minute", text: "One small practice to try, if one fits your week" },
    ],
  },
  bring: {
    heading: "Dates to gather for your birth numbers",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Your date of birth, which every number here starts from, and your full birth name if you want the name numbers worked too" },
      { icon: "brain-words", text: "Any numbers someone has already given you, and the method they used" },
      { icon: "astro-focus", text: "The question or decision the numbers are meant to help with" },
      { icon: "gen-couple", text: "A partner’s date of birth too, with their agreement, if a comparison is part of the question" },
    ],
  },
  faqs: [
    {
      q: "How do I find my life path number?",
      a: "Break the date into day, month and year, then choose a route. You can add every digit and reduce the total, or reduce each part first and add the three results. For 28 March 1981 both routes give 5. The two agree on the final digit and part only when you stop at a master number, so a life path of 11, 22 or 33 depends on the method as well as the date. Indian writers call the same sum the Bhagyank.",
    },
    {
      q: "What is the difference between the life path and destiny numbers?",
      a: "It depends on the book. In Indian practice destiny usually means the Bhagyank, the sum of the whole date of birth, which Western books call the life path number. In Western Pythagorean books destiny, also called expression, comes from the letters of the full birth name. Two sources can therefore give different destiny numbers for one person without either being wrong, because one word is doing the work of two numbers. Ask which is meant.",
    },
    {
      q: "Does a life path number ever change?",
      a: "Never, because it comes from a date that cannot change. Anything worked from another input does move: a name total changes with the spelling or the name in use, and a personal year changes every year. If a source gives you a different life path number, the likely cause is a different method, such as keeping a master number. The date is the same, so the difference lies in the method.",
    },
    {
      q: "Does my number say what work suits me, or whether I will succeed?",
      a: "Lists that match each number to careers are convention, and none has been tested. The one clean test of full-date numbers, which looked at Nobel laureates, found no link with the prize field, and the main numerology page gives the details. A number can still prompt a question: a Mulank of 1 may lead you to ask whether you like to start things, and a 6 whether you like to look after people at work. Use the answers to learn about your own habits, and choose work on other grounds. This is not career advice.",
    },
    {
      q: "Is there a luckiest number, or an intelligent one?",
      a: "No tested ranking exists, and the sources that offer one disagree. Sources that give a lucky number usually take it from the Mulank, the Bhagyank or the numbers friendly to them, and choosing a date by it is a convention with no evidence behind it. Jyotish has its own method for choosing a date, called muhurta, covered on the astrology pages. Nothing links a number to intelligence, and a number that suits one person’s habits says nothing about anyone else’s.",
    },
    {
      q: "Are karma numbers real, and should I be afraid of one?",
      a: "They are a convention from modern books, and no study supports the idea. Nothing about one calls for fear: a total that passes through 13, 14, 16 or 19 is common, and the books read it only as a theme to notice. If a reading frightens you, put it down and look for where the claim comes from.",
    },
    {
      q: "Are the numbers 4, 7, 8 and 9 unlucky?",
      a: "No number is unlucky by nature. The reputation comes from the planets that Indian practice assigns to them: Rahu and Ketu to 4 and 7, Saturn to 8 and Mars to 9. Indian practice reads those planets as demanding or forceful, which some people count as a burden and others as a strength. Some writers call these numbers slow to build. Nothing tested shows that people with them do better or worse. The main numerology page covers the cultural side, such as why 4 is avoided in parts of East Asia.",
    },
    {
      q: "How reliable is a personal year?",
      a: "Nothing shows that a personal year affects how a year goes. The method is a modern practice, and books disagree about the date the cycle begins. Use it as a prompt for reviewing the year you are in, and for deciding what to start, what to keep tending and what to let go. A plan built around the number asks more of it than it can give.",
    },
  ],
  related: [
    "/services/numerology/lo-shu-grid/",
    "/services/numerology/name-numerology/",
    "/services/numerology/numerology-systems/",
  ],
  showFees: true,
};
