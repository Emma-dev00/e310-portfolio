import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import Testimonial from "@/components/Testimonial";

const SERVICES = [
  {
    title: "Product Strategy",
    description:
      "Roadmaps, research, and prioritization to turn a hypothesis into a plan.",
  },
  {
    title: "Product Design",
    description: "UX, UI, and interaction design that helps products land.",
  },
  {
    title: "Technical Delivery",
    description: "Engineering, infrastructure, and integrations for reliable shipping.",
  },
];

const CASE_STUDIES = [
  { title: "Funding Portal", excerpt: "Built a streamlined portal to manage applications and reporting." },
  { title: "Pilot Marketplace", excerpt: "Launched a pilot marketplace for university spinouts." },
  { title: "Automation Suite", excerpt: "Automated onboarding workflows and reporting pipelines." },
];

const TESTIMONIALS = [
  { quote: "They helped us move from idea to working product in weeks.", author: "Dana R., Founder" },
  { quote: "Clear process and consistent delivery throughout the engagement.", author: "Sam K., Program Lead" },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <header className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Innovation Incubator Hub
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl">
            Technology support that turns ideas into momentum.
          </h1>

          <p className="max-w-xl text-lg text-zinc-600">
            We help founders, teams, and incubator programs ship digital products,
            sharpen strategy, and build sustainable systems that scale.
          </p>

          <div className="flex gap-4">
            <Link href="/contact" className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white">
              Book a Discovery Call
            </Link>
            <Link href="/services" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div className="rounded-2xl bg-zinc-900 p-4 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Launch sprint</p>
              <p className="mt-3 text-3xl font-semibold">4–8 weeks</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-zinc-100 p-4">
                <p className="text-sm text-zinc-500">Product Strategy</p>
                <p className="mt-2 text-xl font-semibold">Roadmaps</p>
              </div>
              <div className="rounded-2xl bg-zinc-100 p-4">
                <p className="text-sm text-zinc-500">Build Support</p>
                <p className="mt-2 text-xl font-semibold">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900">Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900">Case Studies</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <CaseStudyCard key={c.title} title={c.title} excerpt={c.excerpt} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-900">Voices</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Testimonial key={i} quote={t.quote} author={t.author} />
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-zinc-200 bg-white p-8 text-center">
        <h3 className="text-xl font-semibold text-zinc-900">Ready to get started?</h3>
        <p className="mt-2 text-zinc-600">Schedule a short call so we can understand your priorities.</p>
        <div className="mt-6 flex justify-center">
          <Link href="/contact" className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
