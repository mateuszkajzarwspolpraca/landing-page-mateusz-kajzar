/**
 * Główny układ (layout) całej strony. Next.js owija nim każdą podstronę.
 * Tu są: domyślne dane SEO, globalne style, ekran ładowania, Google Analytics i baner cookies.
 */
import type { Metadata } from "next";

import "./globals.css";
import { CookieConsent } from "@/components/site/CookieConsent";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { PageLoader } from "@/components/site/PageLoader";
import { SITE_URL } from "@/lib/site";

/**
 * Domyślne dane SEO dla wszystkich podstron. Podstrona może je nadpisać własnym `metadata`.
 * `template` dokleja „| Mateusz Kajzar” do tytułu każdej podstrony.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mateusz Kajzar | Trener personalny online i w Jaworznie",
    template: "%s | Mateusz Kajzar",
  },
  description:
    "Trening bez komplikowania. Prowadzenie online z każdego miejsca w Polsce i treningi personalne w Jaworznie.",
  /** Ikonka w karcie przeglądarki. */
  icons: { icon: "/images/logo/logo.PNG", apple: "/images/logo/logo.PNG" },
  authors: [{ name: "Mateusz Kajzar" }],
  creator: "Mateusz Kajzar",
  /** Podgląd linku na Facebooku, Messengerze, WhatsAppie itd. */
  openGraph: {
    title: "Proste zasady. Widoczne efekty.",
    description: "Mateusz Kajzar — trener personalny. Prowadzenie online i treningi w Jaworznie.",
    type: "website",
    locale: "pl_PL",
    siteName: "Mateusz Kajzar Trener Personalny",
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateusz Kajzar - Proste zasady. Widoczne efekty.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proste zasady. Widoczne efekty.",
    description: "Mateusz Kajzar — trener personalny. Prowadzenie online i treningi w Jaworznie.",
    images: ["/images/og/og-image.png"],
  },
};

/** Szkielet HTML wspólny dla wszystkich podstron. `children` to treść konkretnej podstrony. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="antialiased">
      <body className="flex min-h-full flex-col bg-black text-white">
        {/* Ekran ładowania z logo */}
        <PageLoader />
        {/* Statystyki: ładują się dopiero po zgodzie na cookies */}
        <GoogleAnalytics />
        {children}
        {/* Baner zgody na cookies */}
        <CookieConsent />
      </body>
    </html>
  );
}
