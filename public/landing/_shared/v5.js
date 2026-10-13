/* v5 landing sections: reveal on scroll, the book, the approach loop, the clientele count, the film's sound
   switch and the swipe dots. No tracking, storage or network requests. */
(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Rise into place once, as each card comes into view.
  const reveal = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); reveal.unobserve(e.target); }
  }), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

  // The book opens while it is on screen.
  const stage = document.querySelector('.bk-stage');
  if (stage) new IntersectionObserver(([e]) => stage.classList.toggle('is-on', e.isIntersecting), { threshold: 0.35 }).observe(stage);

  // 10,000+ counts up once.
  document.querySelectorAll('[data-count]').forEach((count) => {
  if (count && !reduce) {
    const target = Number(count.dataset.count);
    const fmt = (n) => n.toLocaleString('en-IN');
    count.textContent = fmt(0);
    new IntersectionObserver(([e], o) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - start) / 1600);
        count.textContent = fmt(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 }).observe(count);
  }
  });

  // The approach: hovering or choosing a step lights the matching part of the drawing.
  const list = document.querySelector('[data-steps]');
  const figure = document.querySelector('.v5-approach2 .visual-explainer, .bj-figure, .na-figure');
  if (list) {
    const steps = [...list.querySelectorAll('[data-step]')];
    let chosen = null;
    const show = (i) => {
      steps.forEach((s, j) => { s.classList.toggle('is-active', j === i); s.setAttribute('aria-pressed', String(j === i)); });
      if (!figure) return;
      if (i === null) delete figure.dataset.visualActive; else figure.dataset.visualActive = String(i);
      figure.querySelectorAll('[data-visual-step]').forEach((b) => b.setAttribute('aria-pressed', String(i !== null && b.dataset.visualStep === String(i))));
    };
    steps.forEach((s, i) => {
      s.addEventListener('mouseenter', () => show(i));
      s.addEventListener('focus', () => show(i));
      s.addEventListener('click', () => { chosen = chosen === i ? null : i; show(chosen); });
      s.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); s.click(); } });
    });
    list.addEventListener('mouseleave', () => show(chosen));
  }

  // Numerology still life: scale the 640px stage to its column.
  const stageFig = document.querySelector('.na-figure');
  if (stageFig) {
    const fit = () => stageFig.style.setProperty('--k', String(Math.min(innerWidth > 900 ? 0.84 : 1, stageFig.parentElement.clientWidth / 640)));
    fit();
    addEventListener('resize', fit, { passive: true });
  }

  // Phones: the situation cards turn by themselves, one whole card at a time; a touch holds them.
  const carousel = document.querySelector('[data-carousel]');
  const cDots = document.querySelectorAll('.s2-dots i');
  if (carousel) {
    const cards = [...carousel.children];
    const current = () => Math.round(carousel.scrollLeft / Math.max(1, carousel.clientWidth));
    carousel.addEventListener('scroll', () => cDots.forEach((d, j) => d.classList.toggle('is-on', j === current())), { passive: true });
    let held = false, release = null, timer = null;
    const hold = () => { held = true; clearTimeout(release); };
    const letGo = () => { clearTimeout(release); release = setTimeout(() => { held = false; }, 2500); };
    carousel.addEventListener('touchstart', hold, { passive: true });
    carousel.addEventListener('touchend', letGo, { passive: true });
    carousel.addEventListener('mouseenter', hold);
    carousel.addEventListener('mouseleave', letGo);
    const tick = () => {
      if (held || carousel.scrollWidth <= carousel.clientWidth + 4) return;
      const next = (current() + 1) % cards.length;
      carousel.scrollTo({ left: next * carousel.clientWidth + next * parseFloat(getComputedStyle(carousel).columnGap || 0), behavior: 'smooth' });
    };
    if (!reduce) new IntersectionObserver(([e]) => { clearInterval(timer); if (e.isIntersecting) timer = setInterval(tick, 3800); }, { threshold: 0.4 }).observe(carousel);
  }

  // Design preview only: a viewers badge with sample numbers, shown when the address carries ?demo=viewers.
  // Visitors arriving normally never see it.
  const viewers = document.querySelector('[data-viewers]');
  if (viewers && new URLSearchParams(location.search).get('demo') === 'viewers') {
    const [lo, hi] = viewers.dataset.viewers.split('-').map(Number);
    const out = viewers.querySelector('b');
    let n = lo + Math.floor(Math.random() * (hi - lo + 1));
    const set = (v) => { out.classList.remove('is-tick'); void out.offsetWidth; out.textContent = String(v); out.classList.add('is-tick'); };
    viewers.hidden = false;
    set(n);
    const step = () => {
      n = Math.min(hi, Math.max(lo, n + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 3))));
      set(n);
      setTimeout(step, 4000 + Math.random() * 4000);
    };
    setTimeout(step, 4000);
  }

  // Brainology hero deck: the back card comes forward every few seconds; hovering holds it.
  const deck = document.querySelector('[data-deck]');
  if (deck && !reduce) {
    const cards = [...deck.children];
    let held = false;
    deck.addEventListener('mouseenter', () => { held = true; });
    deck.addEventListener('mouseleave', () => { held = false; });
    setInterval(() => {
      if (held || document.hidden) return;
      cards.forEach((c) => { c.dataset.pos = String((Number(c.dataset.pos) + 1) % cards.length); });
    }, 3600);
  }

  // Enquiry: the message preview follows the chosen topic.
  const preview = document.querySelector('[data-preview]');
  if (preview) {
    const offer = preview.dataset.offer;
    const lines = (topic) => [`Hello NNG team, I would like to enquire about ${offer}.`, topic ? `My enquiry is about: ${topic}.` : '', 'Please share the appropriate scope, format, duration, fees and availability.'].filter(Boolean);
    const time = preview.querySelector('.en2-time');
    document.querySelectorAll('[data-select-topic]').forEach((b, i) => b.addEventListener('click', () => {
      const topic = i === 0 ? '' : b.dataset.selectTopic;
      preview.querySelectorAll('p').forEach((n) => n.remove());
      lines(topic).forEach((l) => { const n = document.createElement('p'); n.textContent = l; preview.insertBefore(n, time); });
      preview.classList.remove('is-new'); void preview.offsetWidth; preview.classList.add('is-new');
    }));
  }

  // Brainology meet section: start its motion when it comes into view.
  const mb = document.querySelector('.mb');
  if (mb) new IntersectionObserver(([e], o) => { if (e.isIntersecting) { mb.classList.add('is-on'); o.disconnect(); } }, { threshold: 0.25 }).observe(mb);

  // Sound for the introduction film.
  const film = document.querySelector('#hero-intro');
  const sound = document.querySelector('.v5-sound');
  if (film && sound) sound.addEventListener('click', () => {
    film.muted = !film.muted;
    if (!film.muted) film.play();
    sound.setAttribute('aria-pressed', String(!film.muted));
    sound.setAttribute('aria-label', film.muted ? 'Turn sound on' : 'Turn sound off');
  });

  // Client voices: Watch opens the film and plays it straight away (the clip is served by the website).
  const dialog = document.querySelector('#video-dialog');
  document.querySelectorAll('[data-clip]').forEach((button) => button.addEventListener('click', () => {
    if (!dialog) return;
    film?.pause();
    const stageEl = dialog.querySelector('#video-stage');
    const clip = document.createElement('video');
    clip.className = 'v5-clip';
    clip.src = button.dataset.clip;
    clip.controls = true;
    clip.autoplay = true;
    clip.playsInline = true;
    clip.preload = 'auto';
    stageEl.replaceChildren(clip);
    dialog.querySelector('#video-title').textContent = button.dataset.clipTitle;
    dialog.querySelector('#video-note').textContent = `${button.dataset.clipNote}. A personal experience of Narayani’s wider guidance.`;
    dialog.classList.add('is-clip');
    dialog.addEventListener('close', () => dialog.classList.remove('is-clip'), { once: true });
    dialog.showModal();
    document.body.classList.add('dialog-open');
    clip.play().catch(() => { clip.muted = true; clip.play().catch(() => {}); });
  }));

  // Phones: the situation cards glide past in a loop, and hold still while touched or hovered.
  const rail = document.querySelector('[data-rail]');
  if (rail && !reduce && matchMedia('(max-width: 800px)').matches) {
    const viewport = document.createElement('div');
    viewport.className = 'v5-marquee';
    rail.before(viewport);
    viewport.append(rail);
    [...rail.children].forEach((card) => {
      const copy = card.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.classList.add('is-in');
      rail.append(copy);
    });
    rail.classList.add('is-loop');
    let release = null;
    viewport.addEventListener('touchstart', () => { clearTimeout(release); viewport.classList.add('is-held'); }, { passive: true });
    viewport.addEventListener('touchend', () => { release = setTimeout(() => viewport.classList.remove('is-held'), 1200); }, { passive: true });
  }
})();
