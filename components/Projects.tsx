"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -3 }}
        className={`group relative p-6 rounded-xl bg-white border border-border-subtle hover:shadow-lg transition-all duration-300 h-full flex flex-col ${
          featured ? "md:p-8" : ""
        }`}
      >
        {project.badge && (
          <span
            className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
              project.badge === "Flagship"
                ? "bg-accent-light text-accent"
                : "bg-emerald-50 text-emerald-700"
            }`}
          >
            {project.badge}
          </span>
        )}

        <h3
          className={`font-semibold text-foreground mb-2 pr-16 ${
            featured ? "text-xl" : "text-base"
          }`}
        >
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-md text-xs font-mono text-muted bg-gray-50 border border-border-subtle"
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <Github size={14} />
              Source
            </a>
          )}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.highlight);
  const secondary = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold text-foreground mb-12 tracking-[-0.5px]">
            Projects
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured project spans 2 columns */}
          {featured && (
            <div className="md:col-span-2">
              <ProjectCard project={featured} index={0} featured />
            </div>
          )}

          {/* Secondary projects */}
          {secondary.map((project, i) => (
            <div key={i} className="md:col-span-1">
              <ProjectCard project={project} index={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
