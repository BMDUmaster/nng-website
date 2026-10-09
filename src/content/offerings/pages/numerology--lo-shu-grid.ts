import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "lo-shu-grid",
  title: "The Lo Shu grid",
  metaTitle: "The Lo Shu grid: planes, arrows and gaps",
  metaDescription: "The Lo Shu square, how a date of birth fills it, what missing and repeated numbers and its lines are said to mean, with a worked example and honest limits.",
  lead: "See how your birth date is placed in the nine-number Lo Shu grid. Missing or repeated digits are traditional themes to reflect on, not personal defects.",
  card: "When you want to know what the gaps and repeats in your birth-date grid are said to mean.",
  icon: "page-lo-shu-grid",
  group: "yours",
  covers: [
    "The square and its legend",
    "Filling it from a birth date",
    "What each cell stands for",
    "Missing and repeated numbers",
    "Lines, planes and arrows",
    "A worked example",
    "A grid-based consultation",
  ],
  art: { kind: "numbers", variant: "loshu" },
  enquiryTopic: "Numerology: my Lo Shu grid",
  cta: "Enquire about my Lo Shu grid",
  intro: [
    {
      type: "p",
      text: "The grid has two histories. One is a piece of Chinese lore about a river, a tortoise and a square of nine numbers. The other is a modern habit of dropping the digits of a birth date into that square and reading what lands where, and what does not.",
    },
    {
      type: "p",
      text: "The grid makes a birth date visible as a pattern. The assigned meanings are popular interpretations, not a tested account of personality. Narayani offers numerology alongside mindset guidance; ask which grid or method is used before comparing readings.",
    },
  ],
  sections: [
    {
      id: "square",
      chip: "The square",
      heading: "The square, its legend and its arithmetic",
      icon: "numc-loshu-system",
      blocks: [
        {
          type: "p",
          text: "In one telling, a tortoise rose from the river Luo during a great flood, carrying a pattern of dots on its shell. The dots counted from one to nine, and the pattern became the square. It is a legend rather than a record, but it explains the name: Lo Shu is usually translated as the writing of the Luo.",
        },
        {
          type: "table",
          head: ["Left", "Middle", "Right"],
          rows: [
            ["4", "9", "2"],
            ["3", "5", "7"],
            ["8", "1", "6"],
          ],
          caption: "The classical layout, with 5 in the centre.",
        },
        {
          type: "p",
          text: "Every row, every column and both diagonals add to 15, and that is no accident of the layout. The nine numbers add to 45, and three rows share that total, so each row must be 15. The middle row, the middle column and the two diagonals together count the centre four times and every other cell once, so 60 equals 45 plus three times the centre, and the centre has to be 5. Of the 362,880 ways to place nine numbers in nine cells, exactly eight work, and they are the turns and mirror images of this one.",
        },
        {
          type: "p",
          text: "Chinese writings from about the first century CE lay the numbers 1 to 9 out in a nine-hall plan, and a clear magic-square example is recorded from 570 CE. Mentions of a river map go back to about 650 BCE but are ambiguous. Reading a birth date through the square is a far more recent habit, and none of the sources consulted says when it began. One early handbook for Western readers named it the Table of Saturn.",
        },
      ],
    },
    {
      id: "filling",
      chip: "Filling it",
      heading: "How a date of birth fills the grid, with an example",
      icon: "numc-bhagyank",
      blocks: [
        {
          type: "p",
          text: "The method is mechanical, which is part of its appeal. Here it is for 25 July 1975.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Write the date",
              text: "Write it as day, month and year, then drop every zero, because no cell holds one. For 25 July 1975 that leaves 2, 5, 7, 1, 9, 7 and 5.",
              icon: "astro-birth-date",
            },
            {
              title: "Place each digit",
              text: "Each digit goes in its own cell, and a digit that comes up again goes in the same cell again. The two 5s stack in the centre.",
              icon: "habit-stacking",
            },
            {
              title: "Add the Mulank and Bhagyank",
              text: "Many practitioners add these two numbers as extra digits. Here 25 gives a Mulank of 7, and the whole date, 2 + 5 + 0 + 7 + 1 + 9 + 7 + 5 = 36, gives a Bhagyank of 9.",
              icon: "numc-mulank",
            },
            {
              title: "Count what is there",
              text: "The grid now holds 1 once, 2 once, 5 twice, 7 three times and 9 twice. The numbers 3, 4, 6 and 8 are missing.",
              icon: "habit-evidence",
            },
          ],
        },
        {
          type: "table",
          head: ["Left", "Middle", "Right"],
          rows: [
            ["4: missing", "9: twice", "2: once"],
            ["3: missing", "5: twice", "7: three times"],
            ["8: missing", "1: once", "6: missing"],
          ],
          caption: "The grid for 25 July 1975, in the classical layout.",
        },
        {
          type: "p",
          text: "The middle column, 9, 5 and 1, is complete, and the left column, 4, 3 and 8, is empty. Later sections say what each is read as.",
        },
        {
          type: "p",
          text: "Practitioners differ on three points: whether all four year digits are used or only the last two, whether the Mulank and Bhagyank are added as extra digits, and which of the two layouts is used. Some also add a number from Feng Shui. With the last two year digits, this grid would lose its 1 and one of its 9s.",
        },
        {
          type: "p",
          text: "Using all four year digits creates patterns shared by whole generations. Dates from 1900 to 1999 include a 1 and a 9 in the year. Years from 2000 to 2099 include a 2; any zeros are left out. Those shared digits come from the calendar, not from individual behaviour.",
        },
      ],
    },
    {
      id: "cells",
      chip: "The nine cells",
      heading: "What each cell stands for in popular practice",
      icon: "numc-vedic",
      blocks: [
        {
          type: "p",
          text: "These are the popular readings, listed in the order the cells sit in the square. The last column gives the theme a missing number is read as: something to bring effort to, with no defect implied.",
        },
        {
          type: "table",
          head: ["Number", "Place", "Stands for", "If it is missing"],
          rows: [
            ["4", "Top left", "Routine and structure", "Order, planning and finishing what is begun"],
            ["9", "Top centre", "Drive and courage", "The energy to start and the nerve to act"],
            ["2", "Top right", "Sensitivity and relationships", "Listening, and giving others time"],
            ["3", "Middle left", "Expression and optimism", "Putting thoughts and feelings into words"],
            ["5", "Centre", "Communication and adaptability", "Speaking up, and staying flexible"],
            ["7", "Middle right", "Reflection and spiritual interest", "Quiet time, and questions of meaning"],
            ["8", "Bottom left", "Discipline and responsibility", "Steady habits with time and money"],
            ["1", "Bottom centre", "Self-direction", "Taking the initiative, and asking for what you need"],
            ["6", "Bottom right", "Harmony and comfort", "Care for the home and for relationships"],
          ],
          icons: ["num-4", "num-9", "num-2", "num-3", "num-5", "num-7", "num-8", "num-1", "num-6"],
        },
        {
          type: "p",
          text: "Some pages go further and read particular cells or lines as signs of wealth or luck. Nothing supports that, and this page offers no financial advice.",
        },
      ],
    },
    {
      id: "gaps",
      chip: "Gaps and repeats",
      heading: "Missing numbers and repeated numbers",
      icon: "numc-karmic-lessons",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Missing numbers",
              text: "A number that does not appear is read as a theme that deserves conscious effort. No fault is implied. Some practitioners call it a karmic learning area, which is a different idea from the Western karmic lesson drawn from a name.",
              icon: "numc-missing-number",
            },
            {
              term: "Numbers that repeat",
              text: "Some practitioners read two occurrences as strength, three as intensity and four or more as imbalance; thresholds vary. What the count establishes is simply that a digit occurs repeatedly in the chosen inputs. Any personality meaning attached to it is interpretation.",
              icon: "numc-repeated-number",
            },
            {
              term: "How common gaps are",
              text: "A date written as DD-MM-YYYY supplies eight digit positions, while the grid has nine different numbers. Zeros and repeats reduce the number of cells filled further. Empty cells are therefore expected in a date-only grid, not evidence that something is missing from a person. Extra numbers added by a practitioner change the count, so the method needs to be named.",
              icon: "brain-research",
            },
            {
              term: "Remedies offered for a gap",
              text: "Some practitioners offer a stone, a bead, a mantra or a second grid built from a mobile number to fill a gap. Nothing shows that any of them changes anything, and a gap needs no filling. A small habit that matches the theme at least asks only for plain effort.",
              icon: "gem-substitutes",
            },
          ],
        },
      ],
    },
    {
      id: "lines",
      chip: "The lines",
      heading: "Lines, planes and arrows",
      icon: "astro-yoga",
      blocks: [
        {
          type: "p",
          text: "Eight lines run through the square: three rows, three columns and two diagonals. In Indian practice they are called planes, arrows or yogs, and each has a popular name.",
        },
        {
          type: "table",
          head: ["Line", "Numbers", "Popular name", "Read as"],
          rows: [
            ["Top row", "4 9 2", "Mental plane", "How you think and plan"],
            ["Middle row", "3 5 7", "Emotional plane", "How you feel and relate"],
            ["Bottom row", "8 1 6", "Practical plane", "How you act and manage things"],
            ["Left column", "4 3 8", "Thought", "Planning and ideas"],
            ["Middle column", "9 5 1", "Will", "Determination and drive"],
            ["Right column", "2 7 6", "Action", "Getting things done"],
            ["Diagonal, top left to bottom right", "4 5 6", "Golden yog", "Named by some sources, with promises attached that this page does not repeat"],
            ["Diagonal, top right to bottom left", "2 5 8", "Silver yog", "Linked by some sources to luck and property, which are claims with nothing tested behind them"],
          ],
          icons: ["numc-mental-plane", "numc-emotional-plane", "numc-practical-plane", "numc-thought-column", "numc-will-column", "numc-action-column", "numc-diagonal-down", "numc-diagonal-up"],
        },
        {
          type: "p",
          text: "A line with all three numbers present is read as a settled strength, and a line with all three missing as a theme to work on. Sources disagree on both names and weights, and one source lists arrow names such as Determination, Planner, Spirituality and Willpower without saying which line each belongs to.",
        },
      ],
    },
    {
      id: "layouts",
      chip: "Two layouts",
      heading: "Two layouts, and why they are not interchangeable",
      icon: "numc-two-layouts",
      blocks: [
        {
          type: "p",
          text: "Indian practitioners often work with a second grid, which puts 7 in the centre.",
        },
        {
          type: "table",
          head: ["Left", "Middle", "Right"],
          rows: [
            ["3", "1", "9"],
            ["6", "7", "5"],
            ["2", "8", "4"],
          ],
          caption: "The second layout, with 7 in the centre.",
        },
        {
          type: "p",
          text: "It is not a magic square: its rows add to 13, 18 and 14, and its columns to 11, 16 and 18. Its cells are tied to the planets, with Jupiter, the Sun and Mars across the top, Venus, Ketu and Mercury across the middle, and the Moon, Saturn and Rahu across the bottom. The sources checked fill it from only the last two digits of the year. The one source that names its lines swaps the labels of the classical layout: its rows are called thought, will and action, and its columns mental, emotional and practical. Mixing the two sets of labels is an easy error. This page works in the classical layout throughout.",
        },
      ],
    },
    {
      id: "consultation",
      chip: "A grid reading",
      heading: "A grid-based consultation: one concern, with practical steps",
      icon: "gen-session-person",
      blocks: [
        {
          type: "p",
          text: "A grid conversation starts with a concern, and the grid comes second. You say what you want to look at, whether it is a habit that keeps returning or a decision you keep postponing. The grid is then laid out for your date, and its missing numbers, repeats and complete lines are set beside the concern, to see whether any of them gives it a name.",
        },
        {
          type: "p",
          text: "For the 25 July 1975 grid above, a concern such as plans that start well and lose momentum can be set beside the picture as an illustration. The 9, 5, 1 column is complete and the 4, 3, 8 column is empty. The 7 appears twice. The traditional labels suggest questions about routine, expressing a plan and time spent reflecting; they do not explain the loss of momentum.",
        },
        {
          type: "p",
          text: "The steps that follow are small and practical: a weekly routine that suits the empty line, a habit tied to something you already do, or a conversation you have been putting off. If a remedy is offered, it comes with its reason, and you decide whether to try it.",
        },
      ],
    },
    {
      id: "limits",
      chip: "Honest limits",
      heading: "Limits: popular tradition, not a diagnosis",
      icon: "numc-limits",
      blocks: [
        {
          type: "p",
          text: "The square is sound arithmetic. Everything else about the grid is popular tradition: the meanings of the cells, the names of the lines, the thresholds for a repeat and the idea that a gap asks for effort. No controlled study has tested any of it, and the sources that teach it do not agree on the details. The grid cannot describe you, and it cannot predict anything.",
        },
        {
          type: "p",
          text: "A gap is no defect and a complete line no promise, and neither says anything about your health, your mind or your money.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions beside a birth-date grid",
    icon: "gen-listen",
    items: [
      { icon: "brain-thought", text: "The concern you bring, in a sentence, before the grid is opened" },
      { icon: "astro-focus", text: "Which numbers are missing and which repeat, set beside that concern" },
      { icon: "gen-explain", text: "The method behind any grid you were given before: the layout, the year digits and the extra numbers" },
      { icon: "brain-reframing", text: "Whether a gap or a complete line matches anything you notice, and what to do with the readings that do not fit" },
      { icon: "numc-remedy-habit", text: "One small practice that suits a theme and fits the week you actually have" },
    ],
  },
  bring: {
    heading: "For a grid reading: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Your date of birth as written on your birth certificate, since every digit goes into the grid" },
      { icon: "brain-words", text: "Any grid or reading you have already been given, and the method behind it if you know it" },
      { icon: "astro-remedy-stone", text: "If you were given a stone, bead, mantra or colour for a missing number, the details" },
      { icon: "astro-recurring-obstacle", text: "The habit or decision you would like to look at, in a sentence or two" },
    ],
  },
  faqs: [
    {
      q: "What is the Lo Shu grid?",
      a: "The name covers two things. One is the old square of nine cells holding the numbers 1 to 9, in which every line adds to 15, with a legend about a tortoise and a river attached. The other is the Indian numerology grid, where the digits of a birth date are placed in the cells of that square so that gaps and repeats can be read. The arithmetic is sound. The readings are tradition.",
    },
    {
      q: "How do I fill the grid from my date of birth?",
      a: "Break the date into digits and drop any zero. Each digit goes into a cell of its own, and a repeated digit stacks in the same cell. Many practitioners then add the Mulank and the Bhagyank as two more digits. Practice differs over the year, whether to use four digits or two, and over the layout, so one date can produce different grids. The worked example above shows every step.",
    },
    {
      q: "What do missing and repeated numbers mean?",
      a: "Take them as questions to ask yourself. A missing 3 asks how you put your thoughts into words, and a 7 that appears three times asks how much of your time goes to thinking alone. The meanings and the thresholds are customary and untested, and neither a gap nor a repeat says what will happen.",
    },
    {
      q: "Can a stone or bead make up for a missing number?",
      a: "No. A missing number is a theme to notice, and nothing shows that an object can fill it in. Sellers sometimes pair particular stones or Rudraksha beads with particular missing numbers, and the pairings follow no shared rule. If you were given one, bring the details to a consultation and ask what the pairing rests on. For the checks to make before buying anything, see the Gemstones and Rudraksha pages.",
    },
    {
      q: "Does a complete line mean strength, and an empty line weakness?",
      a: "That is how practitioners put it, in plainer words: a complete line counts as a settled strength and an empty one as a theme to work on, with no defect implied. Sources disagree on the names and weights of the lines. Complete lines and empty lines both turn up in ordinary dates, so neither is unusual. Use them as prompts for reflection.",
    },
    {
      q: "Can my grid change over time?",
      a: "The grid for a date of birth cannot change, because the date does not. What can differ is the method used to build it: the year digits, the extra numbers added and the layout. Some practitioners also build a second grid from a mobile number. That is a convention, and it does not alter your birth-date grid or fill its gaps.",
    },
    {
      q: "Does the grid predict wealth or success?",
      a: "No. A cell can prompt a thought about habits, and that is all. Some sources take certain cells or lines as signs of money or luck, and nothing supports that. Practitioners tie the 8 to discipline and money matters in a general way, and that says nothing about a bank balance.",
    },
    {
      q: "Do I need the grid if I already know my Mulank and Bhagyank?",
      a: "The grid adds what those two numbers leave out: the other digits of the date, and a picture of how they sit together. Two people with the same Mulank can have very different grids. It is a different way of looking at the same date, and it is no more tested than the others. If your question is about a pattern, the grid can name it. If it is about temperament, the nine numbers may do as well.",
    },
  ],
  related: [
    "/services/numerology/personal-numbers/",
    "/services/numerology/numerology-systems/",
    "/services/numerology/signature/",
  ],
  showFees: true,
};
