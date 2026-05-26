import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="pb-16">
      <FadeIn>
        <SectionHeading label="Stack" />
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="text-[13px] font-medium mb-3">{group.title}</h3>
              <div className="text-[13px] text-content-secondary leading-loose">
                {group.items.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
