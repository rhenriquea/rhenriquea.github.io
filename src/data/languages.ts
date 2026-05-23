export type FlagId = "br" | "gb" | "nl" | "es";

export interface LanguageEntry {
  name: string;
  lvl: string;
  bars: number;
  flag: FlagId;
}

export const LANGUAGES: LanguageEntry[] = [
  { name: "Portuguese", lvl: "Native", bars: 5, flag: "br" },
  { name: "English", lvl: "C1 · Fluent", bars: 5, flag: "gb" },
  { name: "Dutch", lvl: "B1 · Intermediate", bars: 3, flag: "nl" },
  { name: "Spanish", lvl: "Basic", bars: 2, flag: "es" },
];
