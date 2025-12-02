import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import Navbar from "./_components/navbar";
import FooterSection from "./_components/footer";
const figtree = Figtree({
  variable: "--font-figtree",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SSA at UCSD",
  description:
    "The official site for the Symphonic Student Association at the University of California, San Diego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${figtree.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col pt-24">{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
