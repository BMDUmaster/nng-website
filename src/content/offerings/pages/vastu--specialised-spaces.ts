import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "specialised-spaces",
  title: "Vastu for specialised spaces",
  metaTitle: "Vastu for factories, hotels and hospitals",
  metaDescription: "How Vastu tradition reads factories, hotels, clinics, schools, temples, farms, gardens and cash and stock areas, with code and safety always first.",
  lead: "Factories, hotels, hospitals and schools have different needs. Narayani considers the space’s purpose, with safety and statutory requirements taking priority.",
  card: "When your space is a factory, hotel, hospital, school, temple, farm or garden.",
  icon: "page-specialised-spaces",
  group: "workplaces",
  covers: [
    "Factories and warehouses",
    "Hotels and restaurants",
    "Clinics and hospitals",
    "Schools and institutes",
    "Temples and meditation spaces",
    "Farms, farmhouses and gardens",
    "Cash and stock areas",
  ],
  art: { kind: "drawing", id: "hero-specialised-spaces" },
  enquiryTopic: "Vastu: a specialised space",
  cta: "Enquire about a specialised space",
  intro: [
    {
      type: "p",
      text: "The classical building texts deal with towns, temples and houses, and nothing found in them covers a factory, a hotel or a hospital. For these, modern consultants carry the same few ideas across: the eight directions and their guardians, the five elements, the open centre. Narayani reads a special space in that light, and says which rules are old and which are modern additions.",
    },
    {
      type: "p",
      text: "Each of these spaces answers first to something other than Vastu: safety law and the shape of a process, clinical need, the safety of children, a temple’s own canon, an insurer’s conditions. Her reading works inside those limits.",
    },
    {
      type: "p",
      text: "Each kind of space has its own section below, with what tradition says, what she looks at and what is useful to bring.",
    },
  ],
  sections: [
    {
      id: "factories",
      chip: "Factories and warehouses",
      heading: "Factories and warehouses",
      icon: "space-industrial",
      blocks: [
        {
          type: "p",
          text: "No old text found covers a factory, so the first sketch comes from the elements. Modern guides pair fire with the south-east, water with the north-east, earth with the south-west and air with the north-west (the page on directions and elements sets out the scheme). A consultant working from that scheme would read furnaces, boilers and canteen kitchens against the fire side, and tanks and drinking water against the water side. Those conclusions are the consultant’s own extension, drawn from the elements.",
        },
        {
          type: "p",
          text: "Her reading follows the process. Materials in, goods out, heat, noise, fumes and water each follow a flow that the engineers set and the factory rules govern. Narayani asks where the owner or plant head sits, where the main gate and the shop-floor entrances fall, and how the canteen and stores relate to the line. A rented shed or warehouse is read the same way, with roller doors and loading bays taken as already set. To bring: a block plan with north marked, a line on how material moves, and photographs of the gate, the floor and the stores. Process secrets are not needed.",
        },
      ],
    },
    {
      id: "hotels",
      chip: "Hotels and restaurants",
      heading: "Hotels and restaurants",
      icon: "space-hospitality",
      blocks: [
        {
          type: "p",
          text: "An old house text puts the kitchen in the south-east, and where a consultant extends that to a hotel or restaurant, a commercial kitchen is read the same way. The fire-and-water caution of a home kitchen follows it: the stove and the sink are kept apart, and out of one line.",
        },
        {
          type: "p",
          text: "What she looks at is what a guest or a diner meets: the arrival and the lobby, the line from the door to reception, where the billing desk and the manager sit, how the kitchen relates to the dining room and to waste, and where smoke and smell go. Fire exits and the licensing rules for kitchens and rooms are not negotiable. A good start is a floor plan for each level, a sketch of the kitchen, photographs of the entrance and the lobby, and a note of any renovation planned.",
        },
      ],
    },
    {
      id: "clinics",
      chip: "Clinics and hospitals",
      heading: "Clinics, hospitals and wellness spaces",
      icon: "space-healing",
      blocks: [
        {
          type: "p",
          text: "Clinical and regulatory rules decide the layout of a clinic or a hospital, and Vastu does not reopen them. Operating theatres, wards, laboratories, imaging rooms and infection-control zones follow clinical planning. What is left is the part of a building that anyone could arrange: the entrance, reception, waiting area, administrative offices, the practitioner’s desk and the quiet rooms. No old text covers hospitals.",
        },
        {
          type: "p",
          text: "What she asks about is how a patient is received and what the wait is like: privacy at the desk, light, air, somewhere to sit, a route that does not cross another patient’s path. A wellness centre or a yoga hall is read as a quiet public room in the same way. This is not medical advice and carries no claim about health or recovery, and it does not stand in for clinical planning or safety rules. Plans and photographs are enough to send.",
        },
      ],
    },
    {
      id: "schools",
      chip: "Schools and institutes",
      heading: "Schools, colleges and institutes",
      icon: "space-educational",
      blocks: [
        {
          type: "p",
          text: "No old text found names schools. What circulates is the home’s study rules carried across: students facing north or east at a desk, and the head of the institution in the south-west, as for any owner. No controlled test of study-desk direction has been found. Whatever the compass says, a classroom needs daylight, fresh air, quiet and an unobstructed view of the board, and she asks about those first.",
        },
        {
          type: "p",
          text: "She reads the plan along a child’s day: the gate and the route from it to the classrooms, the assembly ground and its safety, the principal’s and the office’s seats, the library and laboratories, and how parents and buses arrive. Child-safety rules, the fire code and the norms of the education authority come before any Vastu preference. Bring floor plans, photographs of the gate and a classroom, and a note of the age range and the number of floors.",
        },
      ],
    },
    {
      id: "temples",
      chip: "Temples and meditation",
      heading: "Temples and meditation spaces",
      icon: "space-spiritual",
      blocks: [
        {
          type: "p",
          text: "Temple building has its own treatises and its own specialists, and a temple works to the tradition it was built in. Narayani does not plan sanctums, and she does not override a temple’s priests and builders. Where a trust wants an outside view of the wider site, such as the approach and the open ground, she reads it as a place where people gather.",
        },
        {
          type: "p",
          text: "A meditation space is a room where you can sit undisturbed. She asks about quiet, light, air, a lamp or incense used safely, and where you sit and face. For a prayer or meditation room the modern guides’ usual answer is the north-east, with north, east or west allowed when that corner is not available, and no study ties the spot to any result. As with a home mandir, she also asks what is kept in the space. A sketch of the room and a photograph or two are enough to bring. For a temple project, tell her which tradition and which advisers are already involved, so that her questions fit alongside theirs.",
        },
      ],
    },
    {
      id: "farms",
      chip: "Farms and farmhouses",
      heading: "Farms and farmhouses",
      icon: "space-agricultural",
      blocks: [
        {
          type: "p",
          text: "On a farm the water decides much, and the sources differ about it. The old house text counts the north and north-east as good directions for water and the others as poor. Modern lists are looser: one allows a borewell on the north-east, east, north or west side, and a raised tank on the south-west or west. Where groundwater lies depends on the geology. Slope shows the same split: the old text asks for ground at one level, and modern guides want the south and west higher.",
        },
        {
          type: "p",
          text: "On the land she reads the gate and the approach road, the farmhouse’s place on the plot, the water points, the storage for grain and implements, the sheds, and how the day’s work moves from field to store to road. The farmhouse itself is read like a home. A farmer’s soil test, a hydrogeologist and the local agriculture office come first. Bring a site sketch that shows north, the water points and the slope, photographs of the approach and the buildings, and any soil or water test.",
        },
      ],
    },
    {
      id: "gardens",
      chip: "Gardens and landscape",
      heading: "Gardens and landscape",
      icon: "space-landscape",
      blocks: [
        {
          type: "p",
          text: "No old text found sets out rules for gardens as such. In the old house text a tree, well or pillar standing close in front of a door counts against it, unless it is far enough off, and modern consultants extend that to planting near an entrance. They place water features toward the north-east or north, the side associated with water. Beyond that the guides vary.",
        },
        {
          type: "p",
          text: "She looks at what a tall tree does to the morning light on the east side, where roots meet foundations and drains, where a fountain stands and whether a pond is safe for children, and how paths join the gate to the door. Helpful to bring: a site plan with north marked, photographs of the existing trees and beds, and any water feature you plan.",
        },
      ],
    },
    {
      id: "cash-and-stock",
      chip: "Cash and stock areas",
      heading: "Areas where cash and stock are kept",
      icon: "space-wealth",
      blocks: [
        {
          type: "p",
          text: "This covers strongrooms and vaults, large stock rooms, jewellery and bullion stock, and the offices of finance firms. The ideas are the ones given for an office, which the page on offices and shops sets out: the north for money matters and Kubera, the south-west for weight and steadiness, which is why some consultants place a safe there. A stock room of any size is read like a store, on the south-west or south side that consultants link with weight.",
        },
        {
          type: "p",
          text: "What she adds are questions about people and access: who can reach the room, how many doors it has, what can be seen from the owner’s or manager’s seat, how goods move in and out. Insurers, regulators and security specialists set the specification for vaults and strongrooms, and their requirements decide. No placement of a safe or a stock room has been shown to change sales, returns or luck, and this is not financial advice. Bring the plan of the room and the floor around it, and a note of who needs access.",
        },
      ],
    },
    {
      id: "limits",
      chip: "Limits",
      heading: "Limits that apply to every space here",
      icon: "gen-limits",
      blocks: [
        {
          type: "p",
          text: "Code and safety always come first: fire, structural, electrical, environmental, licensing, accessibility and child-safety rules, and any condition set by an insurer or a regulator. Where Vastu and a rule collide, the rule stands, and the plan is reworked within it. She does not ask you to change anything that the law, the engineer or the clinician says to leave. No claim is made here about health, recovery, learning, occupancy, sales or profit.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she looks at in any of these spaces",
    icon: "gen-listen",
    items: [
      { icon: "gen-professional", text: "What the place is for, and who is in it on an ordinary day" },
      { icon: "room-main-entrance", text: "The gate or door, and the route from it to the heart of the building" },
      { icon: "re-fire-water", text: "Where heat, water and heavy equipment sit" },
      { icon: "work-owner-cabin", text: "Where the person in charge sits, and what is in view from there" },
      { icon: "re-approvals", text: "Which rules, licences and safety conditions already apply" },
      { icon: "re-non-demolition", text: "What cannot be changed, and what can" },
    ],
  },
  bring: {
    heading: "What to bring for any of these spaces",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-plan", text: "A plan or sketch of the site and of each floor, with north marked" },
      { icon: "gen-bring-photo", text: "Photographs of the main entrance, the working areas and what surrounds the site" },
      { icon: "re-road-alignment", text: "Where the place is, and which way its main entrance faces, if that is known" },
      { icon: "re-architect", text: "A short note of the rules, licences and advisers already involved" },
      { icon: "gen-privacy", text: "Names and records of students, staff or guests are not needed in a first enquiry" },
    ],
  },
  faqs: [
    {
      q: "How do I know whether my kind of space is one she can take on?",
      a: "The team confirms it once you describe the space and share a plan. A few lines help: what the place is for, its size and stage, and what you would like looked at. Some parts of some buildings, such as a temple’s sanctum or an operating theatre, follow canons and clinical rules that sit outside a Vastu reading, and she says so when a question falls there.",
    },
    {
      q: "Can Vastu make a clinic or hospital better for patients?",
      a: "No claim is made that it can. A calm reception, privacy at the desk, daylight and fresh air are good for anyone, and she reads those. Whether a compass direction changes anyone’s health has not been shown, and this is not medical advice. Clinical planning, infection control and safety rules come first, and her reading never asks for any of them to be relaxed.",
    },
    {
      q: "What if the water source on my farm is already in a direction the guides do not prefer?",
      a: "The ground put the water where it is, and the guides themselves differ, as the section on farms shows. She looks at what can still change, such as the tank, the drainage, the gate and the storage, and tells you honestly what cannot move. A farm is also run by soil, water and seasons, which she does not claim to read.",
    },
    {
      q: "What if my hotel’s rooms face every direction?",
      a: "They usually do. Rooms along a corridor face opposite ways, so no single bed direction can suit all of them, and consultants disagree anyway about which way a sleeper’s head should point. Narayani looks at what a guest meets instead: the lobby, the corridor, the room’s entrance, the desk and the light. Where a few rooms or the owner’s own suite can follow a chosen facing, that can be considered. No claim is made about occupancy or ratings.",
    },
    {
      q: "What if our temple’s priests say something different from a Vastu consultant?",
      a: "The temple’s own tradition leads. Its priests and builders know the canon the temple is built to, and her questions work alongside it. Where a question falls outside it, such as a car park, a meditation hall, the approach or the open ground, she can offer a view. If two readings differ, ask each for its reason and its source. The decision belongs to the trust.",
    },
    {
      q: "What is the Vastu Purusha mandala, and does it apply to modern buildings?",
      a: "It is a diagram from the building tradition: a square grid, often of 64 or 81 cells, with a deity assigned to each cell, and a mythic being, the Vastu Purusha, said to lie across it with Brahma at the centre. Scholars disagree about how far it shaped real plans: one study finds almost no textual evidence that it was used to lay out buildings, while another reads it as a ritual and planning grid in temple building. Modern guides echo it when they ask for an open centre.",
    },
    {
      q: "Can a space I am still designing be read, or only a finished one?",
      a: "A design in progress is the easiest to read, because a plan can still change. For a finished space, the options are the ones that need no demolition: arrangement, interiors, planting, lighting and signage. Either way, send what exists: a plan with north marked, photographs, and a note of what is fixed. For a large project, the page on real estate and developers covers the stages.",
    },
    {
      q: "What if my space is a mix, such as a clinic at home or a farmhouse with a shop?",
      a: "Read each part according to its use, then look at where the parts meet: the shared door, the passage, the wall between. A clinic at home, for example, may need its own entrance and a waiting place for privacy before any direction is considered, and the clinic’s licensing rules apply to its part. Narayani reads the family side as a home and the working side as a workplace, and asks how people move between them.",
    },
  ],
  related: [
    "/services/vastu/office-and-shop/",
    "/services/vastu/real-estate-and-developers/",
    "/services/vastu/directions-and-elements/",
  ],
  showFees: true,
};
