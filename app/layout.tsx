import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootClient } from "./_components/layout/rootClient/rootClient";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Store",
  description: "Your premium shopping destination",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
