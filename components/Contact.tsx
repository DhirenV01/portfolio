"use client";

import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 pb-20 px-6 relative">
      <div className="max-w-[600px] mx-auto text-center">
        <AnimatedSection>
          <p className="font-mono text-xs text-accent tracking-[2px] mb-2">
            05 // CONTACT
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold text-white mb-4 tracking-[-1px]">
            Let&apos;s Build Something
          </h2>
          <p className="font-body text-base text-muted leading-relaxed mb-9">
            I&apos;m currently open to new opportunities in software engineering,
            data engineering, and AI/ML roles. Whether you have a role in mind or
            just want to connect, I&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="cta-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] bg-accent text-bg font-mono text-sm font-semibold no-underline transition-all duration-200"
          >
            {siteConfig.email}
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-muted no-underline hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-muted no-underline hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
