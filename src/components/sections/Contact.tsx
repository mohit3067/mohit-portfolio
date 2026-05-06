import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { CONTACT } from "@/data/contact";

export const Contact = () => {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key"
      );
      setStatus("success");
      setName("");
      setFrom("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-tight">
        <Reveal>
          <SectionHeader
            eyebrow="06 — Contact"
            title="Have a product to build? Let's talk."
            subtitle="Open to full-time roles, contract work and interesting startup opportunities."
          />
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="glass-card p-7 h-full flex flex-col gap-5">
              <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow shrink-0">
                  <Mail size={18} className="text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <p className="font-medium group-hover:text-primary transition-colors break-all">
                    {CONTACT.email}
                  </p>
                </div>
              </a>

              <a href={CONTACT.phoneHref} className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-xl glass grid place-items-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Phone
                  </p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {CONTACT.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl glass grid place-items-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Location
                  </p>
                  <p className="font-medium">{CONTACT.location}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 flex gap-2">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="h-10 w-10 grid place-items-center rounded-full glass hover:text-primary transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 grid place-items-center rounded-full glass hover:text-primary transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form ref={formRef} onSubmit={onSubmit} className="glass-card p-7 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="grid gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Your name
                  </span>
                  <input
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 rounded-lg bg-secondary/60 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="Jane Recruiter"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Your email
                  </span>
                  <input
                    type="email"
                    required
                    value={from}
                    name="email"
                    onChange={(e) => setFrom(e.target.value)}
                    className="px-4 py-3 rounded-lg bg-secondary/60 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-secondary/60 border border-border/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </label>

              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <button
                type="submit"
                disabled={isSending}
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-violet transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {isSending ? "Sending..." : "Send message"}
              </button>

              {status === "success" && (
                <p className="text-xs text-green-400 text-center font-medium animate-in fade-in slide-in-from-top-1">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 text-center font-medium animate-in fade-in slide-in-from-top-1">
                  Failed to send message. Please try again or use the email link.
                </p>
              )}

              <p className="text-xs text-muted-foreground text-center">
                Messages are sent directly to my inbox via EmailJS.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
