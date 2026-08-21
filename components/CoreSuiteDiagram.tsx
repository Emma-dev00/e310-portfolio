"use client";

import Link from "next/link";
import { useState } from "react";

type Organization = {
  name: string;
  description: string;
  href: string;
  position: string;
  icon: "MMP" | "DAF" | "DAIH" | "Skill Up" | "Incubator" | "NewGen";
};

const organizations: Organization[] = [
  {
    name: "MMP",
    description: "Marathon Messiah Praise",
    href: "/#projects",
    position: "core-node--top",
    icon: "MMP",
  },
  {
    name: "DAF",
    description: "Dare Adeboye Foundation",
    href: "/#projects",
    position: "core-node--upper-left",
    icon: "DAF",
  },
  {
    name: "DAIH",
    description: "Dare Adeboye Innovation Hub",
    href: "/#projects",
    position: "core-node--upper-right",
    icon: "DAIH",
  },
  {
    name: "Skills Up",
    description: "Skills development and digital learning",
    href: "/#services",
    position: "core-node--lower-left",
    icon: "Skill Up",
  },
  {
    name: "Incubator Innovation Hub",
    description: "Startup growth and venture support",
    href: "/#projects",
    position: "core-node--lower-right",
    icon: "Incubator",
  },
  {
    name: "New Gen",
    description: "",
    href: "/#contact",
    position: "core-node--bottom",
    icon: "NewGen",
  },
];

function OrganizationIcon({ type }: { type: Organization["icon"] }) {
  if (type === "MMP") {
    return <span className="core-suite-icon-mark">M</span>;
  }

  if (type === "NewGen") {
    return <span className="core-suite-icon-mark">N</span>;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="core-suite-icon-svg">
      {type === "Skill Up" ? (
        <path d="M4 18h16M6 15V9m4 6V5m4 10v-3m4 3V7" />
      ) : type === "Incubator" ? (
        <path d="M12 3 4 7v5c0 4.5 3.5 7.6 8 9 4.5-1.4 8-4.5 8-9V7l-8-4Zm0 4v6m-3 0h6" />
      ) : (
        <path d="M5 19V9m7 10V5m7 14v-7M3 19h18" />
      )}
    </svg>
  );
}

export default function CoreSuiteDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="core-suite-diagram" aria-label="E310 technology ecosystem map">
      <div className="core-suite-canvas">
        <svg className="core-suite-connections" viewBox="0 0 800 680" role="presentation">
          {organizations.map((organization, index) => (
            <g key={organization.name} className={`core-suite-connection core-suite-connection--${index + 1} ${activeNode && activeNode !== organization.name ? "is-muted" : ""} ${activeNode === organization.name ? "is-active" : ""}`}>
              <line x1="400" y1="340" x2={index < 3 ? 400 + (index - 1) * 265 : 400 + (index - 4) * 265} y2={index === 0 ? 62 : index === 1 || index === 2 ? 180 : index === 3 || index === 4 ? 500 : 618} />
              <circle r="3" cx="400" cy="340" className="core-suite-connection-point" />
              <circle r="3" className="core-suite-particle">
                <animateMotion dur={`${3.8 + index * 0.35}s`} repeatCount="indefinite" path={index === 0 ? "M 0 0 L 0 -278" : index === 1 ? "M 0 0 L -265 -160" : index === 2 ? "M 0 0 L 265 -160" : index === 3 ? "M 0 0 L -265 160" : index === 4 ? "M 0 0 L 265 160" : "M 0 0 L 0 278"} />
              </circle>
            </g>
          ))}
        </svg>

        <Link href="/#core-suite" className="core-suite-hub" aria-label="View E310 Core Suite overview">
          <span className="core-suite-hub-orbit" />
          <span className="core-suite-hub-kicker">Technology engine</span>
          <strong>E310</strong>
          <span>CORE SUITE</span>
          <small>Connected by design</small>
        </Link>

        {organizations.map((organization) => (
          <Link
            key={organization.name}
            href={organization.href}
            className={`core-suite-node ${organization.position} ${activeNode && activeNode !== organization.name ? "is-muted" : ""} ${activeNode === organization.name ? "is-active" : ""}`}
            onMouseEnter={() => setActiveNode(organization.name)}
            onMouseLeave={() => setActiveNode(null)}
            onFocus={() => setActiveNode(organization.name)}
            onBlur={() => setActiveNode(null)}
          >
            <span className="core-suite-node-icon"><OrganizationIcon type={organization.icon} /></span>
            <span className="core-suite-node-copy">
              <strong>{organization.name}</strong>
              <span>{organization.description}</span>
            </span>
            <span className="core-suite-node-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
