import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "signature",
  title: "Signature analysis, and what it cannot tell you",
  metaTitle: "Signature analysis in numerology",
  metaDescription: "What is read in a signature, how the name you sign becomes a number, why signatures change, and why any adjustment is optional.",
  lead: "Explore your signature’s shape and letter total as prompts for reflection. Neither can reliably reveal character or predict your future, and practical signing requirements come first.",
  card: "When you wonder what your signature says, or whether to change the way you sign.",
  icon: "page-signature",
  group: "daily",
  covers: [
    "Slant, size and legibility",
    "First letter and ending stroke",
    "The number a signature spells",
    "Why signatures change",
    "Optional adjustments",
    "What the evidence says",
  ],
  art: { kind: "numbers", variant: "signature" },
  enquiryTopic: "Numerology: my signature",
  cta: "Enquire about a signature reading",
  intro: [
    {
      type: "p",
      text: "You sign a courier receipt, a school form, a bank slip, a contract. Over the years the signature stops being ordinary handwriting. It speeds up, drops letters and picks up a loop or a line beneath. Numerology and handwriting analysis both treat that worn-in mark as something worth reading.",
    },
    {
      type: "p",
      text: "Two ideas are often run together: how a signature sits on the page and what number its letters add up to. This page keeps them distinct. Neither is a forecast or a reliable test of character. Ask which, if either, forms part of a consultation before choosing it.",
    },
  ],
  sections: [
    {
      id: "what-is-read",
      chip: "What is read",
      heading: "What is read in a signature",
      icon: "numc-signature-reading",
      blocks: [
        {
          type: "p",
          text: "Signature-reading lists assign meanings to features such as size and slant. The meanings vary; the questions below are prompts for reflection, not Narayani's assessment protocol.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Legibility",
              text: "Whether a stranger could read the name. Press pieces and practitioner pages advise legible letters. Fast, frequent signing wears many signatures down until they are unreadable, so for Narayani this is a question about your habits.",
              icon: "numc-signature-legible",
            },
            {
              term: "Size",
              text: "How large the signature is beside your ordinary handwriting and the space it is given. Narayani asks whether the size is deliberate and how you feel about it.",
              icon: "numc-signature-size",
            },
            {
              term: "Slant",
              text: "The angle at which the name runs. Press pieces advise a slight rise of about 20 degrees, and other pages say gently upward or level. The disagreement is a reminder of how loose the rules are.",
              icon: "numc-signature-slant",
            },
            {
              term: "First letter",
              text: "The opening letter, usually a capital. Narayani asks whether it stands apart from the rest in size or style, and whether you meant it to.",
              icon: "numc-initials",
            },
            {
              term: "Underline",
              text: "A line drawn beneath the name. Two practitioner pages treat it as favourable and two press pieces advise against it. When the sources split, the split is the useful fact.",
              icon: "numc-signature-underline",
            },
            {
              term: "Dots and the ending stroke",
              text: "A full stop after the name, a line struck through it, a circle round it, or a last stroke that trails away. Press pieces advise against a full stop at the end, against crossing out and against circling the name. Narayani also asks how the name ends: whether the last stroke rises, falls or fades, and whether that is habit or choice.",
              icon: "numc-signature-dots",
            },
          ],
        },
        {
          type: "p",
          text: "None of these features carries a fixed meaning. Each reader’s meanings come from the reader’s own school, and the same flourish can be praised on one page and cautioned against on another.",
        },
      ],
    },
    {
      id: "the-number",
      chip: "The number",
      heading: "The number a signature spells",
      icon: "numc-name",
      blocks: [
        {
          type: "p",
          text: "A signature is also a name, and a name can be added up. The letters a person actually writes are given values from a letter table, totalled and reduced to one digit. What gets counted depends on what is signed, so one person can have several signature numbers.",
        },
        {
          type: "table",
          head: ["What is signed", "Letters counted", "Chaldean total"],
          rows: [
            ["Rahul", "R A H U L: 2 + 1 + 5 + 6 + 3", "17, then 8"],
            ["Rahul G.", "The five letters of Rahul, plus G (3)", "20, then 2"],
            ["R. Gupta", "R (2), plus G U P T A: 3 + 6 + 8 + 4 + 1", "24, then 6"],
            ["Rahul Gupta", "Both names in full: 17 + 22", "39, then 12, then 3"],
          ],
          caption: "One made-up name, signed four ways",
        },
        {
          type: "p",
          text: "The table uses the Chaldean letter values, the default on the Indian pages checked. The other common table, the Pythagorean, gives different totals for the same letters: Rahul Gupta adds to 44 there, then to 8. The page on numerology systems sets out both tables. For a signature the natural choice is the name as written, since that is what is on the page.",
        },
        {
          type: "p",
          text: "A reader then sets the total beside your Mulank and Bhagyank, the numbers from your birth day and your full date of birth, using the same friend and enemy tables as for a mobile number, with the same disagreements among them. The shape and the number are separate readings: one is arithmetic on letters, the other is handwriting analysis. Where they seem to point in different directions, nothing needs settling. Each is a prompt, and you judge which one was useful.",
        },
      ],
    },
    {
      id: "over-a-life",
      chip: "Why it changes",
      heading: "Why a signature changes over a life",
      icon: "numc-maturity",
      blocks: [
        {
          type: "p",
          text: "Few people sign at forty as they did at sixteen. A first signature is often a careful version of the handwriting of the time, written out in full. Years of signing at speed shorten it, until the letters collapse into a shape that is partly a drawing. Many people end up with two, a quick one for receipts and a fuller one for formal papers.",
        },
        {
          type: "p",
          text: "Life leaves marks too. A new name after marriage, a first job that means signing papers every day, a move to signing with a finger on a screen: each changes the hand, and so can a hurt wrist or poor eyesight. A sudden change with no reason you can name is a question for a doctor, and nothing here is medical advice.",
        },
        {
          type: "p",
          text: "A signature is therefore a record of habit before it is anything else. Narayani uses that to ask when you last changed the way you sign, and what was happening in your life then.",
        },
      ],
    },
    {
      id: "adjusting",
      chip: "Adjusting it",
      heading: "If you decide to adjust your signature",
      icon: "numc-remedy-habit",
      blocks: [
        {
          type: "p",
          text: "Some people adjust their signature: they open a closed loop, drop an underline, write the name more fully or add a letter. Nothing shows that any of this changes an outcome, so it is optional. If you do want to make a change, a careful order helps.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Write it ten times on plain paper",
              text: "At your usual speed. The aim is to see what you actually do, which is often different from what you think you do.",
              icon: "habit-evidence",
            },
            {
              title: "Note what varies",
              text: "Some parts stay steady and others wander. The steady parts are your signature. The wandering parts are the ones you can adjust without losing it.",
              icon: "astro-focus",
            },
            {
              title: "Change one thing",
              text: "A steadier baseline, a more distinct first letter, or one stroke dropped. A single change keeps the signature recognisable.",
              icon: "numc-name-correction",
            },
            {
              title: "Practise for a few minutes a day",
              text: "Keep going for a few weeks, until the new version comes without thought. A signature you must concentrate on is hard to reproduce reliably.",
              icon: "habit-two-minute",
            },
            {
              title: "Tell those who hold the old one",
              text: "Banks keep a specimen signature and compare against it, and other offices that hold yours, such as an employer or a passport office, may do the same. A signature on a bank record or a contract carries legal weight, so ask each office before you use the new version on anything official. This is practical guidance and not legal advice.",
              icon: "work-finance",
            },
          ],
        },
        {
          type: "p",
          text: "Changing the spelling of a name is a different matter from changing how you sign it. A legal change of name involves paperwork across your records, and the page on name numerology sets out what to check first.",
        },
      ],
    },
    {
      id: "evidence",
      chip: "Evidence",
      heading: "What the evidence says about signature reading",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "Neither half of signature reading has been validated as a way of learning anything about the person who signs. The handwriting half is graphology, the practice of reading character from handwriting. A 1989 meta-analysis pooled 17 studies. When the writing sample was neutral in content, graphologists’ judgements showed almost no link with what they were trying to judge. Where the samples carried personal content the judgements were modestly better, and psychologists with no training in graphology did better than the graphologists.",
        },
        {
          type: "p",
          text: "No test of the number half has been found. A letter table is a convention and readers use different tables, so it is hard to say what such a test would even check.",
        },
        {
          type: "p",
          text: "The main numerology page covers why a reading can feel right whatever its method, which is reason enough to hold any reading, a flattering one included, with care.",
        },
      ],
    },
    {
      id: "how-she-uses-it",
      chip: "Reflection",
      heading: "A signature as a prompt for reflection",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "She uses it as a prompt for reflection. A signature is a small action repeated thousands of times, so it is a convenient place to ask what has changed since you first signed, how you want to be seen, and whether the way you sign suits that.",
        },
        {
          type: "p",
          text: "As an illustration, a signature may be large, rise to the right and have a line beneath it. A list might label that confident, but the shape cannot establish confidence. You can ask when you started signing that way and whether it is consistent across documents.",
        },
        {
          type: "p",
          text: "Do not treat a signature change as a way to change luck. If you want to adjust yours, practical consistency and the requirements of organisations holding a specimen matter.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions about a signature",
    icon: "gen-listen",
    items: [
      { icon: "numc-destiny", text: "The name you actually sign, and the number it spells beside your Mulank and Bhagyank" },
      { icon: "gen-professional", text: "How the signature on your forms and contracts differs from the one you write on a card" },
      { icon: "brain-words", text: "What you like and dislike about your signature, in your own words" },
      { icon: "brain-timeline", text: "How it has changed since school, and what was happening in your life when it did" },
      { icon: "numc-id-card", text: "What a change would involve at the bank and in other records that hold your signature" },
    ],
  },
  bring: {
    heading: "What to bring to a signature session",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-signing", text: "Your usual signature, written on plain paper in your own hand" },
      { icon: "gen-bring-name", text: "The name as you sign it, and the name on your documents if it differs" },
      { icon: "brain-origin", text: "Any older signatures you still have, from a school notebook or an old form" },
      { icon: "astro-birth-date", text: "Your date of birth, since the number is read beside it" },
      { icon: "gen-privacy", text: "Please keep cheques, bank forms and identity documents out of what you send" },
    ],
  },
  faqs: [
    {
      q: "What is looked at in a signature analysis?",
      a: "Two things. The shape: how legible it is, how large, how it slants, the first letter, any underline, dots and the ending stroke. And the number: the letters you write, added up and set beside your Mulank and Bhagyank. Narayani puts both to you as questions, and keeps clear which remark comes from which reading.",
    },
    {
      q: "What happens in a signature session?",
      a: "Ask what preparation is needed for the available guidance. You can note your question about your signature without sending identity documents in an initial enquiry.",
    },
    {
      q: "Can changing my signature change my life?",
      a: "There is no evidence that it can. No controlled study of a signature change has been found, and handwriting analysis has not been shown to read character from neutral writing. If you change yours, do it because you would like a signature that is clearer or more comfortable to write, and keep your expectations to that.",
    },
    {
      q: "Should I change my signature?",
      a: "Usually there is no reason to. Change it for a practical reason: nobody can read it, it varies so much that a bank has queried it, or you want a version you can write quickly without errors. A total that does not suit your Mulank is not a reason on its own, since nothing shows a total affecting anything. If you are unsure, ask before you change anything official.",
    },
    {
      q: "Can a signature be changed?",
      a: "Yes, and many people change theirs without noticing. A deliberate change is easiest in small steps, practised until it is natural. The harder part is official, because banks and some other offices keep a specimen of your signature and may compare against it. Check with each before using the new version on anything formal.",
    },
    {
      q: "Does a signature affect luck?",
      a: "Nothing shows that it does. Luck is a claim that goes beyond what the practice itself can support, and Narayani does not make it. What a signature does affect is how readily others can read it and how reliably you can reproduce it, which matters at a bank counter and on a contract.",
    },
    {
      q: "Which name should I sign: my first name, initials or my full name?",
      a: "That is your choice, and the numerology depends on it, since each version spells a different total, as the table on this page shows. Practical rules come first. On bank and legal papers the safest signature is the one the institution already holds on file. For anything informal, use the form you like best.",
    },
    {
      q: "Is a signature made on a screen read the same way?",
      a: "A signature made with a finger or a stylus is a different drawing from the same signature made with a pen. The letters, and so the number, are unchanged, but the shape often is. If you sign on screens a good deal, bring the paper version as well and say which one you use more.",
    },
    {
      q: "Can a signature in Devanagari or another Indian script be read?",
      a: "The shape features do not depend on the script: size, slant, legibility and the strokes can be looked at in any writing. The number does depend on it. The Chaldean and Pythagorean tables are made for the English alphabet, and although Devanagari tables circulate online, no standard could be confirmed. If you sign in another script, say so, and ask which letters would be counted and by what table.",
    },
    {
      q: "My signature is different every time. Is that a problem?",
      a: "Not necessarily. Most people’s signatures vary a little from one signing to the next, and a small variation is ordinary. If yours varies so widely that a bank or an office has queried it, a steadier version is a practical gain. In reading terms, a variable signature gives a reader less to go on, so any reading of it carries less weight.",
    },
  ],
  related: [
    "/services/numerology/name-numerology/",
    "/services/numerology/personal-numbers/",
    "/services/numerology/numerology-systems/",
  ],
  showFees: true,
};
