/* ============================================================
   Mohammed Sahal — Portfolio Animations
   GSAP + ScrollTrigger + Lenis + custom cursor + noise
   ============================================================ */

gsap.registerPlugin(ScrollTrigger);

// ── Noise canvas ──────────────────────────────────────────────────────────────
(function initNoise() {
  const canvas = document.getElementById('noise-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, frame = 0;
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  function drawNoise() {
    const img = ctx.createImageData(w, h);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = Math.random() * 255 | 0;
      d[i] = d[i+1] = d[i+2] = v; d[i+3] = 18;
    }
    ctx.putImageData(img, 0, 0);
    frame++;
    if (frame % 3 === 0) requestAnimationFrame(drawNoise);
    else requestAnimationFrame(drawNoise);
  }
  drawNoise();
})();

// ── Lenis smooth scroll ───────────────────────────────────────────────────────
const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// ── Custom cursor ─────────────────────────────────────────────────────────────
const cursorEl = document.getElementById('cursor');
const ringEl   = document.getElementById('cursor-ring');
const labelEl  = document.getElementById('cursor-label');
const isFine   = window.matchMedia('(pointer: fine)').matches;

if (cursorEl && ringEl && isFine) {
  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    gsap.set(cursorEl, { x: mx, y: my });
  });
  (function ringLoop() {
    rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
    gsap.set(ringEl, { x: rx, y: ry });
    if (labelEl) gsap.set(labelEl, { x: rx, y: ry });
    requestAnimationFrame(ringLoop);
  })();

  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
  });

  // Drag cursor state for horizontal scroll
  const track = document.getElementById('hScrollTrack');
  if (track) {
    track.addEventListener('mouseenter', () => {
      document.body.classList.add('c-drag');
      if (labelEl) { labelEl.textContent = 'DRAG'; gsap.to(labelEl, { opacity: 1, duration: .2 }); }
    });
    track.addEventListener('mouseleave', () => {
      document.body.classList.remove('c-drag');
      if (labelEl) gsap.to(labelEl, { opacity: 0, duration: .2 });
    });
  }
}

// ── Magnetic buttons ──────────────────────────────────────────────────────────
document.querySelectorAll('[data-magnetic]').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  });
});

// ── Nav ───────────────────────────────────────────────────────────────────────
const nav = document.getElementById('mainNav');
if (nav) lenis.on('scroll', ({ scroll }) => nav.classList.toggle('scrolled', scroll > 60));

// ── Preloader ─────────────────────────────────────────────────────────────────
const preloader = document.getElementById('preloader');
const preBar    = document.querySelector('.pre-bar');
const preCount  = document.querySelector('.pre-count');

if (preloader && preBar && preCount) {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) { progress = 100; clearInterval(interval); }
    gsap.to(preBar, { width: progress + '%', duration: 0.3, ease: 'power2.out' });
    preCount.textContent = Math.round(progress) + '%';
    if (progress === 100) {
      setTimeout(() => {
        gsap.to(preloader, {
          yPercent: -100, duration: 0.9, ease: 'power4.inOut',
          onComplete: () => { preloader.style.display = 'none'; document.body.classList.remove('is-loading'); startHero(); }
        });
      }, 300);
    }
  }, 80);
}

// ── Hero entrance ─────────────────────────────────────────────────────────────
function startHero() {
  // Clip-path reveal for name lines
  gsap.to('.clip-reveal', {
    clipPath: 'inset(0 0 0% 0)', duration: 1.1, stagger: 0.12, ease: 'power4.out', delay: 0.1
  });
  gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out', delay: 0.05 });
  gsap.from('.hero-desc',    { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out', delay: 0.5 });
  gsap.from('.hero-ctas',    { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.65 });
  gsap.from('.hero-socials', { opacity: 0, y: 16, duration: 0.6, ease: 'power3.out', delay: 0.75 });
  gsap.from('.hero-stats',   { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.85 });
  gsap.from('.hero-scroll',  { opacity: 0, duration: 0.6, delay: 1.1 });
  gsap.from('.hero-grid-lines', { opacity: 0, duration: 1.5, delay: 0.2 });
}

// If no preloader (dev), run immediately
if (!document.getElementById('preloader') || document.getElementById('preloader').style.display === 'none') {
  startHero();
}

// ── Parallax orbs ─────────────────────────────────────────────────────────────
gsap.to('.orb-a', { y: -120, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 } });
gsap.to('.orb-b', { y: -70,  ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 2 } });
gsap.to('.orb-c', { y: -50, x: 30, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } });
gsap.to('.hero-grid-lines', { y: -60, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } });

// ── Counters ──────────────────────────────────────────────────────────────────
document.querySelectorAll('[data-count]').forEach((el) => {
  const target = parseInt(el.dataset.count, 10);
  let done = false;
  ScrollTrigger.create({ trigger: el, start: 'top 95%', onEnter: () => {
    if (done) return; done = true;
    const o = { v: 0 };
    gsap.to(o, { v: target, duration: 2, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(o.v); } });
  }});
});

// ── Split heading reveal ──────────────────────────────────────────────────────
document.querySelectorAll('[data-split]').forEach((el) => {
  const words = (el.textContent || '').split(' ');
  el.innerHTML = words.map(w => `<span class="word-wrap"><span class="word">${w}</span></span>`).join(' ');
  const wordEls = el.querySelectorAll('.word');
  gsap.set(wordEls, { y: '110%', opacity: 0 });
  ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () =>
    gsap.to(wordEls, { y: '0%', opacity: 1, duration: 0.75, stagger: 0.05, ease: 'power4.out' })
  });
});

// ── Generic reveal ────────────────────────────────────────────────────────────
function reveal(selector, fromY = 40, stagger = 0) {
  document.querySelectorAll(selector).forEach((el, i) => {
    gsap.set(el, { opacity: 0, y: fromY });
    ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () =>
      gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay: i * stagger, ease: 'power3.out', clearProps: 'transform' })
    });
  });
}

reveal('.sec-label', 16);
reveal('.body-lg', 28, 0.1);
reveal('.skill-grid', 28);
reveal('[data-reveal]', 36, 0.08);

// ── About image parallax ──────────────────────────────────────────────────────
document.querySelectorAll('[data-parallax]').forEach((el) => {
  const speed = parseFloat(el.dataset.parallax || '0.1');
  gsap.to(el, {
    y: () => -window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
  });
});

// ── Experience rows ───────────────────────────────────────────────────────────
document.querySelectorAll('.exp-row').forEach((el, i) => {
  gsap.set(el, { opacity: 0, x: -24 });
  ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () =>
    gsap.to(el, { opacity: 1, x: 0, duration: 0.65, delay: i * 0.06, ease: 'power3.out', clearProps: 'transform' })
  });
});

// ── Horizontal scroll ─────────────────────────────────────────────────────────
(function initHScroll() {
  const track = document.getElementById('hScrollTrack');
  const fill  = document.getElementById('hProgressFill');
  if (!track) return;

  let isDown = false, startX = 0, scrollLeft = 0;

  function updateProgress() {
    const max = track.scrollWidth - track.parentElement.offsetWidth;
    const pct = max > 0 ? (track.scrollLeft / max) * 100 : 0;
    if (fill) fill.style.width = pct + '%';
  }

  track.addEventListener('mousedown', (e) => {
    isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft;
  });
  window.addEventListener('mouseup', () => { isDown = false; });
  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = scrollLeft - (x - startX) * 1.5;
    updateProgress();
  });

  // Touch
  let touchStartX = 0, touchScrollLeft = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].pageX; touchScrollLeft = track.scrollLeft; }, { passive: true });
  track.addEventListener('touchmove', (e) => {
    const dx = touchStartX - e.touches[0].pageX;
    track.scrollLeft = touchScrollLeft + dx;
    updateProgress();
  }, { passive: true });

  // Scroll wheel inside section hijack
  const outer = document.getElementById('hScrollOuter');
  if (outer) {
    outer.addEventListener('wheel', (e) => {
      e.preventDefault();
      track.scrollLeft += e.deltaY * 1.2;
      updateProgress();
    }, { passive: false });
  }

  // GSAP ScrollTrigger: auto-scroll the track as user scrolls the page
  ScrollTrigger.create({
    trigger: '#projects',
    start: 'top top',
    end: () => '+=' + (track.scrollWidth - window.innerWidth + 200),
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      track.scrollLeft = self.progress * (track.scrollWidth - track.parentElement.offsetWidth);
      updateProgress();
    }
  });
})();

// ── Contact heading parallax ──────────────────────────────────────────────────
gsap.to('.contact-big', {
  y: -30, ease: 'none',
  scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom top', scrub: 1 }
});

// ── Marquee speed on scroll ───────────────────────────────────────────────────
lenis.on('scroll', ({ velocity }) => {
  const speed = Math.abs(velocity);
  const dur = Math.max(6, 28 - speed * 3);
  document.querySelectorAll('.marquee-row').forEach(r => r.style.animationDuration = dur + 's');
});
