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

  // The approach: steps light the loop, cycling while in view until someone chooses a step.
  const loop = document.querySelector('[data-loop]');
  const list = document.querySelector('[data-steps]');
  if (loop && list) {
    const buttons = [...list.querySelectorAll('[data-step]')];
    let active = 0, timer = null, chosen = false;
    const show = (i) => {
      active = i;
      loop.dataset.active = String(i);
      buttons.forEach((b, j) => b.setAttribute('aria-pressed', String(j === i)));
    };
    const start = () => {
      if (chosen || reduce || timer) return;
      list.classList.add('is-cycling');
      timer = setInterval(() => show((active + 1) % buttons.length), 4200);
    };
    const stop = () => { clearInterval(timer); timer = null; list.classList.remove('is-cycling'); };
    buttons.forEach((b, i) => b.addEventListener('click', () => { chosen = true; stop(); show(i); }));
    new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.4 }).observe(loop);
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

  // Dots under the swipeable cards on phones.
  const rail = document.querySelector('[data-rail]');
  const dots = document.querySelectorAll('.v5-dots i');
  if (rail && dots.length) rail.addEventListener('scroll', () => {
    const cards = rail.children;
    const step = cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
    const i = Math.min(dots.length - 1, Math.round(rail.scrollLeft / step));
    dots.forEach((d, j) => d.classList.toggle('is-on', j === i));
  }, { passive: true });
})();
