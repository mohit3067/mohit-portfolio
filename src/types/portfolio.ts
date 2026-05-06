export type Platform = "playstore" | "appstore" | "both";

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  /** Imported icon module (preferred). */
  iconSrc?: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  platform?: Platform;
  category?: string;
  featured?: boolean;
  priority?: number;
  createdAt?: number;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  highlight?: string;
};

export type SkillCategory =
  | "Mobile"
  | "Languages"
  | "Backend"
  | "Web"
  | "Database"
  | "Tools"
  | "Integrations";

export type Skill = {
  name: string;
  category: SkillCategory;
  /** simple-icons slug, see https://simpleicons.org */
  icon?: string;
  /** Optional brand color override (hex). */
  color?: string;
};
