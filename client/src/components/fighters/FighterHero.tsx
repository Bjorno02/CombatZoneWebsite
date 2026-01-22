import { Container } from "@/components/layout/Container";

interface FighterHeroProps {
  label: string;
  title: string;
  highlightedTitle: string;
  description: string;
}

/**
 * FighterHero - Unique hero component for fighter-related pages
 * Used for Fighter Forms, Fighter Application, and similar pages
 */
export function FighterHero({ label, title, highlightedTitle, description }: FighterHeroProps) {
  return (
    <section className="min-h-[45vh] flex items-center justify-center relative overflow-hidden bg-black">
      {/* Split background - diagonal cut */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-neutral-900" />
        <div
          className="absolute inset-0 bg-black"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }}
        />
      </div>

      {/* Vertical accent line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">{label}</p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-6">
            {title} <span className="text-primary">{highlightedTitle}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </Container>

      {/* Bottom red accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
}
