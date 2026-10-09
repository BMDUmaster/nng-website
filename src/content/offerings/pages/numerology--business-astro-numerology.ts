import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "business-astro-numerology",
  title: "Business AstroNumerology",
  metaTitle: "Business AstroNumerology",
  metaDescription: "How numbers and a Jyotish chart are read together for a business: the founder, the company’s date and name, launch timing, partners, and the limits.",
  lead: "Consider a launch, partnership or next step through the founder’s chart and numbers alongside the business name and date. No business result is promised.",
  card: "When a launch, a partner or a new market is on the table and timing is the question.",
  icon: "page-business-astro-numerology",
  group: "larger",
  covers: [
    "Founder’s chart and numbers",
    "The company’s birth date",
    "Launch and expansion timing",
    "Partners and partner choice",
    "Phone and premises numbers",
    "A roadmap for the years ahead",
    "Limits and evidence",
  ],
  art: { kind: "drawing", id: "hero-business-astro-numerology" },
  enquiryTopic: "Numerology: business AstroNumerology",
  cta: "Enquire about a business AstroNumerology reading",
  intro: [
    {
      type: "p",
      text: "In Indian usage every number from 1 to 9 belongs to a planet: 1 to the Sun, 2 to the Moon, 3 to Jupiter, 5 to Mercury, and so on. That link is where numerology and Jyotish meet, and AstroNumerology follows it. A number is worked out from a date or a name. The planet it belongs to is found in a kundli, the birth chart, and the question becomes what that planet is doing there and which of its periods is running.",
    },
    {
      type: "p",
      text: "For a business this gives four things to read together: the founder’s numbers and chart, the company’s own date and name, the timing of a launch or a move, and the partners who share the work. Narayani uses the result to plan a conversation about a decision, and it forecasts nothing.",
    },
    {
      type: "p",
      text: "This is the widest of the business pages. The personal AstroNumerology page is about one person, and the business name page is about one decision, the name. This page takes the business as a whole, with its owners, its dates and its timeline.",
    },
  ],
  sections: [
    {
      id: "what-is-read",
      chip: "What is read",
      heading: "Six things a business reading can draw on",
      icon: "numc-vedic",
      blocks: [
        {
          type: "p",
          text: "Which of them are used depends on your question and on what is known about the business.",
        },
        {
          type: "table",
          head: ["What is read", "What it gives"],
          rows: [
            ["The founder’s chart", "Where the planets stand by sign and house, and which periods are running. The houses tradition links with livelihood, income, gains and partners are read first, with the dashamsa, the divisional chart for work and public role."],
            ["The founder’s numbers", "Mulank, the number of the birth day, and Bhagyank, the number of the whole date, with the planet each belongs to."],
            ["The company’s date", "The numbers of the day it was registered or began trading, and a chart for that moment if the time of day is known."],
            ["The company’s name", "Its total in the table chosen, and the planet that total belongs to."],
            ["Brand numbers", "The number customers call and the premises number, added and reduced like a date."],
            ["Partners", "Each partner’s numbers, and a chart to read alongside the founder’s."],
          ],
          icons: ["group-chart", "numc-mulank", "gen-calendar", "numc-name", "numc-mobile", "astro-partnership"],
        },
      ],
    },
    {
      id: "numbers-and-planets",
      chip: "Numbers and planets",
      heading: "How a number becomes a question about the chart",
      icon: "astro-yoga",
      blocks: [
        {
          type: "p",
          text: "Here is an invented founder and company, set out the way a reading begins. The founder was born on 27 August 1984, which gives a Mulank of 9. All the digits of the date add to 39, which reduces to 3, the Bhagyank. The company began trading on 29 September 2019. Its day, 29, gives 11 and then 2, and all the digits of its date give 32 and then 5.",
        },
        {
          type: "table",
          head: ["Number", "Comes from", "Planet in Indian usage", "What a reader asks of the chart"],
          rows: [
            ["9", "The founder’s Mulank", "Mars (Mangala)", "Where Mars stands and what it rules in this chart, and whether a Mars period is near"],
            ["3", "The founder’s Bhagyank", "Jupiter (Guru)", "Where Jupiter stands, and when its main period runs"],
            ["2", "The company’s Mulank", "Moon (Chandra)", "The Moon’s sign and star, the star also setting where the period cycle starts"],
            ["5", "The company’s Bhagyank", "Mercury (Budha)", "Where Mercury stands, since tradition ties it to trade, accounts and speech"],
          ],
          icons: ["num-9", "num-3", "num-2", "num-5"],
          caption: "An invented founder and company, used only to show how a reading is set out.",
        },
        {
          type: "p",
          text: "The table points to where the reader looks in the chart and says nothing about whether a planet is strong or weak. Placing planets in houses needs the founder’s time of birth. Without it the numbers can still be read from the date, though anything in the chart that depends on the hour is less certain. Traditions also give different planets for 4 and 7, so a reading names the table it follows.",
        },
      ],
    },
    {
      id: "company-date",
      chip: "The company’s date",
      heading: "Which date is a company’s birth date",
      icon: "astro-birth-date",
      blocks: [
        {
          type: "p",
          text: "Practitioners choose differently, and no single date is agreed. A reading can use any of the dates below, and it should say which one and why.",
        },
        {
          type: "table",
          head: ["The date", "What it marks", "A reading might choose it when"],
          rows: [
            ["Incorporation", "The day on the certificate of incorporation, the company’s birth in law", "The question concerns the company as an entity: its structure, name or shareholders"],
            ["First day of trade", "The day the first customer was served or the first order delivered", "The question concerns customers, the market or the pace of growth, or the business is a proprietorship with no certificate"],
            ["Public launch", "The day the doors, website or app opened to everyone", "The question concerns a launch, a relaunch or a new line"],
            ["Founding agreement", "The day the partners committed to each other in writing", "The business is a partnership and the question concerns the partners"],
          ],
          icons: ["work-registered-name", "work-cash-counter", "astro-business-launch", "astro-signing"],
        },
        {
          type: "p",
          text: "A certificate of incorporation gives a date and seldom a time of day. Without a time, the company’s rising sign and divisional charts cannot be worked out, while the numbers of the date are unaffected. A firm founded under the old Calcutta or Bombay clocks raises a further question about the time, which the page on readings without birth details explains.",
        },
      ],
    },
    {
      id: "timing",
      chip: "Timing",
      heading: "How launch and expansion timing is read",
      icon: "gen-time",
      blocks: [
        {
          type: "p",
          text: "Five instruments are used, and none of them dates an event. Each describes a stretch of time that tradition links with certain themes. The dashas and transits page explains the Jyotish ones in full.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Muhurta",
              text: "The choice of a day and hour for beginning something, made from the Hindu calendar, the panchanga. For a business it can only choose among dates that are practically open, since the licence, premises, stock and staff must all be in place first.",
              icon: "astro-muhurta",
            },
            {
              term: "Date numbers",
              text: "The numbers of a proposed day, worked out like a birth date and compared with the founder’s. Some practitioners use them as a second filter beside the muhurta. Lists of friendly and opposed numbers contradict each other, so the comparison gives a preference and nothing firmer.",
              icon: "numc-personal-month",
            },
            {
              term: "Periods (dasha)",
              text: "The usual period system, the Vimshottari dasha, divides life into main periods of 6 to 20 years, each ruled by one planet. The period running is read for the themes tradition links with that planet, such as advice and teaching for Jupiter, or trade and accounts for Mercury.",
              icon: "astro-mahadasha",
            },
            {
              term: "Transits (gochar)",
              text: "Where the planets stand now, read from the founder’s Moon sign. Sade Sati, the best known of these periods, is answered in the questions below.",
              icon: "astro-transit",
            },
            {
              term: "Year numbers",
              text: "The day and month of the company’s date are added to the calendar year and reduced. The invented company above, which began trading on 29 September, is in a year 4 in 2027 and a year 5 in 2028. In most numerology books 4 is read as hard work and 5 as change. Some practitioners start the year on 1 January and others on the date itself.",
              icon: "numc-personal-year",
            },
          ],
        },
        {
          type: "p",
          text: "Together they give a calendar of themes. Where the themes line up with the business’s own calendar, the plan is easy to talk about, and where they pull apart, the difference is the part worth discussing.",
        },
      ],
    },
    {
      id: "roadmap",
      chip: "The roadmap",
      heading: "A roadmap puts three calendars on one line",
      icon: "numc-pinnacle",
      blocks: [
        {
          type: "p",
          text: "A roadmap is laid out in the conversation. It puts the founder’s periods, the company’s year numbers and the business’s own calendar on one line for the next few years. The business calendar is the part you know best: seasonal peaks, lease and licence renewals, planned hires, a second site.",
        },
        {
          type: "p",
          text: "Suppose the invented founder is in the Jupiter main period, and a Mercury sub-period within it runs from January 2027 to about April 2029, a stretch of about two years and three months. The company’s year numbers are 4 in 2027 and 5 in 2028, and a second branch is planned for 2028. The line shows a stretch that tradition links with trade and advice, a year read as a time of change, and a plan that needs a lease, a manager and cash to carry the slow months. The first two are themes. The third is a question for the business, and the roadmap puts it on the table.",
        },
        {
          type: "p",
          text: "A roadmap grades no year as good or bad, dates no outcome and promises no growth. It shows where the traditions and the business calendar overlap, so that a decision about timing is made with the overlaps in view.",
        },
      ],
    },
    {
      id: "partners",
      chip: "Partners",
      heading: "Partners, and choosing one",
      icon: "house-7",
      blocks: [
        {
          type: "p",
          text: "In Jyotish the seventh house is read for partnership and, for a business, for contracts too. A partner’s chart can be read beside the founder’s, and the two sets of numbers compared.",
        },
        {
          type: "p",
          text: "A reading can give the choice of a partner some structure: what each person brings, expects and is unsure about, and where their numbers and charts differ. No study shows either tradition telling good business partners from poor ones, and the lists that sort numbers into friends and opponents contradict each other.",
        },
        {
          type: "p",
          text: "For a partner the decisive checks are ordinary ones: what each person puts in, who decides what, how a disagreement is settled and how an exit works. They belong in a written agreement drafted by a lawyer, and this page is not legal advice. The conversation can show which of those questions has been avoided. A prospective partner’s birth details are theirs to share, so ask before you use them.",
        },
      ],
    },
    {
      id: "brand-numbers",
      chip: "Brand numbers",
      heading: "Phone and premises numbers",
      icon: "numc-house-number",
      blocks: [
        {
          type: "p",
          text: "After the name, the two numbers a business uses most are the one customers call and the one in its address, such as a door, shop or floor number. Practitioners add the digits of each and reduce them, as they do for a date, then compare the result with the founder’s numbers and the name’s total. The mobile and house numbers page gives the method in full.",
        },
        {
          type: "p",
          text: "Some lists attach warnings to particular pairs of digits. A reading does not use them, because nothing supports them and they lean on worry. A total is one more thing to notice and never a reason on its own to change a phone line or move a shop. Premises are chosen for rent, footfall and access. Numbers printed on cards, vehicles and packaging are learned by customers, so changing one has a cost, whatever it adds up to.",
        },
      ],
    },
    {
      id: "behind-the-question",
      chip: "Behind the question",
      heading: "What a timing question is often asking",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "A timing question may conceal a practical one: whether a partner is ready, whether funding is settled or whether staff can support the launch. Put those questions beside any traditional date interpretation; no calendar resolves them.",
        },
        {
          type: "p",
          text: "Ask what would change once a date is settled. A plan that depends on a preferred day is different from one with a sound practical case. These are reflection prompts, not Narayani's appointment sequence.",
        },
      ],
    },
    {
      id: "limits",
      chip: "Limits",
      heading: "The limits of a business reading",
      icon: "astro-limits",
      blocks: [
        {
          type: "list",
          items: [
            "No revenue, growth or other result is promised, and no reading says that a business will do well or badly.",
            "Nothing here is financial, legal or tax advice. Pricing, funding, contracts and structure belong with an accountant, a lawyer or a company secretary.",
            "No study shows either tradition helping a business, and the general evidence on each is set out on the astrology and numerology pages.",
            "Both traditions come in several versions, so a reading names the one it follows.",
          ],
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions about a business and its numbers",
    icon: "gen-listen",
    items: [
      { icon: "house-10", text: "The founder’s chart: the work, income, gains and partnership houses, and the periods now running" },
      { icon: "numc-life-path", text: "The founder’s numbers and the planets they belong to, read with the chart" },
      { icon: "numc-bhagyank", text: "The company’s date and the numbers it gives, and which date is being used" },
      { icon: "astro-antardasha", text: "Where the founder’s periods and the company’s year numbers fall against the business calendar" },
      { icon: "gen-professional", text: "What each partner brings and expects, and what is still unsaid" },
      { icon: "brain-meta-model", text: "The question behind the timing question" },
    ],
  },
  bring: {
    heading: "Founder, company and partner details to bring",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "The founder’s date, time and place of birth. The date is enough for the numbers; the chart needs all three" },
      { icon: "numc-birthday", text: "Dates for the company: incorporation, first day of trade and any launch, with the time of day if it is known" },
      { icon: "gen-bring-name", text: "The names the business trades under, and the phone number and premises number in use" },
      { icon: "numc-partners", text: "Each partner’s birth details, shared only with their agreement" },
      { icon: "brain-timeline", text: "A short note of what is planned: a launch, a new market, a new partner, a hire" },
      { icon: "gen-privacy", text: "Accounts, contracts and bank details are not needed, so leave them out" },
    ],
  },
  faqs: [
    {
      q: "Do I need my exact time of birth?",
      a: "The founder’s numbers need only the date of birth. The chart part of the reading needs the time and place as well, and the company’s own time is usually unknown, since a certificate gives a date only. If a time is uncertain, say so, and the reading names the parts of the chart that become less reliable. A reading can still use whatever the date and place settle.",
    },
    {
      q: "Can it tell me the best date to launch or to sign?",
      a: "Muhurta is a traditional approach to choosing a time. This page does not establish a favourable date or a business benefit. Ask whether timing is within the available consultation scope, and keep licences, stock, staff and finances central.",
    },
    {
      q: "Does a business have a chart of its own?",
      a: "A chart can be cast for the moment a company began, if the date, time and place are known. Practitioners differ on which moment counts, and a certificate usually gives a date but no time. With no time, the numbers of the date can still be read and the founder’s chart read as usual. Whether a company has a chart of its own in any meaningful sense is a matter of tradition, and nothing demonstrates it.",
    },
    {
      q: "Should I delay a launch because of Sade Sati?",
      a: "Sade Sati is a spell of about seven and a half years in which Saturn moves through the sign of your Moon and the signs on either side; the dashas and transits page explains it. Tradition describes it as testing, and summaries also call it a time of achievement. No evidence ties it to specific events in business. Narayani would ask whether the business is ready, which a calendar cannot tell you. What to do about it is for you and your advisers to decide.",
    },
    {
      q: "Can it forecast my revenue or growth?",
      a: "No. Nothing shows that a founder’s chart, a company’s numbers or a launch date predicts revenue, and Narayani promises no growth or any other result. A reading can raise better questions about timing and partners. Figures, pricing and funding stay with you and your accountant, and this guidance is not financial, legal or tax advice.",
    },
    {
      q: "My company is not registered yet. Can I still have a reading?",
      a: "Yes. The founder’s numbers and chart can be read now, the names you are considering can be read as candidates, and the dates you might use for registration or launch can be set out as options. Which date counts as the company’s birth is then your decision, made with the reasons in front of you. A name or date you choose later can be read once it exists.",
    },
    {
      q: "Whose chart is read in a family business?",
      a: "That depends on the question. For the company’s own direction the founder’s numbers and chart are the usual starting point. For a question about who leads next, the present head and the person in line can each be read, with each person’s agreement, because the question concerns two people as much as the business. A family firm may also have an incorporation date, a first day of trade and a date when a generation took over, and the reading names the one it uses.",
    },
    {
      q: "What if the numbers and the chart point in different directions?",
      a: "They often do, because the two traditions were built separately and each has several versions. Narayani sets out what each says and does not force them into one verdict. Where they differ, the difference becomes part of the conversation, including how strong each reason is and what you would do either way. Both are prompts for your own thinking, and the decision stays yours.",
    },
  ],
  related: [
    "/services/numerology/astro-numerology/",
    "/services/numerology/business-name/",
    "/services/astrology/career-and-business/",
    "/services/astrology/dashas-and-transits/",
  ],
  showFees: true,
};
