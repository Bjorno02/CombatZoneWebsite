import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    noIndex: true,
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Large 404 watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[20rem] md:text-[30rem] font-bold font-heading text-white/[0.03] leading-none">
          404
        </span>
      </div>

      <Container className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto py-20">
          {/* Icon */}
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="text-primary" size={40} />
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold font-heading mb-4">
            <span className="text-primary">4</span>0<span className="text-primary">4</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase mb-6">
            Page Not Found
          </h2>

          <p className="text-lg text-slate-400 mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back in the
            cage.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8"
              >
                <Home className="mr-2" size={20} />
                Back to Home
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wider h-14 px-8"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </Button>
          </div>

          {/* Quick links */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Popular Pages</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/events" className="text-slate-400 hover:text-primary transition-colors">
                Events
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">
                About
              </Link>
              <span className="text-slate-700">•</span>
              <Link
                href="/fighters"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                Fighters
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
