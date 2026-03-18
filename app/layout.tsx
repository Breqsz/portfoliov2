import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LocaleProvider } from "@/lib/i18n/context";
import { CursorPreferenceProvider } from "@/lib/CursorPreferenceContext";
import { defaultMetadata } from "@/lib/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={cn("dark font-sans", inter.variable)}>
      <body className="bg-[#0a0a0a] text-neutral-100 antialiased">
        <LocaleProvider>
        <CursorPreferenceProvider>
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-500 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:[clip:auto]"
        >
          Skip to main content
        </a>
        <InteractiveBackground />
        <CustomCursor />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ScrollProgress />
        </CursorPreferenceProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
