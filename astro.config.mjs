// @ts-check
import { defineConfig } from "astro/config";

/**
 * Production origin, with no path and no trailing slash.
 * Example: PUBLIC_SITE_URL=https://example.com npm run build
 * @returns {string | undefined}
 */
function productionOrigin() {
  const raw = process.env.PUBLIC_SITE_URL?.trim();
  if (!raw) return undefined;

  let url;
  try {
    url = new URL(raw);
  } catch {
    console.warn(`PUBLIC_SITE_URL is not a valid URL (${raw}). Canonicals and the sitemap were skipped.`);
    return undefined;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    console.warn("PUBLIC_SITE_URL must start with http:// or https://.");
    return undefined;
  }

  if (url.pathname !== "/" || url.search || url.hash) {
    console.warn(`PUBLIC_SITE_URL should be an origin only. Using ${url.origin}.`);
  }

  return url.origin;
}

const site = productionOrigin();

export default defineConfig({
  site,
  trailingSlash: "always",
  compressHTML: true,
});
