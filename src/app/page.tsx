import Link from "next/link";
import { preload } from "react-dom";
import { BookCover } from "@/components/brand/BookCover";
import { PracticeReturnPrompt } from "@/components/enquiry/PracticeReturnPrompt";
import { AreasRibbon, FaqSection, ProgramPanel } from "@/components/sections/Sections";
import { Approach } from "@/components/sections/Approach";
import { ClientWords } from "@/components/sections/ClientWords";
import { HomeHero } from "@/components/sections/HomeHero";
import { StoryFilms } from "@/components/sections/StoryFilms";
import { MeetNarayani } from "@/components/sections/MeetNarayani";
import { ServiceAtlas } from "@/components/sections/ServiceAtlas";
import { ClienteleNote } from "@/components/sections/ClienteleNote";
import { SocialSection } from "@/components/sections/SocialSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faq";
import { homeQuotes, otherFilms, storyFilms } from "@/content/voices";
import { bookTitle } from "@/content/about";
import { asset, assetSet } from "@/lib/assets";
import { faqSchema, personSchema } from "@/lib/schema";

export default function HomePage() {
  // Preload hero portrait
  preload(asset("/images/narayani-portrait-480.avif"), {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    imageSrcSet: assetSet("/images/narayani-portrait-480.avif 480w, /images/narayani-portrait-684.avif 684w"),
    imageSizes: "(max-width: 900px) min(56vw, 250px), 300px",
  });

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [personSchema(), faqSchema(faqs.home)] }} />

      <HomeHero />

      <AreasRibbon />

      <MeetNarayani bookTitle={bookTitle} />

      <ClientWords voices={homeQuotes} note={<ClienteleNote />} />

      <ServiceAtlas />

      <Approach />

      <StoryFilms voices={storyFilms} more={otherFilms} />

      <section className="band" id="meet" aria-labelledby="meet-title">
        <div className="section-wrap section-space meet">
          <BookCover />
          <div className="meet-copy">
            <h2 id="meet-title">A practice to return to</h2>
            <p>
              Her book, <em>{bookTitle}</em>, offers 21 days of reflection and everyday inner practice.
            </p>
            <div className="cta-row">
              <Link prefetch={false} className="text-link" href="/about/">
                Read her story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-space spiritual-gallery" aria-labelledby="spiritual-gallery-title">
        <div className="section-heading">
          <p className="kicker">IN PERSON</p>
          <h2 id="spiritual-gallery-title">Moments from her journey</h2>
          <p>Photographs from Narayani’s meetings with spiritual teachers.</p>
        </div>
        <div className="spiritual-gallery-track" role="region" tabIndex={0} aria-label="Photographs of Narayani with spiritual teachers">
          {[
            { photo: "celeb-acharyapramod.jpg", name: "Shri Shri 1008 Mahamandaleshwar Kalki Dham Peethadhishwar Acharya Pramod Krishnam Ji" },
            { photo: "celeb-devkinandan.jpg", name: "Pujya Shri Aniruddhacharya Ji" },
            { photo: "celeb-sadhvi.jpg", name: "Mahamandaleshwar Shri Sadhvi Satpriya Giri Maharaj Ji (Vatsalya)" },
            { photo: "celeb-swing.jpg", name: "Acharya Shri Shantanu Maharaj Ji" },
            { photo: "celeb-jaya-kishori.jpg", name: "Devi Krishna Priya Ji" },
          ].map(({ photo, name }) => (
            <figure className="spiritual-gallery-photo" key={photo}>
              <img
                src={asset(`/images/celebrities/${photo}`)}
                alt={`Dr. Narayani Garg with ${name}`}
                loading="lazy"
                decoding="async"
                width={650}
                height={1000}
              />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-wrap program-wrap program-section" id="program" aria-labelledby="program-title">
        <ProgramPanel />
      </section>

      <FaqSection items={faqs.home} source="home-faq" />
      <PracticeReturnPrompt />
      <SocialSection platform="instagram" />
    </>
  );
}
