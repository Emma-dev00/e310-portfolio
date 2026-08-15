import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-zinc-900">
          E310
        </Link>

        <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          <Link href="/about" className="transition hover:text-zinc-900">
            About
          </Link>
          <Link href="/services" className="transition hover:text-zinc-900">
            Services
          </Link>
          <Link href="/case-studies" className="transition hover:text-zinc-900">
            Case Studies
          </Link>
          <Link href="/process" className="transition hover:text-zinc-900">
            How We Work
          </Link>
          <Link href="/contact" className="transition hover:text-zinc-900">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}