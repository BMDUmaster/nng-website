import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "numerology-systems",
  title: "Numerology systems compared",
  metaTitle: "Numerology systems compared",
  metaDescription: "Chaldean, Pythagorean, Vedic, Western, Lo Shu and more: what each numerology system counts, why answers differ, and how to choose between them.",
  lead: "Different methods can give different totals for the same name. See what each system counts and why its answers differ.",
  card: "When two numerologists gave you two different answers, or you want to know why.",
  icon: "page-numerology-systems",
  group: "larger",
  covers: [
    "Chaldean and Pythagorean",
    "Vedic and Western modern",
    "Lo Shu and other systems",
    "Why answers differ",
    "Which system for which question",
    "A comparison table",
    "Evidence, stated plainly",
  ],
  art: { kind: "drawing", id: "hero-numerology-systems" },
  enquiryTopic: "Numerology: which system",
  cta: "Ask which system fits your question",
  intro: [
    {
      type: "p",
      text: "Take the name Meera. Add its letters with the Chaldean table and the total is 17, which reduces to 8. Add the same letters with the Pythagorean table and the total is 24, which reduces to 6. Nobody has miscounted. The two tables give the letter R different values, 2 in one and 9 in the other, so the two readers start from different numbers.",
    },
    {
      type: "p",
      text: "That small gap is typical. Numerology has no founding text that everyone accepts and no test that could settle which table is right. What exists is a handful of systems, each with its own conventions. Knowing which one you were given, and what it counts, is most of what you need to read the answer sensibly.",
    },
  ],
  sections: [
    {
      id: "origins",
      chip: "Origins",
      heading: "Where the systems come from",
      icon: "brain-origin",
      blocks: [
        {
          type: "p",
          text: "Names such as Pythagorean, Chaldean and Vedic are used for different numerology methods. A name alone does not establish ancient authorship or a continuous textual lineage. The letter tables below are compared as methods, rather than proof of their historical origin.",
        },
        {
          type: "p",
          text: "Where the Chaldean table really came from is unsettled. The handbook credits the Chaldeans and says the Hebrews inherited it from them. A practitioner-historian reverses the direction: in that account the values for Latin letters were adapted in modern times from Hebrew and Aramaic ones. Neither account has been verified. In the sources checked, nothing links the Pythagorean table to Pythagoras, or any method of numerology to the Vedas.",
        },
        {
          type: "p",
          text: "The Lo Shu grid is the exception. The square itself is far older than these writers, and only its use with birth dates is modern. The page on the Lo Shu grid gives its history.",
        },
        {
          type: "p",
          text: "A convention can still be a useful way to organise a conversation. Age is not a reason to trust one system over another.",
        },
      ],
    },
    {
      id: "the-systems",
      chip: "The systems",
      heading: "The eight systems, one by one",
      icon: "hub-numerology",
      blocks: [
        {
          type: "p",
          text: "These are the systems named in the sources checked. Some entries are systems in the full sense, with their own table and method. Others are a label, or a way of applying a table, and the entry says so.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Chaldean",
              text: "Counts the letters of a name with a table of values from 1 to 8, and leaves 9 without a letter. Letters are grouped by sound, so C, G, L and S all count as 3. The total is read twice: as a compound number, from 10 up to 52 in the best-known handbook, and as the single digit beneath it. It is the default for names on the Indian pages checked.",
              icon: "numc-chaldean",
            },
            {
              term: "Pythagorean",
              text: "Runs the alphabet from A to Z through the digits 1 to 9 in order, so A, J and S are 1 and I and R are 9. The name implies descent from Pythagoras, but no source ties the method to him. The method reached English-language readers through early twentieth-century handbooks, and many modern sites count the birth name with it.",
              icon: "numc-pythagorean",
            },
            {
              term: "Vedic or Indian",
              text: "Starts from the date of birth: Mulank from the day, Bhagyank from the whole date, and name totals from a letter table. It gives each digit a graha, or planet, from the nine of Jyotish: 1 the Sun, 2 the Moon, 3 Jupiter, 4 Rahu, 5 Mercury, 6 Venus, 7 Ketu, 8 Saturn and 9 Mars. No Sanskrit source for the numerology method itself has been found.",
              icon: "numc-vedic",
            },
            {
              term: "Tamil or Dravidian",
              text: "A label for numerology as practised in Tamil-speaking regions and the wider south. This page could not confirm a standard table or method for it, so it describes none and makes no claim about one. If you hold a reading in this tradition, bring it with the letters and the table it used.",
              icon: "numc-tamil",
            },
            {
              term: "Western modern",
              text: "Uses the Pythagorean table. A life path number comes from the whole birth date, and name numbers are worked from the letters of the birth name, sometimes split into vowels and consonants. Here “destiny” usually means a name number, where Indian pages use it for the number of the birth date.",
              icon: "numc-western",
            },
            {
              term: "Chinese Lo Shu",
              text: "A nine-cell grid taken from a Chinese magic square. The digits of a date of birth are placed on it, so that you can see which digits are present and which are absent. The page on the Lo Shu grid covers the layouts in use and where readers disagree.",
              icon: "numc-loshu-system",
            },
            {
              term: "Money numerology",
              text: "A label more than a method. It is used for readings about earning and spending, and one account ties it to Hebrew mysticism, which could not be confirmed. No agreed table or procedure could be found behind the name. A number cannot guide a money decision, and this is not financial advice.",
              icon: "numc-money",
            },
            {
              term: "House-number numerology",
              text: "Not a separate system: the same digit-adding applied to the number on a door. The page on mobile and house numbers covers the method.",
              icon: "numc-house-number",
            },
          ],
        },
      ],
    },
    {
      id: "two-tables",
      chip: "Two tables",
      heading: "One name, two tables, side by side",
      icon: "numc-name",
      blocks: [
        {
          type: "p",
          text: "The two letter tables agree on ten of the 26 letters and differ on the other sixteen. The table sets the letters of Meera against both of them. Four of the five match, and the fifth, R, carries the whole difference.",
        },
        {
          type: "table",
          head: ["Letter", "Chaldean value", "Pythagorean value"],
          rows: [
            ["M", "4", "4"],
            ["E", "5", "5"],
            ["E", "5", "5"],
            ["R", "2", "9"],
            ["A", "1", "1"],
            ["Total", "17", "24"],
            ["Reduced", "8", "6"],
          ],
          caption: "MEERA, letter by letter",
        },
        {
          type: "p",
          text: "A longer name leaves more room for difference still. How a full name is totalled, all at once or word by word, is set out on the page about name numerology.",
        },
      ],
    },
    {
      id: "where-they-differ",
      chip: "Where they differ",
      heading: "Where practitioners part ways",
      icon: "vastu-guides-differ",
      blocks: [
        {
          type: "p",
          text: "Beyond the letter table, readers differ on a handful of recurring points. Most of the reasons two answers do not match are in this table.",
        },
        {
          type: "table",
          head: ["The question", "One answer", "Another answer"],
          rows: [
            ["What is counted", "The letters of a name, as in the Chaldean and Pythagorean tables", "The digits of a date, as in Mulank, Bhagyank and the Lo Shu grid"],
            ["Which letter table", "Pythagorean: A to Z in order, values 1 to 9", "Chaldean: grouped by sound, values 1 to 8, with 9 left out"],
            ["The planet for 4", "Rahu, on most Indian pages", "Uranus in the Chaldean handbook; the Sun’s negative side in another early handbook"],
            ["The planet for 7", "Ketu, on most Indian pages", "Neptune in the Chaldean handbook; the Moon’s positive side in another early handbook"],
            ["Why 9 has no letter in the Chaldean table", "The Chaldean handbook says 9 stands for the nine-lettered name of God", "That explanation is a claim about the table's origin, not a fact established here."],
            ["Master numbers", "Kept: 11, 22 and 33 are not reduced", "Reduced: every total goes down to one digit"],
            ["Which name is counted", "The name in use, in Chaldean practice", "The birth name, on many modern Pythagorean pages; an early writer counted the name a person is known by"],
            ["Adding a birth date", "Add every digit of the date, as most Indian pages do", "Keep the day, a number for the zodiac month and the year as three separate numbers, as the Chaldean handbook does"],
            ["Whether 4 and 8 are hard numbers", "The Chaldean handbook counts both as difficult numbers", "Two business pages list 8 among their good totals, and one of them lists 4 too"],
            ["When a personal year begins", "On 1 January", "On the person’s birthday"],
          ],
          caption: "Ten points on which readers differ",
        },
        {
          type: "p",
          text: "Some of these are differences of tradition, like the planets for 4 and 7, and tables of friendly and unfriendly numbers vary in the same way from page to page. Others come from the order of the sums. Take 1 January 1980. Adding all eight digits gives 20, then 2. Reducing the day, the month and the year first gives 1 + 1 + 9, which is 11, a master number for readers who keep them.",
        },
      ],
    },
    {
      id: "which-she-uses",
      chip: "Choosing a method",
      heading: "Ask which system a reading uses",
      icon: "gen-explain",
      blocks: [
        {
          type: "p",
          text: "A consultation starts from the method that fits the question, and says which one it is. For a date of birth the starting point is the Indian pair, Mulank and Bhagyank. The date never changes and no letter table is involved, and these are the core numbers on the Indian pages checked.",
        },
        {
          type: "p",
          text: "For a name or a business name, the starting point is the Chaldean table, counting the name you use. It is the default on the Indian pages checked, so the total can be compared with other readings you may hold. The Lo Shu grid answers a different question about a date of birth: which digits are present or missing, in place of what the date adds up to.",
        },
        {
          type: "p",
          text: "A mobile or house number has only digits, so there is no table to choose: the digits are added and set beside your Mulank and Bhagyank. A vehicle plate also carries letters, and the reader says whether they were counted. When a chart is read together with numbers, the personal year is set beside the periods in the chart, which the page on astro-numerology explains.",
        },
        {
          type: "p",
          text: "The tables shown here let you compare calculations. They do not establish Narayani's preferred system. Ask which method a consultation uses before comparing its totals with another reading.",
        },
      ],
    },
    {
      id: "choosing",
      chip: "How to choose",
      heading: "When two readers disagree, how to choose",
      icon: "group-decisions",
      blocks: [
        {
          type: "p",
          text: "A difference between two readings is a prompt to ask a few plain questions, in this order.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Ask which table and which name",
              text: "Find out whether the table was Chaldean or Pythagorean, and whether the birth name or the name you use was counted. Many differences end here.",
              icon: "numc-nickname",
            },
            {
              title: "Redo the sum yourself",
              text: "The arithmetic is short enough to check by hand, and a slip is easy to make.",
              icon: "habit-evidence",
            },
            {
              title: "Ask what each answer rests on",
              text: "A reading should be able to say whether it comes from a table, a convention or the reader’s own experience. If it cannot, treat it as an opinion.",
              icon: "brain-meta-model",
            },
            {
              title: "Ask what the number is for",
              text: "A total to reflect on is harmless. A total used to justify spending money or changing a legal name needs a reason of its own.",
              icon: "gen-caution",
            },
            {
              title: "Hold the answer loosely",
              text: "Where two methods differ and neither has been tested, the difference is information. Decide on ordinary grounds and let the number be one voice among them.",
              icon: "gen-no-pressure",
            },
          ],
        },
      ],
    },
    {
      id: "evidence",
      chip: "Evidence",
      heading: "How much of this has been tested",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "No test comparing one system with another was found. The main numerology page gives the wider evidence, including why readings can feel right. The table sets out what each claim about the systems rests on.",
        },
        {
          type: "table",
          head: ["Claim", "Status"],
          rows: [
            ["How the numbers are worked out", "Convention. Several versions exist, as the tables above show."],
            ["The planet and quality given to each number", "Tradition or belief. It differs by source, and no test was found."],
            ["A Chaldean, Pythagorean or Vedic origin", "The system labels alone do not establish an ancient lineage."],
            ["Birth numbers predicting career or events", "No support. The one controlled test, of 806 Nobel laureates, found no link."],
            ["A name or spelling change altering outcomes", "No support. No controlled study was found."],
            ["Using numbers to reflect and talk", "Contested. No research was found, and personal meaning is not prediction."],
          ],
          caption: "Evidence status of the main claims",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions when two readings differ",
    icon: "gen-listen",
    items: [
      { icon: "numc-letter-count", text: "Which table and which name an earlier reading used, if you have one" },
      { icon: "astro-compatibility", text: "Where two readings of your own numbers part, and whether the cause is the table, the name or the order of the sums" },
      { icon: "astro-stream-choice", text: "What the question starts from (a birth date, a name, a plain number or the Lo Shu grid), because each input has its own method" },
      { icon: "gen-limits", text: "How much weight the answer has to carry in the decision you are making" },
    ],
  },
  bring: {
    heading: "If you already hold a reading",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Your date of birth, and your name as on your documents and as you write it, since the systems count these differently" },
      { icon: "brain-words", text: "Any reading you were given before, with the table it used if you know it" },
      { icon: "brain-thought", text: "The question you want the numbers to help with" },
    ],
  },
  faqs: [
    {
      q: "What are the main systems of numerology, and how do they differ?",
      a: "Eight are described above: Chaldean, Pythagorean, Vedic or Indian, Tamil or Dravidian, Western modern, Lo Shu, money numerology and house-number numerology. They differ in what they count, names or dates or both, in the letter table, in the planet given to 4 and 7, in whether master numbers are kept, and in which name is used. The table above sets these out.",
    },
    {
      q: "What is Chaldean numerology?",
      a: "The Chaldean table shown here assigns letters values from 1 to 8. The Pythagorean table cycles through 1 to 9. That difference can give a name different totals. Ask which table is being used rather than treating one answer as an error.",
    },
    {
      q: "What is Pythagorean numerology?",
      a: "A method that gives the alphabet the values 1 to 9 in order, so A is 1, B is 2 and I and R are 9. Despite the name, no source ties it to Pythagoras. Many modern pages use it for the birth name, and Western books build their longer lists of numbers on it. It gives different values from the Chaldean table for sixteen of the 26 letters.",
    },
    {
      q: "Is Chaldean or Pythagorean numerology more accurate?",
      a: "No test comparing them was found, so neither can be called more accurate. Readers choose between them by habit, training and the kind of question: many Indian pages use Chaldean values for names, and many Western books use Pythagorean ones. What you can check is whether a reader has applied the chosen table correctly, and whether they say which one it was.",
    },
    {
      q: "What is Vedic, or Indian, numerology?",
      a: "On these pages, Indian numerology refers to birth-day and full-date calculations linked with grahas. The label does not establish Vedic authorship or Narayani's preferred method.",
    },
    {
      q: "What are Tamil and Dravidian numerology?",
      a: "Both names point to numerology as it is practised in the Tamil-speaking south. No standard table or method for them could be confirmed, so this page describes none. If a family reading or a local practitioner’s method is part of your question, bring the working as well, meaning the letters counted and the table used, and ask how far it can be compared with the systems above.",
    },
    {
      q: "What is Western modern numerology?",
      a: "It is the Pythagorean approach as Western books present it: a life path number from the birth date, and numbers from the birth name that some books split into vowels and consonants. The word to watch is “destiny”. Western books usually give it to a name number and Indian pages to the birth-date number, so ask which one a reading means before you compare two of them.",
    },
    {
      q: "What is money numerology, and where does it come from?",
      a: "Where it comes from is unclear. The name is attached to readings on earning and spending, one account links it with Hebrew mysticism, and no agreed table or method could be found, so this page treats it as a label. For savings, loans or investment, ask a qualified financial adviser. Nothing on this page is financial advice.",
    },
    {
      q: "Which system suits names, birth dates and house numbers?",
      a: "No ruling exists, and no test. By convention, a name is read with a letter table, usually Chaldean on Indian pages. A birth date is read as Mulank and Bhagyank, or placed on the Lo Shu grid. A house number is added digit by digit and set beside the residents’ numbers. These are working choices, so ask any reader which one they used.",
    },
    {
      q: "Which astrology tradition and numerology system does Narayani use?",
      a: "The astrology pages explain Jyotish. Narayani's preferred numerology calculation system has not been confirmed here. Ask which method a consultation uses; the educational tables on this page do not establish her own method.",
    },
    {
      q: "Why do two numerologists give different answers, and how should I choose?",
      a: "Because they may use different letter tables, count different names, keep or reduce master numbers, or give a different planet to 4 and 7. None of these choices has been tested, so no ruling on which is right exists. Ask which table and name each reader used, check the sums, and take the numbers as something to reflect on. The steps above give the order.",
    },
  ],
  related: [
    "/services/numerology/personal-numbers/",
    "/services/numerology/name-numerology/",
    "/services/numerology/lo-shu-grid/",
    "/services/numerology/astro-numerology/",
  ],
  showFees: true,
};
