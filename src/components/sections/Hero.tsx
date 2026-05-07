import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { PhoneMockup } from "@/components/common/PhoneMockup";
import { CONTACT } from "@/data/contact";
import { useRemoteConfig } from "@/hooks/useRemoteConfig";

export const Hero = () => {
  const { resumeUrl } = useRemoteConfig();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-tight px-6 md:px-10 lg:px-16 relative grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse shadow-glow" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text gradient-text-wavy">Mohit Ghevariya</span>
            <br />
            <span className="text-foreground/90">Building scalable</span>{" "}
            <span className="gradient-text gradient-text-wavy">mobile experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Mobile Engineer & Flutter Developer with 3+ years shipping 12+ production
            apps across e-commerce, IoT, social media, real-time communication and
            government systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              {CONTACT.location}
            </span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail size={14} className="text-primary" />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone size={14} className="text-primary" />
              {CONTACT.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-violet transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass gradient-border font-medium hover:bg-secondary/60 transition-colors"
            >
              <Download size={16} />
              View Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right: phone mockup */}
        <div className="lg:col-span-5 relative h-[560px] md:h-[640px] lg:h-[680px]">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};
