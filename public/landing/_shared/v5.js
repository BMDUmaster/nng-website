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
  const count = document.querySelector('[data-count]');
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

  // The approach: the three steps light in turn with the matching part of the drawing, while in view,
  // until someone chooses a step.
  const list = document.querySelector('[data-steps]');
  const figure = document.querySelector('.v5-approach2 .visual-explainer');
  if (list) {
    const steps = [...list.querySelectorAll('[data-step]')];
    let active = 0, timer = null, chosen = false;
    const show = (i) => {
      active = i;
      steps.forEach((s, j) => { s.classList.toggle('is-active', j === i); s.setAttribute('aria-pressed', String(j === i)); });
      if (figure) {
        figure.dataset.visualActive = String(i);
        figure.querySelectorAll('[data-visual-step]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.visualStep === String(i))));
      }
    };
    const start = () => {
      if (chosen || reduce || timer) return;
      list.classList.add('is-cycling');
      show(active);
      timer = setInterval(() => show((active + 1) % steps.length), 4200);
    };
    const stop = () => { clearInterval(timer); timer = null; list.classList.remove('is-cycling'); };
    const choose = (i) => { chosen = true; stop(); show(i); };
    steps.forEach((s, i) => {
      s.addEventListener('click', () => choose(i));
      s.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(i); } });
    });
    figure?.querySelectorAll('[data-visual-step]').forEach((b) => b.addEventListener('click', () => { chosen = true; stop(); }));
    new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.35 }).observe(list);
  }

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
