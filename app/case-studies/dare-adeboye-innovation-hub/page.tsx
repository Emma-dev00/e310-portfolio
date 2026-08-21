import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dare Adeboye Innovation Hub | E310 Case Study",
  description:
    "A workspace rental and online payment platform developed by E310 for Dare Adeboye Innovation Hub.",
};

const challengePoints = [
  "Make available workspace easier to discover.",
  "Simplify the workspace rental process.",
  "Allow users to make payments online.",
  "Reduce dependence on manual rental processes.",
  "Provide a secure digital experience for users.",
];

const journey = [
  ["01", "Explore", "Users can explore the available workspace options."],
  ["02", "Select", "Users select the workspace that meets their requirements."],
  ["03", "Rent", "Users provide the required information and initiate the rental process."],
  ["04", "Pay", "Users complete the payment through the platform."],
  ["05", "Confirm", "The rental/payment process is completed and the user receives the appropriate confirmation."],
];

const features = [
  ["Workspace Discovery", "Users can explore available workspace facilities."],
  ["Workspace Details", "Users can view relevant information about a workspace before renting."],
  ["Workspace Rental", "Users can initiate the rental process digitally."],
  ["Online Payment", "Users can complete payments through the platform."],
  ["Booking/Rental Management", "Rental information can be organized through the system."],
  ["Secure User Experience", "The application is designed with security considerations around user and payment-related information."],
];

const technologies = [
  ["Frontend", "Editable: technology not specified in project files"],
  ["Backend", "Editable: technology not specified in project files"],
  ["Database", "Editable: technology not specified in project files"],
  ["Payment", "Editable: provider not specified in project files"],
  ["Authentication", "Editable: technology not specified in project files"],
  ["Hosting", "Editable: platform not specified in project files"],
];

const visualSections = [
  ["Workspace Discovery", "Add the actual workspace discovery screenshot when available."],
  ["Workspace Details", "Add the actual workspace details screenshot when available."],
  ["Rental/Booking", "Add the actual rental or booking screenshot when available."],
  ["Payment", "Add the actual payment screenshot when available."],
  ["Confirmation", "Add the actual confirmation screenshot when available."],
  ["Dashboard/Admin", "Add the actual dashboard or admin screenshot when available."],
];

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow && <span className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D]">{eyebrow}</span>}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

function AssetNotice({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-56 items-center justify-center rounded-xl border border-dashed border-[#3B4652] bg-[#0D1117] p-6 text-center">
      <div className="max-w-xs space-y-3">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg border border-[#3B4652] text-[#C6FF4D]" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-xs leading-relaxed text-[#9CA3AF]">{description}</p>
      </div>
    </div>
  );
}

export default function DareAdeboyeInnovationHubCaseStudy() {
  return (
    <article className="pb-24">
      <section className="relative overflow-hidden border-b border-[#21262D] bg-[#0D1117]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-2xl -translate-x-1/2 rounded-full bg-[#C6FF4D]/5 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 sm:pb-24 sm:pt-16">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6FF4D] hover:underline">
            <span aria-hidden="true">&larr;</span> Back to Case Studies
          </Link>

          <div className="mt-12 max-w-4xl space-y-6">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">Dare Adeboye Innovation Hub</h1>
            <p className="max-w-3xl text-2xl font-semibold leading-tight text-[#C6FF4D] sm:text-4xl">Workspace Rental &amp; Online Payment Platform</p>
            <p className="max-w-2xl text-base leading-relaxed text-[#E5E7EB]/80 sm:text-lg">E310 developed a secure web application that enables users to explore and rent workspace facilities while completing payments through a centralized digital platform.</p>
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[#21262D] bg-[#21262D] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Client", "Dare Adeboye Innovation Hub"],
              ["Project Type", "Web Application"],
              ["Industry", "Innovation Hub / Workspace"],
              ["Delivered By", "E310 Tech Agency"],
            ].map(([label, value]) => (
              <div key={label} className="bg-[#161B22] p-5">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF]">{label}</dt>
                <dd className="mt-2 text-sm font-semibold leading-snug text-white">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <AssetNotice title="Application screenshot unavailable" description="No Dare Adeboye Innovation Hub screenshots are currently available in the project assets. This area is ready for the actual product visual." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
          <SectionHeading title="Project Overview" />
          <p className="max-w-2xl text-base leading-relaxed text-[#E5E7EB]/85 lg:col-span-6 lg:col-start-7">Dare Adeboye Innovation Hub required a digital solution that could simplify the process of accessing and renting its workspace facilities. E310 developed a web application that brings workspace discovery, rental, and online payment into one digital experience.</p>
        </div>
      </section>

      <section className="border-y border-[#21262D] bg-[#0D1117]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4"><SectionHeading title="The Challenge" /></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {challengePoints.map((point, index) => (
              <div key={point} className="flex gap-4 rounded-xl border border-[#21262D] bg-[#161B22] p-5">
                <span className="font-mono text-xs text-[#C6FF4D]">0{index + 1}</span>
                <p className="text-sm leading-relaxed text-[#E5E7EB]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading title="The Solution" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#E5E7EB]/85">E310 created a centralized workspace rental platform that allows users to move through the rental process digitally—from discovering a suitable workspace to completing their payment.</p>
        <div className="mt-12 grid gap-3 sm:grid-cols-5">
          {["Discover", "Select Workspace", "Rent", "Pay", "Confirmation"].map((step, index) => (
            <div key={step} className="relative flex min-h-28 flex-col justify-between rounded-xl border border-[#C6FF4D]/30 bg-[#161B22] p-5 sm:min-h-40">
              <span className="font-mono text-xs text-[#C6FF4D]">0{index + 1}</span>
              <strong className="text-base text-white">{step}</strong>
              {index < 4 && <span className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 text-xl text-[#C6FF4D] sm:bottom-auto sm:left-auto sm:-right-3.75 sm:top-1/2 sm:translate-x-0 sm:-translate-y-1/2">&rarr;</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#21262D] bg-[#0D1117]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <SectionHeading title="How It Works" />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {journey.map(([number, title, description]) => (
              <div key={number} className="relative border-l border-[#C6FF4D]/40 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5">
                <span className="font-mono text-xs text-[#C6FF4D]">{number}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading title="Key Features" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, description], index) => (
            <div key={title} className="rounded-2xl border border-[#21262D] bg-[#161B22] p-6">
              <span className="font-mono text-xs text-[#C6FF4D]">0{index + 1}</span>
              <h3 className="mt-5 text-base font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#21262D] bg-[#0D1117]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <SectionHeading title="Inside the Platform" />
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            {visualSections.map(([title, description], index) => (
              <div key={title} className={index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"}>
                <AssetNotice title={title} description={description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <SectionHeading title="Technology Behind the Platform" />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#21262D] bg-[#21262D] sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {technologies.map(([label, value]) => (
              <div key={label} className="bg-[#161B22] p-5"><dt className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF]">{label}</dt><dd className="mt-2 text-sm text-white">{value}</dd></div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#21262D] bg-[#0D1117]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4"><SectionHeading title="E310's Contribution" /></div>
          <div className="lg:col-span-8">
            <p className="max-w-2xl text-lg leading-relaxed text-[#E5E7EB]">E310 provided the technical development required to transform the workspace rental concept into a functional digital platform.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Application development", "Interface implementation", "Workspace rental workflow", "Payment integration"].map((item) => <span key={item} className="rounded-full border border-[#21262D] bg-[#161B22] px-3 py-2 text-xs text-[#E5E7EB]">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center"><SectionHeading title="The Result" /><p className="mt-6 text-base leading-relaxed text-[#E5E7EB]/85">The project provides Dare Adeboye Innovation Hub with a centralized digital experience for workspace rental, allowing users to discover available spaces, initiate rentals, and complete payments online.</p></div>
      </section>

      <section className="border-y border-[#21262D] bg-[#0D1117]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28"><SectionHeading title="Project Gallery" /><div className="mt-12 grid gap-4 md:grid-cols-12">{visualSections.map(([title, description], index) => <div key={`gallery-${title}`} className={index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}><AssetNotice title={title} description={description} /></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-28">
        <div className="relative overflow-hidden rounded-3xl border border-[#C6FF4D]/30 bg-[#161B22] p-8 sm:p-14"><div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#C6FF4D]/10 blur-3xl" /><div className="relative max-w-2xl space-y-5"><h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Have a Similar Digital Challenge?</h2><p className="text-sm leading-relaxed text-[#E5E7EB]/80 sm:text-base">E310 builds practical technology solutions that help organizations improve how they work, serve their users, and deliver their services.</p><div className="flex flex-wrap gap-3 pt-3"><Link href="/#projects" className="inline-flex items-center justify-center rounded-full bg-[#C6FF4D] px-5 py-3 text-sm font-semibold text-[#0D1117] transition-colors hover:bg-[#b5f336]">Explore More Case Studies <span className="ml-2" aria-hidden="true">&rarr;</span></Link><Link href="/#contact" className="inline-flex items-center justify-center rounded-full border border-[#3B4652] bg-[#0D1117] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#C6FF4D] hover:text-[#C6FF4D]">Work With E310</Link></div></div></div>
      </section>
    </article>
  );
}
