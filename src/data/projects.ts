export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
  category: "fullstack" | "automation" | "data";
}

export const projects: Project[] = [
  {
    slug: "nba-shot-chart",
    title: "NBA Shot Chart & Player Database",
    subtitle: "Full-stack",
    description:
      "Interactive shot heat maps with real NBA data. Explore shooting percentages by zone, compare players, and view historical trends.",
    details: [
      "D3.js heat map rendering optimized for thousands of data points",
      "Flask REST API serving player data from SQLite via nba_api",
      "Filter by player, season, and shot zone",
      "Responsive layouts across desktop and mobile",
    ],
    tech: ["React", "D3.js", "Flask", "SQLite", "Python"],
    liveUrl: "https://nba-shotchart.vercel.app/",
    githubUrl: "https://github.com/wesleycheungg/nba-shotchart",
    image: "/images/projects/nbashotchart.png",
    featured: true,
    category: "fullstack",
  },
  {
    slug: "nba-trade-machine",
    title: "NBA Trade Machine",
    subtitle: "Full-stack",
    description:
      "Salary cap calculator with CBA compliance validation and multi-team trade support. Complex state management with real-time rule checking.",
    details: [
      "Implements 125% trade rule, taxpayer MLE, and trade exceptions",
      "Multi-team trades with real-time validation feedback",
      "Complex Redux state management for trade scenarios",
    ],
    tech: ["React", "TypeScript", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/images/projects/nba-trade-machine.png",
    featured: true,
    category: "fullstack",
  },
  {
    slug: "pong-ping",
    title: "Ping Pong Leaderboard",
    subtitle: "Full-stack",
    description:
      "Real-time Elo-based ping pong leaderboard for you and your friends. Log matches, track rankings, view player profiles, and see who's on a hot streak.",
    details: [
      "Elo rating system — beating a higher-ranked player earns proportionally more points",
      "Real-time sync via Firebase Firestore across all devices instantly",
      "Player profile modals with Recharts Elo history line chart and win streak stats",
      "Streak indicators and rank tiers from Rookie to Grand Master",
      "Full test suite with Vitest unit tests and Playwright E2E coverage",
    ],
    tech: ["React", "Firebase", "Vite", "Recharts", "Playwright", "Vitest"],
    liveUrl: "https://pong-ping-pied.vercel.app/",
    githubUrl: "https://github.com/wesleycheungg/pong-ping",
    image: "/images/projects/pongping.png",
    featured: true,
    category: "fullstack",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
