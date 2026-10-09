import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "vastu-remedies",
  title: "Vastu corrections without demolition",
  metaTitle: "Vastu corrections without demolition",
  metaDescription:
    "Lighting, mirrors, furniture, colour, plants, salt, copper, crystals and routines: what Vastu suggests, what is known, and how to judge a change.",
  lead: "Start with how a room is used, furnished and lit. Narayani explains practical adjustments and their limits before considering structural changes.",
  card: "When you want to change how a home or workplace works, without breaking or rebuilding.",
  icon: "page-vastu-remedies",
  group: "chart-space",
  covers: [
    "Use before structure",
    "Light, colour and furniture",
    "Mirrors, plants and water",
    "Salt, copper and crystals",
    "Pyramids and yantras, with care",
    "A morning and a weekly routine",
    "How to judge a change",
  ],
  art: { kind: "drawing", id: "hero-vastu-remedies" },
  enquiryTopic: "Vastu: corrections without demolition",
  cta: "Enquire about Vastu corrections",
  intro: [
    {
      type: "p",
      text: "A bed can turn to another side of the room. A desk can face another way. A cupboard can be emptied, a lamp changed, a corner left bare. None of this needs a mason, and all of it can be put back.",
    },
    {
      type: "p",
      text: "That is where Narayani starts. A change of use can be tried for a few weeks and undone in a minute; a moved wall cannot. A correction on this page means a change to how a space is used, arranged or furnished. It does not repair a building, and no claim is made that it undoes a fault in one. What Vastu calls a defect is a departure from its own rules, not a measured fault.",
    },
    {
      type: "p",
      text: "The corrections below are the ones people ask about. Some have a plain practical case: light, air and order. Others, such as salt, copper, crystals and pyramids, rest on belief and are advised without cited tests. Narayani says which is which, and the decision stays with you.",
    },
  ],
  sections: [
    {
      id: "order",
      chip: "The order",
      heading: "Use first, then arrangement, then objects, then structure",
      icon: "re-phased-build",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Change how the space is used",
              text: "Where you sit, sleep, cook and work, and which way you face. Turning a bed or a seat costs nothing and shows quickly whether the room serves you better.",
              icon: "brain-habit",
            },
            {
              title: "Change what is in it",
              text: "Furniture, storage, clutter, light and colour. Most of the corrections below belong here.",
              icon: "room-living-room",
            },
            {
              title: "Add an object only if you want one",
              text: "A plant, a lamp, a yantra, a bowl of salt. Each is optional. If you add one, know what it is: a custom, with no mechanism behind it that anyone has shown.",
              icon: "gen-explain",
            },
            {
              title: "Touch the structure last",
              text: "Moving a wall, a door, a toilet or a staircase is building work. It belongs with an engineer, the local rules and, in a flat, the society’s approval. Narayani does not recommend it as a first step, and she does not recommend it merely because a rule puts a room in the wrong corner.",
              icon: "re-approvals",
            },
          ],
        },
        {
          type: "p",
          text: "Each step costs less than the one after it, is easier to undo, and shows its result sooner. Practitioners differ on how far the first three can go. Many suggest small changes that need no structural work. Some say a serious fault, for example in the north-east or the south-west, needs physical change, and that no adjustment fully corrects a layout. Narayani gives you both views and leaves the decision with you.",
        },
      ],
    },
    {
      id: "use",
      chip: "Use and arrangement",
      heading: "Four changes that cost little and can be judged in weeks",
      icon: "group-homes",
      blocks: [
        {
          type: "p",
          text: "These four have a practical case that does not rest on Vastu. Daylight, fresh air and comfort do affect people, and small studies have looked at daylight and sleep, and at ventilation and thinking, in offices. That research says nothing about compass direction, and it does not show that one wall rather than another is right for a bed.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Furniture and the way you face",
              text: "Moving a bed, a desk or the place where someone cooks is among the commonest suggestions, because they are the easiest things to move. Guides name a head direction for sleep, and they disagree. One says south or east and never north. Another puts the head to the north and avoids the south. The Brihat Samhita, a sixth-century text, advises against the head to the north or west and names no best direction. That spread is why Narayani asks how you sleep and work before she asks about compass points.",
              icon: "rem-furniture",
            },
            {
              term: "Clutter and order",
              text: "Most guides ask for order. Tradition keeps the centre of a home open, and a tidy room is easier to use, to clean and to cross safely. Keep exits, stairs and passages open whatever any guide says. The case for tidying is simple: you can find what you need, and the room works.",
              icon: "room-clutter",
            },
            {
              term: "Lighting",
              text: "Light is the correction with the strongest practical case. A dark corner can often be changed with a pale wall, a cleaner window or a better lamp. Many guides favour morning light from the east and north-east. The effect of good light is real, and the preference for one side is a custom.",
              icon: "room-lighting",
            },
            {
              term: "Colour",
              text: "Some guides pair colours with directions or with planets, and we know of no test behind those pairings. A colour change is the cheapest correction and the easiest to reverse: a cushion, a curtain, one wall. Choose a colour that makes the room pleasant to be in.",
              icon: "rem-colours",
            },
          ],
        },
      ],
    },
    {
      id: "objects",
      chip: "Objects",
      heading: "Objects people add, what is said about each, and what is known",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "Everything in this section is optional. Some objects have a long place in devotion. Others are modern additions, often sold with strong claims. For each one the table gives what is said, then its status and what to take care over. “Advised without cited tests” means that the people advising the object point to no study.",
        },
        {
          type: "table",
          head: ["Object", "What is said about it", "Status and care"],
          rows: [
            [
              "Mirrors",
              "Guides give differing rules for where a mirror may hang.",
              "Advised without cited tests. A mirror throws light, so it can help in a dark corner. The question on mirrors further down gives the practical view.",
            ],
            [
              "Plants",
              "Many Hindu homes keep a tulsi plant for worship. Guides also suggest plants as a small adjustment in a room.",
              "No test is cited for plants as a correction. A plant needs care: choose one you can water and that suits the light. A neglected plant is clutter.",
            ],
            [
              "Water features",
              "A small fountain or a bowl of water, usually placed in the north or north-east, the directions many guides favour for water.",
              "Advised without cited tests. Still water breeds mosquitoes and a fountain needs safe wiring. Keep it clean, or leave it out.",
            ],
            [
              "Copper",
              "Strips or vessels of copper placed in a corner or along a threshold, said to mark off a part of the home that is out of balance.",
              "Advised and sold without cited tests. If you use a strip, keep it away from wiring, smooth any sharp edge, and ask what it is meant to do before you pay for it.",
            ],
            [
              "Salt",
              "A bowl of salt kept in a room or a corner and replaced from time to time.",
              "Advised without cited tests. Salt draws damp and can corrode metal and some floors. Keep the bowl dry, and away from children and pets.",
            ],
            [
              "Crystals, quartz grids and bowls",
              "Quartz and other crystals set in bowls, grids or clusters, often to steady the south-west or to guard a door.",
              "Sold without cited tests. We know of no test showing that a crystal changes a space or protects a home. It is not a Jyotish gemstone, which has its own page and its own cautions.",
            ],
            [
              "Sound: bells, bowls and chanting",
              "A bell rung at prayer, a singing bowl, a chant or a piece of music, used to mark the start or end of a tidy-up or a day.",
              "Taught and sold without cited tests as a way to change a space. Sound does change how a room feels, as music does, and that is reason enough to use it if you like it.",
            ],
            [
              "Pyramids",
              "Small pyramids of metal, crystal or wood, placed in a corner or near a door and sold as a stand-in for structural change.",
              "Sold without cited tests. A pyramid does not strengthen a wall or replace an engineer’s advice.",
            ],
            [
              "Yantras",
              "A geometric figure, often of interlaced triangles inside a square frame, long used as a focus in worship. Modern advice also places yantras at entrances and in corners.",
              "As an object of worship a yantra belongs to devotion. As a Vastu correction it is advised without cited tests. If your family keeps one, keep it with respect, and do not buy one under pressure.",
            ],
          ],
          icons: ["rem-mirrors", "rem-plants", "rem-water-feature", "rem-copper", "rem-salt", "rem-crystals", "rem-sound", "rem-pyramid", "rem-yantra"],
        },
        {
          type: "note",
          text: "These objects are customs and comforts. None is a remedy for an illness or a symptom, and for either a doctor comes first. If an object is sold to you with a claim about health, money or protection, ask what the claim rests on.",
        },
      ],
    },
    {
      id: "routines",
      chip: "Routines",
      heading: "A morning pass, a weekly reset and a seasonal sort-out",
      icon: "habit-stacking",
      blocks: [
        {
          type: "p",
          text: "An arrangement is easier to maintain when its upkeep fits an existing routine. Choose a practical cue, such as putting the keys away before clearing the entrance, instead of treating the room as a task you must remember at an unspecified time. The examples below concern ordinary use, not a promised effect on luck.",
        },
        {
          type: "terms",
          items: [
            {
              term: "A morning pass",
              text: "Five minutes, after the first cup of tea or the first prayer. Open the windows or draw back the curtains. Switch on a light where the room is dark. Put away what was left out last night, beginning at the entrance. If you light a lamp or say a short prayer, do that in the room itself. No step has a count or a rule. Each is something a room needs daily.",
              icon: "rem-morning-routine",
            },
            {
              term: "A weekly reset",
              text: "One set day, thirty minutes at most. Choose one drawer, shelf or cupboard, empty it and put back only what you use. Wipe the entrance and the places hands touch. Water the plants. Look at the corner you have been ignoring. One shelf a week keeps it from turning into a weekend of chores.",
              icon: "rem-weekly-reset",
            },
            {
              term: "A seasonal sort-out",
              text: "Many households already turn out their homes before Diwali. The same habit can follow any change of season: give away what you no longer use, mend what is broken, and give each thing you keep a place where you can see it.",
              icon: "rem-declutter",
            },
          ],
        },
      ],
    },
    {
      id: "avoids",
      chip: "What she avoids",
      heading: "What she does not recommend",
      icon: "gen-no-pressure",
      blocks: [
        {
          type: "p",
          text: "There are things Narayani does not recommend, even where a guide does.",
        },
        {
          type: "list",
          items: [
            "Demolition or any structural change as a first step. It costs a great deal and is hard to undo.",
            "A purchase presented as necessary, urgent or the only answer. Nothing she advises depends on buying anything.",
            "A change made out of fear. If the reason you were given is a warning, she asks what the warning rests on.",
            "Several changes at once, which leave you unable to tell what helped.",
            "A change that gets in the way of safety: blocked exits, loose wiring near water, a heavy object on a weak shelf.",
          ],
        },
        {
          type: "quote",
          text: "Even a vastu remedy only works when your brain is working.",
          source: "Narayani Garg, translated from Hindi",
        },
        {
          type: "p",
          text: "That is why this page begins with how you use a room, puts objects third, and claims no result for any object.",
        },
      ],
    },
    {
      id: "judging",
      chip: "Judging a change",
      heading: "How to judge whether a correction is helping",
      icon: "habit-evidence",
      blocks: [
        {
          type: "p",
          text: "Judge a change by what shows in daily use, not by what a guide promised. Decide before you begin what you will watch and for how long. One change at a time makes it possible to tell what did something.",
        },
        {
          type: "table",
          head: ["The change", "What you can watch", "When to look"],
          rows: [
            ["A lamp in a dark corner of the living room", "Whether anyone uses that corner in the evening", "After two weeks"],
            ["A kitchen shelf emptied of things you never use", "Whether the counter stays usable through a week of cooking", "After a month"],
            ["The bed turned to the other wall", "Whether getting into and out of bed is easier, and what the person who sleeps there says", "After three weeks"],
            ["A mirror moved, or covered at night", "Whether you stop noticing it, or miss it", "After ten days"],
          ],
        },
        {
          type: "p",
          text: "If nothing you can observe has changed, keep the change only if you like the room better, and put things back if you do not. A change that makes a room easier to live in is a good change whether or not the tradition’s reason holds.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she asks about before suggesting a change",
    icon: "gen-listen",
    items: [
      { icon: "gen-homeowner", text: "How each room is used, and by whom" },
      { icon: "room-store", text: "What is in the room: furniture, storage, light and the things you never use" },
      { icon: "gen-tenant", text: "What the building itself decides, and what you may change" },
      { icon: "astro-remedy-behaviour", text: "What you have already tried, or been told to try, and what came of it" },
      { icon: "gen-time", text: "What you can keep up in an ordinary week" },
    ],
  },
  bring: {
    heading: "What to gather before you enquire about a change",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-photo", text: "A photograph or rough sketch of the room or corner that concerns you" },
      { icon: "work-hr", text: "Notes on anything you changed, when, and who advised it" },
      { icon: "work-rented-space", text: "Whether you own or rent, and whether a landlord or society must approve changes" },
      { icon: "gen-parents", text: "The people who share the space, and which of them uses this room" },
      { icon: "gen-caution", text: "Anything you were told to buy, and what you were told it would do" },
    ],
  },
  faqs: [
    {
      q: "Do crystals and salt work as Vastu remedies?",
      a: "The people who advise them cite no study, and we know of no independent, controlled research showing that a crystal or a bowl of salt changes a space or the people in it. The same holds for crystal grids, singing bowls and stones laid at a door to protect a home: they are sold with claims and with no tests behind them. If an object makes a room feel cared for, that is a fair reason to keep it, and it is no evidence about the object. None of Narayani’s advice depends on buying one.",
    },
    {
      q: "Are mirrors bad in a home or office?",
      a: "No mirror is bad in itself. Guides disagree on placement, and none cites a test. A mirror throws light, which suits a dark corner, and one facing the bed can startle you in the night or catch the glare of a window. If it bothers you, move it or cover it at night. If it does not, there is nothing to change.",
    },
    {
      q: "Can I do anything about a toilet in the north-east without rebuilding?",
      a: "Most modern guides keep a toilet out of the north-east, and practitioners differ on what to do when one is already there. Ordinary care comes first: keep the room clean, dry and well ventilated, and the door closed when it is not in use. One practitioner holds that a serious north-east fault needs physical change. Moving a toilet is plumbing and structural work, so it belongs with a plumber and an engineer, and in a flat with the society.",
    },
    {
      q: "Do I need to rebuild to follow Vastu?",
      a: "No. Rebuilding is the last of the four steps, and many homes cannot be rebuilt at all: a rented flat, a floor in a shared building. What you can change is how the home is used, arranged and furnished, and the sections above set out how. Nor can an object stand in for building work: a pyramid or a stone cannot strengthen a wall. If structure is ever worth considering, an engineer and the local rules decide, and no compass does.",
    },
    {
      q: "Where should a stone be kept in a home or office?",
      a: "Guides name different places for a decorative stone or crystal, such as the north-east or a desk, and none cites a test. Think of it as an object you like. Keep it where you can see it and dust it, away from edges and from small children, who can swallow a small stone. If you mean a gemstone worn as a Jyotish remedy, the Gemstones page covers it.",
    },
    {
      q: "What if my home breaks a rule I cannot change?",
      a: "Nearly every home breaks some rule, because the guides contradict one another. Staircase advice runs from the south, south-west or west in one guide to the north-west in another, and one guide accepts a south-facing door where another rates a south road poor. A home that meets every list does not exist, and no research we know of shows that a broken rule harms the people who live there. If something bothers you, name what you experience, such as heat, noise, glare or a cramped passage, and work on that.",
    },
    {
      q: "Which correction should I try first?",
      a: "The one nearest to how you use the room. If you cannot settle at a desk, look at the seat and the light before anything else. If a room feels heavy, look at what is stored in it. Pick one change, decide what you will watch, and look again after a few weeks. Objects can wait until a change of use has been tried.",
    },
  ],
  related: [
    "/services/vastu/home/",
    "/services/vastu/astro-vastu/",
    "/services/vastu/office-and-shop/",
    "/services/stones-and-rudraksh/gemstones/",
  ],
  showFees: true,
};
