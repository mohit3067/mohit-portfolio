type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export const SectionHeader = ({ eyebrow, title, subtitle, align = "left" }: Props) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <header className={`mb-14 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
      )}
    </header>
  );
};
