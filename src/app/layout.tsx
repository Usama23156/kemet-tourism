import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../_component/navbar/page";
import Footer from "../_component/footer/page";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kemet Escapes | Luxury Egypt Tours & Tailor-Made Travel",
  description:
    "Discover authentic Egypt with Kemet Escapes — luxury Nile journeys, historical escapes, and tailor-made travel experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased overflow-x-hidden text-foreground`}
      >
        <Suspense>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
