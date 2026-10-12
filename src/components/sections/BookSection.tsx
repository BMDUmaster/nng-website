"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { asset, assetSet } from "@/lib/assets";
import { site } from "@/content/site";
import { method } from "@/content/services";

/** A printed page: running head, body and folio. */
function Page({ folio, children, plate = false }: { folio: number; children: React.ReactNode; plate?: boolean }) {
  // As in a printed book: the title runs above left-hand (even) pages, the author above right-hand (odd) ones.
  const head = folio % 2 === 0 ? "Change Your Mind, Transform Your Life" : site.person;
  return (
    <>
      {!plate && <span className="bk-run">{head}</span>}
      <div className="bk-body">{children}</div>
      <span className="bk-folio">{folio}</span>
    </>
  );
}

/** The backs of the leaves (left-hand pages once turned): a photographic plate and two epigraphs. */
const backs = [
  <Page key="plate" folio={4} plate>
    <figure className="bk-photo">
      <img src={asset("/images/approach-narayani-900.webp")} alt="" loading="lazy" decoding="async" />
      <figcaption>Dr. Narayani Garg</figcaption>
    </figure>
  </Page>,
  <Page key="spirit" folio={6}>
    <blockquote className="bk-quote">
      <span className="bk-orn" aria-hidden="true">❦</span>
      <p>“The spirit who is doing a ritual is spiritual.”</p>
      <cite>— {site.person}</cite>
    </blockquote>
  </Page>,
  <Page key="upay" folio={8}>
    <blockquote className="bk-quote">
      <span className="bk-orn" aria-hidden="true">❦</span>
      <p lang="hi-Latn">“Upay tab kaam karta hai jab dimaag kaam karta hai.”</p>
      <cite>A remedy works when the mind works.</cite>
    </blockquote>
  </Page>,
];

/**
 * Her book. The book stands in three dimensions and, while the section is on screen, opens slowly: the cover
 * swings back, three pages (her method, her photograph and her words) turn to "21 days", then it closes and rests. Words, the title and the link sit beside it.
 */
export function BookSection({ bookTitle }: { bookTitle: string }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => el.classList.toggle("is-on", entry.isIntersecting), { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bk" id="meet" aria-labelledby="meet-title">
      <div className="bk-inner">
        <div className="bk-stage" ref={stage}>
          <div className="bk-glow" aria-hidden="true" />
          <div className="bk-book">
            <div className="bk-back" aria-hidden="true" />
            <div className="bk-block" aria-hidden="true" />
            <div className="bk-page bk-page-right" aria-hidden="true">
              <Page folio={9}>
                <span className="bk-orn">✿</span>
                <strong>21</strong>
                <span className="bk-days">days of reflection and everyday inner practice</span>
                <span className="bk-rule" />
                <em>{site.method}</em>
              </Page>
            </div>
            {/* Three leaves: the front of each carries a step of her method, the back a photograph or her words. */}
            {[2, 1, 0].map((i) => {
              const step = method[i];
              return (
                <div key={step.word} className={`bk-leaf bk-leaf-${i + 1}`} aria-hidden="true">
                  <div className="bk-face bk-face-front">
                    <Page folio={3 + i * 2}>
                      <span className="bk-chapter">Chapter {String(i + 1).padStart(2, "0")}</span>
                      <strong>{step.word}</strong>
                      <span className="bk-orn bk-orn-sm">❧</span>
                      <p className="bk-drop">{step.text}</p>
                    </Page>
                  </div>
                  <div className="bk-face bk-face-back">{backs[i]}</div>
                </div>
              );
            })}
            <div className="bk-cover">
              <img
                className="bk-front"
                src={asset("/images/book-cover-660.webp")}
                srcSet={assetSet("/images/book-cover-440.webp 440w, /images/book-cover-660.webp 660w")}
                sizes="(max-width: 680px) 62vw, 360px"
                width={660}
                height={934}
                alt={`The cover of ${bookTitle}, by Narayani Garg`}
                loading="lazy"
                decoding="async"
              />
              <div className="bk-inside" aria-hidden="true">
                <div className="bk-bookplate">
                  <img src={asset("/images/narayani-portrait-480.webp")} alt="" loading="lazy" decoding="async" />
                  <span>{site.person}</span>
                  <small>{site.title}</small>
                  <span className="bk-rule" />
                  <em>{site.method}</em>
                </div>
              </div>
            </div>
          </div>
          <div className="bk-shadow" aria-hidden="true" />
        </div>

        <div className="bk-copy">
          <p className="bk-kicker">Her book</p>
          <h2 id="meet-title">A practice to return to</h2>
          <p className="bk-title">{bookTitle}</p>
          <p className="bk-lead">
            Her book, <em>{bookTitle}</em>, offers 21 days of reflection and everyday inner practice.
          </p>
          <ul className="bk-facts" aria-label="About the book">
            <li>
              <strong>21</strong>
              <span>days</span>
            </li>
            <li>
              <strong>Reflection</strong>
              <span>each day</span>
            </li>
            <li>
              <strong>Practice</strong>
              <span>for everyday life</span>
            </li>
          </ul>
          <div className="bk-author">
            <span>{site.person}</span>
            <small>{site.title}</small>
          </div>
          <Link prefetch={false} className="bk-cta" href="/about/">
            <span>Read her story</span>
            <span className="bk-cta-arrow" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
