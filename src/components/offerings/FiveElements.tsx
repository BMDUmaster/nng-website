const ico = (d: string) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

// Clockwise from the top, as in the approved design.
const elements = [
  { name: "Earth", word: "Stability & Support", pos: "top", icon: ico('<path d="M3 25 12 10l5 7 3-4 9 12Z"/><path d="M12 10l2.5 4.2M20 13l1.8 2.4"/>') },
  { name: "Space", word: "Clarity & Expansion", pos: "right", icon: ico('<path d="M16 16a2.5 2.5 0 1 1 2.5-2.5A5 5 0 0 1 13.5 18.5 7.5 7.5 0 0 1 6 11a10 10 0 0 1 10-10"/><path d="M16 16a7.5 7.5 0 0 0 7.5 7.5A10 10 0 0 0 26 9"/>') },
  { name: "Air", word: "Movement & Growth", pos: "bottom-right", icon: ico('<path d="M4 12h15a3.5 3.5 0 1 0-3.5-3.5"/><path d="M4 18h20a3.5 3.5 0 1 1-3.5 3.5"/><path d="M4 24h9"/>') },
  { name: "Fire", word: "Energy & Motivation", pos: "bottom-left", icon: ico('<path d="M16 28c-5 0-8-3.3-8-7.6 0-4.8 4.4-7.2 5.2-12.4 3.4 2 4.6 5.4 4.2 8.2 1.4-.8 2.4-2.4 2.6-4 2.6 2.4 4 5.2 4 8.2 0 4.3-3 7.6-8 7.6Z"/>') },
  { name: "Water", word: "Flow & Emotions", pos: "left", icon: ico('<path d="M4 11c3-2.5 5-2.5 8 0s5 2.5 8 0 5-2.5 8 0"/><path d="M4 17c3-2.5 5-2.5 8 0s5 2.5 8 0 5-2.5 8 0"/><path d="M4 23c3-2.5 5-2.5 8 0s5 2.5 8 0 5-2.5 8 0"/>') },
];
const meditator = ico('<circle cx="16" cy="7" r="2.8"/><path d="M16 10.5c-2 0-3.2 1.4-3.2 3.6v4.2"/><path d="M16 10.5c2 0 3.2 1.4 3.2 3.6v4.2"/><path d="M12.8 14.5c-1.8 1.8-3.4 3-5.3 3.6M19.2 14.5c1.8 1.8 3.4 3 5.3 3.6"/><path d="M5 25.5c2.8-2.8 6.8-4 11-4s8.2 1.2 11 4c-3.2 1.6-7 2.3-11 2.3S8.2 27.1 5 25.5Z"/>');
const lotus = ico('<path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/>');

/**
 * Vastulogy, the five elements (Oct 20, from the approved design): deep green with leaves and stones at the edges;
 * Balanced Living at the centre with a seated figure; the five elements around a gold ring, each a cream disc with its
 * name and meaning beneath; a note card at the foot. Motion: the dotted rings turn, sparks travel the ring, the centre
 * breathes and the elements light up in turn.
 */
export function FiveElements() {
  return (
    <section className="fe3" aria-labelledby="five-elements-title">
      <div className="fe3-card">
        <span className="fe3-leaf" aria-hidden="true" />
        <span className="fe3-stones" aria-hidden="true" />
        <h2 id="five-elements-title" className="fe3-title">The five <em>elements</em></h2>
        <div className="fe3-wheel">
          <svg className="fe3-rings" viewBox="0 0 400 400" aria-hidden="true">
            <circle className="fe3-ring-a" cx="200" cy="200" r="150" fill="none" stroke="#D9B160" strokeWidth="1.2" strokeDasharray="1.5 7" strokeLinecap="round" />
            <circle className="fe3-ring-b" cx="200" cy="200" r="104" fill="none" stroke="#D9B160" strokeWidth="1" strokeDasharray="2 9" strokeLinecap="round" opacity=".7" />
            <g className="fe3-sparks">
              {[0, 72, 144, 216, 288].map((a) => <circle key={a} cx="200" cy="50" r="2.8" fill="#FFE7A8" transform={`rotate(${a + 36} 200 200)`} />)}
            </g>
          </svg>
          <div className="fe3-core">
            <span className="fe3-core-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: meditator }} />
            <strong>Balanced</strong>
            <span>Living</span>
          </div>
          <ul className="fe3-nodes">
            {elements.map((e, i) => (
              <li key={e.name} className={`fe3-node fe3-${e.pos}`} style={{ "--i": i } as React.CSSProperties}>
                <span className="fe3-disc" aria-hidden="true" dangerouslySetInnerHTML={{ __html: e.icon }} />
                <strong>{e.name}</strong>
                <small>{e.word}</small>
              </li>
            ))}
          </ul>
        </div>
        <p className="fe3-note">
          <span aria-hidden="true" dangerouslySetInnerHTML={{ __html: lotus }} />
          A way to discuss balance, not a biological model or proof of a health effect.
        </p>
      </div>
    </section>
  );
}
