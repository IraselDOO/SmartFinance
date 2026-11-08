import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./sections.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartfinance.me"),
  title: "Smart Finance Doo | Računovodstvene usluge u Ulcinju - Бухгалтерия в Черногории",
  description:
    "Профессиональные бухгалтерские услуги, налоговый консалтинг и регистрация бизнеса в Ульцине и по всей Черногории. Računovodstvo, porezi i osnivanje firmi u Ulcinju. Smart Finance Doo.",
  keywords: [
    "Smart Finance Doo",
    "racunovodstvo Ulcinj",
    "knjigovodstvo Ulcinj",
    "sherbime kontabiliteti Ulqin",
    "accounting Montenegro Ulcinj",
    "бухгалтер в Ульцине",
    "бухгалтерские услуги Черногория",
    "открытие DOO Черногория",
  ],
  icons: {
    icon: "/images/logo-icon.png",
    apple: "/images/logo-icon.png",
  },
  openGraph: {
    title: "Smart Finance Doo | Računovodstvo • Kontabilitet • Accounting • Бухгалтерия",
    description:
      "7+ godina iskustva, 7 sertifikovanih računovođa. Kompletno računovodstvo za vaš biznis u Crnoj Gori.",
    images: ["/images/office-hero-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-gray-900 bg-white selection:bg-[#F9A307] selection:text-[#07111a]">
        {children}
      </body>
    </html>
  );
}
