import { ArrowRight, PlayCircle } from "lucide-react";
import faceoffImg from "@assets/generated_images/mma_fighters_facing_off_for_event_card.png";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Elvin Johnson retains belt in spectacular fashion",
    date: "Dec 12, 2025",
    category: "Results",
    image: faceoffImg,
    type: "article"
  },
  {
    id: 2,
    title: "Combat Zone 91: Official Trailer",
    date: "Jan 10, 2026",
    category: "Video",
    image: faceoffImg,
    type: "video"
  },
  {
    id: 3,
    title: "Fight Card Update: Main Event Change for CZ 91",
    date: "Jan 05, 2026",
    category: "Announcement",
    image: faceoffImg,
    type: "article"
  },
];

export function NewsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
             <h2 className="text-4xl font-bold text-black font-[Oswald] uppercase border-l-8 border-primary pl-4">
                Trending <span className="text-gray-400">News</span>
            </h2>
            <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center">
                View All <ArrowRight className="ml-1 w-4 h-4" />
            </a>
        </div>
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className="group cursor-pointer bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold uppercase px-3 py-1">
                  {item.category}
                </div>
                {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <PlayCircle className="w-12 h-12 text-white drop-shadow-md opacity-90 group-hover:scale-110 transition-transform" />
                    </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{item.date}</span>
                <h3 className="text-xl font-bold text-black font-[Oswald] uppercase leading-tight group-hover:text-primary transition-colors mb-4 line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-gray-500 text-sm font-bold uppercase">
                  Read More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
