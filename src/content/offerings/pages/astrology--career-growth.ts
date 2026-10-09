import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "career-growth",
  title: "Career growth and leadership",
  metaTitle: "Career growth and leadership in Jyotish",
  metaDescription: "Growth over years, not one job question: skills, how you are known, leading others, habits that stall progress, and the long cycles in chart and numbers.",
  lead: "Look beyond the next job to the direction of your career. Consider chart and number interpretations alongside your leadership habits and practical choices.",
  card: "For growth over years: skills, being known, leading others, and what holds you back.",
  icon: "page-career-growth",
  group: "life",
  covers: [
    "Growth over years, not one job",
    "Skills and how you are known",
    "Leading, and delegating",
    "Confidence and putting off",
    "Long cycles in chart and numbers",
    "A plan for three to six months",
    "Mid-career, founders, returners",
  ],
  art: { kind: "drawing", id: "hero-career-growth" },
  enquiryTopic: "Astrology: career growth",
  cta: "Enquire about a career growth session",
  intro: [
    {
      type: "p",
      text: "A job question has an edge: this offer, this manager, this launch date. A growth question does not. It asks where the next several years of your working life should go, what you will need to learn on the way, and how you want to be known when you arrive.",
    },
    {
      type: "p",
      text: "Narayani approaches this as one long conversation in three parts: where you stand now, where you would like to stand, and the pattern that lies between. The chart and the numbers give the years some shape. The habits, the part you can change, are what she asks about.",
    },
  ],
  sections: [
    {
      id: "skills-and-positioning",
      chip: "Skills and standing",
      heading: "Skills, and how you are known",
      icon: "group-work-study",
      blocks: [
        {
          type: "p",
          text: "Growth has two halves that people often mix up. One is skill, which is what you can add to what you already do. The other is how you are known, which is the sentence colleagues would use about you when you are not in the room. A career can stall on the second half while the person keeps working on the first.",
        },
        {
          type: "terms",
          title: "Four places to look",
          items: [
            {
              term: "Skills",
              text: "What you learn next. In Jyotish the fifth house is linked with learning, and Mercury and Jupiter with intellect and knowledge. The practical question is which skill makes you more useful in the role you want, and which only feels like progress.",
              icon: "gen-student",
            },
            {
              term: "Positioning",
              text: "How you are known. The tenth house speaks of standing. If the sentence people use about you describes the job you held five years ago, that is where the work lies.",
              icon: "work-signage",
            },
            {
              term: "Network",
              text: "Who has seen your best work. The eleventh house is the house of gains over time and of networks, and the useful question is who could speak for you in a room you are not in.",
              icon: "house-11",
            },
            {
              term: "Teachers",
              text: "Who is ahead of you and willing to say what they did. The ninth house is linked with teachers and higher learning, and Jupiter with guidance.",
              icon: "house-9",
            },
          ],
        },
        {
          type: "p",
          text: "The step from building to leading shows how this goes. Tradition links Mars with technical work, and a reading can note where Mars stands in the chart. It can then ask what the step would give and cost, which skill would have to come first, and who already sees you as a leader. The chart gives the conversation a shape and leaves the answer to you.",
        },
        {
          type: "p",
          text: "Returning after a break is a positioning question as much as a skills one. The years away built things: judgment, patience, a different kind of organisation. Part of the conversation is finding plain words for them.",
        },
      ],
    },
    {
      id: "leading",
      chip: "Leading and habits",
      heading: "Leading over the years, and the habits that stall it",
      icon: "astro-leadership",
      blocks: [
        {
          type: "p",
          text: "The skills that earn a first promotion do not always carry a person through the next. Early on you are rewarded for doing the work, later for deciding what the work should be, later still for the people who do it and for what you decline to do yourself. Founders meet the same step in another form: the business can outgrow what one person can hold, and the person who built it becomes its bottleneck. Each step asks for a different habit, and the old habit tends to hang on after it has stopped helping.",
        },
        {
          type: "terms",
          title: "Three habits that stall growth",
          items: [
            {
              term: "Confidence that waits",
              text: "Many people wait to feel ready before taking the visible step, and then take it only when little is at stake. For many, confidence follows a first step rather than preceding it. A small public step, such as presenting one result or asking for one stretch assignment, can teach more than another month of preparing.",
              icon: "brain-belief",
            },
            {
              term: "Holding on",
              text: "It is faster to do it yourself, until it is not. Underneath is often a belief that nobody else will care as much, or that your worth lies in being the one who knows. A week spent teaching a task once is an investment, and the pattern is refusing the week.",
              icon: "work-team-space",
            },
            {
              term: "Putting things off",
              text: "The task that matters most is often the one where judgment is likeliest: the proposal, the price rise, the difficult conversation. Delay protects you from that judgment and costs you the result. Narayani asks what the delay protects before she suggests anything.",
              icon: "astro-stalled-project",
            },
          ],
        },
      ],
    },
    {
      id: "windows",
      chip: "Timing windows",
      heading: "Timing windows, in the chart and in the numbers",
      icon: "gen-time",
      blocks: [
        {
          type: "p",
          text: "Growth takes years, so the clocks that matter are long ones. Jyotish has several, and they run at the same time. For how each is calculated, see the page on dashas and transits.",
        },
        {
          type: "table",
          head: ["Cycle", "How long", "What a growth conversation does with it"],
          rows: [
            ["Your mahadasha", "6 to 20 years", "Asks whose themes colour this stretch of your working life, and what the next one will ask of you"],
            ["Jupiter’s circuit", "About 12 years", "Gives a rhythm for asking what you have learned, and whom you have helped to learn"],
            ["Rahu and Ketu", "About 18.6 years", "Looks at where appetite for the new and the urge to let go have been pulling"],
            ["Saturn’s circuit", "About 29 years", "Marks review points when it returns to its birth place: in the late twenties, and again near sixty"],
            ["Sade Sati", "About 7.5 years, recurring every 29 to 30", "Offers a stretch for taking stock; summaries call it testing and also rewarding"],
          ],
          icons: ["astro-mahadasha", "astro-jupiter-transit", "graha-rahu", "graha-saturn", "astro-sade-sati"],
        },
        {
          type: "p",
          text: "Narayani reads these as windows: stretches that tradition links with building, with consolidating or with stepping out. She names no date, and no window is promised to open. One you have not prepared for goes by unused.",
        },
        {
          type: "p",
          text: "In a long period the useful question is what the stretch is good for: perhaps learning to run a business without being the whole business, perhaps building a record that someone else can vouch for. Then comes the question of what you want to have built by the time it ends.",
        },
        {
          type: "p",
          text: "Numerology keeps its own cycles. Where they help, Narayani lines up the years ahead in your numbers with the long periods in the chart. The AstroNumerology page describes a five-year view built from both. If tradition offers a remedy for a stretch, she gives the reason for it, and you decide whether to take it up.",
        },
      ],
    },
    {
      id: "next-months",
      chip: "The next months",
      heading: "What a plan for three to six months can hold",
      icon: "habit-stacking",
      blocks: [
        {
          type: "p",
          text: "A plan for three to six months has to be small to last. It is a handful of actions rather than a strategy, and each one is something you can check at the end: you either did it or you did not.",
        },
        {
          type: "list",
          title: "Examples of what goes into one",
          items: [
            "One visible step, such as presenting a result or asking for a stretch assignment.",
            "One task to hand over, with the week it will take to teach it.",
            "One conversation you have been postponing, with a date set for it.",
            "One habit, tied to a set moment of the day and kept long enough to judge.",
            "One thing to stop, often a yes you give out of habit.",
          ],
        },
        {
          type: "p",
          text: "Habits settle slowly, which is one reason the plan runs for months. In one much-cited study of simple daily habits, the typical volunteer took about two months to settle one, with big differences from person to person. The often-quoted 21 days has no backing. A plan worded ‘when this happens, I will do that’ tends to help people follow through.",
        },
        {
          type: "p",
          text: "At the end of the period, look at what you did before you look at whether the career has moved. What you did is in your hands. The career follows more slowly, and other people have a say in it.",
        },
      ],
    },
    {
      id: "difference",
      chip: "How it differs",
      heading: "How this differs from a career and business reading",
      icon: "group-decisions",
      blocks: [
        {
          type: "table",
          head: ["Compared by", "Career and business reading", "Career growth session"],
          rows: [
            ["The question", "One decision or situation in front of you", "Where the next several years should go"],
            ["How far it looks", "The current season and the choices open now", "Several years, with a plan for the next three to six months"],
            ["What leads", "The work houses, the D10 and the running period", "The habits of confidence, delegating and delay, then the long cycles"],
          ],
        },
        {
          type: "p",
          text: "Both use the same chart, and the reading of strengths overlaps. The difference is the question you start from and how far you want to look.",
        },
        {
          type: "p",
          text: "A growth session is no substitute for career counselling, and it gives no financial or legal advice. It promises no promotion, because no chart can say whether you will be promoted. A plan for three to six months is a set of intentions you carry out, and how other people respond lies outside it. Decisions about money, contracts and tax belong with a registered adviser, an accountant or a lawyer.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she looks at over the longer view",
    icon: "group-chart",
    items: [
      { icon: "astro-dashamsa", text: "The tenth house and the D10, for the work you are recognised for and the work you are growing toward" },
      { icon: "astro-antardasha", text: "The sub-period now, the main period around it and the one that follows" },
      { icon: "astro-transit", text: "Saturn and Jupiter in their long circuits, read as review points and never as dates" },
      { icon: "numc-personal-year", text: "The numbers of your coming years, read beside the chart where they help the question" },
      { icon: "brain-action-loop", text: "What you do in the gap between where you are and where you want to be" },
    ],
  },
  bring: {
    heading: "Notes worth writing before a growth session",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "Date and place of birth, with the time if you know it. A slightly rough time still works, as the long periods lean on the Moon." },
      { icon: "habit-evidence", text: "A short account of your work so far, with the stretch you were proudest of and the one you were glad to leave." },
      { icon: "astro-job-change", text: "A sentence or two on how you would like your working life to look in about five years, even if you are unsure." },
      { icon: "astro-recurring-obstacle", text: "One or two moments when you stalled or put something off, and what you did next." },
    ],
  },
  session: {
    heading: "How a growth session is shaped",
    icon: "re-phased-build",
    steps: [
      { title: "Where you are", text: "Your role, your results, what you do well, and what costs you more than it should.", icon: "gen-professional" },
      { title: "Where you want to be", text: "In three years or five, in your own words, including the version you hesitate to say aloud.", icon: "astro-promotion" },
      { title: "The pattern between", text: "What you repeat in the gap: confidence that waits, work you hold on to, tasks you put off. It is read against the long periods in the chart and the numbers for your coming years.", icon: "brain-pattern" },
      { title: "The next three to six months", text: "What you will begin, stop and test, and in what order.", icon: "gen-calendar" },
    ],
  },
  suits: {
    icon: "gen-limits",
    yes: [
      "You are mid-career and the next step is not obvious, or the last promotion changed less than you hoped.",
      "You run a business and want to decide what to keep, what to hand over and what to build next.",
      "You lead people and suspect your habits have not grown with the role.",
      "You are returning to work after a break and want to restart with a plain sense of your strengths.",
    ],
    no: [
      "You have one decision in front of you, such as an offer or a launch date. The career and business reading fits that better.",
      "You are looking for a promise of promotion, a salary figure or a ranking of options.",
      "You need a CV written, a job found or interview practice. This is a reading of strengths, patterns and timing.",
    ],
  },
  faqs: [
    {
      q: "Can the chart tell me when my next promotion will come?",
      a: "No. A promotion depends on budgets, on other people’s decisions and on the calendar at your workplace, and a chart holds none of that. A growth conversation can look at the stretch you are in, ask whether the people who decide have been given a reason to promote you, and note review points over the coming years. Narayani uses the chart to reflect on time, and gives no timetable of events.",
    },
    {
      q: "I run my own business. Is a growth session different for me?",
      a: "The questions move from promotion to design: what to keep doing yourself, what to hand over, and what the business will need from you in its next phase. The chart and numbers still frame the years, and the habits of holding on and putting off often matter as much as the chart does. Hiring, money, contracts and tax stay with qualified advisers.",
    },
    {
      q: "I have been out of work for some years. Can this help me restart?",
      a: "It can give you a structured conversation about what you bring, where you would like to go and what has held you back from starting. For many returners that is less about skills than about confidence, and about how to explain the gap. The chart and numbers add a view of the stretches ahead. A session does not find jobs or write a CV, and it cannot promise a return to work.",
    },
    {
      q: "Do I need my exact birth time for a long view?",
      a: "It helps, though the long periods hold up better than the rising sign does. A quarter of an hour either way shifts the changeover from one period to the next by a few weeks to a couple of months, which matters little when a period runs for years. The D10 is another matter: the same slip puts it under a different rising sign, so a reading holds it lightly. Tell Narayani honestly how sure you are of it.",
    },
    {
      q: "If habits matter most, why bring a chart into it?",
      a: "Because a chart gives a long conversation a shape and a calendar, and some people think better with both. Narayani uses it for what it is, a traditional way of looking at long stretches of time. The habits are the part you can act on, and that part does not depend on the chart. If the chart means little to you, the habits are still the place to begin.",
    },
    {
      q: "Is it too early in my career for this?",
      a: "There is no rule, but a growth session works best when there is something to look back on: roles held, results, patterns you can name. In your first years, a single question such as which job to take is closer to the career and business reading, and a choice of course or stream belongs on the education page.",
    },
    {
      q: "Is this the same as coaching, or as the Hand Holding Program?",
      a: "No to both. A growth session is a reading and a conversation about strengths, patterns and timing. It is not a structured coaching programme or a job-search service. The Personalised Hand Holding Program is a separate offer: six months of personal guidance.",
    },
  ],
  related: [
    "/services/astrology/career-and-business/",
    "/services/numerology/astro-numerology/",
    "/services/astrology/dashas-and-transits/",
    "/hand-holding-program/",
  ],
  showFees: true,
};
