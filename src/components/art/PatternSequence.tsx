"use client";

import type { CSSProperties } from "react";
import { useIllustrationMotion } from "./useIllustrationMotion";
import styles from "./PatternSequence.module.css";

const folds = "M111 22v70M70 23c-6 10 0 22 14 22M41 53c9-7 21-4 26 5M57 86c-2-10 6-20 20-17M96 94c5-10 1-22-7-29M151 20c6 12 0 23-12 25M182 47c-13-4-24 2-25 12M161 81c-9-8-23-5-28 4";

export function PatternSequence() {
  const { ref, paused, reduced, running, toggle } = useIllustrationMotion();
  return <figure ref={ref} className={styles.figure} data-pattern-sequence data-running={running} aria-label="Narayani’s spiritual approach: patterns, thoughts, beliefs and situations">
    <svg className={styles.brain} viewBox="0 0 220 110" role="img" aria-label="A conceptual mind drawing, not a medical brain scan">
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M111 22c-12-13-34-11-41 1-20-3-35 13-30 29-14 17-1 35 17 34 5 17 27 17 39 8 8 11 24 10 27-1 14 7 35 4 38-12 23 1 35-17 24-34 4-19-15-33-32-27-8-12-29-15-42 2Z" />
        <path d={folds} />
        <path className={styles.trace} d={folds} aria-hidden="true" />
      </g>
    </svg>
    <figcaption>A spiritual being, with patterns worth understanding</figcaption>
    <div className={styles.sequence}>
      <div className={styles.connector} aria-hidden="true"><span className={styles.signal} /></div>
      <ol>{["Patterns", "Thoughts", "Beliefs", "Situations"].map((word, i) => <li key={word} style={{ "--step": i } as CSSProperties}>
        <span className={styles.number}><span className={styles.highlight} aria-hidden="true" /><span>{i + 1}</span></span>
        <strong>{word}</strong>
      </li>)}</ol>
    </div>
    <div className={styles.controls}><button type="button" onClick={toggle} disabled={reduced} aria-pressed={paused}>
      {reduced ? "Motion reduced" : paused ? "Resume sequence motion" : "Pause sequence motion"}
    </button></div>
    <p>Narayani’s framework for reflection, not a scientific explanation of what causes life events.</p>
  </figure>;
}
