# GreenVanta

A two-product brand site for GreenVanta: moringa leaf capsules and medium-roast mushroom coffee. Pages explain what the labels say and link to the Amazon listings. There is no cart.

## Run locally

Node.js 22.23.4 or newer (the Astro version in this project requires it).

```bash
npm install
npm run dev -- --host 0.0.0.0
```

The dev server uses port **4471**. Open [http://127.0.0.1:4471](http://127.0.0.1:4471).

```bash
npm run build
npm run preview -- --host 0.0.0.0 --port 4471
```

## Pages

- `/` home
- `/products/moringa/`
- `/products/mushroom-coffee/`
- `/privacy/`
- `/terms/`

Buy buttons open the product’s Amazon listing in a new tab. Prices are not printed here because they change.

Before a public launch, set the production origin and rebuild. See [LAUNCH.md](LAUNCH.md).

```bash
PUBLIC_SITE_URL=https://your-domain.example npm run build
```

## Brand files

Product photography is stored in `public/images/`. The wordmark was cropped from the brand’s Amazon store screenshot. `brand/greenvanta-logo.pdf` is the supplied logo file. The Open Graph image is `public/og.jpg`.
