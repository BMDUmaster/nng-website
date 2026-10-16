/**
 * Client voices. Aryan confirmed written consent for these films on 23 Sept 2026.
 *
 * Quotes are taken from the films in the "NNG Assets (All) > Testimonials > Videos" Drive folder,
 * machine-transcribed (whisper.cpp) on 23 Sept 2026 and not yet checked by ear: play each film
 * against its quote before launch. Hindi passages are translated as closely as English allows and
 * are marked `translated`; spoken English is kept as transcribed apart from fillers ("you know", "like").
 *
 * Names are shown as first name and initial until the spellings are confirmed (the handoff notes
 * list the full names as spoken). Films play from Drive, where the owner controls sharing; nothing
 * is copied into this site apart from selected still frames used as thumbnail previews.
 */
import { asset } from "@/lib/assets";

export type Voice = {
  id: string;
  name: string;
  context: string;
  headline: string;
  quote: string;
  /** One sentence from the same quote, for places where space is short (the homepage cards). */
  short?: string;
  translated?: boolean;
  poster?: string;
  hook?: string;
  film?: { driveId: string; duration: string; label: string };
  /** A local MP4 of the same film, for the silent preview on the homepage. Plays on hover or in view. */
  clip?: string;
};

export const voices = {
  deepa: {
    clip: "/videos/stories/deepa.mp4",
    poster: "/images/testimonials/client-0.webp",
    hook: "The belief I had lost",
    id: "deepa",
    name: "Deepa K.",
    context: "Client since 2020",
    headline: "She didn’t teach me to change myself.",
    quote:
      "She only made me aware of the potential that was already inside me. She taught me to believe in myself, and to understand my intuition.",
    short: "She made me aware of the potential already inside me.",
    translated: true,
    film: { driveId: "1UYkU2iDhSzTj9R_ecnDAjL_5NdMmL5se", duration: "1:51", label: "Belief in herself" },
  },
  // Keyed by first name: ids end up in the page source, and surnames stay off the site until confirmed.
  manish: {
    clip: "/videos/stories/manish.mp4",
    poster: "/images/testimonials/client-1.webp",
    hook: "It never felt like a lecture",
    id: "manish",
    name: "Manish G.",
    context: "On his experience",
    headline: "It never feels like a lecture.",
    quote:
      "Whenever we talk to her, it feels as if one of our own is lovingly showing us the right way, and trying to understand things from our side.",
    short: "It feels as if one of our own is showing us the right way.",
    translated: true,
    film: { driveId: "1LZi0IWknj_vDINvaMf1n0OdIQHnZOGyp", duration: "1:20", label: "Patience, and each other" },
  },
  renu: {
    poster: "/images/testimonials/client-2.webp",
    hook: "When our confidence broke",
    id: "renu",
    name: "Renu S.",
    context: "Through a difficult year",
    headline: "We never felt alone in it.",
    quote:
      "Whenever a problem came up, we messaged her and she replied at once. When we lost confidence, she helped us steady ourselves.",
    short: "Whenever a problem came up, she replied at once.",
    translated: true,
    film: { driveId: "1WPPE_eY5evBiDC_WjqX9ftbFDfzDfTC3", duration: "1:01", label: "A way out of a hard year" },
  },
  navleen: {
    clip: "/videos/stories/navleen.mp4",
    poster: "/images/testimonials/client-3.webp",
    hook: "Before a decision that would change her life",
    id: "navleen",
    name: "Navleen S.",
    context: "Family, after 12 years in Australia",
    headline: "An overall taking-care package.",
    quote:
      "Whenever we have to take a major decision, we consult her, and she tells us the broader picture. The response is so accurate, and the availability is amazing.",
    film: { driveId: "1l0SNg8sedyAuktzfDbX9GzY5R-fJMd1-", duration: "2:22", label: "A family’s move home" },
  },
  shelley: {
    clip: "/videos/stories/shelley.mp4",
    poster: "/images/testimonials/client-4.webp",
    hook: "I was all over the place",
    id: "shelley",
    name: "A client in London",
    context: "London, about seven years",
    headline: "I was all over the place.",
    quote:
      "She helped me and guided me through it. It has helped me with my business and my personal life, and changed me from always thinking negative into thinking more positive.",
    film: { driveId: "1AwPpu4js_H6nEMStqEz5cMaVMaKgpAe0", duration: "1:20", label: "From London" },
  },
  vanshika: {
    poster: "/images/testimonials/client-5.webp",
    hook: "From exam fear to confidence",
    id: "vanshika",
    name: "Vanshika S.",
    context: "Grade 10 student",
    headline: "She never sugarcoated anything.",
    quote:
      "I used to be very anxious, even for my class tests. She never sugarcoated anything, which really helped me prepare for my exams. Thank you for transforming my anxiety into confidence.",
    film: { driveId: "1s44lpBIgQGOnORc7o3oTjx4bgFkQldzS", duration: "0:43", label: "Exams, without the fear" },
  },
  shashi: {
    poster: "/images/testimonials/client-6.webp",
    hook: "I came for my daughter",
    id: "shashi",
    name: "A mother",
    context: "On her daughter",
    headline: "I came for my daughter.",
    quote: "I joined for my daughter. Now she is well, and she is happy.",
    translated: true,
    film: { driveId: "1cohguwl4UyFMPuaiD-0XROJM0aLUk7ff", duration: "0:18", label: "For her daughter" },
  },
} satisfies Record<string, Voice>;

/** The four films on the homepage: nobody who is quoted on the page appears again on film, except Deepa, whose film is the strongest. */
export const homeFilms: Voice[] = [voices.navleen, voices.shelley, voices.deepa, voices.shashi];

/** Added from the supplied testimonial folder on 25 Sept. No guessed surnames or fabricated quotes.
 * 17MoOMi966DnGtbcr6Yw8Pw9BPc03ULt3 is held pending confirmation of the practitioner named.
 * 1YioAyFpP1HMOcaJXmajgABqmbikvuLKu is a SHA-256 verified duplicate of Vanshika's recording.
 */
export const addedFilms: Voice[] = [
  // Role is self-stated in the opening of this recording, rechecked 4 Oct 2026.
  // "Banking" does not establish an employer, corporate banking specialism or CEO/COO title.
  { id: "puneet", clip: "/videos/stories/puneet.mp4", name: "Puneet", context: "Works in banking", headline: "", quote: "", hook: "Guidance through personal and professional challenges", poster: "/images/testimonials/puneet.webp", film: { driveId: "1kuLWPPJJ6taVMR19VpA1lUjv6MEMYExa", duration: "1:11", label: "His experience of guidance" } },
  { id: "finding-direction", clip: "/videos/stories/finding-direction.mp4", name: "A client's reflection", context: "Three years of guidance", headline: "", quote: "", hook: "I was completely lost", poster: "/images/testimonials/new-1.webp", film: { driveId: "1ZQ9QvbkBBrtcTRby57ADfJcTQ3i3OH_p", duration: "1:36", label: "Finding her own direction" } },
  { id: "five-years", clip: "/videos/stories/five-years.mp4", name: "A client's reflection", context: "Five years of guidance", headline: "", quote: "", hook: "Through the best and worst", poster: "/images/testimonials/new-2.webp", film: { driveId: "1UHLdIA7SysXyW_dM1NHw7DCwC4H2xL-X", duration: "0:46", label: "Someone to turn to" } },
  { id: "family-decisions", clip: "/videos/stories/family-decisions.mp4", name: "A client's reflection", context: "Two years of guidance", headline: "", quote: "", hook: "Before the big decisions", poster: "/images/testimonials/new-4.webp", film: { driveId: "1IIG1FfXqAcNhiEJFncXJzjO5KxPxh_Wd", duration: "0:56", label: "Guidance for him and his family" } },
  { id: "difficult-year", clip: "/videos/stories/difficult-year.mp4", name: "A client's reflection", context: "Through a difficult time", headline: "", quote: "", hook: "We couldn't see a way forward", poster: "/images/testimonials/new-5.webp", film: { driveId: "1uU8Ol2Bbk3o_FG7k2-K9_-qxAlKsldVl", duration: "1:05", label: "Finding a way through" } },
  // Added 16 Oct 2026 from the same Drive folder; hooks paraphrase what each client says on film (machine-translated from Hindi, check by ear).
  { id: "sagar", clip: "/videos/stories/sagar.mp4", name: "Sagar", context: "Three years with Narayani", headline: "", quote: "", hook: "From no confidence to a business that runs well", poster: "/images/testimonials/sagar.webp", film: { driveId: "1NEKcUoH2BqDSQzA4i8lrvXGYfBUV3p_7", duration: "0:51", label: "Changing his mindset" } },
  { id: "hina", clip: "/videos/stories/hina.mp4", name: "Hina", context: "Moradabad · since 2022", headline: "", quote: "", hook: "Learning to think positively", poster: "/images/testimonials/hina.webp", film: { driveId: "1McT1s83HNsaZI1dky84O_ZX7syLS9uPM", duration: "0:53", label: "A more positive outlook" } },
  { id: "ramneet", clip: "/videos/stories/ramneet.mp4", name: "Ramneet", context: "London", headline: "", quote: "", hook: "Out of a sad phase, into a life that feels aligned", poster: "/images/testimonials/ramneet.webp", film: { driveId: "1km8JZyVt9e6zLb7qGpsflOlS96isfBrc", duration: "2:18", label: "Her gratitude" } },
  { id: "neha", name: "Neha", context: "Melbourne", headline: "", quote: "", hook: "Why I reached out", poster: "/images/testimonials/new-0.webp", film: { driveId: "1y7JLLC2r_2v364UxD7y-rZLOXeUVq9Sl", duration: "3:02", label: "Her personal experience" } },
];
/** Films with a local recording: they preview silently on hover (or in view on phones) in "Hear the whole story". */
const newest = ["sagar", "hina", "ramneet"];
export const storyFilms: Voice[] = [
  ...addedFilms.filter((voice) => newest.includes(voice.id)),
  voices.navleen, voices.shelley, voices.deepa, voices.manish,
  ...addedFilms.filter((voice) => voice.clip && !newest.includes(voice.id)),
];
/** The remaining recordings, still played from Drive. */
export const otherFilms: Voice[] = [voices.shashi, voices.renu, voices.vanshika, ...addedFilms.filter((voice) => !voice.clip)];

export const moreFilms: Voice[] = [...addedFilms, voices.manish, voices.renu, voices.vanshika];

/** The three written testimonials on the homepage. */
export const homeQuotes: Voice[] = [voices.deepa, voices.manish, voices.renu];

/** Drive serves a poster frame and a player for files shared by link. */
export const drivePoster = (id: string, width = 540) => `https://lh3.googleusercontent.com/d/${id}=w${width}`;
export const drivePlayer = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
export const voicePoster = (voice: Voice) => voice.poster ? asset(voice.poster) : drivePoster(voice.film!.driveId);
