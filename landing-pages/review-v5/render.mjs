// Refined landing page body (Oct 2026), used for pages marked `v5: true` in content.mjs. The header, footer,
// dialogs and enquiry behaviour are shared with the other landing pages; the sections between them are drawn here.
import { vastuPlan, chevron, leaves } from './vastu-plan.mjs';
import { brainApproach } from './brain-approach.mjs';

const person = 'Narayani Garg';
// Client films served by the website (public/videos/stories), keyed by landing-page voice.
const clips = { deepa: 'deepa', manish: 'manish', navleen: 'navleen', london: 'shelley', puneet: 'puneet' };
const bookTitle = 'Change Your Mind, Transform Your Life';

const play = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>';
const down = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>';
const soundOff = '<svg class="snd-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="m17 9 4 6m0-6-4 6"/></svg>';
const soundOn = '<svg class="snd-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/></svg>';
const waIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.3 21.7l5-1.3A9.7 9.7 0 1 0 12 2.2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 19.9Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.2-.2-.4-.3Z"/></svg>';

export function renderMain(p, h) {
  const { esc, lines, cta, icon, pageIcon, scenarioArt, serviceVisual, voices, assets } = h;

  /* Opening. */
  const hero = `<div class="hero-banner v5-hero-banner"><section class="hero wrap v5-hero" id="top" aria-labelledby="hero-title">
    <div class="hero-copy">
      <p class="v5-pill">${esc(p.short || p.name)}</p>
      <p class="hero-role">${person} · Psychic Spiritual Mentor</p>
      <h1 id="hero-title">${esc(p.headline[0])}<br><span>${esc(p.headline[1])}</span></h1>
      <p class="hero-description">${esc(p.description)}</p>
      <div class="hero-actions">${cta(p, 'hero')}<a class="v5-ghost" href="#ways"><span>See what we can discuss</span><i aria-hidden="true">${down}</i></a></div>
      <ul class="v5-facts">${p.facts.map(([a, b], i) => `<li style="--i:${i}"><span class="v5-facts-icon">${pageIcon(p, 'facts', i)}</span><strong>${esc(a)}</strong><span>${esc(b)}</span></li>`).join('')}</ul>
      <p class="hero-note">Enquire with the NNG team. Scope and fees are explained before you book.</p>
    </div>
    <div class="hero-visual">
      <figure class="v5-film">
        <div class="v5-film-frame">
          <video id="hero-intro" autoplay muted loop playsinline preload="auto" poster="${assets}intro-frame.jpg" aria-label="Narayani’s original introduction video"><source src="${assets}introduction.mp4" type="video/mp4">Your browser cannot play this video. <a href="${assets}introduction.mp4">Open Narayani’s introduction.</a></video>
          <button class="v5-sound" type="button" aria-pressed="false" aria-label="Turn sound on">${soundOff}${soundOn}</button>
          <figcaption><span class="v5-live" aria-hidden="true"></span><span>Meet Narayani. <em>In her own words.</em></span></figcaption>
        </div>
      </figure>
    </div>
  </section></div>`;

  /* Her book, opening slowly while in view, beside the clientele. */
  const page = (folio, body, plate = false) => `${plate ? '' : `<span class="bk-run">${folio % 2 === 0 ? bookTitle : person}</span>`}<div class="bk-body">${body}</div><span class="bk-folio">${folio}</span>`;
  // Printed pages: three chapter openings, a photographic plate, the parts of a pattern and her words.
  const chapters = [
    ['One', 'Mind first', 'A remedy is an instruction: chant this, keep that in the north-east, wear this. It has to be carried out on an ordinary day, by someone who may be tired, busy or doubtful.', 'If that state of mind is never looked at, the instruction waits on a shelf.'],
    ['Two', 'What a pattern is made of', 'A pattern is a small chain that repeats. Naming its parts makes it easier to see, and easier to interrupt at the one part you can reach.', 'Reactions are fast because they have been rehearsed.'],
    ['Three', 'Practise', 'You decide to respond differently. Then the same moment arrives, and the old reaction returns.', 'Recognising that pattern is the starting point, not a reason to blame yourself.'],
  ];
  const fronts = chapters.map(([no, title, a, b], i) => page(3 + i * 2, `<span class="bk-chapter">Chapter ${no}</span><strong class="bk-head">${title}</strong><span class="bk-orn bk-orn-sm">❧</span><p class="bk-drop">${a}</p><p class="bk-para">${b}</p>`));
  const backs = [
    page(4, `<figure class="bk-photo"><img src="${assets}approach-narayani-900.webp" alt="" loading="lazy" decoding="async"><figcaption>${person}</figcaption></figure>`, true),
    page(6, `<div class="bk-parts"><span class="bk-chapter">The parts of the chain</span>${[['A thought', 'The first words you tell yourself.'], ['A belief', 'An assumption you take as true.'], ['The words you use', '“Always”, “never” and “should”.'], ['A reaction', 'What happens before you decide.']].map(([t, d]) => `<p><b>${t}</b>${d}</p>`).join('')}</div>`),
    page(8, `<blockquote class="bk-quote"><span class="bk-orn" aria-hidden="true">❦</span><p lang="hi-Latn">“Upay tab kaam karta hai jab dimaag kaam karta hai.”</p><cite>A remedy works when the mind works.</cite></blockquote>`),
  ];
  const sectors = [['business', 'Banking professionals'], ['career', 'CEOs of MNCs &amp; core sector companies'], ['person', 'Women entrepreneurs'], ['education', 'Printing, education &amp; hospitals']];
  const book = `<section class="bk v5-book" aria-labelledby="book-title"><div class="bk-inner wrap">
    <div class="bk-stage" aria-hidden="true">
      <div class="bk-glow"></div>
      <div class="bk-book">
        <div class="bk-back"></div><div class="bk-block"></div>
        <div class="bk-page bk-page-right">${page(9, `<span class="bk-orn">✿</span><strong>21</strong><span class="bk-days">days of reflection and everyday inner practice</span><span class="bk-rule"></span><em>Mind first</em>`)}</div>
        ${[2, 1, 0].map((i) => `<div class="bk-leaf bk-leaf-${i + 1}"><div class="bk-face bk-face-front">${fronts[i]}</div><div class="bk-face bk-face-back">${backs[i]}</div></div>`).join('')}
        <div class="bk-cover"><img class="bk-front" src="${assets}book-cover.webp" width="440" height="622" alt="" loading="lazy" decoding="async"><div class="bk-inside"><div class="bk-bookplate"><img src="${assets}narayani.webp" alt="" loading="lazy" decoding="async"><span>${person}</span><small>Psychic Spiritual Mentor</small><span class="bk-rule"></span><em>Mind first</em></div></div></div>
      </div>
      <div class="bk-shadow"></div>
    </div>
    <div class="v5-book-copy">
      <p class="v5-kicker">${person} / Author</p>
      <h2 id="book-title">Change Your Mind,<br><span>Transform Your Life</span></h2>
      <p class="v5-book-lead">Her mind-first perspective, in her own words.</p>
      <div class="v5-trust">
        <p class="v5-trust-title">Trusted by <strong data-count="10000">10,000</strong>+ clients</p>
        <ul class="v5-sectors">${sectors.map(([ic, label], i) => `<li style="--i:${i}"><span>${icon(ic)}</span>${label}</li>`).join('')}</ul>
        <p class="v5-fine">Individual clients, not endorsements by their organisations.</p>
      </div>
    </div>
  </div></section>`;

  /* The question you bring. */
  const situations = `<section class="section wrap v5-situations" aria-labelledby="situation-title">
    <div class="v5-head"><p class="eyebrow">THE QUESTION YOU BRING</p><h2 id="situation-title">${lines(p.situationTitle)}</h2></div>
    <div class="v5-rail" data-rail>${p.situations.map(([t, d], i) => `<article class="v5-sit" data-reveal style="--i:${i}"><span class="v5-sit-no">0${i + 1}</span><div class="v5-sit-art">${scenarioArt(p, i)}</div><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join('')}</div>
    <div class="v5-dots" aria-hidden="true">${p.situations.map((_, i) => `<i${i === 0 ? ' class="is-on"' : ''}></i>`).join('')}</div>
  </section>`;

  /* Client voices: compact quote cards. */
  const stories = `<section class="stories-band v5-voices" id="stories" aria-labelledby="stories-title"><div class="section wrap">
    <div class="v5-head"><p class="eyebrow">CLIENT VOICES</p><h2 id="stories-title">${lines(p.proofTitle)}</h2></div>
    <div class="v5-quotes">${p.proof.map((key, i) => { const v = voices[key]; return `<article class="v5-quote" data-reveal style="--i:${i}"><span class="v5-quote-mark" aria-hidden="true">“</span><p class="v5-quote-topic">${esc(v.title)}</p><blockquote>${esc(v.quote || v.summary)}</blockquote><div class="v5-quote-foot"><img src="${assets + v.image}" width="44" height="44" alt="" loading="lazy"><div><strong>${esc(v.name)}</strong><span>${esc(v.context)}</span></div><button class="v5-watch" data-clip="/videos/stories/${clips[key]}.mp4" data-clip-title="${esc(v.title)}" data-clip-note="${esc(v.context)}" type="button" aria-label="Watch ${esc(v.name)}’s experience">${play}<span>Watch</span></button></div></article>`; }).join('')}</div>
  </div></section>`;

  /* Approach: the drawing beside three steps, which light in turn while in view. */
  const approach = `<section class="section wrap approach v5-approach2" id="approach" aria-labelledby="approach-title">
    <div class="approach-copy"><p class="eyebrow">HOW NARAYANI APPROACHES IT</p><h2 id="approach-title">${lines(p.methodTitle)}</h2>${p.slug === 'vastu' ? '' : `<p>${esc(p.methodIntro)}</p>`}</div>
    ${p.slug === 'vastu' ? vastuPlan() : serviceVisual(p)}${p.slug === 'vastu' ? `<span class="v5-blob" aria-hidden="true"></span><span class="v5-leaf-l" aria-hidden="true">${leaves('l')}</span><span class="v5-leaf-r" aria-hidden="true">${leaves('r')}</span>` : ''}
    <ol class="reading-points v5-steps2" data-steps>${p.method.map(([t, d], i) => `<li data-step="${i}" data-reveal style="--i:${i}" tabindex="0" role="button" aria-pressed="false">${pageIcon(p, 'method', i)}<h3>${esc(t)}</h3><p>${esc(d)}</p>${p.slug === 'vastu' ? `<span class="v5-chev" aria-hidden="true">${chevron}</span>` : ''}<span class="v5-step-bar" aria-hidden="true"></span></li>`).join('')}</ol>
  </section>`;
  /* Practices: names only. */
  const practices = `<section class="scope-band v5-practices" id="ways" aria-labelledby="ways-title"><div class="section wrap">
    <div class="v5-head v5-head-row"><div><p class="eyebrow">${esc(p.scopeEyebrow || 'YOUR CONSULTATION OPTIONS')}</p><h2 id="ways-title">${lines(p.scopeTitle)}</h2></div>${cta(p, 'scope')}</div>
    <ul class="v5-tiles${p.topics.length === 4 ? ' v5-tiles-4' : ''}">${p.topics.map(([t], i) => `<li data-reveal style="--i:${i}"><span class="v5-tile-icon">${pageIcon(p, 'topics', i)}</span><strong>${esc(t)}</strong><span class="v5-tile-no">0${i + 1}</span></li>`).join('')}</ul>
  </div></section>`;

  /* Why her approach matters. */
  const principles = [
    ['reflection', 'The person matters.', `Explore your beliefs and responses ${p.slug === 'brainology' ? 'as you practise something new' : 'alongside the reading'}.`],
    ['listen', 'The choice stays yours.', 'Ask questions and understand the reasoning. No threats or pressure to purchase a remedy.'],
  ];
  const why = `<section class="v5-why" aria-labelledby="why-title"><div class="section wrap v5-why-inner">
    <div class="v5-why-head"><p class="eyebrow">WHY HER APPROACH MATTERS</p><h2 id="why-title">Mind first.<br><span>Guidance without fear.</span></h2></div>
    <div class="v5-why-cards">${principles.map(([ic, t, d], i) => `<article data-reveal style="--i:${i}"><span class="v5-why-icon">${icon(ic)}</span><span class="v5-why-no">0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div>
    <p class="v5-why-quote" lang="hi-Latn">“Upay tab kaam karta hai jab dimaag kaam karta hai.” <span>A remedy works when the mind works.</span></p>
  </div></section>`;

  /* Enquiry. */
  const steps = [['Share your starting point.', 'A short message about what you want to discuss.'], ['Understand the details.', 'Confirm scope, format, duration, fees and availability.'], ['Choose your appointment.', 'Book only after the details work for you.']];
  const enquiry = `<section class="v5-enquiry" id="enquire" aria-labelledby="enquiry-title"><div class="section wrap v5-enquiry-inner">
    <div class="v5-enquiry-copy">
      <p class="eyebrow">BEGIN WITH THE NNG TEAM</p>
      <h2 id="enquiry-title">${lines(p.closeTitle)}</h2>
      <p>${esc(p.closeCopy)}</p>
      <ol class="v5-timeline">${steps.map(([t, d], i) => `<li data-reveal style="--i:${i}"><span>${i + 1}</span><div><strong>${t}</strong><p>${d}</p></div></li>`).join('')}</ol>
    </div>
    <div class="enquiry-panel v5-panel">
      <div class="v5-panel-head"><span class="v5-wa">${waIcon}</span><div><p class="eyebrow">${esc(p.short || p.name)}</p><h3>Start on WhatsApp.</h3></div></div>
      <p class="v5-panel-intro">No form to complete. Choose a topic if useful, or open a general enquiry.</p>
      <div class="topic-picker" role="group" aria-label="Optional enquiry topic">${p.options.map((topic, i) => `<button type="button" data-select-topic="${esc(topic)}" aria-pressed="${i === 0 ? 'true' : 'false'}">${esc(topic)}</button>`).join('')}</div>
      <p class="selected-topic" role="status" aria-live="polite">General ${esc(p.short || p.name)} enquiry</p>
      ${cta(p, 'enquiry', 'Open WhatsApp enquiry')}
      <p class="form-note">Review the message in WhatsApp and send it yourself. Opening WhatsApp does not book or pay for a session.</p>
      <div class="v5-alt"><a href="tel:+919205511101">${icon('conversation')}<span>Call<small>+91 92055 11101</small></span></a><a href="mailto:enquiry@nngarg.com">${icon('confirm')}<span>Email<small>enquiry@nngarg.com</small></span></a></div>
      <p class="enquiry-boundary">Please do not send private records, home footage or someone else’s information in your first message.</p>
    </div>
  </div></section>`;

  /* Questions. */
  const faq = `<section class="faq-band v5-faq" aria-labelledby="faq-title"><div class="section wrap v5-faq-inner">
    <div class="v5-faq-side">
      <p class="eyebrow">BEFORE BOOKING</p>
      <h2 id="faq-title">A few practical questions.</h2>
      <p>Something else on your mind? Ask the team directly.</p>
      ${cta(p, 'faq', 'Ask on WhatsApp', '', 'v5-ghost v5-ghost-dark')}
    </div>
    <div class="faqs">${p.faqs.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary><span class="v5-faq-no">0${i + 1}</span><h3>${esc(q)}</h3><span class="faq-mark" aria-hidden="true"></span></summary><p>${esc(a)}</p></details>`).join('')}</div>
    <p class="service-boundary">${esc(p.boundary)}</p>
  </div></section>`;

  return `<main id="main">${hero}${book}${situations}${stories}${p.slug === 'brainology' ? brainApproach(p, { esc }) : approach}${practices}${why}${enquiry}${faq}</main>`;
}
