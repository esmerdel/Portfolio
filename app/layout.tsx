import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Carregar a fonte Outfit
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // inclui fininha (300) até bold
});

export const metadata: Metadata = {
  title: "Leandro Esmerdel",
  description: "Portfolio de Leandro",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} relative w-full h-full antialiased bg-transparent`}
      >
        <div
          className="absolute -z-10 inset-0 bg-black"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
        {children}
      </body>
    </html>
  );
}
