import { cn } from "@/lib/utils";

type Props = {
  /** simple-icons slug (lowercase, no spaces). e.g. "flutter", "firebase". */
  slug?: string;
  /** Hex without # — overrides default brand color. */
  color?: string;
  size?: number;
  className?: string;
  alt?: string;
};

/**
 * Brand icon via the simple-icons CDN.
 * Falls back to a neutral dot when no slug is provided.
 */
export const TechIcon = ({ slug, color, size = 16, className, alt }: Props) => {
  if (!slug) {
    return (
      <span
        aria-hidden
        className={cn(
          "inline-block rounded-full bg-primary/70",
          className
        )}
        style={{ width: size * 0.45, height: size * 0.45 }}
      />
    );
  }

  const c = (color ?? "").replace("#", "");
  const src = c
    ? `https://cdn.simpleicons.org/${slug}/${c}`
    : `https://cdn.simpleicons.org/${slug}`;

  return (
    <img
      src={src}
      alt={alt ?? slug}
      width={size}
      height={size}
      loading="lazy"
      className={cn("inline-block shrink-0", className)}
      style={{ width: size, height: size }}
    />
  );
};
