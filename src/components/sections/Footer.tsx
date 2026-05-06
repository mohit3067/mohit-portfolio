import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/data/contact";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 mt-16">
      <div className="container-tight px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg overflow-hidden shadow-glow">
            <img 
              src="/logo.png" 
              alt="Mohit Logo" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-sm">
            <p className="font-display font-semibold">{CONTACT.name}</p>
            <p className="text-muted-foreground text-xs">{CONTACT.title}</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} — Crafted with Flutter energy & React.
        </p>

        <div className="flex gap-2">
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label="Email"
            className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition-colors"
          >
            <Mail size={15} />
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition-colors"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
};
