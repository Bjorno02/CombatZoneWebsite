import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                         <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10 rounded-tl-3xl"></div>
                         <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-100 -z-10 rounded-br-3xl"></div>
                         {/* Placeholder for About Image - Using a div for structure */}
                         <div className="aspect-[4/5] bg-slate-900 w-full relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl uppercase rotate-[-45deg]">
                                About Image
                            </div>
                         </div>
                    </div>
                    
                    <div>
                        <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-2 block">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-[Chakra_Petch] uppercase leading-tight mb-6">
                            New England's Proving Ground
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            For over 24 years, Combat Zone has been the premier launchpad for New England's top MMA talent. Now owned and operated by UFC veteran Calvin Kattar, we are dedicated to providing a professional platform for the next generation of champions.
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            {[
                                "Longest-running MMA promotion in New England",
                                "Owned by UFC Veteran Calvin Kattar",
                                "Hosted at the premier SNHU Arena",
                                "90+ Events and counting"
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
