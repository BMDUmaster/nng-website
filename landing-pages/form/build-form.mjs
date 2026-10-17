// Builds /landing/form/: copies of the Brainology, Numerology and Vastulogy landing pages where every WhatsApp button
// opens an enquiry form instead (Google Sheet + email through Google Apps Script). Runs after the main landing build and
// only adds files; the WhatsApp pages are left exactly as they are.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {FORM_ENDPOINT, FORM_PAGES, OCCUPATIONS, REASONS} from './config.mjs';
import {countries} from './countries.mjs';
import {pages} from '../review-v2/content.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, '..', 'dist', 'landing');
const out = path.join(dist, 'form');
const version = '20261017-form-v1';
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';
const formIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>';
const lotus = '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" aria-hidden="true"><path d="M16 25c-3.2-3-5-6.6-5-10.4 0-3.3 1.8-6.4 5-8.6 3.2 2.2 5 5.3 5 8.6 0 3.8-1.8 7.4-5 10.4Z"/><path d="M16 25c-4.6-.6-9.4-3.6-11-9.2 3.9-.8 7.6.6 10 3.6M16 25c4.6-.6 9.4-3.6 11-9.2-3.9-.8-7.6.6-10 3.6"/></svg>';

// Button wording: anything that named WhatsApp gets a plain enquiry label.
const relabel = {
  'WhatsApp': 'Enquire',
  'WhatsApp enquiry': 'Enquire now',
  'Ask on WhatsApp': 'Ask your question',
  'Enquire on WhatsApp': 'Enquire now',
  'Open WhatsApp enquiry': 'Enquire now',
};

function dialog(p) {
  const opts = (list) => list.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join('');
  const codes = countries.map(([name, code], i) => `<option value="${code}"${i === 0 ? ' selected' : ''}>${esc(code)} ${esc(name)}</option>`).join('');
  return `<dialog id="lf-dialog" class="lf-dialog" aria-labelledby="lf-title" data-endpoint="${esc(FORM_ENDPOINT)}">
  <div class="lf-head"><p class="lf-kicker">${lotus}${esc(p.short || p.name)}</p><h2 id="lf-title">Tell us about <em>your situation</em></h2><p>Share a few details and Narayani’s team will get back to you personally.</p><button type="button" class="lf-x" data-lf-close aria-label="Close the form">×</button></div>
  <form id="lf-form" class="lf-form" novalidate>
    <div class="lf-row">
      <div class="lf-field"><label for="lf-first">First name <b>*</b></label><input class="lf-input" id="lf-first" name="firstName" type="text" autocomplete="given-name" maxlength="80" required><p class="lf-error" aria-live="polite"></p></div>
      <div class="lf-field"><label for="lf-last">Last name <b>*</b></label><input class="lf-input" id="lf-last" name="lastName" type="text" autocomplete="family-name" maxlength="80" required><p class="lf-error" aria-live="polite"></p></div>
    </div>
    <div class="lf-field"><label for="lf-email">Email <b>*</b></label><input class="lf-input" id="lf-email" name="email" type="email" autocomplete="email" inputmode="email" maxlength="160" required><p class="lf-error" aria-live="polite"></p></div>
    <div class="lf-field"><label for="lf-mobile">Mobile number <b>*</b></label><div class="lf-phone"><div class="lf-cc"><select class="lf-input" name="countryCode" aria-label="Country code" autocomplete="tel-country-code">${codes}</select><span class="lf-cc-show" aria-hidden="true">+91</span></div><input class="lf-input" id="lf-mobile" name="mobile" type="tel" autocomplete="tel-national" inputmode="tel" maxlength="20" required></div><p class="lf-error" aria-live="polite"></p></div>
    <div class="lf-field"><label for="lf-occupation">Occupation <b>*</b></label><select class="lf-input" id="lf-occupation" name="occupation" required><option value="">Select your occupation</option>${opts(OCCUPATIONS)}</select><p class="lf-error" aria-live="polite"></p></div>
    <div class="lf-field"><label for="lf-reason">Reason for contact <span>(optional)</span></label><select class="lf-input" id="lf-reason" name="reason"><option value="">Select a reason</option>${opts(REASONS)}</select></div>
    <div class="lf-field lf-details" hidden><label for="lf-details">Tell us a little more <span>(optional)</span></label><textarea class="lf-input" id="lf-details" name="details" maxlength="2000" placeholder="A few words about what you would like help with"></textarea></div>
    <div class="lf-hp" aria-hidden="true"><label for="lf-website">Website</label><input id="lf-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>
    <button class="lf-submit" type="submit"><span>Send my enquiry</span><span class="lf-go" aria-hidden="true">${arrow}</span></button>
    <p class="lf-status" role="alert"></p>
    <p class="lf-privacy">Your details are used only to reply to your enquiry. Sending this form does not book or pay for a session.</p>
  </form>
  <div class="lf-done" hidden role="status"><span class="lf-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><h2>Thank you, <em data-lf-name></em></h2><p>Your enquiry has reached Narayani’s team. They will get in touch with you personally to understand your situation and explain the next steps.</p><button type="button" data-lf-close>Close</button></div>
</dialog>`;
}

// The enquiry panel near the foot of the page: the WhatsApp preview becomes a short note about the form.
function panel(html) {
  return html.replace(/<div class="enquiry-panel en2-panel">[\s\S]*?<\/div>\s*<\/div>\s*<\/div><\/section>/, (block) => {
    const button = block.match(/<a class="wa-btn wa-btn-wide"[\s\S]*?<\/a>/)?.[0] || '';
    return `<div class="enquiry-panel en2-panel">
        <div class="en2-panel-head"><span class="v5-wa">${formIcon}</span><div><strong>Send an enquiry</strong><span>A short form. It takes under a minute.</span></div></div>
        <ul class="lf-panel-list"><li>Your name and how to reach you</li><li>Your occupation</li><li>What you would like help with, if you wish</li></ul>
        ${button}
        <p class="en2-note">Narayani’s team replies personally. Sending the form does not book or pay for a session. Please keep private records and other people’s details out of your first message.</p>
      </div>
    </div>
  </div></section>`;
  });
}

function convert(html, p) {
  let s = html;
  // Every WhatsApp link becomes a button that opens the form, keeping its classes, source and topic.
  s = s.replace(/<a ([^>]*?)href="https:\/\/wa\.me\/[^"]*"([^>]*)>([\s\S]*?)<\/a>/g, (m, before, after, inner) => {
    const attrs = (before + after).replace(/\sdata-whatsapp/, '').replace(/\starget="_blank"/, '').replace(/\srel="noopener noreferrer"/, '').trim();
    let body = inner.replace(/<span class="wa-ic" aria-hidden="true"><svg[\s\S]*?<\/svg><\/span>/, `<span class="wa-ic" aria-hidden="true">${arrow}</span>`);
    const label = body.match(/^([^<]*?)\s*(<|$)/)[1].trim();
    if (relabel[label]) body = body.replace(label, relabel[label]);
    return `<a ${attrs} href="#enquire" data-form-open aria-haspopup="dialog">${body}</a>`;
  });
  s = panel(s);
  s = s.replaceAll('aria-label="Enquire on WhatsApp"', 'aria-label="Open the enquiry form"');
  // The privacy note describes the form, not WhatsApp links.
  s = s.replace(/<p>WhatsApp links contain[\s\S]*?<\/p>/, '<p>The enquiry form sends your name, email, mobile number, occupation and, if you add them, your reason for contact and message to the NNG team, so they can reply to you. They are not used for anything else.</p>');
  // One level deeper than the WhatsApp pages.
  s = s.replaceAll('../_shared/', '../../_shared/');
  s = s.replace(/(<meta property="og:url" content="[^"]*?)\/landing\/([^"]*")/, '$1/landing/form/$2');
  s = s.replace('<body class="', '<body class="lp-form ');
  s = s.replace('</head>', `<link rel="stylesheet" href="../_form/form.css?v=${version}"></head>`);
  s = s.replace('</body>', `${dialog(p)}<script src="../_form/form.js?v=${version}" defer></script></body>`);
  if (/wa\.me|data-whatsapp/.test(s)) throw new Error(`${p.slug}: a WhatsApp link is left`);
  return s;
}

fs.rmSync(out, {recursive: true, force: true});
fs.mkdirSync(path.join(out, '_form'), {recursive: true});
fs.copyFileSync(path.join(here, 'form.css'), path.join(out, '_form', 'form.css'));
fs.copyFileSync(path.join(here, 'form.js'), path.join(out, '_form', 'form.js'));
const built = [];
for (const slug of FORM_PAGES) {
  const p = pages.find((x) => x.slug === slug);
  const html = fs.readFileSync(path.join(dist, slug, 'index.html'), 'utf8');
  fs.mkdirSync(path.join(out, slug), {recursive: true});
  fs.writeFileSync(path.join(out, slug, 'index.html'), convert(html, p));
  built.push(p);
}

// The index of the three form pages, in the style of /landing/.
const index = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>NNG landing pages with enquiry form</title><link rel="icon" href="../_shared/assets/icon.svg"><link rel="stylesheet" href="../_shared/styles.css"></head><body class="copy-v2"><main class="wrap section"><p class="eyebrow">TEAM NNG / LANDING PAGES WITH ENQUIRY FORM</p><h1>Three services.<br>One simple enquiry form.</h1><p class="service-terms">The same pages as the WhatsApp versions. Every enquiry button opens a short form; enquiries go to the NNG Google Sheet and by email.</p><div class="review-grid">${built.map((p) => `<a class="review-link" href="${p.slug}/"><span>Personal consultation · Enquiry form</span><h2>${esc(p.short || p.name)}</h2><p>${esc(p.headline.join(' '))}</p><p class="review-action">Open this page <span aria-hidden="true">↗</span></p></a>`).join('')}</div></main></body></html>`;
fs.writeFileSync(path.join(out, 'index.html'), index);

const publicCopy = path.join(here, '..', '..', 'public', 'landing', 'form');
fs.rmSync(publicCopy, {recursive: true, force: true});
fs.cpSync(out, publicCopy, {recursive: true});
console.log(`Built ${built.length} form landing pages: ${out} (copied to public/landing/form)${FORM_ENDPOINT ? '' : '  [no FORM_ENDPOINT yet]'}`);
