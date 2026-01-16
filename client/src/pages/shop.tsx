import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function ShopPage() {
  return (
    <PageLayout className="pt-20">
      <PageHero 
        title="Combat Zone Store"
        subtitle="Official Gear"
        alignment="center"
        variant="gradient"
      >
        <div className="flex justify-center gap-6 mt-10">
          <Button className="bg-white text-black hover:bg-slate-200 font-bold uppercase px-8">Men</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10 font-bold uppercase px-8">Women</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10 font-bold uppercase px-8">Accessories</Button>
        </div>
      </PageHero>

      {/* Products Grid */}
      <section className="py-20 md:py-28">
        <Container>
        <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-12">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="group cursor-pointer">
                    <div className="aspect-[3/4] bg-slate-100 mb-4 relative overflow-hidden">
                        {/* Placeholder for Product Image */}
                        <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-2 py-1 uppercase">New</div>
                    </div>
                    <h3 className="font-bold font-[Chakra_Petch] uppercase text-lg group-hover:text-primary">CZ Logo Tee</h3>
                    <span className="text-slate-500 font-bold block mb-3">$29.99</span>
                    <Button className="w-full uppercase font-bold text-xs h-10">Add to Cart</Button>
                </div>
            ))}
        </div>
        </Container>
      </section>

      {/* Kattarmania */}
      <section className="py-24 md:py-32 bg-black text-white">
        <Container className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 max-w-2xl">
                <h2 className="text-4xl font-bold font-[Chakra_Petch] uppercase mb-6 text-primary">Kattarmania Collection</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">Exclusive merchandise from the owner and UFC featherweight contender Calvin Kattar.</p>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase px-8 py-6">View Collection</Button>
            </div>
            <div className="flex-1 h-[300px] bg-white/5 w-full flex items-center justify-center font-[Chakra_Petch] text-2xl font-bold uppercase text-white/20">
                Collection Banner
            </div>
        </Container>
      </section>
    </PageLayout>
  );
}
