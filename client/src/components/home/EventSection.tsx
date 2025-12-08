import { Calendar, MapPin, Ticket, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventImg from "@assets/generated_images/mma_fight_action_shot_for_event_poster.png";

export function EventSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/4 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b-4 border-black pb-4">
          <div>
            <h2 className="text-primary font-bold tracking-widest text-sm mb-1 uppercase">Upcoming</h2>
            <h3 className="text-5xl font-bold text-black font-[Oswald] uppercase">
              Events
            </h3>
          </div>
          <Button variant="ghost" className="text-black hover:text-primary uppercase tracking-widest font-bold group">
            Full Schedule <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Featured Event Card */}
        <div className="bg-white shadow-xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-gray-100 group">
          {/* Date Column */}
          <div className="lg:col-span-2 bg-black text-white p-6 flex flex-col justify-center items-center text-center border-r border-white/10">
             <span className="text-lg font-medium text-gray-400 uppercase tracking-widest">FEB</span>
             <span className="text-6xl font-bold font-[Oswald] leading-none my-2 text-primary">21</span>
             <span className="text-lg font-medium text-gray-400">SAT</span>
             <div className="mt-6 text-xs text-gray-500 font-mono">10:00 PM EST</div>
          </div>

          {/* Main Image */}
          <div className="lg:col-span-6 relative h-[300px] lg:h-auto overflow-hidden">
            <img
              src={eventImg}
              alt="CZ 91 Main Event"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-white px-2 py-1 text-xs font-bold uppercase">Main Event</span>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 p-8 flex flex-col justify-center bg-white">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                SNHU Arena • Manchester, NH
            </h4>
            <h3 className="text-4xl font-bold text-black mb-4 font-[Oswald] uppercase italic leading-tight">
              Combat Zone 91: Heavyweight Title
            </h3>

            <div className="space-y-4 mb-8">
               <div className="flex items-center justify-between border-b border-gray-100 py-2">
                  <span className="font-bold text-black">MAIN CARD</span>
                  <span className="text-primary font-bold">5 BOUTS</span>
               </div>
               <div className="flex items-center justify-between border-b border-gray-100 py-2">
                  <span className="font-bold text-black">PRELIMS</span>
                  <span className="text-primary font-bold">7 BOUTS</span>
               </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider shadow-md">
                <Ticket className="mr-2 h-4 w-4" /> Get Tickets
              </Button>
              <Button size="lg" variant="outline" className="w-full border-black text-black hover:bg-gray-50 font-bold uppercase tracking-wider">
                Fight Card
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
