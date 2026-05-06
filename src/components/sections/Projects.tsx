import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TechIcon } from "@/components/common/TechIcon";
import { useProjects } from "@/hooks/useProjects";
import { skills as allSkills } from "@/data/portfolio";

// Map common tech names to simple-icons brand metadata.
const techMeta: Record<string, { icon?: string; color?: string }> = Object.fromEntries(
  allSkills.map((s) => [s.name.toLowerCase(), { icon: s.icon, color: s.color?.replace("#", "") }])
);
// Manual extras used in project tech stacks
Object.assign(techMeta, {
  flutter: { icon: "flutter", color: "54C5F8" },
  dart: { icon: "dart", color: "0175C2" },
  firebase: { icon: "firebase", color: "FFCA28" },
  "rest apis": { icon: "fastapi", color: "009688" },
  nfc: { icon: "nfc", color: "003366" },
  ble: { icon: "bluetooth", color: "0082FC" },
  maps: { icon: "googlemaps", color: "4285F4" },
  ml: { icon: "tensorflow", color: "FF6F00" },
  camera: { icon: "googlelens", color: "4285F4" },
  razorpay: { icon: "razorpay", color: "0C2451" },
  "zoho salesiq": { icon: "zoho", color: "E42527" },
  "zoho desk": { icon: "zoho", color: "E42527" },
  "speech-to-text": { icon: "googleassistant", color: "4285F4" },
  sqlite: { icon: "sqlite", color: "003B57" },
  supabase: { icon: "supabase", color: "3ECF8E" },
  getx: {},
});

export const Projects = () => {
  const { projects, loading, source } = useProjects();
  const [filter, setFilter] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.category && set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  );

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-tight">
        <Reveal>
          <SectionHeader
            eyebrow="04 — Projects"
            title="12+ apps shipped to the stores."
            subtitle={
              source === "firestore"
                ? "Live from Firestore — updated in real time."
                : "Real production work across e-commerce, IoT, social, NFC, transit and government."
            }
          />
        </Reveal>

        {/* Filter chips */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all ${
                  filter === c
                    ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                    : "border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass-card p-6 h-72 animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {visible.map((p) => (
              <motion.article
                key={p.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                className="glass-card group relative p-6 flex flex-col overflow-hidden"
              >
                {/* hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at top right, hsl(var(--primary) / 0.18), transparent 60%)",
                  }}
                />

                {/* Header row: icon + featured */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    {p.iconSrc ? (
                      <div className="h-14 w-14 rounded-2xl overflow-hidden ring-1 ring-border/80 shadow-[0_8px_22px_-6px_rgba(0,0,0,0.55)] shrink-0">
                        <img
                          src={p.iconSrc}
                          alt={`${p.title} icon`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground font-display font-semibold text-lg shrink-0">
                        {p.title.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold leading-tight truncate">
                        {p.title}
                      </h3>
                      {p.category && (
                        <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5">
                          {p.category}
                        </p>
                      )}
                    </div>
                  </div>

                  {p.featured && (
                    <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-gradient-primary text-primary-foreground shadow-glow">
                      <Sparkles size={10} /> Featured
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>

                {/* Tech stack with icons */}
                <ul className="flex flex-wrap gap-1.5 mb-5">
                  {p.techStack.map((t) => {
                    const meta = techMeta[t.toLowerCase()] ?? {};
                    return (
                      <li
                        key={t}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-secondary/60 border border-border/60 text-muted-foreground"
                      >
                        <TechIcon slug={meta.icon} color={meta.color} size={12} alt={t} />
                        {t}
                      </li>
                    );
                  })}
                </ul>

                {/* Store buttons */}
                <div className="flex flex-wrap items-center gap-2 mt-auto">
                  {p.playStoreUrl && (
                    <a
                      href={p.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full glass gradient-border text-xs font-medium hover:text-primary transition-colors"
                    >
                      <TechIcon slug="googleplay" color="34A853" size={12} alt="Play Store" />
                      Play Store
                    </a>
                  )}
                  {p.appStoreUrl && (
                    <a
                      href={p.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full glass gradient-border text-xs font-medium hover:text-primary transition-colors"
                    >
                      <TechIcon slug="appstore" color="FFFFFF" size={12} alt="App Store" />
                      App Store
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-primary text-primary-foreground text-xs font-medium"
                    >
                      Live <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
