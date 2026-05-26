export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Automation",
    items: ["WebdriverIO", "Playwright", "Detox"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "TypeScript", "Next.js"],
  },
  {
    title: "Backend",
    items: ["Python", "Flask", "SQL", "GraphQL"],
  },
  {
    title: "AI Tools",
    items: ["Claude Code", "Copilot"],
  },
];
