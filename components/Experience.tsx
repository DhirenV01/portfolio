"use client";

import AnimatedSection from "./AnimatedSection";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground mb-12 tracking-[-0.5px]">
            Experience
          </h2>
        </AnimatedSection>

        <div className="space-y-5">
          {experience.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="p-6 bg-white rounded-xl border border-border-subtle hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-0.5">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-accent">
                      {exp.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted whitespace-nowrap mt-1">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4 text-sm text-muted leading-relaxed">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0">&#8226;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono text-accent bg-accent-light border border-transparent"
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
