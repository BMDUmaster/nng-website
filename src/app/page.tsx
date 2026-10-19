import { preload } from "react-dom";
import { PracticeReturnPrompt } from "@/components/enquiry/PracticeReturnPrompt";
import { Approach } from "@/components/sections/Approach";
import { BookSection } from "@/components/sections/BookSection";
import { ClientWords } from "@/components/sections/ClientWords";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeProgram, InstagramReels } from "@/components/sections/HomeLower";
import { HomeQuestions } from "@/components/sections/HomeQuestions";
import { JourneyMoments } from "@/components/sections/JourneyMoments";
import { SevaSection } from "@/components/sections/SevaSection";
import { PureBlessings } from "@/components/sections/PureBlessings";
import { StoryFilms } from "@/components/sections/StoryFilms";
import { MeetNarayani } from "@/components/sections/MeetNarayani";
import { ServiceAtlas } from "@/components/sections/ServiceAtlas";
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

      <MeetNarayani />

      <ClientWords voices={homeQuotes} note={null} />

      <ServiceAtlas />

      <JourneyMoments />
      <PureBlessings />
      <SevaSection />

      <Approach />

      <StoryFilms voices={storyFilms} more={otherFilms} />

      <HomeProgram />
      <HomeQuestions items={faqs.home} />
      <PracticeReturnPrompt />
      <InstagramReels />
      <BookSection bookTitle={bookTitle} />
    </>
  );
}
