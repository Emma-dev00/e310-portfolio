export default function CaseStudyCard({
  title,
  excerpt,
}: {
  title: string;
  excerpt: string;
}) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h4 className="text-md font-semibold text-zinc-900">{title}</h4>
      <p className="mt-2 text-sm text-zinc-600">{excerpt}</p>
    </article>
  );
}
