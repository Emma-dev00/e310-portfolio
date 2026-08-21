"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#C6FF4D]/30 bg-[#0D1117] p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C6FF4D]/10 text-[#C6FF4D] border border-[#C6FF4D]/30">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white">Inquiry Received</h3>
        <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out to E310. An engineering lead will review your project scope and respond within 24–48 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-full border border-[#21262D] bg-[#161B22] px-5 py-2 text-xs font-mono text-[#C6FF4D] hover:border-[#C6FF4D]"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#21262D] bg-[#0D1117] p-6 sm:p-8 space-y-5"
    >
      <h3 className="text-base font-bold text-white border-b border-[#21262D] pb-3 flex items-center justify-between">
        <span>Project &amp; Support Inquiry Form</span>
        <span className="text-[10px] font-mono text-[#C6FF4D] font-normal">
          Direct Lead Route
        </span>
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-[#9CA3AF] uppercase">
            Your Name <span className="text-[#C6FF4D]">*</span>
          </label>
          <input
            type="text"
            required
            className="w-full rounded-lg border border-[#21262D] bg-[#161B22] px-3.5 py-2.5 text-xs text-white focus:border-[#C6FF4D] focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-[#9CA3AF] uppercase">
            Work Email <span className="text-[#C6FF4D]">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full rounded-lg border border-[#21262D] bg-[#161B22] px-3.5 py-2.5 text-xs text-white focus:border-[#C6FF4D] focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-[#9CA3AF] uppercase">
            Organization / Program
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-[#21262D] bg-[#161B22] px-3.5 py-2.5 text-xs text-white focus:border-[#C6FF4D] focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-[#9CA3AF] uppercase">
            Area of Interest
          </label>
          <select className="w-full rounded-lg border border-[#21262D] bg-[#161B22] px-3.5 py-2.5 text-xs text-white focus:border-[#C6FF4D] focus:outline-none">
            <option value="custom-app">Custom Web / Mobile Application</option>
            <option value="technical-support">Ongoing Technical Support &amp; Maintenance</option>
            <option value="architecture">System Architecture &amp; Cloud Setup</option>
            <option value="ui-ux">Product Design &amp; UI/UX</option>
            <option value="general">General Technology Inquiry</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-mono text-[#9CA3AF] uppercase">
          Project Scope &amp; Requirements <span className="text-[#C6FF4D]">*</span>
        </label>
        <textarea
          required
          rows={3}
          className="w-full rounded-lg border border-[#21262D] bg-[#161B22] px-3.5 py-2.5 text-xs text-white focus:border-[#C6FF4D] focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#C6FF4D] py-3 text-xs sm:text-sm font-bold text-[#0D1117] transition-all hover:bg-[#b5f336] hover:shadow-[0_0_20px_rgba(198,255,77,0.3)] active:scale-[0.99] disabled:opacity-70"
      >
        {loading ? "Transmitting Scope..." : "Submit Project Inquiry →"}
      </button>

      <p className="text-center text-[11px] text-[#9CA3AF]">
        Inquiries are encrypted and routed directly to the E310 lead engineering team.
      </p>
    </form>
  );
}
