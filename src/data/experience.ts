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
      "Led migration of 50+ end-to-end tests from deprecated Protractor to WebdriverIO in a Next.js stack, cutting execution time 30% and significantly improving test stability.",
      "Integrated automated end-to-end regression and smoke suites into Screwdriver CI/CD pipelines as pull request and pre-release checks, reducing production regressions ~20%.",
      "Triaged 300+ defects, including high-severity production bugs, debugging with browser DevTools, network logs, and source code to pinpoint root causes and speed up developer fixes.",
      "Accelerated end-to-end test authoring in WebdriverIO with AI-assisted test generation (GitHub Copilot), reviewing and refining generated tests to expand coverage across Yahoo Sports web and mobile.",
      "Wrote test plans and test cases for Yahoo Sports releases, running cross-browser and cross-device testing across Chrome, Safari, Firefox, iOS, and Android to catch platform-specific defects before launch.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Yahoo Sports",
    period: "May 2022 – Nov 2023",
    bullets: [
      "Built and unit tested 20+ reusable, accessible React components serving millions of monthly Yahoo Sports users across boxscores, standings, and live data visualizations.",
      "Integrated GraphQL and REST APIs into the frontend to power live game data on high-traffic Yahoo Sports pages, optimizing data fetching and client-side caching for faster page loads.",
      "Shipped 80+ frontend features and fixes across 2-week Agile sprints, partnering with product managers, designers, and backend engineers from spec through code review and release.",
      "Refactored legacy JavaScript modules into modern, modular code with Jest coverage, cutting technical debt and regression risk.",
      "Implemented accessibility improvements (ARIA labels, keyboard navigation) and responsive layouts across desktop, tablet, and mobile web to meet WCAG guidelines.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company: "AppFolio, Inc",
    period: "Aug 2020 – Sep 2021",
    bullets: [
      "Performed root cause analysis on 100+ escalated production defects, assigning severity and priority in Salesforce and partnering with engineers to verify fixes before release.",
      "Resolved 1,500+ technical cases at ~95% CSAT, using exploratory testing on complex accounting and leasing workflows to separate product defects from configuration and user error.",
    ],
  },
];
