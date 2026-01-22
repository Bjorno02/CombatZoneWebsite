import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function ShopPage() {
  useSEO(SEO_CONFIG.shop);
  return (
    <PageLayout className="pt-20">
      {/* Hero - Clean with white/grey accents */}
      <section className="min-h-[40vh] flex items-center justify-center relative overflow-hidden bg-neutral-100">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-100 to-neutral-200" />

        {/* Subtle dark accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900/10 to-transparent" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Container className="relative z-10 pt-32 md:pt-36 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">
              Official Gear
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-neutral-900 leading-[1.05] mb-6">
              COMBAT ZONE <span className="text-primary">STORE</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Shop the official Combat Zone MMA merchandise collection.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-neutral-900 text-white hover:bg-neutral-800 font-bold uppercase px-8">
                Men
              </Button>
              <Button
                variant="outline"
                className="text-neutral-900 border-neutral-400 hover:bg-neutral-200 font-bold uppercase px-8"
              >
                Women
              </Button>
              <Button
                variant="outline"
                className="text-neutral-900 border-neutral-400 hover:bg-neutral-200 font-bold uppercase px-8"
              >
                Accessories
              </Button>
            </div>
          </div>
        </Container>

        {/* Bottom red accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* Kattarmania */}
      <section className="py-24 md:py-32 bg-black text-white">
        <Container className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-bold font-[Chakra_Petch] uppercase mb-6 text-primary">
              Kattarmania Collection
            </h2>
            <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
              Exclusive merchandise from the owner and UFC featherweight contender Calvin Kattar.
            </p>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase px-8 py-6"
            >
              View Collection
            </Button>
          </div>
          <div className="flex-1 h-[300px] bg-white/5 w-full flex items-center justify-center font-[Chakra_Petch] text-2xl font-bold uppercase text-white/20">
            Collection Banner
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
