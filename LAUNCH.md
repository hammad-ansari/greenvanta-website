# Launch

The site is a static Astro build. There is no server, database, or cart. `dist/` is what you publish.

## Set the production URL before the build

Canonical links, Open Graph URLs, the sitemap, and `robots.txt` use the origin you set at **build time**. A later DNS change does not rewrite files that were already built.

```bash
PUBLIC_SITE_URL=https://your-domain.example npm run build
```

`PUBLIC_SITE_URL` must be the origin only, with `https://` and no path. A trailing slash is removed. Example: `https://greenvanta.example`.

That build writes:

- `<link rel="canonical">` and `og:url` on every indexable page
- absolute image URLs inside the structured data
- `dist/sitemap.xml` listing `/`, `/products/moringa/`, `/products/mushroom-coffee/`, `/privacy/`, and `/terms/`
- `dist/robots.txt` with `Sitemap: https://your-domain.example/sitemap.xml`
- `dist/llms.txt` with absolute page links for answer engines

If you build without `PUBLIC_SITE_URL`, the HTML still works, but canonical and Open Graph URLs stay relative or local, `sitemap.xml` returns a short plain-text note, and `robots.txt` does not name a sitemap. Do not deploy that build.

Check the output before you upload it:

```bash
grep -o 'rel="canonical" href="[^"]*"' dist/index.html
cat dist/robots.txt
```

## Deploy

1. Point the domain at a static host and serve `dist/` at the site root.
2. Use HTTPS. Redirect `http` to `https`, and redirect any `www` / apex pair to the single origin you built with.
3. Keep trailing slashes. The pages are `/products/moringa/` and `/privacy/`, not the slashless form.
4. After DNS is live, submit `https://your-domain.example/sitemap.xml` in Google Search Console (and Bing if you use it).
5. If the domain changes, set `PUBLIC_SITE_URL` again and rebuild. Do not edit the domain by hand inside `dist/`.

Node.js 22.23.4 or newer is required to build. Visitors do not need Node.

## Caching

Hashed files under `/_astro/` can be cached for a year (`Cache-Control: public, max-age=31536000, immutable`).

HTML, `robots.txt`, `sitemap.xml`, and `llms.txt` should be revalidated (`Cache-Control: public, max-age=0, must-revalidate` or a short max-age). Product images in `/images/` can use a long cache, but change the filename if you replace a photo, because the URLs are not hashed.

## Response headers

Set these on the host. They are not meta tags.

```
Strict-Transport-Security: max-age=63072000; includeSubDomains
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; img-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; script-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'
```

`style-src` allows `'unsafe-inline'` because the no-JavaScript menu fallback is a `<style>` block in `<noscript>`. `script-src 'self'` matches the one bundled module (menu and scroll reveal). There is no third-party script.

`Referrer-Policy` is also set in the HTML. Buy links use `rel="noopener noreferrer"`, so those clicks do not send this site in the Referer header. Amazon still receives the `ref_=ast_sto_dp` value that is already in each product URL. Do not remove that parameter.

## What this build will not invent

Do not add a price, a star rating, copied reviews, an email address, a registration number, a retail-office claim, certification badges, or health-outcome claims to the pages or the structured data. The published operator is DREAM TO COME LLC, with the mailing address and telephone shown in the footer. Organization data may repeat that legal name, telephone, and postal address when the same facts are visible on the page. Product, website, breadcrumb, and FAQ data describe only text that is visible on the page.

`llms.txt` is a short factual map for answer engines. It is not a second marketing page.
