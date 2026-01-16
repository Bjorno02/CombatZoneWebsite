import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { Link } from "wouter";
import eventPoster from "@assets/IMAGES/CombatZone91Poster.png";

const UPCOMING_EVENTS = [
  { id: 92, date: "May 16, 2025", venue: "SNHU Arena, Manchester NH" },
  { id: 93, date: "August 22, 2025", venue: "SNHU Arena, Manchester NH" },
  { id: 94, date: "November 7, 2025", venue: "SNHU Arena, Manchester NH" },
];

export default function EventsPage() {
  return (
    <PageLayout>
      <PageHero 
        title="Upcoming Events"
        subtitle="Schedule"
        alignment="left"
      />

      {/* Info Strip */}
      <section className="py-6 bg-primary text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <Calendar className="text-white" size={20} />
                <div>
                  <div className="font-bold">February 21, 2026</div>
                  <div className="text-sm text-white/90">Saturday, 10:00 PM EST</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="text-white" size={20} />
                <div>
                  <div className="font-bold">SNHU Arena</div>
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

      {/* Featured Event - CZ91 */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        {/* Paper Texture Background */}
        <div className="absolute inset-0 opacity-[0.5] bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
        
        {/* Subtle Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-slate-50/30"></div>

        {/* Flowing transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50/20 via-slate-50/10 to-transparent"></div>
        
        {/* Subtle diagonal accent line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        {/* Decorative geometric elements */}
        <div className="absolute top-1/4 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/3 rounded-full blur-xl"></div>

        <Container maxWidth="wide" className="relative z-10">
          {/* Grand Poster Display */}
          <div className="mb-12 md:mb-16 flex items-center justify-center">
            <div className="relative group max-w-4xl">
              <img
                src={eventPoster}
                alt="Combat Zone 91 Event Poster"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
                loading="eager"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          </div>

          {/* Event Details and Purchasing Options */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border-2 border-slate-200/50 p-8 md:p-10">
              <div className="text-center mb-8">
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Next Live Event</span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Chakra_Petch] uppercase mb-6">
                  Combat Zone <span className="text-primary">91</span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                  <Calendar className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">February 21, 2026</div>
                    <div className="text-sm text-slate-600">Saturday, 10:00 PM EST</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                  <MapPin className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">SNHU Arena</div>
                    <div className="text-sm text-slate-600">Manchester, New Hampshire</div>
                  </div>
                </div>
              </div>
              
              {/* BIG CTA Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider h-14 md:h-16 text-lg md:text-xl skew-x-[-5deg] shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40">
                    <span className="skew-x-[5deg] flex items-center justify-center gap-3">
                      <Ticket className="w-6 h-6" /> Get Tickets Now
                    </span>
                  </Button>
                </a>
                
                <Link href="/events/cz91#fight-card">
                  <Button size="lg" variant="outline" className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-wider h-14 md:h-16 text-lg md:text-xl skew-x-[-5deg] transition-all">
                    <span className="skew-x-[5deg] flex items-center justify-center gap-3">
                      View Fight Card Now
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-8 md:mb-12 border-l-4 border-primary pl-4 md:pl-6">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {UPCOMING_EVENTS.map((event) => (
              <Link key={event.id} href={`/events/cz${event.id}`}>
                <div className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-xl cursor-pointer group">
                  <div className="bg-black text-white p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">
                      CZ{event.id}
                    </div>
                    <div className="text-primary font-bold text-sm uppercase tracking-widest">
                      {event.date.split(',')[0].toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Calendar size={16} />
                      <span className="text-sm font-semibold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 mb-6">
                      <MapPin size={16} />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                    <Button variant="outline" className="w-full uppercase font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                      Event Details
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

    </PageLayout>
  );
}
