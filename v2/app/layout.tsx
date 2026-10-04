import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArtisyHub V2",
  description: "Хүссэн уран бүтээлчээ хамгийн хялбараар захиал",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
