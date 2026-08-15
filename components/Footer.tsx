export default function Footer() {
  return (
    <footer className="w-full bg-[#0F1B3D] text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="mb-3 text-sm font-semibold">Product</h4>
            <ul className="text-sm text-[#DDE6F6]">
              <li className="py-1">Services</li>
              <li className="py-1">Case Studies</li>
              <li className="py-1">Roadmap</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="text-sm text-[#DDE6F6]">
              <li className="py-1">About</li>
              <li className="py-1">Careers</li>
              <li className="py-1">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="text-sm text-[#DDE6F6]">
              <li className="py-1">Docs</li>
              <li className="py-1">Blog</li>
              <li className="py-1">Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/80">
          © 2026 E310 Tech Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}