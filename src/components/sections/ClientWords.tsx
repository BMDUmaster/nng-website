"use client";

import { useEffect, useState } from "react";
import { EVENTS, track } from "@/lib/analytics";
import { voicePoster, type Voice } from "@/content/voices";
import { asset } from "@/lib/assets";

const ROTATE_MS = 5000;

/**
 * "In their own words": one client's words at a time, large and centred, with their photo, name and a link to
 * their film. The quotes turn every few seconds; a pointer or focus on the slider holds the current one.
 */
export function ClientWords({ voices, note }: { voices: Voice[]; note: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);
  const voice = voices[index];
  // The last sentence of the quote is set in gold italic (desktop); a one-sentence quote stays plain.
  const cut = voice.quote.search(/[.!?]["”’]?\s+(?=[^.!?]+[.!?]["”’]?$)/);
  const lead = cut > 0 ? voice.quote.slice(0, cut + 2) : voice.quote;
  const last = cut > 0 ? voice.quote.slice(cut + 2) : "";
  const go = (step: number) => setIndex((i) => (i + step + voices.length) % voices.length);

  // Phones: the film card plays its silent preview while on screen.
  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const video = document.querySelector<HTMLVideoElement>(".cw-card video");
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? void video.play().catch(() => {}) : video.pause()), { threshold: 0.6 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [index]);

  useEffect(() => {
    if (held || voices.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setIndex((i) => (i + 1) % voices.length), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [index, held, voices.length]);

  return (
    <section className="cw" id="testimonials" aria-labelledby="testimonial-title">
      <div className="cw-inner">
        <header className="cw-head">
          <p className="cw-kicker">Client stories</p>
          <h2 id="testimonial-title">
            In their <em>own words</em>
          </h2>
          {note}
        </header>

        <div
          className="cw-slider"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setHeld(true)}
          onMouseLeave={() => setHeld(false)}
          onFocus={() => setHeld(true)}
          onBlur={() => setHeld(false)}
        >
          <div className="cw-faces" role="group" aria-label="Choose a client story">
            <button type="button" className="cw-face-arrow" onClick={() => go(-1)} aria-label="Previous client story">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10l5-5 5 5" /></svg>
            </button>
            {voices.map((item, i) => (
              <button key={item.id} type="button" className="cw-face" aria-label={item.name} aria-current={i === index ? "true" : undefined} onClick={() => setIndex(i)}>
                <img src={voicePoster(item)} alt="" width={80} height={80} decoding="async" />
              </button>
            ))}
            <button type="button" className="cw-face-arrow" onClick={() => go(1)} aria-label="Next client story">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6l5 5 5-5" /></svg>
            </button>
          </div>

          {voice.film && (
            <button
              type="button"
              className="cw-card"
              key={`film-${voice.id}`}
              onMouseEnter={(event) => {
                if (!window.matchMedia("(hover: hover)").matches) return;
                const video = event.currentTarget.querySelector("video");
                if (video) void video.play().catch(() => {});
              }}
              onMouseLeave={(event) => event.currentTarget.querySelector("video")?.pause()}
              onClick={(event) => {
                track(EVENTS.filmPlay, { film: voice.id });
                event.currentTarget.querySelector("video")?.pause();
                if (voice.clip && document.querySelector(".sf-viewer")) window.dispatchEvent(new CustomEvent("nng:clip", { detail: voice }));
                else window.dispatchEvent(new CustomEvent("nng:film", { detail: { id: voice.film!.driveId, title: `${voice.name}: ${voice.film!.label}`, from: event.currentTarget } }));
              }}
            >
              <img src={voicePoster(voice)} alt="" decoding="async" />
              {voice.clip && (
                <video
                  src={asset(voice.clip)}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  tabIndex={-1}
                  onPlaying={(e) => e.currentTarget.classList.add("is-on")}
                  onPause={(e) => e.currentTarget.classList.remove("is-on")}
                />
              )}
              <span className="cw-card-shade" aria-hidden="true" />
              <span className="cw-card-frame" aria-hidden="true" />
              <span className="cw-card-time">{voice.film.duration}</span>
              <span className="cw-card-play" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.5 4v12l10-6z" />
                </svg>
              </span>
              <span className="cw-card-copy">
                <span className="cw-card-hook">
                  {(voice.hook ?? voice.film.label).split(" ").slice(0, -1).join(" ")} <span className="cw-hook-last">{(voice.hook ?? voice.film.label).split(" ").slice(-1)}</span>
                </span>
                <span className="cw-card-name">{voice.name} · Watch their story</span>
              </span>
            </button>
          )}

          <figure className="cw-slide" key={voice.id} aria-live="polite">
            <span className="cw-mark" aria-hidden="true">“</span>
            <blockquote>
              <p>{lead}{last && <em>{last}</em>}</p>
            </blockquote>
            <figcaption className="cw-person">
              <img src={voicePoster(voice)} alt="" width={56} height={56} decoding="async" />
              <span>
                <strong>{voice.name}</strong>
                <small>
                  {voice.context}
                  
                </small>
              </span>
            </figcaption>
          </figure>

          <div className="cw-nav">
            <button type="button" className="cw-arrow" onClick={() => go(-1)} aria-label="Previous testimonial">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 3L5 8l5 5" />
              </svg>
            </button>
            <div className="cw-dots">
              {voices.map((item, i) => (
                <button key={item.id} type="button" className="cw-dot" aria-label={`Testimonial ${i + 1} of ${voices.length}`} aria-current={i === index ? "true" : undefined} onClick={() => setIndex(i)} />
              ))}
            </div>
            <button type="button" className="cw-arrow" onClick={() => go(1)} aria-label="Next testimonial">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
