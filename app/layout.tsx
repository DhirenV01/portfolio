import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhiren Vazirani | Data Engineer & AI Systems",
  description:
    "I build production AI and data systems in financial services. From RAG platforms to serverless pipelines, I ship software that turns complex data into real products.",
  keywords: [
    "data engineer",
    "software engineer",
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
    title: "Dhiren Vazirani | Data Engineer & AI Systems",
    description:
      "I build production AI and data systems in financial services. From RAG platforms to serverless pipelines, I ship software that turns complex data into real products.",
    url: "https://www.dhirenvazirani.com",
    siteName: "Dhiren Vazirani",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiren Vazirani | Data Engineer & AI Systems",
    description:
      "I build production AI and data systems in financial services. From RAG platforms to serverless pipelines, I ship software that turns complex data into real products.",
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
      <body className="bg-bg text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  );
}
