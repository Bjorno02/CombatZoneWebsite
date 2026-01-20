import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";
import { Link } from "wouter";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function FightCardPage() {
  useSEO(SEO_CONFIG.fightCard);
  return (
    <PageLayout>
      <SectionHero
        label="Official Lineup"
        title="FIGHT\nCARD"
        highlightWord="CARD"
        description="The complete matchup lineup for Combat Zone 91"
        breadcrumbs={[
          { label: "Events", href: "/events" },
          { label: "CZ91", href: "/events/cz91" },
          { label: "Fight Card" },
        ]}
      />

      {/* Event Info Bar - Sleek */}
      <section className="bg-white border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Calendar className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">February 21, 2026</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Saturday</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">10:00 PM EST</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Main Card</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">SNHU Arena</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Manchester, NH</div>
                </div>
              </div>
            </div>
            
            <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-12 px-6">
                <Ticket className="mr-2" size={18} />
                Get Tickets
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Main Card Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              Main Card
            </div>
            <div className="h-px flex-1 bg-slate-300" />
          </div>

          {/* Fight Card Placeholder - Stylized */}
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((bout) => (
              <div key={bout} className="bg-white border border-slate-200 hover:border-primary/30 transition-all group">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                  {/* Fighter 1 */}
                  <div className="p-6 md:p-8 text-right">
                    <div className="inline-block">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-full ml-auto mb-3 flex items-center justify-center">
                        <span className="text-slate-400 text-xs uppercase">Photo</span>
                      </div>
                      <div className="font-bold font-[Chakra_Petch] text-lg md:text-xl text-slate-900 uppercase">TBA</div>
                      <div className="text-sm text-slate-500">Record TBD</div>
                    </div>
                  </div>

                  {/* VS Center */}
                  <div className="px-4 md:px-8 py-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
                    <div className="relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-900 group-hover:bg-primary transition-colors rounded-full flex items-center justify-center mx-auto">
                        <span className="text-white font-bold font-[Chakra_Petch] text-xl">VS</span>
                      </div>
                      <div className="text-center mt-3">
                        <span className="text-xs text-slate-400 uppercase tracking-widest">Bout {bout}</span>
                      </div>
                    </div>
                  </div>

                  {/* Fighter 2 */}
                  <div className="p-6 md:p-8 text-left">
                    <div className="inline-block">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-100 rounded-full mr-auto mb-3 flex items-center justify-center">
                        <span className="text-slate-400 text-xs uppercase">Photo</span>
                      </div>
                      <div className="font-bold font-[Chakra_Petch] text-lg md:text-xl text-slate-900 uppercase">TBA</div>
                      <div className="text-sm text-slate-500">Record TBD</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Prelims Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-slate-900 text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              Preliminary Card
            </div>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Prelim Fights Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((bout) => (
              <div key={bout} className="bg-slate-50 border border-slate-200 p-6 hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                      <span className="text-slate-400 text-[10px] uppercase">TBA</span>
                    </div>
                    <div>
                      <div className="font-bold font-[Chakra_Petch] text-slate-900 uppercase">TBA</div>
                      <div className="text-xs text-slate-500">Record TBD</div>
                    </div>
                  </div>
                  
                  <div className="text-sm font-bold text-slate-400">VS</div>
                  
                  <div className="flex items-center gap-4 flex-row-reverse">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                      <span className="text-slate-400 text-[10px] uppercase">TBA</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold font-[Chakra_Petch] text-slate-900 uppercase">TBA</div>
                      <div className="text-xs text-slate-500">Record TBD</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Lineup Updating
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white mb-4">
              FULL CARD COMING SOON
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We're finalizing the complete lineup for Combat Zone 91. Fighter announcements and bout details will be updated here as they're confirmed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8">
                  <Ticket className="mr-2" size={20} />
                  Get Tickets
                </Button>
              </a>
              <Link href="/events/cz91">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wider h-14 px-8">
                  Event Details
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
