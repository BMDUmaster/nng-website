"use client";

import { useIllustrationMotion } from "./useIllustrationMotion";
import styles from "./ElementsOrbit.module.css";

const elements = [
  { name: "Space", x: 170, y: 46 },
  { name: "Air", x: 288, y: 132 },
  { name: "Fire", x: 243, y: 270 },
  { name: "Water", x: 97, y: 270 },
  { name: "Earth", x: 52, y: 132 },
];

/** Transform-only motion. The spiritual being and element labels never rotate. */
export function ElementsOrbit() {
  const { ref, paused, reduced, running, toggle } = useIllustrationMotion();
  return <figure ref={ref} className={styles.figure} data-elements-orbit data-running={running}>
    <figcaption>The five elements, in a traditional framework</figcaption>
    <svg viewBox="0 0 340 340" role="img" aria-label="Earth, water, fire, air and space revolving around a stationary spiritual being, illustrating a traditional framework">
      <circle cx="170" cy="170" r="124" className={styles.path} />
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="170" cy="170" r="77" />
        <circle cx="170" cy="146" r="14" />
        <path d="M146 190c1-36 47-36 48 0M148 189h44" />
      </g>
      <text x="170" y="213" textAnchor="middle" fill="currentColor" fontSize="14">Spiritual being</text>
      <g className={styles.orbit}>
        {elements.map(({ name, x, y }) => <g key={name} transform={`translate(${x} ${y})`}>
          <g className={styles.upright} data-element={name}>
            <circle r="27" fill="var(--pearl, #faf6f0)" stroke="currentColor" strokeWidth="1.2" />
            <text y="5" textAnchor="middle" fill="currentColor" fontSize="15">{name}</text>
          </g>
        </g>)}
      </g>
    </svg>
    <div className={styles.controls}>
      <button type="button" onClick={toggle} disabled={reduced} aria-pressed={paused}>
        {reduced ? "Motion reduced" : paused ? "Resume element motion" : "Pause element motion"}
      </button>
    </div>
    <p>A way to discuss balance, not a biological model or proof of a health effect.</p>
  </figure>;
}
