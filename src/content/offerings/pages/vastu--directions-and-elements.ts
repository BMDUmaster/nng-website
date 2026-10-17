import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "directions-and-elements",
  title: "Directions and the five elements",
  metaTitle: "Vastulogy directions and the five elements",
  metaDescription: "Eight directions, the centre, sixteen zones and five elements in Vastulogy: what tradition links with each, where guides differ, and how to find north.",
  lead: "Find north on your plan, then understand the directions and five elements used in Vastulogy. Traditional associations vary; they are not rules that override a safe, usable home.",
  card: "When you want to know what each direction and element means, and how to find north.",
  icon: "page-directions-and-elements",
  group: "foundations",
  covers: [
    "The eight directions and centre",
    "The five elements",
    "The sixteen zones",
    "The mandala in brief",
    "Where the guides differ",
    "Sun, light and air",
    "How to find north",
  ],
  art: { kind: "plan", variant: "elements" },
  enquiryTopic: "Vastulogy: directions and elements",
  cta: "Enquire about a Vastulogy reading",
  intro: [
    {
      type: "p",
      text: "Vastulogy guides lean on two things: a compass and a list of five elements. Together they make the vocabulary the rest of the subject is written in, and once you know it, each room-by-room rule is easier to place and easier to question.",
    },
    {
      type: "p",
      text: "This page sets that vocabulary out plainly. It describes what the tradition says, and where its sources disagree the page says so.",
    },
    {
      type: "p",
      text: "Narayani begins from one short view: every direction belongs to God, and what a place does for a family rests on the minds living in it. That is why she uses the compass to ask questions about a home before she offers any conclusion.",
    },
  ],
  sections: [
    {
      id: "elements",
      chip: "Five elements",
      heading: "The five elements and what Vastulogy links with each",
      icon: "vastu-five-elements",
      blocks: [
        {
          type: "p",
          text: "The five great elements, *panchabhuta*, are an old Indian way of sorting experience: earth, water, fire, air and space. They run through Indian thought well beyond Vastulogy. Vastulogy guides map them onto the compass and onto the parts of a home.",
        },
        {
          type: "table",
          head: ["Element", "Commonly linked with", "Corner modern guides give it", "In a home, look at"],
          rows: [
            ["Earth (prithvi)", "Stability, weight and grounding", "South-west", "The mass of the building: walls, heavy furniture and storage"],
            ["Water (jal)", "Flow and clarity", "North-east", "The borewell, the sink, and anywhere water is stored or used"],
            ["Fire (agni)", "Warmth, light and change", "South-east", "The stove, lamps, electrical equipment and the heat of the sun"],
            ["Air (vayu)", "Movement and breath", "North-west", "Windows, doors and fans, and the way air passes through the home"],
            ["Space (akasha)", "Openness", "The centre", "The open middle of the home, kept uncluttered and without heavy fittings"],
          ],
          icons: ["element-earth", "element-water", "element-fire", "element-air", "element-space"],
        },
        {
          type: "p",
          text: "The corner placements in the third column come from modern guides that cite no early building text for them, and another writer discusses the elements without these pairings. The table therefore shows a common convention, and no single scheme is settled. Some guides add a rule of balance: fire and water are kept apart, and the centre, the element of space, is left open.",
        },
      ],
    },
    {
      id: "directions",
      chip: "Eight directions",
      heading: "The eight directions and the centre",
      icon: "vastu-dikpala",
      blocks: [
        {
          type: "p",
          text: "Each direction has a guardian, a *dikpala*, from the old texts. Modern guides add an element to the four corners and the centre, and a list of rooms that suit each side. The table gathers what guides commonly say about a home. It summarises a tradition and is no rulebook, and a later section shows where the guides differ.",
        },
        {
          type: "table",
          head: ["Direction", "Guardian", "Element in modern guides", "What guides commonly place there"],
          rows: [
            ["North", "Kubera", "None given", "Entrance, living room and water points"],
            ["North-east", "Ishana", "Water", "Prayer room, water source and living room; toilets avoided"],
            ["East", "Indra", "None given", "Entrance, a living room in one guide, and study desks facing east"],
            ["South-east", "Agni", "Fire", "Kitchen, with the cook facing east"],
            ["South", "Yama", "None given", "Staircase, and in some guides a bedroom"],
            ["South-west", "Nirriti", "Earth", "Master bedroom, overhead tank and storage; a staircase in some guides"],
            ["West", "Varuna", "None given", "Children’s room, study room, staircase and, in some guides, the overhead tank"],
            ["North-west", "Vayu", "Air", "Children’s room and toilet; a second choice for the kitchen"],
            ["Centre", "Brahma", "Space", "Kept open and uncluttered"],
          ],
          icons: ["dir-north", "dir-northeast", "dir-east", "dir-southeast", "dir-south", "dir-southwest", "dir-west", "dir-northwest", "dir-centre"],
        },
        {
          type: "p",
          text: "The north-east draws the most attention. It is the corner where the old text puts the prayer room and counts water as favourable. It is also where Vastulogy Purusha’s head lies in the mandala, and the corner from which most modern guides keep toilets out. That history explains the attention. How far research supports any direction is set out on the Vastulogy page.",
        },
      ],
    },
    {
      id: "zones",
      chip: "Sixteen zones",
      heading: "The sixteen zones, and how they are laid over a plan",
      icon: "vastu-sixteen-zones",
      blocks: [
        {
          type: "p",
          text: "Modern practitioners divide the compass into zones, called *vibhag*. Some use eight, each 45 degrees wide, and many use sixteen, each 22.5 degrees wide, with every zone centred on a compass point. To lay either scheme over a floor plan, the reader marks the middle of the plan, draws the compass from that point with north set correctly, and notes which zone each room falls in. The table turns a compass bearing into a sixteen-zone name.",
        },
        {
          type: "table",
          head: ["Bearing", "Zone", "Covers"],
          caption: "Degrees, measured clockwise from north, so that east is 90 and south is 180",
          rows: [
            ["0", "North", "348.75 to 11.25"],
            ["22.5", "North-north-east", "11.25 to 33.75"],
            ["45", "North-east", "33.75 to 56.25"],
            ["67.5", "East-north-east", "56.25 to 78.75"],
            ["90", "East", "78.75 to 101.25"],
            ["112.5", "East-south-east", "101.25 to 123.75"],
            ["135", "South-east", "123.75 to 146.25"],
            ["157.5", "South-south-east", "146.25 to 168.75"],
            ["180", "South", "168.75 to 191.25"],
            ["202.5", "South-south-west", "191.25 to 213.75"],
            ["225", "South-west", "213.75 to 236.25"],
            ["247.5", "West-south-west", "236.25 to 258.75"],
            ["270", "West", "258.75 to 281.25"],
            ["292.5", "West-north-west", "281.25 to 303.75"],
            ["315", "North-west", "303.75 to 326.25"],
            ["337.5", "North-north-west", "326.25 to 348.75"],
          ],
        },
        {
          type: "p",
          text: "In an eight-zone scheme the north-east, for example, runs from 22.5 to 67.5 degrees.",
        },
        {
          type: "p",
          text: "The sixteen-zone scheme has a thin history. No early building text is known to set it out, although some practitioners credit the Vishwakarma Prakash, a northern work with no secure date. The Brihat Samhita works from a grid with 32 boundary deities instead. Published sixteen-zone tables also disagree about rooms: one puts the kitchen in the south-east, another in the east-south-east and south-east.",
        },
      ],
    },
    {
      id: "mandala",
      chip: "The mandala",
      heading: "The Vastulogy Purusha Mandala in brief",
      icon: "vastu-mandala",
      blocks: [
        {
          type: "p",
          text: "The mandala is the best-known diagram in the subject. It begins with a story: a vast being, Vastulogy Purusha, was pinned face down by the gods, and the grid drawn over a site is his body.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Vastulogy Purusha",
              text: "The being in the story. In the Brihat Samhita he lies face down with his head in the north-east, and each god who holds him down has a place on his body.",
              icon: "vastu-purusha",
            },
            {
              term: "The grid",
              text: "A square divided into cells called *pada*. Grids of 64 and 81 cells are cited most often. The Manasara lists 32 grid types, from a single cell to 1,024. The Samarangana Sutradhara assigns 81 to houses and palaces, 100 to most temples and 64 to towns and camps, while other sources tie the 64 grid to temples.",
              icon: "numc-vedic",
            },
            {
              term: "The deities",
              text: "The Brihat Samhita’s 81-square plan places 45 deities: 32 hold the outer ring and 13 the inner part, with Brahma on the central nine squares. A 64-square version gives Brahma four. Some Puranic accounts add eight more outer figures, which makes 53.",
              icon: "space-spiritual",
            },
            {
              term: "Its use",
              text: "One scholar finds almost no textual evidence that mandalas were used to lay out buildings, and another reads the grid as a ritual and planning guide for temple building. For an ordinary home, its role is uncertain.",
              icon: "re-architect",
            },
          ],
        },
      ],
    },
    {
      id: "differ",
      chip: "Where guides differ",
      heading: "Where the guides disagree",
      icon: "vastu-guides-differ",
      blocks: [
        {
          type: "p",
          text: "Vastulogy has no single authority. Texts from different centuries and regions, and writers today, give different answers to the same question. These are the points a reader meets most often.",
        },
        {
          type: "table",
          head: ["Point", "One view", "Another view"],
          rows: [
            ["How many zones", "Eight sectors of 45 degrees each", "Sixteen sectors of 22.5 degrees each"],
            [
              "Elements at the corners",
              "Water in the north-east, fire in the south-east, earth in the south-west and air in the north-west",
              "Elements discussed without these pairings, with fire tied to the sunlit side and water to the north-east",
            ],
            [
              "Planets and directions",
              "A direction-lord scheme gives the north to Mercury and the east to the Sun",
              "A scheme from astrology texts, *digbala*, gives the east to Jupiter and Mercury and the north to the Moon and Venus",
            ],
            ["The kitchen", "South-east, in the Brihat Samhita and most guides", "East-south-east and south-east, in one sixteen-zone table"],
            ["The toilet", "North-west or north, never north-east", "North-north-west or west-north-west, or between south-west and south"],
            [
              "Which north",
              "The old texts find direction with a shadow-casting rod, the *shanku*",
              "Modern readers use a magnetic compass, and it is not always stated whether magnetic or true north is meant",
            ],
          ],
        },
        {
          type: "p",
          text: "Where two guides disagree about your room, no test is known that settles it between them. A sensible course is to ask which source each one cites, weigh the answer against how your household lives, and hold the rule as one reading of a tradition. It is also why Narayani asks what suits the people who use a room first, and gives the tradition’s suggestion after.",
        },
      ],
    },
    {
      id: "sun-air",
      chip: "Sun, light and air",
      heading: "Sun, light and ventilation: what is practical",
      icon: "rem-morning-routine",
      blocks: [
        {
          type: "p",
          text: "A few writers point out that some Vastulogy rules overlap with ordinary building sense: morning sun from the east and north-east, and an open centre that lets air move through a home. Daylight and fresh air do affect people. A small pilot study of 49 office workers linked daylight at work with sleep, and a controlled study of 24 office workers found that ventilation affected how they scored on thinking tasks. Neither looked at direction, and the Vastulogy page sets out what small studies of Vastulogy-designed buildings have and have not shown.",
        },
        {
          type: "list",
          title: "What to check in your own rooms",
          items: [
            "Where the earliest light enters, and whether a curtain, a tree or a neighbouring wall blocks it.",
            "Whether air can cross the room, with openings on opposite or neighbouring walls.",
            "Which walls take the afternoon sun. In most of India the west and south-west walls take the hottest sun, so shade or fewer openings there is ordinary design, whatever the tradition says.",
            "Whether the room is easy to keep tidy. A tidy room is easier to use, and that is reason enough to keep one.",
          ],
        },
        {
          type: "p",
          text: "If sleep or health is a worry, a doctor is the right person to ask. Better light and air make a room pleasanter, and they do not replace medical care.",
        },
      ],
    },
    {
      id: "finding-north",
      chip: "Finding north",
      heading: "How to find north on your own plan",
      icon: "vastu-find-north",
      blocks: [
        {
          type: "p",
          text: "Every direction on a plan depends on one arrow. Take a plan whose north arrow points to the top of the sheet, with the kitchen in the bottom right corner: the kitchen is in the south-east. Now turn the arrow a quarter turn, so north points to the right. The same kitchen is in the north-east. The house is the same, the arrow has moved, and the whole reading has moved with it.",
        },
        {
          type: "p",
          text: "A north arrow on a drawing may show true north or the drawing’s own *plan north*, which is often turned so the sheet fits the paper. A magnetic compass shows magnetic north, which differs from true north by a small angle that depends on where you are and changes slowly. In most of India the difference is a degree or two, which seldom moves a room out of its zone. Steel does far more harm: a phone compass held near a steel rod, a fridge or a speaker can be off by many degrees.",
        },
        {
          type: "steps",
          title: "Taking a reading",
          items: [
            {
              title: "Read the plan’s arrow",
              text: "Find the north arrow on the plan or in the builder’s brochure, and note whether it says true north or plan north. If there is no arrow, take the plan as unmarked.",
              icon: "re-approvals",
            },
            {
              title: "Take a reading on site",
              text: "Stand in the open, outside or on a balcony, away from steel, vehicles and electrical equipment. Hold the compass flat and let the needle settle, then note the bearing of the entrance.",
              icon: "room-balcony",
            },
            {
              title: "Repeat it in two more places",
              text: "If the readings differ by more than a few degrees, something nearby is bending the needle. Move away from it and read again.",
              icon: "gen-caution",
            },
            {
              title: "Check it with a shadow",
              text: "The old texts used a vertical rod, the *shanku*. Stand a straight stick upright on level ground. Mark the tip of its shadow in the morning, draw a circle around the stick through that mark, and mark where the shadow tip meets the circle again in the afternoon. The line joining the two marks runs east to west. Stand with the morning mark on your left and the afternoon mark on your right, and you face north.",
              icon: "vastu-shadow-line",
            },
            {
              title: "Write north on the plan",
              text: "Mark the north you have measured on a copy of the plan and say which kind it is, true or magnetic, so that anyone who reads the plan reads it the same way.",
              icon: "astro-signing",
            },
          ],
        },
        {
          type: "p",
          text: "Where a room sits close to the edge of a zone, a compass reading cannot settle which zone it belongs to, and the room can fairly be read in both.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she checks on a plan",
    icon: "gen-listen",
    items: [
      { icon: "re-land-reading", text: "Where north truly falls on your plan, checked against a compass reading from the site" },
      { icon: "room-living-room", text: "Which rooms sit in which zone, and how much weight each zone really carries in your household" },
      { icon: "room-lighting", text: "Where sunlight enters and where air moves through" },
      { icon: "brain-reframing", text: "Whether the guides you have read agree with each other about your plan" },
      { icon: "gen-no-pressure", text: "Which rules matter to your family, and which you would rather set aside" },
    ],
  },
  bring: {
    heading: "What to gather for a plan reading",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-plan", text: "A floor plan with north marked, and a compass reading from the site if you can take one" },
      { icon: "gen-bring-photo", text: "Photographs of each room, with the windows and doors in them" },
      { icon: "gen-explain", text: "Any guide, article or advice you have been given, and the points that worry you" },
      { icon: "astro-birth-place", text: "The address or city, so that the climate and the sun’s path can be taken into account" },
    ],
  },
  faqs: [
    {
      q: "Which direction is the best?",
      a: "No direction is best for everything. Tradition gives each its own place: the east goes with the rising sun, the north-east with prayer and clarity, the south-west with weight and rest, and the south-east with fire. The old texts name no best side for a door, and modern guides disagree. Which direction suits a particular room depends on the plan and on how the people in it live.",
    },
    {
      q: "Does the centre of a home matter?",
      a: "In the tradition it does. The centre, the *Brahmasthan*, is held by Brahma in the mandala, and modern guides keep it open and uncluttered. Some also give a practical reason that stands apart from belief: an open middle is said to help air move through a home. You can test that without accepting the belief, by looking at what sits in the middle of yours: anything heavy, crowded or in constant use.",
    },
    {
      q: "What is the fire and water conflict in Vastulogy?",
      a: "Tradition sets fire and water against each other. Some guides therefore ask that the stove, linked with fire and the south-east, and the sink, linked with water and the north-east, should not sit side by side or in line. One suggested correction is a partition between them, sometimes with a mirror, and the mirror rests on belief with no test behind it. Separately from Vastulogy, a little distance between hob and sink is ordinary kitchen planning.",
    },
    {
      q: "What if my plan has no north marked?",
      a: "Take a compass reading on site and mark it on a copy of the plan, or ask your architect or builder, who may have the drawing’s true north. A satellite map with north at the top also helps: match a road or a boundary on the map to the same line on your plan, and read north from the map. Say on the plan how you found it.",
    },
    {
      q: "Should I use eight zones or sixteen?",
      a: "A reading can use either. Eight zones are broad, so most rooms sit well inside one. Sixteen are finer, which puts more rooms near an edge, where a degree or two of compass error can change the answer. The finer scheme gives more detail without giving more certainty, and no test is known that favours one over the other. Whichever you are given, ask which source it follows.",
    },
    {
      q: "Are the five elements the chemical elements?",
      a: "No. *Panchabhuta* is a classification from Indian philosophy that sorts experience into earth, water, fire, air and space, and it has nothing to do with laboratory substances. Vastulogy uses it as a vocabulary for what each part of a home is for: weight, water, heat, movement and openness. Read the pairings with particular corners as conventions; the guides that give them point to no early source.",
    },
    {
      q: "What is the difference between the zone a room is in and the direction it faces?",
      a: "A zone is where a room sits in the plan, such as a kitchen in the south-east corner. A facing is the way a door, window or person looks, such as the cook facing east. Guides use both, and people often mix them up. An east-facing house usually means its entrance faces east, while a north-east room is a matter of place. Ask which one a rule means before you apply it.",
    },
    {
      q: "Do I have to worship the direction guardians to follow Vastulogy?",
      a: "No. The guardians belong to the tradition’s stories and give the directions their names, and using the directions does not depend on any ritual. Where a family keeps one, such as a ground-worship before building, it is theirs to keep or leave. Narayani does not ask anyone to take on a ritual they do not hold.",
    },
    {
      q: "Do directions have planets as well as guardians?",
      a: "Some modern guides give each direction a ruling planet, and a scheme in astrology texts, *digbala*, gives planets strength in particular directions. The two give different answers, and none of the early building texts is known to pair planets with directions. The Astro-Vastulogy page explains how the pairing is used and what it rests on.",
    },
  ],
  related: ["/services/vastu/home/", "/services/vastu/astro-vastu/", "/services/vastu/vastu-remedies/"],
  showFees: true,
};
