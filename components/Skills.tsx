"use client";

import AnimatedSection from "./AnimatedSection";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground mb-12 tracking-[-0.5px]">
            Tech Stack
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <AnimatedSection key={ci} delay={ci * 0.08}>
              <div className="p-5 rounded-xl bg-white border border-border-subtle">
                <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium text-foreground bg-gray-50 border border-border-subtle"
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
