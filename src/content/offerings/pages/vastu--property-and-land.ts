import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "property-and-land",
  title: "Choosing a property or a plot",
  metaTitle: "Vastulogy for choosing a property or plot",
  metaDescription: "Weighing a plot or comparing two homes: how shape, slope, road and soil read in Vastulogy, plus timing and building in phases, as support for your decision.",
  lead: "Compare the Vastulogy considerations of a home or plot before deciding. This supports your assessment; it does not replace legal or financial checks.",
  card: "When you are choosing between two homes, buying a plot or reviewing a property.",
  icon: "page-property-and-land",
  group: "homes",
  covers: [
    "Choosing between two homes",
    "Buying a plot",
    "Plot shape, slope and road",
    "Soil and earlier use",
    "Timing a purchase or move",
    "Building in phases",
    "Rented homes, no demolition",
  ],
  art: { kind: "plan", variant: "site" },
  enquiryTopic: "Vastulogy: choosing a property or plot",
  cta: "Enquire about a property or plot review",
  intro: [
    {
      type: "p",
      text: "People usually ask about Vastulogy at the moment a choice is hardest to undo. They have two flats at nearly the same price, one facing east and one south, or a corner plot that suits the budget, or a builder’s brochure whose north arrow points somewhere unexpected.",
    },
    {
      type: "p",
      text: "Narayani reads a property against the people who would live in it. Where the household’s routine fits the plan, direction need not become the deciding point, and where two options are otherwise equal, a reading gives you a second lens on them. It does not tell you to buy, wait or avoid.",
    },
  ],
  sections: [
    {
      id: "who-for",
      chip: "Who it is for",
      heading: "Four kinds of property question",
      icon: "gen-four-areas",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Buyers",
              text: "A review puts two homes, or a plot and a flat, through the same questions side by side, and the comparison then rests on the plans, whatever first impression each one made.",
              icon: "gen-buyer",
            },
            {
              term: "Sellers",
              text: "The same reading shows how the home may look to a buyer who follows Vastulogy, and which of the questions they ask have a simple answer.",
              icon: "astro-property-sell",
            },
            {
              term: "Investors",
              text: "Some tenants and buyers will ask about Vastulogy, so a reading shows what they may notice. It is not a valuation, and it says nothing about price or return.",
              icon: "gen-investor",
            },
            {
              term: "Owners",
              text: "You may be deciding whether to build on a plot, extend, or change how a home is used. A reading looks at the plan as it stands and at what you want to add.",
              icon: "gen-homeowner",
            },
          ],
        },
      ],
    },
    {
      id: "two-homes",
      chip: "Two homes",
      heading: "Choosing between two homes that both look good",
      icon: "astro-stream-choice",
      blocks: [
        {
          type: "p",
          text: "When two homes both look right, put the same questions to each: where north falls, and how the entrance, kitchen, prayer corner, bedrooms and toilets sit against it; what the building settles and what you could rearrange after moving in; which differences would cost real money and which only an afternoon.",
        },
        {
          type: "p",
          text: "For illustration, take two three-bedroom flats at similar prices. The first has an east-facing door and a kitchen in the south-east, but a toilet in the north-east. The second faces south, with the kitchen in the north-west and every toilet in the north-west or north. Against the guides, the first has one marked defect, and the second has a door that the guides disagree about. Neither result says which family should buy which. The reading sets out these differences, then asks how each household lives: who cooks, who needs a quiet room for study, and what could be rearranged once you are in.",
        },
        {
          type: "p",
          text: "Before any of this, check the project’s registration and disclosures under RERA, the Real Estate (Regulation and Development) Act, 2016, which requires larger residential projects to register and their promoters to publish project details. Ask your lawyer what applies to your purchase. Once you have chosen, the page on corrections without demolition covers what can be done inside.",
        },
      ],
    },
    {
      id: "plot-features",
      chip: "Plot and surroundings",
      heading: "Plot shape, slope, road and surroundings",
      icon: "re-plot-selection",
      blocks: [
        {
          type: "p",
          text: "Plot features come from two layers: the old texts, and the modern guides that followed them, which do not always agree. If you are buying a plot, this is the part to read twice, because it is the part you cannot easily change afterwards. The last column rests on engineering and ordinary sense.",
        },
        {
          type: "table",
          head: ["Feature", "What tradition and guides say", "What is practical"],
          rows: [
            [
              "Shape",
              "Modern guides prefer a square or a rectangle up to twice as long as it is wide, and avoid triangles, circles and ovals. A plot narrow at the front, a *gaumukhi*, is accepted for homes, and an extension at the north-east is called good. The Brihat Samhita calls irregular ground unfavourable.",
              "A regular plot is simpler to design and build on. For an irregular one, a surveyor can confirm the boundaries and an architect can show how much of it is usable.",
            ],
            [
              "Slope",
              "The Brihat Samhita prefers ground at one level all round, and says that if a difference cannot be avoided it should lie on the east or north side. It counts a raised side poor in each direction, so modern guides that want the south and west higher run against it.",
              "Slope decides where rainwater runs and where a basement or septic tank is safe. An engineer’s survey settles that, whichever guide you follow.",
            ],
            [
              "Road and surroundings",
              "Modern guides like roads on several sides, or at least on the north or east, and mark down a T-junction that ends at the plot, a *veethishool*. The old text cautions against a door facing a road, tree, well or pillar unless it is far off.",
              "A T-junction also brings headlights and traffic noise into the front rooms, and a narrow access road matters to fire engines and goods vehicles.",
            ],
            [
              "Soil and earlier use",
              "The old text describes pit, water and lamp tests of the ground, and modern practitioners use pit, drainage and sprouting tests.",
              "Engineers use a geotechnical investigation to learn what the ground can carry. What the land was before, a field, a tank, filled ground or an industrial site, is a question for land records, the local authority and an engineer.",
            ],
          ],
          icons: ["re-gate-boundary", "re-land-reading", "re-road-alignment", "re-soil-history"],
        },
        {
          type: "p",
          text: "No part of this table is an instruction. A plot is bought for its price, its location, its papers and its soil as much as for its shape, and a reading is one more input.",
        },
      ],
    },
    {
      id: "timing",
      chip: "Timing",
      heading: "Timing: when to buy, sign or move",
      icon: "astro-muhurta",
      blocks: [
        {
          type: "p",
          text: "Tradition sets a fitting hour, a *muhurta*, for starting to build and for entering the finished home, and some families ask for one for signing or moving as well. It is usually chosen with a priest or a reader of the chart, from the *panchang*, the Hindu almanac, and sometimes the owner’s birth star. No test of its effect was found, and it is separate from approvals, loan dates and school terms.",
        },
        {
          type: "p",
          text: "Timing is separate from assessing the property. Property and big decisions covers the chart-based perspective; dashas and transits explains the traditional calendar. Neither supplies a reason to sign unchecked papers. Your loan conditions, legal review and family schedule take priority over a suggested date.",
        },
      ],
    },
    {
      id: "phased-build",
      chip: "Building in phases",
      heading: "Planning Vastulogy in phases when you build",
      icon: "re-phased-build",
      blocks: [
        {
          type: "p",
          text: "For a new build, the advice follows the order of the work and covers the plot, the plan, the timing and the rites, read through Vastulogy. Each step has its own Vastulogy question, and the plan is easiest to shape before any of it is built.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Read the plot",
              text: "Mark north on the plot plan, and set out its shape, slope, road and what stands opposite the entrance. If the ground is in doubt, an engineer’s soil investigation comes before any Vastulogy question.",
              icon: "re-overlay",
            },
            {
              title: "Settle the plan",
              text: "Place the entrance, staircase, kitchen, toilets, water tank and borewell on the drawing before the foundation is laid. These are the hardest things to move once the concrete is poured, so they are the ones to settle first.",
              icon: "re-floor-directions",
            },
            {
              title: "Choose the hour",
              text: "If you want one, a priest or a reader of the chart sets a date for the ground worship and for starting work. Weigh it as one consideration beside the contractor’s schedule and the approvals.",
              icon: "gen-calendar",
            },
            {
              title: "Bhoomi Pujan and the first stone",
              text: "A priest leads the ground worship, and one modern practitioner has the owner dig first at the north-east. The old text’s own corner for the first stone is an open question, since English translations name the north-east while one printed Sanskrit edition appears to name the south-east. Until a Sanskrit scholar has settled it, regard the corner as a custom.",
              icon: "re-foundation-stone",
            },
            {
              title: "Build in stages",
              text: "Check each stage against the plan: the plinth, the structure, the plumbing runs and the water points. Your architect and engineer decide anything structural.",
              icon: "re-builder",
            },
            {
              title: "Griha Pravesh",
              text: "The house-warming is held at an hour chosen with a priest, and in some families it includes a *Vastulogy Shanti*, a rite of worship for the home. Both are family customs, and the family decides whether to keep them.",
              icon: "astro-remedy-worship",
            },
          ],
        },
      ],
    },
    {
      id: "limits",
      chip: "Limits",
      heading: "What a reading does not do",
      icon: "gen-limits",
      blocks: [
        {
          type: "p",
          text: "A reading covers how a property reads against the compass and the household. Papers, approvals, price, loans and resale sit outside it, and so does any promise about luck, rent or return.",
        },
        {
          type: "note",
          text: "This is not legal, title or financial advice. Have documents and approvals checked by a lawyer, the price by a valuer, and structural questions by an engineer.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she weighs when you compare properties",
    icon: "gen-listen",
    items: [
      { icon: "room-main-entrance", text: "Where the entrance, kitchen, stairs and water points fall against the compass" },
      { icon: "room-boundary-gate", text: "The plot’s shape, slope and road, and what stands opposite the entrance" },
      { icon: "re-non-demolition", text: "Which differences between two options are structural, and which can be rearranged" },
      { icon: "brain-habit", text: "How each property fits the household’s routine, and what each person needs from it" },
      { icon: "gen-time", text: "The date you have to decide by, and whether a question about timing is worth asking" },
    ],
  },
  bring: {
    heading: "What to send for a property review",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-plan", text: "The floor plan with north marked, or the builder’s layout for the flat you are considering" },
      { icon: "astro-birth-place", text: "The address or city, and the road the property faces" },
      { icon: "gen-bring-photo", text: "A few photographs of the plot or property, and of the road outside" },
      { icon: "astro-signing", text: "Your decision date, and any other option you are weighing" },
      { icon: "gen-explain", text: "What matters most to you: budget, schools, a parent’s comfort, a business" },
    ],
  },
  suits: {
    icon: "gen-no-pressure",
    yes: [
      "you are comparing two homes or plots and want another angle on them",
      "you will live in the property and want to know what you could rearrange",
      "you are planning a build and want the layout settled before the foundation",
    ],
    no: [
      "you want a buy, wait or avoid verdict",
      "you need an opinion on a title, a loan, a valuation or a price (please start with a lawyer or a valuer)",
      "you hope for a promise about resale, rent or luck",
    ],
  },
  faqs: [
    {
      q: "Can Vastulogy corrections be made in a rented home?",
      a: "Some, within limits, and the limits come from the building and the lease. Keep each change reversible so you can leave the flat as you found it, and read the lease before you paint, drill or replace a fitting. The page on Vastulogy for your home lists what a flat lets you rearrange. A fault that would need building work stays as it is, which is a good reason to read the plan before you sign the lease.",
    },
    {
      q: "What should I check before buying a plot or a home?",
      a: "Start with the papers, which a lawyer should check: the title, the approvals and, for a larger project, its RERA registration and the promoter’s published details. Ask an engineer about soil and drainage. Then weigh the household’s needs: the commute, the schools, the light, the noise and the budget. A Vastulogy reading comes after those checks, as a further comparison, and it replaces none of them.",
    },
    {
      q: "Can a property be reviewed before I commit?",
      a: "Yes, and before you commit is the best time. In the session Narayani sets out how each property reads against the compass and your household, which differences are structural and which can be rearranged, and what to ask the seller or the builder. The team confirms how the session will be held before you book.",
    },
    {
      q: "Can you tell me whether to buy?",
      a: "No. A reading is decision support, and you make the decision. Narayani can say how a property reads in Vastulogy and what it would ask of your household. Whether to buy depends on the price, the papers, your finances and your family, none of which a compass can judge. If one option has a feature that worries you, she will say how seriously tradition counts it and what could be done without building work.",
    },
    {
      q: "The seller says the property is Vastulogy compliant. Should I rely on that?",
      a: "Ask what the claim rests on, as you would for any other. Ask which guide it complies with and which plan was used, since guides disagree with each other and a brochure’s north arrow may show plan north, which differs from true north. Ask for the plan, take a compass reading on site, and have it read against the household that will live there. A reading can show what the claim means in practice.",
    },
    {
      q: "A property I like has a defect. Should I walk away?",
      a: "Not on that ground alone. A defect is a mismatch with a guide’s list, and the lists disagree. Ask what the defect is, whether it could be rearranged or would need building work, and what else the property offers. If it would trouble your family every day, that is a reason to think again. If it only troubles a list, it may not matter.",
    },
    {
      q: "I have only a layout or a map, not the property. Can it still be read?",
      a: "Yes. A reading works from a plan with north marked, so an early layout, a builder’s brochure or a plot survey can be read before you visit. A visit still matters for what a plan cannot show: the road, the neighbours, the light and the sound. Take a compass reading when you go, and compare it with the plan’s arrow.",
    },
    {
      q: "I have already bought. Is a review still useful?",
      a: "Yes. A review of a home you already own looks at what can be rearranged and at the questions you have about the layout. Many choices were sensible when made, and a purchase is never a Vastulogy verdict. Where the plan is still open, such as an extension or an unbuilt floor, the reading can feed into it.",
    },
    {
      q: "Does Vastulogy apply to land I am buying only as an investment?",
      a: "Vastulogy is about how a space is used, so for land you will never occupy, a reading says little beyond how the plot would read to a future owner who follows the tradition. It does not predict price or return, and it is not financial advice. For an investment the questions that matter are the papers, the location and the market, and a lawyer and a valuer answer them.",
    },
  ],
  related: [
    "/services/vastu/home/",
    "/services/vastu/real-estate-and-developers/",
    "/services/astrology/property-and-big-decisions/",
    "/services/vastu/vastu-remedies/",
  ],
  showFees: true,
};
