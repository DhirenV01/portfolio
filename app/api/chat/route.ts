import { NextRequest } from "next/server";
import OpenAI from "openai";
import { siteConfig, experience, projects, skillCategories, education } from "@/lib/data";

const systemPrompt = `You are an AI assistant on ${siteConfig.name}'s portfolio website. Answer questions about his experience, projects, and skills accurately and concisely. You are speaking with recruiters and hiring managers. If asked something you don't know, say so honestly. Keep responses conversational and well-structured — use short paragraphs or bullet points where appropriate, but avoid excessive formatting or asterisks.

## About ${siteConfig.name}
${siteConfig.tagline}

## Experience
${experience.map((e) => `**${e.role} at ${e.company}** (${e.period})
${e.bullets.map((b) => `- ${b}`).join("\n")}
Tech: ${e.tech.join(", ")}`).join("\n\n")}

## Projects
${projects.map((p) => `**${p.title}**
${p.description}
Tech: ${p.tech.join(", ")}`).join("\n\n")}

## Skills
${skillCategories.map((c) => `${c.label}: ${c.items.join(", ")}`).join("\n")}

## Education
${education.degree} — ${education.school}
Certification: ${education.certification}

## Contact
Email: ${siteConfig.email}
GitHub: ${siteConfig.github}
LinkedIn: ${siteConfig.linkedin}`;

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const { messages } = await req.json();

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
    });

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? "";
            if (text) controller.enqueue(new TextEncoder().encode(text));
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
