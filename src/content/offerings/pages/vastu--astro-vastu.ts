import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "astro-vastu",
  title: "Astro-Vastulogy, with your chart beside your space",
  metaTitle: "Astro-Vastulogy: chart and space together",
  metaDescription:
    "How Narayani reads a home or workplace beside your birth chart: lagna, Moon, dasha, two direction schemes, and changes that need no building work.",
  lead: "Consider your space alongside your birth chart. Astro-Vastulogy combines two interpretive traditions; its recommendations remain choices to assess, not proven requirements for wellbeing.",
  card: "When you want a home or workplace read beside your own chart, with no building work.",
  icon: "page-astro-vastu",
  group: "chart-space",
  covers: [
    "Chart and space read together",
    "Direction and planet schemes",
    "Rooms and seats for one person",
    "Changes with no building work",
    "House numbers beside directions",
    "A personal order of work",
    "Rented flats and shared homes",
  ],
  art: { kind: "plan", variant: "astro" },
  enquiryTopic: "Vastulogy: Astro-Vastulogy",
  cta: "Enquire about an Astro-Vastulogy reading",
  intro: [
    {
      type: "p",
      text: "Vastulogy reads a building through its directions, its elements and its layout. Jyotish, the Indian tradition of reading a birth chart, reads a person through the sky at their birth. Astro-Vastulogy sets the two side by side: the plan of the space, and the chart of whoever sleeps, works or prays in it.",
    },
    {
      type: "p",
      text: "Planets and directions were paired by later practitioners, and the lists they use do not agree. So Narayani’s starting point is the question you bring, and the chart only helps her choose where to look first. She says every direction belongs to God, and that it all depends on the mind. A reading ends with something you can try, most often a new way of using a room, and no wall is touched.",
    },
  ],
  sections: [
    {
      id: "adds",
      chip: "What it adds",
      heading: "What the chart adds to an ordinary Vastulogy reading",
      icon: "astro-yoga",
      blocks: [
        {
          type: "p",
          text: "Ordinary Vastulogy puts the same questions to every building: where the entrance is, which way the plot faces, where the kitchen, the prayer corner and the toilet sit. The answers come from directions, elements and layout, and they stay the same whoever lives inside.",
        },
        {
          type: "p",
          text: "Astro-Vastulogy adds the person. Take a couple who share a bedroom. The bed has one position and so one head direction, while their two charts may point to two different directions. The chart cannot settle that. The room can: who rises first, who works late, which side holds the cupboard, which wall takes the morning light. What the chart contributes is a suggestion about which of those matters to raise first.",
        },
        {
          type: "p",
          text: "The two subjects have met before. The Brihat Samhita, a sixth-century Indian encyclopedia that covers both Jyotish and house building, ties the start of construction to an hour chosen by a Jyotish practitioner. Pairing each compass direction with a planet, for use on a building, is a later practice, and none of the classical building texts we could open does it.",
        },
      ],
    },
    {
      id: "schemes",
      chip: "Two schemes",
      heading: "Two schemes that link planets with directions",
      icon: "astro-direction-lords",
      blocks: [
        {
          type: "p",
          text: "Two schemes for pairing planets with directions are in use, and they disagree. The direction-lord scheme gives each of the eight directions a ruling planet, much as tradition already gives each a guardian, called a *dikpala*. The other is *digbala*, one of the classical measures of a planet’s strength in a chart: it names the direction in which a planet is strongest. Using digbala on a building is a further step.",
        },
        {
          type: "table",
          head: ["Direction", "Direction-lord scheme", "Digbala"],
          rows: [
            ["North", "Mercury", "Moon and Venus"],
            ["North-east", "Jupiter", "Not assigned"],
            ["East", "Sun", "Jupiter and Mercury"],
            ["South-east", "Venus", "Not assigned"],
            ["South", "Mars", "Sun and Mars"],
            ["South-west", "Rahu (one source adds Ketu)", "Not assigned"],
            ["West", "Saturn", "Saturn"],
            ["North-west", "Moon", "Not assigned"],
          ],
          icons: ["dir-north", "dir-northeast", "dir-east", "dir-southeast", "dir-south", "dir-southwest", "dir-west", "dir-northwest"],
          caption: "From practitioner lists. Other lists differ.",
        },
        {
          type: "p",
          text: "Read across the table, the schemes agree on two pairings only: Saturn with the west and Mars with the south. The Moon shows how far apart they can be. The direction-lord scheme puts it in the north-west, and digbala puts it in the north, beside Venus. Mercury sits in the north in one scheme and in the east in the other.",
        },
        {
          type: "note",
          text: "We found no test of either pairing. Narayani takes them as part of a belief system, and uses them to prompt questions about a room.",
        },
      ],
    },
    {
      id: "chart",
      chip: "Your chart",
      heading: "The parts of a chart that are read against the plan",
      icon: "group-chart",
      blocks: [
        {
          type: "p",
          text: "Three parts of a chart come into the reading, followed by the directions the schemes attach to them. Each prompts a question about the space, and none is a rule for your home.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Lagna",
              text: "The zodiac sign that was rising where and when you were born, which also makes it the first house of the chart. Jyotish reads that house as the self, so the reading sets it against the plan first. A new sign rises about every two hours, which is why a doubtful birth time matters most here. The birth chart page explains it in full.",
              icon: "astro-lagna",
            },
            {
              term: "Moon sign and nakshatra",
              text: "Jyotish links the Moon with the mind and the feelings, so the Moon sign, and the nakshatra or lunar star the Moon was passing at your birth, come first when the question is about a place of rest, prayer or thought. If your birth time is a little out, these two hold up better than the lagna.",
              icon: "graha-moon",
            },
            {
              term: "The dasha running now",
              text: "A dasha is one of the planetary periods Jyotish counts through a life, and you are in one now. It names a planet, which gives the reading one more direction to ask about. The astrology pages explain how the periods are worked out. Here the period is a prompt, and no forecast is drawn from it.",
              icon: "astro-mahadasha",
            },
            {
              term: "Directions linked with you",
              text: "Once the chart gives a planet, each scheme gives that planet a direction, and practitioners call it favourable for you. Narayani takes it as a candidate only, a direction to look at when she asks where you sit, sleep and pray. The two schemes seldom give the same answer.",
              icon: "astro-remedy-direction",
            },
          ],
        },
        {
          type: "p",
          text: "A worked example shows the use and the limit. Take a Cancer lagna. Cancer is ruled by the Moon, so the Moon is the chart’s ruling planet. The direction-lord scheme gives the Moon the north-west, so the north-west of the home is one place to look. Digbala makes the Moon strongest in the north, so the north wall is another. Two schemes give one person two directions, and Narayani therefore offers no single answer. She asks what stands in each place, how it is used, and whether the household is content with it.",
        },
      ],
    },
    {
      id: "one-concern",
      chip: "One concern",
      heading: "One concern, worked through without building or breaking",
      icon: "group-decisions",
      blocks: [
        {
          type: "p",
          text: "People usually arrive with one concern rather than a floor plan: a desk where nothing gets finished after lunch, a shop counter that feels awkward, a bedroom nobody likes to use. A reading can stay with that concern and change how the space is used, leaving its structure alone.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Say the concern in one sentence",
              text: "Describe what happens, such as “I cannot settle at my desk after lunch”. A plain sentence tells her which room, which seat and which hours to look at.",
              icon: "brain-words",
            },
            {
              title: "Lay the directions over the room",
              text: "The compass directions go over a sketch of the space, so the seat, the light, the door and the storage can be read against them.",
              icon: "re-overlay",
            },
            {
              title: "Ask what the chart says about the concern",
              text: "Jyotish links each kind of concern with a planet. Work with accounts and words goes with Mercury, for example, and the dasha running now may or may not be Mercury’s. Each scheme then gives that planet a direction to look at.",
              icon: "graha-mercury",
            },
            {
              title: "Choose one or two changes of use",
              text: "Turn the desk to face another way. Move it to another wall. Empty the corner behind it. Each costs nothing and can be put back. A direction-based suggestion is usually this small: the way you face when you work, pray or sit to think.",
              icon: "rem-furniture",
            },
            {
              title: "Decide how you will judge it",
              text: "Choose what you will observe and for how long, and agree beforehand what would send everything back to where it was.",
              icon: "habit-evidence",
            },
          ],
        },
        {
          type: "p",
          text: "Some concerns are not about the space at all. A lease dispute needs a lawyer, a leak a plumber and a gap in cash flow an accountant, and Narayani says so rather than offering a direction as the cause.",
        },
      ],
    },
    {
      id: "plan",
      chip: "Your plan",
      heading: "What a personal plan covers, in general terms",
      icon: "vastu-order-of-work",
      blocks: [
        {
          type: "p",
          text: "A personal plan is an order of work, agreed in conversation. It passes no verdict on your home and carries no score. In general terms it has five parts.",
        },
        {
          type: "list",
          items: [
            "The places you use most: your bed, your desk, the chair you eat from, the corner where you pray.",
            "Which scheme was used for each place, and where the schemes disagree.",
            "A short sequence of changes to try, first to last, each a change of use that needs no building.",
            "What to leave exactly as it is.",
            "When you will look at it again yourself, and what you will watch for.",
          ],
        },
        {
          type: "p",
          text: "Where a household can still choose who uses which room, such as which child has which bedroom or where the home office goes, the chart is one input among several, and noise, light, privacy and the walk to the bathroom weigh as much. A kitchen or a toilet cannot move, so those are read for how they are used.",
        },
      ],
    },
    {
      id: "numbers",
      chip: "Numbers",
      heading: "Where numerology meets direction",
      icon: "numc-house-number",
      blocks: [
        {
          type: "p",
          text: "A home carries numbers too. Numerology reads a house or flat number by adding its digits down to one, as the numerology pages on house and mobile numbers explain. Some practitioners join that to Vastulogy: each digit is tied to a planet, each planet to a direction, and so the number is said to point somewhere.",
        },
        {
          type: "p",
          text: "We found no test of the chain as a whole, and its second link is the one the table above shows to be disputed. Narayani gives no table of numbers and corners. She reads the house number on its own terms and the directions on theirs, and where the two seem to point at the same room she notes it as a question to ask.",
        },
      ],
    },
    {
      id: "limits",
      chip: "What is known",
      heading: "What is known about reading chart and space together",
      icon: "astro-limits",
      blocks: [
        {
          type: "p",
          text: "We found no test of Astro-Vastulogy as a system, and none of the planet-to-direction pairings in the table above. What is known about each half, Vastulogy and Jyotish, is set out on the Vastulogy and astrology pages, and this page claims nothing beyond it.",
        },
        {
          type: "p",
          text: "What can be said here is narrower. The light, air and comfort of a room change how well it works for the people in it, and a reading can attend to those. Nothing about money, health or relationships is promised.",
        },
        {
          type: "p",
          text: "Any proposed building alteration requires an engineer’s assessment and the relevant permissions, including housing-society approval where applicable. A chart cannot authorise construction or override those requirements.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she sets side by side in the reading",
    icon: "gen-listen",
    items: [
      { icon: "brain-thought", text: "The concern in your own words, and the room, seat or hour it belongs to" },
      { icon: "room-living-room", text: "How the space is used through the day, and which seats and corners you use" },
      { icon: "astro-birth-date", text: "Your lagna, Moon sign, nakshatra and running period, when you can give your birth details" },
      { icon: "astro-compatibility", text: "Where the direction schemes agree for you, and where they give different answers" },
      { icon: "re-non-demolition", text: "What can change by use alone, and what the building itself decides" },
    ],
  },
  bring: {
    heading: "Before an Astro-Vastulogy reading: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "astro-birth-time", text: "Your birth date, time and place: the lagna, Moon sign and running period are worked out from them" },
      { icon: "gen-couple", text: "Birth details for anyone else who sleeps or works in the room you want to discuss" },
      { icon: "gen-bring-plan", text: "A rough floor plan or hand sketch, with north marked if you know it" },
      { icon: "gen-tenant", text: "Whether you rent or own, and what a landlord or society allows you to change" },
    ],
  },
  faqs: [
    {
      q: "Is Astro-Vastulogy different from ordinary Vastulogy?",
      a: "Yes. The difference is the person. Ordinary Vastulogy gives one reading of a building. Astro-Vastulogy also takes in the chart of one resident, which is why a single flat can be read two ways for two people. The planet pairings are the part that is modern and disputed.",
    },
    {
      q: "Do I need my birth time?",
      a: "Yes, for anything that rests on the lagna. A new sign rises roughly every two hours, and the divisional charts turn over faster still. The Moon sign holds better, though the Moon crosses into another sign on about four days in ten, so a date alone cannot always pin it down. Tell her at the start if the time is a guess or unknown. She will mark which parts of the reading lose reliability, and the room can still be looked at.",
    },
    {
      q: "Can I do Astro-Vastulogy in a rented flat?",
      a: "You can discuss a rented flat, but the lease and building restrictions remain the starting point. The conversation may concern movable furniture, lighting or storage rather than entrances and plumbing. A chart does not expand your rights as a tenant. Obtain any required permission before drilling or fixing anything, and do not undertake structural changes on the strength of a reading.",
    },
    {
      q: "Which directions suit me, according to my date of birth or chart?",
      a: "No single list exists, because the two schemes disagree. A date alone gives little, since the lagna needs a time. With a full chart, tradition ties your planets to directions, and each scheme then names candidates. Narayani sets those candidates beside how each part of your space is used, and where you put a bed or a desk remains your call.",
    },
    {
      q: "Can Vastulogy support or weaken what my chart shows?",
      a: "A chart is set at the moment of birth, and no house changes it. Some practitioners go further and say a place can suit a person well or badly, so that a home supports or weakens what the chart describes. We know of no test of that idea, and Narayani makes no promise about it. A home does shape your day. A dim desk, a noisy bedroom or a cluttered entrance changes what is easy to do, and you can judge that for yourself.",
    },
    {
      q: "Can my birth number show where to sleep, work or meditate?",
      a: "Some practitioners say so. They add up the digits of a birth date until one is left, tie that digit to a planet, and the planet to a direction. This is the chain described above for house numbers, and it carries the same doubts. Narayani reads your numbers on their own terms and your space on its own, and she does not match digits to corners.",
    },
    {
      q: "Whose chart is used when several people share a home or workplace?",
      a: "A space has one plan and many charts, so the plan cannot follow all of them. Narayani asks whom the question is about and starts with that person’s own places: the bed, the desk, the owner’s seat. Shared rooms, such as the kitchen, the main door or the shop floor, are read by how people use them first and by charts afterwards. Where two people’s options conflict, she sets out both with their practical trade-offs and leaves the choice to you.",
    },
  ],
  related: [
    "/services/vastu/directions-and-elements/",
    "/services/astrology/birth-chart-reading/",
    "/services/vastu/vastu-remedies/",
    "/services/numerology/mobile-and-house-numbers/",
  ],
  showFees: true,
};
