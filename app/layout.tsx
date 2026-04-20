import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "life, but make it fun ☺",
  description: "Your daily life dashboard — scientifically unverified, emotionally accurate.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: nunito.style.fontFamily }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
