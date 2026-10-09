import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "business-name",
  title: "Business name numerology",
  metaTitle: "Business name numerology",
  metaDescription: "How a business name is read in numerology: its total beside the owner’s numbers, the kind of business and the launch date, with the limits stated plainly.",
  lead: "Considering a new business name? Narayani reads its total alongside the owner’s numbers and business context. The choice remains yours.",
  card: "When you are choosing between names, or asking whether the one you use still fits.",
  icon: "page-business-name",
  group: "larger",
  covers: [
    "The name against your numbers",
    "Kind of business, launch date",
    "Registered and trade names",
    "Spelling, domains and handles",
    "Two or more owners",
    "Letters, initials and the mark",
    "Where the tables disagree",
  ],
  art: { kind: "numbers", variant: "business" },
  enquiryTopic: "Numerology: a business name",
  cta: "Enquire about a business name reading",
  intro: [
    {
      type: "p",
      text: "The same name can add up to more than one total. The result depends on the table used, the spelling counted, whether the legal ending is included and whether 11 is reduced, and practitioners do not agree on all of these. A reading therefore begins by naming the choices it makes, so that you can see what would change the result.",
    },
    {
      type: "p",
      text: "Narayani reads a name as a way to think through a decision. She says at the start that a total forecasts nothing about the business. Then she asks what the name is meant to carry for you, because the answer often bears on the decision more than the arithmetic does.",
    },
    {
      type: "p",
      text: "This page explains name-number calculations. It does not promise naming or logo production. A naming professional or designer can help develop the shortlist and mark.",
    },
  ],
  sections: [
    {
      id: "what-is-read",
      chip: "What is read",
      heading: "What a business name consultation looks at",
      icon: "numc-name",
      blocks: [
        {
          type: "p",
          text: "Four things are set side by side. None of them decides anything alone; the reading is in how they compare.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The name’s total",
              text: "The letters are turned into numbers with a table and added up. The sum is brought down to one digit, and the figure before that last step, the compound number, is kept for reference. Some practitioners stop at 11, 22 or 33 instead of reducing further. The choice of table changes the result, as the worked example below shows.",
              icon: "numc-destiny",
            },
            {
              term: "The owner’s numbers",
              text: "Mulank, taken from your birth day, and Bhagyank, taken from your whole date of birth, are the two numbers a name is set beside. The personal numbers page shows how each is worked out. Lists of friendly, neutral and opposed numbers are published, and they contradict each other, so a reading names the list it follows.",
              icon: "numc-bhagyank",
            },
            {
              term: "The kind of business",
              text: "In Indian usage each number belongs to a planet, and each planet is tied to certain kinds of work. Mercury goes with trade, writing and accounts, Venus with design and the arts, Jupiter with teaching and advice, and Saturn with service and long structured work. A name whose total belongs to the planet of the work is said to suit it, and that is a convention. Published lists of favourable business totals differ: one runs 1, 5, 6, 8, 9 and another runs 1, 4, 6, 8, 9.",
              icon: "work-business-kind",
            },
            {
              term: "The launch date",
              text: "A business has a date of its own: the day it opens or the day it is registered. Its numbers are worked out as for a birth date and set beside the name and the owner’s numbers. Which day counts as the business’s birth has more than one answer, and the business AstroNumerology page lays out the options.",
              icon: "astro-business-launch",
            },
          ],
        },
      ],
    },
    {
      id: "worked-example",
      chip: "Worked example",
      heading: "A name added up in two tables",
      icon: "numc-pythagorean",
      blocks: [
        {
          type: "p",
          text: "Two letter tables are in common use: the Pythagorean, which follows the alphabet, and the Chaldean, which groups letters by sound and leaves 9 unassigned. The numerology systems page gives both in full. Here is an invented name, Vihaan Foods, in three forms.",
        },
        {
          type: "table",
          head: ["Name as written", "Chaldean total", "Pythagorean total"],
          rows: [
            ["Vihaan Foods", "48, then 12, then 3", "51, then 6"],
            ["Vihan Foods, one A dropped", "47, then 11 (or 2, if 11 is reduced)", "50, then 5"],
            ["Vihaan Foods Private Limited", "97, then 16, then 7", "124, then 7"],
          ],
          caption: "An invented name, used only to show the arithmetic.",
        },
        {
          type: "p",
          text: "Each form gives its own reading. Dropping one A moves the Chaldean total from 3 to 11, which some practitioners keep as a master number and others reduce to 2. Adding the legal ending changes the total again, so the usual practice is to count the name customers see and leave Private Limited out. The plain name reads as 3 in one table and 6 in the other.",
        },
        {
          type: "p",
          text: "Indian names add a further difficulty, because many have more than one accepted Roman spelling. Laxmi and Lakshmi are two. In the Chaldean table LAXMI totals 14, then 5, while LAKSHMI totals 19, then 10, then 1. The Pythagorean table gives the same pair, 5 and 1. A reading counts the spelling that is on your board.",
        },
      ],
    },
    {
      id: "which-name",
      chip: "Which name",
      heading: "Which of a business’s names is counted",
      icon: "numc-nickname",
      blocks: [
        {
          type: "p",
          text: "A business usually has several names in use, and a reading has to say which one it counts. The name customers use is the one counted, so a word such as Traders or Studio stays in when customers say it, and the legal ending, such as Private Limited, goes out.",
        },
        {
          type: "table",
          head: ["Name", "Where it is seen", "In a reading"],
          rows: [
            ["Registered name", "The certificate of incorporation, contracts and invoices", "Counted when it is also the name customers use. Otherwise read separately, usually without its legal ending."],
            ["Trade name or brand", "The board, packaging, cards and advertising", "The one usually counted, because it is the name customers see and say."],
            ["The owner’s own name", "A shop, studio or practice that uses the owner’s name", "The total is also the owner’s name number, so the question becomes which form is shown: the full name, a first name, or a surname with a trade word."],
            ["Web address and handles", "The domain, email addresses and social accounts", "Each is a spelling of the name. One that differs from the board is a second name to count."],
          ],
          icons: ["work-registered-name", "work-signage", "gen-owner", "work-web-handle"],
        },
        {
          type: "p",
          text: "Practitioners differ here. Chaldean practice counts the name most used, and many modern Pythagorean pages count the name given at birth, which for a company would be the registered name. Where the two differ, Narayani reads both and says which she used.",
        },
      ],
    },
    {
      id: "practical-checks",
      chip: "Practical checks",
      heading: "What to settle before the numbers",
      icon: "astro-legal",
      blocks: [
        {
          type: "p",
          text: "A name has to be usable before it can be suitable. These checks come first, and none of them is a numerology question.",
        },
        {
          type: "list",
          items: [
            "Registration. Ask a company secretary or appropriately qualified adviser which naming and registration requirements apply.",
            "Similar names. Another business may already use a name close to yours or hold a trade mark on it. A trade mark professional can search for that, and a total cannot.",
            "Web address and handles. Check that your spelling is available as a domain and on the platforms you will use. If it is not, any workaround becomes a second spelling of the name.",
            "Saying it aloud. A name that customers cannot spell after hearing it once makes every search and referral harder, whatever it adds up to.",
            "Spelling. If a spelling is going to be adjusted for any reason, do it before registration, while it is still a decision and not yet a legal procedure.",
          ],
        },
        {
          type: "note",
          text: "Changing the name of a registered company is a legal process. The answer on changing a company name, below, sets out what it involves. This is general information and not legal advice; a company secretary or chartered accountant can confirm the current requirements.",
        },
      ],
    },
    {
      id: "partners",
      chip: "Partners",
      heading: "When there is more than one owner",
      icon: "numc-partners",
      blocks: [
        {
          type: "p",
          text: "Two owners bring two sets of numbers, and a name that sits well beside one may sit badly beside the other. The published lists do not settle it. For partners born on the 1st and the 4th, one list calls their numbers opposed and another calls them friends.",
        },
        {
          type: "p",
          text: "So the useful question is seldom which total suits everyone. It is whose numbers should lead, which is usually a question about who leads the business. Narayani lays each partner’s numbers beside the name, shows how each list would sort them, and lets the talk turn to roles.",
        },
        {
          type: "p",
          text: "Each partner’s birth details are used only with that partner’s agreement. A name that one partner has accepted reluctantly is worth raising before it is printed.",
        },
      ],
    },
    {
      id: "name-and-mark",
      chip: "Name and logo",
      heading: "Where the name meets the mark",
      icon: "numc-logo",
      blocks: [
        {
          type: "p",
          text: "Once a name is settled it has letters to count, initials to use and, soon after, a mark to draw. Some practitioners read the number of letters as a second number beside the total. They take the initials as the shortest form of the name, and they carry the number into the logo through its colours, its symbols and the count of its parts.",
        },
        {
          type: "p",
          text: "Initials, letter count and a full name can be treated as separate calculations. Their inclusion here does not promise a designer brief or a combined consultation.",
        },
      ],
    },
    {
      id: "evidence",
      chip: "The evidence",
      heading: "What is known about a name’s total and a business’s results",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "No study shows that choosing a name by its total, or by how the total sits beside the owner’s numbers, changes how a business does. The lists of favourable totals also contradict each other, so the tradition itself gives no single answer. The general evidence on numerology is set out on the main numerology page.",
        },
        {
          type: "p",
          text: "Beliefs about numbers differ from market to market as well. In parts of East Asia 4 is avoided because it sounds like the word for death, in Chinese culture 8 is prized, and much of the West avoids 13. A business selling in several markets meets several sets of beliefs.",
        },
      ],
    },
    {
      id: "first-question",
      chip: "Her first question",
      heading: "What the name carries before what it totals",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "A name can arrive with a worry attached, such as a total that someone called wrong for your numbers. Narayani starts by asking what the name is carrying for you. It might be a grandparent’s name, a place you left, or a word that made you smile in a meeting.",
        },
        {
          type: "p",
          text: "Take two invented owners whose names reach the same total. One has traded under hers for eleven years and likes it, so a change would cost her recognition. The other chose his in an afternoon and has never liked it, so his question is whether to keep a name he dislikes. Narayani sets out what each choice would cost, what it would carry forward and what would stay the same. The decision stays with you.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions about a business name",
    icon: "gen-listen",
    items: [
      { icon: "numc-chaldean", text: "The total of the name as customers use it, in the table you choose, with its compound number beside it" },
      { icon: "numc-mulank", text: "Your Mulank and Bhagyank, and those of any partner who shares the name" },
      { icon: "numc-vedic", text: "What the business does, and the planets the tradition ties to that kind of work" },
      { icon: "gen-calendar", text: "The day you opened or plan to open, and the numbers of that date" },
      { icon: "numc-letter-count", text: "How many letters the name has, its initials, its spelling and how it reads aloud" },
      { icon: "brain-belief", text: "What the name means to you, and what you have been told about it" },
    ],
  },
  bring: {
    heading: "Names and dates to bring for the reading",
    icon: "gen-bring-details",
    items: [
      { icon: "numc-spelling", text: "The name, or each name on your shortlist, spelled exactly as you would write it, with any web address you hope to use" },
      { icon: "gen-bring-name", text: "Your date of birth, for your own numbers, and a partner’s only if they agree to share it" },
      { icon: "astro-birth-date", text: "Your opening date, actual or planned, and the registration date if there is one" },
      { icon: "gen-professional", text: "A line on what the business does and who it serves" },
    ],
  },
  suits: {
    icon: "gen-limits",
    yes: [
      "you are weighing a few names and want a structured way to talk them through",
      "you already use a name and want to know what the tradition says before you decide anything",
      "you would like the reasoning set out, including where the published lists disagree",
    ],
    no: [
      "you want a name invented for you",
      "you want a number to decide how the business does",
      "you need advice on registering, protecting or changing a name, which belongs to a company secretary, an accountant or a trade mark professional",
    ],
  },
  faqs: [
    {
      q: "Can a consultation suggest a new name for my business?",
      a: "Build a shortlist on practical grounds first: what you want the name to say, whether people can pronounce it and which registration or trade mark checks are needed. Ask about the scope of numerology guidance before choosing an appointment.",
    },
    {
      q: "Can I change my company name?",
      a: "A company-name change has legal and administrative requirements. Ask your company secretary or appropriately qualified adviser about the current steps before changing registration, accounts or public material. A numerology reading cannot establish compliance.",
    },
    {
      q: "Is Chaldean numerology used for business names?",
      a: "Both tables are used, and published methods for business names often default to the Chaldean. The same name can total differently in each, as the worked example shows. The label Chaldean suggests great antiquity, and the numerology systems page looks at what is actually known about the table’s origin. Narayani states which table a reading uses.",
    },
    {
      q: "How many letters should a business name have?",
      a: "Nothing shows that one letter count does better than another. Some practitioners read the count as a second number beside the total, and Narayani can read it with you if you like. Practical points settle the matter better: whether people can say the name, spell it and fit it on a card, a board and a handle. A count you like for your own reasons is a fair reason.",
    },
    {
      q: "Can I adjust an existing business name by changing its spelling?",
      a: "Some practitioners suggest it: add, drop or double a letter, or add an initial, to reach a different total. No controlled study shows that it changes outcomes. For a registered company, a change of spelling means the legal process described under changing a company name. For a trade name or brand it is a design change, and customers who know the old spelling have to learn the new one. Before registration a spelling is only a decision, so that is the easiest time to make one.",
    },
    {
      q: "How do I choose a lucky business name?",
      a: "No name has been shown to be lucky. The word is used for a name whose total sits well with the owner’s numbers in one particular list, and the published lists disagree. A steadier method is to choose on practical grounds first: easy to say and spell, available online, without a clash with another business, and registrable. Then use the numbers as one more thing to talk through. Narayani reads the total with you and says what the tradition links with it. Luck is not something she offers.",
    },
    {
      q: "Why does numerology make so much of a business name?",
      a: "The tradition’s reasoning is that a name is the word most often attached to a business, said by every customer and written on everything, so it is read as carrying a character of its own. Some practitioners describe this as the name’s energetic field and link it with confidence and with how the business is seen. Those are beliefs, and nothing has measured them. The ordinary reason is easier to see: the name is the first thing customers meet.",
    },
    {
      q: "What if the numbers do not suit a name I already love?",
      a: "Then you have a decision with more than one input. The total is one of them, the tables behind it disagree, and a change has real costs: customers who know the old name, printed material, search results and, for a company, a legal process. Narayani sets these out and asks what the name means to you. Keeping the name is a fair outcome, and so is changing it. Neither is a verdict on you or on the business.",
    },
    {
      q: "Does a name reading include a logo?",
      a: "The business-logo page explains related questions about a mark. Ask what scope is available; no logo production or designer deliverable is promised here.",
    },
    {
      q: "Can numerology tell me whether my business will do well?",
      a: "No. Numerology is a way to reflect on a name and forecasts no results. How a business does depends on its customers, its costs and prices, and the work itself, and a reading replaces none of them. Narayani can help you think about the name. For money, tax and legal questions, ask a qualified professional, since this guidance is not financial or legal advice.",
    },
  ],
  related: [
    "/services/numerology/name-numerology/",
    "/services/numerology/business-logo/",
    "/services/numerology/business-astro-numerology/",
    "/services/astrology/career-and-business/",
  ],
  showFees: true,
};
