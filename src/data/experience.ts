export type CompanyId =
  | "essent"
  | "webcraft"
  | "vwpfs"
  | "monks"
  | "jumbo"
  | "klm"
  | "techifide"
  | "gft"
  | "sascar";

export interface ExperienceEntry {
  id: CompanyId;
  date: string;
  current?: boolean;
  company: string;
  role: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "essent",
    date: "Jan 2025 — Present",
    current: true,
    company: "Essent",
    role: "Staff Engineer · Cloud",
    location: "Den Bosch, NL",
    summary:
      "Drive the cross-squad Testing Community of Interest, own event-driven integrations on Kafka with DDD bounded contexts, and introduced Spec-Driven Development + agentic AI workflows.",
    bullets: [
      "Drive the cross-squad Testing Community of Interest, defining testing strategy, tooling standards and Definition of Done with Engineering Managers across multiple domain teams.",
      "Introduced Spec-Driven Development and agentic AI workflows to automate technical documentation and quality gates — reducing manual overhead for specs, ADRs and test scaffolding.",
      "Design and own event-driven integrations on Kafka, applying Domain-Driven Design and bounded contexts to decouple domain teams and clarify API interoperability.",
      "Facilitate Event Storming, Example Mapping and Value Stream Mapping sessions to translate business goals into concrete architectural and delivery decisions inside SAFe and Scrum ceremonies.",
      "Own AWS infrastructure-as-code with CDK (TypeScript) and CI/CD pipelines for reliable, repeatable multi-environment releases.",
    ],
    stack: ["Kafka", "DDD", "Event Storming", "AWS CDK", "TypeScript", "SAFe", "Spec-Driven"],
  },
  {
    id: "webcraft",
    date: "2022 — Present",
    company: "WebCraft Innovations",
    role: "Independent Software Engineer",
    location: "Netherlands · Consulting",
    summary:
      'KvK-registered consultancy. Key client: Teaching It Right (NSF-backed EdTech, USA). Architected and shipped "We Are Friends" from zero to production as sole technical owner.',
    bullets: [
      'Architected and delivered "We Are Friends", a research-based interactive platform helping children ages 4–9 develop social-behavioural and cognitive skills, from zero to production.',
      "Built the full-stack application with React and TypeScript, deployed as a static site on AWS S3 + CloudFront for global low-latency delivery.",
      "Implemented AWS Cognito for authentication and Lambda for serverless backend logic — keeping infrastructure cost-efficient and scalable without ops overhead.",
      "Shipped product features end-to-end: video modelling, customised photo experiences, music-based learning modules, reward systems and educator tracking tools.",
      "Owned architecture, delivery and client communication as sole technical contact.",
    ],
    stack: ["React", "TypeScript", "AWS Lambda", "Cognito", "CloudFront", "S3"],
  },
  {
    id: "vwpfs",
    date: "Aug 2023 — Jan 2025",
    company: "Volkswagen Pon Financial Services",
    role: "Senior Cloud Engineer",
    location: "Amersfoort, NL",
    summary:
      "Designed and shipped GraphQL services on AWS AppSync with Lambda resolvers and DynamoDB single-table models, serving multiple Volkswagen affiliates from a shared platform.",
    bullets: [
      "Designed and shipped GraphQL services on AWS AppSync with Lambda resolvers, DynamoDB single-table models and S3, serving multiple Volkswagen affiliates from a shared platform.",
      "Built automated test suites with Jest integrated into CI/CD — enforcing regression safety for critical financial flows.",
      "Owned IaC for multi-affiliate deployments with Terraform and AWS CDK in TypeScript, standardising environments across affiliates.",
    ],
    stack: ["GraphQL", "AppSync", "Lambda", "DynamoDB", "TypeScript", "Terraform"],
  },
  {
    id: "monks",
    date: "Jul 2022 — Jun 2024",
    company: "Formula.Monks",
    role: "Senior Engineer / Team Lead",
    location: "Remote · USA",
    summary:
      "Shipped an AI-powered customer chat with Vertex AI + RAG — one of the team's first production GenAI features. Replaced a third-party vendor, saving ~$10K/year.",
    bullets: [
      "Shipped an AI-powered customer chat feature using Vertex AI with Retrieval-Augmented Generation (RAG), delivering context-aware responses grounded in the client's knowledge base.",
      "Built a direct integration that replaced a third-party vendor dependency, eliminating roughly $10K/year in recurring costs.",
      "Designed data and ML workflows with Vertex AI, BigQuery, Cloud Storage and AutoML for model training and evaluation.",
      "Raised the engineering bar across the team through pair programming, code reviews and hands-on mentoring.",
    ],
    stack: ["Vertex AI", "RAG", "BigQuery", "GCP", "LangChain"],
  },
  {
    id: "jumbo",
    date: "Oct 2019 — Jul 2022",
    company: "Jumbo Supermarkten",
    role: "Solutions Engineer",
    location: "Veghel, NL",
    summary:
      "Migrated a legacy monolith to an SSR Nuxt frontend backed by microservices and a GraphQL gateway. Tech lead on the Refund Project across Promotions, Orders and Basket.",
    bullets: [
      "Migrated a legacy monolith to a modern SSR Nuxt (Vue.js) frontend backed by microservices and a GraphQL API gateway — improving maintainability and developer velocity.",
      "Tech lead for the Refund Project across Promotions, Orders and Basket services, coordinating two engineers and aligning multi-product delivery.",
    ],
    stack: ["Nuxt", "Vue.js", "GraphQL", "Microservices"],
  },
  {
    id: "klm",
    date: "Oct 2018 — Oct 2019",
    company: "KLM Royal Dutch Airlines",
    role: "Senior Frontend Engineer",
    location: "Amstelveen, NL",
    summary:
      "Developed an Angular + GraphQL application inside the Sales team. Drove adoption of the internal Design System and monitored stability of the customer sales journey.",
    bullets: [
      "Developed an Angular + GraphQL application inside the Sales team, collaborating with six engineers in a Scrum/Agile setup.",
      "Drove adoption of the internal Design System and monitored stability of the customer sales journey in production.",
    ],
    stack: ["Angular", "GraphQL", "Design Systems"],
  },
  {
    id: "techifide",
    date: "Sep 2016 — Oct 2018",
    company: "Techifide",
    role: "Medior Software Engineer",
    location: "London · Remote",
    summary: "Full-stack product delivery for a remote-first engineering team.",
    bullets: ["Full-stack product delivery across multiple client engagements."],
    stack: ["JavaScript", "Node.js"],
  },
  {
    id: "gft",
    date: "Sep 2015 — Sep 2016",
    company: "GFT Technologies",
    role: "Junior Software Engineer",
    location: "Padova / São Paulo",
    summary: "Software engineering rotation across European and Brazilian offices.",
    bullets: ["Software engineering across European and Brazilian offices."],
    stack: ["Java", "JavaScript"],
  },
  {
    id: "sascar",
    date: "May 2014 — Dec 2014",
    company: "Sascar (Michelin Group)",
    role: "Junior Software Engineer",
    location: "São Paulo",
    summary: "First industry role — fleet management telemetry platform.",
    bullets: ["First industry role — fleet management telemetry platform."],
    stack: ["JavaScript"],
  },
];

export const MONO_MAP: Record<CompanyId, string> = {
  essent: "E",
  webcraft: "W",
  vwpfs: "V",
  monks: "M",
  jumbo: "J",
  klm: "K",
  techifide: "T",
  gft: "G",
  sascar: "S",
};
