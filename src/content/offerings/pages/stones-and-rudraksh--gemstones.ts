import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "stones-and-rudraksh",
  slug: "gemstones",
  title: "Gemstones, the nine ratna of Jyotish",
  metaTitle: "The nine Jyotish gemstones (navaratna)",
  metaDescription: "The nine ratna and their planets, how a stone is chosen from the chart, treated and lab-grown stones, laboratory reports, wearing customs and care.",
  lead: "Explore the nine gemstone associations of Jyotish and the customs around wearing them. Check identity, treatments and purchase terms separately from any promised effect.",
  card: "When you want to know which stone goes with which planet, and what to check first.",
  icon: "page-gemstones",
  group: "wearing",
  covers: [
    "The nine ratna and planets",
    "Uparatna, the substitute stones",
    "Choosing from the chart",
    "Finger, metal, day and weight",
    "Natural, treated, lab-grown",
    "What a lab report shows",
    "Care, and cautions",
  ],
  art: { kind: "drawing", id: "hero-gemstones" },
  enquiryTopic: "Gemstones",
  cta: "Enquire about gemstones",
  intro: [
    {
      type: "p",
      text: "Jyotish pairs ruby with the Sun, pearl with the Moon, red coral with Mars, emerald with Mercury, yellow sapphire with Jupiter, diamond with Venus, blue sapphire with Saturn, hessonite with Rahu and cat’s eye with Ketu. Together they are the navaratna, the nine gems, and the catalogue on this page gives each its own card. Rahu and Ketu are the two points where the Moon’s orbit crosses the Sun’s apparent path, and Jyotish counts them among the nine grahas.",
    },
    {
      type: "p",
      text: "Beyond the pairings, the rules about finger, metal, day and weight are customs, and nearly every guide answers them differently. This page is general background drawn from published sources. It sets out the common answers and where they part, so that you can put better questions to a seller or a practitioner. It also covers how the trade names heating, oil and laboratory growth, because those words decide what you are actually buying.",
    },
  ],
  sections: [
    {
      id: "origins",
      chip: "Where they come from",
      heading: "Where the nine come from, and what is disputed",
      icon: "numc-vedic",
      blocks: [
        {
          type: "p",
          text: "The pairing dates from the medieval period. The Jataka Parijata, a Sanskrit text of uncertain date from around the fifteenth century, names ruby for the Sun, pearl for the Moon, coral for Mars, emerald for Mercury, pushparaga for Jupiter, diamond for Venus and blue sapphire for Saturn, then gomeda and vaidurya for the other two. GIA, the gem institute, puts the pairing itself earlier, at about the tenth century. The older gem chapters of the Garuda Purana and the Brihat Samhita deal with where gems come from and how to test them. Neither gives nine stones for nine planets.",
        },
        {
          type: "p",
          text: "The names are not settled either. For Jupiter, Ayurvedic texts name topaz as pushparaga, while the trade sells yellow sapphire under that name. For Rahu, old texts name zircon as gomeda, and the trade sells hessonite. For Venus, some lists substitute white sapphire for diamond. If a seller and a guide name the same stone, check which mineral each one means. Some guides also give stones to Uranus, Neptune or Pluto, which Jyotish does not use. That is Western practice borrowed in.",
        },
        {
          type: "p",
          text: "This is a tradition, and no test of it was found. No study found shows that a stone linked with a planet does anything for the person who wears it. The pairings are given here as tradition, and this page makes no claim about what a stone does.",
        },
      ],
    },
    {
      id: "substitutes",
      chip: "Substitutes",
      heading: "Uparatna: what stands in for the nine",
      icon: "gem-substitutes",
      blocks: [
        {
          type: "p",
          text: "Uparatna has two meanings. In the classical Ayurvedic lists it means secondary gems, such as moonstone, sunstone, lapis lazuli, garnet and turquoise. In modern trade it means a cheaper stand-in for a principal stone, so that red garnet or red spinel, for example, is offered in place of ruby.",
        },
        {
          type: "p",
          text: "The modern lists are long, and they differ from one source to the next. The lists read for this page cite no classical text for their pairings. One retailer says substitutes work more weakly and should be larger, yet still advises the original for Rahu and Ketu. Another calls them secondary by definition. Nothing settles it, because nothing shows an effect from an original either. Each card in the catalogue names the substitutes most often listed for that stone.",
        },
      ],
    },
    {
      id: "choosing",
      chip: "Choosing",
      heading: "How a stone is chosen, and why the sign is not enough",
      icon: "gen-explain",
      blocks: [
        {
          type: "p",
          text: "In Jyotish the choice begins with the whole birth chart, and the Sun sign alone does not decide it. Practitioners who choose from the chart commonly start with the planet that rules the rising sign, add the planets that favour the person and the period now running, and set aside the stones of the planets that rule the 6th, 8th and 12th houses. These are customs of practice, and they are weighed differently from one practitioner to the next.",
        },
        {
          type: "p",
          text: "Take someone with Gemini rising. Mercury rules the rising sign, so many guides start with emerald. Other planets are less clear, because several rule one house on the list to avoid and one that is not, as the table shows.",
        },
        {
          type: "table",
          head: ["Planet and stone", "Houses it rules", "What the common rule makes of it"],
          rows: [
            ["Mercury, emerald", "1st and 4th", "Rules the rising sign, so usually the first planet considered."],
            ["Venus, diamond", "5th and 12th", "The 5th is a house of learning and children, the 12th one of expenses and letting go. The 12th is on the list to avoid; the 5th is not."],
            ["Saturn, blue sapphire", "8th and 9th", "The 8th is on the list to avoid, the 9th is not."],
            ["Mars, red coral", "6th and 11th", "The 6th is on the list to avoid, while the 11th, a house of gains, is not."],
            ["Jupiter, yellow sapphire", "7th and 10th", "Neither house is on the list to avoid."],
            ["Moon, pearl", "2nd", "Not on the list to avoid."],
            ["Sun, ruby", "3rd", "Not on the list to avoid."],
          ],
          icons: ["graha-mercury", "graha-venus", "graha-saturn", "graha-mars", "graha-jupiter", "graha-moon", "graha-sun"],
        },
        {
          type: "p",
          text: "So even the first step has no single answer. Sources also differ on what to weigh at all: the whole chart, the needs of the present, or a Western month list. A different chart gives a different table. That is why a list by Sun sign, or a stone chosen by birth month, tells you very little about your own chart.",
        },
        {
          type: "p",
          text: "No test of any method of choosing a stone was found. Tests of chart reading in general are summarised on the Astrology page. Ask the person recommending a stone why this planet, why this stone and what else was considered. The answer is the substance of the advice.",
        },
      ],
    },
    {
      id: "customs",
      chip: "Finger, metal, day",
      heading: "Finger, metal and day: the customs, and where guides differ",
      icon: "gem-finger",
      blocks: [
        {
          type: "p",
          text: "No guide read for this page points to a verse for these conventions. They come from practitioners and sellers. The table gives the commonest answer for each stone, with the places where guides part.",
        },
        {
          type: "table",
          head: ["Stone", "Finger", "Metal", "Day to begin"],
          rows: [
            ["Ruby", "Ring finger", "Gold, sometimes copper", "Sunday"],
            ["Pearl", "Little finger (the ring finger in one guide)", "Silver", "Monday"],
            ["Red coral", "Ring finger", "Gold or copper", "Tuesday"],
            ["Emerald", "Little finger", "Gold or silver, depending on the guide", "Wednesday"],
            ["Yellow sapphire", "Index finger", "Gold", "Thursday"],
            ["Diamond", "Middle finger (ring finger, little finger or thumb in other guides)", "Platinum, silver or gold, depending on the guide", "Friday"],
            ["Blue sapphire", "Middle finger", "Silver, iron or panchdhatu; gold in two guides", "Saturday"],
            ["Hessonite", "Middle finger (ring finger in one guide)", "Silver or panchdhatu", "Saturday (Wednesday in one guide)"],
            ["Cat’s eye", "Middle, ring or little finger", "Silver; gold or panchdhatu in other guides", "Tuesday or Saturday (Wednesday in one guide)"],
          ],
          icons: ["gem-ruby", "gem-pearl", "gem-red-coral", "gem-emerald", "gem-yellow-sapphire", "gem-diamond", "gem-blue-sapphire", "gem-hessonite", "gem-cats-eye"],
        },
        {
          type: "p",
          text: "Panchdhatu is a traditional alloy of five metals. Most guides say the right hand, though one gives the left for women with some stones, and another gives the left for pearl. The first wearing is usually timed to the planet’s day, as above. Some guides add a time of day, such as sunrise, and at least one names an hour to avoid. These are household choices, and whether they help is a matter of belief. In practice what matters is that the stone sits comfortably and the metal does not irritate your skin.",
        },
      ],
    },
    {
      id: "weight",
      chip: "Weight",
      heading: "Weight: ratti, carat and a rule that changes with the guide",
      icon: "gem-weight",
      blocks: [
        {
          type: "p",
          text: "Stones are sold in carats, and Jyotish guides often speak in ratti. A carat is 200 milligrams. A ratti was a unit based on the seed of the gunja plant, and its modern value varies. A goldsmith’s ratti is 121.5 milligrams. The pakki ratti used for astrological stones is 182.25 milligrams, about 0.91 carat, and one retailer reports other values by region. Mixing the two units is an easy way to pay for the wrong weight, so ask for carats or grams in writing.",
        },
        {
          type: "p",
          text: "Then the rules for how much differ. Say the wearer weighs 60 kilograms. A rule of one ratti for every 10 kilograms gives 6 ratti, about 5.5 carats. A rule of body weight divided by 12 gives 5 ratti, about 4.6 carats. A guide that asks for at least 2 carats gives 2. One retailer gives a range of 5.25 to 7.25 ratti, about 4.8 to 6.6 carats, and says that no Jyotish text sets a rule tied to body weight at all. For diamond, one guide gives 0.4 to 1 carat.",
        },
        {
          type: "p",
          text: "No study found shows that a heavier stone does more, and a larger stone costs more. So the weight to choose is the one the reasoning supports and the budget allows, stated in carats.",
        },
      ],
    },
    {
      id: "treatments",
      chip: "Natural or treated",
      heading: "Natural, treated, lab-grown and imitation: what the words mean",
      icon: "gem-natural",
      blocks: [
        {
          type: "p",
          text: "A natural stone formed wholly in nature and was then cut and polished. Much of what is sold has also been altered, and the trade has a word for each kind. The international trade body CIBJO asks sellers to disclose treatments before a sale and on the invoice, and says that phrases such as “natural treated” and “semi-precious” should not be used.",
        },
        {
          type: "terms",
          title: "Four words the trade uses",
          items: [
            {
              term: "Treated",
              text: "A natural stone altered after it was found. Heat is the commonest treatment for ruby and sapphire, and GIA calls it durable. Emeralds are usually soaked in oil or resin to hide fractures, and ruby is sometimes filled with glass. Heating is an old practice, and the trade’s rule is to disclose every treatment.",
              icon: "gem-treated",
            },
            {
              term: "Dyed",
              text: "Colour added or changed. Coral and pearl are the usual cases, and dyed bamboo coral is used to imitate red coral. A dyed stone needs gentler care, with no solvents.",
              icon: "gem-dyed",
            },
            {
              term: "Laboratory-grown",
              text: "Grown in a laboratory, with the same chemical make-up and crystal structure as the natural stone. Ruby grown this way is still ruby, and even a keen eye cannot separate it from one dug from the ground. In trade usage, synthetic and laboratory-created mean the same.",
              icon: "gem-synthetic",
            },
            {
              term: "Imitation",
              text: "A different material made to look like the stone, such as glass or a cheaper mineral coloured to match. Goldstone and opalite are man-made glass sold under stone-like names.",
              icon: "stone-imitation",
            },
          ],
        },
        {
          type: "p",
          text: "Sellers of untreated stones argue that treatment cancels out a stone’s effect, although they accept that heating sapphires goes back centuries. CIBJO and GIA say nothing about effect. They treat heating as long established and as something to be disclosed. No evidence supports an effect from any stone, treated or untreated, so the argument is among sellers. At the least, a buyer should be told in writing which kind a stone is.",
        },
        {
          type: "p",
          text: "Cracks, lines and small inclusions are common in natural stones, emerald most of all. They are not proof that a stone is natural or untreated, because treated stones show them too. A filler can also hide a fracture, so a clean look proves neither.",
        },
      ],
    },
    {
      id: "reports",
      chip: "Lab reports",
      heading: "What a laboratory report shows, and what it cannot",
      icon: "gem-certificate",
      blocks: [
        {
          type: "p",
          text: "A report from an independent gem laboratory is the usual way to settle what a stone is, because a laboratory-grown stone shares nearly all the properties of a natural one and the eye alone cannot decide. GIA calls its papers reports and says it neither certifies nor appraises.",
        },
        {
          type: "table",
          head: ["On the report", "What it can tell you", "What it leaves out"],
          rows: [
            ["The stone’s name", "The mineral or material, such as sapphire, topaz or glass", "Which of them the text or guide you follow has in mind"],
            ["Natural or synthetic", "Whether the stone formed in nature or was grown in a laboratory", "Which of the two you should prefer"],
            ["Treatments", "The treatments the laboratory could detect", "It cannot prove that a treatment it could not detect is absent"],
            ["Weight and size", "The weight in carats and the measurements", "A price or a valuation"],
            ["Origin", "For a short list of stones, such as emerald, ruby, sapphire, red spinel, peridot, jade and opal, an opinion on where the stone came from", "Origin is an opinion, and it implies nothing about quality"],
            ["Colour", "Some colour information", "Only limited detail"],
          ],
        },
        {
          type: "p",
          text: "Check three things before you rely on a report: that the laboratory is independent of the seller, that the weight and size on the report match the stone in front of you, and whether the report is included in the price or costs extra. Paper issued by the seller alone proves only what the seller says.",
        },
        {
          type: "p",
          text: "A report says nothing about your chart or about any effect. A seller who offers one as proof that a stone will work is claiming more than any paper can show.",
        },
      ],
    },
    {
      id: "trial",
      chip: "The trial period",
      heading: "The trial-period custom, and how to use it sensibly",
      icon: "gem-trial",
      blocks: [
        {
          type: "p",
          text: "Many guides advise wearing a stone for a short while before committing to it. The length they give varies: three to seven days, seven to eleven days, or at least two weeks. One guide has the stone worn in a temporary setting by day while you watch your sleep, mood, skin and events. No evidence shows that a trial can tell whether a stone suits you, because the things being watched change on their own. Its practical use is as a cooling-off period.",
        },
        {
          type: "steps",
          title: "A trial that protects you",
          items: [
            {
              title: "Settle the terms first",
              text: "Agree in writing, before you pay, what can be returned, for how long and in what condition, including whether the stone may be set in a ring.",
              icon: "gen-limits",
            },
            {
              title: "Keep it loose or temporarily set",
              text: "A stone set permanently in gold is harder to return, so ask whether the seller offers a temporary setting.",
              icon: "gem-metal",
            },
            {
              title: "Keep a short note",
              text: "A line a day on sleep, mood and what happened lets you see afterwards what changed, and how much was already changing.",
              icon: "habit-evidence",
            },
            {
              title: "Decide on the reasoning",
              text: "Return it if you are unsure. How a stone feels on a given day is not a test, so decide on the reasoning and the terms.",
              icon: "gen-no-pressure",
            },
          ],
        },
      ],
    },
    {
      id: "care",
      chip: "Care and cautions",
      heading: "Care, and cautions worth keeping",
      icon: "gem-care",
      blocks: [
        {
          type: "p",
          text: "What a stone can take depends on its hardness and on what has been done to it. Ruby and the sapphires rate 9 on the Mohs scale and diamond 10, so they resist scratching well. Cat’s eye rates 8.5, emerald 7.5 to 8 and hessonite about 7. Pearl, at 2.5 to 4.5, and red coral, at about 3.5, are soft, and both react to acids, perfume and solvents. A harder stone scratches a softer one, so store them apart.",
        },
        {
          type: "p",
          text: "Treatment changes the rules. Oiled, filled, dyed or waxed stones should not meet solvents, chemicals or heat. Ultrasonic cleaners call for caution and are best avoided for emerald. Some stones fade in strong light. For most stones, warm water with a little mild soap and a soft cloth is the usual advice. Before the first wearing, check the stone against its report and clean it gently. Any rite beyond that is optional.",
        },
        {
          type: "note",
          text: "No stone replaces medical care, whatever a seller says it can do. Continue any treatment you have, and see a doctor about symptoms. For the stone itself, ask a jeweller before using a cleaner you are unsure about.",
        },
      ],
    },
  ],
  catalogue: {
    heading: "The nine stones, one card each",
    chip: "The nine stones",
    icon: "stone-nine-set",
    intro: "In the order of the planets, from the Sun to Ketu. Each card gives the stone’s link in tradition and the facts about the stone itself, including the treatments and look-alikes you are most likely to meet. No card is a recommendation.",
    items: [
      {
        id: "ruby",
        name: "Ruby",
        other: "Manik",
        tradition: "Linked with the Sun in Jyotish",
        summary: "Red corundum, the same mineral as the sapphires. Among the nine, only diamond is harder.",
        points: [
          "Hardness 9 on the Mohs scale",
          "Usually heated; glass filling and beryllium diffusion also occur, and laboratory-grown ruby is the same material as natural",
          "Modern substitute lists name red garnet, red spinel and red tourmaline",
        ],
        art: { kind: "gem", cut: "oval", tint: "#B3122F" },
      },
      {
        id: "pearl",
        name: "Pearl",
        other: "Moti",
        tradition: "Linked with the Moon in Jyotish",
        summary: "Formed inside a living mollusc rather than in rock. Most pearls sold today are cultured, which means the mollusc was raised on a pearl farm.",
        points: [
          "Soft, 2.5 to 4.5 on the Mohs scale; keep it from perfume, acids and solvents",
          "Bleaching and dyeing are common treatments",
          "Modern substitute lists name moonstone",
        ],
        art: { kind: "gem", cut: "round", tint: "#EDE6DA" },
      },
      {
        id: "red-coral",
        name: "Red coral",
        other: "Moonga",
        tradition: "Linked with Mars in Jyotish",
        summary: "The hard skeleton of a marine coral of the Corallium group, built by a living animal.",
        points: [
          "About 3.5 on the Mohs scale, so it scratches and reacts to acids",
          "Dye and bleach are both used, and dyed bamboo coral imitates it",
          "Modern substitute lists name carnelian and red jasper",
        ],
        art: { kind: "gem", cut: "cabochon", tint: "#D2452D" },
      },
      {
        id: "emerald",
        name: "Emerald",
        other: "Panna",
        tradition: "Linked with Mercury in Jyotish",
        summary: "Green beryl. Fractures and inclusions are normal in emerald, so filling with oil or resin is usual, and the trade expects it to be disclosed.",
        points: [
          "7.5 to 8 on the Mohs scale; avoid ultrasonic cleaners and solvents",
          "Laboratory-grown emerald exists",
          "Modern substitute lists name peridot and green tourmaline",
        ],
        art: { kind: "gem", cut: "emerald", tint: "#0F7A4A" },
      },
      {
        id: "yellow-sapphire",
        name: "Yellow sapphire",
        other: "Pukhraj",
        tradition: "Linked with Jupiter in Jyotish",
        summary: "Yellow corundum. Old Ayurvedic texts and some lists name topaz for Jupiter instead, so ask which mineral is meant.",
        points: [
          "Hardness 9 on the Mohs scale",
          "Heat and diffusion treatments occur",
          "Modern substitute lists name citrine, yellow topaz, scapolite and heliodor",
        ],
        art: { kind: "gem", cut: "cushion", tint: "#E3B519" },
      },
      {
        id: "diamond",
        name: "Diamond",
        other: "Heera",
        tradition: "Linked with Venus in Jyotish",
        summary: "Pure carbon and the hardest natural material. Some lists give white sapphire for Venus instead.",
        points: [
          "Hardness 10 on the Mohs scale",
          "Laboratory-grown diamonds, high-pressure heating and laser drilling all exist, so a report matters",
          "One retailer gives 0.4 to 1 carat as a weight; other guides differ",
          "Modern substitute lists name white sapphire, white zircon and opal",
        ],
        art: { kind: "gem", cut: "round", tint: "#CFE3EE" },
      },
      {
        id: "blue-sapphire",
        name: "Blue sapphire",
        other: "Neelam",
        tradition: "Linked with Saturn in Jyotish",
        summary: "Blue corundum, the same mineral as ruby.",
        points: [
          "Hardness 9 on the Mohs scale",
          "Heat and diffusion treatments occur, and synthetic sapphire is made",
          "Modern substitute lists name amethyst, lapis lazuli, iolite and blue spinel",
        ],
        art: { kind: "gem", cut: "cushion", tint: "#1F3C88" },
      },
      {
        id: "hessonite",
        name: "Hessonite",
        other: "Gomed",
        tradition: "Linked with Rahu in Jyotish",
        summary: "A honey-orange garnet of the grossular group. Old texts may mean zircon by gomeda, and the two are often confused, although their density differs.",
        points: [
          "About 7 on the Mohs scale",
          "The name comes from a Greek word meaning inferior",
          "Sri Lanka and India are the usual origins named, and origin is an opinion that carries no grade",
          "Modern substitute lists name orange zircon and spessartite",
        ],
        art: { kind: "gem", cut: "oval", tint: "#C8641B" },
      },
      {
        id: "cats-eye",
        name: "Cat’s eye",
        other: "Lehsunia",
        tradition: "Linked with Ketu in Jyotish",
        summary: "Chrysoberyl cut as a cabochon so that a thin bright band of light moves across it. Only chrysoberyl is called plain cat’s eye. Quartz and tourmaline can show a similar band and should be named for what they are.",
        points: [
          "8.5 on the Mohs scale",
          "Sri Lanka and Brazil are the usual origins named",
          "Modern substitute lists name tiger’s eye and quartz or tourmaline cat’s eye",
        ],
        art: { kind: "gem", cut: "cabochon", tint: "#8A9A3B" },
      },
    ],
  },
  lookAt: {
    heading: "What she looks at when a stone comes up",
    icon: "gen-listen",
    items: [
      { icon: "astro-lagna", text: "The planet your question touches, your rising sign and the period now running" },
      { icon: "brain-thought", text: "The reasoning you were given for a stone, and whether it holds when you ask for it again" },
      { icon: "habit-morning", text: "How a stone would fit your ordinary day: work with your hands, water, travel, a child at home" },
      { icon: "work-finance", text: "What the stone costs, what is claimed for it, and what paper comes with it" },
      { icon: "astro-no-remedy", text: "Whether a quieter practice, or no stone at all, is the better answer" },
    ],
  },
  bring: {
    heading: "Before you ask about a stone: what to gather",
    icon: "gen-bring-details",
    items: [
      { icon: "brain-words", text: "The advice you were given about a stone, as close to the words used as you can recall, and who gave it" },
      { icon: "gen-bring-photo", text: "A clear photograph of the stone, and any report, receipt or written terms that came with it" },
      { icon: "astro-birth-time", text: "Your birth date, time and place, which any chart-based reasoning for a stone starts from" },
    ],
  },
  faqs: [
    {
      q: "Which stone suits my zodiac sign, and do I need a chart reading first?",
      a: "Not by sign alone. Jyotish reads the whole birth chart, so a list that gives one stone to everyone born under a Sun sign leaves out almost everything about you. Tradition expects the chart to come first, though nothing obliges you to have a reading. No evidence shows that a stone chosen either way changes an outcome. If a stone is to be considered, the chart is where the reasoning comes from.",
    },
    {
      q: "Can I wear two stones at once?",
      a: "Guides differ. One retailer lists stone pairs it calls incompatible and tells readers to ask a practitioner before combining them, while the other guides read for this page give no such list. No test of any combination was found. A single stone is simpler: it is one decision to judge, and a change of mind costs less. Rudraksha beads raise their own questions, which the Rudraksha page answers.",
    },
    {
      q: "Can wearing the wrong stone cause harm?",
      a: "Some guides warn that a stone chosen wrongly makes matters worse, and none offers evidence. A warning of that kind is a reason to ask for the evidence, and a poor reason to buy another stone. The harm that does happen is ordinary: paying for a stone that is something other than it was sold as, being pressed to add more, or putting off medical or practical help. A cracked stone can cut skin, and a loose small stone can choke a young child.",
    },
    {
      q: "How heavy should my stone be?",
      a: "No weight has been shown to matter, and guides give different rules, from a fixed two carats to a fraction of body weight. One retailer says no Jyotish text sets any. Choose the weight your reasoning and budget support, ask for it in carats or grams in writing, and be wary of anyone who says a lighter stone will fail. As a rough conversion, a ratti is 0.6 to 0.9 carat, depending on which value the seller uses.",
    },
    {
      q: "Why is a stone suggested when a planet, such as the Moon, is weak?",
      a: "In Jyotish a planet is read as strong or weak from its sign, its house and its links with other planets. Tradition says a stone for a planet under strain is worn to support what that planet stands for, so pearl, the Moon’s stone, goes with mind and feeling. Some practitioners tie a stone to the period now running, and others do not. No test found shows that a stone supports a planet, and a weak planet is at most a prompt to look at the question.",
    },
    {
      q: "Can I wear a stone all day, in the shower and to sleep?",
      a: "Two guides say a stone should be worn always, even asleep and in the bath, and removed only for medical or surgical reasons. The trade’s care advice points the other way for soft, oiled or dyed stones such as pearl, coral and emerald, which react to perfume, acids and knocks. No evidence supports either custom, so let the stone’s hardness and treatment decide: a ruby ring survives a shower better than a pearl does. Take any ring off before heavy manual work.",
    },
    {
      q: "How do I clean a stone, and how often?",
      a: "A soft cloth and warm, lightly soapy water suit most stones. Keep pearl and coral away from perfume, acids and solvents, skip ultrasonic cleaners for emerald, and use no chemicals or heat on dyed, oiled, waxed or filled stones. How often depends on wear, since a ring used daily collects skin oils and soap sooner than a pendant does. Advice of monthly or weekly cleaning is a custom with no measurement behind it.",
    },
    {
      q: "Does a stone need charging in moonlight, or a cleansing ritual?",
      a: "No effect of either has been measured. Charging, intention-setting and moonlight come from modern crystal practice. One retailer of Jyotish stones describes rites with milk, honey, Ganga water and mantra, which shows how much the customs differ. Strong light can fade some stones, so avoid long hours in the sun. A ritual can still give you a moment to think about why you chose the stone. It is optional, and no stone depends on it.",
    },
    {
      q: "What should I do if a stone cracks or changes colour?",
      a: "Think of it as a physical event first. A crack or chip means the stone was knocked, or was already flawed or filled, and a cracked stone can cut skin or catch on fabric, so stop wearing it and ask a jeweller to look at it. A change of colour can mean a dyed or filled stone is reacting to light, heat or a cleaner. A custom says a broken stone should be returned to nature. That is your choice, and nothing in the evidence says a broken stone means anything about your life.",
    },
    {
      q: "Can someone else wear my stone, or can a child wear one?",
      a: "One retailer calls a used stone inauspicious. The other guides read for this page do not mention it, and no evidence supports the idea. A stone picked from a chart is picked for one person, so a stone passed on is a keepsake. Some guides advise men and women differently on finger and hand, with no shared rule. For a child the risk is plain and physical: small stones come loose and can choke, and a child’s fingers outgrow a ring quickly.",
    },
  ],
  related: [
    "/services/stones-and-rudraksh/rudraksha/",
    "/services/astrology/astrology-remedies/",
    "/services/astrology/birth-chart-reading/",
  ],
  showFees: true,
};
