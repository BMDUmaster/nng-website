# Developer handoff

Updated 30 September 2026.

## What serves the live domain

[nngarg.com](https://nngarg.com/) runs the Laravel application in this repository. `routes/web.php` maps six pages to Blade views in `resources/views/`. The editable React/Next frontend is in `src/`. A frontend edit is not published until a new export and Blade/static-asset sync are deployed to Hostinger.

The organic routes are `/`, `/about`, `/services`, `/hand-holding-program`, and `/contact`. `/consultation` is the paid-traffic landing page and remains `noindex` by design.

## Reproducible production build

With Node 20.9 or newer, run `npm ci`, `npm run typecheck`, `npm run lint`, and `npm run lint:copy`. Then run:

```sh
NEXT_PUBLIC_SITE_URL=https://nngarg.com SITE_INDEXABLE=true NEXT_PUBLIC_BASE_PATH= NEXT_PUBLIC_PREVIEW_NOTE= NEXT_PUBLIC_WHATSAPP_NUMBER=919205511101 npm run build:laravel
```

`npm run export` builds in a temporary Next-only workspace because Laravel's root `app/` would otherwise hide Next's `src/app/`. It stages source/images locally and installs locked dependencies there to avoid cloud-backed filesystem stalls. It validates all six exported routes before replacing `out/`, retaining the prior export in a unique sibling backup. `npm run sync:laravel` then validates metadata and key images before writing the six views, public `_next` assets, route payloads, `robots.txt`, `sitemap.xml`, and `icon.svg`. Source images remain in `public/images` and must be deployed alongside these files. The generator never uses old Blade content as input. Generic preview exports are permitted, but the Laravel sync rejects preview URLs, base paths, and `noindex` on organic routes.

Root `npm run dev` is not a valid frontend preview in this combined checkout because Next sees Laravel's root `app/` first. Use an exported static preview from `out/` or a separate Next-only development workspace; do not judge a 404 from root `npm run dev` as the published Laravel site.

Deploy the Laravel application, generated views, and matching public assets together. Do not upload `out/` as the web root, deploy only `src/`, or run the removed legacy conversion scripts. The full Hostinger, environment, and key-rotation checklist is in [HOSTINGER_DEPLOYMENT_SECURITY.md](HOSTINGER_DEPLOYMENT_SECURITY.md). The previously exposed Laravel application key still requires server-side rotation; a code push cannot complete that operation.

## Conversion and measurement limits

The site prepares a WhatsApp enquiry. A visitor must press Send within WhatsApp; a click alone is not a received enquiry or confirmed booking. There is no verified Meta pixel, Google Ads conversion tag, CRM receiver, or confirmed-lead reporting integration in this repository. Do not count client-side intent events as sales conversions, and do not send sensitive enquiry details to analytics.

Before paid traffic, test every enquiry path on physical iOS and Android devices, verify receipt of a deliberately sent message, secure permission for each testimonial, approve the offer/privacy wording, and configure consent-aware attribution and lead-quality reporting. Platform review and conversion performance cannot be guaranteed by the code build.

## Primary edit points

- `src/app/`: route pages, layout, metadata, responsive CSS, and SEO files.
- `src/content/`: website copy and testimonial/source data.
- `src/components/`: forms, navigation, CTA behavior, and section rendering.
- `scripts/export-next.mjs`: isolated static export.
- `scripts/build-blade-views.mjs`: validated Next-export-to-Laravel sync.
- `public/.htaccess`: static/route-payload requests and Laravel front-controller rules.
