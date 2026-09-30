import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const viewsDir = path.join(root, "resources", "views");

if (!fs.existsSync(viewsDir)) {
  fs.mkdirSync(viewsDir, { recursive: true });
}

// Read existing PHP view files or rendered HTML files
const getSourceHtml = (name) => {
  const phpPath = path.join(viewsDir, `${name}.php`);
  if (fs.existsSync(phpPath)) {
    return fs.readFileSync(phpPath, "utf8");
  }
  const bladePath = path.join(viewsDir, `${name}.blade.php`);
  if (fs.existsSync(bladePath)) {
    return fs.readFileSync(bladePath, "utf8");
  }
  const htmlPath = name === "home" ? path.join(root, "out", "index.html") : path.join(root, "out", name, "index.html");
  if (fs.existsSync(htmlPath)) {
    return fs.readFileSync(htmlPath, "utf8");
  }
  return null;
};

// 1. Founder Intro Section HTML snippet
const founderIntroHtml = `<section class="section-wrap section-space founder-intro-section" aria-label="Founder Video Introduction"><div class="founder-intro-card"><div class="intro-video-wrapper"><div class="intro-video-player" role="button" tabindex="0" aria-label="Play Video Session"><div class="video-player-topbar"><div class="video-player-brand"><span class="video-badge-nng">NNG</span><span class="video-title-text">Transformation with NNG • Video Session</span></div><div class="video-player-controls-mini"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"></path></svg><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 13c.04-.32.06-.66.06-1 0-.34-.02-.68-.06-1l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.02.66.07 1l-2.11 1.65c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64L19.4 13z"></path></svg></div></div><img src="/images/narayani-portrait-684.webp" alt="Narayani Garg Video Session" class="intro-video-thumb" loading="lazy"/><button type="button" class="intro-video-play-btn" aria-label="Play video session"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button><div class="video-player-bottombar"><div class="video-player-quote-row"><span class="video-timestamp">3:59 / 11:47</span><span class="video-quote-caption">“Upay tab kaam karta hai jab dimaag kaam karta hai...”</span></div><div class="video-player-right-icons"><span class="youtube-tag"><svg viewBox="0 0 24 24" width="16" height="16" fill="#FF0000" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>YouTube</span><svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" class="fullscreen-icon" aria-hidden="true"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg></div></div></div></div><div class="intro-copy-wrapper"><blockquote class="intro-main-quote">“After a decade in business and 8 years in Vedic practice, I built the guidance program you truly deserve.”</blockquote><p class="intro-bio-lead">Hi, I'm <strong>Narayani Garg</strong>, MBA &amp; practitioner of Vedic Astrology, Numerology, Vastu &amp; Subconscious Alignment.</p><p class="intro-bio-text">I've helped <strong>1,200+ individuals</strong> break repeating cycles in career, marriage and health by looking at the one thing traditional remedies overlook: <em>the receptive state of your mind.</em></p><div class="intro-stats-card"><div class="stats-card-header"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg><span>Join our community across 4 countries</span></div><div class="stats-card-grid"><div class="stats-item"><strong class="stats-number">1,200+</strong><span class="stats-label">Guided</span></div><div class="stats-item"><strong class="stats-number">8+</strong><span class="stats-label">Years Practice</span></div><div class="stats-item"><strong class="stats-number">100%</strong><span class="stats-label">Confidential</span></div></div></div><a href="https://wa.me/919205511101?text=Hello%20Narayani%20Garg%20team,%20I%20would%20like%20to%20book%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" class="intro-cta-button" data-enquiry="true" data-topic="Free Consultation"><svg class="whatsapp-btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"></path></svg><span>Book a Free Consultation / Enquire</span><span class="intro-cta-arrow">↗</span></a></div></div></section>`;

const pages = ["home", "about", "services", "hand-holding-program", "contact", "consultation"];

for (const name of pages) {
  let content = getSourceHtml(name);
  if (!content) continue;

  // Clean out any nested @verbatim tags first
  content = content.replaceAll("@verbatim", "").replaceAll("@endverbatim", "");

  // 1. Fix Gemini spelling by pointing zodiac-chakra.png to zodiac-chakra.svg
  content = content.replaceAll("/images/zodiac-chakra.png", "/images/zodiac-chakra.svg");

  // 2. Insert Founder Intro Video below Meet section on homepage if home
  if (name === "home") {
    const meetEndTag = "</section>";
    const meetIndex = content.indexOf('id="meet"');
    if (meetIndex !== -1) {
      const sectionEnd = content.indexOf(meetEndTag, meetIndex);
      if (sectionEnd !== -1) {
        const insertPos = sectionEnd + meetEndTag.length;
        if (!content.includes("founder-intro-section")) {
          content = content.slice(0, insertPos) + "\n" + founderIntroHtml + content.slice(insertPos);
          console.log("Inserted founder-intro-section right below #meet on home.blade.php");
        }
      }
    }
  }

  // 3. Wrap entire content inside @verbatim ... @endverbatim for Blade engine safety
  const bladeContent = `@verbatim\n${content}\n@endverbatim`;

  // Save as .blade.php view file
  const bladeFile = path.join(viewsDir, `${name}.blade.php`);
  fs.writeFileSync(bladeFile, bladeContent);
  console.log(`Saved Blade view: ${bladeFile}`);
}
