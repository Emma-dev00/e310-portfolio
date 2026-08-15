export default function Testimonial({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-600">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M7 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-sm text-zinc-700">“{quote}”</p>
      <p className="mt-3 text-xs font-medium text-zinc-500">— {author}</p>
    </div>
  );
}
