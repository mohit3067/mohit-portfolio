import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { experiences } from "@/data/portfolio";
import { Briefcase, MapPin, Sparkles } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-tight">
        <Reveal>
          <SectionHeader
            eyebrow="02 — Experience"
            title="Three companies. Real shipping work."
            subtitle="From internships to leading delivery-partner platforms — every role focused on production-grade Flutter."
          />
        </Reveal>

        <ol className="relative border-l border-border/60 ml-3 space-y-10">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.company} delay={i * 0.08} className="pl-8 relative">
              <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-gradient-primary shadow-glow grid place-items-center">
                <Briefcase size={10} className="text-primary-foreground" />
              </span>

              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-2xl font-semibold">{exp.company}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                  <p className="text-primary text-sm font-medium">{exp.role}</p>
                  {exp.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  )}
                </div>

                {exp.highlight && (
                  <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full glass gradient-border text-xs">
                    <Sparkles size={12} className="text-accent" />
                    {exp.highlight}
                  </div>
                )}

                <ul className="space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
