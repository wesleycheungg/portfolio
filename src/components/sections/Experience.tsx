import { FadeIn } from "@/components/ui/FadeIn";
import { experience, type Experience } from "@/data/experience";

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="bg-surface-secondary border border-border-subtle rounded-lg p-6 w-full">
      <h3 className="text-lg font-semibold tracking-tight mb-1">{exp.title}</h3>
      <div className="flex items-center gap-1.5 text-content-secondary text-sm mb-5">
        <BuildingIcon />
        <span>{exp.company}</span>
      </div>
      <ul className="space-y-2.5">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-content-secondary leading-relaxed">
            <ChevronIcon />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DateBadge({ period }: { period: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs text-content-secondary border border-border-subtle rounded-full px-3 py-1.5">
      <CalendarIcon />
      <span>{period}</span>
    </div>
  );
}

export function Experience() {
  return (
    <section id="work" className="pb-20 scroll-mt-24">
      {/* Section heading with lines */}
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="text-sm font-medium px-5 py-2 bg-content-primary text-surface-primary rounded-full tracking-tight whitespace-nowrap">
            Professional Journey
          </span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
      </FadeIn>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical center line (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle -translate-x-1/2" />

        {experience.map((exp, i) => {
          const isRight = i % 2 === 0;
          return (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative mb-20 last:mb-0">

                {/* Desktop: alternating two-column layout */}
                <div className="hidden lg:grid lg:grid-cols-2">
                  {/* Center icon */}
                  <div className="absolute left-1/2 top-5 -translate-x-1/2 z-10 w-9 h-9 bg-surface-secondary border border-border-subtle rounded-md flex items-center justify-center text-content-tertiary">
                    <BriefcaseIcon />
                  </div>

                  {/* Left cell */}
                  <div className="pr-14 flex items-center justify-end">
                    {isRight
                      ? <DateBadge period={exp.period} />
                      : <ExperienceCard exp={exp} />}
                  </div>

                  {/* Right cell */}
                  <div className="pl-14 flex items-center">
                    {isRight
                      ? <ExperienceCard exp={exp} />
                      : <DateBadge period={exp.period} />}
                  </div>
                </div>

                {/* Mobile: simple stacked layout */}
                <div className="lg:hidden">
                  <div className="flex items-center gap-2 text-content-tertiary mb-3">
                    <CalendarIcon />
                    <span className="text-xs">{exp.period}</span>
                  </div>
                  <ExperienceCard exp={exp} />
                </div>

              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
