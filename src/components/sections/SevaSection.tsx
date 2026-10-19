"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";

const ico = (d: string) =>
  `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const lotusPath =
  '<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/><path d="M15.4 25.2C8.8 25.6 3.6 23 1.6 19.4M16.6 25.2c6.6.4 11.8-2.2 13.8-5.8"/>';
const lotus = ico(lotusPath);

const moments = [
  { src: "/images/seva-entrance.webp", alt: "Narayani Garg arriving at Apna Ghar Ashram, Noida", title: "Apna Ghar Ashram", text: "A home filled with care", icon: ico('<path d="M5 15 16 6l11 9"/><path d="M8 13v13h16V13"/><path d="M13.5 26v-7h5v7"/>') },
  { src: "/images/seva-blessing.webp", alt: "Narayani Garg sitting with women of the ashram", title: "Time Together", text: "Listening, sharing, caring", icon: ico('<path d="M16 26S5 19.4 5 12.2A5.6 5.6 0 0 1 16 9.8a5.6 5.6 0 0 1 11 2.4C27 19.4 16 26 16 26Z"/>') },
  { src: "/images/seva-together.webp", alt: "Narayani Garg with a resident of Apna Ghar Ashram", title: "Offering Blessings", text: "Spreading love and positivity", icon: ico('<circle cx="16" cy="10" r="3.6"/><path d="M9.5 24a6.5 6.5 0 0 1 13 0"/><circle cx="7.5" cy="13" r="2.6"/><path d="M3.5 22.5a4.5 4.5 0 0 1 5.6-4.3"/><circle cx="24.5" cy="13" r="2.6"/><path d="M28.5 22.5a4.5 4.5 0 0 0-5.6-4.3"/>') },
];

const values = [
  { title: "Care & Support", text: "Time, attention and companionship", icon: ico('<path d="M16 21s-5.5-3.4-5.5-7a3 3 0 0 1 5.5-1.7 3 3 0 0 1 5.5 1.7c0 3.6-5.5 7-5.5 7Z"/><path d="M4 18c2 0 3.5 1 5 2.5l3 3c1 1 2.5 1 3.5 0M28 18c-2 0-3.5 1-5 2.5l-3 3c-1 1-2.5 1-3.5 0M4 18v8M28 18v8"/>') },
  { title: "Women Empowerment", text: "Respect, dignity and a better tomorrow", icon: ico('<circle cx="16" cy="9.5" r="3.5"/><path d="M10 22a6 6 0 0 1 12 0"/><circle cx="7" cy="13" r="2.6"/><path d="M3 23a4.2 4.2 0 0 1 6-3.6"/><circle cx="25" cy="13" r="2.6"/><path d="M29 23a4.2 4.2 0 0 0-6-3.6"/><path d="M8 26h16"/>') },
  { title: "A Brighter Tomorrow", text: "Together for a kinder, happier world", icon: ico('<path d="M4 22h24"/><path d="M9 22a7 7 0 0 1 14 0"/><path d="M16 9v3M7.5 12.5l2 2M24.5 12.5l-2 2M4 17.5h2.5M25.5 17.5H28"/>') },
];

/**
 * "Seva" (Oct 18, from the approved banner): her visit to Apna Ghar Ashram, Noida. The film in a gold frame with a
 * location tag and a play button; beside it the heading, her words, and three moments from the visit with captions;
 * underneath, a band of three values. The film plays muted when the section comes into view; play or "Watch video" restarts it with sound.
 */
export function SevaSection() {
  const video = useRef<HTMLVideoElement>(null);
  const rail = useRef<HTMLUListElement>(null);
  const [sound, setSound] = useState(false);
  const [running, setRunning] = useState(false);
  const [active, setActive] = useState(0);

  // The film starts, muted, as soon as the section comes into view, and pauses when it leaves.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches && !v.dataset.asked) return;
        v.play().catch(() => {});
      } else v.pause();
    }, { threshold: 0.3 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  // Phones: the three moments scroll sideways; the dots follow.
  useEffect(() => {
    const r = rail.current;
    if (!r) return;
    const onScroll = () => {
      const items = [...r.children] as HTMLElement[];
      const mid = r.scrollLeft + r.clientWidth / 2;
      let best = 0;
      items.forEach((el, i) => { if (Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid) < Math.abs(items[best].offsetLeft + items[best].offsetWidth / 2 - mid)) best = i; });
      setActive(best);
    };
    r.addEventListener("scroll", onScroll, { passive: true });
    return () => r.removeEventListener("scroll", onScroll);
  }, []);

  const play = () => {
    const v = video.current;
    if (!v) return;
    v.dataset.asked = "1";
    if (!sound) v.currentTime = 0;
    v.muted = false;
    v.play().catch(() => {});
    setSound(true);
  };
  const goTo = (i: number) => {
    const r = rail.current;
    const el = r?.children[i] as HTMLElement | undefined;
    if (r && el) r.scrollTo({ left: el.offsetLeft - r.offsetLeft - 14, behavior: "smooth" });
  };

  return (
    <section className="sv2" aria-labelledby="seva-title">
      <span className="sv2-leaf sv2-leaf-l" aria-hidden="true" />
      <span className="sv2-leaf sv2-leaf-r" aria-hidden="true" />
      <div className="sv2-inner">
        <div className={`sv2-film${sound ? " has-sound" : ""}${running ? " is-running" : ""}`}>
          <video
            ref={video}
            muted
            loop={!sound}
            playsInline
            preload="metadata"
            controls={sound}
            poster={asset("/images/seva-poster.webp")}
            onPlay={() => setRunning(true)}
            onPause={() => setRunning(false)}
            onEnded={() => setSound(false)}
            aria-label="Narayani Garg's visit to Apna Ghar Ashram, Noida"
          >
            <source src={asset("/videos/seva-apna-ghar.mp4")} type="video/mp4" />
          </video>
          {!sound && (
            <>
              <p className="sv2-place">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.4" /></svg>
                <span>Apna Ghar Ashram<br /><small>Noida</small></span>
              </p>
              <p className="sv2-script" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 9a3.8 3.8 0 0 1 7 1.8C19 15.6 12 20 12 20Z" /></svg>
                <span>Spreading<br />Care Together</span>
              </p>
              <button type="button" className="sv2-play" onClick={play} aria-label="Play the film with sound">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.5 5.5v13l10-6.5z" /></svg>
              </button>
              <button type="button" className="sv2-watch" onClick={play}>
                <span aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 5.5v13l10-6.5z" /></svg></span>
                Watch video
              </button>
            </>
          )}
        </div>

        <div className="sv2-copy">
          <p className="sv2-kicker">
            Seva · Apna Ghar Ashram, Noida
          </p>
          <h2 id="seva-title">
            Where <em>blessings</em> are <em>shared</em>
          </h2>
          <p className="sv2-lead">
            Narayani visits Apna Ghar Ashram in Noida to spend time with the women who live there, listening to their
            stories and sharing moments of warmth and care.
          </p>
          <blockquote className="sv2-quote">
            <p>“Namo Narayan. We have come to our home, where so many Goddesses live.”</p>
            <footer>Narayani Garg</footer>
            <span className="sv2-quote-lotus" aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
          </blockquote>
          <ul ref={rail} className="sv2-moments" aria-label="Moments from the visit">
            {moments.map((m) => (
              <li key={m.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(m.src)} alt={m.alt} width={540} height={386} loading="lazy" decoding="async" />
                <div className="sv2-m-cap">
                  <span className="sv2-m-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: m.icon }} />
                  <span>
                    <strong>{m.title}</strong>
                    <small>{m.text}</small>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="sv2-dots" role="group" aria-label="Choose a moment">
            {moments.map((m, i) => (
              <button key={m.src} type="button" aria-label={`Moment ${i + 1} of ${moments.length}`} aria-current={i === active ? "true" : undefined} onClick={() => goTo(i)} />
            ))}
          </div>
        </div>

        <ul className="sv2-values" aria-label="What the visit stands for">
          {values.map((v) => (
            <li key={v.title}>
              <span className="sv2-v-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: v.icon }} />
              <span>
                <strong>{v.title}</strong>
                <small>{v.text}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
