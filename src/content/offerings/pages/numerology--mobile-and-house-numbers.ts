import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "numerology",
  slug: "mobile-and-house-numbers",
  title: "Mobile and house numbers",
  metaTitle: "Mobile and house number numerology",
  metaDescription: "How phone and house numbers are added in numerology, with worked comparisons, practical costs and questions to ask about the method.",
  lead: "Explore the traditional meanings assigned to your phone or house number alongside your birth date. A number is not a reason to disrupt a working phone connection or move home.",
  card: "When you are choosing a mobile or house number, or wondering what yours says.",
  icon: "page-mobile-and-house-numbers",
  group: "daily",
  covers: [
    "Your mobile number, added up",
    "Choosing a new number",
    "House and flat numbers",
    "Building versus flat number",
    "Repeats and the last digits",
    "Business and personal lines",
    "Vehicle and other numbers",
  ],
  art: { kind: "numbers", variant: "mobile" },
  enquiryTopic: "Numerology: mobile and house numbers",
  cta: "Enquire about a mobile or house number",
  intro: [
    {
      type: "p",
      text: "Numerology treats a phone number or a door number as a string of digits. The digits are added, reduced to a single digit from 1 to 9, and set beside the numbers of the people who use it. The first step is arithmetic that anyone can check. Everything after it is convention, and the conventions are not the same from one reader to the next.",
    },
    {
      type: "p",
      text: "Narayani goes through a number with you as a starting point for conversation. A friendly total does not make a number fortunate. An awkward one is no reason to give up a number you have used for years.",
    },
  ],
  sections: [
    {
      id: "mobile-total",
      chip: "The mobile total",
      heading: "How a mobile number is added up",
      icon: "numc-mobile",
      blocks: [
        {
          type: "p",
          text: "The method is plain arithmetic. Leave out the country code, which is +91 in India. Add all ten digits. Keep adding the digits of the answer until one is left. That last digit, from 1 to 9, is the mobile total.",
        },
        {
          type: "table",
          head: ["Step", "Worked example", "Result"],
          rows: [
            ["The ten digits", "9 8 7 6 5 4 3 2 1 0", "98765 43210"],
            ["Add them", "9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0", "45"],
            ["Reduce the answer", "4 + 5", "9"],
            ["Total of the last four digits", "3 + 2 + 1 + 0", "6"],
          ],
          caption: "A made-up number, used only to show the sums",
        },
        {
          type: "p",
          text: "Indian readers also tie each total to a graha, or planet: the Sun goes with 1 and Mars with 9. The page on the systems of numerology lists all nine and shows where schools disagree about 4 and 7.",
        },
        {
          type: "p",
          text: "Some readers stop at the ten-digit total. Others also total the last four digits and read that as a second number. The two habits give two different sets of numbers for the same phone, and neither reader has made a mistake.",
        },
      ],
    },
    {
      id: "comparing",
      chip: "Your own numbers",
      heading: "How the total is set beside your own numbers",
      icon: "astro-compatibility",
      blocks: [
        {
          type: "p",
          text: "A total means little by itself. A reader sets it beside the numbers of the person who carries the phone, and three of those numbers do most of the work.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Mulank",
              text: "Your birth day, reduced to one digit. The page on personal numbers works through the sums.",
              icon: "numc-mulank",
            },
            {
              term: "Bhagyank",
              text: "Your whole date of birth, every digit added and reduced to one.",
              icon: "numc-bhagyank",
            },
            {
              term: "Namank",
              text: "The letters of a name, totalled from a letter table that the page on numerology systems sets out. Some readers add it to the comparison, and the table and the name counted, the birth name or the one you use, both change the answer.",
              icon: "numc-name",
            },
          ],
        },
        {
          type: "p",
          text: "In the worked example the total is 9. Someone born on 14 March 1990 has a Mulank of 5, from the day, and a Bhagyank of 9, from the whole date, so the total matches the Bhagyank. The reader then asks how 9 stands beside 5, and beside 9, in a table of friends, neutrals and enemies.",
        },
        {
          type: "p",
          text: "That sorting is tied to the friendships between the planets, and the tables are not the same everywhere. For the number 1, one practitioner page lists 4, 6, 7 and 8 as enemies and another lists only 8. One page calls 1 an enemy of 4, and another calls it a friend.",
        },
        {
          type: "p",
          text: "So a person with a Mulank of 1 and a mobile total of 4 can be told by one reader that the pairing is a clash, and by another that it is a friendly one. Narayani sets the pair out, shows where the difference comes from and gives no verdict.",
        },
      ],
    },
    {
      id: "digits",
      chip: "Repeats and pairs",
      heading: "Repeated digits, zeros and pairs",
      icon: "numc-repeated-number",
      blocks: [
        {
          type: "p",
          text: "Some readers also look at what the digits themselves are doing. Rules that appear on practitioner pages include avoiding a number with several 8s or many zeros, and flagging certain pairs of digits, such as 18 and 81, as difficult.",
        },
        {
          type: "p",
          text: "These are customary rules, with conflicting tables and no supporting test identified in the research for this page. A repeated digit is an observable feature of a number. Liking that feature, or finding it hard to say aloud, does not establish anything about its owner’s character or future.",
        },
        {
          type: "note",
          text: "No digit or pair of digits is a warning. Narayani reads a repeat or a pair as a feature to notice, and nothing shows any pair linked with a particular outcome. If a reading elsewhere has worried you, bring it and ask.",
        },
      ],
    },
    {
      id: "keep-or-change",
      chip: "Keep or change",
      heading: "Keeping the number you have, or choosing another",
      icon: "group-decisions",
      blocks: [
        {
          type: "p",
          text: "A consultation on a mobile number can start from one of two places. You may bring the number you use now and ask what its total says beside yours. Or you may be about to take a new connection, or to choose among a few numbers, and want to talk the choice through.",
        },
        {
          type: "p",
          text: "If you are choosing, the ordinary tests come first. Check that the number is easy to say aloud and to type, that no digit is easily confused over a bad line, and that your family could remember it. The numerology comes after those. A number that passes the practical tests and sits awkwardly with the tables is still a sound choice.",
        },
        {
          type: "list",
          title: "Before you change a number you already have",
          items: [
            "Count what depends on it: bank alerts, UPI, insurance, workplace records and every account that sends a one-time code.",
            "Ask whether the number has ever been a problem. A total you have never had trouble with is not a problem waiting to be solved.",
            "Ask whether the change is a decision or a hope. A number cannot do the work of a decision.",
          ],
        },
        {
          type: "p",
          text: "Keeping the number is a complete answer. Nothing in the practice requires a change, and Narayani does not recommend one for the sake of a total.",
        },
      ],
    },
    {
      id: "business",
      chip: "Business or personal",
      heading: "A business line and a personal number",
      icon: "gen-owner",
      blocks: [
        {
          type: "p",
          text: "Who uses a number decides what it is compared with. A personal number is set beside the person. A business line has more people behind it, and the reading changes with them.",
        },
        {
          type: "list",
          items: [
            "A private number is compared with your own Mulank and Bhagyank.",
            "A public business line, printed on every card, is compared with the owner’s numbers, and can also be set beside the total of the business name as customers know it.",
            "A line that several people answer has no single person to compare with, so the owner’s numbers carry the comparison, and the reading can say less.",
          ],
        },
        {
          type: "p",
          text: "That is why Narayani asks what a number is for before she adds anything up. How a name is totalled is covered on the page about name numerology.",
        },
      ],
    },
    {
      id: "house",
      chip: "House and flat",
      heading: "Reducing a house or flat number",
      icon: "numc-house-number",
      blocks: [
        {
          type: "p",
          text: "The sum is the same as for a phone: add the digits and reduce them to one. House 38 gives 3 + 8 = 11. Some readers keep 11 as a master number and others reduce it to 2. A number with a letter, such as 12B, needs a decision. If the letter counts, B is 2 in both of the common letter tables and the total is 5. If it does not count, the total is 3. No authority settles such points, so each reader chooses, and should say which choice was made.",
        },
        {
          type: "p",
          text: "A flat raises a second question, which is whether the flat number, the building number or both stand for the home. The table reads one address three ways.",
        },
        {
          type: "table",
          head: ["The reading", "Digits added", "Total"],
          rows: [
            ["Flat number only", "1 + 2 + 0 + 4", "7"],
            ["Building number only", "1 + 7", "8"],
            ["Both together", "1 + 2 + 0 + 4 + 1 + 7 = 15, then 1 + 5", "6"],
          ],
          caption: "Flat 1204 in Building 17",
        },
        {
          type: "p",
          text: "Some readers take the flat number as the private home and the building number as its wider setting. Others add the two. Narayani states the reading she has used, so that any difference between two answers can be traced to its cause.",
        },
      ],
    },
    {
      id: "household",
      chip: "Household and Vastulogy",
      heading: "Whose numbers the door number sits beside, and where Vastulogy takes over",
      icon: "room-main-entrance",
      blocks: [
        {
          type: "p",
          text: "A flat has one door number and often several people living behind it. A reading can compare the number with the owner, with the person who runs the household, or with everyone. The more people in the comparison, the less one number can say, which is a good reason to treat any reading of a home number as tentative.",
        },
        {
          type: "p",
          text: "A house number also says nothing about direction. Which way the door faces, where the kitchen sits and how the morning light comes in belong to Vastulogy, and the page on Vastulogy for the home covers how they are read.",
        },
      ],
    },
    {
      id: "everyday",
      chip: "Vehicles and others",
      heading: "Vehicle numbers and the other numbers you use every day",
      icon: "group-daily-numbers",
      blocks: [
        {
          type: "p",
          text: "The same arithmetic can be run on any number that stays with you. Three are worth a note.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Vehicle number",
              text: "A registration plate can be added up too. It mixes a state code, a district number, letters and four digits, so whoever reads it should say which parts were counted and, if letters were counted, which table was used.",
              icon: "numc-vehicle",
            },
            {
              term: "Shop or office number",
              text: "A business address has a door number of its own, read like a house number. The unit, the floor and the building can each be totalled, so the reader should say which one is being used.",
              icon: "work-retail-shop",
            },
            {
              term: "PINs and passwords",
              text: "Do not send a PIN, password, one-time code or card number in an enquiry. Numerology examples on this page concern public-facing numbers, not security credentials.",
              icon: "gen-privacy",
            },
          ],
        },
      ],
    },
    {
      id: "evidence",
      chip: "Evidence",
      heading: "What a phone or door number can and cannot do",
      icon: "numc-limits",
      blocks: [
        {
          type: "p",
          text: "No study of phone numbers or house numbers was found, and nothing shows a number changing anything in the life of the person who uses it. The main numerology page gives the wider picture of what the method rests on.",
        },
        {
          type: "p",
          text: "In some markets, numbers thought auspicious sell at a premium. That shows how many people hold the belief, and says nothing about what the number does. If you pay extra for a number, pay for something you will enjoy having.",
        },
        {
          type: "p",
          text: "A number can give you something small and fixed to think about, such as how you want to be reached or what you want from the place you live. Anything that changes afterwards comes from what you do.",
        },
      ],
    },
  ],
  lookAt: {
    heading: "Questions about a phone or house number",
    icon: "astro-aspect",
    items: [
      { icon: "numc-reduction", text: "The total of the whole number, and of its last four digits if you want a second reading" },
      { icon: "numc-relationships", text: "How that total sits beside your Mulank, Bhagyank and name number, and where the tables disagree" },
      { icon: "brain-pattern", text: "Repeated digits, zeros and pairs, which she raises as features to notice and does not read as signs of anything" },
      { icon: "gen-professional", text: "What the number is for: private use, a public business line, or a line several people answer" },
      { icon: "numc-remedy-sound", text: "How easy it is to say aloud, type and remember, and what a change would cost you" },
    ],
  },
  bring: {
    heading: "Before you ask about a number",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-bring-name", text: "Your date of birth, and the dates of birth of anyone else the number is for" },
      { icon: "gen-call", text: "The mobile number you use now, or the numbers you are choosing between" },
      { icon: "room-apartment", text: "A house or flat number as written on the door, with the building number or name" },
      { icon: "work-signage", text: "For a business, the name as customers know it" },
      { icon: "brain-words", text: "Anything you were told about the number before, and by whom" },
      { icon: "gen-caution", text: "Please leave any PIN, password or one-time code out of your message" },
    ],
  },
  faqs: [
    {
      q: "How is a mobile number analysed in numerology?",
      a: "The ten digits, without +91, are added and reduced to one. That total is set beside the Mulank and Bhagyank of the person who uses the number. Readers differ over the tables of friends and enemies, and over whether the last four digits are totalled as well. The sums are worked through in the table above.",
    },
    {
      q: "Can my current mobile number be analysed, and can you help me choose a new one?",
      a: "Yes. Start with the number you use now and the birth date of the person who uses it, and Narayani goes through the total and how it sits beside theirs. If you are choosing a new number, bring the candidates. She talks through each one and what a change would cost you in practice, and the decision stays with you. She does not tell anyone that a number has to be changed.",
    },
    {
      q: "Is there such a thing as a lucky mobile number?",
      a: "By convention, a total that is friendly to your Mulank and Bhagyank is called favourable. Practitioner pages disagree about which totals are friendly, and no study shows a number bringing luck, money or health. A number you like and can remember is a better test than any table.",
    },
    {
      q: "Can I keep my old number?",
      a: "Yes. A change is optional, and it has real costs, because bank alerts, UPI and the accounts that send you one-time codes are all tied to the old number. If the number has served you for years, that history is worth weighing. If you decide to change, make sure the reason is one you would still give with the numerology taken away.",
    },
    {
      q: "Is it worth paying extra for a fancy mobile number?",
      a: "Treat it as a spending decision and ask what you are buying. A number that is easy to say and to remember has real everyday value. A total that suits your Mulank has no value that anyone has shown. If you would enjoy having the number and the price is comfortable, the choice is a fair one. If the hope is that it will change your luck or income, nothing supports that.",
    },
    {
      q: "Do you need my PIN, password or card number?",
      a: "No. Do not share a PIN, password, one-time code or card number. Ask what preparation is required for the consultation you choose; an initial question does not need those credentials.",
    },
    {
      q: "How is a house number read in numerology?",
      a: "The digits of the number are added and reduced to one, in the same way as for a phone. The total is then compared with the Mulank and Bhagyank of the people who live there. The answer depends on choices made along the way: whether a letter counts, whether the flat number or the building number is used, and whether 11 is kept as a master number. Direction is a separate matter, and it belongs to Vastulogy.",
    },
    {
      q: "Is a house number important in numerology?",
      a: "It is one number among several, beside your own numbers, your household’s and your mobile’s. There is no agreed weight for it, and nothing shows it affecting the people who live behind it. A home is better chosen for its title, location, light, price and safety. If a number breaks a tie between two sound homes, that is a harmless use of it.",
    },
    {
      q: "My home has a name and not a number. Can it be read?",
      a: "A name has to be turned into a number with a letter table before it can be added up, and the two common tables, Chaldean and Pythagorean, give different totals for the same letters. The page on numerology systems shows how. If your address has both a name and a number, ask which one a reading used, and why.",
    },
    {
      q: "Does the flat number or the building number count?",
      a: "Readers choose one of three: the flat number as the private home, the building number as its wider setting, or both added together. For Flat 1204 in Building 17 those give 7, 8 and 6. Narayani names the reading she is using. If you were given one answer elsewhere, ask which of the three it came from.",
    },
    {
      q: "Can a house number affect the main door or the people living there?",
      a: "A number is a written label, and nothing shows it affecting a door or anyone behind it. Numerology reads it as a theme to reflect on beside the residents’ own numbers. The main door raises a different question, about direction and layout, and that belongs to Vastulogy. The Vastulogy page on the home explains how a door is read.",
    },
    {
      q: "How can I find a lucky house number for a new home?",
      a: "The convention is to compare the total of the house number with the owners’ Mulank and Bhagyank and prefer a friendly one. Lists of friendly numbers vary, so the answer depends on which list is used. Treat it as a tiebreaker, after the checks that matter: title, price, loan terms, light and the safety of the building.",
    },
  ],
  related: [
    "/services/numerology/personal-numbers/",
    "/services/vastu/home/",
    "/services/numerology/name-numerology/",
  ],
  note: "A number cannot stand in for the checks that come with a home or a tenancy: title, loan and rent terms, and the state of the building. Those belong with a lawyer, a lender and a structural engineer, and nothing on this page is legal or financial advice.",
  showFees: true,
};
