import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://estarmed.co";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "EstarMed — Logística de atención médica domiciliaria",
    template: "%s · EstarMed",
  },
  description:
    "Plataforma web para coordinar profesionales, conductores, vehículos, sedes y pacientes: desde la planeación del mes hasta el cierre y la liquidación de cada ruta. Producto de Estárter S.A.S.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "EstarMed — Logística domiciliaria en una sola pantalla",
    description:
      "Coordine profesionales, conductores, CIS y pacientes — de la agenda a la liquidación.",
    locale: "es_CO",
    type: "website",
    url: site,
    siteName: "EstarMed",
  },
  twitter: {
    card: "summary_large_image",
    title: "EstarMed",
    description:
      "La logística domiciliaria, en una sola pantalla. Producto de Estárter.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#007DFF",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Estárter S.A.S.",
      url: site,
      email: "contacto@estarter.co",
      logo: `${site}/brand/estarmed-logo.png`,
      sameAs: [],
    },
    {
      "@type": "SoftwareApplication",
      name: "EstarMed",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: site,
      description:
        "Plataforma de logística para atención médica domiciliaria: agendas, rutas, mapa en vivo, chat y liquidación operativa.",
      provider: { "@type": "Organization", name: "Estárter S.A.S." },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/OnlineOnly",
        priceCurrency: "COP",
        description: "Demo e implementación bajo contrato. Sin registro público.",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CO"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/video/poster-750.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-display),ui-sans-serif,system-ui,sans-serif]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
