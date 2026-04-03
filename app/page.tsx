"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
      <main>
        <Navbar />
        <Hero onOpenChat={() => setChatOpen(true)} />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
