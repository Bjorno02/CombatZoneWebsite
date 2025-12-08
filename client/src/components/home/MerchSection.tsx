import { Button } from "@/components/ui/button";
import shirtImg from "@assets/generated_images/mma_merchandise_t-shirt_mockup.png";

export function MerchSection() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-multiply" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-5xl md:text-7xl font-bold font-[Oswald] uppercase mb-6 leading-none italic">
              Wear the <br /> <span className="text-black">Battle</span>
            </h2>
            <p className="text-lg mb-8 max-w-md font-medium text-white/90">
              Official Combat Zone merchandise. Hoodies, Tees, and Fight Gear.
              Represent the longest running promotion in New England.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-black/80 font-bold uppercase tracking-wider border-none">
              Shop The Store
            </Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <img 
                    src={shirtImg} 
                    alt="CZ Merch" 
                    className="w-[120%] h-[120%] object-contain drop-shadow-2xl rotate-[-10deg] hover:rotate-0 transition-transform duration-500"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
