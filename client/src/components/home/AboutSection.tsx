import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import calvinKattarImg from "@assets/IMAGES/CZCalvinKattarFiller.jpg";

export function AboutSection() {
    return (
        <section className="py-20 bg-white relative">
            {/* Top Separator - Blue from left, red from right */}
            <div className="absolute top-0 left-0 right-0 h-[5px] z-10" style={{
                background: 'linear-gradient(to right, #1e40af 0%, #1e40af 20%, #ffffff 48%, #ffffff 52%, #dc2626 80%, #dc2626 100%)'
            }}></div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative flex justify-center">
                         <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10 rounded-tl-3xl"></div>
                         <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 -z-10 rounded-br-3xl"></div>
                         <div className="aspect-[4/5] bg-slate-900 w-full max-w-md relative overflow-hidden shadow-2xl">
                            <img 
                                src={calvinKattarImg} 
                                alt="Calvin Kattar" 
                                className="w-full h-full object-cover"
                            />
                         </div>
                    </div>
                    
                    <div>
                        <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-2 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-[Chakra_Petch] uppercase leading-tight mb-6">
                            From the Octagon to Ownership
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            UFC veteran <span className="font-bold text-slate-900">Calvin Kattar</span> knows what it takes to make it in this sport. After years of competing at the highest level, he saw an opportunity to give back to the community that raised him. Now, as owner and operator of Combat Zone, Calvin brings his firsthand experience from the UFC to create opportunities for the next generation of fighters.
                        </p>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            This is a <span className="font-bold text-slate-900">family-owned</span> operation, built on passion, respect, and an unwavering commitment to the fighters. We understand the journey because we've lived it. Every event is crafted with the knowledge of what fighters need to succeed—both in the cage and beyond.
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            {[
                                "Owned by UFC Veteran Calvin Kattar",
                                "Family-owned and operated",
                                "Built by fighters, for fighters",
                                "Deep roots in New England MMA"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                    <span className="font-bold text-slate-800">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase px-8 py-6 rounded-none">
                            Read Our Story
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
