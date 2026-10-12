// Brainology hero visual: three paper practice cards fanned on the plum ground, like a deck on a table. The card at the
// back comes forward every few seconds; hovering holds the deck.
const icons = [
  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 24s7.5-12 20-12 20 12 20 12-7.5 12-20 12S4 24 4 24Z"/><circle cx="24" cy="24" r="6.5"/><circle cx="24" cy="24" r="2" fill="currentColor"/></svg>',
  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="22" cy="17" r="7.5"/><path d="M8 41c0-8 6.3-13 14-13s14 5 14 13"/><path d="M36 6v6M33 9h6M34 7l4 4M38 7l-4 4"/></svg>',
  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M38 18a15 15 0 0 0-26-5l-4 4"/><path d="M8 8v9h9"/><path d="M10 30a15 15 0 0 0 26 5l4-4"/><path d="M40 40v-9h-9"/></svg>',
];
const lines = ['Name the moment that keeps returning.', 'See the belief and words that hold it.', 'Take one small practice into the day.'];

export function brainHero(p, { esc }) {
  return `<div class="hero-visual hb" aria-hidden="true">
    <span class="hb-glow"></span><span class="hb-ring"></span><span class="hb-ring hb-ring-2"></span>
    <div class="hb-deck" data-deck>${p.method.map(([t], i) => `
      <article class="hb-card" data-pos="${i}">
        <div class="hb-card-in">
          <p class="hb-step">Step 0${i + 1}</p>
          <span class="hb-icon">${icons[i]}</span>
          <h3>${esc(t)}</h3>
          <span class="hb-orn">❦</span>
          <p class="hb-line">${lines[i]}</p>
          <p class="hb-foot">${esc(p.short || p.name)}</p>
        </div>
      </article>`).join('')}
    </div>
    <p class="hb-caption"><span>✦</span> Notice · Understand · Practise</p>
  </div>`;
}
