import type { Metadata } from "next";
import "./globals.css";
import { MobileNav } from "../components/MobileNav";

export const metadata: Metadata = {
  title: "ArtisyHub V2",
  description: "Хүссэн уран бүтээлчээ хамгийн хялбараар захиал",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body>{children}<MobileNav /></body>
    </html>
  );
}
