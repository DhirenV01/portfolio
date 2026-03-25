"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

const hudLines = [
  "STATUS: MIRA_AI_ACTIVE",
  "RAG_PROMPT_ENGINE: OPTIMIZED",
  "PIPELINE: BNY_MELLON_PROD",
  "COMPLIANCE: FDIC_VALIDATED",
  "VECTOR_DB: PINECONE_READY",
  "DELTA_LAKE: MEDALLION_SYNC",
  "AGENT: EARNINGS_INTEL_LIVE",
  "FABRIC: SPARK_CLUSTER_OK",
  "ETL: LAMBDA_PIPELINE_CLEAR",
  "MODEL: GPT4_TURBO_LOADED",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center pt-24 pb-8"
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

        {/* Right: Hero visual with HUD overlay (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <div className="relative rounded-2xl border border-border-subtle overflow-hidden shadow-sm h-[420px]">
            {/* Cropped image: cover from the right to hide left-side filler text */}
            <Image
              src="/hero-asset.png"
              alt="Abstract 3D geometric visual"
              fill
              priority
              quality={100}
              className="object-cover object-right"
            />

            {/* HUD data stream overlay on left 30% */}
            <div
              className="absolute inset-y-0 left-0 w-[35%] z-10 flex flex-col justify-center px-4 py-6 gap-[10px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(to right, rgba(250,250,249,0.85) 60%, rgba(250,250,249,0) 100%)",
              }}
            >
              {hudLines.map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-mono text-[10px] leading-tight text-accent/40 whitespace-nowrap tracking-wide"
                >
                  <span className="text-accent/20 mr-1">&gt;</span>
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Subtle top/bottom fade for the HUD to feel integrated */}
            <div className="absolute inset-x-0 top-0 h-12 z-10 bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-12 z-10 bg-gradient-to-t from-white/60 to-transparent rounded-b-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
