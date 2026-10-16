import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "brain-training",
  slug: "",
  title: "Brain Training",
  metaTitle: "Brain Training and everyday patterns",
  metaDescription: "A mind-first look at the beliefs, habits and reactions behind a concern, with honest guides to NLP, EFT tapping and Ho'oponopono.",
  lead: "Why does the same problem keep returning? Narayani starts with the thoughts, habits and reactions behind it. Brain Training is self-development practice, not therapy.",
  card: "When the same pattern keeps returning in your work, money or relationships.",
  icon: "hub-brain-training",
  group: "",
  covers: ["Patterns, beliefs and habits", "Breathing and daily practice", "NLP, EFT and Ho'oponopono", "What the research shows", "When to see a professional"],
  art: { kind: "practice", variant: "threads" },
  enquiryTopic: "Brain Training",
  cta: "Enquire about Brain Training",
  indexHeading: "Find your starting point",
  intro: [
    {
      type: "p",
      text: "You decide to respond differently. Then the same argument happens, and the old reaction returns. Recognising that pattern is the starting point, not a reason to blame yourself.",
    },
    {
      type: "p",
      text: "Narayani offers NLP, EFT tapping, Ho'oponopono, breathing, affirmations and habit work as personal guidance. You do not need to choose a technique before enquiring. Start with the situation you want to approach differently.",
    },
    {
      type: "p",
      text: "It is self-development practice rather than therapy or medical care, and no result is promised.",
    },
  ],
  sections: [
    {
      id: "mind-first",
      chip: "Mind first",
      heading: "Why the mind comes before the remedy",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "A remedy is an instruction: chant this, keep that in the north-east, wear this. An instruction has to be carried out on an ordinary day, by someone who may be tired, busy or doubtful. If that state of mind is never looked at, the instruction waits on a shelf. This is her reason for putting the mind first.",
        },
        {
          type: "p",
          text: "She does not tell anyone what will go wrong if they skip a step. She explains her reasoning and leaves the choice with you.",
        },
      ],
    },
    {
      id: "patterns",
      chip: "Patterns",
      heading: "What a pattern is made of",
      icon: "brain-pattern",
      blocks: [
        {
          type: "p",
          text: "A pattern is a small chain that repeats. Naming its parts makes it easier to see, and easier to interrupt at the one part you can reach.",
        },
        {
          type: "terms",
          title: "The parts of the chain",
          items: [
            {
              term: "A thought",
              text: "The first words you tell yourself when the situation arrives, such as “not again” or “they will never listen”.",
              icon: "brain-thought",
            },
            {
              term: "A belief",
              text: "An assumption you take as true, such as “I am not someone who gets noticed”. Repeated thoughts can reinforce it, especially when you remember only the examples that seem to fit.",
              icon: "brain-belief",
            },
            {
              term: "The words you use",
              text: "“Always”, “never” and “should” narrow what seems possible. Changing a word does not change the situation, but it can change what you try next.",
              icon: "brain-words",
            },
            {
              term: "A reaction",
              text: "What happens before you decide anything: the tight jaw, the quick answer, the silence. Reactions are fast because they have been rehearsed.",
              icon: "brain-reaction",
            },
            {
              term: "A habit",
              text: "What you do next, again and again, because it is the quickest way out of the discomfort. Scrolling, snapping, saying yes, putting it off.",
              icon: "brain-habit",
            },
            {
              term: "The loop",
              text: "The result of the habit often seems to prove the first thought, and the chain starts again. This is why a pattern can feel like a fact about the world instead of a habit of the mind.",
              icon: "brain-action-loop",
            },
          ],
        },
        {
          type: "p",
          text: "Seeing the chain is a way of finding the one link you can change.",
        },
        {
          type: "p",
          text: "A money example makes the distinction clear. You avoid opening a bill because you expect bad news. The delay adds uncertainty, and that uncertainty makes the next bill harder to open. The practical question is when and how to look at it with support. This is a reflection on avoidance, not advice about debt, investments or what you can afford; those questions belong with an appropriately qualified adviser.",
        },
      ],
    },
    {
      id: "practices",
      chip: "Practices",
      heading: "Six practices explained",
      icon: "brain-practice",
      blocks: [
        {
          type: "p",
          text: "All six practices are available through Narayani's personal guidance. Discuss your concern first, then agree which practice and appointment format suit it.",
        },
        {
          type: "table",
          head: ["Practice", "What you do", "What to keep in mind"],
          rows: [
            [
              "NLP",
              "Ask exact questions about a belief, look at a situation from another angle, and link a steady feeling to a small trigger.",
              "A 2012 health review found limited evidence. The NLP page explains its scope.",
            ],
            [
              "EFT tapping",
              "Name one worry, rate it from 0 to 10, tap a set of points while repeating a short phrase, and rate it again.",
              "A description of a routine does not establish a health benefit.",
            ],
            [
              "Ho'oponopono",
              "A Hawaiian way of making things right in a family, later adapted into a private exercise of four short phrases.",
              "The four phrases should not be confused with the traditional family process.",
            ],
            [
              "Breathing",
              "Slow, easy breaths for a few minutes, counted if that helps.",
              "Research on breathing techniques does not establish every routine as effective.",
            ],
            [
              "Affirmations",
              "Repeat a sentence you find believable, or name something that matters to you.",
              "Positive statements do not help everyone; the response can differ.",
            ],
            [
              "Habit building",
              "Attach one small action to something you already do every day.",
              "No fixed deadline follows from a study of daily habits.",
            ],
          ],
          icons: ["brain-meta-model", "tap-rounds", "hoo-family", "breath-work", "affirmations", "habit-stacking"],
        },
        {
          type: "list",
          title: "Which practice page to open first",
          items: [
            "You want to know whether NLP is proven and what its techniques are: the NLP page sets out both.",
            "You want to understand tapping terminology and its limits: open the EFT page.",
            "You want to understand Hawaiian peacemaking and the modern four phrases: open the Ho'oponopono page.",
          ],
        },
        {
          type: "p",
          text: "Breathing, affirmations and habits have no page of their own. They are the small, ordinary part of the day, and the next section covers them.",
        },
      ],
    },
    {
      id: "everyday",
      chip: "Everyday",
      heading: "Breathing, affirmations and habits in an ordinary day",
      icon: "habit-morning",
      blocks: [
        {
          type: "p",
          text: "A 2023 meta-analysis reported changes in self-reported stress after breathwork, but study quality and techniques varied. A later attention-controlled trial found no advantage for its slow-breathing routine. This page does not prescribe breath holding or a breathing pattern.",
        },
        {
          type: "p",
          text: "An affirmation can be a sentence to reflect on, rather than a promise. In a 2009 experiment, a positive statement left some participants with low self-esteem feeling worse. A sentence such as “I am learning to answer calmly” is an illustration, not a tested treatment.",
        },
        {
          type: "p",
          text: "Habit formation varies between people. A daily-habit study found a wide range of times to develop automaticity, rather than a universal deadline. An everyday example is putting a notebook beside your morning cup to remind you to note one task. No authored guide or tapping schedule is promised here.",
        },
      ],
    },
    {
      id: "in-a-consultation",
      chip: "In a consultation",
      heading: "How it fits into a consultation",
      icon: "gen-session-person",
      blocks: [
        {
          type: "p",
          text: "Begin with a recent situation and how you responded. Narayani discusses the pattern with you and explains a suitable practice. The team confirms the format, fee and preparation before you book.",
        },
        {
          type: "p",
          text: "Where it helps, the same question is then looked at with numerology or astrology, for direction, and with Vastulogy, for the space you live and work in. That is the order of her method: Mind, Direction, Alignment.",
        },
        {
          type: "p",
          text: "If you cannot tell where to start, ask the team which guidance option relates to your question. The Personalised Hand Holding Program is a separate option for ongoing guidance. Confirm its format and suitability with the team.",
        },
      ],
    },
    {
      id: "limits",
      chip: "Limits",
      heading: "What it is not, and when to see someone else",
      icon: "brain-limits",
      blocks: [
        {
          type: "p",
          text: "Brain Training is a self-development practice. It sits beside therapy, counselling and medical care without taking the place of any. Narayani does not diagnose conditions or offer treatment, and results vary.",
        },
        {
          type: "note",
          text: "For a health concern or distress that affects daily life, seek qualified medical or mental health support. Personal guidance does not replace that care. In India, Tele-MANAS provides mental health support on 14416 around the clock. For immediate danger, contact emergency services.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions for a mind-first conversation",
    icon: "gen-listen",
    items: [
      { icon: "gen-calendar", text: "A recent moment that went the way it always goes, described as it happened" },
      { icon: "astro-stress", text: "How you respond when pressure builds, and how quickly" },
      { icon: "gen-four-areas", text: "Which area of life shows the pattern most: health, relationships, career or money" },
      { icon: "habit-two-minute", text: "Which small practice would fit the day you actually have" },
      { icon: "astro-no-remedy", text: "Whether any practice is needed at all, or a plain conversation is enough" },
    ],
  },
  bring: {
    heading: "Before a Brain Training conversation: what to note",
    icon: "gen-bring-details",
    items: [
      { icon: "habit-evidence", text: "One recent moment, in a few lines: what happened, what you said and what you did" },
      { icon: "gen-explain", text: "What you would like to be different, in your own words" },
      { icon: "astro-stalled-project", text: "What you have already tried, and how far it got" },
      { icon: "astro-family", text: "The people involved, if the question touches family or work" },
      { icon: "gen-privacy", text: "No medical records are needed at the start. If you are in treatment for something related, mention it in a line" },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "you can see something repeating in your life and want to look at it calmly",
      "you are curious about NLP, tapping or Ho'oponopono and want an honest account before you try one",
      "you prefer small practices that fit a busy day to large promises",
    ],
    no: [
      "you are looking for treatment for a diagnosed condition (please see a doctor or a qualified mental health professional)",
      "you are in crisis, or distress has lasted for weeks and affects your daily life",
      "you want someone to promise a result, or to decide for you",
      "you hope to train to practise these methods on other people",
    ],
  },
  faqs: [
    {
      q: "Why might affirmations or manifestation practice seem not to work?",
      a: "Repeating a sentence does not control events or replace action. A statement that feels untrue can add pressure rather than help. Start with something believable and one action you can take: a conversation, a boundary or a task you keep avoiding. Other people’s decisions and your circumstances still matter. If distress is persistent or affects daily life, seek qualified support rather than blaming your thoughts.",
    },
    {
      q: "Is Brain Training a substitute for medical or mental health care?",
      a: "No. Brain Training works alongside any care you already have and never stands in for it. Narayani does not diagnose conditions, and please do not stop or change a medicine or any other treatment on the strength of anything on this site. If your health or your mood is a worry, see your doctor or a mental health specialist before anything else.",
    },
    {
      q: "Do I need to believe in these practices before I try them?",
      a: "No. A fair way to approach any of them is as an experiment: try it a few times, notice what changes, and drop it if nothing does. Some practices ask for more of you than others. The traditional Hawaiian process, for example, asks everyone taking part for sincere commitment, and some personal forms are prayers. You are never required to say words you do not mean.",
    },
    {
      q: "Do I need any background, or an earlier course?",
      a: "No. A consultation starts from the question you bring, so you do not need a course, a book or any experience of these practices. If you have already tried NLP, tapping or Ho'oponopono somewhere else, mention it when you enquire and say what you found useful and what you did not.",
    },
    {
      q: "Is there a group or a course?",
      a: "The guidance on this page is personal, one conversation at a time, and no group or course is described here. If you would like continued guidance, the Personalised Hand Holding Program offers six months of personal guidance, and the team explains how it works before you commit.",
    },
    {
      q: "How often should I practise between conversations?",
      a: "There is no practice schedule promised here. Ask what a suggested practice involves before deciding. Habit research concerns variation between people, rather than a fixed number of days.",
    },
    {
      q: "Can tapping and Ho'oponopono be practised together?",
      a: "Both are available for personal guidance, but they are different practices. Discuss your concern with Narayani before deciding whether one or both is appropriate. Their availability does not mean they need to be combined or that either is a treatment.",
    },
    {
      q: "Is breathing practice safe?",
      a: "This page does not assess individual safety or prescribe a breathing exercise. If you are considering a practice for a health concern, discuss it with a qualified professional.",
    },
    {
      q: "Do I get a certificate, or can I learn to practise this on others?",
      a: "These pages describe personal guidance for your own questions. They do not describe a practitioner course or offer a certificate. Certificates in this field are voluntary, and a certificate shows only that someone trained with the body that issued it. If you hope to train to work with other people, say so when you enquire.",
    },
  ],
  related: ["/services/brain-training/discovery-session/", "/hand-holding-program/", "/services/numerology/personal-numbers/", "/services/astrology/birth-chart-reading/"],
  showFees: true,
};
