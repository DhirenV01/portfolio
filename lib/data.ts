export const siteConfig = {
  name: "Dhiren Vazirani",
  subtitle: "Data Engineering · AI Systems · Cloud Infrastructure",
  tagline:
    "I build production AI and data systems in financial services. From RAG platforms to serverless pipelines, I ship software that turns complex data into real products.",
  email: "dhirenvazirani@gmail.com",
  github: "https://github.com/DhirenV01",
  linkedin: "https://www.linkedin.com/in/dhiren-vazirani/",
};

export const experience = [
  {
    role: "Data Engineer",
    company: "MetroStar Systems",
    period: "Jan 2025 - Oct 2025",
    bullets: [
      "Led development of MIRA, an AI talent acquisition platform using GPT-4, RAG, and Azure Cognitive Search",
      "Built Pulse executive financial dashboard on Microsoft Fabric with PySpark/Delta Lake medallion architecture",
      "Prototyped Piper pricing intelligence tool using Azure AI Foundry",
    ],
    tech: ["GPT-4", "RAG", "Azure AI", "PySpark", "Delta Lake", "FastAPI", "Microsoft Fabric"],
  },
  {
    role: "Data Analyst / Engineer",
    company: "PNC Bank",
    period: "Mar 2024 - Jul 2024",
    bullets: [
      "Designed FDIC compliance reporting pipelines serving enterprise regulatory requirements",
      "Automated regulatory data workflows, reducing manual reporting cycles by 40%",
      "Built internal dashboards for real-time financial risk monitoring across banking systems",
    ],
    tech: ["SQL Server", "Python", "ETL", "Compliance Reporting"],
  },
  {
    role: "Data Scientist / Engineer",
    company: "BNY Mellon",
    period: "Aug 2023 - Feb 2024",
    bullets: [
      "Ingested and transformed Bloomberg market data feeds for risk model pipelines processing 500K+ records daily",
      "Built automated data quality frameworks that caught 95%+ of anomalies in high-frequency financial data",
    ],
    tech: ["Python", "Bloomberg API", "Risk Models", "SQL", "Data Quality"],
  },
  {
    role: "Data Analyst Intern",
    company: "Comcast",
    period: "May 2022 - Aug 2022",
    bullets: [
      "Supported analytics initiatives across customer data platforms",
      "Contributed to dashboard development for business intelligence teams",
    ],
    tech: ["Python", "SQL", "Tableau", "Analytics"],
  },
];

export const projects = [
  {
    title: "Earnings Call Intelligence Agent",
    description:
      "Production RAG pipeline that extracts insights from earnings call transcripts in seconds. Medallion ingestion architecture with speaker-level metadata, citation tracking, automatic financial glossary extraction, and DynamoDB query logging.",
    tech: ["Python", "FastAPI", "OpenAI", "Pinecone", "AWS DynamoDB", "Railway"],
    link: "https://earnings-intelligence-production-42c7.up.railway.app/demo",
    github: "https://github.com/DhirenV01/earnings-intelligence",
    highlight: true,
    badge: "Flagship",
  },
  {
    title: "MIRA: AI Talent Acquisition Platform",
    description:
      "Enterprise AI platform that matches candidates to roles using GPT-4 with RAG architecture, vector embeddings via Azure Cognitive Search, and intelligent document parsing.",
    tech: ["GPT-4", "RAG", "Azure Cognitive Search", "PySpark", "FastAPI", "Delta Lake"],
    link: null,
    github: null,
    highlight: false,
    badge: null,
  },
  {
    title: "SQL Adversarial Testing Agent",
    description:
      "Stress-tests AI-generated SQL by auto-generating adversarial datasets that surface logic errors, not syntax errors. 3-agent pipeline with schema analysis, data generation, and validation.",
    tech: ["DuckDB", "GPT-4o", "Pydantic", "FastAPI", "Python"],
    link: null,
    github: "https://github.com/DhirenV01/sql-adversarial-agent",
    highlight: false,
    badge: "New",
  },
  {
    title: "GitHub Tech Trends Pipeline",
    description:
      "Fully automated serverless ETL pipeline tracking global repository trends. Multi-stage data lake pattern (Bronze, Silver, Gold) with AWS Lambda, S3, and EventBridge.",
    tech: ["AWS Lambda", "S3", "EventBridge", "API Gateway", "React", "Python"],
    link: "https://github-tech-trends.vercel.app",
    github: "https://github.com/DhirenV01",
    highlight: false,
    badge: null,
  },
];

export const skillCategories = [
  {
    label: "Languages",
    items: ["Python", "SQL", "Java", "TypeScript"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["AWS Lambda", "S3", "Glue", "Athena", "API Gateway", "Azure Databricks", "Data Factory", "Cognitive Search", "Azure OpenAI", "Docker", "Terraform"],
  },
  {
    label: "Data & ML",
    items: ["Microsoft Fabric", "PySpark", "Pandas", "Delta Lake", "DuckDB", "Pinecone"],
  },
  {
    label: "Frameworks & Tools",
    items: ["FastAPI", "React", "Next.js", "Docker", "Terraform"],
  },
  {
    label: "AI / ML",
    items: ["GPT-4", "RAG", "LangChain", "Vector Embeddings"],
  },
];

export const education = {
  degree: "B.S. Computer Science",
  school: "Rutgers University",
  certification: "Microsoft Certified: Fabric Data Engineer Associate",
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
