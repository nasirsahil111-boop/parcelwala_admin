import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Website fonts: Plus Jakarta Sans body, Space Grotesk headings.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Parcelwalah Admin",
  description: "Parcelwalah delivery admin panel",
};

export const viewport: Viewport = {
  themeColor: "#ff6a1a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable} h-full`}>
      <body className="h-full bg-slate-50 font-sans antialiased">{children}</body>
    </html>
  );
}
