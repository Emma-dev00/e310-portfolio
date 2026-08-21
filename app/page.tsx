import React from "react";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import CaseStudyCard from "../components/CaseStudyCard";
import Testimonial from "../components/Testimonial";
import ContactForm from "../components/ContactForm";
import CoreSuiteDiagram from "../components/CoreSuiteDiagram";

const SERVICES = [
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
    tags: ["PostgreSQL", "Cloud Edge", "REST API"],
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
];

// Featured Projects
const PROJECTS = [
  {
    title: "Foundation Grant & Funding Portal",
    excerpt:
      "Built a secure, streamlined digital portal to manage grant applications, review workflows, and milestone disbursements.",
    category: "Full-Stack Application",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    isEmpty: true,
  },
  {
    title: "Incubator Cohort Management System",
    excerpt:
      "Centralized tracker for cohort startups, mentorship schedules, milestone deliverables, and progress reporting.",
    category: "Operations Platform",
    technologies: ["React", "Node.js", "Cloud Edge", "PostgreSQL"],
    isEmpty: true,
  },
  {
    title: "Enterprise Resource & Knowledge Hub",
    excerpt:
      "A fast, searchable documentation and digital asset repository for distributed organizational teams and volunteers.",
    category: "Knowledge Platform",
    technologies: ["Next.js", "Markdown Engine", "Algolia", "Tailwind CSS"],
    isEmpty: true,
  },
  {
    title: "Dare Adeboye Innovation Hub",
    excerpt:
      "A secure Web Platform that enables users to discover, rent, and pay for office workspace online.",
    category: "Workspace Rental and Payment Platform",
    technologies: ["Next.js", "TypeScript", "Online Payments", "PostgreSQL"],
    href: "/case-studies/dare-adeboye-innovation-hub",
  },
];

const VOICE_CARDS = ["voice-1", "voice-2", "voice-3"];

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section id="core-suite" className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden">
        {/* Subtle Background Glow Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-150 bg-[#C6FF4D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Hero Left: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6">
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

              <div className="border-t border-[#21262D] pt-6 text-left">
                <h2 className="text-lg font-bold leading-snug text-white sm:text-xl">
                  Organizations within the RECHALL HUB which E310 Tech Agency services and attends to their Technical Issues
                </h2>
              </div>
            </div>

            {/* Hero Right: E310 technology ecosystem */}
            <div className="lg:col-span-5">
              <CoreSuiteDiagram />
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
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
                icon={s.icon}
                tags={s.tags}
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
            {PROJECTS.map((p) => (
              <CaseStudyCard
                key={p.title}
                title={p.title}
                excerpt={p.excerpt}
                category={p.category}
                technologies={p.technologies}
                isEmpty={p.isEmpty}
                href={p.href}
              />
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
          </div>

          {/* Testimonial Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {VOICE_CARDS.map((voice) => (
              <Testimonial key={voice} />
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
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Ready to Build Something Meaningful?
                </h2>
                <p className="text-sm text-[#E5E7EB]/80 leading-relaxed">
                  Whether you need custom software, ongoing technical support, or system modernization for your organization, E310 is ready to partner with you.
                </p>

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
