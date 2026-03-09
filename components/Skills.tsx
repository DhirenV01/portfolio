"use client";

import AnimatedSection from "./AnimatedSection";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-[900px] mx-auto">
        <AnimatedSection>
          <p className="font-mono text-xs text-accent tracking-[2px] mb-2">
            04 // SKILLS
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold text-white mb-12 tracking-[-1px]">
            Tech Stack
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((cat, ci) => (
            <AnimatedSection key={ci} delay={ci * 0.1}>
              <div className="p-6 rounded-xl bg-bg-card border border-border-subtle card-glow">
                <h3 className="font-mono text-[11px] text-accent tracking-[1.5px] uppercase mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="tech-badge px-3.5 py-1.5 rounded-lg text-[13px] font-body font-medium text-[#e0e0e8] bg-[rgba(255,255,255,0.04)] border border-border-subtle cursor-default"
                    >
                      {skill}
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
