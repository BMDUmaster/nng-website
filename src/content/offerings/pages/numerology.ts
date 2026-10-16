import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "",
  title: "Numerology",
  metaTitle: "Numerology: what it can and cannot show",
  metaDescription: "Numerology in India explained plainly: what dates, names and numbers are read for, where it comes from, what the evidence shows and how Narayani uses it.",
  lead: "Your birth date, name and everyday numbers offer a starting point for reflection. Numerology is a tradition, not a prediction of what your life must become.",
  card: "When you want to look at the numbers in your life, and know what they can and cannot say.",
  icon: "hub-numerology",
  group: "",
  covers: [
    "Date of birth and name numbers",
    "Mobile, house and signature",
    "The Lo Shu grid",
    "Business names",
    "The systems, side by side",
    "What the evidence shows",
  ],
  art: { kind: "drawing", id: "hero-numerology" },
  enquiryTopic: "Numerology",
  cta: "Enquire about numerology",
  indexHeading: "Each set of numbers has a page of its own",
  intro: [
    {
      type: "p",
      text: "A life is full of numbers: a date of birth, a name that can be added up letter by letter, a phone number kept for years, the number on a front door. Numerology gives each one a small meaning. A reading is a conversation about what those meanings might say about how you work, decide and deal with people.",
    },
    {
      type: "p",
      text: "Narayani uses it as one lens beside her mind-first work. She looks at the date of birth, the name and the numbers you meet every day, and takes each total as a question to put to your own life. What you do with the question matters more than the number that raised it.",
    },
    {
      type: "p",
      text: "Numerology has not been established as a reliable way to predict events. Use a reading to ask better questions, not to hand over your decisions.",
    },
  ],
  sections: [
    {
      id: "ideas",
      chip: "Six ideas",
      heading: "Six ideas behind every reading",
      icon: "gen-explain",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Mulank",
              text: "The number read from the day you were born. Its calculation and the different names used for it belong on the personal numbers page.",
              icon: "numc-mulank",
            },
            {
              term: "Bhagyank",
              text: "The number drawn from your complete birth date. Terminology changes between Indian and Western books; the personal numbers page separates those labels and calculations.",
              icon: "numc-bhagyank",
            },
            {
              term: "Namank",
              text: "The name number. Every letter of a name carries a value from a table, and those values are totalled and brought down to one digit. The two common tables often give a different total for the same name.",
              icon: "numc-letter-count",
            },
            {
              term: "Reduction, compound and root",
              text: "These labels distinguish an original total from its final digit. The personal numbers examples show each stage, so you can compare two readings without confusing the totals.",
              icon: "numc-reduction",
            },
            {
              term: "Master numbers",
              text: "Some methods stop reducing at selected two-digit totals. The stopping rule matters; the personal numbers page shows why two methods can produce different labels for one date.",
              icon: "numc-master",
            },
            {
              term: "The planet link",
              text: "Indian practice assigns a graha, or planet, to each number, starting with the Sun at 1 and ending with Mars at 9. Early Western handbooks give 4 and 7 to other bodies.",
              icon: "numc-vedic",
            },
          ],
        },
      ],
    },
    {
      id: "origins",
      chip: "Its history",
      heading: "Where numerology comes from, and why there is more than one system",
      icon: "brain-origin",
      blocks: [
        {
          type: "p",
          text: "Numerology methods differ in how they total a date or assign values to letters. The systems page compares those rules. Labels such as Chaldean or Pythagorean do not by themselves establish an ancient lineage.",
        },
        {
          type: "p",
          text: "Claims of descent from Pythagoras, ancient Chaldea or the Vedas are common. The sources checked for this page do not support them, and none shows a Sanskrit text behind the number-to-planet links that Indian practice uses. The Lo Shu square has older, Chinese roots, but reading a birth date through it is a recent practice.",
        },
        {
          type: "p",
          text: "That history accounts for the number of systems. Two letter tables dominate: the Pythagorean, which most Western books use, and the Chaldean, the usual default for names in Indian practice. Indian practice adds the planet links, and the Lo Shu grid places the birth date’s digits in a square. None of them was settled by measurement, so one name can add to two different totals, and the numerology systems page sets the systems side by side.",
        },
      ],
    },
    {
      id: "evidence",
      chip: "What is tested",
      heading: "What is known about each kind of reading",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "A 2017 study tested a full-date birth-number method using 806 Nobel laureates. It found no association with the distribution of prize categories and no departure from the tested chance distribution. That result concerns one method and one dataset, rather than every numerological claim. Use the meanings as interpretations to question, not proven predictions.",
        },
        {
          type: "p",
          text: "A reading can still feel accurate, and psychology offers likely reasons. In a classic classroom test, students were each given the same generic paragraph as a profile written for them, and they gave it an average score of 4.3 out of 5. People also feel warmly toward the letters in their own name and the digits in their birthday, and they notice a hit more readily than a miss. Those findings describe people in general. None of them puts numerology itself to the test.",
        },
        {
          type: "table",
          head: ["What is read", "How it is worked", "What is known"],
          rows: [
            ["Date of birth", "The day, and the whole date, each added down to one digit.", "A convention with several versions. No controlled test links it to events."],
            ["Name", "Each letter is looked up in a table, and the values are totalled and reduced.", "Two tables give two totals. No controlled study of spelling changes."],
            ["Mobile and house numbers", "The digits are added down to one digit and compared with your birth numbers.", "Practitioners disagree on good totals. Untested."],
            ["Signature", "The number of the name you sign, plus slant, underline and legibility.", "A review of handwriting studies found almost no validity on neutral text. The number part is untested."],
            ["Lo Shu grid", "The digits of the birth date are placed in a three by three square.", "Sound arithmetic. The meanings of its cells are untested convention."],
            ["Business name", "The name customers use is totalled and set beside the owner’s numbers.", "Untested. Practitioners disagree on which totals suit."],
          ],
          icons: ["astro-birth-date", "numc-name", "numc-mobile", "astro-signing", "numc-loshu-system", "work-signage"],
        },
      ],
    },
    {
      id: "lens",
      chip: "Numbers and her work",
      heading: "How she uses numbers beside the mind-first work",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "For Narayani a number is where a question starts. Say the birth day is the 26th, which adds down to 8. Indian practice links 8 with Saturn, and Saturn with discipline and responsibility. The question that follows is where in your week you carry more than your share, and what would change if you said so. You can answer it with or without numerology, and the answer is what you act on.",
        },
        {
          type: "quote",
          text: "When your brain will not change, your patterns will not change, then nothing will happen.",
          source: "Narayani Garg",
        },
        {
          type: "p",
          text: "So a conversation about your numbers does not stop at a number. It moves on to what surrounds the question: the beliefs, habits and reactions that have gathered around it. That is the Brain Training side of her work, and it is where she starts. Numbers are one of the ways she looks for direction, with astrology and Vastulogy alongside where they bear on the question.",
        },
      ],
    },
    {
      id: "consultation",
      chip: "How it runs",
      heading: "How a numerology consultation works",
      icon: "gen-session-person",
      blocks: [
        {
          type: "p",
          text: "The session opens with your question, and only the numbers that bear on it are worked. Sessions are held by appointment, in person or online. After you enquire, the team agrees the format, the time and the amount with you.",
        },
        {
          type: "p",
          text: "A useful reading distinguishes the calculation from the interpretation: the sum can be checked, while its customary meaning is a belief. You can ask which method produced a total and decide whether the description fits your experience.",
        },
      ],
    },
    {
      id: "routes",
      chip: "Which page",
      heading: "Which numerology page answers your question",
      icon: "astro-stream-choice",
      blocks: [
        {
          type: "p",
          text: "Each line starts with what you may want to know and names the page that covers it.",
        },
        {
          type: "list",
          items: [
            "Working out your Mulank, your Bhagyank or your personal year: the date of birth numbers page.",
            "Whether the spelling of your name matters, and which name counts: the name numerology page.",
            "The empty and repeated numbers in a birth-date grid: the Lo Shu grid page.",
            "A mobile number or a house number: the mobile and house numbers page.",
            "The way you sign: the signature page.",
            "A business name, and a mark or logo for it: the business name and business logo pages.",
            "Numbers and a birth chart read together, for a person or for a business: the astro-numerology pages.",
            "Two sources giving you two different totals: the numerology systems page.",
          ],
        },
      ],
    },
    {
      id: "limits",
      chip: "Its boundaries",
      heading: "What numerology cannot do",
      icon: "numc-limits",
      blocks: [
        {
          type: "p",
          text: "Numerology cannot tell you what will happen, choose a safe number for a bet or an investment, or say whether a name will bring anyone anything. It has nothing to say about health, pregnancy or children. No number is bad, and none causes problems in a life.",
        },
        {
          type: "p",
          text: "A health worry, a low mood, a court matter or a money decision belongs first with the professional who handles it, and a reading is no substitute for that step.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions for a numerology conversation",
    icon: "gen-listen",
    items: [
      { icon: "numc-personal-year", text: "The numbers worked from your date of birth, and the personal year now running" },
      { icon: "numc-spelling", text: "The name you were given and the name you use, and how each adds up in the table you choose" },
      { icon: "numc-vehicle", text: "Numbers you meet every day, such as a vehicle plate or a flat number, and how you feel about them" },
      { icon: "brain-thought", text: "The question you came with, and anything you have tried or been told about it so far" },
      { icon: "habit-evidence", text: "Which of the usual descriptions match your life, and which can simply be dropped" },
      { icon: "numc-remedy-habit", text: "One small thing to try this month, if anything at all" },
    ],
  },
  bring: {
    heading: "Numbers to gather before you enquire",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Your date of birth, and the name on your birth certificate, since most totals start from these two" },
      { icon: "numc-nickname", text: "Any other name you go by, such as a nickname or a married name, if you want it worked as well" },
      { icon: "astro-focus", text: "The one question you would like the numbers to help with, in a sentence or two" },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "you are curious about your numbers and want someone to say plainly what each reading rests on",
      "you have a decision in front of you and want one more way to think it through",
      "two sources have given you two different answers and you want to know why",
    ],
    no: [
      "you want a prediction, or a promise about what will happen",
      "you want a number to choose a bet, a lottery ticket or an investment",
      "your question is about health, pregnancy, the law or money, which belong first with a professional in that field",
    ],
  },
  faqs: [
    {
      q: "Is numerology predictive?",
      a: "No. Nothing in the evidence shows that a date of birth, a name or a number can forecast what will happen to someone, and Narayani does not offer predictions. A reading can give you a set of customary descriptions to check against your own life, and a prompt to look at a question you may have put off. A reading that sounds certain is a reason to ask what the claim rests on.",
    },
    {
      q: "Is numerology scientific?",
      a: "No, and Narayani does not present it as science. A science would offer a theory of how a number could shape a life, along with tests that could show the theory wrong, and numerology has not produced a tested theory. Many people use it the way they might use a journal prompt. Whether a reading helps you see your own situation more clearly is a personal judgement, which is different from a scientific test. The evidence section above sets out what has been tested.",
    },
    {
      q: "Which numerology system does Narayani use?",
      a: "Her preferred calculation system has not yet been confirmed for this website. Chaldean values are common on Indian name-reading pages, while Western books often use the Pythagorean table. Those are conventions, not evidence of Narayani’s own method. Ask the team which system your consultation will use before comparing its totals with another reading.",
    },
    {
      q: "Which is the most important number?",
      a: "Sources disagree, and none has been tested. An early handbook ranked the day of birth first. Many Indian practitioners read the Mulank, the Bhagyank and the name number together, and some read an unfriendly number as a caution with no ban implied. A workable habit is to begin with the number closest to your question and bring in the others only if they help.",
    },
    {
      q: "Is any number bad, and can a number cause problems?",
      a: "No number is bad, and nothing shows that a number causes events in a life. Meanings are conventions, and they vary with place and book. In Indian practice 4 goes to Rahu and 8 to Saturn, an early handbook called both difficult, and some business writers call both favourable. East Asian traditions often avoid 4, since its sound echoes the word for death, Chinese culture prizes 8, and 13 is avoided in the West. A number carries the meaning a culture gives it.",
    },
    {
      q: "Does the number 9 mean endings?",
      a: "In most numerology books a personal year 9 is described as a time of wrapping up, and 9 itself is read as completion. That is a label for a phase, much as a school year closes with revision. It does not say that an event is due, and nothing shows that anything ends in a 9 year. If you want to use it, ask what is nearly finished and what you could set down.",
    },
    {
      q: "Are numbers gender-specific?",
      a: "In the Pythagorean tradition, odd numbers were labelled male and even numbers female, as a symbolic convention. Nothing in practice ties a number to the gender of the person who carries it, and a date or a name is worked the same way for everyone. People do tend to project gender onto numbers, which tells us about ourselves and nothing about the numbers.",
    },
    {
      q: "Why do the same numbers or patterns keep repeating in my life?",
      a: "If it is a number you keep noticing, that can be explained by the frequency illusion: once something has caught your attention, you spot it more often. The mind also tends to find meaning in repeats, a habit called apophenia. Neither shows that a repeated number carries a message. If it is a pattern in your life, no test links a number to a recurring pattern, and that work belongs with the habits and beliefs behind it, which the Brain Training page covers.",
    },
    {
      q: "Can changing the spelling of my name change my life?",
      a: "This page does not establish that a spelling change alters life outcomes. A practical trial and a legal name change have different implications; the name page sets out what to weigh. Ask a qualified adviser about records before changing them.",
    },
    {
      q: "Can numerology support spiritual growth?",
      a: "Some people use numbers as prompts for reflection, a way to sit with a question about timing or temperament. No research has examined whether that helps, so this is a personal matter. In Narayani’s approach a number is useful when it makes you look more honestly at what you do. It does not stand in for the practice itself, whether that is prayer or a difficult conversation.",
    },
    {
      q: "Can numerology say anything about pregnancy, children or health?",
      a: "No. Nothing shows that a number can say whether a pregnancy will come, how a child will turn out or how anyone’s health will go, and a number should never be used to decide a medical question. Those questions go to a doctor first. Narayani does not diagnose or treat. If the worry itself is heavy, you are welcome to say so when you write.",
    },
    {
      q: "Why have a personal reading when number meanings are online?",
      a: "A list can only give everyone born on the same day the same paragraph. A conversation can start from your question, set the numbers beside the rest of your life, and let you say which descriptions fit and which do not. It can also explain why two sources gave you two different totals, so the difference stops being confusing. If you already know what your numbers say and want to understand them, that is a good reason to ask.",
    },
  ],
  related: [
    "/services/numerology/personal-numbers/",
    "/services/numerology/name-numerology/",
    "/services/numerology/lo-shu-grid/",
    "/services/numerology/numerology-systems/",
  ],
  showFees: true,
};
