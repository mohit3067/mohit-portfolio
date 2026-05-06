import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Rocket, ShieldCheck, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Ship-ready, day one",
    body: "I've owned apps end-to-end — from architecture and CI to release. No long ramp-up.",
  },
  {
    icon: ShieldCheck,
    title: "Production-quality code",
    body: "Strong typing, testable structure, and refactors that pay back. I've cleaned up legacy stacks.",
  },
  {
    icon: Users,
    title: "Cross-team operator",
    body: "Worked with hardware, design, backend and ops. Comfortable in startup chaos and structured teams.",
  },
  {
    icon: Zap,
    title: "Fast and curious",
    body: "Star Performer at TST. I learn what the product needs — NFC, IoT, payments, real-time chat.",
  },
];

export const WhyHire = () => {
  return (
    <section id="why-hire" className="section-padding relative">
      <div className="container-tight">
        <Reveal>
          <SectionHeader
            eyebrow="05 — Why hire me"
            title="What you get when you bring me on the team."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <article className="glass-card p-7 h-full flex gap-5 hover:-translate-y-1 transition-transform">
                <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                  <r.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{r.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
