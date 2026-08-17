import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "E310 Tech Agency • Digital Solutions & Technology Support",
  description:
    "E310 provides technical support and develops high-impact digital solutions for organizations under the Rechall Hub and partner ecosystems.",
  keywords: [
    "E310",
    "Tech Agency",
    "Digital Solutions",
    "Rechall Hub",
    "Product Design",
    "Software Engineering",
    "Technical Support",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full bg-[#0D1117] text-[#FFFFFF] font-sans flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
