import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/events/CountdownTimer";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { Calendar, MapPin, Ticket, Clock, Car, UtensilsCrossed, FileText, Users, Trophy } from "lucide-react";
import { useRoute } from "wouter";
import eventPoster from "@assets/IMAGES/CombatZone91Poster.png";

// Event data - in a real app, this would come from an API
const EVENT_DATA: Record<string, any> = {
  cz91: {
    id: 91,
    name: "Combat Zone 91",
    date: new Date("2026-02-21T22:00:00"), // Feb 21, 2026 10:00 PM EST
    doorsOpen: "8:00 PM",
    firstFight: "9:00 PM",
    venue: "SNHU Arena",
    location: "Manchester, New Hampshire",
    parking: "On-site parking available. $10 per vehicle. VIP parking included with VIP packages.",
    foodDrink: "Full concession stands available. VIP packages include Alton Fresh food and premium bar access.",
    refundPolicy: "All sales final. No refunds or exchanges. Event subject to change.",
    topFights: [
      { fighters: "Main Event TBD", weight: "Championship Bout" },
      { fighters: "Co-Main Event TBD", weight: "Featured Bout" },
      { fighters: "Featured Bout TBD", weight: "Main Card" },
    ],
  },
  cz92: {
    id: 92,
    name: "Combat Zone 92",
    date: new Date("2025-05-16T22:00:00"),
    doorsOpen: "8:00 PM",
    firstFight: "9:00 PM",
    venue: "SNHU Arena",
    location: "Manchester, New Hampshire",
    parking: "On-site parking available. $10 per vehicle. VIP parking included with VIP packages.",
    foodDrink: "Full concession stands available. VIP packages include Alton Fresh food and premium bar access.",
    refundPolicy: "All sales final. No refunds or exchanges. Event subject to change.",
    topFights: [
      { fighters: "Main Event TBD", weight: "Championship Bout" },
      { fighters: "Co-Main Event TBD", weight: "Featured Bout" },
    ],
  },
  cz93: {
    id: 93,
    name: "Combat Zone 93",
    date: new Date("2025-08-22T22:00:00"),
    doorsOpen: "8:00 PM",
    firstFight: "9:00 PM",
    venue: "SNHU Arena",
    location: "Manchester, New Hampshire",
    parking: "On-site parking available. $10 per vehicle. VIP parking included with VIP packages.",
    foodDrink: "Full concession stands available. VIP packages include Alton Fresh food and premium bar access.",
    refundPolicy: "All sales final. No refunds or exchanges. Event subject to change.",
    topFights: [
      { fighters: "Main Event TBD", weight: "Championship Bout" },
    ],
  },
  cz94: {
    id: 94,
    name: "Combat Zone 94",
    date: new Date("2025-11-07T22:00:00"),
    doorsOpen: "8:00 PM",
    firstFight: "9:00 PM",
    venue: "SNHU Arena",
    location: "Manchester, New Hampshire",
    parking: "On-site parking available. $10 per vehicle. VIP parking included with VIP packages.",
    foodDrink: "Full concession stands available. VIP packages include Alton Fresh food and premium bar access.",
    refundPolicy: "All sales final. No refunds or exchanges. Event subject to change.",
    topFights: [
      { fighters: "Main Event TBD", weight: "Championship Bout" },
    ],
  },
};

export default function EventDetailPage() {
  const [, params] = useRoute("/events/:eventId");
  const eventId = params?.eventId || "cz91";
  const event = EVENT_DATA[eventId] || EVENT_DATA.cz91;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      {/* HUGE Event Poster - Full Width */}
      <section className="bg-black py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <img
            src={eventPoster}
            alt={`${event.name} Event Poster`}
            className="w-full h-auto object-contain"
            loading="eager"
          />
        </div>
      </section>

      {/* Event Countdown Timer */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase mb-4">
              Event Starts In
            </h2>
            <CountdownTimer targetDate={event.date} />
          </div>
        </div>
      </section>

      {/* Get Tickets & VIP Packages */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Get Tickets */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase mb-4">
                Get Tickets
              </h3>
              <p className="text-slate-600 mb-6">
                Secure your seats for {event.name}. General admission and premium seating available.
              </p>
              <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase h-14 text-lg skew-x-[-5deg]">
                  <span className="skew-x-[5deg] flex items-center justify-center gap-2">
                    <Ticket className="w-5 h-5" /> Purchase Tickets
                  </span>
                </Button>
              </a>
            </div>

            {/* VIP Packages */}
            <div className="bg-black text-white border-2 border-primary rounded-lg p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase mb-4 text-primary">
                VIP Packages
              </h3>
              <p className="text-slate-300 mb-6">
                Exclusive access, premium seating, meet & greets, and more. Limited availability.
              </p>
              <Button size="lg" variant="outline" className="w-full border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase h-14 text-lg">
                <span className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5" /> View VIP Packages
                </span>
              </Button>
            </div>
          </div>

          {/* Fight Card Link - Small Breakdown */}
          <div id="fight-card" className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase mb-2">
                  Fight Card
                </h3>
                <p className="text-slate-600">Full lineup and matchups</p>
              </div>
              <Button variant="outline" className="w-full md:w-auto uppercase font-bold border-2">
                View Full Fight Card
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {event.topFights.map((fight: any, index: number) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-primary" size={18} />
                    <span className="text-xs font-bold uppercase text-slate-500">{fight.weight}</span>
                  </div>
                  <div className="font-bold text-slate-900">{fight.fighters}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Date and Venue Details */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-8 border-l-4 border-primary pl-4 md:pl-6">
            Event Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date & Time */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-primary" size={24} />
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase">Date & Time</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-bold text-slate-900 mb-1">{formatDate(event.date)}</div>
                  <div className="text-sm text-slate-600">10:00 PM EST</div>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                    <Clock size={16} />
                    <span className="font-semibold">Doors Open:</span> {event.doorsOpen}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock size={16} />
                    <span className="font-semibold">First Fight:</span> {event.firstFight}
                  </div>
                </div>
              </div>
            </div>

            {/* Venue */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={24} />
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase">Venue</h3>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-lg mb-1">{event.venue}</div>
                <div className="text-slate-600">{event.location}</div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Car className="text-primary" size={24} />
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase">Parking</h3>
              </div>
              <p className="text-slate-600">{event.parking}</p>
            </div>

            {/* Food & Drink */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <UtensilsCrossed className="text-primary" size={24} />
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase">Food & Drink</h3>
              </div>
              <p className="text-slate-600">{event.foodDrink}</p>
            </div>

            {/* Refund Policy */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-primary" size={24} />
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase">Refund Policy</h3>
              </div>
              <p className="text-slate-600">{event.refundPolicy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SNHU Arena Info Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-8 border-l-4 border-primary pl-4 md:pl-6">
            About SNHU Arena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                SNHU Arena is a state-of-the-art multi-purpose venue located in the heart of Manchester, New Hampshire. 
                With a capacity of over 11,000 seats, it's the premier destination for sports and entertainment in New England.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                The arena features premium amenities including VIP suites, premium seating, full-service concessions, 
                and easy access parking. It's the perfect venue to experience Combat Zone MMA at its finest.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="text-primary" size={18} />
                  <span className="text-slate-700">555 Elm Street, Manchester, NH 03101</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="text-primary" size={18} />
                  <span className="text-slate-700">On-site parking available</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center text-slate-400">
                <MapPin size={48} className="mx-auto mb-2" />
                <p className="font-[Chakra_Petch] uppercase font-bold">SNHU Arena</p>
                <p className="text-sm">Venue Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
