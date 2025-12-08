import { ArrowRight } from "lucide-react";
import faceoffImg from "@assets/generated_images/mma_fighters_facing_off_for_event_card.png";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Elvin Johnson retains belt in spectacular fashion",
    date: "Dec 12, 2025",
    category: "Results",
    image: faceoffImg, // Using placeholder for now
  },
  {
    id: 2,
    title: "Connor Morrill takes home CZ Gold with Decision",
    date: "Dec 12, 2025",
    category: "Results",
    image: faceoffImg,
  },
  {
    id: 3,
    title: "Fight Card Update: Main Event Change for CZ 91",
    date: "Jan 05, 2026",
    category: "Announcement",
    image: faceoffImg,
  },
];

export function NewsSection() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-white/10 flex-grow" />
          <h2 className="text-3xl md:text-5xl font-bold text-white font-[Oswald] uppercase text-center">
            Latest <span className="text-primary">News</span>
          </h2>
          <div className="h-px bg-white/10 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-white/5 border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-white border-l-2 border-primary">
                  {item.category}
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-primary text-sm font-medium">{item.date}</span>
                <h3 className="text-xl font-bold text-white font-[Oswald] uppercase leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center text-white/50 text-sm font-medium group-hover:text-white transition-colors">
                  Read More <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
