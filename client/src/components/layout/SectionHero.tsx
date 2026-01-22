import { Container } from "./Container";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface SectionHeroProps {
  /** Section label displayed above the title (e.g., "Live Events", "Partnerships") */
  label?: string;
  /** Main title - can include line breaks with \n */
  title: string;
  /** Word in the title to highlight in primary color (will match first occurrence) */
  highlightWord?: string;
  /** Description text below the title */
  description?: string;
  /** Breadcrumb navigation items */
  breadcrumbs?: Breadcrumb[];
  /** Hero height variant */
  size?: "default" | "tall" | "short";
  /** Text alignment */
  align?: "left" | "center";
  /** Optional children for CTAs or other content */
  children?: React.ReactNode;
  /** Additional className */
  className?: string;
}

/**
 * SectionHero - Consistent hero component for dropdown section pages
 *
 * Use this for all pages within a dropdown menu section (Events, Sponsors, etc.)
 * to maintain visual consistency across subsections.
 */
export function SectionHero({
  label,
  title,
  highlightWord,
  description,
  breadcrumbs,
  size = "default",
  align = "center",
  children,
  className,
}: SectionHeroProps) {
  // Process title to highlight specific word
  const renderTitle = () => {
    if (!highlightWord) {
      return title.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          {i < title.split("\n").length - 1 && <br />}
        </span>
      ));
    }

    const parts = title.split(highlightWord);
    return parts.map((part, i) => (
      <span key={i}>
        {part.split("\n").map((line, j) => (
          <span key={j}>
            {line}
            {j < part.split("\n").length - 1 && <br />}
          </span>
        ))}
        {i < parts.length - 1 && <span className="text-primary">{highlightWord}</span>}
      </span>
    ));
  };

  const sizeClasses = {
    short: "min-h-[40vh]",
    default: "min-h-[50vh]",
    tall: "min-h-[60vh]",
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        sizeClasses[size],
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

      {/* Angular accent shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/10 transform -skew-x-12 origin-top-right" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 transform -skew-x-12 origin-top-right translate-x-20" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-24">
        <div className={cn("max-w-4xl mx-auto text-center", align === "left" && "text-left mx-0")}>
          {/* Label */}
          {label && (
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">
              {label}
            </p>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-6">
            {renderTitle()}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={cn(
                "text-lg md:text-xl text-neutral-400 leading-relaxed",
                align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
              )}
            >
              {description}
            </p>
          )}

          {/* Children (CTAs, etc.) */}
          {children && (
            <div className={cn("mt-8", align === "center" && "flex justify-center")}>
              {children}
            </div>
          )}
        </div>
      </Container>

      {/* Bottom red accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
}
