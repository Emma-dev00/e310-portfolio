import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import CaseStudyCard from "../components/CaseStudyCard";
import Testimonial from "../components/Testimonial";
import { getCaseStudies } from "../lib/caseStudies";

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
    title: "Technical Support",
    description:
      "Ongoing technical support, troubleshooting, and maintenance to keep systems running reliably.",
  },
];

const CASE_STUDIES = [
  { title: "Funding Portal", excerpt: "Built a streamlined portal to manage applications and reporting." }
];

const TESTIMONIALS = [
  { quote: "They helped us move from idea to working product in weeks.", author: "Dana R., Founder" },
  { quote: "Clear process and consistent delivery throughout the engagement.", author: "Sam K., Program Lead" },
];

export default async function Home() {
  const dynamicCaseStudies = await getCaseStudies();

  const CASES = dynamicCaseStudies.length ? dynamicCaseStudies : CASE_STUDIES;

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      {/* Hero (dark navy) */}
      <section className="bg-gradient-to-b from-[#0F1B3D] to-[#FBFAF6] text-white">
        <div className="mx-auto max-w-6xl py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 px-4">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D4E157]">E310 TECH AGENCY</p>

              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                Technology support that turns ideas into momentum.
              </h1>

              <p className="max-w-xl text-lg text-white/80">
                We help founders, teams, and incubator programs ship digital products,
                sharpen strategy, and build sustainable systems that scale.
              </p>

              <div className="flex gap-4">
                <Link href="/contact" className="rounded-full bg-[#D4E157] px-5 py-3 text-sm font-semibold text-[#0F1B3D]">
                  Get started →
                </Link>
              </div>
            </div>

            <div className="px-4" />
          </div>
        </div>
      </section>

      {/* Services (light) */}
      <section className="mt-16 bg-[#FBFAF6] py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-semibold text-[#0F1B3D]">Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects (dark) */}
      <section className="mt-16 bg-[#0F1B3D] py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {CASES.map((c) => (
              <CaseStudyCard key={c.title} title={c.title} excerpt={c.excerpt} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (light) */}
      <section className="mt-16 bg-[#FBFAF6] py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-semibold text-[#0F1B3D]">Voices</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Testimonial key={i} quote={t.quote} author={t.author} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA (dark) */}

      <section className="mt-16 bg-[#0F1B3D] py-16 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="text-xl font-semibold">Ready to get started?</h3>
          <p className="mt-2 text-white/80">Schedule a short call so we can understand your priorities.</p>
          <div className="mt-6 flex justify-center">
            <Link href="/contact" className="rounded-full bg-[#D4E157] px-6 py-3 text-sm font-semibold text-[#0F1B3D]">
              Get started →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
