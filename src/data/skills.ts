export type SkillIcon = "code" | "hex" | "cloud" | "activity";

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  group: string;
  icon: SkillIcon;
  items: SkillItem[];
}

export const SKILLS: SkillGroup[] = [
  {
    group: "Languages & Frameworks",
    icon: "code",
    items: [
      { name: "TypeScript", level: 0.97 },
      { name: "Node.js", level: 0.94 },
      { name: "React / Next.js", level: 0.93 },
      { name: "GraphQL (SDL)", level: 0.9 },
      { name: "SQL", level: 0.85 },
    ],
  },
  {
    group: "Architecture & Modelling",
    icon: "hex",
    items: [
      { name: "Domain-Driven Design", level: 0.92 },
      { name: "Event-Driven · Kafka", level: 0.88 },
      { name: "Event Storming · Example Mapping", level: 0.9 },
      { name: "Spec-Driven Development", level: 0.92 },
      { name: "SAFe · Scrum", level: 0.85 },
    ],
  },
  {
    group: "Cloud & Serverless",
    icon: "cloud",
    items: [
      { name: "AWS Lambda · AppSync · CDK", level: 0.95 },
      { name: "DynamoDB · S3 · Cognito", level: 0.92 },
      { name: "Terraform", level: 0.9 },
      { name: "GCP · Vertex AI · BigQuery", level: 0.75 },
    ],
  },
  {
    group: "Quality & AI",
    icon: "activity",
    items: [
      { name: "Jest · Puppeteer · Cucumber", level: 0.92 },
      { name: "TDD", level: 0.88 },
      { name: "Vertex AI · RAG · LangChain", level: 0.85 },
      { name: "Agentic AI workflows", level: 0.88 },
      { name: "Datadog · Grafana", level: 0.82 },
    ],
  },
];
