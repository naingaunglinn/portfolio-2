import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({ 
  variable: "--font-jost", 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "naingaunglinn",
  description: "Developer Out Of The Box!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
