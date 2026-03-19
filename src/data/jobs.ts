export interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  duration: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
}

export const jobs: Job[] = [
  {
    company: "Essent",
    location: "Den Bosch, NL",
    role: "DevOps Cloud Engineer",
    period: "Jan 2025 — Present",
    duration: "∞",
    current: true,
    bullets: [
      "Lead cross-team Testing Community of Interest, defining strategy and coaching across squads.",
      "Facilitate DDD-driven collaboration between domain teams to solve API integration challenges.",
      "Manage AWS cloud infrastructure with CDK and CI/CD pipelines for scalable releases.",
      "Lead Event Storming and Example Mapping sessions to align business goals with implementation.",
    ],
    tags: ["AWS", "CDK", "CI/CD", "DDD", "Event Storming", "Testing"],
  },
  {
    company: "Volkswagen Pon FS",
    location: "Amersfoort, NL",
    role: "IT Cloud Engineer",
    period: "Aug 2023 — Jan 2025",
    duration: "1:06",
    bullets: [
      "Developed scalable cloud solutions across multiple Volkswagen affiliates.",
      "Engineered GraphQL services with AWS AppSync, Lambda, S3, and DynamoDB.",
      "Implemented automated testing with Jest for continuous integration pipelines.",
      "Managed infrastructure with Terraform and Amazon CDK (TypeScript).",
    ],
    tags: ["AWS", "AppSync", "GraphQL", "Lambda", "Terraform", "Jest", "TypeScript"],
  },
  {
    company: "Formula.Monks",
    location: "Remote, USA",
    role: "Senior Engineer / Team Lead",
    period: "Jul 2022 — Jun 2024",
    duration: "1:11",
    bullets: [
      "Built integration saving ~$10K by eliminating third-party vendor dependency.",
      "Pioneered AI-powered chat with Vertex AI and RAG for context-aware responses.",
      "Implemented ML workflows with Vertex AI, BigQuery, and AutoML models.",
    ],
    tags: ["Vertex AI", "RAG", "BigQuery", "AutoML", "GCP", "LangChain"],
  },
  {
    company: "Jumbo Supermarkten",
    location: "Veghel, NL",
    role: "Solutions Engineer",
    period: "Oct 2019 — Jul 2022",
    duration: "2:09",
    bullets: [
      "Migrated legacy system to SSR Nuxt application with Microservices and GraphQL.",
      "Led the customer Refund Project, managing two other engineers.",
      "Engineered consistency across Promotions, Orders, and Basket projects.",
    ],
    tags: ["Nuxt", "Vue", "GraphQL", "Microservices", "Node.js"],
  },
  {
    company: "KLM Royal Dutch Airlines",
    location: "Amstelveen, NL",
    role: "Senior Frontend Engineer",
    period: "Oct 2018 — Oct 2019",
    duration: "1:00",
    bullets: [
      "Worked in Sales Team following Scrum/Agile with 6 collaborators.",
      "Developed Angular application with GraphQL integration.",
      "Introduced the Design System integration from the Design Team.",
    ],
    tags: ["Angular", "GraphQL", "Scrum", "Design Systems"],
  },
  {
    company: "Techifide",
    location: "London, UK (Remote)",
    role: "Medior Software Engineer",
    period: "Sep 2016 — Oct 2018",
    duration: "2:01",
    bullets: [
      "Developed project from scratch for managing employers and BIM projects.",
      "Worked in async remote startup environment.",
      "Built frontend with Angular and backend with Node.js.",
    ],
    tags: ["Angular", "Node.js", "BIM", "Startup"],
  },
  {
    company: "GFT Technologies",
    location: "Padova, IT / Sao Paulo",
    role: "Junior Software Engineer",
    period: "Sep 2015 — Sep 2016",
    duration: "1:00",
    bullets: [
      "Started Java Springboot project with Primefaces in Padova, Italy.",
      "Frontend consulting for Deutsche Bank using Angular 1.6.",
      "Worked with international team applying Scrum for clients like Alba Leasing.",
    ],
    tags: ["Java", "Springboot", "Angular", "Scrum"],
  },
  {
    company: "Sascar (Michelin Group)",
    location: "Sao Paulo, Brazil",
    role: "Junior Software Engineer",
    period: "May 2014 — Dec 2014",
    duration: "0:07",
    bullets: [
      "Support and data analysis for tracking system preventing thefts.",
      "Created layouts for internal web system and dashboards.",
    ],
    tags: ["Data Analysis", "Dashboards", "Web Development"],
  },
];
