import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  organization?: string;
  isPlaceholder?: boolean;
}

export default function Testimonial({
  quote,
  author,
  role,
  organization,
  isPlaceholder = false,
}: TestimonialProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#21262D] bg-[#161B22] p-7 transition-all duration-300 hover:border-[#C6FF4D]/30">
      <div>
        {/* Quote Icon & Placeholder Flag */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#21262D] bg-[#0D1117] text-[#C6FF4D]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          {isPlaceholder && (
            <span className="rounded border border-[#21262D] bg-[#0D1117] px-2 py-0.5 text-[10px] font-mono text-[#9CA3AF]">
              [Sample Voice]
            </span>
          )}
        </div>

        {/* Quote Text */}
        <p className="text-sm text-[#E5E7EB] leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div className="mt-6 border-t border-[#21262D]/60 pt-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#21262D] bg-[#0D1117] text-xs font-bold text-[#C6FF4D] font-mono">
          {author.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="text-xs font-bold text-white">{author}</p>
          {(role || organization) && (
            <p className="text-[11px] text-[#9CA3AF]">
              {role}
              {role && organization ? " • " : ""}
              {organization}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
