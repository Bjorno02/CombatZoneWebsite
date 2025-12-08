import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_moody_mma_cage_hero_background.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="MMA Cage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-primary/50 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] mb-6 backdrop-blur-sm uppercase">
            New England's Premier Promotion
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-2 font-[Oswald] leading-[0.9] italic">
            COMBAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">ZONE</span>
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold text-primary mb-8 font-[Oswald] leading-[0.9]">
            MMA
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Witness the raw power, technique, and heart of the region's best fighters.
            Live events that leave you breathless.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider skew-x-[-10deg] min-w-[200px]">
              <span className="skew-x-[10deg]">Buy Tickets</span>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider skew-x-[-10deg] min-w-[200px]">
              <span className="skew-x-[10deg]">Fight Card</span>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </motion.div>
    </section>
  );
}
