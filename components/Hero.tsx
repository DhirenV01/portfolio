"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center pt-24 pb-16"
    >
      <div className="max-w-[1100px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-[clamp(40px,6vw,72px)] font-extrabold text-foreground leading-[1.05] mb-4 tracking-[-1.5px]"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="font-mono text-sm text-accent tracking-wide mb-5"
          >
            {siteConfig.subtitle}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-body text-lg text-muted leading-relaxed mb-10 max-w-[540px]"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-2.5"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-subtle text-foreground text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-subtle text-foreground text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              <FileText size={15} />
              Resume
            </a>
            <button
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-accent-medium bg-accent-light text-accent text-sm font-semibold cursor-default"
              title="Coming soon"
            >
              <MessageCircle size={15} />
              Ask my AI
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs bg-foreground text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Coming soon
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right: Hero asset (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-border-subtle bg-white/40 backdrop-blur-sm p-5 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-asset.png"
              alt="Abstract geometric visual"
              className="w-full h-auto rounded-xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
