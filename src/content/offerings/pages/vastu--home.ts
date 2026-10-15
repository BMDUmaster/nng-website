import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "home",
  title: "Vastu for your home",
  metaTitle: "Vastu for your home, room by room",
  metaDescription: "Vastu for a home or flat, room by room: entrance, kitchen, bedrooms, prayer room, toilets, stairs and water, with honest limits and no demolition.",
  lead: "Begin with how your household uses each room. Consider Vastu alongside comfort and practical constraints, including what can reasonably change in a flat or rented home.",
  card: "When you want your home or flat looked at room by room, without breaking walls.",
  icon: "page-home",
  group: "homes",
  covers: [
    "Room by room guidance",
    "Entrance and main door",
    "Kitchen, bedrooms, prayer room",
    "Flats and rented homes",
    "Reading your floor plan",
    "Defects and calm corrections",
    "Sleep, health and family life",
  ],
  art: { kind: "plan", variant: "home" },
  enquiryTopic: "Vastu: my home",
  cta: "Enquire about a home Vastu session",
  intro: [
    {
      type: "p",
      text: "A home is where most people meet Vastu, and where the advice they collect often conflicts. One guide places the kitchen in the south-east, another allows the north-west, and a relative has a third idea. A home review starts by sorting what is tradition, what is common sense and what is one writer’s preference.",
    },
    {
      type: "p",
      text: "Narayani works room by room, with the household in mind. A kitchen is read for the person who cooks in it, a bedroom for the people who sleep there, a staircase for whoever climbs it with the shopping. The first question is always how the space is used, and what is hardest about it.",
    },
    {
      type: "p",
      text: "Where a guide’s rule and your daily routine pull apart, she says so plainly, and the choice stays yours. The compass is one lens among several, beside the light, the layout and the way your family lives.",
    },
  ],
  sections: [
    {
      id: "front-rooms",
      chip: "Entrance and living",
      heading: "The entrance, living room, kitchen and prayer room",
      icon: "rem-morning-routine",
      blocks: [
        {
          type: "p",
          text: "What follows is what guides commonly say about each room, with the places where they differ. The Vastu page sets out how far the research goes.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Main entrance and door",
              text: "Most modern guides prefer a main door facing north, east or north-east. The Brihat Samhita marks down a door facing a road, a tree, a well or a pillar, unless it stands far off. In practice, ask whether the door opens fully, whether the threshold is lit and level, and whether a visitor can find it.",
              icon: "room-main-entrance",
            },
            {
              term: "Living room",
              text: "Guides put the living room in the north or north-east, and other tables give the east or the east-north-east. The plan usually decides where it sits. What you can still choose is how it is kept: where people sit, how the light falls, and whether the room still draws the family together or has become a place for stacking things.",
              icon: "room-living-room",
            },
            {
              term: "Kitchen",
              text: "The Brihat Samhita and most guides place the kitchen in the south-east, the corner of Agni, with the north-west as a second choice and the cook facing east. A sixteen-zone table allows the east-south-east, and one guide puts the sink at the north-east end of the platform. Guides also ask that stove and sink not sit next to each other, so that fire and water stay apart; the page on directions and the five elements explains the idea.",
              icon: "room-kitchen",
            },
            {
              term: "Prayer room or home mandir",
              text: "The Brihat Samhita places the god-room in the north-east, and a review of five treatises found the same arrangement in all of them, though it measured no effect. Modern guides allow the north, east or west when the north-east is not available. Narayani looks at what is kept inside a mandir as well as the corner it stands in. Wherever it stands, a lamp or incense needs a safe place away from curtains and shelves.",
              icon: "room-prayer-room",
            },
          ],
        },
      ],
    },
    {
      id: "sleep-study",
      chip: "Sleep and study",
      heading: "Bedrooms, the study and which way to sleep",
      icon: "astro-sleep",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Master bedroom",
              text: "Most guides put the master bedroom in the south-west, the corner modern guides link with earth, weight and grounding. The Brihat Samhita names no bedroom position, and one table also lists a bedroom in the south. In practice the questions are quieter ones: whether the room is calm at night, whether the bed has air and daylight nearby, and whether two sleepers with different hours share it comfortably.",
              icon: "room-master-bedroom",
            },
            {
              term: "Children’s room",
              text: "Guides place a child’s room in the west or north-west, and one suggests the north-east for children under about seventeen. A sixteen-zone table gives the east-north-east. For a growing child the practical points are daylight, a bed away from noise and a quiet place for homework.",
              icon: "room-childrens-room",
            },
            {
              term: "Guest room",
              text: "Guides commonly suggest the north-west, the corner linked with air and movement. It is a convention, and many families simply use whichever room has a window and a door that closes.",
              icon: "room-guest-room",
            },
            {
              term: "Study and desk",
              text: "Guides want a study desk to face east or north, and place a study room in the west, or the east-north-east in a sixteen-zone table. No controlled test of desk direction was found. Daylight has better support than the compass does, so a desk by a window, with light that does not glare on the page, and a spot away from the television come first.",
              icon: "room-study",
            },
          ],
        },
        {
          type: "p",
          text: "Which way the head should point in bed is among the most common questions, and the sources disagree.",
        },
        {
          type: "table",
          head: ["Source", "What it says"],
          rows: [
            ["A common modern guide", "Head to the south or east, never to the north"],
            ["Another modern guide", "Head to the north, and avoid the south"],
            ["The Brihat Samhita", "Advises against sleeping with the head to the north or west, and names no best direction"],
          ],
        },
        {
          type: "p",
          text: "No controlled test of sleeping direction was found, and the three cannot all hold. Choose the direction in which you sleep best, taking in the window, the door and the noise. If sleep itself is the trouble, a doctor is the right first call.",
        },
      ],
    },
    {
      id: "services",
      chip: "Stairs, water, storage",
      heading: "Toilets, stairs, water, storage and open space",
      icon: "re-parking-utilities",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Bathrooms and toilets",
              text: "Guides put toilets in the north-west or north and keep them out of the north-east. A sixteen-zone table puts the bathroom in the east and the toilet in the south-south-west, and another guide uses the north-north-west, the west-north-west or the stretch between south-west and south. The Brihat Samhita gives no position for one. Wherever it sits, a toilet is better dry, clean and ventilated.",
              icon: "room-toilet",
            },
            {
              term: "Staircase",
              text: "Common guides advise the south, south-west or west for the stairs, turning clockwise as they rise and with an odd number of steps, and advise against the north-east and the centre of the house. A table that uses sixteen zones puts the stairs in the north-west. Width, rise, headroom and escape in a fire are set by local building rules, which Vastu does not alter.",
              icon: "room-staircase",
            },
            {
              term: "Borewell and water tank",
              text: "Modern guides place a borewell in the north-east or north, and one also allows the east or west. An overhead tank goes in the south-west or west. The Brihat Samhita counts water in the north and north-east as favourable and in every other direction, the south-west included, as poor. Where water is found depends on local geology, so a borewell has to go where the ground gives water, and Vastu is weighed afterwards.",
              icon: "room-water-source",
            },
            {
              term: "Storeroom",
              text: "In the Brihat Samhita the south-west is the place for storing utensils. A store is also where unused things pile up, so a practical check is whether you can see what is in it and reach the back of the shelves.",
              icon: "room-store",
            },
            {
              term: "Balconies and terrace",
              text: "For the terrace, guides give the overhead tank a place in the south-west or west. For a balcony the ordinary questions come first: privacy, drainage, morning light and whether anyone ever sits there.",
              icon: "room-balcony",
            },
            {
              term: "Open space and the centre",
              text: "Brahma holds the centre in the mandala, and guides keep the middle of a home open, without a staircase or heavy furniture. In a small flat the centre may be a passage, and a passage is easier to use when shoes, boxes and bags are kept out of it.",
              icon: "room-courtyard",
            },
          ],
        },
      ],
    },
    {
      id: "flats",
      chip: "Flats and rented homes",
      heading: "Flats, rented homes and the building around you",
      icon: "room-apartment",
      blocks: [
        {
          type: "p",
          text: "A building has its own Vastu: the way it faces, and where its gate, lift and stairs stand. Your flat has another inside it. You can read both, but you can only rearrange the second. The lift lobby and shared staircase outside your door were settled by the builder, so the useful question is how the door you open onto them reads, and what can be done inside.",
        },
        {
          type: "table",
          head: ["Set by the building", "Yours to arrange"],
          rows: [
            ["The way the block faces, and where your flat sits in it", "Where each piece of furniture stands"],
            ["Your entrance door, and the lift lobby and stairs outside it", "Which way the bed and the work desk face"],
            ["Plumbing lines and shafts, so kitchen and bathrooms stay where they were built", "Where the prayer corner is, and what it holds"],
            ["Walls, beams and anything the society or the authorities control", "Colours, curtains, lamps and the light in each room"],
            ["The floor you bought on, and the view it has", "Storage, tidiness and the order of each day"],
          ],
        },
        {
          type: "p",
          text: "A rented flat follows the same split, with the lease as one more limit.",
        },
      ],
    },
    {
      id: "plan-review",
      chip: "Plan review",
      heading: "What a plan review shows, and how a home session is held",
      icon: "re-approvals",
      blocks: [
        {
          type: "p",
          text: "Read in order, a floor plan with north marked answers five plain questions.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Where north falls",
              text: "The plan is set against a compass, so that every room can be placed in a zone. A plan without north marked cannot be read for direction, which is why it is the first thing to send.",
              icon: "re-floor-directions",
            },
            {
              title: "Which room sits where",
              text: "The kitchen, prayer room, bedrooms, toilets and stairs are placed in their zones, and the guides’ placements are set beside them.",
              icon: "re-amenity-zones",
            },
            {
              title: "How the entrance reads",
              text: "The main door, and the route the household takes from it to the rooms it uses most.",
              icon: "re-lobby-flow",
            },
            {
              title: "The centre",
              text: "Whether the middle of the home is open, and what has settled there over the years.",
              icon: "room-clutter",
            },
            {
              title: "What can change",
              text: "Each difference from the guides is sorted into what can be rearranged, what would need building work, and what is better left alone.",
              icon: "rem-furniture",
            },
          ],
        },
        {
          type: "p",
          text: "A home session is held online from your plan and photographs, or in person by appointment.",
        },
      ],
    },
    {
      id: "defects",
      chip: "Defects and corrections",
      heading: "Directional defects and calm corrections",
      icon: "re-non-demolition",
      blocks: [
        {
          type: "p",
          text: "In Vastu a layout “defect”, a *dosha*, means a room or feature that sits against a guide’s rule: a toilet in the north-east, a staircase at the centre, a kitchen away from the south-east. It marks a mismatch with a list, and nothing in the home has been measured. Because the lists are long and disagree, most real homes have several, and a defect that one guide counts as serious another never mentions.",
        },
        {
          type: "p",
          text: "How seriously to take one is a matter of judgement, and tradition itself varies. Some practitioners say most defects yield to small changes. Others say a serious one needs building work, and that small adjustments only go so far. Narayani starts with the small and the reversible: turning a bed, shifting a desk, changing where you sit to cook or study, emptying a store, adding a lamp. Structural change is a decision for you and your engineer.",
        },
        {
          type: "p",
          text: "Objects such as mirrors, salt bowls, pyramids and yantras are often suggested as well. They rest on belief and have no test behind them, so no result for health, sleep or money should be expected from them. The page on corrections without demolition sets out what each is said to do and what it is worth.",
        },
      ],
    },
    {
      id: "health",
      chip: "Health, sleep, family",
      heading: "Health, sleep and family life",
      icon: "astro-wellbeing-rhythm",
      blocks: [
        {
          type: "p",
          text: "Many guides link parts of a home with health, sleep and harmony in the family, and say that a room in the right place supports them. Research does link daylight with sleep and ventilation with how well people think, and comfort shapes how a home feels to live in. No independent, controlled study was found that ties a compass direction to any of these.",
        },
        {
          type: "note",
          text: "Rearranging a room does not stand in for medical care. If sleep, health or mood is the real concern, please see a doctor or a trained mental health professional, and keep up any care you already have.",
        },
      ],
    },
    {
      id: "house-number",
      chip: "House number",
      heading: "Your house number, and where numerology fits",
      icon: "numc-house-number",
      blocks: [
        {
          type: "p",
          text: "A door number is a numerology question and sits apart from the layout of the rooms. Numerology adds a house number down to a single digit and sets it beside the numbers in your own life, as a point for reflection. How a house number is read is set out on the mobile and house numbers page, and a house reading and a numbers reading can be arranged together if you want both.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she asks about each room",
    icon: "gen-listen",
    items: [
      { icon: "brain-habit", text: "How the household uses each room, from the first cup of tea to the last light switched off" },
      { icon: "brain-reframing", text: "Where each room sits against the compass, and where the guides differ about it" },
      { icon: "work-rented-space", text: "What you own, what you rent, and what you are allowed to change" },
      { icon: "room-lighting", text: "Light, air and noise in the rooms where the family spends most of its time" },
      { icon: "space-spiritual", text: "The customs your family keeps, and any rule you would rather not follow" },
    ],
  },
  bring: {
    heading: "What to send for a home review",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-plan", text: "A plan of each floor with north marked, or a hand-drawn sketch with room sizes" },
      { icon: "gen-bring-photo", text: "Photographs of each room, and of the entrance from outside" },
      { icon: "astro-family", text: "Who lives in the home, and which room gives you the most trouble" },
      { icon: "gen-tenant", text: "Whether you own the home, rent it, or are about to build or renovate" },
    ],
  },
  faqs: [
    {
      q: "Is a toilet or a staircase in the north-east a serious defect?",
      a: "In the tradition the north-east is the corner for prayer and water, so a toilet or a staircase there is the placement guides most often mark down. How serious it is depends on whom you ask: some call it a major fault, others a reason to adjust a few habits. Narayani looks first at how the space is used, then at what can be rearranged without building work. Sometimes the right call is to leave it as it is.",
    },
    {
      q: "Which way should the main door face?",
      a: "Most modern guides say north, east or north-east. One guide calls a south-facing door fine and another rates a south road poor, while the Brihat Samhita lists outcomes square by square along each side and names no single best one. So the sources give no settled answer. Many homes face the road they were built on, and Narayani looks at what you can still change: how the door is lit, what stands opposite it, and how the entrance feels to come home to.",
    },
    {
      q: "How much does a home really shape a person’s life?",
      a: "Nobody can give you a figure, and anyone who does is guessing. A home affects how you sleep, work and rest, through light, air, noise, comfort and how well it suits the people in it. Whether a room’s direction adds anything beyond that is the question the health section above takes up. Narayani puts no number on a home’s influence, and she looks at the people alongside the rooms.",
    },
    {
      q: "Do you visit homes, and what if mine is large?",
      a: "Whether a visit to your address is possible is something the team confirms when you enquire. A large home, or one on several floors, takes longer to read than a flat, so the longer options usually suit it better. Tell the team how many floors and rooms there are, and they will help you pick a suitable session and confirm the amount and the timing.",
    },
    {
      q: "Which room should I start with?",
      a: "The one where you spend the most hours, or the one that gives the most trouble, usually a bedroom or a work corner. Change one thing at a time and live with it for a few weeks before you change the next. That is easier to keep up and easier to judge than a long list done at once. A room that already works needs nothing.",
    },
    {
      q: "We are renovating. When should I ask about Vastu?",
      a: "Before the plan is final. Moving a door or a kitchen on a drawing costs little, and the same move after the walls are built costs a great deal. Send the current plan and the proposed one, and say what you would like the home to do better. The structure, the approvals and the safety questions belong to your architect and engineer, who can weigh Vastu alongside them.",
    },
    {
      q: "My family has lived here happily for years. Do I need a review?",
      a: "No. If the home works for the people in it, there is nothing to correct. A review is for when you are about to move in, renovate or buy, or when something in the home keeps troubling you. A home that suits its household is a good answer, and a reading can say so.",
    },
    {
      q: "What if relatives disagree about what to change?",
      a: "It happens often, and it helps to separate the questions. Ask each person which source their rule comes from and which rooms they actually use. Where guides disagree, no experiment has settled the matter, so the household’s own routine is the fairer judge. Narayani can lay out the options and the reasons, and the decision stays with the family.",
    },
  ],
  related: [
    "/services/vastu/directions-and-elements/",
    "/services/vastu/vastu-remedies/",
    "/services/vastu/property-and-land/",
    "/services/numerology/mobile-and-house-numbers/",
  ],
  showFees: true,
};
