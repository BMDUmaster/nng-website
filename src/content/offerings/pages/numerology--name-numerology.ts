import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "name-numerology",
  title: "Name numerology",
  metaTitle: "Name numerology: Chaldean and Pythagorean",
  metaDescription: "How a name becomes a number: both letter tables in full, worked examples, which name to use, and the practical cautions on changing a spelling.",
  lead: "See how your name’s letters become a number, and why methods differ. A spelling change is an option to consider, never a condition for success.",
  card: "When you want to know what your name adds up to, and whether to change its spelling.",
  icon: "page-name-numerology",
  group: "yours",
  covers: [
    "What a name number is",
    "Chaldean and Pythagorean tables",
    "Which name to use",
    "Compound and master numbers",
    "Changing a spelling, with care",
    "A personal name consultation",
  ],
  art: { kind: "numbers", variant: "name" },
  enquiryTopic: "Numerology: my name",
  cta: "Enquire about my name numbers",
  intro: [
    {
      type: "p",
      text: "Before changing a spelling, understand the calculation behind the suggestion. You can check a name total on paper; you do not have to accept it because someone sounds certain.",
    },
    {
      type: "p",
      text: "Narayani considers the name beside your birth date as a prompt for conversation. There is no established evidence that a letter total or a new spelling changes life outcomes. Your identity and practical records matter more than a preferred total.",
    },
  ],
  sections: [
    {
      id: "what-it-is",
      chip: "A name number",
      heading: "What a name number is, and how it is made",
      icon: "numc-name",
      blocks: [
        {
          type: "p",
          text: "The name number, called the Namank in Indian practice, comes from four steps: write the name out, look up each letter’s value in a table, add the values, and keep adding the digits of the total until a single digit remains. That digit is the root number, and the total just before it is the compound number.",
        },
        {
          type: "p",
          text: "The values come from one of two tables, Chaldean or Pythagorean, and the same name can add up differently in each. Neither is the correct one. A total only means something when it is quoted with the table that produced it.",
        },
      ],
    },
    {
      id: "root-and-compound",
      chip: "Root and compound",
      heading: "Root, compound and master numbers",
      icon: "numc-reduction",
      blocks: [
        {
          type: "p",
          text: "In the Chaldean approach described here, the reduced digit and the unreduced total can be given separate meanings. Those meanings vary between lists. A total that someone describes negatively is not a reason to fear your name.",
        },
        {
          type: "p",
          text: "Master numbers are a separate idea. Some practitioners keep a total of 11, 22 or 33 whole instead of reducing it to 2, 4 or 6, and a few sites treat 44 the same way, though not every source recognises it. Sites that call 11, 22, 33 and 44 compound numbers are mixing two terms. Keeping a master number changes the answer for any name that lands on one, and the date of birth numbers page shows the choice worked through.",
        },
      ],
    },
    {
      id: "which-name",
      chip: "Birth or daily name",
      heading: "Which name counts",
      icon: "astro-stream-choice",
      blocks: [
        {
          type: "p",
          text: "Practitioners differ. Chaldean practice uses the name you are known by. Many modern Pythagorean sources use the birth name, though the early writer behind the English-alphabet method read the name a person is known by. Each answers a different question: the birth name asks where you started, and the name in use asks how you are known today. A conversation can work out both side by side. Initials raise a question of their own, answered at the end of the page.",
        },
        {
          type: "terms",
          items: [
            {
              term: "The birth name",
              text: "The name on your birth certificate, spelled exactly as it is written there. Western books use it for the destiny, soul urge and personality numbers.",
              icon: "gen-parents",
            },
            {
              term: "The name you use",
              text: "The name people call you and write to you by, married name included. Chaldean practice favours it.",
              icon: "astro-signing",
            },
            {
              term: "Nicknames and pet names",
              text: "A nickname counts if people use it every day, and it can be worked on its own. A name used only at home may deserve a separate look.",
              icon: "numc-nickname",
            },
          ],
        },
      ],
    },
    {
      id: "tables",
      chip: "Letter tables",
      heading: "The two letter tables, in full",
      icon: "numc-letter-count",
      blocks: [
        {
          type: "table",
          head: ["Value", "Chaldean", "Pythagorean"],
          rows: [
            ["1", "A, I, J, Q, Y", "A, J, S"],
            ["2", "B, K, R", "B, K, T"],
            ["3", "C, G, L, S", "C, L, U"],
            ["4", "D, M, T", "D, M, V"],
            ["5", "E, H, N, X", "E, N, W"],
            ["6", "U, V, W", "F, O, X"],
            ["7", "O, Z", "G, P, Y"],
            ["8", "F, P", "H, Q, Z"],
            ["9", "None, left unassigned", "I, R"],
          ],
          icons: ["num-1", "num-2", "num-3", "num-4", "num-5", "num-6", "num-7", "num-8", "num-9"],
        },
        {
          type: "p",
          text: "The Pythagorean table follows the alphabet in cycles of nine. A is the first letter, J the tenth and S the nineteenth, and all three are 1. A letter’s value is its place in the alphabet, reduced.",
        },
        {
          type: "p",
          text: "The Chaldean table groups letters by sound rather than alphabet order, and it leaves 9 unassigned. Why 9 is left out, and where the table began, are both disputed, and several versions of the table are in circulation, so ask which one is being used. The numerology systems page covers where each table came from.",
        },
      ],
    },
    {
      id: "worked",
      chip: "Worked examples",
      heading: "The same name, worked in both tables",
      icon: "numc-pythagorean",
      blocks: [
        {
          type: "p",
          text: "Take MEERA. The two tables agree on M, E and A, and part ways on R, which is 2 in the Chaldean table and 9 in the Pythagorean.",
        },
        {
          type: "table",
          head: ["Table", "M", "E", "E", "R", "A", "Total", "Reduced"],
          rows: [
            ["Chaldean", "4", "5", "5", "2", "1", "17", "8"],
            ["Pythagorean", "4", "5", "5", "9", "1", "24", "6"],
          ],
        },
        {
          type: "p",
          text: "One letter moves the root from 8 to 6. In Indian practice 8 belongs to Saturn and 6 to Venus, but neither total is better than the other, and neither table is more right. Both are conventions.",
        },
        {
          type: "p",
          text: "A name of two words raises a second question: when to reduce. Take NAMRATA JOSHI in the Chaldean table. NAMRATA adds to 18, which reduces to 9, and JOSHI adds to 17, which reduces to 8.",
        },
        {
          type: "table",
          head: ["Route", "Working", "Compound", "Root"],
          rows: [
            ["Reduce each word, then add", "9 + 8", "17", "8"],
            ["Add every letter at once", "18 + 17", "35", "8"],
          ],
        },
        {
          type: "p",
          text: "Both routes end on the same root, 8, but the compounds differ, 17 and 35, so anyone who reads the compound should say which route they took. Worked in the Pythagorean table, NAMRATA is 23 and JOSHI is 25, so the total is 48, then 12, then 3.",
        },
      ],
    },
    {
      id: "carries",
      chip: "What a name carries",
      heading: "What a name is said to carry, and how it sits beside your date",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "The claim behind name numerology is that the letters of a name carry something of a person’s character, a kind of signature that colours how they come across. Some practitioners call it a vibration. There is no measurement behind this, and no controlled study of whether a name total matters for anything.",
        },
        {
          type: "p",
          text: "The pull people feel toward their own name does have real roots. Psychologists have found, repeatedly, that people prefer the letters of their own name. That is a fact about liking and says nothing about destiny, though it helps explain why a reading of your own name can feel as if it matters.",
        },
        {
          type: "p",
          text: "Beside the date numbers, practitioners compare a name total with the Mulank and the Bhagyank and ask whether the numbers are friendly, neutral or unfriendly. The lists they use disagree, so this page gives none. The useful part is the conversation: where the name you use points somewhere different from the date of birth, and whether that matches anything you notice in yourself.",
        },
      ],
    },
    {
      id: "changing",
      chip: "Changing a spelling",
      heading: "Changing a spelling: what to weigh",
      icon: "numc-name-correction",
      blocks: [
        {
          type: "p",
          text: "A practitioner who proposes a change usually starts from a target total, one counted friendly to your Mulank or Bhagyank. The spelling is then adjusted to reach it, by adding, dropping or doubling a letter, or by adding an initial. The new spelling goes on visiting cards, social profiles and the nameplate, and some practitioners advise it on documents too, without saying how the paperwork is done. Press coverage mostly concerns stage names and film titles, and says little about legal changes.",
        },
        {
          type: "p",
          text: "Take MEERA in the Chaldean table. Its letters total 17, which reduces to 8. Doubling the last letter gives MEERAA, 18, then 9. Respelling it MIRA totals 8. These three spellings give two different roots, 8 and 9. A spelling change can alter a total, but it need not alter the root.",
        },
        {
          type: "p",
          text: "Practitioners argue that a changed spelling puts a name in line with the birth numbers. The idea dates back to the early handbooks, which promised a great deal for it. No controlled study has tested it, and the supporting stories are anecdotes, mostly about well-known people.",
        },
        {
          type: "p",
          text: "A spelling change is a decision with practical costs. Ask which table and reasoning support a suggestion, and consider whether you like the spelling apart from its total. Your identity and records matter more than a preferred number.",
        },
      ],
    },
    {
      id: "paperwork",
      chip: "The paperwork",
      heading: "Changing a name on paper: what to check first",
      icon: "astro-legal",
      blocks: [
        {
          type: "p",
          text: "Using a new spelling on a card is one thing. Changing a name on paper is another, and it touches more than most people expect.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Informal use",
              text: "A spelling on visiting cards, a nameplate or a social profile is easy to undo. It is not a legal change, and your records will go on carrying your legal name.",
              icon: "work-signage",
            },
            {
              term: "A legal change",
              text: "A formal name change may involve Gazette publication and updates to several records. The procedure depends on the authority and your circumstances. Check the current official instructions before choosing a spelling or paying for paperwork.",
              icon: "numc-legal-name-change",
            },
            {
              term: "Identity records",
              text: "Aadhaar has limits and document requirements for name updates; check UIDAI’s current instructions for your case. Passport Seva, banks and other issuing bodies have their own requirements. A spelling used socially does not automatically change the name on your identity, education, property or insurance records.",
              icon: "numc-id-card",
            },
          ],
        },
        {
          type: "note",
          text: "This is general information, not legal advice. Rules change, so check with the office that issues each record, or with a lawyer, before you act.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions about a name and its totals",
    icon: "gen-listen",
    items: [
      { icon: "numc-chaldean", text: "Your birth name and the name you use, each worked in the table you choose, with the working shown" },
      { icon: "numc-bhagyank", text: "How those totals sit beside your Mulank and Bhagyank, and whether that matches what you notice" },
      { icon: "numc-signature-underline", text: "The spellings already in use across your documents, signature and social profiles" },
      { icon: "gen-child", text: "Whether the question is a name still to be chosen, such as a child’s name or a stage name" },
      { icon: "gen-caution", text: "What a change would cost in paperwork and explanation, set beside what you hope it would give" },
    ],
  },
  bring: {
    heading: "Names and spellings to write out first",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Your name exactly as it is on your birth certificate, letter by letter" },
      { icon: "brain-words", text: "Any other name you answer to, including a nickname or a married name, and the spelling on your documents" },
      { icon: "astro-birth-date", text: "Your date of birth, for the numbers your name total will sit beside" },
      { icon: "numc-spelling", text: "If you are weighing a change, the spelling you have in mind and your reason" },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "you are curious about the total your name makes and want the working shown",
      "you are choosing a name, for a child or for yourself, and would like one more angle on it",
      "someone has told you to change a spelling and you want to understand why",
    ],
    no: [
      "you want a change of spelling promised to alter what happens to you",
      "you are thinking of a legal change of name only because of a total",
      "you hope to be told that your name is wrong",
    ],
  },
  faqs: [
    {
      q: "Does a change of spelling really matter?",
      a: "The claim is conditional: if the new total suits your birth numbers, the name will work better for you. There is no way to check it, because working better is never defined, and stories of success pick out the people it seemed to suit. No controlled study supports it. If a spelling pleases you, use it in a place that is easy to reverse. It matters only to the extent that you decide it does.",
    },
    {
      q: "Should I change my name for numerology?",
      a: "Only for reasons you would still be glad of without the numbers: a name you dislike, a spelling that is always mispronounced, a family wish. A legal change touches every record you hold, so weigh the effort honestly, and take care if the idea comes from a fear that your name is wrong. Narayani does not push anyone toward a change.",
    },
    {
      q: "Which numerology system is used for names, and why is Chaldean so common?",
      a: "Two tables are in common use. The Chaldean table is built on letter sounds and is the one most Indian sources apply to names. The Pythagorean table follows the alphabet and dominates Western books. Supporters of each have their reasons, but no test shows either to be more accurate. A name conversation can work in either or both, with the working shown, so the totals can be compared. Ask which table anyone is using, and why.",
    },
    {
      q: "Do initials count?",
      a: "They do if they are part of the name you are working with, because each initial is a letter with a value. Some practitioners count the initial as written, and others work with the name it stands for. In parts of India, especially the south, an initial often stands for a father’s name or a native place, so it helps to work both versions and see whether the total changes.",
    },
    {
      q: "Why did two people give me two different totals for my name?",
      a: "Three things usually explain it. They may have used different tables, Chaldean for one and Pythagorean for the other. They may have read different names, such as the birth name and the name in use. Or one may have reduced each word first while the other added every letter at once, which changes the compound but never the root. Ask each person for the table, the name and the route.",
    },
    {
      q: "What does a name number say about me?",
      a: "Some writers read the name number as how you come across to other people and the date numbers as your starting temperament. That split is a convention, and nothing supports it. The honest case for caring about a name total is a modest one: it gives you something specific to reflect on. It does not describe you, and it does not predict anything about you.",
    },
    {
      q: "Is my name wrong for my date of birth?",
      a: "No name is wrong. When a name total sits awkwardly beside your date numbers, practitioners read it as a contrast to notice. Nobody needs to repair it, and most people simply leave it. If anyone tells you a name is harmful or unlucky, ask what that rests on. Nothing shows that a name total has any effect on a life.",
    },
    {
      q: "Does my number change if I take a married name?",
      a: "The total changes, because the letters change. Practitioners differ on which name to read, and some work both the birth surname and the married one and see how each sits beside the date numbers. Whether to take a married name is a personal and legal decision, and no total should settle it.",
    },
  ],
  related: [
    "/services/numerology/personal-numbers/",
    "/services/numerology/business-name/",
    "/services/numerology/numerology-systems/",
  ],
  showFees: true,
};
