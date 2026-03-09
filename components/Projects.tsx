"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        className="group relative p-7 rounded-[14px] bg-bg-card border border-border-subtle card-glow h-full flex flex-col overflow-hidden"
      >
        {project.highlight && (
          <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-accent-dim border border-[rgba(0,229,255,0.2)] flex items-center gap-1">
            <Sparkles size={10} className="text-accent" />
            <span className="text-[10px] font-mono text-accent tracking-wider">
              FLAGSHIP
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="w-9 h-9 rounded-lg bg-accent-dim border border-[rgba(0,229,255,0.15)] flex items-center justify-center mb-4 group-hover:animate-glow-pulse transition-all">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-accent"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>

        <h3 className="font-body text-[17px] font-semibold text-white mb-2.5">
          {project.title}
        </h3>

        <p className="font-body text-sm text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="tech-badge px-2.5 py-0.5 rounded-md text-[11px] font-mono text-muted bg-[rgba(255,255,255,0.04)] border border-border-subtle"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-mono text-accent no-underline hover:opacity-80 transition-opacity"
            >
              View Live
              <ExternalLink size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-mono text-muted no-underline hover:text-accent transition-colors"
            >
              Source
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-[900px] mx-auto">
        <AnimatedSection>
          <p className="font-mono text-xs text-accent tracking-[2px] mb-2">
            03 // PROJECTS
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-bold text-white mb-12 tracking-[-1px]">
            Featured Work
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
