export default function Testimonial({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <p className="text-sm text-zinc-700">“{quote}”</p>
      <p className="mt-3 text-xs font-medium text-zinc-500">— {author}</p>
    </div>
  );
}
