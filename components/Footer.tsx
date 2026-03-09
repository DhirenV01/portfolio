import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 py-6 border-t border-border-subtle">
      <div className="max-w-[900px] mx-auto flex justify-between items-center flex-wrap gap-3">
        <span className="font-mono text-xs text-muted">
          © 2026 {siteConfig.name}
        </span>
        <span className="font-mono text-[11px] text-accent px-2.5 py-0.5 rounded-md bg-accent-dim">
          Python · AI/ML · Cloud Infrastructure
        </span>
      </div>
    </footer>
  );
}
