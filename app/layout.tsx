import type { Metadata } from "next";

import "./globals.css";
import { GoogleTagManager } from "@/components/GoogleTagManager";


export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-mateusz-kajzar.vercel.app"),
  title:
    "Mateusz Kajzar | Trener Personalny Jaworzno i Trzebinia | Trener Online",
  description:
    "Indywidualne prowadzenie treningowe online i stacjonarnie w Jaworznie oraz Trzebini. Plan treningowy, analiza techniki, stały kontakt i wsparcie na każdym etapie.",
  keywords: [
    "trener personalny Jaworzno",
    "trener personalny Trzebinia",
    "trener online",
    "prowadzenie treningowe online",
    "plan treningowy",
    "analiza techniki",
    "trening personalny Jaworzno",
    "trening personalny Trzebinia",
  ],
  authors: [{ name: "Mateusz Kajzar" }],
  creator: "Mateusz Kajzar",
  openGraph: {
    title: "Proste zasady. Widoczne efekty.",
    description:
      "Mateusz Kajzar - trener personalny Jaworzno, Trzebinia i prowadzenie online.",
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
  description:
    "Mateusz Kajzar - trener personalny Jaworzno, Trzebinia i prowadzenie online.",
  images: ["/images/og/og-image.png"],
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className="antialiased"
    >
      <body className="min-h-full flex flex-col">
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}
