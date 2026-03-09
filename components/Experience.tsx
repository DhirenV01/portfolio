"use client";

import AnimatedSection from "./AnimatedSection";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-[900px] mx-auto">
        <AnimatedSection>
          <p className="font-mono text-xs text-accent tracking-[2px] mb-2">
            02 // EXPERIENCE
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold text-white mb-12 tracking-[-1px]">
            Where I&apos;ve Built Things
          </h2>
        </AnimatedSection>

        <div className="relative pl-7">
          {/* Timeline line */}
          <div className="absolute left-1 top-2 bottom-2 w-px bg-gradient-to-b from-accent to-transparent" />

          {experience.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative mb-9 p-6 bg-bg-card rounded-xl border border-border-subtle card-glow">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-8 top-7 w-[9px] h-[9px] rounded-full border-2 border-accent ${
                    i === 0
                      ? "bg-accent shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                      : "bg-bg-card"
                  }`}
                />

                <div className="flex justify-between items-start flex-wrap gap-2 mb-2.5">
                  <div>
                    <h3 className="font-body text-lg font-semibold text-white mb-0.5">
                      {exp.role}
                    </h3>
                    <span className="font-body text-[15px] text-accent">
                      {exp.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="font-body text-sm text-muted leading-relaxed mb-3.5">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-badge px-2.5 py-0.5 rounded-md text-[11px] font-mono text-accent bg-accent-dim border border-[rgba(0,229,255,0.1)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
