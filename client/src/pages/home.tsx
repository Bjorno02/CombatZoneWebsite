import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { EventSection } from "@/components/home/EventSection";
import { ChampionsSection } from "@/components/home/ChampionsSection";
import { MerchSection } from "@/components/home/MerchSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PPVSection } from "@/components/home/PPVSection";
import { WhatIsCombatZoneSection } from "@/components/home/WhatIsCombatZoneSection";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Users, History } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function Home() {
  useSEO(SEO_CONFIG.home);
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans">
      <Navbar />

      <main>
        {/* 1. HERO: Carousel with interactive slides - Maximum visual impact */}
        <Hero />

        {/* 2. CREDIBILITY STRIP: Quick stats/trust signals - Builds immediate credibility */}
        <section className="bg-primary py-10 md:py-12 text-white relative z-20 overflow-hidden">
          {/* Flowing transition from hero */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
          {/* Flowing transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 via-white/5 to-transparent"></div>

          <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="flex flex-col items-center">
                <History className="mb-2 w-8 h-8 opacity-80" />
                <span className="text-3xl font-bold font-[Chakra_Petch]">24+</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Years Running
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Users className="mb-2 w-8 h-8 opacity-80" />
                <span className="text-3xl font-bold font-[Chakra_Petch]">90+</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Events Hosted
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="mb-2 w-8 h-8 opacity-80" />
                <span className="text-3xl font-bold font-[Chakra_Petch]">UFC</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Veteran Owned
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Trophy className="mb-2 w-8 h-8 opacity-80" />
                <span className="text-3xl font-bold font-[Chakra_Petch]">#1</span>
                <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                  Regional Promotion
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EVENTS: Upcoming & Featured - Primary CTA (tickets), most important content */}
        <EventSection />

        {/* 4. PPV: Pay-Per-View section */}
        <PPVSection />

        {/* 5. WHAT IS COMBAT ZONE: About section */}
        <WhatIsCombatZoneSection />

        {/* 6. CHAMPIONS: Title defenders from last event - Social proof, excitement */}
        <ChampionsSection />

        {/* 7. ABOUT: Mission & Story - Builds deeper brand connection */}
        <AboutSection />

        {/* 8. STORE: Merch - Secondary action, commerce opportunity */}
        <MerchSection />

        {/* 9. SPONSOR CTA: Business opportunity - Flows from merch section */}
        <section className="py-20 md:py-28 bg-zinc-900 text-center relative overflow-hidden">
          {/* Star separator at TOP - closer together */}
          <div className="absolute top-0 left-0 right-0 h-6 flex items-center justify-center z-[1]">
            <div className="flex items-center gap-4 w-full max-w-4xl px-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-primary/40 text-primary/40" />
                ))}
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Professional Texture - same as Champions section */}
          <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px)]"></div>

          {/* Subtle Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Gradient Mesh for Depth */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.4),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.3),transparent_50%)]"></div>

          {/* Red line at bottom of section */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>

          <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 lg:px-16">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm block mb-4">
              Partnership Opportunities
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Chakra_Petch] uppercase leading-[0.9] mb-6">
              Align Your Brand
              <br />
              With <span className="text-primary">Greatness</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Connect with a passionate, loyal audience that can only be found at Combat Zone.
            </p>
            <Link href="/sponsors">
              <Button className="bg-white text-slate-900 hover:bg-slate-200 font-bold uppercase px-8 py-6 text-lg">
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
