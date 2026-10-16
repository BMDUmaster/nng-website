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
  kicker = "Real stories",
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

  // Which card is in front: on phones the card nearest the middle, on desktop the first fully shown. Drives the
  // dots and the larger centre card on phones.
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const mid = el.scrollLeft + el.clientWidth / 2;
      const wide = window.matchMedia("(min-width: 901px)").matches;
      let best = 0;
      let dist = Infinity;
      cards.forEach((card, i) => {
        const d = wide ? Math.abs(card.offsetLeft - el.scrollLeft) : Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid);
        if (d < dist) { dist = d; best = i; }
      });
      setActive(best);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { el.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const goTo = (i: number) => {
    const el = rail.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    const wide = window.matchMedia("(min-width: 901px)").matches;
    el.scrollTo({ left: wide ? card.offsetLeft - el.offsetLeft * 0 : card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
  };

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

  const scroll = (step: number) => goTo(Math.max(0, Math.min(voices.length - 1, active + step)));

  const renderCard = (voice: Voice, i = -1) => (
            <li key={voice.id} className={i === active ? "sf-card is-active" : "sf-card"} onMouseEnter={(e) => preview(e.currentTarget, true)} onMouseLeave={(e) => preview(e.currentTarget, false)}>
              <button type="button" className="sf-film" onClick={(e) => open(voice, e.currentTarget)}>
                <img src={voicePoster(voice)} alt="" loading="lazy" decoding="async" />
                {voice.clip && <video src={asset(voice.clip)} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1} onPlaying={(e) => e.currentTarget.classList.add("is-on")} onPause={(e) => e.currentTarget.classList.remove("is-on")} />}
                <span className="sf-shade" aria-hidden="true" />
                <span className="sf-frame" aria-hidden="true" />
                {voice.film && <span className="sf-time">{voice.film.duration}</span>}
                <span className="sf-play" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M5 3v10l8-5z" /></svg>
                </span>
                <span className="sf-center" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M5 3v10l8-5z" /></svg>
                </span>
                <span className="sf-copy">
                  <span className="sf-q" aria-hidden="true">“</span>
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
            <h2 id={`${id}-title`}>{title === "Hear the whole story" ? <>Hear the <em>whole</em> story</> : title}</h2>
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
          className="sf-rail"
          ref={rail}
          aria-label="Client films"
        >
          {voices.map((voice, i) => renderCard(voice, i))}
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
              <span className="sf-more-disc" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M5 3v10l8-5z" /></svg>
              </span>
              {showMore ? "Show fewer recordings" : "More client recordings"} <span className="sf-more-count">{showMore ? "−" : `+${more.length}`}</span>
            </button>
          )}
          <div className="sf-dots" role="group" aria-label="Choose a film">
            <button type="button" className="sf-arrow sf-arrow-m" onClick={() => scroll(-1)} aria-label="Previous film">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5" /></svg>
            </button>
            {voices.map((voice, i) => (
              <button key={voice.id} type="button" className="sf-dot" aria-label={`Film ${i + 1} of ${voices.length}`} aria-current={i === active ? "true" : undefined} onClick={() => goTo(i)} />
            ))}
            <button type="button" className="sf-arrow sf-arrow-m" onClick={() => scroll(1)} aria-label="Next film">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5" /></svg>
            </button>
          </div>
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
