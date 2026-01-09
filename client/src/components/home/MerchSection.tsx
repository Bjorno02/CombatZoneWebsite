import { Button } from "@/components/ui/button";
import merchImg from "@assets/IMAGES/CZMerchExample.jpg";

export function MerchSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#e8f0f5' }}>
      {/* Thick Top Separator - Distinct from white section above */}
      <div className="absolute top-0 left-0 right-0 h-[5px] z-10" style={{
        background: 'linear-gradient(to right, #dc2626 0%, #dc2626 20%, #ffffff 48%, #ffffff 52%, #1e40af 80%, #1e40af 100%)'
      }}></div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper.png')] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Text Side */}
          <div className="flex flex-col justify-center py-6 md:pl-4 lg:pl-8">
            <div className="mb-5">
              <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Official Gear</span>
              <h2 className="text-4xl md:text-6xl font-bold font-[Oswald] uppercase leading-[0.9] mb-4">
                <span className="text-slate-900">Wear the</span> <br /> 
                <span className="text-blue-800">Battle</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-blue-800 mb-5"></div>
            </div>
            
            <p className="text-base text-slate-600 max-w-lg leading-relaxed mb-7">
              Get the latest official Combat Zone apparel. Hoodies, Tees, and Fight Kits available now.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all min-w-[150px]">
                Shop Men
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-bold uppercase tracking-wider min-w-[150px]">
                Shop Women
              </Button>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative flex items-center justify-center py-6">
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-8 rounded-lg shadow-xl border border-slate-200">
              {/* Color accent corners */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-red-600/40 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-800/40 rounded-br-lg"></div>
              
              <img 
                src={merchImg} 
                alt="CZ Merch" 
                className="relative z-10 w-full max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
