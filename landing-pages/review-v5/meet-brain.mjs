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

const leaf = '<svg viewBox="0 0 40 60" aria-hidden="true"><path d="M20 58C20 40 8 30 6 14 4 6 12 2 20 2c8 0 16 4 14 12-2 16-14 26-14 44Z" fill="currentColor"/><path d="M20 56V8" stroke="rgb(255 255 255 / .45)" stroke-width="1" fill="none"/></svg>';
const sprig = '<svg viewBox="0 0 60 90" aria-hidden="true" fill="none" stroke="#C9A25A" stroke-width="1.2" stroke-linecap="round"><path d="M30 88C30 60 34 34 44 6"/><path d="M31 70c-8-2-14-8-16-16 8 1 14 7 16 16ZM33 54c8-2 14-8 15-16-8 1-14 7-15 16ZM35 38c-7-2-12-8-13-15 7 1 12 7 13 15ZM39 24c7-2 11-7 12-13-6 1-11 6-12 13Z"/></svg>';

export function meetBrain(p, { esc, wa }) {
  const meds = [['brain', 'Thought<br>patterns'], ['heart', 'Emotions &amp;<br>reactions'], ['book', 'Beliefs &amp;<br>habits'], ['lotus', 'Everyday<br>practice']];
  const left = ['Thoughts', 'Beliefs', 'Habits'], right = ['Emotions', 'Patterns', 'Behaviour'];
  return `<section class="m5" aria-labelledby="meet-title">
    <div class="m5-visual">
      <div class="m5-photo"><img src="../_shared/hero/meet-real.webp" alt="Narayani Garg in a blue silk saree beside a white Buddha relief" width="760" height="964" loading="lazy"></div>
      <p class="m5-script" aria-hidden="true"><span>Understand</span><span>your mind,</span><span>transform</span><span>your life</span></p>
      <ul class="m5-meds" aria-label="What Brainology works with">${meds.map(([k, t], i) => `<li style="--i:${i}"><span>${I[k]}</span><em>${t}</em></li>`).join('')}</ul>
      <div class="m5-name"><strong>Narayani Garg</strong><span>Psychic Spiritual Mentor</span></div>
    </div>
    <div class="m5-copy">
      <figure class="m5-brain" aria-hidden="true">
        <img src="../_shared/hero/brain-art.webp" alt="" width="206" height="306" loading="lazy">
        <ul class="m5-l">${left.map((t, i) => `<li style="--i:${i}">${t}<i></i></li>`).join('')}</ul>
        <ul class="m5-r">${right.map((t, i) => `<li style="--i:${i}"><i></i>${t}</li>`).join('')}</ul>
      </figure>
      <span class="m5-leaf m5-leaf-a" aria-hidden="true">${leaf}</span><span class="m5-leaf m5-leaf-b" aria-hidden="true">${leaf}</span>
      <div class="m5-head">
        <p class="m5-eyebrow"><span aria-hidden="true">✦</span>Meet your Brainology guide<i aria-hidden="true"></i></p>
        <h2 id="meet-title">What’s the Problem<br><em>You Keep Running Into?</em></h2>
        <p class="m5-lead">You know what you should do, yet it keeps not happening. The same situation comes back, and you react the same way. You’ve read the advice and tried to think differently, but little changes.</p>
        <p class="m5-lead">Here, we don’t start with theory or a one-size-fits-all program. We start with the problem.</p>
      </div>
      <ul class="m5-facts">
        <li><span>${I.people}</span><div><strong><b data-count="10000">10,000</b>+</strong><em>Worldwide clients</em></div></li>
        <li><span>${I.leaf}</span><div><strong>15+</strong><em>Years of experience</em></div></li>
        <li><span>${I.mind}</span><div><strong>50K+</strong><em>Lives transformed</em></div></li>
      </ul>
      <blockquote class="m5-quote"><span class="m5-q" aria-hidden="true">“</span><div><p lang="hi-Latn">Upay tab kaam karta hai jab dimaag kaam karta hai.</p><cite>Narayani Garg</cite></div><span class="m5-sprig" aria-hidden="true">${sprig}</span></blockquote>
      <div class="m5-actions">${wa('meet', 'Talk to Narayani’s team', 'm5-cta').replace('</a>', `<i class="m5-arrow" aria-hidden="true">${I.arrow}</i></a>`)}<a class="m5-ghost" href="#approach"><span aria-hidden="true">${I.play}</span>How Brainology works</a></div>
    </div>
  </section>`;
}
