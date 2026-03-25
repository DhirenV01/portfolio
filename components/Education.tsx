"use client";

import { GraduationCap, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground mb-12 tracking-[-0.5px]">
            Education & Certifications
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border-subtle">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{education.degree}</p>
                <p className="text-sm text-muted">{education.school}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border-subtle">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
                <Award size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{education.certification}</p>
                <p className="text-sm text-muted">Microsoft</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
