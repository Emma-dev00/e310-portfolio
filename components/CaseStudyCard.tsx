import React from "react";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  excerpt: string;
  category?: string;
  technologies?: string[];
  metrics?: { label: string; value: string }[];
  isPlaceholder?: boolean;
  slug?: string;
}

export default function CaseStudyCard({
  title,
  excerpt,
  category = "Digital Solution",
  technologies = ["Next.js", "TypeScript", "Tailwind CSS"],
  metrics = [],
  isPlaceholder = false,
  slug = "funding-portal",
}: CaseStudyCardProps) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#21262D] bg-[#161B22] transition-all duration-300 hover:-translate-y-1 hover:border-[#C6FF4D]/50 hover:shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
      {/* Top Visual Section with Category Badge */}
      <div className="relative border-b border-[#21262D] bg-[#0D1117] p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#21262D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#21262D]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#21262D]" />
          </div>
          <span className="rounded-full border border-[#21262D] bg-[#161B22] px-2.5 py-0.5 text-[11px] font-mono text-[#C6FF4D]">
            {category}
          </span>
        </div>

        {/* Clean Project Overview */}
        <div className="rounded-lg border border-[#21262D] bg-[#161B22]/70 p-4 space-y-3">
          <div className="font-mono text-xs text-[#9CA3AF]">
            <p className="text-[11px] text-[#E5E7EB]">{title}</p>
            <p className="text-[10px] mt-2 text-[#9CA3AF]/70 leading-relaxed line-clamp-2">{excerpt}</p>
          </div>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h4 className="text-lg font-bold text-white transition-colors group-hover:text-[#C6FF4D]">
            {title}
          </h4>
          <p className="mt-2 text-sm text-[#E5E7EB]/80 leading-relaxed">
            {excerpt}
          </p>

          {/* Technology Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[#21262D] bg-[#0D1117] px-2 py-0.5 text-[11px] font-mono text-[#9CA3AF]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Link Action */}
        <div className="mt-6 pt-4 border-t border-[#21262D]/60 flex items-center justify-between">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C6FF4D] transition-all group-hover:gap-2.5"
          >
            <span>View Project</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
