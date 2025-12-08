import { Button } from "@/components/ui/button";
import shirtImg from "@assets/generated_images/mma_merchandise_t-shirt_mockup.png";

export function MerchSection() {
  return (
    <section className="py-0 bg-black relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            {/* Text Side */}
          <div className="flex flex-col justify-center p-12 md:p-24 relative z-10">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Official Gear</h2>
            <h2 className="text-5xl md:text-7xl font-bold font-[Oswald] uppercase mb-6 leading-[0.9] text-white">
              Wear the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-800">Battle</span>
            </h2>
            <p className="text-lg mb-8 max-w-md font-medium text-gray-400">
              Get the latest official Combat Zone apparel. Hoodies, Tees, and Fight Kits available now.
            </p>
            <div className="flex gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider border-none min-w-[150px]">
                Shop Men
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-wider min-w-[150px]">
                Shop Women
                </Button>
            </div>
          </div>
          
          {/* Image Side - Full Bleed */}
          <div className="relative bg-zinc-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950" />
            <img 
                src={shirtImg} 
                alt="CZ Merch" 
                className="relative z-10 w-[80%] max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
