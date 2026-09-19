import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif, Sora, Space_Mono } from "next/font/google";
import Navigation from "./components/ui/navigation";
import SideNav from "./components/ui/side-nav";
import SiteFooter from "./components/ui/site-footer";
import SmoothScroll from "./components/smooth-scroll";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Essai en cours : Geist sur les titres, Sora reste sur le reste du site.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julien Lucas — Applied AI Engineer, des agents et RAG en prod de bout en bout",
  description:
    "Julien Lucas. Cinq ans à coder pour des scale-ups. Une bascule fin 2024 vers l'IA. Aujourd'hui ingénieur en IA appliquée.",
  manifest: "/favicons/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      {
        url: "/favicons/android-icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: [
      { url: "/favicons/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favicons/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicons/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/favicons/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicons/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favicons/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicons/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicons/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicons/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
    "msapplication-config": "/favicons/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${geist.variable} ${spaceMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-LZL71FQRRE`}
          strategy="afterInteractive"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LZL71FQRRE', {
            page_path: window.location.pathname,
          });
        `,
          }}
          strategy="afterInteractive"
        />
        <SmoothScroll>
          <Navigation />
          <SideNav />
          <main>{children}</main>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
