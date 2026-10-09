import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "career-and-business",
  title: "Career and business",
  metaTitle: "Career and business in Jyotish",
  metaDescription: "A work reading in Jyotish: the tenth house, the D10 chart and your running period, with the habits behind stalled work. Strengths and timing, no promises.",
  lead: "Considering a move, a launch or a partnership? Narayani explores the question through your chart and the thought patterns behind your decisions.",
  card: "When work feels stuck, a move is on the table, or a business is taking shape.",
  icon: "page-career-and-business",
  group: "life",
  covers: [
    "Tenth house and its lord",
    "Strengths and suitable fields",
    "Timing a change or a launch",
    "Employee or business owner",
    "Partners and contracts",
    "Leadership and authority",
    "Patterns behind stalled work",
  ],
  art: { kind: "drawing", id: "hero-career" },
  enquiryTopic: "Astrology: career and business",
  cta: "Enquire about a career or business reading",
  intro: [
    {
      type: "p",
      text: "People often ask for a date: when the promotion will come, when to launch. A chart cannot honestly give you one. What it can give is a structured way to talk about your strengths, the season you are in and the choices in front of you, which is often more useful than a date.",
    },
    {
      type: "p",
      text: "Narayani begins with the question you bring and the way you have been meeting it. She asks what you do when a project stalls and what you say when a colleague is promoted over you. The chart is read beside your answers, because the habits you repeat each working day are the part of your work you can change.",
    },
  ],
  sections: [
    {
      id: "what-people-bring",
      chip: "What people bring",
      heading: "The work questions people bring",
      icon: "gen-professional",
      blocks: [
        {
          type: "p",
          text: "Some arrive feeling unseen. They deliver, they are reliable, and the credit goes elsewhere. Others feel stuck in a role that stopped teaching them anything, or are caught in a difficult relationship with a manager or a team. Some have waited a long time for a promotion and want to know how to think about the wait.",
        },
        {
          type: "p",
          text: "A second group is choosing: a new job, a move to another city or country, a change of field, a first leadership role. A third is building something: starting a business, growing one that has stopped growing, bringing in a partner, deciding on expansion. Each leads to a different part of the chart.",
        },
      ],
    },
    {
      id: "in-the-chart",
      chip: "In the chart",
      heading: "Where work shows up in a chart",
      icon: "group-chart",
      blocks: [
        {
          type: "p",
          text: "A Jyotish chart has twelve houses, called bhavas, counted from the rising sign, or lagna. Several speak to work, and a reading moves between them instead of resting on one.",
        },
        {
          type: "table",
          head: ["House", "Tradition links it with", "What it opens in a work conversation"],
          rows: [
            ["Tenth", "Livelihood, public standing, authority", "What you are known for, and the weight you carry"],
            ["Sixth", "Service, routine, competition", "Daily workload, rivals, how you meet pressure"],
            ["Second", "Earnings, speech, family resources", "What you earn, and how you speak of your worth"],
            ["Eleventh", "Gains, friends, networks", "Income over time, and who opens doors"],
            ["Seventh", "Partners and contracts", "Clients, partners, agreements"],
          ],
          icons: ["house-10", "house-6", "house-2", "house-11", "house-7"],
        },
        {
          type: "p",
          text: "The tenth house is the centre of nearly every traditional account of work, and writers differ on how much weight the others carry. The planet that rules your tenth house matters too: where it sits, and which planets look at it.",
        },
        {
          type: "table",
          head: ["Planet", "Work it is linked with in tradition"],
          rows: [
            ["Sun", "Authority, government and law"],
            ["Moon", "Public and caring work"],
            ["Mars", "Technical work and property"],
            ["Mercury", "Trade, writing, accounts and teaching"],
            ["Jupiter", "Teaching, advice and law"],
            ["Venus", "Arts and design"],
            ["Saturn", "Service, and long-term structured work"],
          ],
          icons: ["graha-sun", "graha-moon", "graha-mars", "graha-mercury", "graha-jupiter", "graha-venus", "graha-saturn"],
        },
        {
          type: "p",
          text: "The lunar nodes also enter this reading: Rahu is associated with unconventional or foreign matters, and Ketu with letting go. Birth chart reading explains these points. None of those associations assigns you a profession. They can prompt a conversation about work that interests you, rather than prescribe a career.",
        },
      ],
    },
    {
      id: "d10",
      chip: "The D10 chart",
      heading: "The D10 chart, and why minutes of birth time count",
      icon: "astro-dashamsa",
      blocks: [
        {
          type: "p",
          text: "Alongside the main chart, Jyotish draws divisional charts, each a finer look at one area of life. The D10, or dashamsa, splits every sign into ten parts of three degrees and is read for profession and public role. In a work reading it stands beside the main chart as a second view.",
        },
        {
          type: "p",
          text: "The D10 is also the most time-sensitive part of the reading. Its rising sign changes every eight to fourteen minutes, which means a birth time a quarter of an hour out is bound to put it under a different sign. A rising sign in the main chart holds for roughly two hours, so the same slip moves it in about one case in eight. If your time is only approximate, the D10 is the first part of a work reading to lose reliability, and a reading should say so.",
        },
      ],
    },
    {
      id: "strengths-and-fit",
      chip: "Strengths and fit",
      heading: "Strengths, suitable fields, and whether the work fits",
      icon: "group-work-study",
      blocks: [
        {
          type: "p",
          text: "People ask which field will suit them, and some hope the chart will name one. A reading offers leanings only: a prominent Mercury is read for trade, writing and accounts, a strong Saturn for patient, structured work. Test them against your own days, starting with whether this kind of work already pulls at you.",
        },
        {
          type: "p",
          text: "There is rarely one right career. A chart read this way tends to leave several fields open, and the way of working inside a field often matters more than the field: alone or in a team, in front of people or behind the scenes, steady or fast-moving.",
        },
        {
          type: "p",
          text: "Competence and fit are different. Competence is what you can do well, and results show it. Fit is what you can keep doing without it costing something you care about. A person can be praised every quarter and still feel the work was made for someone else.",
        },
        {
          type: "list",
          title: "Signs the work may not fit",
          items: [
            "You do the job well and feel little when it goes well.",
            "The days feel heavy even when nothing is going wrong.",
            "You admire people two roles ahead, and do not want their days.",
            "You keep drafting a resignation, or a business plan, and send neither.",
          ],
        },
        {
          type: "p",
          text: "None of this proves anything. A nagging sense that work does not fit is worth hearing out, and worth separating from a hard season, a poor manager or plain tiredness, which feel the same from the inside. The period you are running adds one view of the season, and an honest look at what you do all week usually adds more.",
        },
      ],
    },
    {
      id: "timing",
      chip: "Timing",
      heading: "Timing: when a change may suit, and when patience does",
      icon: "gen-time",
      blocks: [
        {
          type: "p",
          text: "Work readings may refer to planetary periods or current planetary positions. Dashas and transits has the calculation details; career growth covers longer planning horizons. Neither calculation can set the date of a promotion or replace information about the employer, market and role.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Mahadasha",
              text: "A main period named for one planet and lasting from 6 to 20 years. Tradition ties Saturn’s to slow, structured effort and Mercury’s to trade and learning.",
              icon: "astro-mahadasha",
            },
            {
              term: "Antardasha",
              text: "A sub-period inside a main period, running from some months to a little over three years. A reading uses it to place a change within the larger season.",
              icon: "astro-antardasha",
            },
            {
              term: "Gochar",
              text: "Where the planets stand now, counted from your birth Moon. Saturn stays in a sign for about two and a half years and Jupiter for about one, so a transit sets a mood for months and gives no date.",
              icon: "astro-transit",
            },
            {
              term: "Muhurta",
              text: "A day and hour chosen for a beginning. It may set the tone of a start, and it cannot stand in for preparation.",
              icon: "astro-muhurta",
            },
          ],
        },
        {
          type: "p",
          text: "Read this way, timing is about seasons. A period named for a planet that tradition ties to discipline, such as Saturn, is read as a time for patience, for building a skill or a record. One tied to worldly desire and the unconventional, such as Rahu, may suit a change of role or a launch, if the groundwork is done. An unprepared move stays unprepared in any period.",
        },
        {
          type: "p",
          text: "Take a long Saturn period. Tradition reads it as slow, sustained work. It gives no date for a promotion, and neither does Narayani. If you feel overlooked six years into one, she asks what those years have built, and what only you can see of it. A sub-period change a few months away may be one reason to choose when to speak to your manager, though the appraisal cycle and their own calendar count for at least as much.",
        },
      ],
    },
    {
      id: "business",
      chip: "Business questions",
      heading: "Business questions: owner or employee, partners, launches, moving",
      icon: "group-business-numbers",
      blocks: [
        {
          type: "p",
          text: "A business question often starts well before a launch. Many people first ask whether they are made for employment or for running something of their own.",
        },
        {
          type: "table",
          head: ["Question", "Where tradition looks", "What stands beside it"],
          rows: [
            ["Owner or employee", "The sixth house for service, the seventh for partners and clients, Saturn for how you take to structure", "Savings, family commitments, appetite for uncertainty"],
            ["A partner", "The seventh house and its lord, Mercury for contracts, and how the two charts’ periods overlap", "Roles, money in and out, a written way to part"],
            ["A launch date", "Muhurta, and the period you are running", "Product, permits, cash, first customers"],
            ["Expansion", "The eleventh house for gains, the second for resources", "Cash flow, demand, your capacity to run more"],
            ["Moving, or working abroad", "The fourth house for your base, the twelfth for living away from home; Rahu for the foreign", "Visas, tax, what you would leave behind"],
          ],
          icons: ["gen-owner", "astro-partnership", "astro-business-launch", "re-phased-build", "astro-relocation"],
        },
        {
          type: "p",
          text: "A chart can lean toward employment or toward owning something and still be a poor guide to you, because the lean is one input among many. Narayani takes it as something to test against experience, such as whether you have enjoyed running things in small ways, like a project or a side income.",
        },
        {
          type: "p",
          text: "Neighbouring questions have pages of their own. A business name is a numerology question, covered on the business name page, and the AstroNumerology page describes how chart and numbers are read together for a venture, including a view across several years. Premises belong with the page on property and big decisions, and the layout of an office or shop with the Vastu page on offices and shops.",
        },
      ],
    },
    {
      id: "leadership",
      chip: "Leadership",
      heading: "Leadership: deciding, carrying authority, trusting your judgment",
      icon: "astro-leadership",
      blocks: [
        {
          type: "p",
          text: "Leadership questions come from people who have just been given a team, from owners who have outgrown doing everything themselves, and from senior people who find decisions heavier, or their confidence slower to arrive, than the role demands. In Jyotish the Sun stands for authority, Saturn for discipline, Mars for the drive to act, Jupiter for counsel and judgment, and the tenth house for the standing others give you. A reading looks at how these sit together.",
        },
        {
          type: "p",
          text: "Then she turns to the part of leadership you practise, which no placement describes. She asks about habits such as deciding quickly and reopening the decision a day later, waiting for an agreement that never fully arrives, or holding a view in private and softening it in the room. A habit can be watched and changed in a way a placement cannot.",
        },
        {
          type: "p",
          text: "This is a reflection on a chart and a pattern. It is not management training or executive coaching.",
        },
      ],
    },
    {
      id: "patterns",
      chip: "What you repeat",
      heading: "The patterns behind work problems",
      icon: "brain-pattern",
      blocks: [
        {
          type: "p",
          text: "A work problem that follows you from one job to the next often has a thread running through it: something you do, believe or avoid. Narayani looks for that first, by asking what happens, what comes just before it and what you tell yourself afterwards.",
        },
        {
          type: "terms",
          title: "Patterns that commonly hold work back",
          items: [
            {
              term: "Waiting to be noticed",
              text: "You expect good work to speak for itself, so you say little about it, or call it ‘just’ a small thing. Managers decide on what they can see, and credit tends to drift toward people who describe their results.",
              icon: "brain-thought",
            },
            {
              term: "Saying yes to everything",
              text: "Each yes feels small. Together they fill the week with other people’s priorities, and the work that would earn a promotion never gets a day of its own.",
              icon: "brain-habit",
            },
            {
              term: "Leaving at the first friction",
              text: "A hard review, a new manager, a slow project: you start looking elsewhere before the difficulty has taught you anything, and the new employer brings the same first months again.",
              icon: "brain-reaction",
            },
            {
              term: "Staying out of loyalty",
              text: "The belief is that leaving would be ungrateful, or that work is simply like this. You stay past the point where the role fits, and resentment does what a decision should have done.",
              icon: "brain-belief",
            },
          ],
        },
        {
          type: "p",
          text: "If you work harder than your peers and still are not progressing, effort may not be what is missing. The gap is often visibility, scope or a conversation you have been avoiding, and extra hours without those make the week heavier and leave the career where it was.",
        },
        {
          type: "p",
          text: "Change starts with seeing the loop: when it begins, what it shields you from, and what keeping it costs. The Brain Training pages describe self-development practices for working on a pattern, and where the research stands on each.",
        },
      ],
    },
    {
      id: "money-and-limits",
      chip: "Money and limits",
      heading: "Money, and what this reading cannot say",
      icon: "work-finance",
      blocks: [
        {
          type: "p",
          text: "Work and money travel together. In Jyotish the second house is read for earnings and what you hold, and the eleventh for gains over time. A reading can also look at your relationship with earning: whether you undercharge, avoid asking for a raise, or spend every increase as it arrives. Those are habits and beliefs, and they can be talked through plainly.",
        },
        {
          type: "p",
          text: "A reading cannot tell you what to invest in, whether a venture will make a profit, when your income will rise or what a business is worth. Those are questions for a registered financial adviser, a chartered accountant or a lawyer, and for the numbers themselves. Contracts and tax go to a lawyer or an accountant too. This guidance does not replace career counselling, and it is neither financial nor legal advice.",
        },
        {
          type: "p",
          text: "How controlled tests of chart reading have turned out is covered on the main Astrology page. For work, that means a reading stays a conversation, and no promotion, client or profit can be promised from one.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she looks at in a work question",
    icon: "gen-listen",
    items: [
      { icon: "astro-aspect", text: "The tenth house, the planet that rules it, and the planets that sit in it or look at it" },
      { icon: "astro-navamsa", text: "The D9 and the D10, the finer charts for inner strength and for profession" },
      { icon: "gen-calendar", text: "The period running now and its sub-period, read as a calendar of seasons rather than dates" },
      { icon: "brain-action-loop", text: "What you think, say and do when work stalls, and how often the same loop returns" },
      { icon: "numc-mulank", text: "The numbers in your date of birth, read for working style beside the chart" },
    ],
  },
  bring: {
    heading: "Your work history, and any decision with a date",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "Your birth date and place, and the time as exactly as you can find it. The D10 turns on the minute, so say how sure you are." },
      { icon: "habit-evidence", text: "A few lines on your work so far: roles, years, and the moments that went well or badly." },
      { icon: "astro-job-change", text: "Any decision with a date on it, such as an offer, a notice period or a planned launch." },
      { icon: "astro-compatibility", text: "For a partnership, the other person’s birth details, if they are willing to share them." },
    ],
  },
  faqs: [
    {
      q: "Will a gemstone or bead be suggested for my career or business?",
      a: "Tradition pairs every planet with a stone, and ruby goes with the Sun, which stands for authority. No study shows that wearing one alters a career or a business, and Narayani does not say it does. Stones cost money and are difficult to reverse, and tradition picks one from the entire chart, never from the line of work. The Gemstones page covers what to check before buying. A work reading never depends on a purchase.",
    },
    {
      q: "Can a chart show whether a business partnership will work?",
      a: "No. The seventh house, Mercury and the two charts’ periods are prompts for a plain talk about where two people may want different things, for example one wanting speed while the other wants safety. They do not tell you how the partnership will go. The talk should cover roles, money in and out, who decides what, and a written way to part. A lawyer should draw up the agreement, and a reading does not replace one.",
    },
    {
      q: "Can a chart show why my business is not growing?",
      a: "Not by itself. Growth rests on the product, the price, cash flow and demand, and no chart can see those. A reading can look at the owner’s side: the period you are in, whether you do everything yourself or avoid one particular decision, and what you have repeated while sales stayed flat. Where the cause lies in the figures, an accountant or someone who knows your trade is the right person to ask.",
    },
    {
      q: "Can my date of birth or numerology show a suitable career, or why mine has stalled?",
      a: "A date of birth gives numerology a few numbers, read for working style, and some practitioners also read the numbers of the years ahead; the page on date of birth numbers explains them. A Jyotish chart needs the time and place of birth as well. Either way you get leanings to test against your own experience, and neither can pick a profession or say why a career has stalled. Numerology is an interpretive tradition without scientific support, and the Numerology page covers where the evidence stands.",
    },
    {
      q: "I was told Sade Sati will hold my career back. Is that so?",
      a: "Sade Sati is a Saturn-related period explained on the dashas and transits page. Its traditional description does not establish a cause for career setbacks. If work has felt slow, examine the practical situation: your workload, feedback, visibility and opportunities. A calendar label cannot tell you whether to resign, or make an employer recognise your contribution.",
    },
    {
      q: "Can the chart tell me whether to take a job offer?",
      a: "It cannot decide for you, and a decision of that size should not rest on it. Pay, the work itself, the people, family needs and your savings carry most of the weight. A chart can prompt useful questions: whether the move builds on what you have been learning, what your earlier moves suggest, and which period you would be starting in. Narayani offers those as things to think about, and the choice stays with you.",
    },
    {
      q: "My birth time is only a guess. What can still be read about work?",
      a: "Say so at the start. The rising sign and the D10 are the parts that suffer first, and a reading should tell you which parts it is holding lightly. The running period follows the Moon and moves by weeks, not years, for a slip of a quarter of an hour, so it holds up better. The page on readings without birth details covers what can be said when the time is missing altogether.",
    },
  ],
  related: [
    "/services/astrology/dashas-and-transits/",
    "/services/astrology/property-and-big-decisions/",
    "/services/numerology/astro-numerology/",
    "/services/numerology/business-name/",
  ],
  showFees: true,
};
