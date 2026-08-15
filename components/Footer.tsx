export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} E310 Tech Agency</p>
        <p>Innovation Incubator Hub</p>
      </div>
    </footer>
  );
}