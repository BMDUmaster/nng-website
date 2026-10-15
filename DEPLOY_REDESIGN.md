# Redesigned website: what changed and how to put it live

Branch `aditya`, from `jyoti` (the code running on nngarg.com). The Laravel backend is unchanged: admin panel,
enquiry store and blog keep working with the same database.

## What is in this branch

- `src/`, `scripts/`, `landing-pages/`, `package.json` and the Next.js config files: the redesigned website source.
- `public/`: the built website, ready to serve. Every page is a folder with an `index.html` (home, about, services,
  consultation, consultations, contact, hand holding program, resources, shop) plus the five Meta landing pages
  under `public/landing/` (brainology, astrology, numerology, vastulogy, hand-holding).
- Tracking on every page: Google Tag Manager `GTM-P3KXR4GL`, Google Analytics `G-8FZ4BE77QW` and Microsoft Clarity
  `yxm2cn04j3`. The Meta Pixel `1412583603769916` is on the main website only, not on the landing pages.
- The contact page has an enquiry form that posts to `/enquiry/store`. Enquiries appear in Admin → Customer
  Enquiries with `source_page = contact_page`, exactly like the old form.

## How requests are served

`public/.htaccess` now uses `DirectoryIndex index.html index.php`:

- A page folder such as `/contact/` is served from its `index.html` (the new design).
- Anything without a file or folder goes to Laravel through `index.php`: `/admin/...`, `/login`, `/blog`,
  `/enquiry/store`, `/privacy-policy`, `/terms-conditions`, `/nng`.
- Old ad links `/landing/psychic-reader/` and `/landing/vastu/` redirect to `/landing/brainology/` and
  `/landing/vastulogy/`.

The root `.htaccess` lists `public/index.html` first for the same reason when the repository root is the document root.

## Putting it live on Hostinger

1. Take a backup of the current site files and the database (hPanel → Backups).
2. Deploy this branch the same way as before (pull or upload the files). Keep the server's existing `.env`.
3. No database migration is needed.
4. Clear Laravel caches from the server shell: `php artisan optimize:clear`.
5. Check: home, a service page, `/contact/` (send one test enquiry and see it in Admin), `/landing/astrology/`,
   `/admin/login`, `/blog`.

## Rebuilding the website after a content change

```
npm ci
NEXT_EXPORT=1 NEXT_PUBLIC_SITE_URL=https://nngarg.com SITE_INDEXABLE=true NEXT_PUBLIC_WHATSAPP_NUMBER=919205511101 NEXT_PUBLIC_ENQUIRY_ENDPOINT=/enquiry/store npx next build
npm run build:landing
```

Then copy the contents of `out/` into `public/`. On Windows Git Bash, prefix the build with `MSYS_NO_PATHCONV=1`
so `/enquiry/store` is not turned into a file path. Note that Laravel's root `app/` folder can hide Next's
`src/app/` during a build; build from a copy without the Laravel folders if `next build` finds no pages.

## Security items found (not changed in this branch)

- `routes/web.php` has `/run-setup` and `/clear-cache`, which anyone can open. `HOSTINGER_DEPLOYMENT_SECURITY.md`
  says these must not exist.
- `.env` (with database and mail passwords) is committed to this repository. It should be removed from Git and the
  passwords changed.
- The Laravel `APP_KEY` is marked as exposed in `HOSTINGER_DEPLOYMENT_SECURITY.md` and still needs rotating on the server.
