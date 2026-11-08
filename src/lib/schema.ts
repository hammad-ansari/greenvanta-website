import { company } from "../data/site";

export interface Faq {
  q: string;
  a: string;
}

export interface Crumb {
  name: string;
  path: string;
}

type Node = Record<string, unknown>;

export function absolute(site: URL | undefined, path: string): string | undefined {
  if (!site) return undefined;
  return new URL(path, site).href;
}

export function organizationNode(site: URL | undefined): Node {
  const node: Node = {
    "@type": "Organization",
    name: "GreenVanta",
    legalName: company.legalName,
    telephone: company.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.streetAddress,
      addressLocality: company.addressLocality,
      addressRegion: company.addressRegion,
      postalCode: company.postalCode,
      addressCountry: company.addressCountry,
    },
    description:
      "Moringa leaf capsules and a medium-roast mushroom coffee. Read the label here. Buy on Amazon, not on this page.",
  };
  const url = absolute(site, "/");
  const logo = absolute(site, "/images/logo-wordmark.webp");
  if (url && site) {
    node["@id"] = new URL("/#organization", site).href;
    node.url = url;
  }
  if (logo) {
    node.logo = {
      "@type": "ImageObject",
      url: logo,
      width: 360,
      height: 98,
    };
  }
  return node;
}

export function websiteNode(site: URL | undefined, description: string): Node {
  const node: Node = {
    "@type": "WebSite",
    name: "GreenVanta",
    inLanguage: "en",
    description,
  };
  const url = absolute(site, "/");
  if (url && site) {
    node["@id"] = new URL("/#website", site).href;
    node.url = url;
    node.publisher = { "@id": new URL("/#organization", site).href };
  }
  return node;
}

export function faqNode(faqs: Faq[]): Node {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbNode(site: URL | undefined, crumbs: Crumb[]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => {
      const item = absolute(site, crumb.path);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        ...(item ? { item } : {}),
      };
    }),
  };
}

export function productNode(options: {
  site: URL | undefined;
  name: string;
  description: string;
  path: string;
  image: string;
  sku: string;
  gtin12?: string;
  properties: { name: string; value: string }[];
}): Node {
  const url = absolute(options.site, options.path);
  const image = absolute(options.site, options.image);
  const node: Node = {
    "@type": "Product",
    name: options.name,
    description: options.description,
    sku: options.sku,
    brand: {
      "@type": "Brand",
      name: "GreenVanta",
    },
    additionalProperty: options.properties.map((property) => ({
      "@type": "PropertyValue",
      name: property.name,
      value: property.value,
    })),
  };
  if (url) node.url = url;
  if (image) node.image = [image];
  if (options.gtin12) node.gtin12 = options.gtin12;
  return node;
}

export function graph(nodes: Node[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  }).replace(/</g, "\\u003c");
}
