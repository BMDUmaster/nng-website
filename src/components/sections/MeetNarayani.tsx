"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
/* eslint-disable @next/next/no-img-element -- small decorative leaves placed by CSS */
import { asset } from "@/lib/assets";
import { figures } from "@/content/site";

const icon = (d: string) =>
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
/** Four things she helps with (desktop band under the film). */
/** Phones only: her figures under the feature cards. */
const statIcons = [
  icon('<circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c3.4 3.2 5 6.9 5 11s-1.6 7.8-5 11c-3.4-3.2-5-6.9-5-11s1.6-7.8 5-11Z"/><path d="M7 10.5h18M7 21.5h18"/>'),
  icon('<circle cx="16" cy="12" r="7.5"/><path d="m12.8 12 2.2 2.2 4.2-4.4"/><path d="m11 18.5-3 9 4.5-1.8L15 29l1-5M21 18.5l3 9-4.5-1.8L17 29"/>'),
  icon('<path d="M16 27s-9-5.6-9-11.6A4.8 4.8 0 0 1 16 13a4.8 4.8 0 0 1 9 2.4C25 21.4 16 27 16 27Z"/><path d="M10 7.5l1.5 1.5M16 4.5v2.2M22 7.5 20.5 9"/>'),
];
const features = [
  { title: "Understand Your Patterns", text: "Gain clarity about your thoughts and emotions.", icon: icon('<path d="M12 6.5a3.5 3.5 0 0 0-6.6 1.6A3.8 3.8 0 0 0 4 15a3.6 3.6 0 0 0 2 5.6A3.6 3.6 0 0 0 12 24V6.5ZM20 6.5a3.5 3.5 0 0 1 6.6 1.6A3.8 3.8 0 0 1 28 15a3.6 3.6 0 0 1-2 5.6A3.6 3.6 0 0 1 20 24"/><path d="M16 5v22M12 11H9.5M12 17h-3M20 13h2.5M20 19h3"/>') },
  { title: "Make Better Life Decisions", text: "Find balance in relationships, career and health.", icon: icon('<path d="M16 28V4"/><path d="M16 7h9l2.5 2.5L25 12h-9"/><path d="M16 15H7l-2.5 2.5L7 20h9"/>') },
  { title: "Receive Spiritual Guidance", text: "Practical insights for real-life situations.", icon: icon('<path d="M10.5 21.5h11l-1.2 4.5h-8.6Z"/><path d="M8 21.5h16"/><path d="M16 19c-2.2-1.4-3-3.3-3-5.2 0-2.3 1.4-4.4 3-6.3 1.6 1.9 3 4 3 6.3 0 1.9-.8 3.8-3 5.2Z"/><path d="M16 4v1.5M9.5 7l1 1M22.5 7l-1 1"/>') },
  { title: "Move Towards a Positive Tomorrow", text: "Transform mindset and create a meaningful life.", icon: icon('<path d="M4 22h24"/><path d="M9 22a7 7 0 0 1 14 0"/><path d="M16 9v3M7.5 12.5l2 2M24.5 12.5l-2 2M4 17.5h2.5M25.5 17.5H28"/><path d="M11 26h10"/>') },
];

type Mode = "idle" | "preview" | "sound";

/** The film opens on a few seconds of title card; the silent loop starts after it. */
const INTRO = 3.6;

/**
 * "Meet Narayani": her line in large type beside her introduction film, in the same gold arch as the hero
 * portrait. When the section comes into view the film plays silently on a loop (browsers only allow muted
 * autoplay) and pauses again when it leaves; "Watch with sound" starts it from the beginning with sound and the
 * browser's controls. With reduced motion or data saver on, it waits for a press instead.
 */
export function MeetNarayani() {
  const video = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<Mode>("idle");
  const modeRef = useRef<Mode>("idle");
  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (modeRef.current === "sound") return;
        if (entry.isIntersecting) {
          el.muted = true;
          if (el.currentTime < INTRO) el.currentTime = INTRO;
          el.play().then(() => setMode("preview")).catch(() => setMode("idle"));
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 },
    );
    // The silent loop goes back to the end of the title card, not to the very start.
    const onEnded = () => {
      if (modeRef.current !== "preview") return;
      el.currentTime = INTRO;
      void el.play();
    };
    el.addEventListener("ended", onEnded);
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  const playWithSound = () => {
    const el = video.current;
    if (!el) return;
    setMode("sound");
    el.muted = false;
    el.currentTime = 0;
    void el.play();
  };

  return (
    <section className="mn" aria-labelledby="founder-film-title">
      <div className="mn-inner">
        <div className="mn-head">
          <p className="mn-kicker">In her own words</p>
          <h2 id="founder-film-title">
            Meet <span className="mn-name">Narayani</span>
          </h2>
          <p className="mn-roles">
            <span>Psychic spiritual mentor</span>
          </p>
          <blockquote className="mn-quote">
            <p>“The spirit who is doing a ritual is spiritual.”</p>
          </blockquote>
        </div>

        <div className="mn-film">
          <svg className="mn-swoosh" viewBox="0 0 600 720" aria-hidden="true">
            <defs>
              <linearGradient id="mn-sw-a" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5E8A5A" />
                <stop offset="1" stopColor="#2F5F3F" />
              </linearGradient>
              <linearGradient id="mn-sw-b" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#A9C29A" />
                <stop offset="1" stopColor="#E3EBD6" />
              </linearGradient>
            </defs>
            <path d="M120 20C10 60-30 220 40 330s10 250 120 330 300 40 360-40-40-170 10-260S560 60 470 20 230-20 120 20Z" fill="url(#mn-sw-b)" opacity=".75" />
            <path d="M60 120C-20 220 20 360 90 430s40 200 160 250 220-10 210-60-120-40-170-120S150 330 170 240 140 60 60 120Z" fill="url(#mn-sw-a)" opacity=".85" />
            <path d="M230 30C330 10 470 30 520 110" fill="none" stroke="#C9A256" strokeWidth="1.4" />
            <path d="M40 610C140 700 330 720 470 650" fill="none" stroke="#C9A256" strokeWidth="1.2" />
          </svg>
          <img className="mn-leaf mn-leaf-a" src={asset("/images/hero-leafL.webp")} alt="" width={129} height={278} aria-hidden="true" />
          <img className="mn-leaf mn-leaf-b" src={asset("/images/hero-leafL.webp")} alt="" width={129} height={278} aria-hidden="true" />
          <img className="mn-leaf mn-leaf-c" src={asset("/images/hero-leafL.webp")} alt="" width={129} height={278} aria-hidden="true" />
          {[0, 1, 2, 3].map((i) => (
            <svg key={i} className={`mn-spark mn-spark-${i}`} viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 0c.7 6.4 5.6 11.3 12 12-6.4.7-11.3 5.6-12 12-.7-6.4-5.6-11.3-12-12C6.4 11.3 11.3 6.4 12 0Z" />
            </svg>
          ))}
          <p className="mn-badge" aria-hidden="true">
            <span>Guidance</span>
            <span>Clarity</span>
            <span>Positive Change</span>
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
              <path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z" />
              <path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6" />
            </svg>
          </p>
          <div className={`mn-arch is-${mode}`}>
            <video
              ref={video}
              controls={mode === "sound"}
              playsInline
              muted
              preload="none"
              poster={asset("/images/narayani-about-authentic-560.webp")}
              aria-label="Introduction to Narayani Garg"
            >
              <source src={asset("/videos/narayani-introduction.mp4")} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            {mode === "idle" && (
              <button type="button" className="mn-play" onClick={playWithSound} aria-label="Play the introduction film">
                <span className="mn-play-disc" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor">
                    <path d="M7 4.5v13l11-6.5z" />
                  </svg>
                </span>
              </button>
            )}
            {mode === "preview" && (
              <button type="button" className="mn-sound" onClick={playWithSound}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2.5 6h2.5L8.5 3v10L5 10H2.5z" fill="currentColor" stroke="none" />
                  <path d="M11 5.5a3.5 3.5 0 0 1 0 5M12.8 3.5a6.3 6.3 0 0 1 0 9" />
                </svg>
                <span className="mn-sound-long">Watch with sound</span>
                <span className="mn-sound-short">Sound on</span>
              </button>
            )}
          </div>
        </div>

        <div className="mn-body">
          <p>Narayani sees the person as a spiritual being. Her starting point is the mind: understanding a pattern, then choosing how to respond.</p>
          <div className="mn-actions">
            <Link prefetch={false} className="mn-link" href="/about/">
              <span>Discover her story</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <ul className="mn-features" aria-label="What she helps with">
        {features.map((f) => (
          <li key={f.title}>
            <span className="mn-f-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: f.icon }} />
            <h3>{f.title}</h3>
          </li>
        ))}
      </ul>

      <dl className="mn-stats" aria-label="Narayani's experience">
        {figures.map((f, i) => (
          <div key={f.label}>
            <span className="mn-s-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: statIcons[i] ?? statIcons[0] }} />
            <dd>{f.value}</dd>
            <dt>{f.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
