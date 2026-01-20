import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { Calendar, MapPin, Ticket, Clock, ChevronRight, ArrowRight, Archive } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { UPCOMING_EVENTS } from "@/data/events";
import eventPoster from "@assets/IMAGES/CombatZone91Poster.png";

export default function EventsPage() {
  useSEO(SEO_CONFIG.events);
  return (
    <PageLayout>
      <SectionHero
        label="Live Events"
        title="UPCOMING EVENTS"
        highlightWord="EVENTS"
        description="Experience New England's premier MMA promotion live at SNHU Arena"
      />

      {/* Next Event Quick Info Bar */}
      <section className="bg-white border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Next Event
              </span>
              <span className="text-slate-400">|</span>
              <span className="font-bold font-[Chakra_Petch] text-xl text-primary">CZ91</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600">February 21, 2026</span>
            </div>
            <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-10 px-6 text-sm">
                <Ticket className="mr-2" size={16} />
                Get Tickets
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Featured Event - CZ91 */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-slate-200/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

        <Container className="relative z-10">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-24 bg-slate-300" />
            <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              Featured Event
            </div>
            <div className="h-px flex-1 max-w-24 bg-slate-300" />
          </div>

          {/* Central Poster Display */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="relative group max-w-3xl">
              <img
                src={eventPoster}
                alt="Combat Zone 91 Event Poster"
                className="w-full h-auto object-contain shadow-[0_25px_80px_-20px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
            </div>
          </div>

          {/* Event Details Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 shadow-xl p-8 md:p-10">
              {/* Title */}
              <div className="text-center mb-8">
                <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                  Next Live Event
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-slate-900 mt-3">
                  COMBAT ZONE <span className="text-primary">91</span>
                </h2>
              </div>

              {/* Event Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-slate-200">
                    <Calendar className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">February 21, 2026</div>
                    <div className="text-sm text-slate-500">Saturday Night</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-slate-200">
                    <Clock className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">10:00 PM EST</div>
                    <div className="text-sm text-slate-500">Main Card</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 bg-white flex items-center justify-center border border-slate-200">
                    <MapPin className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">SNHU Arena</div>
                    <div className="text-sm text-slate-500">Manchester, NH</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 text-lg group"
                  >
                    <Ticket className="mr-2" size={20} />
                    Get Tickets
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Button>
                </a>

                <Link href="/fight-card">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-wider h-14 text-lg"
                  >
                    View Fight Card
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Events Schedule */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-slate-900 text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
              2026 Schedule
            </div>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {UPCOMING_EVENTS.map((event, index) => (
              <Link key={event.id} href={`/events/cz${event.id}`}>
                <div className="group relative bg-white border border-slate-200 hover:border-primary/50 transition-all overflow-hidden cursor-pointer">
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-200 group-hover:bg-primary transition-colors" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 pl-8 md:pl-10">
                    {/* Event Number & Date */}
                    <div className="flex items-center gap-6 md:gap-10 mb-4 md:mb-0">
                      <div>
                        <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-slate-900 group-hover:text-primary transition-colors">
                          CZ{event.id}
                        </div>
                      </div>

                      <div className="hidden md:block w-px h-12 bg-slate-200" />

                      <div>
                        <div className="font-bold text-slate-900">{event.date}</div>
                        <div className="text-sm text-slate-500">{event.day}</div>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center gap-6 md:gap-10">
                      <div className="flex items-center gap-3 text-slate-600">
                        <MapPin size={18} className="text-slate-400" />
                        <div>
                          <div className="font-medium">{event.venue}</div>
                          <div className="text-sm text-slate-500">{event.location}</div>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center gap-2 text-slate-400 group-hover:text-primary transition-colors">
                        <span className="text-sm font-bold uppercase tracking-wider">Details</span>
                        <ChevronRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* More Events Notice */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Additional events will be announced throughout the year
            </p>
          </div>
        </Container>
      </section>

      {/* Past Events CTA */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded flex items-center justify-center">
                <Archive className="text-white" size={28} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white mb-2">
                  EVENT ARCHIVE
                </h2>
                <p className="text-slate-400">
                  Browse 90+ past events and fight results from our 24-year history
                </p>
              </div>
            </div>
            <Link href="/past-events">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold uppercase tracking-wider h-14 px-8 whitespace-nowrap group"
              >
                View Past Events
                <ChevronRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
