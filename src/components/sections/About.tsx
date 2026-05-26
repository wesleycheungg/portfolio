import { FadeIn } from "@/components/ui/FadeIn";

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Tests Migrated" },
  { value: "80+", label: "Changes Shipped" },
];

export function About() {
  return (
    <section id="about" className="pb-20 scroll-mt-24">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: everything */}
          <div>
            <div className="flex items-center gap-2 mb-5 text-content-tertiary">
              <UserIcon />
              <span className="text-xs uppercase tracking-label">Discovery</span>
            </div>

            <h2 className="text-4xl font-semibold tracking-tight mb-10">
              About <span className="text-content-secondary">The Engineer</span>
            </h2>

            <blockquote className="border-l-2 border-border-subtle pl-6 mb-10">
              <p className="text-[15px] text-content-secondary leading-loose italic">
                Frontend engineer turned SDET. I led QA modernization at Yahoo
                Sports — migrating test suites, building mobile automation from
                scratch, and shipping 80+ frontend changes. I partner with
                engineers at a technical level because I've been one.
              </p>
            </blockquote>

            <div className="flex">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`pr-8 ${i > 0 ? "pl-8 border-l border-border-subtle" : ""}`}
                >
                  <div className="text-3xl font-semibold tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs text-content-tertiary mt-1 uppercase tracking-label">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: photo */}
          <div className="relative rounded-lg overflow-hidden border border-border-subtle bg-surface-secondary min-h-[480px] h-full">
            <img
              src={`${import.meta.env.BASE_URL}photo.jpg`}
              alt="Wesley Cheung"
              className="w-full h-full object-cover absolute inset-0"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
