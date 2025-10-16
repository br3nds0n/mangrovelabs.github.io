import "../styles/globals.css";
import "../index.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Mangrove Labs | Fábrica de Software e Soluções Digitais",
  description: "Página institucional da Mangrove Labs, fábrica de software especializada em soluções digitais com alto desempenho e inovação.",
  keywords: ["fábrica de software", "desenvolvimento de software", "soluções digitais", "mangrove labs", "inovação tecnológica", "software sob medida"],
  authors: [{ name: "Mangrove Labs" }],
  creator: "Mangrove Labs",
  publisher: "Mangrove Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mangrovelabs.com.br",
    title: "Mangrove Labs | Fábrica de Software e Soluções Digitais",
    description: "Fábrica de software especializada em soluções digitais com alto desempenho e inovação.",
    siteName: "Mangrove Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mangrove Labs | Fábrica de Software e Soluções Digitais",
    description: "Fábrica de software especializada em soluções digitais com alto desempenho e inovação.",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://mangrovelabs.com.br",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mangrove Labs",
    description:
      "Fábrica de software especializada em soluções digitais com alto desempenho e inovação.",
    url: "https://mangrovelabs.com.br",
    logo: "https://mangrovelabs.com.br/favicon.ico",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


