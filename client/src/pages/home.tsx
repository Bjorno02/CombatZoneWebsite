import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { EventSection } from "@/components/home/EventSection";
import { ChampionsSection } from "@/components/home/ChampionsSection";
import { MerchSection } from "@/components/home/MerchSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhatIsCombatZoneWithLink } from "@/components/home/WhatIsCombatZoneWithLink";
import { Trophy, Star, Users, History } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans">
      <Navbar />
      
      <main>
        {/* 1. HERO: Carousel with interactive slides - Maximum visual impact */}
        <Hero />

        {/* 2. CREDIBILITY STRIP: Quick stats/trust signals - Builds immediate credibility */}
        <section className="bg-primary py-8 text-white relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                    <div className="flex flex-col items-center">
                        <History className="mb-2 w-8 h-8 opacity-80" />
                        <span className="text-3xl font-bold font-[Chakra_Petch]">24+</span>
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">Years Running</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="mb-2 w-8 h-8 opacity-80" />
                        <span className="text-3xl font-bold font-[Chakra_Petch]">90+</span>
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">Events Hosted</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Star className="mb-2 w-8 h-8 opacity-80" />
                        <span className="text-3xl font-bold font-[Chakra_Petch]">UFC</span>
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">Veteran Owned</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Trophy className="mb-2 w-8 h-8 opacity-80" />
                        <span className="text-3xl font-bold font-[Chakra_Petch]">#1</span>
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">Regional Promotion</span>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. EVENTS: Upcoming & Featured - Primary CTA (tickets), most important content */}
        <EventSection />

        {/* 4. WHAT IS COMBAT ZONE + LINK: Side-by-side explanation and action */}
        <WhatIsCombatZoneWithLink />

        {/* 5. CHAMPIONS: Title defenders from last event - Social proof, excitement */}
        <ChampionsSection />

        {/* 6. ABOUT: Mission & Story - Builds deeper brand connection */}
        <AboutSection />

        {/* 7. STORE: Merch - Secondary action, commerce opportunity */}
        <MerchSection />

        {/* 8. SPONSOR CTA: Business opportunity - Least urgent for general visitors */}
        <section className="py-20 bg-slate-900 text-center px-4 relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
             <div className="relative z-10 max-w-3xl mx-auto">
                <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">Partnership Opportunities</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white font-[Chakra_Petch] uppercase mb-6">
                    Align Your Brand With Greatness
                </h2>
                <p className="text-slate-400 text-lg mb-8">
                    Connect with a passionate, loyal audience that can only be found at Combat Zone.
                </p>
                <button className="bg-white text-slate-900 hover:bg-slate-200 font-bold uppercase px-8 py-4 rounded-none transition-colors">
                    Become a Sponsor
                </button>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
