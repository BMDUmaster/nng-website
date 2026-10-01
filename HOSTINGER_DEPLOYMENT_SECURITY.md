# Hostinger deployment and security handoff

This repository contains the Laravel application that serves `nngarg.com`. The PHP routes render the generated Blade views in `resources/views/`; a Next.js source change alone does not update the live site. Publish the generated views and their matching `public/_next` assets together.

## Web root and environment

1. Prefer setting the domain's document root to this project's `public/` directory. If Hostinger cannot do that, retain the repository-root `.htaccess`, which routes requests into `public/` without serving existing source files from the repository root.
2. Provision `.env` on the server, outside `public/`, through a private deployment process. Do not create it from a web request, commit it, or place it in a downloadable backup. Set `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://nngarg.com`, a server-generated `APP_KEY`, and the approved mail/session settings. Ensure `storage/` and `bootstrap/cache/` are writable by the PHP process. Run `composer install --no-dev --optimize-autoloader` on the server.
3. Build the Laravel publication from a clean checkout with Node 20.9 or newer: run `npm ci`, then `NEXT_PUBLIC_SITE_URL=https://nngarg.com SITE_INDEXABLE=true NEXT_PUBLIC_BASE_PATH= NEXT_PUBLIC_PREVIEW_NOTE= NEXT_PUBLIC_WHATSAPP_NUMBER=919205511101 npm run build:laravel`. Remove any old `NEXT_PUBLIC_WHATSAPP_NUMBER` override from deployment settings. This creates a fresh Next export and synchronizes the six Blade views, hashed assets, and generated SEO files into the Laravel checkout. The sync refuses a missing export, localhost metadata, an unexpected enquiry number, or noindex on organic pages. Deploy those generated files together; do not deploy only `src/` or run the legacy conversion scripts.
4. After publishing the code and matching views/assets, use the server shell to run `php artisan optimize:clear`, `php artisan config:cache`, `php artisan route:cache`, and `php artisan view:cache`. There must be no web-accessible setup or cache-clearing endpoint.
5. Check the six page routes and required assets. Check that `/setup.php`, `/public/setup.php`, `/run-setup`, `/clear-cache`, `/composer.json`, `/package.json`, and `/.env` cannot expose application code, credentials, or a setup response. Do not use those endpoints to perform maintenance.

## Rotate the exposed application key

The former `APP_KEY` was committed in PHP source. Removing it from current files is not enough: it remains in Git history and must be treated as compromised. A server administrator should rotate the live key in a maintenance window, without pasting either key into tickets or logs.

1. Privately back up the current `.env` outside the web root and inventory any persisted data encrypted with Laravel's application key. Rotating the key invalidates existing signed/encrypted cookies and sessions. Persisted encrypted data may need a planned re-encryption or migration.
2. If no persisted encrypted data depends on the old key, run `php artisan config:clear` and `php artisan key:generate --force` from the project directory on the server. Keep the new key only in the protected `.env` or secret store. If encrypted data does depend on the old key, plan that migration before rotation; do not keep using the exposed key indefinitely.
3. Rebuild configuration cache with `php artisan config:cache`, restart PHP workers if Hostinger caches environment in long-running processes, and verify login/session behavior and all public pages. Invalidate old sessions. Record completion without recording the key value.

Do not mark the security incident resolved until the server key is rotated and source-file access is verified on the live domain.
