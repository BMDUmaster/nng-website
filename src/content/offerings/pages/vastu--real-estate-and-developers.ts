import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "vastu",
  slug: "real-estate-and-developers",
  title: "Vastulogy for real estate and developers",
  metaTitle: "Vastulogy for developers and real estate",
  metaDescription: "Vastulogy at project scale for builders and developers: reading the site, placing towers, gates and amenities, and keeping the building code first.",
  lead: "A project is largely decided before it is sold: on the plot, in the master plan, at approval. Narayani brings the Vastulogy question into that conversation early, alongside your architect and inside the building code.",
  card: "When a builder, architect or institution wants Vastulogy considered at the planning stage.",
  icon: "page-real-estate-and-developers",
  group: "workplaces",
  covers: [
    "Site, soil and road reading",
    "Towers, wings, gates, boundary",
    "Amenities, parking, utilities",
    "Fire and water balance",
    "Floors, lobbies and circulation",
    "What a developer can discuss",
    "Working inside the building code",
  ],
  art: { kind: "plan", variant: "township" },
  enquiryTopic: "Vastulogy: a real estate project",
  cta: "Enquire about Vastulogy for a project",
  intro: [
    {
      type: "p",
      text: "Real estate Vastulogy is Vastulogy at the scale of a plot, a campus or a tower. This page is for builders, architects and developers, and for hotel groups, hospitals and institutions planning a new campus. It sets out the questions Vastulogy raises at project scale, what a conversation with Narayani can cover, and where the building code and your design team stay in charge.",
    },
    {
      type: "p",
      text: "The old texts do describe sites and towns. The sixth-century *Brihat Samhita*, for one, has a chapter on house building that covers how to read a plot, where doors go and how water is handled. No old text plans a tall tower. How these ideas carry across to a township, a high-rise or a hospital campus comes from modern consultants, and it varies from one to the next. Narayani says where an idea comes from and where it is an extension.",
    },
    {
      type: "p",
      text: "How she works on a project is agreed with the team. Nothing on this page is a fixed package, and nothing in it promises a price, a sales pace or a timeline.",
    },
  ],
  sections: [
    {
      id: "who-for",
      chip: "Who it is for",
      heading: "Builders, architects, developers and institutions",
      icon: "group-workplaces",
      blocks: [
        {
          type: "terms",
          items: [
            {
              term: "Builders",
              text: "A place to take the Vastulogy question once, early, instead of at every site visit and every sales meeting.",
              icon: "re-builder",
            },
            {
              term: "Architects",
              text: "A second reading of a plan from the Vastulogy side, in a form that can be accepted, adapted or set aside.",
              icon: "re-architect",
            },
            {
              term: "Real estate developers",
              text: "A township, a tower or a run of launches, with the Vastulogy view kept in step with each phase.",
              icon: "re-developer",
            },
            {
              term: "Hotel groups and hospitals",
              text: "Large buildings where licensing, fire and clinical rules come first. The page on specialised spaces sets out how each kind is read.",
              icon: "re-hotel-hospital",
            },
            {
              term: "Institutions",
              text: "Colleges, schools, trusts and companies planning new buildings across a campus.",
              icon: "space-educational",
            },
          ],
        },
      ],
    },
    {
      id: "planning",
      chip: "Planning stage",
      heading: "What planning-stage coverage looks like",
      icon: "dir-centre",
      blocks: [
        {
          type: "p",
          text: "A project-scale reading has ten parts, taken in the order a site is usually planned, from the land to the lobby. The tradition has more to say about some than about others, and the table says which.",
        },
        {
          type: "table",
          head: ["On the project", "What she reads, and what tradition says"],
          rows: [
            [
              "Land reading",
              "Shape, slope, orientation and neighbours, and which north the drawings use, true or magnetic. The old house text prefers ground at one level. Modern consultants prefer a square, or a rectangle up to twice as long as it is wide, with the south and west higher. On slope the two disagree, and she says so.",
            ],
            [
              "Soil and site history",
              "The old text describes tests with a pit, water and a lamp, and modern guides add drainage and sprouting tests. A project relies on an engineer’s geotechnical investigation, and that decides. She asks what stood on the site before and where water gathers after heavy rain.",
            ],
            [
              "Road alignment",
              "Consultants like a road on the north or east and rate a road that ends at the plot, a T-junction, as poor. The old text counts a door that faces a road, tree, well or pillar close by as poor unless it is far off. Road plans and access rules decide what is possible.",
            ],
            [
              "Towers and wings",
              "No source has been found that sets a rule for placing towers on a plot. Whatever consultants offer is an extension of the plot rules: the centre of the plan, the *Brahmasthan*, kept open, and in modern guides the south and west higher. Approved limits come first, and she asks what each building’s mass does to light and air for the others.",
            ],
            [
              "Gate and boundary",
              "A project gate is read like a main door. Most modern guides prefer the north, east or north-east side, and the old text asks what stands in front of it. The boundary follows the plot lines, so the land reading covers its shape, and she looks at what a wall hides or frames. Service and emergency gates are for the traffic and fire planners first.",
            ],
            [
              "Amenity zoning",
              "Clubhouse, pool, courts, garden, play areas. Reasoning from the elements, a pool or fountain would go toward the north-east or north, the water side of a plan, and modern guides keep the centre open. Supervision, safety and shade decide the rest.",
            ],
            [
              "Fire and water balance",
              "Consultants pair the south-east with fire and the north-east with water, and some ask that stove and sink not sit side by side or in line (the page on directions and elements explains the pairing). On a large site that extends to keeping heat sources such as kitchens and boiler rooms apart from tanks and pools. The engineer’s fire-safety distances decide the spacing.",
            ],
            [
              "Parking and utilities",
              "Guides give water its own corners: one puts a borewell toward the north-east or north and an overhead tank toward the south-west or west. Ramps, basements, transformer rooms and meters follow traffic, fire and utility rules; she reads where they fall against the plan.",
            ],
            [
              "Floor-wise directions",
              "No source has been found that gives floor-wise rules. Every floor plate shares one compass, so she reads the typical floor, which the others repeat, and the corner units, which have two exposures. The tower’s orientation is settled at approval. What stays open is how units sit on a plate, and what a buyer can arrange inside one.",
            ],
            [
              "Lobby and circulation",
              "The ground-floor lobby is the building’s main door: where it faces, how people pass from gate to lifts, where security sits. Modern guides keep the centre open and the staircase out of it, while a tower usually builds its lifts and stairs around a central core. She raises that with the architect, who knows what the structure allows.",
            ],
          ],
          icons: [
            "re-land-reading",
            "re-soil-history",
            "re-road-alignment",
            "re-tower-wing",
            "re-gate-boundary",
            "re-amenity-zones",
            "re-fire-water",
            "re-parking-utilities",
            "re-floor-directions",
            "re-lobby-flow",
          ],
        },
      ],
    },
    {
      id: "stages",
      chip: "When to begin",
      heading: "Where in a project the question is best raised",
      icon: "gen-time",
      blocks: [
        {
          type: "p",
          text: "A change costs least on paper, so the question is easier to raise early. This is the order in which a project meets it.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Choosing the plot",
              text: "The cheapest time to read a site is before it is bought. Shape, road, slope, soil history and neighbouring uses can be looked at from drawings and photographs, beside the legal and engineering checks, which come first.",
              icon: "re-plot-selection",
            },
            {
              title: "The master plan",
              text: "Where towers, gates, open space and amenities fall in relation to one another. Most of the ten topics are decided here, and a change at this stage is a revised drawing.",
              icon: "room-courtyard",
            },
            {
              title: "Before approvals are filed",
              text: "A plan the authority has sanctioned can be changed only by going back to it. A question raised before filing costs a revision of drawings. After sanction it may mean a fresh round of approval.",
              icon: "re-approvals",
            },
            {
              title: "Ground-breaking",
              text: "*Bhoomi Pujan*, the ground-worship ceremony, and the laying of a foundation stone are set with a priest or a Jyotish practitioner. They belong to custom. Design, safety and approvals run separately, and nothing found tests what the ceremony changes.",
              icon: "re-foundation-stone",
            },
            {
              title: "Each phase and launch",
              text: "A second tower, a new wing or an added amenity block changes what the first reading assumed. A look at each phase keeps the earlier thinking attached to the later drawings.",
              icon: "re-phased-build",
            },
            {
              title: "After handover",
              text: "A finished building cannot be turned. What remains are arrangements that need no demolition: interiors in common areas, planting, lighting and signage. She says plainly what can no longer change.",
              icon: "re-non-demolition",
            },
          ],
        },
      ],
    },
    {
      id: "team",
      chip: "With your team",
      heading: "Working with architects, engineers and consultants",
      icon: "astro-partnership",
      blocks: [
        {
          type: "p",
          text: "Narayani does not design buildings and does not instruct an architect. Her part is a second reading of the plan from the Vastulogy side, offered as questions and options. Where a Vastulogy preference collides with the work of anyone listed below, theirs stands.",
        },
        {
          type: "list",
          title: "Who keeps what",
          items: [
            "The architect: the design and its compliance.",
            "Structural and services engineers: safety, loads, fire, power and water systems.",
            "Legal and regulatory advisers: title, approvals and registration.",
            "The developer: the decisions, the budget and the programme.",
            "Narayani: a Vastulogy reading, advice, and the reasoning behind it.",
          ],
        },
        {
          type: "p",
          text: "A practical way to run it is for one person on your side to gather her comments and take them to the architect, so that the design team hears one list. An option the architect cannot accommodate is dropped, and she looks at what else the plan allows.",
        },
      ],
    },
    {
      id: "code",
      chip: "Approvals and code",
      heading: "Vastulogy and the building code",
      icon: "gen-limits",
      blocks: [
        {
          type: "p",
          text: "Vastulogy never overrides the building code. Setbacks, height and density limits, fire access and exits, parking and stair widths, accessibility and structural safety are set by rules, and by the engineers who answer for them. A Vastulogy preference lives inside what those rules leave open: which side the main gate takes, where a tank sits, how units are arranged on a floor, which colours and materials are used.",
        },
        {
          type: "p",
          text: "Where the code leaves room, the two sit together. Where they conflict, the code wins, and the Vastulogy question changes to the next best arrangement the code allows. The plan a developer files is the plan the authority sanctions, and a change afterwards means a revision, which is the practical case for raising Vastulogy before filing.",
        },
        {
          type: "note",
          text: "This is general background, not legal or engineering advice. Registration under the Real Estate (Regulation and Development) Act, 2016, where it applies, and the project details a promoter must publish are the developer’s legal duties, and your lawyer should see any wording that describes a project as following Vastulogy.",
        },
      ],
    },
    {
      id: "discuss",
      chip: "What to discuss",
      heading: "What a developer can expect to discuss",
      icon: "gen-explain",
      blocks: [
        {
          type: "p",
          text: "These are the things a developer can ask to talk through at the start. What is agreed, in what form and by when is settled with the team. Nothing below is a promise of a particular deliverable.",
        },
        {
          type: "terms",
          items: [
            {
              term: "A written report on the project",
              text: "Whether the reading is set down in writing, and in what form: what the site and plans show, where tradition would prefer something else, and the reasoning. The aim is a document an architect can act on, with the reasons visible, so that each suggestion can be accepted, adapted or set aside.",
              icon: "re-report",
            },
            {
              term: "Direction overlays on the plans",
              text: "The compass drawn over your plans, so each comment sits beside the room or area it concerns.",
              icon: "re-overlay",
            },
            {
              term: "A view from the buyer’s side",
              text: "The questions a buyer may ask about Vastulogy in a home like yours: which way the main door faces, where the kitchen and prayer corner sit, what can still be arranged after purchase. It can help a sales team answer plainly and without overclaiming.",
              icon: "re-buyer-view",
            },
            {
              term: "Colour and material notes",
              text: "What consultants suggest about colour for the facade, lobbies and interiors, and about materials. These are matters of taste and budget as well, and she offers them as options.",
              icon: "re-materials",
            },
            {
              term: "Periodic review",
              text: "A return to the project at agreed points, as phases launch or once a year, to check expansions and adjustments against the first reading. The page on ongoing Vastulogy guidance describes how that works.",
              icon: "re-annual-review",
            },
          ],
        },
      ],
    },
  ],
  lookAt: {
    heading: "What she reads in a project’s plans",
    icon: "gen-listen",
    items: [
      { icon: "element-earth", text: "The plot as it is: shape, slope, road and neighbours" },
      { icon: "element-space", text: "Where each building sits, and where the open space falls around it" },
      { icon: "room-main-entrance", text: "The gate, the lobby and the route a person takes between them" },
      { icon: "element-water", text: "Where water sits: tanks, pools and borewells" },
      { icon: "element-fire", text: "Where heat and fire-related services sit, and how far they are from the water" },
      { icon: "gen-homeowner", text: "What a buyer will see, and what they can still arrange for themselves" },
    ],
  },
  bring: {
    heading: "What helps before a project review",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-plan", text: "A site plan or survey drawing with north marked and the roads shown" },
      { icon: "gen-bring-photo", text: "Photographs of the site and its surroundings, taken from each side" },
      { icon: "habit-evidence", text: "Any soil or geotechnical investigation, if one has been done" },
      { icon: "gen-professional", text: "The stage you are at, the dates that matter, and the architect and consultants already engaged" },
      { icon: "gen-privacy", text: "Contracts, buyer lists and financial statements are not needed in a first enquiry" },
    ],
  },
  faqs: [
    {
      q: "Does Vastulogy affect buyer interest or resale value?",
      a: "Some buyers in India ask whether a home follows Vastulogy, so a sales team meets the question whether or not the developer shares the interest. A survey reported in the press says many buyers prefer such homes, but it showed no method, so it proves little. Whether following Vastulogy changes buyer interest, price or resale value has not been shown. Narayani does not claim that a Vastulogy-planned project sells faster or for more, and a developer should not claim it either. A sales team is better served by describing the layout accurately.",
    },
    {
      q: "Can a project be certified as Vastulogy-compliant?",
      a: "Narayani does not issue a certificate, and nothing in the approval process certifies one. Consultants differ on the rules, so a blanket label means whatever its author intends, and a brochure that claims more than it can support can fall foul of the consumer-protection rules on advertising. It is safer, and more useful to a buyer, to say what is true and specific: the main gate faces east, the prayer corner is in the north-east of each flat, the kitchens are on the south-east side. Your lawyer should see the wording.",
    },
    {
      q: "Does the approving authority look at Vastulogy, and is it a legal requirement?",
      a: "Approval is about the building code and planning rules: setbacks, height, density, fire and structural safety. Vastulogy is a voluntary design choice and not a legal requirement, and an approval does not test for it. The authority sees the plan, which is why a Vastulogy-driven change to a filed plan goes through the same revision process as any other change. This is general background, not legal advice.",
    },
    {
      q: "Is annual or ongoing support available for a project?",
      a: "It can be agreed with the team. A project that opens in phases, adds towers or changes its amenities can have its reading looked at again at each stage, or once a year, so that expansions and adjustments are checked against the first one. How often, and for which phases, is settled with the team. The page on ongoing Vastulogy guidance describes what such an arrangement covers.",
    },
    {
      q: "Is it too late once construction has begun?",
      a: "Not for everything, but the options narrow with each stage. Before the structure rises, towers, gates and open space can still move on paper. Once it stands, orientation, floor plates and the structural core are settled, and what remains are interiors, planting, lighting, signage, the sales gallery and how units are arranged. Narayani tells you which comments can still be acted on. Anything structural goes to your engineer.",
    },
    {
      q: "What if two Vastulogy consultants disagree about the same plan?",
      a: "It happens, because the sources themselves differ. Consultants give the kitchen the south-east or the east-south-east, and put a borewell in different corners. Ask each for the reason and the source behind every point, and for what a change would cost. A suggestion that cannot be explained can be left. She will tell you whether a given point rests on an old text or on a modern consultant’s convention, and the decision stays with you and your architect.",
    },
    {
      q: "Where do we begin with a project?",
      a: "With a short account of the project: what it is, which stage it has reached and the one or two questions you most want looked at. A site plan with north marked helps, and a sketch is enough if that is all there is. The team and Narayani then agree what the review will cover, in what form, and who on your side receives her comments.",
    },
    {
      q: "What happens when the architect revises the plan after the Vastulogy reading?",
      a: "Plans change, and a reading is tied to the plan it was made on. A revision that moves a gate, a tower or a core is worth sending back for a second look, and one that changes only finishes may not be. The useful question is what the change does to the earlier comments. For a project that revises often, an ongoing arrangement can be agreed for this purpose.",
    },
  ],
  related: [
    "/services/vastu/property-and-land/",
    "/services/vastu/specialised-spaces/",
    "/services/vastu/office-and-shop/",
    "/services/vastu/ongoing-guidance/",
  ],
  showFees: true,
};
