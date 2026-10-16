import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "astrology",
  slug: "property-and-big-decisions",
  title: "Property and big decisions",
  metaTitle: "Property and big decisions in Jyotish",
  metaDescription:
    "How Jyotish reads a home or land purchase, a move, a launch or a signing: the fourth house, Mars and Saturn, timing windows, and where its limits lie.",
  lead: "When a decision is large and slow to undo, Narayani reads your chart for its timing and for the way you are making it. She keeps that beside the practical and legal checks, never in place of them.",
  card: "When you are about to buy, sell, move, sign or launch and want to look at the timing.",
  icon: "page-property-and-big-decisions",
  group: "decisions",
  covers: [
    "Buying or selling a home or land",
    "Relocation and moving office",
    "Investing and signing",
    "Fourth house, Mars and Saturn",
    "Dasha and transit windows",
    "Comparing two options",
    "Beside the legal checks",
  ],
  art: { kind: "drawing", id: "hero-property" },
  enquiryTopic: "Astrology: property and big decisions",
  cta: "Enquire about a property or big-decision reading",
  intro: [
    {
      type: "p",
      text: "Some decisions are slow to undo: a home or a plot, a move to another city or country, savings put into land or a business, a loan or lease with years to run, the day a shop opens or an office changes address. The question often arrives when the paperwork is half done and a date is close. It comes in several forms at once: whether this is a good time, whether to wait, whether this is the right place.",
    },
    {
      type: "p",
      text: "Narayani reads your chart for what Jyotish links with the matter and with the period you are in. She also asks how you are making the choice, because a decision taken under a deadline, or because everyone around you is doing the same, has a pattern of its own. She gives no verdict. The decision stays with you.",
    },
    {
      type: "p",
      text: "The title, the loan terms, the approvals and the building itself are for the people qualified to check them, and they come first. This page covers the chart side, which is the person and the time. The space itself, with its plan and directions, belongs to Vastulogy: see the pages on property and land and on real estate and developers.",
    },
  ],
  sections: [
    {
      id: "decisions",
      chip: "Decisions",
      heading: "Seven decisions, each with its own question",
      icon: "group-decisions",
      blocks: [
        {
          type: "p",
          text: "Seven kinds of decision are covered here. Each asks something different, so the reading changes with it.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Buying a home or a plot",
              text: "She looks at who the home or land is for, and at the several moments inside one purchase: the booking, the agreement, the registration and the first entry into the house, called *griha pravesh*. Each can be asked about separately, and only some of those dates are yours to choose.",
              icon: "astro-property-buy",
            },
            {
              term: "Selling",
              text: "People ask when to list, when to accept an offer and whether to wait for a better one. She looks at the timing as the tradition describes it. She also asks what is pushing you to sell: a debt, a family wish, a posting elsewhere, or tiredness of the place.",
              icon: "astro-property-sell",
            },
            {
              term: "Relocating",
              text: "This is a move to another city or country. Jyotish reads the fourth house for the home you leave and the twelfth for life far from where you were born, and she reads both. She asks what is drawing you and what is pushing you, because the two do not always agree.",
              icon: "astro-relocation",
            },
            {
              term: "Investing",
              text: "Here a large share of your savings goes into land, a business or a long holding. She does not suggest what to buy, hold or sell, and she does not estimate a return; this is not financial advice. What she can look at is the timing in your chart and your own habit, such as committing early or waiting until the chance has gone.",
              icon: "astro-investment",
            },
            {
              term: "Signing",
              text: "A loan, a lease, a partnership deed and an employment contract all ask for a signature. Tradition reads the seventh house for agreements and partners. A signing date is a choice only when you have one to make, and the clauses are for your lawyer, who reads them before any chart is opened.",
              icon: "astro-signing",
            },
            {
              term: "Launching",
              text: "A new business, a product or an opening day can each be given a start time, which is the work of muhurta. She describes the windows the tradition would call supportive, and you weigh them against the practical date.",
              icon: "astro-business-launch",
            },
            {
              term: "Moving an office",
              text: "When a business changes premises there are several moments: the day the keys change hands, the day work begins, the day the owner sits down at the new desk. Each can carry its own window. For the layout of the new space, the Vastulogy page on offices and shops is the place to look.",
              icon: "work-relocation",
            },
          ],
        },
      ],
    },
    {
      id: "in-the-chart",
      chip: "In the chart",
      heading: "What she reads in the chart",
      icon: "group-chart",
      blocks: [
        {
          type: "p",
          text: "The chart in front of her is the owner’s: yours, and for a joint purchase your co-owner’s beside it. A plot or a flat has no chart of its own in this reading. Jyotish gives each of the twelve houses its own meanings, set out on the Birth chart reading page, and a handful come up in nearly every property or business decision.",
        },
        {
          type: "table",
          head: ["In the chart", "What tradition links with it", "How she uses it"],
          rows: [
            ["The fourth house", "Home, land, property, vehicles and peace of mind", "Her first stop for a home or plot: its sign, its lord, and any planet in it or facing it."],
            ["Mars", "Land and real estate, along with strength and conflict", "Where it stands against the fourth house, and whether its period is running or near."],
            ["Saturn", "Delay and durability, by practitioner convention", "A prompt to ask whether a slow matter is waiting on a step that has not been taken."],
            ["The seventh house", "Spouse, partners and agreements", "Read when a co-buyer, a partner or a contract is involved."],
            ["The tenth house", "Work, livelihood and standing", "Read for a launch, a new office or a business move."],
            ["The twelfth house", "Expenses, living away from home and foreign residence", "Read for a move abroad or a long stay elsewhere."],
            ["The second house", "Wealth, family and speech", "Read with the eleventh when a large sum is involved, to place the period you are in. It is never used to estimate a return."],
            ["The eleventh house", "Gains, income and friends", "Read with the second, in the same way."],
          ],
          icons: ["house-4", "graha-mars", "graha-saturn", "house-7", "house-10", "house-12", "house-2", "house-11"],
        },
        {
          type: "p",
          text: "These are indications, not rules, and practitioners weigh them differently. She reads each placement beside the lord of the house, the period running and your question, and says when a point is a judgement call.",
        },
      ],
    },
    {
      id: "windows",
      chip: "Timing windows",
      heading: "How a window is described",
      icon: "astro-muhurta",
      blocks: [
        {
          type: "p",
          text: "A window is a stretch of time that tradition calls suited, or unsuited, to a particular beginning. Two things shape it. One is the planetary period you are in, along with the slow passage of Saturn and Jupiter as seen from your Moon sign, the sign the Moon was in at your birth. The other is the panchanga, the calendar of the day. Its five parts are the tithi (lunar day), vara (weekday), nakshatra (the Moon’s star), yoga (one of twenty-seven Sun-and-Moon divisions) and karana (half a tithi). The page on dashas and transits explains each.",
        },
        {
          type: "p",
          text: "Muhurta guidance for building a house names four separate beginnings, each with its own suitable time: the foundation, the well, the door frame and the first entry. A signing or the opening of a shop is handled in the same spirit.",
        },
        {
          type: "p",
          text: "Three kinds of window come up. She describes each in the tradition’s terms and calls none of them a verdict.",
        },
        {
          type: "terms",
          items: [
            {
              term: "A favourable stretch",
              text: "The running period belongs to a planet that tradition links with the matter, such as the lord of the fourth house for a home. The transits raise no obvious objection, and the day’s panchanga suits that kind of beginning. Tradition calls such a time *shubh*, which means auspicious. She says so, and says what it does not mean: a supportive window is never a reason to skip a check.",
              icon: "astro-window-favourable",
            },
            {
              term: "A stretch for care",
              text: "The indications are mixed. A period that tradition links with delay is running, or Saturn is passing through the fourth sign from your Moon sign, a spell of about two and a half years that comes round about every thirty years. Tradition describes it as slow and testing. She would take it as a reason for slower steps and more checking, and rarely as a reason to cancel the plan.",
              icon: "gen-caution",
            },
            {
              term: "A stretch to avoid",
              text: "Tradition names some times at which many families put off a beginning: Rahu Kaal, a stretch of roughly an hour and a half that falls at a different hour each weekday; Pitru Paksha, the fortnight given to ancestors; and adhik maas, the extra lunar month added about every three years. Customs differ by region and by household. If the date can move at no cost, moving it is easy. If it cannot, because a loan sanction or a registration slot is already set, the stretch is no reason to cancel.",
              icon: "astro-window-avoid",
            },
          ],
        },
      ],
    },
    {
      id: "checks",
      chip: "Practical checks",
      heading: "The checks that come first",
      icon: "re-approvals",
      blocks: [
        {
          type: "p",
          text: "A chart cannot see a flaw in a title, a clause in a loan or a crack in a wall. Those questions have owners, and they come before any question about timing.",
        },
        {
          type: "table",
          head: ["The question", "Who can answer it"],
          rows: [
            ["Is the title sound, and are the approvals in place?", "A property lawyer, who reads the sale deed, the encumbrance certificate and, for a project still being built, its RERA registration."],
            ["Can you carry the loan, and is the price fair?", "Your bank, a valuer, and a financial adviser or accountant."],
            ["Is the building sound?", "A structural engineer or an architect."],
            ["Is this a good time, and how are you making this choice?", "A reading with Narayani, as one input among the others."],
          ],
        },
        {
          type: "p",
          text: "She works around those checks and asks for the dates that come out of them. A registration slot, a sanction letter with an end date and a builder’s possession date are facts the reading has to fit.",
        },
      ],
    },
    {
      id: "choosing",
      chip: "Choosing",
      heading: "Comparing two options, or asking whether to wait",
      icon: "re-plot-selection",
      blocks: [
        {
          type: "p",
          text: "You may be holding two flats, two cities or two offers. The chart cannot rank them, and she does not pretend it can. What a reading can do is give each choice its own timing, so you see whether one sits in a steadier stretch than the other. Then she asks you to describe each option as if to a friend who knows nothing about either.",
        },
        {
          type: "p",
          text: "Say the choice is between a flat that is ready, in a neighbourhood you know, and a larger one still being built, with handover two years away. She would set each date beside the periods running then, say what tradition links with each, and ask what you make of it.",
        },
        {
          type: "p",
          text: "When the question is whether to wait, she asks what you are waiting for. A wait with a reason and an end date, such as a loan sanction or a lease that ends in March, is a plan. A wait with neither is often a feeling, and the feeling is worth looking at.",
        },
      ],
    },
    {
      id: "fell-through",
      chip: "When it fell through",
      heading: "When a purchase has already gone wrong",
      icon: "astro-recurring-obstacle",
      blocks: [
        {
          type: "p",
          text: "A deal collapses at the last step. A flat sits unsold for a year. A builder moves the possession date for the third time. People bring these to a reading and ask why.",
        },
        {
          type: "p",
          text: "Narayani makes no causal claim. A chart cannot show that a planet or a period caused a sale to fail, and a reading that said so would be guessing. What she can do is compare the date of each setback with the periods that were running, and ask whether something in how the decision was made repeats each time: a late sign-off, a price accepted in haste, a partner left out of the conversation. Sometimes the cause is entirely practical, and the person to find it is a lawyer, a bank or the builder.",
        },
      ],
    },
    {
      id: "limits",
      chip: "Limits",
      heading: "Where a property reading stops",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "It cannot tell you that a property is good or bad, or that a date will go well. It does not value land, judge a title or rate an investment, and it is not legal, financial or investment advice.",
        },
        {
          type: "p",
          text: "No controlled test of muhurta, or of dasha timing for a purchase or a launch, has been located, so both stand as tradition. The Astrology page sets out what controlled tests of birth charts have found. She holds a reading to what it is: a way to talk through timing and your own pattern, never a forecast.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she reads when a big decision is close",
    icon: "re-buyer-view",
    items: [
      { icon: "astro-mahadasha", text: "The planetary period running now and the next, read against the decision in front of you" },
      { icon: "astro-transit", text: "How Saturn and Jupiter sit from your Moon sign for as long as the decision is open" },
      { icon: "gen-homeowner", text: "The owner’s chart: yours, and your co-owner’s beside it for a joint purchase" },
      { icon: "gen-calendar", text: "Which upcoming dates a bank, a builder or a registry controls, and which are still yours to choose" },
      { icon: "brain-reaction", text: "How you decide under pressure, and whether a deadline or a crowd is making the choice" },
    ],
  },
  bring: {
    heading: "Before a property or big-decision reading: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Birth date, time and place for each owner or signatory. The houses she reads depend on the time" },
      { icon: "gen-bring-plan", text: "The listing or brochure, if you have one, so she can see what is being decided" },
      { icon: "gen-time", text: "The dates already set by others: a possession date, a sanction letter’s end date, a registration slot" },
      { icon: "brain-words", text: "If you are comparing two options, each described in a few lines of your own" },
      { icon: "gen-privacy", text: "Deeds and loan papers are not needed to begin. A line on any date they set is enough" },
    ],
  },
  faqs: [
    {
      q: "Can astrology tell me whether to buy a particular property?",
      a: "No. A chart cannot see a particular building, and Narayani gives no verdict of buy, wait or avoid. She can say what Jyotish links with a home or a plot at this time, and she can ask how you are reaching the decision. The title, price and structure belong to the checks above. The choice is yours.",
    },
    {
      q: "How are favourable and cautionary windows chosen for signing, moving or launching?",
      a: "From two sources: the period you are running, and the panchanga of each day under consideration. Where they agree, tradition describes the day as supportive; where they pull apart, it asks for care. Either description only narrows the choice of dates, and neither predicts how the matter turns out. If a bank or a builder has set the date, she works with that.",
    },
    {
      q: "What does a session on a property or business decision cover?",
      a: "It begins with the decision in your own words and the dates already set by others. She then reads your chart for the matter: the houses for home, work or agreements, the period you are in and the transits running now. Together you go through any dates you are weighing. She also asks how you are reaching the choice and what would make you wait. Legal, financial and structural checks are not part of it.",
    },
    {
      q: "Does the number of a flat or house matter?",
      a: "Numerology adds a house number down to one digit and sets it next to the numbers of those who will live there. Narayani can look at it if you ask, as a small part of the picture, and nothing else on this page depends on it. If a home suits you in every other way, its number is a poor reason to turn it down. The Mobile and house numbers page sets out the method.",
    },
    {
      q: "The builder has set a possession date. Can a window still help?",
      a: "In a smaller way, yes. You may not choose the day the keys are handed over, but you usually choose the day and hour you first enter the home, called griha pravesh, and the day you register or sign where a slot is flexible. She works with what you can move and leaves the rest alone. If every date is set, she says so, and the conversation turns to the decision itself.",
    },
    {
      q: "Is Mars or Saturn in the fourth house a bad sign for buying a home?",
      a: "No placement is a verdict. Mars is linked with land and with conflict, and Saturn with delay and with durability, so practitioners draw different readings from either one in the fourth house. The lord of the house, its strength and the period running all change the picture. Narayani takes a placement as a theme to talk about. If one has worried you, bring the exact words you were given and ask what they rest on.",
    },
    {
      q: "Should I wait for a hard planetary period to pass before buying?",
      a: "Rarely. In the Vimshottari system, the standard one, a main period lasts between 6 and 20 years, so waiting one out is seldom a plan. Sub-periods and transits turn over much faster, and she looks at those. The loan, your income and what your family needs weigh more than any period. Tradition describes a period as a theme, and it is no gate.",
    },
    {
      q: "Can you say whether a plot or a business stake will grow in value?",
      a: "No. Narayani does not estimate returns, name what to buy or sell, or comment on prices, and a chart is not a market view. A valuer or a financial adviser can speak to value. What she can offer is a conversation about how you tend to make large money decisions. This is not financial or investment advice.",
    },
    {
      q: "Can both our charts be read for a joint purchase?",
      a: "Yes, if you each share your details. Tradition looks at each owner’s chart for the matter. Where the two suggest different timing, the useful conversation is about priorities, since no chart wins. If the two of you cannot decide, she can help you put into words what each of you wants from the property. Please share another person’s details only with their agreement.",
    },
    {
      q: "Can a day be chosen for opening a shop or launching a business?",
      a: "A window can be described for the dates you are able to choose, in the tradition’s terms. A new business also depends on licences, stock, staff and cash, so those dates come first and the window is fitted around them. The reading does not say whether the venture will do well, and it is not business or financial advice.",
    },
  ],
  related: [
    "/services/astrology/dashas-and-transits/",
    "/services/vastu/property-and-land/",
    "/services/vastu/real-estate-and-developers/",
    "/services/astrology/career-and-business/",
  ],
  note: "A good window is no reason to skip a check or to sign a paper you have not read. Questions of title, price, tax, loan terms and construction go to a property lawyer, a valuer, a financial adviser and an engineer, and a reading stands in for none of them.",
  showFees: true,
};
