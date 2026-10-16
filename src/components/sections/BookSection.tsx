"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { asset, assetSet } from "@/lib/assets";
import { site } from "@/content/site";

/* Her book (Oct 16, "A Practice to Return to Yourself" banners): an open book on a stone plinth (her real photograph on
   the left page, a chapter opening on the right), beside the words, three figures, her name and one action. On phones
   the words lead, then the book, the figures, her name and the action. */

const icon = (d: string) =>
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const lotus = '<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>';
const figures = [
  { icon: icon('<rect x="5" y="7" width="22" height="20" rx="3"/><path d="M5 13h22M11 4v5M21 4v5"/><path d="M10 18h2M15 18h2M20 18h2M10 22h2M15 22h2M20 22h2" stroke-width="2"/>'), value: "21", label: "days" },
  { icon: icon(lotus), value: "Reflection", label: "each day" },
  { icon: icon('<path d="M6 22h20M9 22a7 7 0 0 1 14 0"/><path d="M16 8v4M7.5 12.5l2.8 2.8M24.5 12.5l-2.8 2.8M4 18h3M25 18h3"/>'), value: "Practice", label: "for everyday life" },
];
const html = (markup: string) => ({ __html: markup });

export function BookSection({ bookTitle }: { bookTitle: string }) {
  // While the book is on screen it opens: the cover swings back and two leaves turn, then it rests open, closes and
  // begins again.
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => el.classList.toggle("is-on", entry.isIntersecting), { threshold: 0.35 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bk2" id="meet" aria-labelledby="meet-title">
      <div className="bk2-leaves" aria-hidden="true" />
      <div className="bk2-inner">
        <div className="bk2-copy">
          <p className="bk2-kicker">
            <span className="bk2-lotus" aria-hidden="true" dangerouslySetInnerHTML={html(icon(lotus))} />
            Her book
          </p>
          <h2 id="meet-title">
            A practice to return to <em>yourself</em>
          </h2>
          <p className="bk2-title">{bookTitle}</p>
          <p className="bk2-lead">
            Her book, <em>{bookTitle}</em>, offers 21 days of reflection and everyday inner practice. A gentle guide to help you slow down, understand
            yourself and create a more peaceful and purposeful life.
          </p>
        </div>

        <div
          className="bk2-stage"
          aria-hidden="true"
          ref={stage}
          onPointerDown={() => stage.current?.classList.add("is-held")}
          onPointerUp={() => window.setTimeout(() => stage.current?.classList.remove("is-held"), 1500)}
          onPointerCancel={() => stage.current?.classList.remove("is-held")}
        >
          <div className="bk2-book">
            <span className="bk2-shadow" />
            <div className="bk2-page bk2-left">
              <div className="bk2-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/images/approach-narayani-900.webp")} alt="" loading="lazy" decoding="async" />
              </div>
              <p className="bk2-sign">Narayani Garg</p>
              <span className="bk2-orn" dangerouslySetInnerHTML={html(icon(lotus))} />
            </div>
            <div className="bk2-page bk2-right">
              <p className="bk2-run">{bookTitle}</p>
              <p className="bk2-chapter">Chapter 02</p>
              <p className="bk2-ch-title">
                <span>Direction</span>
                <small>for a</small>
                <em>Brighter You</em>
              </p>
              <span className="bk2-orn bk2-orn-rule" dangerouslySetInnerHTML={html(icon(lotus))} />
              <p className="bk2-ch-text">Work out what matters now and the next step you can take to bring more clarity, peace and positivity to your life.</p>
              <p className="bk2-folio">— 05 —</p>
            </div>
            <div className="bk2-leaf bk2-leaf-2">
              <div className="bk2-face bk2-front">
                <p className="bk2-run">{bookTitle}</p>
                <p className="bk2-chapter">Before you begin</p>
                <p className="bk2-big">21</p>
                <p className="bk2-ch-text">days of reflection and everyday inner practice</p>
                <span className="bk2-orn bk2-orn-rule" dangerouslySetInnerHTML={html(icon(lotus))} />
                <p className="bk2-method">{site.method}</p>
                <p className="bk2-folio">— 03 —</p>
              </div>
              <div className="bk2-face bk2-back bk2-left-face">
                <div className="bk2-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset("/images/approach-narayani-900.webp")} alt="" loading="lazy" decoding="async" />
                </div>
                <p className="bk2-sign">Narayani Garg</p>
                <span className="bk2-orn" dangerouslySetInnerHTML={html(icon(lotus))} />
              </div>
            </div>
            <div className="bk2-leaf bk2-leaf-1">
              <div className="bk2-face bk2-front">
                <p className="bk2-run">{bookTitle}</p>
                <p className="bk2-chapter">Chapter 01</p>
                <p className="bk2-ch-title"><span>Mind</span><em>comes first</em></p>
                <span className="bk2-orn bk2-orn-rule" dangerouslySetInnerHTML={html(icon(lotus))} />
                <p className="bk2-ch-text bk2-drop">Notice the thoughts and habits that recur in the situation you bring. Change begins where you look first.</p>
                <p className="bk2-folio">— 01 —</p>
              </div>
              <div className="bk2-face bk2-back bk2-left-face bk2-quote-page">
                <span className="bk2-qmark" aria-hidden="true">“</span>
                <p className="bk2-quote" lang="hi-Latn">Upay tab kaam karta hai jab dimaag kaam karta hai.</p>
                <span className="bk2-orn bk2-orn-rule" dangerouslySetInnerHTML={html(icon(lotus))} />
                <p className="bk2-quote-cite">A remedy works when the mind works.</p>
                <p className="bk2-sign bk2-sign-sm">Narayani Garg</p>
              </div>
            </div>
            <div className="bk2-leaf bk2-cover">
              <div className="bk2-face bk2-front bk2-cover-front">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/images/book-cover-660.webp")} srcSet={assetSet("/images/book-cover-440.webp 440w, /images/book-cover-660.webp 660w")} sizes="(max-width: 900px) 46vw, 340px" alt="" loading="lazy" decoding="async" />
              </div>
              <div className="bk2-face bk2-back bk2-left-face bk2-plate">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset("/images/narayani-portrait-480.webp")} alt="" loading="lazy" decoding="async" />
                <p className="bk2-sign">{site.person}</p>
                <p className="bk2-quote-cite">{site.title}</p>
              </div>
            </div>
          </div>
          <div className="bk2-plinth" />
        </div>

        <div className="bk2-foot">
          <ul className="bk2-figures">
            {figures.map((f) => (
              <li key={f.value}>
                <span className="bk2-f-icon" dangerouslySetInnerHTML={html(f.icon)} />
                <span className="bk2-f-text">
                  <strong>{f.value}</strong>
                  <small>{f.label}</small>
                </span>
              </li>
            ))}
          </ul>
          <p className="bk2-author">
            <strong>{site.person}</strong>
            <span>{site.title}</span>
          </p>
          <Link prefetch={false} className="bk2-cta" href="/about/">
            <span>Read her story</span>
            <span className="bk2-cta-go" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
