import type { Metadata } from "next";
import { Roboto, Bebas_Neue, Playfair } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/helper";
import { Locale, i18n } from "../../../i18n.config";
import { Nav } from "@/app/components/Nav";
import Script from "next/script";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});
const playfair = Playfair({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "ClickWise Solutions",
  description: "Shaping the digital landscape with innovative trends",
  icons: {
    icon: "/favicon.png",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  return (
    <html lang={params.lang}>
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/e4d5b58a24aff5ebad998e34/script.js"
      ></Script>
      <body
        className={cn(
          roboto.className,
          bebas.variable,
          playfair.variable,
          "bg-zinc-900 text-zinc-50",
        )}
      >
        <Nav lang={params.lang} />
        <main className="max-w-7xl mx-auto px-4 md:px-8 md:items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
