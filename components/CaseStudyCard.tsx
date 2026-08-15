export default function CaseStudyCard({
  title,
  excerpt,
}: {
  title: string;
  excerpt: string;
}) {
  return (
    <article className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-pink-50 text-pink-600">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h4 className="text-md font-semibold text-[#0F1B3D]">{title}</h4>
      <p className="mt-2 text-sm text-zinc-600">{excerpt}</p>
    </article>
  );
}
