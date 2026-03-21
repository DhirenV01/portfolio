export const siteConfig = {
  name: "Dhiren Vazirani",
  tagline: "Software Engineer · AI/ML · Cloud Pipelines · LLMs",
  email: "dhirenvazirani@gmail.com",
  github: "https://github.com/DhirenV01",
  linkedin: "https://www.linkedin.com/in/dhiren-vazirani/",
  bio: "I build intelligent systems that turn complex data into real products. From RAG-powered platforms to serverless data pipelines, I ship software that makes AI and data infrastructure work in production.",
  education: "BS Computer Science, Rutgers University",
};

export const experience = [
  {
    role: "Data Engineer",
    company: "MetroStar Systems",
    period: "Jan 2025 — Oct 2025",
    description:
      "Led development of MIRA, an AI-powered talent acquisition platform using GPT-4, RAG architecture, vector embeddings, and Azure Cognitive Search. Built the Pulse executive financial dashboard on Microsoft Fabric with PySpark/Delta Lake medallion architecture pipelines. Prototyped Piper pricing intelligence tool using Azure AI Foundry.",
    tech: ["GPT-4", "RAG", "Azure AI", "PySpark", "Delta Lake", "FastAPI", "Microsoft Fabric"],
  },
  {
    role: "Data Analyst / Engineer",
    company: "PNC Bank",
    period: "Mar 2024 — Jul 2024",
    description:
      "Designed and maintained FDIC compliance reporting pipelines. Automated regulatory data workflows and built internal dashboards for financial risk monitoring across enterprise banking systems.",
    tech: ["SQL Server", "Python", "ETL", "Compliance Reporting"],
  },
  {
    role: "Data Scientist / Engineer",
    company: "BNY Mellon",
    period: "Aug 2023 — Feb 2024",
    description:
      "Processed Bloomberg market data feeds and built risk model pipelines. Developed automated data quality frameworks for high-frequency financial data processing.",
    tech: ["Python", "Bloomberg API", "Risk Models", "SQL", "Data Quality"],
  },
  {
    role: "Data Analyst Intern",
    company: "Comcast",
    period: "May 2022 — Aug 2022",
    description:
      "Supported analytics initiatives across customer data platforms and contributed to dashboard development for business intelligence teams.",
    tech: ["Python", "SQL", "Tableau", "Analytics"],
  },
  {
    role: "Middleware Engineering Intern",
    company: "Guardian Life",
    period: "Jun 2021 — Aug 2021",
    description:
      "Worked on middleware integration and API development supporting enterprise insurance platforms and backend services.",
    tech: ["Java", "APIs", "Middleware", "Enterprise Systems"],
  },
];

export const projects = [
  {
    title: "Earnings Call Intelligence Agent",
    description:
      "Analysts spend hours reading earnings call transcripts to extract insights — this agent does it in seconds. Production RAG pipeline with a medallion ingestion architecture, speaker-level metadata and citation tracking, automatic financial glossary extraction, and DynamoDB query logging. Ask natural-language questions and get answers grounded in exact transcript passages with speaker attribution.",
    tech: ["Python", "FastAPI", "OpenAI", "Pinecone", "AWS DynamoDB", "Railway"],
    link: "https://earnings-intelligence-production-42c7.up.railway.app/demo",
    github: "https://github.com/DhirenV01/earnings-intelligence",
    highlight: true,
  },
  {
    title: "MIRA — AI Talent Acquisition Platform",
    description:
      "Enterprise AI platform that matches candidates to roles using GPT-4 with RAG architecture, vector embeddings via Azure Cognitive Search, and intelligent document parsing. Built end-to-end with FastAPI backend and PySpark data pipelines on Delta Lake.",
    tech: ["GPT-4", "RAG", "Azure Cognitive Search", "PySpark", "FastAPI", "Delta Lake"],
    link: null,
    github: null,
    highlight: false,
  },
  {
    title: "GitHub Tech Trends Pipeline",
    description:
      "Fully automated serverless ETL pipeline tracking global repository trends via the GitHub API. Multi-stage data lake pattern (Bronze → Silver → Gold) with AWS Lambda, S3, and EventBridge. React analytics dashboard deployed on Vercel.",
    tech: ["AWS Lambda", "S3", "EventBridge", "API Gateway", "React", "Python"],
    link: "https://github-tech-trends.vercel.app",
    github: "https://github.com/DhirenV01",
    highlight: false,
  },
];

export const skillCategories = [
  {
    label: "Languages & Frameworks",
    items: ["Python", "PySpark", "SQL", "FastAPI", "Java", "Spring Boot", "JavaScript", "React", "Node.js"],
  },
  {
    label: "AI / ML",
    items: ["GPT-4", "RAG Architecture", "Vector Embeddings", "LLM Integration", "Azure AI", "Prompt Engineering"],
  },
  {
    label: "Cloud & Data",
    items: ["AWS", "Azure", "Databricks", "Delta Lake", "dbt", "Apache Spark", "Airflow", "Kafka", "Microsoft Fabric"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "Git", "CI/CD", "PostgreSQL", "Redis", "SQL Server", "CloudWatch", "API Gateway"],
  },
];

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];