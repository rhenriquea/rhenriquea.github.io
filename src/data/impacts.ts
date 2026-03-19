export interface Impact {
  badge: string;
  badgeBg: string;
  borderColor: string;
  metric: string;
  subtitle: string;
  subtitleColor: string;
  decoColor: string;
  tagline: string;
  description: string;
  company: string;
  companyColor: string;
  pulseColor: string;
}

export const impacts: Impact[] = [
  {
    badge: "Hi-Fi Stereo",
    badgeBg: "bg-accent-pink",
    borderColor: "border-accent-pink",
    metric: "~$10K",
    subtitle: "VENDOR ELIMINATED",
    subtitleColor: "text-accent-pink",
    decoColor: "decoration-accent-cyan",
    tagline: '"The one where we didn\'t need the vendor."',
    description:
      "Built an in-house integration that replaced a third-party vendor entirely, saving the company approximately $10,000 and giving full ownership of the pipeline.",
    company: "Formula.Monks — Senior Engineer / Team Lead",
    companyColor: "text-accent-pink",
    pulseColor: "bg-accent-pink/30",
  },
  {
    badge: "AI Master",
    badgeBg: "bg-accent-cyan",
    borderColor: "border-accent-cyan",
    metric: "RAG AI",
    subtitle: "AI-POWERED CHAT",
    subtitleColor: "text-accent-cyan",
    decoColor: "decoration-accent-pink",
    tagline: '"The one where the chatbot got smart."',
    description:
      "Pioneered an AI chat feature using Vertex AI with Retrieval-Augmented Generation, revolutionizing customer interaction with context-aware, intelligent responses.",
    company: "Formula.Monks — Senior Engineer / Team Lead",
    companyColor: "text-accent-cyan",
    pulseColor: "bg-accent-cyan/30",
  },
  {
    badge: "Enterprise",
    badgeBg: "bg-accent-yellow",
    borderColor: "border-accent-yellow",
    metric: "SHIPPED",
    subtitle: "CUSTOMER REFUND SYSTEM",
    subtitleColor: "text-accent-yellow",
    decoColor: "decoration-white",
    tagline: '"The one where customers got their money back."',
    description:
      "Led two engineers to launch Jumbo Supermarkten's customer refund project, migrated legacy systems to SSR Nuxt with microservices and GraphQL architecture.",
    company: "Jumbo Supermarkten — Solutions Engineer",
    companyColor: "text-accent-yellow",
    pulseColor: "bg-accent-yellow/30",
  },
];
