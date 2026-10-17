import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "",
  title: "Vastulogy",
  metaTitle: "Vastulogy for homes, workplaces and plots",
  metaDescription: "Vastulogy for homes, shops, offices and plots: direction, the five elements and layout, read with the people who use the space, and with honest limits.",
  lead: "A home should work for the people living in it. Explore its layout through Vastulogy, with practical limits, clear reasoning and no fear of getting a direction wrong.",
  card: "When you build, buy, move into or live in a space and want to understand its layout.",
  icon: "hub-vastu",
  group: "",
  covers: [
    "Direction, elements and layout",
    "Homes, flats and rented spaces",
    "Offices, shops and clinics",
    "Plots, builders and developers",
    "Corrections without demolition",
    "What the evidence shows",
    "Vastulogy read beside your chart",
  ],
  art: { kind: "drawing", id: "hero-vastu" },
  enquiryTopic: "Vastulogy",
  cta: "Enquire about Vastulogy",
  indexHeading: "Find guidance for your space",
  intro: [
    {
      type: "p",
      text: "Vastulogy, or Vastulogy Shastra, is the traditional Indian body of teaching on how to site and arrange a dwelling. It reads a building and its plot together, through eight directions, a centre and five elements: earth, water, fire, air and space. Many families follow it for cultural and devotional reasons, and many ask about it when they build, buy or move.",
    },
    {
      type: "p",
      text: "Narayani brings it to a home, a shop, an office or a plot as a conversation about the people who use the space. Who sleeps where, who cooks, where the work gets done and what already feels awkward in the day all come before any compass reading.",
    },
    {
      type: "p",
      text: "She is open about the limits from the start. Vastulogy is a tradition that many families keep, and the evidence section below sets out how far the research goes. What to change, if anything, is your decision.",
    },
  ],
  sections: [
    {
      id: "what-it-is",
      chip: "What it is",
      heading: "What Vastulogy is and where it comes from",
      icon: "brain-origin",
      blocks: [
        {
          type: "p",
          text: "*Vastulogy* means a dwelling together with its plot. *Vastulogy Shastra* is the body of Sanskrit building texts that grew up around it, covering how to judge ground, place doors and rooms, and begin work at a fitting hour. Among the earliest datable texts with chapters on houses and town planning are the Arthashastra, placed between the 2nd century BCE and the 3rd century CE, and the Brihat Samhita of the 6th century CE. Later works such as the Mayamata, the Manasara and the Samarangana Sutradhara run to dozens of chapters each, and scholars date them anywhere from about the 5th to the 13th century.",
        },
        {
          type: "p",
          text: "Where it began is argued. Some trace it to the ritual architecture of the Vedas, while one scholar holds that the Atharvaveda verses often cited as its source give cosmic imagery and describe no developed building practice. There are regional schools too, a northern one, a southern one and Kerala’s own house-building tradition, and the sources do not always agree. So “what Vastulogy says” is rarely one thing, and she asks which source, which school and which household.",
        },
      ],
    },
    {
      id: "her-approach",
      chip: "Her approach",
      heading: "Why she starts with the people in the space",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "She begins with the household: how the day runs, who is most affected by the way the rooms are arranged, and what has already been tried. A list of faults comes later, if at all, and direction comes in as one way of looking at what you tell her.",
        },
        {
          type: "p",
          text: "The mind of the person living in the space comes first for her. What worries you, what you have been told about the house and what you would like to be different shape the conversation before any plan is read. Nothing in a reading is framed as a warning about what a skipped rule might bring. She asks whether any change is needed at all, then what can be done without demolition, and where a change is worth making she says why.",
        },
      ],
    },
    {
      id: "ideas",
      chip: "The ideas",
      heading: "The ideas Vastulogy is built from",
      icon: "brain-belief",
      blocks: [
        {
          type: "p",
          text: "Six ideas carry most of what Vastulogy says.",
        },
        {
          type: "table",
          head: ["Idea", "What it means in Vastulogy"],
          rows: [
            ["Direction", "Eight compass directions, each linked in tradition with a guardian and with certain uses."],
            ["The five elements", "Earth, water, fire, air and space, which modern guides map onto parts of a plot and a house."],
            ["The centre", "Brahmasthan, the middle of a building, which guides keep open and uncluttered."],
            ["Layout and use", "Which room sits where, and how the people in it live from morning to night."],
            ["The site", "The shape, slope, road and soil of a plot, and what stands around it."],
            ["Timing", "The hour for starting work on a site or entering a new home, set with a priest or from a chart."],
          ],
          icons: ["dir-east", "element-earth", "dir-centre", "room-living-room", "re-soil-history", "astro-muhurta"],
        },
        {
          type: "p",
          text: "The mandala is a ritual grid discussed in Vastulogy writing. Its historical role in planning is debated rather than settled. Directions and elements is the place to explore its layout and the different scholarly views; an ordinary home need not be treated as a literal copy of that diagram.",
        },
      ],
    },
    {
      id: "evidence",
      chip: "The evidence",
      heading: "What the evidence does and does not show",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "Vastulogy is a documented tradition of texts and practice. A search of the published research turned up no independent, controlled study showing that its directions change health, money, sleep or relationships, and you should hear that at the start.",
        },
        {
          type: "table",
          head: ["The claim", "Where it stands"],
          rows: [
            ["Vastulogy as a body of old building texts and temple practice", "Documented, though dates and origins are debated."],
            [
              "Any direction affecting health, money, sleep or relationships",
              "No independent, controlled study showing this was found. A few small studies of Vastulogy rules exist, and they are limited.",
            ],
            [
              "Daylight, fresh air and comfort shape how people feel in a space",
              "Supported by small studies of offices and homes. This is separate from direction, and you can work on it directly.",
            ],
            ["The mandala as a tool for laying out buildings", "Contested among scholars."],
            [
              "Ground-worship and a chosen hour for starting work (Bhoomi Pujan, muhurta)",
              "A long-standing custom. No test of what it does was found, and it sits apart from approvals and safety.",
            ],
            [
              "Mirrors, salt, pyramids, yantras and similar objects as corrections",
              "These rest on belief, with no test behind them. No health, sleep or money result should be attached to them.",
            ],
          ],
        },
        {
          type: "p",
          text: "Those small studies test comfort or creativity, among them a computer simulation of door directions in a warm climate and a comfort study of five Vastulogy-designed homes in Dubai. None is both independent and controlled, and comfort results depend on climate.",
        },
        {
          type: "p",
          text: "Narayani offers Vastulogy as a tradition that many families follow. When the cause of a difficulty looks practical, she says so: a damp wall is a job for a builder, and poor sleep or a health worry is a matter for a doctor.",
        },
      ],
    },
    {
      id: "where-to-start",
      chip: "Find your page",
      heading: "Find the page that matches your space",
      icon: "astro-stream-choice",
      blocks: [
        {
          type: "p",
          text: "Questions come from homeowners, tenants and buyers, from owners of shops, offices and clinics, and from builders, architects and developers. Each situation below leads to a page of its own.",
        },
        {
          type: "terms",
          items: [
            {
              term: "You want the compass and the elements first",
              text: "Directions and the five elements covers the compass, the centre, the sixteen zones and how to find north.",
              icon: "gen-explain",
            },
            {
              term: "You live in a home or a flat",
              text: "Vastulogy for your home goes room by room, and is plain about what a flat lets you change.",
              icon: "room-main-entrance",
            },
            {
              term: "Two homes to compare, or a plot to buy",
              text: "Choosing a property or a plot covers shape, slope, road and timing, and what a review needs from you.",
              icon: "re-plot-selection",
            },
            {
              term: "You run an office, a shop or a clinic",
              text: "The page on offices and shops looks at a working space through the people who sit, serve and visit there.",
              icon: "work-retail-shop",
            },
            {
              term: "You build, design or develop",
              text: "The page on real estate and developers follows a project from choosing a site to phasing the work.",
              icon: "re-builder",
            },
            {
              term: "Your space is a factory, hotel, school, hospital, temple or farm",
              text: "Read the special spaces page for those, along with landscape and other uses.",
              icon: "space-agricultural",
            },
            {
              term: "You want your space read beside your chart",
              text: "Astro-Vastulogy explains how some practitioners pair directions with planets, and what that pairing does and does not rest on.",
              icon: "group-chart",
            },
            {
              term: "You cannot rebuild and want to know what can be changed",
              text: "The page on corrections without demolition gives what tradition suggests, with a plain account of what each is worth.",
              icon: "re-non-demolition",
            },
            {
              term: "You want a quiet, guided session for a space and the people in it",
              text: "Energy balancing describes that session, and what it is and is not.",
              icon: "gen-no-pressure",
            },
            {
              term: "You are in a long build, or want support over several months",
              text: "Ongoing guidance covers support through a whole project, in place of a single visit.",
              icon: "re-phased-build",
            },
          ],
        },
      ],
    },
    {
      id: "consultation",
      chip: "A consultation",
      heading: "How a Vastulogy consultation works",
      icon: "gen-session-person",
      blocks: [
        {
          type: "p",
          text: "Sessions are by appointment, online or in person. Write by WhatsApp, phone or email with your plan and a line about what you want looked at, and the team replies with how and when it can be held. The amount is confirmed before anything is booked.",
        },
        {
          type: "p",
          text: "Which session suits depends on the question. One room, or one choice such as which way a desk should face, fits a short session. A whole home, a building of several floors, or two properties to compare, fits a longer one. The team helps you decide, and the fees block on this page shows each option.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What a Vastulogy reading looks at",
    icon: "gen-listen",
    items: [
      { icon: "re-floor-directions", text: "The layout floor by floor: where rooms, doors and stairs sit, and where north falls" },
      { icon: "brain-habit", text: "Who uses the space, at what hour, and the routine that runs through the day" },
      { icon: "room-lighting", text: "Where the sun falls, which windows open, and where the air sits still" },
      { icon: "rem-furniture", text: "Where things belong: what the building decides, and what can be rearranged without touching a wall" },
      { icon: "space-spiritual", text: "The customs your family already keeps, so nothing is asked that does not fit them" },
    ],
  },
  bring: {
    heading: "What to gather before a Vastulogy session",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-plan", text: "A floor plan with north marked, or a simple sketch with room sizes if you have no plan" },
      { icon: "gen-bring-photo", text: "The address or city, and a few photographs of each room, the entrance and the road outside" },
      { icon: "astro-family", text: "The people who use the space, and the one thing you would most like to be different" },
      { icon: "gen-calendar", text: "Any date that matters, such as a purchase, a move or the start of work" },
    ],
  },
  faqs: [
    {
      q: "What is Vastulogy?",
      a: "Vastulogy is a tradition about where things belong in a building, and why: the door, the kitchen, the prayer corner, the beds and the water. Its answers come from old Sanskrit texts and from the guides written after them, and families follow it for cultural and devotional reasons as well as practical ones. Narayani offers it as a tradition and states its limits.",
    },
    {
      q: "Is Vastulogy scientific?",
      a: "Not in the laboratory sense. A search of the published research found no independent, controlled study showing that any direction affects health, money, sleep or relationships, and the evidence section above lists the few small studies that exist. What research does support is plainer: good daylight, fresh air and comfort make a space easier to live in. Narayani works with the tradition and with those practical points, and keeps the two apart.",
    },
    {
      q: "Is Vastulogy the same for everyone, or does it depend on the people living there?",
      a: "The texts speak in general terms, but a household is particular. Two families in identical flats may use the same room differently: one cooks for ten, the other orders in. Narayani reads the space against the people in it, so the same rule can carry different weight in different homes. Where guides disagree with each other, she says so and explains what she would weigh.",
    },
    {
      q: "How is Vastulogy different from feng shui?",
      a: "Both link directions and elements to buildings, but they come from different traditions. Vastulogy is Indian and works with eight directions, a centre and five elements: earth, water, fire, air and space. Feng shui is Chinese. It works with *qi*, a word for breath or vital force, a map called the bagua, several compass schools and a different set of five elements: wood, fire, earth, metal and water. No independent, controlled research is known to back the directional claims of either.",
    },
    {
      q: "Do I have to demolish or rebuild anything?",
      a: "A reading does not oblige you to demolish anything. Furniture, storage and lighting can be considered without changing the structure. Practitioners disagree about whether such adjustments satisfy their traditional rules, but disagreement is no reason to frighten you into building work. Engineering requirements, permissions and affordability decide what is feasible. The corrections without demolition page separates these choices.",
    },
    {
      q: "Does Vastulogy apply in a flat or a rented home?",
      a: "A flat can be discussed without pretending its fixed features are yours to change. Its location in the block, entrance and pipework constrain the options. Within those limits you can consider movable furniture and daily use. Tenants also need to respect the lease and obtain any necessary permission. The home Vastulogy guide distinguishes rearrangements from alterations to the building.",
    },
    {
      q: "Can Vastulogy be read together with my chart?",
      a: "Some practitioners pair each direction with a planet and compare the result with the owner’s birth chart, a method often called Astro-Vastulogy. The pairings differ from one scheme to another, and no test of them is known. If you ask for it, Narayani can read a space beside your chart or your numbers, as one more way to think about your question and never as a forecast.",
    },
    {
      q: "Can a Vastulogy session be held online, for a home abroad?",
      a: "Yes. A plan with north marked and photographs of each room and the entrance carry most of what a Vastulogy reading needs, so a home in another country can be read online. A visit in person is by appointment, and the team confirms whether it is possible for your address.",
    },
    {
      q: "Who gives the guidance?",
      a: "Narayani Garg looks at homes and workplaces, and where they help the question she brings Vastulogy together with numerology, astrology and Brain Training, her mind-first work. She asks about the people before the plan and explains her reasoning, so you can decide what to keep. The team takes the enquiries and confirms the practical details.",
    },
    {
      q: "Do I have to believe in Vastulogy before I ask?",
      a: "No. Some people follow it closely, some are curious, and some are asking because a relative insisted. Narayani explains what the tradition says, where its sources differ and what the evidence is, and you decide what to keep. If you would rather not follow a rule, that is a legitimate answer, and she will not press you.",
    },
  ],
  related: ["/services/vastu/home/", "/services/vastu/office-and-shop/", "/services/vastu/directions-and-elements/"],
  showFees: true,
};
