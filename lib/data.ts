export const siteConfig = {
  name: "Dhiren Vazirani",
  subtitle: "Software Engineer · Backend Systems · APIs · Cloud Infrastructure",
  tagline:
    "I build production backend services, APIs, and cloud infrastructure in financial services. From scalable microservices to serverless pipelines, I ship reliable software that powers real products.",
  email: "dhirenvazirani@gmail.com",
  github: "https://github.com/DhirenV01",
  linkedin: "https://www.linkedin.com/in/dhiren-vazirani/",
};

export const experience = [
  {
    role: "Software Engineer",
    company: "MetroStar Systems",
    period: "Jan 2025 - Oct 2025",
    bullets: [
      "Built MIRA, a full-stack AI talent platform with FastAPI backend, GPT-4 integration, and Azure Cognitive Search for vector retrieval",
      "Designed and deployed Pulse, an executive dashboard backed by PySpark services and Delta Lake medallion architecture on Microsoft Fabric",
      "Prototyped Piper pricing intelligence API using Azure AI Foundry and RESTful service patterns",
    ],
    tech: ["FastAPI", "GPT-4", "Azure AI", "PySpark", "Delta Lake", "RAG", "Microsoft Fabric"],
  },
  {
    role: "Data Engineer",
    company: "PNC Bank",
    period: "Mar 2024 - Jul 2024",
    bullets: [
      "Built FDIC compliance reporting services with automated ingestion pipelines serving enterprise regulatory systems",
      "Engineered backend data workflows that reduced manual reporting cycles by 40% through scheduled automation",
      "Developed internal APIs and services for real-time financial risk monitoring across banking platforms",
    ],
    tech: ["SQL Server", "Python", "ETL", "Compliance Reporting"],
  },
  {
    role: "Software Engineer",
    company: "BNY Mellon",
    period: "Aug 2023 - Feb 2024",
    bullets: [
      "Built backend services to ingest and transform Bloomberg market data feeds, processing 500K+ records daily for downstream risk systems",
      "Developed automated data validation services that caught 95%+ of anomalies in high-frequency financial data streams",
    ],
    tech: ["Python", "Bloomberg API", "SQL", "REST APIs", "Data Validation"],
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
      "Production API service that extracts insights from earnings call transcripts in seconds. FastAPI backend with medallion ingestion architecture, speaker-level metadata, citation tracking, automatic financial glossary extraction, and DynamoDB query logging.",
    tech: ["Python", "FastAPI", "OpenAI", "Pinecone", "AWS DynamoDB", "Railway"],
    link: "https://earnings-intelligence-production-42c7.up.railway.app/demo",
    github: "https://github.com/DhirenV01/earnings-intelligence",
    highlight: true,
    badge: "Flagship",
  },
  {
    title: "MIRA: AI Talent Acquisition Platform",
    description:
      "Enterprise backend platform with FastAPI services that match candidates to roles using GPT-4, RAG architecture, vector embeddings via Azure Cognitive Search, and intelligent document parsing.",
    tech: ["GPT-4", "RAG", "Azure Cognitive Search", "PySpark", "FastAPI", "Delta Lake"],
    link: null,
    github: null,
    highlight: false,
    badge: "Enterprise",
  },
  {
    title: "SQL Adversarial Testing Agent",
    description:
      "Backend testing service that stress-tests AI-generated SQL by auto-generating adversarial datasets that surface logic errors, not syntax errors. 3-agent pipeline with schema analysis, data generation, and validation via FastAPI endpoints.",
    tech: ["DuckDB", "GPT-4o", "Pydantic", "FastAPI", "Python"],
    link: null,
    github: "https://github.com/DhirenV01/sql-adversarial-agent",
    highlight: false,
    badge: "New",
  },
  {
    title: "GitHub Tech Trends Pipeline",
    description:
      "Serverless backend pipeline tracking global repository trends. API Gateway endpoints backed by AWS Lambda functions, S3 storage, and EventBridge scheduling in a multi-stage data lake pattern.",
    tech: ["AWS Lambda", "S3", "EventBridge", "API Gateway", "React", "Python"],
    link: "https://github-tech-trends.vercel.app",
    github: "https://github.com/DhirenV01",
    highlight: false,
    badge: null,
  },
];

export const skillCategories = [
  {
    label: "Backend & Languages",
    items: ["Python", "Java", "TypeScript", "SQL", "FastAPI", "REST APIs", "Microservices"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["AWS Lambda", "S3", "API Gateway", "Glue", "Athena", "Azure Databricks", "Data Factory", "Cognitive Search", "Docker", "Terraform"],
  },
  {
    label: "AI & Data",
    items: ["GPT-4", "RAG", "LangChain", "Pinecone", "Vector Embeddings", "PySpark", "Delta Lake", "DuckDB", "Pandas"],
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
