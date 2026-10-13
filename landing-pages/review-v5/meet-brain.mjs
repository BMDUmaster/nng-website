// Brainology "Meet your guide", from the approved design: her photograph fading into pearl with a gold arc carrying four
// medallions, the words and three fact cards, her words, two actions, and a hanging gold brain.
const I = {
  brain: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6a4 4 0 0 0-4 4 4 4 0 0 0-3 6.5A4.5 4.5 0 0 0 10 24a4 4 0 0 0 6 2V8a3.5 3.5 0 0 0-3-2Z"/><path d="M19 6a4 4 0 0 1 4 4 4 4 0 0 1 3 6.5A4.5 4.5 0 0 1 22 24a4 4 0 0 1-6 2"/><path d="M16 12h-3M16 18h-4M19 15h-3M20 20h-4"/></svg>',
  heart: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 27v-5a9 9 0 1 1 13-8c0 3-1 4-2 6v7"/><path d="M15.5 17s-4-2.4-4-5a2 2 0 0 1 4-.6 2 2 0 0 1 4 .6c0 2.6-4 5-4 5Z"/></svg>',
  book: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h9a3 3 0 0 1 3 3v15a3 3 0 0 0-3-3H4zM28 8h-9a3 3 0 0 0-3 3v15a3 3 0 0 1 3-3h9z"/><path d="M7 13h5M7 17h5M20 13h5M20 17h5"/></svg>',
  lotus: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M16 24c-3-3-4.5-7-4.5-10.5S13.5 7 16 5c2.5 2 4.5 5 4.5 8.5S19 21 16 24Z"/><path d="M16 24c-4-.5-8-3-9.5-7.5 3-.5 6 .5 8 2.5M16 24c4-.5 8-3 9.5-7.5-3-.5-6 .5-8 2.5"/><path d="M6 26h20"/></svg>',
  people: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="11" r="4"/><path d="M5 25a7 7 0 0 1 14 0"/><circle cx="22" cy="12" r="3.2"/><path d="M20 18a6 6 0 0 1 8 6"/></svg>',
  leaf: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 25c0-11 8-18 19-18 0 11-7 19-18 19"/><path d="M7 25 18 14"/></svg>',
  mind: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6a4 4 0 0 0-4 4 4 4 0 0 0-3 6.5A4.5 4.5 0 0 0 10 24a4 4 0 0 0 6 2V8a3.5 3.5 0 0 0-3-2Z"/><path d="M19 6a4 4 0 0 1 4 4 4 4 0 0 1 3 6.5A4.5 4.5 0 0 1 22 24a4 4 0 0 1-6 2"/><path d="M16 11v15"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M7 5v14l11-7Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};
// A brain drawn in fine gold line, hanging on a thread.
const hangBrain = `<svg class="mb-hang" viewBox="0 0 120 360" aria-hidden="true"><path class="mb-thread" d="M60 0V152M60 208V330M20 0V60M100 0V80"/><path class="mb-dia" d="M60 336l5 6-5 6-5-6zM20 66l4 5-4 5-4-5zM100 86l4 5-4 5-4-5z"/><g class="mb-brain" transform="translate(28 150)"><path d="M30 8C20 2 6 8 6 22c-6 4-6 16 2 20-2 10 6 18 16 16 4 6 14 6 18 0V10C40 6 34 5 30 8Z"/><path d="M34 8c10-6 24 0 24 14 6 4 6 16-2 20 2 10-6 18-16 16"/><path d="M16 22c4 0 6 3 6 6M12 38c5-1 8 2 9 5M50 22c-4 0-6 3-6 6M54 38c-5-1-8 2-9 5M32 18v40"/></g></svg>`;

export function meetBrain(p, { esc, wa }) {
  const meds = [['brain', 'Thought<br>patterns'], ['heart', 'Emotions &amp;<br>reactions'], ['book', 'Beliefs &amp;<br>habits'], ['lotus', 'Everyday<br>practice']];
  return `<section class="mb" aria-labelledby="meet-title">
    <div class="mb-visual">
    <div class="mb-photo"><img src="../_shared/hero/meet-brain-wide.webp" alt="Narayani Garg in a pale green saree beside a white Buddha relief" width="1000" height="1000" loading="lazy"></div>
    <svg class="mb-arc" viewBox="0 0 600 700" aria-hidden="true"><path pathLength="1" d="M300 20A330 330 0 0 1 300 680"/><circle class="mb-bead" r="7"><animateMotion dur="9s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="linear" path="M300 20A330 330 0 0 1 300 680"/></circle><circle class="mb-arc-dot" cx="625" cy="350" r="6"/><circle class="mb-arc-dot" cx="560" cy="120" r="4"/></svg>
    <ul class="mb-meds" aria-label="What Brainology works with">${meds.map(([k, t], i) => `<li class="mb-med mb-med-${i}" style="--i:${i}"><span>${I[k]}</span><em>${t}</em></li>`).join('')}</ul>
    <div class="mb-name"><strong>Narayani Garg</strong><span>Psychic Spiritual Mentor</span><i aria-hidden="true"></i></div>
    </div>
    ${hangBrain}
    <span class="mb-plant" aria-hidden="true"></span>
    <div class="mb-copy">
      <p class="mb-eyebrow" data-reveal><span aria-hidden="true">✦</span>Meet your Brainology guide<i aria-hidden="true"></i></p>
      <h2 id="meet-title" data-reveal>First she listens.<br><em>Then she helps you change.</em></h2>
      <p class="mb-lead" data-reveal>Narayani asks about the moment that keeps repeating in your life, then helps you see the belief behind it and work on it with practical steps.</p>
      <ul class="mb-facts" data-reveal>
        <li><span>${I.people}</span><div><strong><b data-count="10000">10,000</b>+</strong><em>Clients guided</em></div></li>
        <li><span>${I.leaf}</span><div><strong>6 Practices</strong><em>NLP, EFT, Ho’oponopono and more</em></div></li>
        <li><span>${I.mind}</span><div><strong>Mind First</strong><em>Beliefs and habits before any remedy</em></div></li>
      </ul>
      <blockquote class="mb-quote" data-reveal><span aria-hidden="true">“</span><p lang="hi-Latn">Upay tab kaam karta hai jab dimaag kaam karta hai.</p><cite>Narayani Garg</cite></blockquote>
      <div class="mb-actions" data-reveal>${wa('meet', 'Talk to Narayani’s team', 'mb-cta').replace('</a>', `<i class="mb-cta-arrow" aria-hidden="true">${I.arrow}</i></a>`)}<a class="mb-ghost" href="#approach"><span aria-hidden="true">${I.play}</span>How Brainology works</a></div>
    </div>
  </section>`;
}
