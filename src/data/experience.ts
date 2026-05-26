export interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    title: "Software Test Engineer",
    company: "Yahoo Sports",
    period: "Mar 2024 – Mar 2026",
    bullets: [
      "Migrated 50+ E2E tests from Protractor to WebdriverIO, achieving ~35–40% faster execution and improved stability",
      "Integrated automated test suites into CI/CD pipelines, reducing production regressions by ~30%",
      "Identified and triaged 400+ defects including high-severity production bugs across Yahoo Sports surfaces",
      "Executed manual and exploratory testing across web and mobile (iOS & Android) ahead of each release",
    ],
  },
  {
    title: "Software Engineer",
    company: "Yahoo Sports",
    period: "May 2022 – Nov 2023",
    bullets: [
      "Built 20+ reusable React/Flux components powering core features for millions of monthly users",
      "Shipped 80+ frontend changes — features, bug fixes, and tech improvements — in an Agile environment",
      "Integrated SQL and GraphQL backends for real-time data, improving load performance on high-traffic pages",
      "Led Yahoo Sports Australia frontend migration to redesigned platform across desktop, tablet, and mobile",
      "Refactored legacy modules, cutting render times on key pages by ~20%",
    ],
  },
  {
    title: "Customer Care Representative",
    company: "AppFolio",
    period: "Aug 2020 – Sep 2021",
    bullets: [
      "Reproduced and diagnosed 100+ escalated defects, delivering clear steps that accelerated engineering fix turnaround",
      "Resolved 1,500+ technical cases at ~95% customer satisfaction across complex property management workflows",
      "Onboarded new CCRs through hands-on product training and process documentation",
      "Directed queue and case triage to prioritize high-impact issues and reduce resolution times",
    ],
  },
];
