export type EduLogoId = "illinois" | "byu";

export interface EducationEntry {
  degree: string;
  school: string;
  date: string;
  logo: EduLogoId;
}

export const EDUCATION: EducationEntry[] = [
  {
    degree: "M.Sc. in Management (iMSM)",
    school: "University of Illinois Urbana-Champaign",
    date: "Jul 2023 — Jul 2024",
    logo: "illinois",
  },
  {
    degree: "B.S. in Applied Technology",
    school: "Brigham Young University, Idaho",
    date: "2016 — 2022",
    logo: "byu",
  },
];
