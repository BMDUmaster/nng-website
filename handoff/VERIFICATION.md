# Verification, 9 October 2026

- **Exact public snapshot:** all 6,859 files match the deployed commit's Git blobs and the handoff SHA-256 manifest, totalling 698,538,234 bytes. Includes 609 HTML files and every committed asset/payload, not just a sampled crawl.
- **Landing source:** all 22 regenerated landing files match their published counterparts byte-for-byte, including all five pages, shared media, fonts, CSS and JavaScript.
- **Complete source export:** Next compilation, TypeScript and static generation succeeded; the combined export contains all 600 website route-manifest pages, all five landing pages and required SEO metadata.
- **Source alignment:** comparing rebuilt HTML caught a stale Resources overview entry in the editable source. Header, mobile drawer, footer and matching CSS were aligned with the already-published dropdown-only Resources treatment. TypeScript passed after this correction. The preserved snapshot was not edited.
- **Lint:** zero errors and 29 existing warnings, primarily static image guidance and unused source items. These are documented, not claimed as a warning-free result.
- **Publication scan:** no configured credential/private-file patterns or GitHub per-file size violations detected across the proposed handoff files. This is a targeted scan, not a security certification or an image-rights clearance.
- **Browser smoke check:** 36/36 page-viewport checks passed on the packaged exact snapshot: 18 representative routes at 390×900 and 1440×900. Checks cover HTTP 200, one main heading, noindex, no horizontal overflow, no broken loaded images and no JavaScript page errors. All five landing pages were included.
- **Visual inspection:** home and Psychic Reader viewport screenshots reviewed at both widths; hero text, CTAs and photos showed no visible clipping or overlap. Full-page layout, external video playback, menus and enquiry submission were not newly re-audited in this packaging task.
- **Safety:** browser external traffic was blocked. No enquiries, emails, messages, payments or ads were sent or launched. Existing public preview and production were not changed.

## Reproduce

```sh
npm run verify:published
npm run build:landing
npm run verify:landing
node scripts/check-public-handoff.mjs
```

After installing locked dependencies, run `npm run typecheck`, `npm run lint`, and `npm run build:review`. Browser smoke script `scripts/qa-handoff.py` is optional and requires Python Playwright plus a browser installation; it is not needed to run the website. Start `npm run preview` first.

The exact snapshot is the definitive record of what was publicly served. Next-generated chunk hashes/build IDs and sitemap dates may differ on a fresh rebuild.
