import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/layout/AuroraBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Crafted Digital Experiences",
  description: "Premium portfolio showcasing games and web interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased selection:bg-white/20 selection:text-white">
        <Navbar />
        <AuroraBackground>
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </AuroraBackground>
      </body>
    </html>
  );
}
