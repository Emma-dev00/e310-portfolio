"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-[#21262D] bg-[#0D1117]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-b border-[#21262D]/60 bg-[#0D1117]"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left: Brand Wordmark */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
          aria-label="E310 Tech Agency"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#21262D] bg-[#161B22] text-[#C6FF4D] transition-colors group-hover:border-[#C6FF4D]/40">
            <svg
              className="h-4 w-4 fill-current text-[#C6FF4D]"
              viewBox="0 0 15 18"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect width="15" height="3.4" rx="0.8" />
              <rect y="7.3" width="10" height="3.4" rx="0.8" />
              <rect y="14.6" width="15" height="3.4" rx="0.8" />
            </svg>
          </div>
          <span className="font-extrabold tracking-tight text-white">
            E310<span className="text-[#C6FF4D]">.</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[#E5E7EB] transition-colors hover:text-[#C6FF4D]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Primary CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#C6FF4D] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0D1117] transition-all hover:bg-[#b5f336] hover:shadow-[0_0_20px_rgba(198,255,77,0.3)] active:scale-[0.98]"
          >
            Let&apos;s Work Together
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#21262D] bg-[#161B22] text-[#E5E7EB] hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="border-b border-[#21262D] bg-[#161B22] px-6 py-6 md:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 text-[#E5E7EB] transition-colors hover:text-[#C6FF4D]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#21262D]">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-[#C6FF4D] py-3 text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#b5f336]"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}