import { ArrowRight, PlayCircle, Trophy, Ticket } from "lucide-react";
import newsImg1 from "@assets/stock_images/calvin_kattar_ufc_fi_5a5c7130.jpg";
import newsImg2 from "@assets/stock_images/calvin_kattar_ufc_po_95459175.jpg";
import newsImg3 from "@assets/stock_images/calvin_kattar_ufc_fi_6020f9c3.jpg";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "FIGHT NIGHT RESULTS: KATTAR DOMINATES IN BOSTON",
    date: "JAN 12, 2026",
    category: "RESULTS",
    image: newsImg1,
    type: "article"
  },
  {
    id: 2,
    title: "BEHIND THE SCENES: THE ROAD TO THE TITLE",
    date: "JAN 10, 2026",
    category: "VIDEO",
    image: newsImg2,
    type: "video"
  },
  {
    id: 3,
    title: "BREAKING: MAIN EVENT OFFICIAL FOR CZ 92",
    date: "JAN 05, 2026",
    category: "ANNOUNCEMENT",
    image: newsImg3,
    type: "article"
  },
];

export function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-[Chakra_Petch] uppercase tracking-tight leading-none">
                    LATEST <span className="text-primary">NEWS</span>
                </h2>
                <div className="w-24 h-1 bg-primary mt-2"></div>
            </div>
            
            <a href="#" className="text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-primary transition-colors flex items-center group">
                View All Updates <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className="group cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-b-4 border-transparent hover:border-primary">
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold uppercase px-3 py-1 skew-x-[-10deg] ml-[-5px]">
                  <span className="skew-x-[10deg] block pl-1">{item.category}</span>
                </div>
                {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <PlayCircle className="w-14 h-14 text-white drop-shadow-lg opacity-90 group-hover:scale-110 transition-transform" />
                    </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3 block">{item.date}</span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-[Chakra_Petch] uppercase leading-[1.1] group-hover:text-primary transition-colors mb-4 line-clamp-3">
                  {item.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-slate-500 text-sm font-bold uppercase tracking-wide">
                  Read Article <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform text-primary" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
