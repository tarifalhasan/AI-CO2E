import "./globals.css";

import { Open_Sans as FontSans, Poppins } from "next/font/google";

import { Overlock } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

// import Footer from "@/components/footer";
// import { MainHeader } from "@/components/header";
// import { MobileHeader } from "@/components/mobile-header";
import AboutSit from "@/components/AboutSit";
import Footer from "@/components/Footer";
import { MobileHeader } from "@/components/MobileHeader";
import { MainHeader } from "@/components/ui/Header";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import "./style.css";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});
const fontPoppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});
const fontOverlock = Overlock({
  subsets: ["latin"],
  variable: "--font-overlock",
  weight: ["400", "700", "900"],
});

interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/logo.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontOverlock.variable,
          fontPoppins.variable
        )}
      >
        <NextTopLoader
          color="#124D8C"
          height={3}
          easing="ease"
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />

        <MainHeader />
        <MobileHeader />
        {children}
        <AboutSit />
        <Footer />
      </body>
    </html>
  );
}
