"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24 pb-20"
    >
      <div className="max-w-[1100px] mx-auto w-full flex items-center justify-between gap-12">
        {/* Left: Text content */}
        <div className="max-w-[680px]">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
            className="text-lg text-muted leading-relaxed mb-10 max-w-[580px]"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex gap-3 flex-wrap"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-subtle text-foreground text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-subtle text-foreground text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              <FileText size={16} />
              Resume
            </a>
            <button
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent-medium bg-accent-light text-accent text-sm font-semibold cursor-default"
              title="Coming soon"
            >
              <MessageCircle size={16} />
              Ask my AI
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs bg-foreground text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Coming soon
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right: 3D geometric asset container (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center justify-center flex-shrink-0 w-[360px] h-[360px] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-border-subtle"
        >
          {/* Replace this placeholder with your 3D asset (image, canvas, or iframe) */}
          <div className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden">
            <span className="text-sm text-muted font-mono">3D Asset</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
