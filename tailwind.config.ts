import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          card: "rgba(17, 17, 27, 0.8)",
          "card-hover": "rgba(25, 25, 40, 0.9)",
        },
        accent: {
          DEFAULT: "#00e5ff",
          dim: "rgba(0, 229, 255, 0.15)",
          glow: "rgba(0, 229, 255, 0.3)",
        },
        muted: "#8888a0",
        "border-subtle": "rgba(255, 255, 255, 0.06)",
        "border-accent": "rgba(0, 229, 255, 0.3)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(8px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.25)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
