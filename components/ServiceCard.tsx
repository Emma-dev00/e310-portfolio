import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: string[];
  linkHref?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  tags = [],
  linkHref = "/#contact",
}: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-[#21262D] bg-[#161B22] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6FF4D]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div>
        <div className="mb-5 flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#21262D] bg-[#0D1117] text-[#C6FF4D] transition-colors group-hover:border-[#C6FF4D]/40 group-hover:bg-[#C6FF4D]/10">
            {icon || (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#C6FF4D]">
          {title}
        </h3>
        <p className="mt-2.5 text-sm text-[#E5E7EB]/80 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#21262D] bg-[#0D1117] px-2 py-0.5 text-[11px] font-mono text-[#9CA3AF]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Link / Action */}
      <div className="mt-6 pt-4 border-t border-[#21262D]/60 flex items-center justify-between">
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C6FF4D] transition-all group-hover:gap-2.5"
        >
          <span>Explore Service</span>
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
  );
}
