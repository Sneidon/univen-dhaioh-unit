import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DHAIOH Unit | Transforming Worker Health Through Digital Intelligence",
  description:
    "An SAMRC Extramural Research Unit hosted by the University of Venda in strategic partnership with Mintek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${dmSans.variable}`}>
      <body className={`${dmSans.className} min-h-full flex flex-col antialiased`}>
        <div className="sticky top-0 z-50">
          <TopBar />
          <Navbar />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
