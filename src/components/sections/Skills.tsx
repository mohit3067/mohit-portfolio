import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TechIcon } from "@/components/common/TechIcon";
import { skills } from "@/data/portfolio";
import type { SkillCategory } from "@/types/portfolio";

const categories: SkillCategory[] = [
  "Mobile",
  "Languages",
  "Backend",
  "Database",
  "Web",
  "Integrations",
  "Tools",
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-tight">
        <Reveal>
          <SectionHeader
            eyebrow="03 — Skills"
            title="The toolkit I reach for."
            subtitle="Mobile-first with Flutter, but at home across the stack — backend, integrations, IoT and tooling."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, ci) => {
            const items = skills.filter((s) => s.category === cat);
            if (!items.length) return null;
            return (
              <Reveal key={cat} delay={ci * 0.05}>
                <div className="glass-card p-5 h-full">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/80 mb-4">
                    {cat}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <li
                        key={`${cat}-${s.name}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-secondary/60 border border-border/60 hover:border-primary/60 hover:text-primary hover:-translate-y-0.5 transition-all"
                      >
                        <TechIcon
                          slug={s.icon}
                          color={s.color?.replace("#", "")}
                          size={14}
                          alt={s.name}
                        />
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
