import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const lines = ["User-agent: *", "Allow: /", ""];
  if (site) {
    lines.push(`Sitemap: ${new URL("sitemap.xml", site).href}`, "");
  } else {
    lines.push(
      "# Set PUBLIC_SITE_URL to the production origin and rebuild to publish the Sitemap line.",
      "",
    );
  }
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
