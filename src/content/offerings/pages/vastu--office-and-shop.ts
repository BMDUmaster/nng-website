import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "office-and-shop",
  title: "Vastu for an office, shop, clinic or studio",
  metaTitle: "Vastu for an office, shop or clinic",
  metaDescription: "Where the owner sits, how teams are seated and how cash and customers move: what Vastu tradition suggests for a workplace, and where its sources differ.",
  lead: "Look at how people work, customers move and space is used. Consider Vastu alongside your business needs, without promises of sales or profit.",
  card: "When you open, run or move an office, shop, clinic or studio and want its layout read.",
  icon: "page-office-and-shop",
  group: "workplaces",
  covers: [
    "Offices, shops, clinics, studios",
    "Owner’s seat and finance zones",
    "Teams, reception, shared rooms",
    "Cash, stock and customer flow",
    "Choosing, renting or moving",
    "What a review cannot promise",
    "Ongoing support for a business",
  ],
  art: { kind: "plan", variant: "office" },
  enquiryTopic: "Vastu: my office or shop",
  cta: "Enquire about Vastu for my workplace",
  intro: [
    {
      type: "p",
      text: "Commercial Vastu applies the same tradition to places where people work and money moves: an office, a retail shop, a showroom, a clinic, a studio, a co-working floor or a floor of a corporate tower. What she asks about first changes from one to the next.",
    },
    {
      type: "p",
      text: "The old building texts deal with houses, temples and towns, and nothing found in them covers an office seating plan, a billing counter or a server room. The workplace rules in circulation come from modern consultants who extend the logic of the home, and they disagree with one another. Narayani offers them as a tradition to read with care.",
    },
    {
      type: "p",
      text: "She starts with the business: what you run, who works there and what has changed lately. The layout is one part of that picture. In her way of working the mind comes first, so the reading stays practical and the decisions stay with you.",
    },
  ],
  sections: [
    {
      id: "kinds",
      chip: "Kinds of space",
      heading: "The spaces this covers, and what changes in each",
      icon: "group-workplaces",
      blocks: [
        {
          type: "list",
          title: "What she asks about first, by kind of space",
          items: [
            "Offices: who sits where, and who walks past whom all day.",
            "Shops and showrooms: the route a customer takes, the counter, the stock, and the quiet corner where a buyer decides.",
            "Clinics and consulting rooms: privacy, a calm wait, and where the practitioner sits and faces. Clinical and hygiene rules set the layout first.",
            "Studios: light, sound and one working centre. The reading follows the work.",
            "Co-working spaces: the operator’s reception and shared rooms are one question, and a member’s desk is another.",
            "Corporate floors: the floor’s position and its core of lifts and shafts are already set, so the reading is about the fit-out.",
          ],
        },
      ],
    },
    {
      id: "owner-and-books",
      chip: "Owner and finance",
      heading: "The owner’s seat, the books and the cash",
      icon: "astro-leadership",
      blocks: [
        {
          type: "p",
          text: "Consultants who write about workplaces give the south-west to authority. It is the corner of *Nirriti*, the guardian of that direction, which they link with the earth element and read as a place of weight and steadiness. The north belongs to *Kubera*, the guardian of wealth, so some place money matters on that side. These are traditional associations, and the people who write them down differ on the detail.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Owner’s cabin",
              text: "The south-west, with the owner seated facing north or east. Consultants broadly agree on the south-west for the owner of an office. For a shop, one view keeps the owner in the south-west, and another puts the shop owner in the south or west, facing east or north.",
              icon: "work-owner-cabin",
            },
            {
              term: "Finance team",
              text: "Some say the north, Kubera’s side. Others say the south-east or the north-east. No old text settles it for an office, so Narayani looks at it first as a question of oversight and privacy, and second as a question of direction.",
              icon: "work-finance",
            },
            {
              term: "Cash counter and safe",
              text: "One view puts the counter in the north, with whoever handles cash facing north. Another puts the safe in the south-west or west-south-west, and has a shop counter that opens toward the north.",
              icon: "work-cash-counter",
            },
            {
              term: "Storage",
              text: "One table gives the south-west or the south, the heavy side. The *Brihat Samhita*, a sixth-century work with a chapter on house building, also puts a house’s utensil store in the south-west, which is the nearest an old source comes to this rule.",
              icon: "room-store",
            },
          ],
        },
        {
          type: "p",
          text: "No source has been found that says how the owner and the finance head should sit in relation to each other. The placements above give each a corner of their own, which is as far as they go. Narayani frames the pair as a question of oversight: whether the owner can see what they need to about the money without hovering, and whether finance has a quiet room with a door that locks. She uses a preferred corner that allows both; where none does, sense comes before direction, since in her view what a direction means depends on the mind of the person sitting there.",
        },
      ],
    },
    {
      id: "people-and-rooms",
      chip: "Teams and rooms",
      heading: "Reception, teams and shared rooms",
      icon: "work-floor-plan",
      blocks: [
        {
          type: "p",
          text: "The old texts do not cover these rooms. Where a direction appears below, it comes from modern consultants, and where none appears no source has been found, so Narayani reads the room by what it is used for.",
        },
        {
          type: "table",
          head: ["Place", "What is commonly said, and what she asks"],
          rows: [
            ["Reception", "North, east or north-east in one table, north-east or east in another. She asks what a visitor sees first, and who sees the visitor."],
            ["Sales team", "North-west, in one table facing north-east. It is the corner of *Vayu*, the wind and the element of air. She asks how loud the team is and who has to work beside them."],
            ["Team workspace", "No settled rule. She starts with daylight, noise and who needs to talk to whom, and looks at facing after that."],
            ["Meeting rooms", "No settled rule. A quiet room with air and daylight, placed so that visitors need not cross the team’s desks, matters first."],
            ["HR", "No settled rule. The practical question is privacy: a room where a hard conversation cannot be overheard."],
            ["Client lounge", "No settled rule. It belongs near reception. What counts is how the wait feels, and whether visitors can overhear the team."],
            ["Server room", "No settled rule. A reading from the elements would give heat-producing equipment the south-east, the corner of fire. Cooling, power and fire safety decide in practice."],
            ["Pantry", "South-east in one table, south in another. The south-east is the corner of fire, and the old house text puts the kitchen there. Some consultants add that a sink or water dispenser should not stand beside the stove or in line with it."],
          ],
          icons: ["work-reception", "work-sales-desk", "work-team-space", "work-meeting-room", "work-hr", "work-client-lounge", "work-server-room", "work-pantry"],
        },
      ],
    },
    {
      id: "flow",
      chip: "Flow",
      heading: "How customers, cash and stock move through a space",
      icon: "re-lobby-flow",
      blocks: [
        {
          type: "p",
          text: "Flow is where Vastu comes closest to ordinary shop and office planning. Narayani follows four things across the plan with you, in this order.",
        },
        {
          type: "steps",
          items: [
            {
              title: "The entrance",
              text: "What a visitor sees on arrival, what stands in front of the door, and how the door opens. The old house text counts a door that faces a tree, a well or a pillar close by as a poor one. You rarely choose the door of a rented unit, so she reads the one you have.",
              icon: "room-main-entrance",
            },
            {
              title: "The customer’s route",
              text: "From the door to the first person who greets a visitor, past the stock, to the counter and back out. She follows it on the plan and asks where a customer slows down, hesitates or has to guess.",
              icon: "work-customer-flow",
            },
            {
              title: "The cash",
              text: "Where payment is taken, who can see it, and where takings are kept overnight. The directions suggested for the counter and the safe are given above. Your insurer’s conditions and the safe’s fire rating come before any compass point.",
              icon: "space-wealth",
            },
            {
              title: "The stock",
              text: "How goods come in, wait and go out to the customer. One table gives the store the south-west or south. Whatever a table says, shelving has to leave the exits and the back door unblocked, and fire safety decides.",
              icon: "work-warehouse",
            },
          ],
        },
      ],
    },
    {
      id: "choosing-and-moving",
      chip: "Units and moves",
      heading: "Choosing a unit, moving, and what a tenant can change",
      icon: "work-rented-space",
      blocks: [
        {
          type: "p",
          text: "Practical questions come before the compass: the lease, the permitted use, approvals, access, light, parking and cost. A reading comes after a unit has passed those, and its questions are about what the unit gives you and what you can arrange.",
        },
        {
          type: "table",
          head: ["Usually already set", "Usually yours to arrange"],
          rows: [
            ["The building’s orientation and the position of your unit", "Seating, desks and the facing of each"],
            ["The building’s main door and its lifts", "The entrance to your own suite, if the landlord agrees"],
            ["Plumbing, toilets, shafts and the power supply", "Storage, filing and where the safe stands"],
            ["Structural walls and columns", "Partitions, where the lease and the authority permit them"],
            ["The windows and the light they give", "Lighting, colours, plants and keeping the place orderly"],
          ],
          caption: "What a rented space tends to settle for you, and what it leaves open",
        },
        {
          type: "p",
          text: "Structural changes need the landlord, the authority and an engineer, and she does not advise on them. Mirrors, salt bowls, pyramids and yantras are sold for workplaces; they rest on belief, no test of them has been found, and she attaches no result to them. The page on Vastu remedies goes into them. The changes most worth considering are the ordinary ones: arrangement, light and order.",
        },
        {
          type: "p",
          text: "A move is the point at which the plan is still empty, so a reading can come before the fit-out begins. Tradition also marks a first day in new premises with a ritual, on a date chosen with a priest or a Jyotish practitioner. That is a matter of custom, and nothing found tests what such a date does. Its practical value is a day the whole team can plan around.",
        },
      ],
    },
    {
      id: "what-owners-bring",
      chip: "Situations",
      heading: "What owners bring, and what to look at first",
      icon: "gen-owner",
      blocks: [
        {
          type: "p",
          text: "These are some of the situations owners bring, with what Narayani suggests checking before the layout.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Sales rose, then flattened",
              text: "Check pricing, where new customers come from, stock and the people who sell. If those are sound, look at how easily a customer can find the shop, reach the counter and pay.",
              icon: "astro-stalled-project",
            },
            {
              term: "Cash comes in and drains away",
              text: "Start with payment terms, what customers owe you, costs and who approves spending. The space has a part to play in where cash is handled and who can see it.",
              icon: "work-cash-swing",
            },
            {
              term: "People keep leaving",
              text: "Pay, workload, the manager and the role itself deserve the first look. Noise, light, air and privacy count too, and so does a seat that puts one person in constant traffic.",
              icon: "astro-job-change",
            },
            {
              term: "Partners keep clashing in a shared space",
              text: "Begin with the agreement, who decides what and how the work is divided. Then look at who sits near whom, who has a door and who has none.",
              icon: "astro-dispute",
            },
            {
              term: "Things went quiet after a move",
              text: "Look first at location, rent, customers who could not follow the move and changes in the team. After those, compare the new layout with the old and see what it lost.",
              icon: "work-relocation",
            },
          ],
        },
        {
          type: "p",
          text: "No source supports a direction as the cause of any of these. A review can sit beside the practical checks as one more way of looking, and Narayani will say so when the practical questions are the real ones.",
        },
      ],
    },
    {
      id: "money-and-limits",
      chip: "Money and limits",
      heading: "Sales, money and what a review cannot promise",
      icon: "gen-limits",
      blocks: [
        {
          type: "p",
          text: "The idea that money matters belong on the north side has not been shown to bear on any particular business, and no independent, controlled study has found a direction changing cash flow or sales. The Vastu overview page covers the wider evidence.",
        },
        {
          type: "p",
          text: "What a layout can do is ordinary and worth having: staff who can find what they need, a customer who can reach the counter, a safe where the insurer wants it, a room where a quiet conversation can happen. Small studies of office workers point to a link between daylight and sleep, and between ventilation and scores on thinking tasks. That research concerns light and air and says nothing about compass direction, and she looks at light and air before she looks at direction.",
        },
        {
          type: "note",
          text: "She does not promise sales, profit, footfall or hiring results. A Vastu review is not financial advice, and when sales or cash are under strain the accounts and your accountant come first.",
        },
      ],
    },
    {
      id: "over-time",
      chip: "Over time",
      heading: "When the business keeps changing",
      icon: "work-retainer",
      blocks: [
        {
          type: "p",
          text: "A shop adds a second counter, an office takes the floor above, a clinic rebuilds its waiting area, and each change shifts something the first reading looked at. For a business that keeps changing, guidance can be spread over months instead of given in one visit, so that each decision is looked at as it comes. Some call that a retainer. What it covers is agreed with the team, and the page on ongoing Vastu guidance describes the arrangement.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she reads in a workplace",
    icon: "gen-listen",
    items: [
      { icon: "work-signage", text: "What a passer-by sees from the street, and what a visitor sees on stepping in" },
      { icon: "dir-southwest", text: "Where the owner sits, what that seat can see, and who has to pass it" },
      { icon: "dir-north", text: "Where money is handled and kept, and who can reach it" },
      { icon: "room-lighting", text: "How light, air, noise and crowding feel at an ordinary busy hour" },
      { icon: "astro-business-launch", text: "What has changed lately, and what is about to: a new branch, interiors, a move" },
      { icon: "brain-words", text: "The question you came with, in your own words" },
    ],
  },
  bring: {
    heading: "For a workplace review: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-plan", text: "A floor plan or a hand sketch with north marked, even if it is rough" },
      { icon: "gen-bring-photo", text: "Photographs of the entrance, the owner’s seat, the cash area and the main working floor" },
      { icon: "re-road-alignment", text: "The address, the floor, and which way the main door faces, if you know" },
      { icon: "gen-calendar", text: "Dates of any move or renovation, and what the lease says about alterations" },
      { icon: "gen-privacy", text: "Staff lists, payroll and accounts are not needed for a first look; the plan and photographs are enough to begin" },
    ],
  },
  faqs: [
    {
      q: "Can a rented office or shop be improved without structural changes?",
      a: "Yes, in part. Seating, the facing of desks, storage, lighting, colours, plants, the position of the safe and general order can all be arranged without touching a wall. Partitions, a new door or a changed signboard usually need the landlord’s consent, so ask in writing first. The table above shows what a tenancy usually settles. A review helps you pick, from what you are allowed to change, the changes worth the trouble.",
    },
    {
      q: "Does it matter which way my shop or office faces?",
      a: "Tradition has views, and they differ. Many modern consultants prefer a main door on the north, east or north-east side. Some call a south-facing door acceptable, while others rate a south-facing road poor. The old house text names no single best side: it describes each part of each side separately. No independent, controlled study of door direction and trade has been found. A shop front is usually set by the street and the footfall, and Narayani reads the door you have, what stands in front of it and what a visitor sees first.",
    },
    {
      q: "Where should the owner’s cabin be, and what if the owner sits with the team?",
      a: "Consultants give the south-west, with the owner facing north or east. Many owners have no cabin: a founder may sit among the team, or a shop owner may stand at the counter. The idea can then be kept in a smaller form, a seat that can see the working floor and the entrance, on the south-west side if the plan has one. Where the plan offers no such seat, she looks at what the seat can see, and the choice is yours.",
    },
    {
      q: "Can the layout of a business space affect cash flow and sales?",
      a: "A layout affects how easily customers find, reach and pay, and how well staff can work. Those are practical effects, and they can touch sales. A compass direction doing anything beyond that is a separate claim, and the section on sales and money above says where the evidence stands. Narayani promises neither cash flow nor sales. If a review ever sounds like a promise of either, that is a reason to ask more questions.",
    },
    {
      q: "How can I tell whether a stalled business needs a change of strategy or of space?",
      a: "Start with the business: pricing, costs, payment terms, hiring and the market. If those are sound and the trouble remains, a layout review is a reasonable next step, taken as one more way of looking at the problem and never as the explanation. A useful test is to name the mechanism: how would a change in the space change this number? If you cannot name one, the cause is probably elsewhere, and she will say so if she thinks it is.",
    },
    {
      q: "What should I check before moving an office or taking a new unit or floor?",
      a: "Lease terms, permitted use, approvals, access, light, parking, fire exits and cost come first, and they settle most choices of floor too, since no source gives a firm rule for which floor of a tower suits a workplace. Then ask how much of the unit is already set: orientation, the main door, lifts, shafts and toilets. A scaled plan with north marked lets Narayani read the unit before you commit.",
    },
    {
      q: "What if my interior designer’s plan and the Vastu advice disagree?",
      a: "It can happen, and it helps to ask what each is for. A designer works for how the space looks, feels and sells. A Vastu reading works from a tradition and, as Narayani offers it, never overrides safety, the lease or a layout the business needs in order to run. Share the designer’s plan with her, and look for the narrowest version of the disagreement: one wall, one desk, one door. A small change can sometimes meet both.",
    },
    {
      q: "How do I find the directions of my premises?",
      a: "Stand in the middle of the unit with a compass, away from steel beams, lifts and electrical equipment, which pull the needle, and mark north on the plan. A phone compass will do for a first look. Note whether the north you marked is magnetic or true, because the two can differ and consultants do not always say which they use.",
    },
  ],
  related: [
    "/services/vastu/real-estate-and-developers/",
    "/services/vastu/vastu-remedies/",
    "/services/vastu/directions-and-elements/",
    "/services/vastu/ongoing-guidance/",
  ],
  showFees: true,
};
