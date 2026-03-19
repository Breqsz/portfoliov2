import type { Metadata } from "next";

const siteName = "BREQ";
const siteTitle = "Guilherme Rocha Bianchini — Engenheiro de Software";
const siteDescription =
  "Engenheiro de Software, estudante FIAP. Desenvolvimento full-stack, cloud computing e soluções escaláveis. Buscando estágio em TI.";

const baseUrl =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://breq.com.br";

export const siteMetadata = {
  title: siteTitle,
  description: siteDescription,
  siteName,
  baseUrl,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: siteTitle,
    description: siteDescription,
  },
};

export function createPageMetadata(overrides: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const { title, description, path = "", noIndex } = overrides;
  const url = path ? `${baseUrl}${path}` : baseUrl;
  const pageTitle = title ? `${title} | ${siteName}` : siteTitle;
  const pageDesc = description ?? siteDescription;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: path ? { canonical: url } : undefined,
    openGraph: {
      ...siteMetadata.openGraph,
      title: pageTitle,
      description: pageDesc,
      url,
    },
    twitter: {
      ...siteMetadata.twitter,
      title: pageTitle,
      description: pageDesc,
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

const ogImage =
  typeof process.env.NEXT_PUBLIC_OG_IMAGE_URL === "string"
    ? `${baseUrl}${process.env.NEXT_PUBLIC_OG_IMAGE_URL}`
    : undefined;

export const defaultMetadata: Metadata = {
  ...createPageMetadata({}),
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/images/favicon.ico",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    ...siteMetadata.openGraph,
    url: baseUrl,
    siteName: siteName,
    ...(ogImage
      ? { images: [{ url: ogImage, width: 1200, height: 630, alt: siteTitle }] }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
