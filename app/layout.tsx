import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

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
    <html
      lang="en"
      className={`scroll-smooth ${outfit.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bg text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  );
}
