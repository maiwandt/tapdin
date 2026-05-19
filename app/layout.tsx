import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TapdIn — Music Industry Connections",
  description:
    "Connect with top music industry professionals for 1-on-1 feedback sessions. Get advice from the people who can actually move the needle.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f0ede8]">
        {children}
      </body>
    </html>
  );
}
