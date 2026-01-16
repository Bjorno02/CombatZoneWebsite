import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string;
  variant?: "gradient" | "solid";
  alignment?: "left" | "center";
  className?: string;
  minHeight?: "default" | "tall";
  titleMaxWidth?: "default" | "wide";
  children?: React.ReactNode;
}

export function PageHero({
  title,
  subtitle,
  description,
  variant = "gradient",
  alignment = "left",
  className = "",
  minHeight = "default",
  titleMaxWidth = "default",
  children,
}: PageHeroProps) {
  const variantClasses = variant === "gradient"
    ? "bg-gradient-to-br from-slate-900 via-black to-slate-900"
    : "bg-black";
  
  // Use py-24 md:py-32 for proper vertical spacing and centering (matching media/shop/contact)
  const paddingClass = minHeight === "tall" 
    ? "py-28 md:py-36"
    : "py-24 md:py-32";
  
  const alignmentClasses = alignment === "center" 
    ? "items-center text-center" 
    : "items-start";
  
  const titleWidthClass = titleMaxWidth === "wide" ? "max-w-5xl" : "max-w-4xl";

  return (
    <section className={cn(
      variantClasses,
      "text-white relative overflow-hidden flex items-center justify-center",
      paddingClass,
      className
    )}>
      {/* Subtle diagonal pattern overlay */}
      {variant === "gradient" && (
        <>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          {/* Gradient accents */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10"></div>
          
          {/* Subtle radial glow */}
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </>
      )}
      
      <Container className="relative z-10 w-full">
        <div className={cn("flex flex-col justify-center", alignmentClasses, "pt-8 md:pt-12")}>
          {subtitle && (
            <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block text-sm m-0">
              {subtitle}
            </span>
          )}
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold font-[Chakra_Petch] uppercase m-0",
            titleMaxWidth === "wide" ? titleWidthClass : titleWidthClass
          )}>
            {title}
          </h1>
          {description && (
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl m-0 mt-6">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
