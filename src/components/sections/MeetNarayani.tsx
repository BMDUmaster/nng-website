"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/assets";

type Mode = "idle" | "preview" | "sound";

/** The film opens on a few seconds of title card; the silent loop starts after it. */
const INTRO = 3.6;

/**
 * "Meet Narayani": her line in large type beside her introduction film, in the same gold arch as the hero
 * portrait. When the section comes into view the film plays silently on a loop (browsers only allow muted
 * autoplay) and pauses again when it leaves; "Watch with sound" starts it from the beginning with sound and the
 * browser's controls. With reduced motion or data saver on, it waits for a press instead.
 */
export function MeetNarayani({ bookTitle }: { bookTitle: string }) {
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
          <h2 id="founder-film-title">Meet Narayani</h2>
          <blockquote className="mn-quote">
            <p>“The spirit who is doing a ritual is spiritual.”</p>
          </blockquote>
        </div>

        <div className="mn-film">
          <div className={`mn-arch is-${mode}`}>
            <video
              ref={video}
              controls={mode === "sound"}
              playsInline
              muted
              preload="none"
              poster={asset("/images/narayani-about-authentic-560.webp")}
              aria-label="Introduction to Dr. Narayani Garg"
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
                <span>Watch with sound</span>
              </button>
            )}
          </div>
        </div>

        <div className="mn-body">
          <p>Narayani sees the person as a spiritual being. Her starting point is the mind: understanding a pattern, then choosing how to respond.</p>
          <p>
            <em>{bookTitle}.</em> Hear her explain what this means in practice.
          </p>
          <Link prefetch={false} className="mn-link" href="/about/">
            <span>Get to know Narayani</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
