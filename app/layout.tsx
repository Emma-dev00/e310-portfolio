import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E310 Tech Agency",
  description: "Technology solutions and support for the Innovation Incubator Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#FBFAF6] text-[#0F1B3D]">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
