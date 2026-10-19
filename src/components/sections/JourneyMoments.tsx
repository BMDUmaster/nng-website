"use client";

import Link from "next/link";
import { asset } from "@/lib/assets";
import { useDriftRail } from "@/lib/useDriftRail";

const teachers = [
  { photo: "celeb-acharyapramod.jpg", name: "Shri Shri 1008 Mahamandaleshwar Kalki Dham Peethadhishwar Acharya Pramod Krishnam Ji" },
  { photo: "celeb-devkinandan.jpg", name: "Pujya Shri Aniruddhacharya Ji" },
  { photo: "celeb-sadhvi.jpg", name: "Mahamandaleshwar Shri Sadhvi Satpriya Giri Maharaj Ji (Vatsalya)" },
  { photo: "celeb-swing.jpg", name: "Acharya Shri Shantanu Maharaj Ji" },
  { photo: "celeb-jaya-kishori.jpg", name: "Devi Krishna Priya Ji" },
];

const lotus =
  '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/></svg>';
const arrow = (d: string) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

/**
 * "Moments from her journey" (Oct 16, banner): photographs with spiritual teachers in tall cards with a cream caption
 * and a lotus medallion. Desktop: the row drifts smoothly and rests under the pointer. Phones: swiped, the card in
 * front larger with its neighbours peeking; arrows, dots and one action.
 */
export function JourneyMoments() {
  const { rail, active, goTo, step, handlers } = useDriftRail(teachers.length, 0.035);
  const card = (t: (typeof teachers)[number], i: number, dup = false) => (
    <li key={dup ? `${t.photo}-dup` : t.photo} className={`jm-card${i === active && !dup ? " is-active" : ""}${dup ? " jm-dup" : ""}`} aria-hidden={dup || undefined}>
      <figure>
        <div className="jm-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(`/images/celebrities/${t.photo}`)} alt={dup ? "" : `Narayani Garg with ${t.name}`} loading="lazy" decoding="async" width={650} height={1000} />
        </div>
        <figcaption>
          <span className="jm-medal" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
          <span className="jm-name">{t.name}</span>
        </figcaption>
      </figure>
    </li>
  );
  return (
    <section className="jm" aria-labelledby="spiritual-gallery-title">
      <div className="jm-inner">
        <header className="jm-head">
          <p className="jm-kicker">In person</p>
          <h2 id="spiritual-gallery-title">
            Moments from <br className="jm-br" />
            her <em>journey</em>
          </h2>
          <div className="jm-arrows">
            <button type="button" className="jm-arrow" onClick={() => step(-1)} aria-label="Previous photograph">{arrow("M10 3L5 8l5 5")}</button>
            <button type="button" className="jm-arrow" onClick={() => step(1)} aria-label="Next photograph">{arrow("M6 3l5 5-5 5")}</button>
          </div>
        </header>
        <ul className="jm-rail" ref={rail} aria-label="Photographs of Narayani with spiritual teachers" {...handlers}>
          {teachers.map((t, i) => card(t, i))}
          {teachers.map((t, i) => card(t, i, true))}
        </ul>
        <div className="jm-foot">
          <div className="jm-dots">
            <button type="button" className="jm-arrow jm-arrow-m" onClick={() => step(-1)} aria-label="Previous photograph">{arrow("M10 3L5 8l5 5")}</button>
            {teachers.map((t, i) => (
              <button key={t.photo} type="button" className="jm-dot" aria-label={`Photograph ${i + 1} of ${teachers.length}`} aria-current={i === active ? "true" : undefined} onClick={() => goTo(i)} />
            ))}
            <button type="button" className="jm-arrow jm-arrow-m" onClick={() => step(1)} aria-label="Next photograph">{arrow("M6 3l5 5-5 5")}</button>
          </div>
          <Link prefetch={false} className="jm-cta" href="/about/">
            <span>See all moments</span>
            <span className="jm-cta-go" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
