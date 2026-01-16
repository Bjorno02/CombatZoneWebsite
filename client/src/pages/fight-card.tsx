import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "wouter";

export default function FightCardPage() {
  return (
    <PageLayout>
      <PageHero 
        title={
          <>
            Fight <span className="text-primary">Card</span>
          </>
        }
        subtitle="Lineup"
        description="The complete lineup of matchups for our upcoming event"
        alignment="left"
      />

      {/* Event Info Banner */}
      <section className="py-8 bg-primary text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <Calendar className="text-white" size={24} />
                <div>
                  <div className="font-bold text-lg">February 21, 2026</div>
                  <div className="text-sm text-white/90">Saturday, 10:00 PM EST</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="text-white" size={24} />
                <div>
                  <div className="font-bold text-lg">SNHU Arena</div>
                  <div className="text-sm text-white/90">Manchester, New Hampshire</div>
                </div>
              </div>
            </div>
            
            <Link href="/events/cz91">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold uppercase tracking-wider">
                View Event Details
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Fight Card Content - Filler Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-4">
              Combat Zone <span className="text-primary">91</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Full fight card details coming soon. Check back for the complete lineup of matchups.
            </p>
          </div>

          {/* Filler Content */}
          <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-lg p-12 md:p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase mb-4">
                  Fight Card Coming Soon
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We're finalizing the complete lineup for Combat Zone 91. The full fight card with all matchups, 
                  fighter information, and bout details will be available here soon.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                  <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold font-[Chakra_Petch] uppercase mb-2">Main Card</h4>
                  <p className="text-sm text-slate-600">Top matchups and featured bouts</p>
                </div>
                
                <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                  <Trophy className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold font-[Chakra_Petch] uppercase mb-2">Prelims</h4>
                  <p className="text-sm text-slate-600">Preliminary card matchups</p>
                </div>
                
                <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                  <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-bold font-[Chakra_Petch] uppercase mb-2">Schedule</h4>
                  <p className="text-sm text-slate-600">Fight times and order</p>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/events/cz91">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider px-8 py-6">
                    Back to Event Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
