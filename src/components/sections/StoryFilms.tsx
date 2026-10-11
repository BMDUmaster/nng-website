"use client";

import { useEffect, useRef, useState } from "react";
import { EnquiryTrigger } from "@/components/enquiry/EnquiryTrigger";
import { EVENTS, track } from "@/lib/analytics";
import { voicePoster, type Voice } from "@/content/voices";
import { asset } from "@/lib/assets";

/**
 * "Hear the whole story": client films as tall cards in a row. A film previews silently while the pointer is on
 * its card (desktop) or while it is the card in view (phones). Pressing a card plays the whole film with sound in
 * a viewer; films without a local recording open the Drive player as before.
 */
export function StoryFilms({
  voices,
  more,
  id = "transformation",
  kicker = "Client films",
  title = "Hear the whole story",
  lead = "Conversations about family, belief in oneself and finding a way through.",
}: {
  voices: Voice[];
  more: Voice[];
  id?: string;
  kicker?: string;
  title?: string;
  lead?: string;
}) {
  const rail = useRef<HTMLUListElement>(null);
  const viewer = useRef<HTMLDialogElement>(null);
  const [playing, setPlaying] = useState<Voice | null>(null);
  const [showMore, setShowMore] = useState(false);
  const held = useRef(false);

  // The row drifts slowly and loops (the cards are drawn twice); a pointer or touch on it holds it still.
  useEffect(() => {
    const el = rail.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let last = 0;
    let carry = 0;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.2 });
    observer.observe(el);
    const step = (time: number) => {
      const dt = last ? Math.min(time - last, 64) : 16;
      last = time;
      if (visible && !held.current && !document.hidden && !viewer.current?.open) {
        carry += dt * 0.035;
        const whole = Math.floor(carry);
        if (whole) {
          el.scrollLeft += whole;
          carry -= whole;
        }
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  // Phones: the card nearest the middle of the rail plays its silent preview.
  useEffect(() => {
    const box = rail.current;
    if (!box || window.matchMedia("(hover: hover)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          if (!video) return;
          if (entry.isIntersecting) void video.play().catch(() => {});
          else video.pause();
        }),
      { root: null, threshold: 0.75 },
    );
    box.closest(".sf")?.querySelectorAll(".sf-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [showMore]);

  const preview = (card: HTMLElement, on: boolean) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const video = card.querySelector("video");
    if (!video) return;
    if (on) {
      video.currentTime = 0;
      void video.play().catch(() => {});
    } else video.pause();
  };

  const open = (voice: Voice, from: HTMLElement) => {
    track(EVENTS.filmPlay, { film: voice.id });
    rail.current?.querySelectorAll("video").forEach((v) => v.pause());
    if (voice.clip) {
      setPlaying(voice);
      viewer.current?.showModal();
    } else if (voice.film) {
      window.dispatchEvent(new CustomEvent("nng:film", { detail: { id: voice.film.driveId, title: `${voice.name}: ${voice.film.label}`, from } }));
    }
  };

  // Other sections (the testimonial slider) ask this viewer to play a local film.
  useEffect(() => {
    const onClip = (event: Event) => {
      const voice = (event as CustomEvent<Voice>).detail;
      if (!voice?.clip) return;
      setPlaying(voice);
      viewer.current?.showModal();
    };
    window.addEventListener("nng:clip", onClip);
    return () => window.removeEventListener("nng:clip", onClip);
  }, []);

  const close = () => {
    viewer.current?.close();
    setPlaying(null);
  };

  const scroll = (step: number) => {
    const el = rail.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const half = el.scrollWidth / 2;
    if (step < 0 && el.scrollLeft < card.offsetWidth) el.scrollLeft += half;
    el.scrollBy({ left: step * (card.offsetWidth + 16), behavior: "smooth" });
  };

  const renderCard = (voice: Voice, clone = false) => (
            <li key={clone ? `${voice.id}-again` : voice.id} className="sf-card" aria-hidden={clone || undefined} inert={clone || undefined} onMouseEnter={(e) => preview(e.currentTarget, true)} onMouseLeave={(e) => preview(e.currentTarget, false)}>
              <button type="button" className="sf-film" onClick={(e) => open(voice, e.currentTarget)}>
                <img src={voicePoster(voice)} alt="" loading="lazy" decoding="async" />
                {voice.clip && <video src={asset(voice.clip)} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} onPlaying={(e) => e.currentTarget.classList.add("is-on")} onPause={(e) => e.currentTarget.classList.remove("is-on")} />}
                <span className="sf-shade" aria-hidden="true" />
                <span className="sf-frame" aria-hidden="true" />
                {voice.film && <span className="sf-time">{voice.film.duration}</span>}
                <span className="sf-play" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M5 3v10l8-5z" /></svg>
                </span>
                <span className="sf-copy">
                  <span className="sf-hook">{voice.hook ?? voice.film?.label}</span>
                  <span className="sf-name">{voice.name}</span>
                  <span className="sf-context">{voice.context}</span>
                </span>
                <span className="visually-hidden">: watch {voice.name}</span>
              </button>
            </li>
          );

  return (
    <section className="sf" id={id} aria-labelledby={`${id}-title`}>
      <div className="sf-inner">
        <header className="sf-head">
          <div>
            <p className="sf-kicker">{kicker}</p>
            <h2 id={`${id}-title`}>{title}</h2>
            {lead && <p className="sf-lead">{lead}</p>}
          </div>
          <div className="sf-head-actions">
            <button type="button" className="sf-arrow" onClick={() => scroll(-1)} aria-label="Previous films">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5" /></svg>
            </button>
            <button type="button" className="sf-arrow" onClick={() => scroll(1)} aria-label="Next films">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5" /></svg>
            </button>
          </div>
        </header>

        <ul
          className="sf-rail is-looping"
          ref={rail}
          aria-label="Client films"
          onMouseEnter={() => (held.current = true)}
          onMouseLeave={() => (held.current = false)}
          onTouchStart={() => (held.current = true)}
          onTouchEnd={() => window.setTimeout(() => (held.current = false), 2500)}
          onFocus={() => (held.current = true)}
          onBlur={() => (held.current = false)}
        >
          {voices.map((voice) => renderCard(voice))}
          {voices.map((voice) => renderCard(voice, true))}
        </ul>

        {showMore && (
          <div className="sf-extra" id="sf-more-films">
            <p className="sf-extra-title">More client recordings</p>
            <ul className="sf-rail sf-rail-more" aria-label="More client recordings">
              {more.map((voice) => renderCard(voice))}
            </ul>
          </div>
        )}

        <div className="sf-foot">
          {more.length > 0 && (
            <button
              type="button"
              className="sf-more"
              aria-expanded={showMore}
              aria-controls="sf-more-films"
              onClick={() => setShowMore((v) => !v)}
            >
              {showMore ? "Show fewer recordings" : "More client recordings"} <span>{showMore ? "−" : `+${more.length}`}</span>
            </button>
          )}
          <EnquiryTrigger className="sf-enquire" source="home-films">
            Start your own enquiry <span aria-hidden="true">→</span>
          </EnquiryTrigger>
        </div>
        <p className="sf-note">These are personal experiences, not promises of the same outcome.</p>
      </div>

      <dialog ref={viewer} className="sf-viewer" onClose={() => setPlaying(null)} onClick={(e) => e.target === e.currentTarget && close()} aria-label={playing ? `${playing.name}: ${playing.film?.label ?? "client film"}` : "Client film"}>
        {playing?.clip && (
          <div className="sf-viewer-box">
            <video key={playing.id} src={asset(playing.clip)} poster={voicePoster(playing)} controls autoPlay playsInline />
            <div className="sf-viewer-caption">
              <strong>{playing.name}</strong>
              <span>{playing.film?.label ?? playing.context}</span>
            </div>
            <button type="button" className="sf-viewer-close" onClick={close} aria-label="Close film">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="M4 4l10 10M14 4L4 14" /></svg>
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
