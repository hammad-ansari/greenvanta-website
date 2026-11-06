export const disclosure =
  "As an Amazon Associate, GreenVanta may earn from qualifying purchases.";

export const fdaDisclaimer =
  "Statements on dietary supplement packaging have not been evaluated by the Food and Drug Administration. GreenVanta products are not intended to diagnose, treat, cure, or prevent any disease.";

export const storeUrl =
  "https://www.amazon.com/stores/GREENVANTA/page/8D1B7718-07DE-4230-AF5D-A81A8292D177?lp_asin=B0GYLMN8PM&ref_=ast_bln";

export const updated = "November 5, 2026";

export interface Step {
  title: string;
  text: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Ingredient {
  name: string;
  text: string;
}

export interface Product {
  slug: string;
  name: string;
  nav: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  buy: string;
  reviews: string;
  asin: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  srcset: string;
  sizes: string;
  secondary: string;
  secondaryAlt: string;
  secondaryWidth: number;
  secondaryHeight: number;
  secondarySrcset: string;
  secondarySizes: string;
  lede: string;
  summary: string;
  chips: Fact[];
  specs: Fact[];
  ingredients: string[];
  steps: Step[];
  safety: string[];
  panelTitle: string;
  panelNote: string;
  rows: Fact[];
}

export const moringaBuy =
  "https://www.amazon.com/GREENVANTA-Capsules-Oleifera-Plant-Based-Supplement/dp/B0GYLMN8PM?ref_=ast_sto_dp";

export const coffeeBuy =
  "https://www.amazon.com/Mushroom-Adaptogenic-Mushrooms-Cordyceps-Travel-Friendly/dp/B0HCNV1QZP?ref_=ast_sto_dp";

export const mushrooms: Ingredient[] = [
  {
    name: "Lion’s mane",
    text: "Named on the ingredient list. The listing does not give a separate milligram amount for this mushroom.",
  },
  {
    name: "Reishi",
    text: "Listed by its common name with the other mushrooms in the drink mix. No individual amount is stated.",
  },
  {
    name: "Cordyceps",
    text: "Included by common name. The label copy we reviewed does not specify a species or a dose.",
  },
  {
    name: "Shiitake",
    text: "A culinary mushroom named in the blend, alongside the coffee and coconut milk.",
  },
  {
    name: "Turkey tail",
    text: "Named on the pouch and in the Amazon ingredient line. No separate quantity is printed in the listing text.",
  },
  {
    name: "King trumpet",
    text: "The sixth mushroom named in the blend. The listing identifies it by this common name only.",
  },
];

export const products: Product[] = [
  {
    slug: "moringa",
    name: "Moringa Powder Capsules",
    nav: "Moringa",
    eyebrow: "Leaf powder, in a capsule",
    metaTitle: "Moringa Powder Capsules, 500 mg | GreenVanta",
    metaDescription:
      "GreenVanta moringa capsules: 120 veggie capsules, 500 mg of Moringa oleifera leaf powder each, and 1,000 mg per two-capsule serving. Label directions and the Amazon listing.",
    buy: moringaBuy,
    reviews: `${moringaBuy}#customerReviews`,
    asin: "B0GYLMN8PM",
    image: "/images/moringa-bottle.webp",
    imageAlt:
      "GreenVanta moringa capsules bottle with a dark green body, gold band, and a moringa leaf on the label. The label reads 120 capsules.",
    width: 761,
    height: 1253,
    srcset: "/images/moringa-bottle-520.webp 520w, /images/moringa-bottle.webp 761w",
    sizes: "(max-width: 980px) 72vw, 400px",
    secondary: "/images/moringa-labels.webp",
    secondaryAlt:
      "Front and back of the GreenVanta moringa bottle. The back shows the supplement facts panel: 2 veggie capsules, 60 servings, and 1000 mg of moringa leaf powder.",
    secondaryWidth: 1254,
    secondaryHeight: 1200,
    secondarySrcset: "/images/moringa-labels-900.webp 900w, /images/moringa-labels.webp 1254w",
    secondarySizes: "(max-width: 980px) 100vw, 540px",
    lede: "Moringa oleifera leaf powder in hypromellose capsules. Each capsule is 500 mg. The serving on the label is two capsules, 1,000 mg, once a day with water.",
    summary:
      "A bottle of 120 veggie capsules. The Amazon listing describes it as a plant-based dietary supplement made with moringa leaf powder rather than a concentrated extract.",
    chips: [
      { label: "Per capsule", value: "500 mg" },
      { label: "Per serving", value: "1,000 mg" },
      { label: "In the bottle", value: "120 capsules" },
      { label: "Servings", value: "60" },
    ],
    specs: [
      { label: "Product", value: "Moringa powder capsules" },
      { label: "Botanical", value: "Moringa oleifera leaf powder" },
      { label: "Form", value: "Hypromellose vegetable capsule" },
      { label: "Amount per capsule", value: "500 mg moringa leaf powder" },
      { label: "Serving size", value: "2 veggie capsules" },
      { label: "Amount per serving", value: "1,000 mg" },
      { label: "Servings per container", value: "60" },
      { label: "Other ingredients", value: "Magnesium stearate" },
      { label: "Diet type on the listing", value: "Plant-based, vegan, vegetarian" },
      { label: "ASIN", value: "B0GYLMN8PM" },
      { label: "UPC on the listing", value: "199874549002" },
    ],
    ingredients: [
      "Moringa leaf powder (Moringa oleifera)",
      "Hypromellose (vegetable capsule)",
      "Magnesium stearate",
    ],
    steps: [
      {
        title: "Take two capsules",
        text: "The label says: as a dietary supplement, take 2 capsules daily with water, or as directed by a healthcare professional.",
      },
      {
        title: "That serving is 1,000 mg",
        text: "Two capsules provide 1,000 mg of moringa leaf powder. Each capsule is 500 mg. A daily value has not been established for this ingredient.",
      },
      {
        title: "Keep the seal intact",
        text: "Do not use the bottle if the safety seal is damaged or missing. Store it in a cool, dry place, and keep it out of reach of children.",
      },
    ],
    safety: [
      "Keep out of reach of children.",
      "Do not use if the safety seal is damaged or missing.",
      "Store in a cool, dry place.",
      "The listing describes the product for adults and says to follow a healthcare professional’s direction when that applies.",
    ],
    panelTitle: "Supplement facts, as printed on the product image",
    panelNote:
      "The supplement facts graphic on the Amazon listing lists the serving below. Packaging can change. The bottle in your hand is the authority.",
    rows: [
      { label: "Serving size", value: "2 veggie capsules" },
      { label: "Servings per container", value: "60" },
      { label: "Moringa leaf powder", value: "1,000 mg" },
      { label: "Daily value", value: "Not established" },
    ],
  },
  {
    slug: "mushroom-coffee",
    name: "Mushroom Coffee",
    nav: "Mushroom coffee",
    eyebrow: "Medium roast, in a stick",
    metaTitle: "Mushroom Coffee, Medium Roast | GreenVanta",
    metaDescription:
      "GreenVanta mushroom coffee: medium-roast instant sticks with Arabica coffee, coconut milk, and six named mushrooms. 30 packets, preparation from the product graphic, and the Amazon listing.",
    buy: coffeeBuy,
    reviews: `${coffeeBuy}#customerReviews`,
    asin: "B0HCNV1QZP",
    image: "/images/coffee-pouch.webp",
    imageAlt:
      "GreenVanta mushroom coffee pouch with two instant sticks, coconut, and mushrooms. The pouch reads 30 sticks, drink mix, 30 servings, net wt 6.35 oz.",
    width: 1100,
    height: 1043,
    srcset: "/images/coffee-pouch-640.webp 640w, /images/coffee-pouch.webp 1100w",
    sizes: "(max-width: 980px) 86vw, 480px",
    secondary: "/images/coffee-cup.webp",
    secondaryAlt:
      "A cup of coffee on a wooden board beside a GreenVanta stick marked 1 serving, with coffee beans and mushrooms nearby.",
    secondaryWidth: 1400,
    secondaryHeight: 702,
    secondarySrcset: "/images/coffee-cup-900.webp 900w, /images/coffee-cup.webp 1400w",
    secondarySizes: "(max-width: 980px) 100vw, 640px",
    lede: "An instant medium-roast coffee in single sticks. The ingredient line names Arabica coffee, coconut milk, and six mushrooms: lion’s mane, reishi, cordyceps, shiitake, turkey tail, and king trumpet.",
    summary:
      "Thirty travel-friendly sticks. Amazon lists the flavor as coconut, the roast as medium, and the caffeine as 48 mg per serving. One stick is 6 g.",
    chips: [
      { label: "Sticks", value: "30" },
      { label: "Each stick", value: "6 g" },
      { label: "Caffeine", value: "48 mg" },
      { label: "Roast", value: "Medium" },
    ],
    specs: [
      { label: "Product", value: "Mushroom coffee, instant drink mix" },
      { label: "Roast", value: "Medium" },
      { label: "Flavor on the listing", value: "Coconut" },
      { label: "Format", value: "30 instant sticks" },
      { label: "Serving size", value: "1 stick (6 g)" },
      { label: "Servings", value: "30" },
      { label: "Net weight", value: "6.35 oz" },
      { label: "Caffeine per serving", value: "48 mg, from Amazon product details" },
      { label: "Diet type on the listing", value: "Plant-based" },
      { label: "ASIN", value: "B0HCNV1QZP" },
      { label: "UPC on the listing", value: "199874325286" },
    ],
    ingredients: [
      "Arabica coffee beans",
      "Lion’s mane mushroom",
      "Reishi mushroom",
      "Cordyceps mushroom",
      "Shiitake mushroom",
      "Turkey tail mushroom",
      "King trumpet mushroom",
      "Coconut milk",
    ],
    steps: [
      {
        title: "Pour in one stick",
        text: "The product graphic says to pour 1 stick (6 g) into your cup.",
      },
      {
        title: "Add water",
        text: "Add 6–10 oz of water, hot or cold.",
      },
      {
        title: "Stir",
        text: "Stir 15–30 seconds, until the powder is dissolved.",
      },
      {
        title: "Optional additions",
        text: "Milk, creamer, or ice are marked optional on the same graphic.",
      },
    ],
    safety: [
      "This is a caffeinated drink. Amazon lists 48 mg of caffeine per serving.",
      "Coconut milk is an ingredient. Read the package if you avoid coconut.",
      "The nutrition graphic marks the drink dairy-free, gluten-free, and sugar-free, and includes a vegan icon worded “vegan free.” Those are marks on the graphic, not a certification this website can confirm.",
      "Prepare it the way the stick describes, and read the packet you have. Details can change.",
    ],
    panelTitle: "Nutrition facts, as printed on the product image",
    panelNote:
      "Figures below are transcribed from the nutrition panel shown on the Amazon listing. The packet you purchase is the authority if anything differs.",
    rows: [
      { label: "Servings per container", value: "30" },
      { label: "Serving size", value: "1 stick (6 g)" },
      { label: "Calories", value: "15" },
      { label: "Total fat", value: "1 g (1% DV)" },
      { label: "Saturated fat", value: "1 g (5% DV)" },
      { label: "Trans fat", value: "0 g" },
      { label: "Sodium", value: "5 mg (0% DV)" },
      { label: "Total carbohydrate", value: "Less than 1 g (0% DV)" },
      { label: "Protein", value: "0 g" },
    ],
  },
];

export function otherProduct(slug: string): Product {
  const found = products.find((item) => item.slug !== slug);
  if (!found) throw new Error("Missing companion product");
  return found;
}

export const faqs: { q: string; a: string }[] = [
  {
    q: "Where do I buy GreenVanta?",
    a: "On Amazon. This website does not take orders, run a cart, or collect payment. Each product page has a buy link that opens the matching Amazon listing in a new tab. The GreenVanta store page is linked in the footer.",
  },
  {
    q: "Why is there no price?",
    a: "Amazon prices move. A number printed here would go stale, so we don’t publish one. The current price, delivery estimate, and seller details are on the listing.",
  },
  {
    q: "Is this medical advice?",
    a: "No. GreenVanta pages describe what the products are and what their labels say about use. They are not medical advice, and they are not a promise that a product will affect energy, immunity, focus, or any other health outcome. Talk with a qualified clinician about your own situation. The FDA has not evaluated supplement statements, and these products are not intended to diagnose, treat, cure, or prevent any disease.",
  },
  {
    q: "How are the moringa capsules used?",
    a: "The label says to take 2 capsules daily with water, or as directed by a healthcare professional. That serving is 1,000 mg of moringa leaf powder. Store the bottle in a cool, dry place, keep it away from children, and don’t use it if the safety seal is damaged or missing.",
  },
  {
    q: "What is in the mushroom coffee?",
    a: "The ingredient list names Arabica coffee beans, lion’s mane, reishi, cordyceps, shiitake, turkey tail, king trumpet, and coconut milk. It is a medium roast with a coconut flavor, sold as 30 instant sticks. The listing calls the drink an adaptogenic blend. This site repeats the names. It does not add benefits for any of them.",
  },
  {
    q: "How much caffeine is in a stick?",
    a: "Amazon’s product details list 48 mg of caffeine per serving. The drink is caffeinated. If you limit caffeine, use the figure printed on the packet you buy.",
  },
  {
    q: "How do I prepare the coffee?",
    a: "The product graphic says: pour 1 stick (6 g) into a cup, add 6–10 oz of hot or cold water, and stir 15–30 seconds until dissolved. Milk, creamer, or ice are optional.",
  },
  {
    q: "Are the products vegan or allergen-free?",
    a: "The moringa listing’s diet type is plant-based, vegan, and vegetarian, and the capsule is hypromellose. The coffee listing’s diet type is plant-based. Its nutrition graphic marks the drink dairy-free, gluten-free, and sugar-free, and shows a vegan icon. Coconut milk is an ingredient in the coffee. This website does not display certification seals.",
  },
  {
    q: "Where are the reviews?",
    a: "On Amazon, under each listing. We link to those review sections and do not reprint customer comments here. Ratings change, and a copied review would not stay accurate.",
  },
  {
    q: "Do you collect an email address?",
    a: "No. There is no newsletter, no account, and no contact form on this site. Questions about an order belong on the Amazon listing, where the purchase actually happens.",
  },
];
