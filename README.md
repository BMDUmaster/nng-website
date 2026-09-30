# NNG website

Narayani Garg's website at [nngarg.com](https://nngarg.com/) is served by Laravel on Hostinger. The editable frontend is in `src/`; Laravel serves the generated Blade views in `resources/views/` with matching assets in `public/`. Editing the Next.js source alone does not update the live site.

## Development and checks

Use Node 20.9 or newer. Run `npm ci`. Before publishing, run `npm run typecheck`, `npm run lint`, and `npm run lint:copy`. In this combined Laravel repository, root `npm run dev` currently selects Laravel's `app/` instead of Next's `src/app/`, so it is not a valid visual preview. Use a static `npm run export` preview served from `out/` until a separate Next-only development workspace is provided.

## Production build

```sh
NEXT_PUBLIC_SITE_URL=https://nngarg.com SITE_INDEXABLE=true NEXT_PUBLIC_BASE_PATH= NEXT_PUBLIC_PREVIEW_NOTE= NEXT_PUBLIC_WHATSAPP_NUMBER=919205511101 npm run build:laravel
```

This stages a clean Next export outside the Laravel application, validates the production metadata and source images, and synchronizes six Blade views, `_next` assets, route payloads, and SEO files. Source images already live in `public/images` and must be deployed with those generated files. The consultation landing page deliberately remains `noindex`; the other five routes must be indexable. A previous `out/` export is retained in a uniquely named sibling backup. Do not deploy `out/` directly over the Laravel web root or treat a successful local build as a live deployment.

See [DEVELOPER_HANDOFF.md](DEVELOPER_HANDOFF.md) for route and conversion details and [HOSTINGER_DEPLOYMENT_SECURITY.md](HOSTINGER_DEPLOYMENT_SECURITY.md) for deployment, private environment setup, and the required server-side application-key rotation.
