import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Code2, Smartphone, Sparkles } from "lucide-react";
import mohitPhoto from "@/assets/mohit.jpg";

const stats = [
  { value: "4+", label: "Years building Flutter apps" },
  { value: "12+", label: "Production apps shipped" },
  { value: "5", label: "Domains: e-com, IoT, social, gov, transit" },
];

const pillars = [
  {
    icon: Smartphone,
    title: "Flutter specialist",
    body: "Flutter, Dart, GetX, Provider/Bloc, NFC, BLE and offline-first patterns. I think in pixels, frame budgets and clean architecture.",
  },
  {
    icon: Code2,
    title: "Backend & integration aware",
    body: "Comfortable with Firebase, Supabase, Node.js, REST and SQL. Hands-on with Zoho SalesIQ, Zoho Desk, Razorpay and Arduino-driven IoT.",
  },
  {
    icon: Sparkles,
    title: "Product mindset",
    body: "From IoT pet care to multi-app marketplaces and government audit systems — I care about UX, performance and the team that ships it.",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-tight">
        <Reveal>
          <SectionHeader
            eyebrow="01 — About"
            title="Engineer who turns ideas into apps people actually use."
            subtitle="I build mobile products with the polish of a consumer app and the discipline of a system that scales."
          />
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 mb-12 items-center">
          <Reveal className="lg:col-span-4">
            <div className="relative mx-auto lg:mx-0 w-56 md:w-64 aspect-square">
              <div
                className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)/0.6), hsl(var(--accent)/0.6))",
                }}
              />
              <div className="relative rounded-[1.75rem] p-[2px] bg-gradient-primary shadow-glow">
                <img
                  src={mohitPhoto}
                  alt="Mohit Ghevariya"
                  className="rounded-[1.65rem] w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-6">
                  <div className="font-display text-4xl font-semibold gradient-text">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              B.E. IT from Government Engineering College, Bhavnagar (CGPA 8.30). Currently
              Mobile Engineer at <span className="text-foreground font-medium">Hoora — Vehicle 360</span>,
              previously Star Performer of the Quarter at TST Technology. I've shipped 12+
              apps to Google Play and the App Store.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="glass-card p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow mb-4">
                  <p.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
