import React from "react";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import CaseStudyCard from "../components/CaseStudyCard";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/ContactForm";

// Placeholder Services (clearly marked until E310 provides official finalized service list)
const PLACEHOLDER_SERVICES = [
  {
    title: "Custom Web & Application Development",
    description:
      "Full-stack engineering for portals, dashboards, and management platforms tailored to organizational workflows.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "System Architecture & Cloud Infrastructure",
    description:
      "Scalable database design, API integrations, and cloud hosting architecture built for high availability and security.",
    tags: ["PostgreSQL", "Cloud Edge", "REST / GraphQL"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "UI/UX & Product Design",
    description:
      "User research, wireframing, high-fidelity interface design, and design systems focused on clarity and ease of use.",
    tags: ["Design Systems", "Figma", "Accessibility"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Ongoing Technical Support & SLA",
    description:
      "Reliable troubleshooting, maintenance, software updates, and performance monitoring to keep systems running smoothly.",
    tags: ["Uptime Monitoring", "Bug Resolution", "Maintenance"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation & Data Pipelines",
    description:
      "Automating repetitive administrative processes, data syncing across services, and business intelligence reporting.",
    tags: ["Automations", "Data Sync", "Webhooks"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Technical Advisory & Roadmap Strategy",
    description:
      "Guiding leadership teams on technology choices, feasibility assessments, security standards, and implementation plans.",
    tags: ["Tech Advisory", "Feasibility", "Roadmapping"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

// Featured Projects (verified project portfolio)
const PLACEHOLDER_PROJECTS = [
  {
    title: "Foundation Grant & Funding Portal",
    excerpt:
      "Built a secure, streamlined digital portal to manage grant applications, review workflows, and milestone disbursements.",
    category: "Full-Stack Application",
    slug: "funding-portal",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Incubator Cohort Management System",
    excerpt:
      "Centralized tracker for cohort startups, mentorship schedules, milestone deliverables, and progress reporting.",
    category: "Operations Platform",
    slug: "incubator-hub",
    technologies: ["React", "Node.js", "Cloud Edge", "PostgreSQL"],
  },
  {
    title: "Enterprise Resource & Knowledge Hub",
    excerpt:
      "A fast, searchable documentation and digital asset repository for distributed organizational teams and volunteers.",
    category: "Knowledge Platform",
    slug: "knowledge-hub",
    technologies: ["Next.js", "Markdown Engine", "Algolia", "Tailwind CSS"],
  },
  {
    title: "Digital Outreach & Community Portal",
    excerpt:
      "High-engagement web platform enabling event registration, donation processing, and community communication.",
    category: "Engagement Platform",
    slug: "community-portal",
    technologies: ["Next.js", "Stripe API", "TypeScript", "Tailwind CSS"],
  },
];

// Placeholder Testimonials
const PLACEHOLDER_TESTIMONIALS = [
  {
    quote:
      "E310 delivered our portal ahead of schedule. Their technical rigor, transparent communication, and attention to detail made a massive difference.",
    author: "Program Director",
    role: "Innovation Incubator Hub",
    organization: "Rechall Hub",
  },
  {
    quote:
      "Working with E310 felt like having an elite in-house engineering team. They resolved complex system bottlenecks and gave us a platform we can truly scale.",
    author: "Operations Lead",
    role: "Venture & Community Initiatives",
    organization: "Partner Organization",
  },
  {
    quote:
      "From user interface design to reliable ongoing technical support, E310 has been an indispensable technology partner for our digital initiatives.",
    author: "Technology Coordinator",
    role: "Digital Transformation",
    organization: "Community Foundation",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden">
        {/* Subtle Background Glow Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-150 bg-[#C6FF4D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Hero Left: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Lime Accent Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C6FF4D]/30 bg-[#C6FF4D]/10 px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-widest text-[#C6FF4D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF4D] animate-pulse" />
                TECHNOLOGY • INNOVATION • SOLUTIONS
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Building Digital Solutions That Move Organizations{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-[#E5E7EB] to-[#C6FF4D]">
                  Forward.
                </span>
              </h1>

              {/* Approved Subtext */}
              <p className="max-w-xl text-base sm:text-lg text-[#E5E7EB]/80 leading-relaxed">
                E310 provides technical support and develops dependable digital solutions for organizations under the <strong className="text-white">Rechall Hub</strong> and partner initiatives—turning complex challenges into seamless, scalable software.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#C6FF4D] px-6 py-3 text-sm font-semibold text-[#0D1117] transition-all hover:bg-[#b5f336] hover:shadow-[0_0_24px_rgba(198,255,77,0.35)] active:scale-[0.98]"
                >
                  Explore Our Work
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#21262D] bg-[#161B22] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#C6FF4D] hover:text-[#C6FF4D] active:scale-[0.98]"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Stats/Badges Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-[#21262D] pt-6 text-left">
                <div>
                  <span className="block font-mono text-xl font-bold text-white">100%</span>
                  <span className="block text-xs text-[#9CA3AF]">Custom Engineering</span>
                </div>
                <div>
                  <span className="block font-mono text-xl font-bold text-[#C6FF4D]">99.9%</span>
                  <span className="block text-xs text-[#9CA3AF]">Uptime Standard</span>
                </div>
                <div>
                  <span className="block font-mono text-xl font-bold text-white">Full-Stack</span>
                  <span className="block text-xs text-[#9CA3AF]">Design to Support</span>
                </div>
              </div>
            </div>

            {/* Hero Right: Sophisticated Dark Technology UI Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-[#21262D] bg-[#161B22] p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-[#C6FF4D]/40">
                {/* Header controls */}
                <div className="flex items-center justify-between pb-4 border-b border-[#21262D]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#21262D]" />
                    <span className="h-3 w-3 rounded-full bg-[#21262D]" />
                    <span className="h-3 w-3 rounded-full bg-[#21262D]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#9CA3AF]">E310 CORE SUITE</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF4D] animate-ping" />
                  </div>
                </div>

                {/* Dashboard Elements */}
                <div className="mt-4 space-y-4 font-mono text-xs">
                  {/* Status Banner */}
                  <div className="rounded-xl border border-[#21262D] bg-[#0D1117] p-3.5 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[10px] uppercase text-[#9CA3AF]">Production Cluster</span>
                      <p className="font-semibold text-white">Rechall Hub</p>
                    </div>
                    <span className="rounded border border-[#C6FF4D]/30 bg-[#C6FF4D]/10 px-2 py-0.5 text-[10px] font-bold text-[#C6FF4D]">
                      ONLINE
                    </span>
                  </div>

                  {/* Metrics Graph Preview */}
                  <div className="rounded-xl border border-[#21262D] bg-[#0D1117] p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#9CA3AF]">System Throughput</span>
                      <span className="text-[#C6FF4D] font-bold">4.8k req/sec</span>
                    </div>
                    {/* Visual Bar Graph */}
                    <div className="flex items-end gap-1.5 h-12 pt-2">
                      <div className="flex-1 rounded-t bg-[#21262D] h-5" />
                      <div className="flex-1 rounded-t bg-[#21262D] h-7" />
                      <div className="flex-1 rounded-t bg-[#21262D] h-6" />
                      <div className="flex-1 rounded-t bg-[#C6FF4D]/40 h-9" />
                      <div className="flex-1 rounded-t bg-[#C6FF4D] h-12" />
                      <div className="flex-1 rounded-t bg-[#C6FF4D]/80 h-10" />
                      <div className="flex-1 rounded-t bg-[#C6FF4D] h-11" />
                    </div>
                  </div>

                  {/* Active Services List */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="rounded-lg border border-[#21262D] bg-[#0D1117] p-2.5">
                      <span className="text-[9px] text-[#9CA3AF] uppercase block">API Response</span>
                      <span className="text-sm font-bold text-white">&lt; 38ms</span>
                    </div>
                    <div className="rounded-lg border border-[#21262D] bg-[#0D1117] p-2.5">
                      <span className="text-[9px] text-[#9CA3AF] uppercase block">Security Grade</span>
                      <span className="text-sm font-bold text-[#C6FF4D]">A+ SSL/TLS</span>
                    </div>
                  </div>

                  {/* Terminal Snippet */}
                  <div className="rounded-lg border border-[#21262D] bg-[#0D1117] p-3 text-[11px] text-[#9CA3AF]">
                    <span className="text-[#C6FF4D]">$</span> e310 deploy --service=production<br />
                    <span className="text-white">✓ Architecture verified: 0 vulnerabilities</span><br />
                    <span className="text-[#C6FF4D]">✓ Live at https://e310.agency</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT / AGENCY INTRODUCTION */}
      {/* ========================================================================= */}
      <section id="about" className="scroll-mt-24 border-y border-[#21262D] bg-[#0D1117] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            
            {/* Left Column: Heading & Mission */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF4D] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF4D]" />
                About E310
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Technology Built Around Real Problems.
              </h2>
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6FF4D] hover:underline"
                >
                  <span>Learn More About E310</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Narrative & Pillars */}
            <div className="lg:col-span-7 space-y-6 text-[#E5E7EB]/90 text-sm sm:text-base leading-relaxed">
              <p>
                E310 is a technology agency dedicated to building high-quality digital solutions and providing continuous technical support for organizations, programs, and social impact initiatives operating under the <strong className="text-white">Rechall Hub</strong>.
              </p>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">
                We combine modern product design, robust full-stack software development, and proactive system maintenance. Rather than applying generic templates, we engineer bespoke platforms tailored to the operational realities of each organization we support.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid gap-4 sm:grid-cols-3 pt-2">
                <div className="rounded-xl border border-[#21262D] bg-[#161B22] p-4 space-y-1.5">
                  <span className="font-mono text-xs text-[#C6FF4D] font-bold">01</span>
                  <h3 className="text-xs font-bold text-white uppercase">Purpose-Driven</h3>
                  <p className="text-xs text-[#9CA3AF]">Aligned directly with mission-critical social impact goals.</p>
                </div>
                <div className="rounded-xl border border-[#21262D] bg-[#161B22] p-4 space-y-1.5">
                  <span className="font-mono text-xs text-[#C6FF4D] font-bold">02</span>
                  <h3 className="text-xs font-bold text-white uppercase">Modern Architecture</h3>
                  <p className="text-xs text-[#9CA3AF]">Built on scalable, type-safe, maintainable technologies.</p>
                </div>
                <div className="rounded-xl border border-[#21262D] bg-[#161B22] p-4 space-y-1.5">
                  <span className="font-mono text-xs text-[#C6FF4D] font-bold">03</span>
                  <h3 className="text-xs font-bold text-white uppercase">Dedicated Support</h3>
                  <p className="text-xs text-[#9CA3AF]">Proactive maintenance and reliable SLAs after launch.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section id="services" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#21262D] pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF4D] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF4D]" />
                Capabilities &amp; Services
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                What We Do
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF]">
                Technical solutions designed to help organizations work better.
              </p>
            </div>
            <span className="font-mono text-xs text-[#9CA3AF] self-start sm:self-end">
              [Placeholder Catalog • Subject to Final Scope]
            </span>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDER_SERVICES.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
                icon={s.icon}
                tags={s.tags}
                isPlaceholder={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FEATURED PROJECTS / SELECTED WORK */}
      {/* ========================================================================= */}
      <section id="projects" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#21262D] pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF4D] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF4D]" />
                Case Studies &amp; Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Selected Work
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF]">
                Explore some of the digital solutions developed and supported by E310.
              </p>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {PLACEHOLDER_PROJECTS.map((p) => (
              <CaseStudyCard
                key={p.title}
                title={p.title}
                excerpt={p.excerpt}
                category={p.category}
                slug={p.slug}
                technologies={p.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGY & ARCHITECTURAL STANDARDS */}
      {/* ========================================================================= */}
      <section className="border-y border-[#21262D] bg-[#0D1117] py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D]">
              Engineering Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Engineered for Scale &amp; Reliability
            </h2>
            <p className="text-sm text-[#9CA3AF]">
              We adhere to strict engineering principles to deliver software that is fast, accessible, and easily maintainable.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Frontend Engineering",
                tech: "Next.js • React 19 • TypeScript",
                desc: "Server-side rendering, instant page transitions, and strict zero-layout-shift performance.",
              },
              {
                title: "UI & Accessibility",
                tech: "Tailwind CSS • WCAG 2.1 AA",
                desc: "High-contrast geometric design systems with full keyboard navigation and screen reader support.",
              },
              {
                title: "Backend & Data",
                tech: "Node.js • PostgreSQL • Redis",
                desc: "Type-safe database schemas, robust relational modeling, and secure authenticated endpoints.",
              },
              {
                title: "Cloud & Reliability",
                tech: "Edge CDN • Automated CI/CD",
                desc: "Continuous integration, automated Lighthouse audits, and sub-50ms global content delivery.",
              },
            ].map((col, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#21262D] bg-[#161B22] p-6 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#C6FF4D]">0{idx + 1}</span>
                  <h3 className="text-base font-bold text-white">{col.title}</h3>
                  <p className="font-mono text-xs text-[#C6FF4D]/90">{col.tech}</p>
                </div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed border-t border-[#21262D] pt-3">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TESTIMONIALS / COLLABORATOR VOICES */}
      {/* ========================================================================= */}
      <section className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#21262D] pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#C6FF4D] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C6FF4D]" />
                Partnership Voices
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Voices from the Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF]">
                Feedback from program leads and organization stakeholders.
              </p>
            </div>
            <span className="font-mono text-xs text-[#9CA3AF] self-start sm:self-end">
              [Sample Stakeholder Voices]
            </span>
          </div>

          {/* Testimonial Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {PLACEHOLDER_TESTIMONIALS.map((t, idx) => (
              <Testimonial
                key={idx}
                quote={t.quote}
                author={t.author}
                role={t.role}
                organization={t.organization}
                isPlaceholder={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CONTACT & INQUIRY (LET'S WORK TOGETHER) */}
      {/* ========================================================================= */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-[#21262D] bg-linear-to-b from-[#161B22] to-[#0D1117] p-8 sm:p-14 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#C6FF4D]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid gap-12 lg:grid-cols-12 relative z-10">
              
              {/* Left Column: Contact Copy */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C6FF4D]/30 bg-[#C6FF4D]/10 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-widest text-[#C6FF4D]">
                  START A CONVERSATION
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Ready to Build Something Meaningful?
                </h2>
                <p className="text-sm text-[#E5E7EB]/80 leading-relaxed">
                  Whether you need custom software, ongoing technical support, or system modernization for your organization, E310 is ready to partner with you.
                </p>

                <div className="space-y-3 pt-2 text-xs text-[#9CA3AF]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0D1117] text-[#C6FF4D] border border-[#21262D]">
                      ✓
                    </span>
                    <span>Direct technical consultation with senior engineers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0D1117] text-[#C6FF4D] border border-[#21262D]">
                      ✓
                    </span>
                    <span>Tailored scope, timeline, and SLA estimation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0D1117] text-[#C6FF4D] border border-[#21262D]">
                      ✓
                    </span>
                    <span>Aligned with Rechall Hub standards</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Structured Inquiry Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
