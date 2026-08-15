"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0F1B3D]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="inline-flex items-center text-2xl font-bold tracking-tight text-white" aria-label="E310">
          <svg
            className="mr-0.5 h-[18px] w-[15px] shrink-0 fill-current text-white"
            viewBox="0 0 15 18"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect width="15" height="3.6" rx="0.5" />
            <rect y="7.2" width="15" height="3.6" rx="0.5" />
            <rect y="14.4" width="15" height="3.6" rx="0.5" />
          </svg>
          <span>310</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/about" className="text-white hover:text-[#D4E157]">About</Link>
          <Link href="/services" className="text-white hover:text-[#D4E157]">Services</Link>
          <Link href="/case-studies" className="text-white hover:text-[#D4E157]">Case Studies</Link>
          <Link href="/process" className="text-white hover:text-[#D4E157]">How We Work</Link>
          <Link href="/contact" className="text-white hover:text-[#D4E157]">Contact</Link>
        </div>

        <div className="ml-4 flex items-center gap-3">
          {/* CTAs removed to simplify header */}

          <button
            onClick={() => setOpen(!open)}
            className="ml-2 inline-flex items-center justify-center rounded-md bg-white/0 p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="absolute inset-x-0 top-16 z-50 rounded-b-xl bg-white/95 pb-6 shadow-lg backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-6 pt-4">
              <div className="flex flex-col gap-4">
                <Link href="/about" className="py-2 text-[#0F1B3D]">About</Link>
                <Link href="/services" className="py-2 text-[#0F1B3D]">Services</Link>
                <Link href="/case-studies" className="py-2 text-[#0F1B3D]">Case Studies</Link>
                <Link href="/process" className="py-2 text-[#0F1B3D]">How We Work</Link>
                <Link href="/contact" className="py-2 text-[#0F1B3D]">Contact</Link>
                {/* CTAs removed from mobile menu */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}