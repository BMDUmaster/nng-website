// "Meet Narayani": a short introduction in place of the long video. Photograph in an arch, a two-line heading, her
// approach, three facts already published on the site, her own words, and one WhatsApp action.
const icons = {
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15 14.2a4.6 4.6 0 0 1 6 4.3"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3Z"/></svg>',
};

const meet = {
  brainology: { img: 'meet-narayani.webp', alt: 'Narayani Garg in a pale green saree, standing before a white Buddha relief', h: 'She listens first.<br><em>Then helps you see the pattern.</em>', lead: 'Narayani begins with the person, not the prediction. She asks about the moment that keeps returning, then looks with you at the beliefs and reactions behind it, so the change you practise is your own.' },
  astrology: { img: 'meet-astrology.webp', alt: 'Narayani Garg in a red and orange bandhani saree at her home temple', h: 'She reads the chart.<br><em>And listens to the person.</em>', lead: 'Narayani reads the chart themes relevant to your question beside your real circumstances. She explains her reasoning in plain words, and the decision stays with you.' },
  numerology: { img: 'meet-numerology.webp', alt: 'Narayani Garg in a sea-green sequinned saree before a white Buddha relief', h: 'She reads the numbers.<br><em>And the reason behind them.</em>', lead: 'Narayani begins with why you are asking: a new name, a business shortlist or a change you are weighing. She explains the traditional interpretation in plain words, and the decision to change anything stays with you.' },
  vastulogy: { img: 'meet-vastulogy.webp', alt: 'Narayani Garg in a royal blue silk saree before a white Buddha relief', h: 'She reads the space.<br><em>And the people who use it.</em>', lead: 'Narayani looks at direction, layout and everyday use together with the people who live or work there. She explains her reasoning in plain words, and what you change stays your choice.' },
};

export function meetSection(p, { esc, wa }) {
  const m = meet[p.slug] || meet.brainology;
  return `<section class="v5-meet" aria-labelledby="meet-title"><div class="wrap mt-inner">
    <figure class="mt-photo" data-reveal>
      <span class="mt-glow" aria-hidden="true"></span>
      <div class="mt-arch"><img src="../_shared/hero/${m.img}" alt="${m.alt}" width="720" height="910" loading="lazy"></div>
      <figcaption><strong>Narayani Garg</strong><span>Psychic Spiritual Mentor</span></figcaption>
    </figure>
    <div class="mt-copy">
      <p class="mt-eyebrow" data-reveal><span aria-hidden="true">✦</span>Meet your guide</p>
      <h2 id="meet-title" data-reveal>${m.h}</h2>
      <p class="mt-lead" data-reveal>${m.lead}</p>
      <ul class="mt-facts" data-reveal>
        <li><span>${icons.people}</span><strong><b data-count="10000">10,000</b>+</strong><em>clients guided</em></li>
        <li><span>${icons.book}</span><strong>Author</strong><em>Change Your Mind, Transform Your Life</em></li>
        <li><span>${icons.globe}</span><strong>Worldwide</strong><em>Online, or in person by appointment</em></li>
      </ul>
      <blockquote class="mt-quote" data-reveal><span class="mt-qmark" aria-hidden="true">“</span><p lang="hi-Latn">Upay tab kaam karta hai jab dimaag kaam karta hai.</p><cite>A remedy works when the mind works. — Narayani Garg</cite></blockquote>
      <div class="mt-cta" data-reveal>${wa('meet', 'Talk to Narayani’s team', 'wa-btn')}</div>
    </div>
  </div></section>`;
}
