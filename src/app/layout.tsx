import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import PageTransition from "@/components/providers/PageTransition";
import CustomCursor from "@/components/ui/CustomCursor";
import { AnimeStickers } from "@/components/ui/AnimeStickers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Mugunthan Packers & Movers | Anime Logistics Reimagined",
  description: "Experience the fastest, most playful relocation service in India. Anime-inspired, tech-driven, and purely professional packers and movers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-body bg-background text-primary min-h-screen antialiased selection:bg-accent selection:text-white relative overflow-x-hidden">
        <div className="fixed inset-0 bg-grainy pointer-events-none z-[100]" />

        {/* Brand Background Gradients */}
        <div className="fixed inset-0 z-[-2] bg-white">
          <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px]" />
        </div>

        <CustomCursor />
        <AnimeStickers />

        <SmoothScrollProvider>
          <Header />
          <PageTransition>
            <main className="relative z-10">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
