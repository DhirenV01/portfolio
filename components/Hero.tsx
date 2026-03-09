"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

function TypewriterText({ text, speed = 35 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {!done && (
        <span className="inline-block w-0.5 h-[1.1em] bg-accent ml-0.5 align-text-bottom animate-blink" />
      )}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 pb-20 relative"
    >
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block px-4 py-1 rounded-full border border-border-accent bg-accent-dim mb-6"
      >
        <span className="font-mono text-xs text-accent tracking-wider">
          OPEN TO OPPORTUNITIES
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-display text-[clamp(40px,7vw,80px)] font-extrabold text-white leading-none mb-4 tracking-[-2px]"
      >
        {siteConfig.name}
      </motion.h1>

      {/* Typewriter tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-mono text-[clamp(14px,2vw,18px)] text-accent mb-7 min-h-[28px]"
      >
        <TypewriterText text={siteConfig.tagline} />
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="font-body text-[17px] text-muted max-w-[600px] leading-relaxed mb-10"
      >
        {siteConfig.bio}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0 }}
        className="flex gap-3.5 flex-wrap justify-center"
      >
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary flex items-center gap-2 px-6 py-3 rounded-[10px] bg-accent text-bg font-mono text-sm font-semibold no-underline transition-all duration-200"
        >
          <Github size={18} />
          GitHub
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-outline flex items-center gap-2 px-6 py-3 rounded-[10px] border border-border-accent bg-[rgba(0,229,255,0.05)] text-accent font-mono text-sm font-semibold no-underline transition-all duration-200"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="cta-outline flex items-center gap-2 px-6 py-3 rounded-[10px] border border-border-subtle bg-transparent text-[#e0e0e8] font-mono text-sm font-semibold no-underline transition-all duration-200"
        >
          <Mail size={18} />
          Email
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 animate-float">
        <ChevronDown size={20} className="text-muted" />
      </div>
    </section>
  );
}
