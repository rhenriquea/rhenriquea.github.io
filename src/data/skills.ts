export interface Skill {
  icon: string;
  title: string;
  accentClass: string;
  iconColor: string;
  items: string[];
  level?: string;
}

export const skills: Skill[] = [
  {
    icon: "cloud",
    title: "Cloud & Infra",
    accentClass: "poster-cyan",
    iconColor: "text-accent-cyan",
    items: ["AWS / Azure / GCP", "Kubernetes", "Terraform"],
    level: "LVL 99",
  },
  {
    icon: "code",
    title: "Frontend",
    accentClass: "poster-pink",
    iconColor: "text-accent-pink",
    items: ["React / Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: "database",
    title: "Backend",
    accentClass: "poster-yellow",
    iconColor: "text-accent-yellow",
    items: ["Node.js / Go", "PostgreSQL", "GraphQL"],
  },
  {
    icon: "psychology",
    title: "AI & ML",
    accentClass: "bg-purple-500",
    iconColor: "text-purple-400",
    items: ["LLM Engineering", "Vertex AI", "LangChain"],
  },
  {
    icon: "groups",
    title: "Leadership",
    accentClass: "bg-emerald-500",
    iconColor: "text-emerald-400",
    items: ["Mentoring", "Agile Flow", "Architecture"],
  },
];
