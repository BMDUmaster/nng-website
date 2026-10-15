import type { OfferingPage } from "../types";

export const page: OfferingPage = {
  hub: "brain-training",
  slug: "nlp",
  title: "NLP: techniques and evidence",
  metaTitle: "NLP: what it is and what research shows",
  metaDescription:
    "What NLP is, the techniques people meet most often, what a session may look like and where the research stands.",
  lead: "Understand NLP’s approaches to thought, language and habits, what a session involves, and the limits of the evidence before deciding whether to try it.",
  card: "When you want to understand NLP and what its techniques can and cannot do.",
  icon: "page-nlp",
  group: "practices",
  covers: [
    "Origins and main ideas",
    "Anchoring and reframing",
    "The meta-model of language",
    "Timeline work, submodalities",
    "A typical session",
    "What research shows",
    "When to see a professional",
  ],
  art: { kind: "practice", variant: "nlp" },
  enquiryTopic: "NLP personal guidance",
  cta: "Enquire about NLP guidance",
  intro: [
    {
      type: "p",
      text: "A person who says “I always freeze when I have to speak” has handed NLP a sentence to work with. It asks how exactly, with whom and what is pictured just before, then offers a few exercises for changing the words or the picture.",
    },
    {
      type: "p",
      text: "NLP stands for neuro-linguistic programming. In its own account, the name says that we take in experience through the senses (neuro), describe it in language (linguistic) and settle into habits of thought and action (programming), and that these habits can be noticed and changed.",
    },
    {
      type: "p",
      text: "NLP’s claims about eye movements and preferred senses have not held up in tests. Evidence for its techniques is limited or low quality. The questions and imagery exercises described here are thinking tools, not proven treatments.",
    },
  ],
  sections: [
    {
      id: "origins",
      chip: "Where it began",
      heading: "Where NLP came from, and what it says",
      icon: "brain-origin",
      blocks: [
        {
          type: "p",
          text: "NLP began in the United States in the 1970s. Richard Bandler and John Grinder studied how three well-known therapists worked, one of them a noted hypnotherapist, and wrote down the patterns in what these therapists said and did. Their idea was that a skill can be described closely enough to be taught. Their first book appeared in 1975.",
        },
        {
          type: "p",
          text: "NLP teachers often put its ideas in three parts. We respond to our picture of a situation rather than to the situation itself, so two people can leave the same meeting with different pictures. An unwanted habit once served some purpose, and it helps to ask what. The words and inner pictures we use shape how a problem feels, so changing them can change what you do next. These are working assumptions, not findings, and they earn their place by the questions they lead to.",
        },
        {
          type: "p",
          text: "The word “neuro” in the name is not proof that a technique changes the brain. This page does not claim a measured neurological mechanism or certify a practitioner's qualifications. Ask what an exercise involves and what evidence supports it.",
        },
      ],
    },
    {
      id: "techniques",
      chip: "Techniques",
      heading: "The techniques most often described",
      icon: "group-practices",
      blocks: [
        {
          type: "p",
          text: "These are the techniques you will meet most often. Each is described as practitioners describe it, which is not a claim that it works.",
        },
        {
          type: "terms",
          items: [
            {
              term: "Rapport",
              text: "Listening and speaking so that the other person feels heard: matching pace and tone, and using some of their own words. NLP teaching treats it as the first step of a session, and it is closer to ordinary courtesy practised carefully than to influence.",
              icon: "brain-rapport",
            },
            {
              term: "Anchoring",
              text: "Linking a feeling to a trigger such as a touch, a word or an image. You recall a moment of calm, press a thumb to a finger as you do, and later use the touch to bring that memory back. Some practitioners use it to prepare someone for a hard situation.",
              icon: "brain-anchoring",
            },
            {
              term: "Reframing",
              text: "Seeing an event from another angle, or asking what an unwanted behaviour is for. “I ruin every presentation” may become “I get so alert before I speak that I rush.” The second sentence is more exact, and exactness is where a next step comes from.",
              icon: "brain-reframing",
            },
            {
              term: "The meta-model",
              text: "A set of questions that loosens absolutes and vague statements. “Nobody listens to me” becomes: nobody at all, who last time, what happened? A sentence with the “always” and “never” taken out is easier to work with.",
              icon: "brain-meta-model",
            },
            {
              term: "Submodalities",
              text: "The qualities of an inner picture or voice: bright or dim, near or far, loud or quiet. You notice how a worry looks, adjust it, perhaps dimmer and further away, and notice whether the feeling changes. Research on why this would work is thin.",
              icon: "brain-submodalities",
            },
            {
              term: "Timeline work",
              text: "Imagining your life as a line from past to future and looking at a memory, or a hope, from a chosen distance along it. People use it to see an old event from further away. It is a guided imagination exercise, and the memory itself stays where it is.",
              icon: "brain-timeline",
            },
            {
              term: "The swish",
              text: "Swapping the picture that sets off an unwanted habit for a picture of the person you want to be, and repeating the swap quickly several times. The picture of reaching for the phone at night, for instance, is swapped for one of putting it down and sleeping.",
              icon: "brain-swish",
            },
          ],
        },
        {
          type: "p",
          text: "A “fast phobia” method, in which you revisit a memory from a detached position, is claimed by some practitioners to reduce a phobia in a single sitting. Research on it is limited and not conclusive, and a phobia that limits your life belongs with a qualified professional. Some NLP teaching also holds that eye direction shows whether a person is seeing, hearing or feeling a memory, and whether they are lying. That idea was tested and did not hold up, as the research section below shows.",
        },
      ],
    },
    {
      id: "typical-session",
      chip: "A session",
      heading: "What an NLP session may look like",
      icon: "gen-session-person",
      blocks: [
        {
          type: "p",
          text: "The following is an educational illustration of questions and exercises discussed in NLP. It is not Narayani's appointment format or a promise of a particular number of sessions.",
        },
        {
          type: "steps",
          items: [
            {
              title: "A goal, and time to settle",
              text: "You name something you would like to handle differently, in a sentence. The practitioner builds rapport first: listening, matching your pace, asking nothing that feels like a test.",
              icon: "astro-focus",
            },
            {
              title: "Questions about your words",
              text: "Meta-model questions ask what exactly, who and when. The practitioner also notes the words you use for the senses, such as “I see what you mean” or “it doesn’t feel right”. The aim is a detailed picture of the situation.",
              icon: "brain-words",
            },
            {
              title: "One exercise, chosen for the situation",
              text: "The practitioner picks one: an anchor, a reframe, a change to an inner picture, a timeline or a swish, and explains the reason for it.",
              icon: "gen-explain",
            },
            {
              title: "Guided imagery, with a rating either side",
              text: "The practitioner talks you through the exercise, and you rate the strength of the feeling once before it and once after.",
              icon: "tap-rating",
            },
            {
              title: "A rehearsal and one small action",
              text: "You picture the situation again with the new response, which practitioners call *future pacing*, and agree one small thing to try afterwards. Practice between sessions is part of the method.",
              icon: "habit-evidence",
            },
          ],
        },
      ],
    },
    {
      id: "uses",
      chip: "What people bring",
      heading: "What people bring to NLP, and what to expect",
      icon: "brain-habit",
      blocks: [
        {
          type: "p",
          text: "People bring NLP a wide range of everyday concerns. Beliefs, habits, relationships, children, and fear and worry are taken up in the questions at the foot of this page. This section covers the rest.",
        },
        {
          type: "p",
          text: "For study, memory and decisions, people use NLP to break a task into small pictures and rehearse it, to learn a few memory tricks, or to look at a decision from two sides before making it. Some also use it for a wind-down routine at night. The claims for these uses are modest. NLP is not a treatment for sleeplessness, and trouble sleeping that lasts is a medical question.",
        },
        {
          type: "p",
          text: "A flash of anger, or a reply you regret, usually has a cue: a tone, a name, a look. NLP exercises try to notice the cue earlier and to practise a different first response, such as a breath and a question before you reply. The same attention can help in understanding other people’s behaviour, because you can ask what it is for, as you would of your own.",
        },
        {
          type: "p",
          text: "Some people bring a painful memory. Timeline work and changes to an inner picture are used to view a memory from further away, or to change how it feels when it returns. They do not erase it, and nobody should be pressed to revisit one. When a memory still floods you with distress, speak to a doctor or someone trained in mental health ahead of any exercise.",
        },
      ],
    },
    {
      id: "research",
      chip: "Research",
      heading: "What research shows, and where it is thin",
      icon: "brain-research",
      blocks: [
        {
          type: "p",
          text: "Researchers have asked two different questions: whether NLP’s own claims about how people work are true, and whether its techniques help with a problem.",
        },
        {
          type: "table",
          head: ["Claim or use", "What was tested", "Where it stands"],
          rows: [
            [
              "Eye direction shows lying, or a preferred sense (seeing, hearing or feeling)",
              "Three experiments in 2012 on lying; earlier reviews of studies on preferred senses",
              "No support. Eye direction did not predict lying, and judges taught the NLP idea spotted lies no better. The reviews found little support for preferred senses.",
            ],
            [
              "NLP’s own claims, taken together",
              "This page does not rely on that broader claim tally.",
              "That tally has not been independently verified in this pass.",
            ],
            [
              "Its techniques as help with a problem",
              "A 2012 review of ten studies, five of them randomised trials",
              "Four of the five trials found no difference between groups, and the fifth favoured NLP. The authors say that thin research is not proof of no effect.",
            ],
            [
              "Help with post-traumatic stress, anxiety disorder or depression",
              "The 2012 health review did not establish clinical benefit.",
              "No clinical use is established by this page.",
            ],
            [
              "NLP-based psychotherapy, pooled",
              "This page does not rely on that pooled estimate.",
              "The evidence retained here concerns the verified 2012 review, rather than this estimate.",
            ],
          ],
        },
        {
          type: "p",
          text: "Practitioner enthusiasm does not resolve the research question. Ask which finding supports the specific exercise and intended use, and whether a comparison group received the same attention.",
        },
        {
          type: "p",
          text: "The eye-movement experiments found no support for lie detection. The 2012 health review found limited evidence for health outcomes, reflecting the quantity and quality of the research. Those findings have different scopes.",
        },
      ],
    },
    {
      id: "her-approach",
      chip: "Considering NLP",
      heading: "Considering NLP alongside guidance",
      icon: "gen-mind-first",
      blocks: [
        {
          type: "p",
          text: "Brain Training begins with the pattern behind a question: whatever repeats in how you think, speak and react. NLP’s attention to the words and pictures people use fits that, because many patterns live there. A sentence like “I always freeze” is a pattern in a single line.",
        },
        {
          type: "p",
          text: "This page offers background on NLP. Ask the team whether any exercise discussed here forms part of Narayani's current guidance.",
        },
        {
          type: "p",
          text: "If you are unsure which practice fits, start with a discovery session. Bring the situation that keeps returning; the team explains the appointment format and fee before you book.",
        },
      ],
    },
    {
      id: "care",
      chip: "Care and limits",
      heading: "Who should take care, and when to see a professional",
      icon: "brain-professional-help",
      blocks: [
        {
          type: "p",
          text: "This page describes NLP for background. It does not offer it as treatment or assess whether an exercise is appropriate for you.",
        },
        {
          type: "list",
          items: [
            "Worry, fear or low mood has lasted for weeks, or is getting in the way of sleep, work or relationships.",
            "You live with a diagnosed condition or panic attacks, or have a history of trauma or abuse.",
            "An exercise stirs up distress that you cannot settle.",
            "You have thoughts of harming yourself.",
          ],
        },
        {
          type: "p",
          text: "Decisions about treatment belong with your qualified care team. Ask the NNG team about the scope of personal guidance before choosing an appointment.",
        },
      ],
    },
  ],
  suits: {
    icon: "gen-limits",
    yes: [
      "you like to examine your own words and pictures, and are happy to treat an exercise as an experiment",
      "you want a practical way to prepare for one situation, such as a hard conversation, a talk or a decision",
      "you are curious about NLP and want an honest account of it before you try anything",
    ],
    no: [
      "you want treatment for anxiety, a phobia, depression or trauma, which NLP does not offer and a doctor or mental health professional does",
      "you hope to steer or persuade another person, which is not what these exercises are for",
      "you want a promise that an exercise will work, which no practitioner can honestly give",
    ],
  },
  lookAt: {
    heading: "Questions to discuss before considering NLP",
    icon: "brain-thought",
    items: [
      { icon: "brain-pattern", text: "The words you use for the pattern, as exactly as you can recall them" },
      { icon: "gen-bring-photo", text: "How you picture the situation: near or far, bright or dim, still or moving" },
      { icon: "gen-student", text: "What you have tried before, such as books, courses or coaches, and how each went" },
      { icon: "gen-no-pressure", text: "Whether an exercise feels natural to you or forced" },
      { icon: "gen-caution", text: "Whether the situation needs medical or mental health care ahead of any exercise" },
    ],
  },
  bring: {
    heading: "Notes for your first message about NLP",
    icon: "gen-bring-details",
    items: [
      { icon: "gen-whatsapp", text: "One situation you would like to handle differently, in a sentence" },
      { icon: "brain-belief", text: "The words you say to yourself about it, as close to exact as you can" },
      { icon: "breath-work", text: "Any practice you already keep, such as breathing, prayer or a journal" },
      { icon: "gen-privacy", text: "If a doctor is already involved, mention it in a line. The records themselves can wait" },
    ],
  },
  faqs: [
    {
      q: "What does NLP stand for, and what is it?",
      a: "It stands for neuro-linguistic programming. Richard Bandler and John Grinder created it in the United States in the 1970s, drawing on how three well-known therapists worked. Its techniques, such as anchoring, reframing and the meta-model, are exercises in noticing how a situation is pictured and worded. It is a self-development practice with limited research behind its specific claims, and it is not a treatment.",
    },
    {
      q: "Is NLP scientific?",
      a: "The 2012 health review found limited evidence, while the eye-movement experiments did not support using those cues to detect lying. Neither finding establishes a clinical use for the exercises here.",
    },
    {
      q: "Is NLP hypnosis?",
      a: "Related, but not the same thing. NLP grew partly from studying a noted hypnotherapist, and one strand of it uses a deliberately vague, story-like way of speaking meant to induce a trance. The exercises described on this page are questions and guided imagery, and you can stop any of them at any point.",
    },
    {
      q: "Can NLP change beliefs?",
      a: "It can help you look at one closely. A belief such as “I never finish anything” is usually built from a few experiences and then applied everywhere. NLP questions ask which experiences, how often and compared with whom, and reframing offers a more exact sentence. Whether a belief shifts depends on you and on what you do next. The trials of NLP techniques are few and mixed, so use it to examine a belief and expect no promise from it.",
    },
    {
      q: "How many sessions does NLP take?",
      a: "NLP guidance is available with Narayani. There is no fixed session count promised here. Tell the team what you want to work on; they explain the proposed format, fee and preparation before you decide.",
    },
    {
      q: "Can NLP help with fear, worry and anxiety?",
      a: "This page makes no treatment claim for fear, anxiety or a phobia. A health concern belongs with a qualified medical or mental health professional.",
    },
    {
      q: "Can NLP improve communication and rapport?",
      a: "Rapport, the sense of being heard, is a real skill, and the NLP advice to listen closely, match the other person’s pace and use some of their words is sound as ordinary courtesy. The idea that eye movements or word choices reveal whether someone is picturing, hearing or feeling something has no support, and this page does not teach it. Used well, rapport helps you understand someone better.",
    },
    {
      q: "Can NLP help with relationships or moving on after a break-up?",
      a: "It can help you examine your own side: the story you tell about what happened and the words you use for the other person. Reframing may let you hold a fairer account. It does not replace grief, which takes the time it takes. If the loss feels overwhelming, a mental health professional can help.",
    },
    {
      q: "Can NLP be used with children?",
      a: "This page gives no instructions for using NLP with children and makes no safety or effectiveness claim for them. Questions about a child's wellbeing belong with a qualified child health professional.",
    },
    {
      q: "Can NLP help change everyday habits, including eating habits?",
      a: "It can help you look at the cue behind a habit and rehearse a different response to it. Habits usually take weeks to months to change, and people differ a great deal, so be wary of promises of speed. For eating habits, weight or a food intolerance, this page makes no claim for NLP, and a doctor or dietitian should lead. Tying the new action to something you already do each day tends to help.",
    },
    {
      q: "Can NLP help with motivation, confidence and goals?",
      a: "People use it to rehearse a task, for example picturing the first five minutes of studying and noticing what makes the picture feel heavy, then trying a lighter version. That can make a start easier, though it does not replace the doing. Goals also respond to plain planning: deciding exactly when and where you will take the first step tends to help more than a general intention.",
    },
  ],
  related: [
    "/services/brain-training/eft-tapping/",
    "/services/brain-training/hooponopono/",
    "/services/brain-training/discovery-session/",
    "/hand-holding-program/",
  ],
  note: "NLP exercises are thinking tools with thin research behind them, and none of them is a treatment for a phobia, panic or any diagnosed condition. If you are ever in danger of hurting yourself, ring your local emergency number straight away. In India, Tele-MANAS, the national mental health helpline, takes calls on 14416 around the clock.",
  showFees: false,
};
