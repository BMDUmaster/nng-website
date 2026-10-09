# Developer handoff record

Captured 9 October 2026 under Aryan's explicit instruction to publish the complete NNG staging build as a public developer handoff.

## Provenance

- Review URL: https://deoxysaryan.github.io/NNG_Codex_Build/preview-20261004-r1/
- Original repository: https://github.com/Deoxysaryan/NNG_Codex_Build
- Published branch/path: `gh-pages`, `preview-20261004-r1/`.
- Published commit: `875265a5af02caa735f126c0760289ea8c8e2b3f`.
- Editable website source: current working tree based on `feature/services-depth`, commit `85a02d6`, **including its later uncommitted changes**, not only that older commit.
- Editable landing-page source: active five-page generator with `20261009-visual-v3` artwork/styles and current copy.

`published-manifest.json` records the SHA-256, Git blob identifier and byte count of every published file. Capture checked every snapshot file against its original committed Git blob. `source-capture.json` identifies copied editable inputs. Its original-input checksums are capture evidence; the documented handoff adaptations below intentionally differ.

## Handoff-only adaptations

1. Website editable source is at the root. The old Laravel root `app/` directory and stale Blade exports are omitted because they are not part of the current static site's runtime and would shadow `src/app/` in Next development.
2. Landing-page testimonial inputs are local to `landing-pages/site/assets/`; the original absolute Mac path is removed. Generated outputs are checked against all 22 original published landing files.
3. Historic unpublished rate-card values and durations are omitted. `feesPublic=false` and the visible pending-fee/enquiry copy are preserved. Enter approved options later; do not enable fees before review.
4. Build-copy handling falls back to normal copies on filesystems without clone support. Package scripts and review-server commands separate rebuilds from the immutable snapshot.
5. Added SHA-256 snapshot checking, LP-output checking, combined review build and correct-base-path local serving. No dependency-version change or visual/content redesign is introduced by packaging.
6. Restored the already-published dropdown-only Resources behavior to editable source. The original working tree still had the old Resources overview link; header, mobile drawer, footer and associated CSS now reproduce the public build. The existing public snapshot and original source are untouched.

## Open commercial and release decisions

Keep existing staging placeholders. Confirm detailed psychic consultation names/scopes/formats/durations/fees, Body Vastu and property/desk/report distinctions, actual Numerology report SKUs/delivery/terms, payment/refund arrangements, exact credential wording, documentary support for claims and image permissions, video-information privacy policy and final approval ownership before production. The free chart/AI tool remains a later phase. These are review issues, not permission to invent missing details.

The existing public preview, original working trees, production hosting, ads and outreach are unchanged by this handoff.

## Verification

The verification result file is added after checking the packaged snapshot, landing generators, source build and browser render. Passing code checks or repository publication do not constitute Narayani's final content approval.
