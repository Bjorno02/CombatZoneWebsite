import { Calendar, MapPin, Ticket, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventImg from "@assets/stock_images/calvin_kattar_ufc_fi_3ff19113.jpg";

export function EventSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b-2 border-slate-100 pb-6">
          <div className="text-center md:text-left">
            <h2 className="text-primary font-bold tracking-[0.2em] text-sm mb-1 uppercase">Next Live Event</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 font-[Chakra_Petch] uppercase italic">
              Combat Zone <span className="text-primary">91</span>
            </h3>
          </div>
          <Button variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white uppercase tracking-widest font-bold group px-8 py-6 rounded-none transition-all">
            Full Schedule <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Featured Event Card */}
        <div className="bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] grid grid-cols-1 lg:grid-cols-12 overflow-hidden border border-slate-200 group">
          
          {/* Date Column (Desktop: Left, Mobile: Top) */}
          <div className="lg:col-span-2 bg-slate-900 text-white p-6 flex flex-row lg:flex-col justify-between lg:justify-center items-center text-center lg:border-r border-white/10 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             
             <div className="flex flex-col items-center z-10">
                <span className="text-sm lg:text-lg font-bold text-gray-400 uppercase tracking-[0.2em]">FEB</span>
                <span className="text-4xl lg:text-7xl font-bold font-[Chakra_Petch] leading-none my-0 lg:my-2 text-primary">21</span>
                <span className="text-sm lg:text-lg font-bold text-gray-400">SAT</span>
             </div>
             
             <div className="flex items-center gap-2 mt-0 lg:mt-6 text-xs lg:text-sm text-gray-300 font-mono bg-white/10 px-3 py-1 rounded z-10">
                <Clock size={14} /> 10:00 PM EST
             </div>
          </div>

          {/* Main Image */}
          <div className="lg:col-span-6 relative h-[250px] md:h-[400px] lg:h-auto overflow-hidden">
            <img
              src={eventImg}
              alt="CZ 91 Main Event"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r" />
            
            <div className="absolute bottom-6 left-6 z-20">
                <span className="bg-primary text-white px-3 py-1 text-sm font-bold uppercase skew-x-[-10deg] inline-block mb-2">
                    <span className="skew-x-[10deg]">Heavyweight Title</span>
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-[Chakra_Petch] uppercase italic leading-none drop-shadow-md">
                    KATTAR <span className="text-primary">VS</span> EMMETT
                </h2>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 p-8 flex flex-col justify-center bg-white border-l border-slate-100">
            <div className="flex items-start gap-3 mb-6">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                    <h4 className="text-lg font-bold text-slate-900 uppercase">SNHU Arena</h4>
                    <p className="text-slate-500 text-sm">Manchester, New Hampshire</p>
                </div>
            </div>

            <div className="space-y-0 mb-8 border border-slate-200 divide-y divide-slate-200">
               <div className="flex items-center justify-between p-4 bg-slate-50">
                  <span className="font-bold text-slate-700 text-sm uppercase">MAIN CARD</span>
                  <span className="text-primary font-bold text-sm">5 BOUTS</span>
               </div>
               <div className="flex items-center justify-between p-4">
                  <span className="font-bold text-slate-700 text-sm uppercase">PRELIMS</span>
                  <span className="text-slate-500 font-bold text-sm">7 BOUTS</span>
               </div>
               <div className="flex items-center justify-between p-4">
                  <span className="font-bold text-slate-700 text-sm uppercase">EARLY PRELIMS</span>
                  <span className="text-slate-500 font-bold text-sm">3 BOUTS</span>
               </div>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider shadow-lg shadow-primary/20 h-14 text-lg skew-x-[-5deg]">
                <span className="skew-x-[5deg] flex items-center justify-center gap-2">
                    <Ticket className="w-5 h-5" /> Get Tickets
                </span>
              </Button>
              <Button size="lg" variant="outline" className="w-full border-2 border-slate-200 text-slate-900 hover:border-slate-900 hover:bg-transparent font-bold uppercase tracking-wider h-12 skew-x-[-5deg]">
                <span className="skew-x-[5deg]">View Fight Card</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
