import type { APIRoute } from "astro";
import { coffeeBuy, moringaBuy, storeUrl } from "../data/site";

export const prerender = true;

function href(site: URL | undefined, path: string): string {
  return site ? new URL(path, site).href : path;
}

export const GET: APIRoute = ({ site }) => {
  const home = href(site, "/");
  const moringa = href(site, "/products/moringa/");
  const coffee = href(site, "/products/mushroom-coffee/");
  const privacy = href(site, "/privacy/");
  const terms = href(site, "/terms/");

  const body = `# GreenVanta

> GreenVanta is a brand site for two products sold on Amazon: moringa powder capsules and a medium-roast mushroom coffee. The pages repeat what the labels say and link to Amazon. This website does not take orders.

The site does not publish a price, a star rating, copied customer reviews, a street address, a phone number, an email address, certification seals, or health-outcome claims.

## Pages

- [Home](${home}): Both products, the label servings, the six mushrooms named in the coffee, preparation steps from the packages, questions, and links to the Amazon review sections.
- [Moringa Powder Capsules](${moringa}): 120 veggie capsules, 500 mg of Moringa oleifera leaf powder each, 1,000 mg per two-capsule serving, ingredients, and the label directions.
- [Mushroom Coffee](${coffee}): 30 instant sticks, medium roast, 6 g and 48 mg of caffeine per serving, the ingredient line, nutrition figures transcribed from the product image, and the preparation graphic.
- [Privacy policy](${privacy}): No accounts, no newsletter, and no advertising cookies on this site. Purchases are handled by Amazon.
- [Terms](${terms}): Informational site. The sale happens on Amazon. Not medical advice.

## Where to buy

- Moringa capsules: ${moringaBuy}
- Mushroom coffee: ${coffeeBuy}
- GreenVanta Amazon store: ${storeUrl}

As an Amazon Associate, GreenVanta may earn from qualifying purchases.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
