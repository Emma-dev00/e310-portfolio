import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#21262D] bg-[#0D1117] text-[#9CA3AF]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#21262D] bg-[#161B22] text-[#C6FF4D]">
                <svg
                  className="h-3.5 w-3.5 fill-current text-[#C6FF4D]"
                  viewBox="0 0 15 18"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect width="15" height="3.4" rx="0.8" />
                  <rect y="7.3" width="10" height="3.4" rx="0.8" />
                  <rect y="14.6" width="15" height="3.4" rx="0.8" />
                </svg>
              </div>
              <span className="text-white">
                E310<span className="text-[#C6FF4D]">.</span>
              </span>
            </Link>
            <p className="max-w-sm text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Providing technical support and engineering digital solutions for organizations under the Rechall Hub and partner ecosystems.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#21262D] bg-[#161B22] px-3 py-1 text-[11px] font-mono text-[#C6FF4D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF4D] animate-pulse" />
                Systems Operational • 2026
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/#about" className="hover:text-[#C6FF4D] transition-colors">
                  About E310
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#C6FF4D] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[#C6FF4D] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#C6FF4D] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <span className="text-[#E5E7EB]">Custom Web &amp; Apps</span>
              </li>
              <li>
                <span className="text-[#E5E7EB]">System Architecture</span>
              </li>
              <li>
                <span className="text-[#E5E7EB]">UI/UX Product Design</span>
              </li>
              <li>
                <span className="text-[#E5E7EB]">Technical Support &amp; SLA</span>
              </li>
              <li>
                <span className="text-[#E5E7EB]">Automation Pipelines</span>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
              Initiatives
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="text-xs text-[#9CA3AF]">
                Rechall Hub
              </li>
              <li className="text-xs text-[#9CA3AF]">
                Innovation Incubator Hub
              </li>
              <li className="text-xs text-[#9CA3AF]">
                Social Impact Tech
              </li>
              <li className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C6FF4D] hover:underline"
                >
                  Schedule a Consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Divider */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#21262D] pt-8 text-xs text-[#9CA3AF]">
          <div>
            © 2026 E310 Tech Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}