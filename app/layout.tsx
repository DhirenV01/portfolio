import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhiren Vazirani — Software Engineer",
  description:
    "Software Engineer specializing in AI/ML integration, cloud data pipelines, and building intelligent systems with Python, LLMs, and modern cloud infrastructure.",
  keywords: [
    "software engineer",
    "data engineer",
    "AI",
    "machine learning",
    "Python",
    "LLM",
    "RAG",
    "FastAPI",
    "AWS",
    "Azure",
  ],
  authors: [{ name: "Dhiren Vazirani" }],
  openGraph: {
    title: "Dhiren Vazirani — Software Engineer",
    description:
      "Building intelligent systems with AI, cloud pipelines, and modern data infrastructure.",
    url: "https://www.dhirenvazirani.com",
    siteName: "Dhiren Vazirani",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiren Vazirani — Software Engineer",
    description:
      "Building intelligent systems with AI, cloud pipelines, and modern data infrastructure.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-[#e0e0e8] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
