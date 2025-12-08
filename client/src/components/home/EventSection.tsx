import { Calendar, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventImg from "@assets/generated_images/mma_fight_action_shot_for_event_poster.png";

export function EventSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-primary font-bold tracking-widest text-sm mb-2 uppercase">Next Event</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white font-[Oswald] uppercase">
              Combat Zone <span className="text-outline-white">91</span>
            </h3>
          </div>
          <Button variant="link" className="text-white hover:text-primary uppercase tracking-widest font-bold">
            View All Events &rarr;
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 bg-[#0a0a0a]">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden group">
            <img
              src={eventImg}
              alt="CZ 91 Main Event"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent lg:bg-gradient-to-t" />
            
            {/* Date Badge Overlay */}
            <div className="absolute top-6 left-6 bg-primary text-white p-4 text-center">
              <span className="block text-3xl font-bold font-[Oswald] leading-none">21</span>
              <span className="block text-sm font-bold tracking-wider uppercase">FEB</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center border-l border-white/5">
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <Calendar className="text-primary" size={20} />
                <span className="text-lg">Saturday, February 21st, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="text-primary" size={20} />
                <span className="text-lg">SNHU Arena, Manchester, NH</span>
              </div>
            </div>

            <h4 className="text-3xl font-bold text-white mb-6 font-[Oswald] uppercase italic">
              Heavyweight Championship
            </h4>

            <p className="text-gray-400 mb-8 leading-relaxed">
              New England's premier MMA promotion returns to the SNHU Arena for a night of explosive action. 
              Featuring the Heavyweight Title bout and a stacked undercard of the region's top prospects.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider">
                <Ticket className="mr-2 h-4 w-4" /> Get Tickets
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-wider">
                Full Fight Card
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
