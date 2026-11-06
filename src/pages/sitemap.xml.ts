import type { APIRoute } from "astro";

export const prerender = true;

const paths = ["/", "/products/moringa/", "/products/mushroom-coffee/", "/privacy/", "/terms/"];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    const empty = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Set PUBLIC_SITE_URL to the production origin and rebuild. This file lists no URLs until then. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>
`;
    return new Response(empty, {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
  }

  const urls = paths
    .map((path) => {
      const loc = new URL(path, site).href;
      return `  <url><loc>${loc}</loc></url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
