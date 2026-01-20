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
  align = "left",
  children,
  className,
}: SectionHeroProps) {
  // Process title to highlight specific word
  const renderTitle = () => {
    if (!highlightWord) {
      return title.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < title.split('\n').length - 1 && <br />}
        </span>
      ));
    }

    const parts = title.split(highlightWord);
    return parts.map((part, i) => (
      <span key={i}>
        {part.split('\n').map((line, j) => (
          <span key={j}>
            {line}
            {j < part.split('\n').length - 1 && <br />}
          </span>
        ))}
        {i < parts.length - 1 && (
          <span className="text-primary">{highlightWord}</span>
        )}
      </span>
    ));
  };

  const sizeClasses = {
    short: "min-h-[40vh]",
    default: "min-h-[50vh]",
    tall: "min-h-[60vh]",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  return (
    <section className={cn(
      "relative flex items-center overflow-hidden",
      sizeClasses[size],
      className
    )}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />
      
      {/* Angular accent shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/10 transform -skew-x-12 origin-top-right" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 transform -skew-x-12 origin-top-right translate-x-20" />
      
      {/* Horizontal accent lines */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-primary to-transparent" />
      <div className="absolute top-1/3 left-0 w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} 
      />

      <Container className="relative z-10 py-20 md:py-28">
        <div className={cn("max-w-4xl", alignClasses[align])}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-slate-500 text-sm mb-6" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-primary transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-400">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight size={14} aria-hidden="true" />
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Label */}
          {label && (
            <div className={cn(
              "flex items-center gap-4 mb-6",
              align === "center" && "justify-center"
            )}>
              <div className="h-px flex-1 max-w-16 bg-primary" />
              <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                {label}
              </span>
              {align === "center" && <div className="h-px flex-1 max-w-16 bg-primary" />}
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white leading-[0.9] mb-8">
            {renderTitle()}
          </h1>
          
          {/* Description */}
          {description && (
            <p className={cn(
              "text-xl md:text-2xl text-slate-400 leading-relaxed font-light",
              align === "left" ? "max-w-2xl" : "max-w-2xl mx-auto"
            )}>
              {description}
            </p>
          )}

          {/* Children (CTAs, etc.) */}
          {children && (
            <div className={cn("mt-10", align === "center" && "flex justify-center")}>
              {children}
            </div>
          )}
        </div>
      </Container>

      {/* Bottom edge accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
