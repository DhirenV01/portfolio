"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-[600px] mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground mb-4 tracking-[-0.5px]">
            Let&apos;s Connect
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8">
            I&apos;m currently open to new opportunities in data engineering,
            software engineering, and AI/ML roles. If you have a role in mind or
            just want to connect, I&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-5 mt-8">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
