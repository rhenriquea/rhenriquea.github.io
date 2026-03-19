export interface Degree {
  type: string;
  degree: string;
  school: string;
  date: string;
  level: string;
  featured?: boolean;
}

export interface Certificate {
  icon: string;
  name: string;
  detail: string;
}

export const degrees: Degree[] = [
  {
    type: "Master's degree",
    degree: "MSc in Management (iMSM)",
    school: "University of Illinois Urbana-Champaign",
    date: "July 2023 — July 2024",
    level: "Wetenschappelijk Onderwijs",
    featured: true,
  },
  {
    type: "Bachelor's degree",
    degree: "B.S. in Applied Technology",
    school: "Brigham Young University, Idaho",
    date: "Summer 2016 — Winter 2022",
    level: "Hoger Beroepsonderwijs",
  },
  {
    type: "Technical degree",
    degree: "Mechatronic Technician",
    school: "Paula Souza Center, Sao Paulo",
    date: "Sept 2008 — Dec 2010",
    level: "Middelbaar Beroepsonderwijs",
  },
];

export const certificates: Certificate[] = [
  { icon: "📋", name: "Google Project Management", detail: "Coursera — March 2022" },
  { icon: "🔄", name: "Applied Scrum for PM", detail: "Univ. of Maryland — June 2019" },
  { icon: "🖥️", name: "Web Frontend", detail: "BYU-Idaho — July 2022" },
  { icon: "🎨", name: "Graphic Design", detail: "BYU-Idaho — July 2022" },
  { icon: "⚙️", name: "Web Development", detail: "BYU-Idaho — July 2022" },
];
