import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bassuurmond.nl"),
  title: {
    default: "Suurmond Technical Solutions – Technische dienstverlening & advies",
    template: "%s | Suurmond Technical Solutions",
  },
  description:
    "Technische dienstverlening voor het ontwerpen, installeren, aanpassen en onderhouden van technische systemen en maatwerkoplossingen. Praktisch advies en betrouwbare uitvoering.",
  keywords:
    "technisch advies, technische dienstverlening, installatie, onderhoud, maatwerkoplossingen, ZZP techniek, Suurmond, Zeeland",
  authors: [{ name: "Bas Suurmond" }],
  creator: "Suurmond Technical Solutions",
  openGraph: {
    title: "Suurmond Technical Solutions",
    description:
      "Technische dienstverlening en advies. Ontwerpen, installeren, aanpassen en onderhouden van technische systemen en maatwerkoplossingen.",
    url: "https://bassuurmond.nl",
    siteName: "Suurmond Technical Solutions",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Suurmond Technical Solutions — Technische dienstverlening & advies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suurmond Technical Solutions",
    description:
      "Technische dienstverlening en advies. Ontwerpen, installeren, aanpassen en onderhouden van technische systemen en maatwerkoplossingen.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bassuurmond.nl",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Suurmond Technical Solutions",
              description:
                "Technische dienstverlening en advies voor ontwerpen, installeren, aanpassen en onderhouden van technische systemen en maatwerkoplossingen.",
              url: "https://bassuurmond.nl",
              telephone: "+31653790501",
              email: "sts@bassuurmond.nl",
              image: "https://bassuurmond.nl/opengraph-image",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Zeeland",
                addressRegion: "Noord-Brabant",
                addressCountry: "NL",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31653790501",
                contactType: "customer service",
                availableLanguage: "Dutch",
              },
              founder: {
                "@type": "Person",
                name: "Bas Suurmond",
              },
              areaServed: { "@type": "Country", name: "Nederland" },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
