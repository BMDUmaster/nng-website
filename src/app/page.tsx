import { preload } from "react-dom";
import { PracticeReturnPrompt } from "@/components/enquiry/PracticeReturnPrompt";
import { Approach } from "@/components/sections/Approach";
import { BookSection } from "@/components/sections/BookSection";
import { ClientWords } from "@/components/sections/ClientWords";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeFaq, HomeProgram, InstagramReels, JourneyPhotos } from "@/components/sections/HomeLower";
import { StoryFilms } from "@/components/sections/StoryFilms";
import { MeetNarayani } from "@/components/sections/MeetNarayani";
import { ServiceAtlas } from "@/components/sections/ServiceAtlas";
import { ClienteleNote } from "@/components/sections/ClienteleNote";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faq";
import { homeQuotes, otherFilms, storyFilms } from "@/content/voices";
import { bookTitle } from "@/content/about";
import { asset } from "@/lib/assets";
import { faqSchema, personSchema } from "@/lib/schema";

export default function HomePage() {
  // Preload the hero's cut-out portrait.
  preload(asset("/images/hero-narayani-cut.webp"), { as: "image", type: "image/webp", fetchPriority: "high" });

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), faqSchema(faqs.home)] }} />

      <HomeHero />

      <MeetNarayani bookTitle={bookTitle} />

      <ClientWords voices={homeQuotes} note={<ClienteleNote />} />

      <ServiceAtlas />

      <Approach />

      <StoryFilms voices={storyFilms} more={otherFilms} />

      <BookSection bookTitle={bookTitle} />

      <JourneyPhotos />
      <HomeProgram />
      <HomeFaq items={faqs.home} />
      <PracticeReturnPrompt />
      <InstagramReels />
    </>
  );
}
