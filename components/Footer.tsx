import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 py-6 border-t border-border-subtle">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center flex-wrap gap-3">
        <span className="text-sm text-muted">
          &copy; 2026 {siteConfig.name}
        </span>
        <span className="text-xs text-muted/60">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
