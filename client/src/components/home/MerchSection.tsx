import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
// @ts-ignore - JPG extension case sensitivity
import merchImg from "@assets/IMAGES/CZMERCH.JPG";

export function MerchSection() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 bg-zinc-900 relative overflow-visible z-10">
      {/* Professional Texture - same as Champions section */}
      <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px)]"></div>

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Gradient Mesh for Depth */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.4),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,0.3),transparent_50%)]"></div>

      {/* Clean divider line at TOP */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
      <div className="absolute top-0 left-1/2 -tranneutral-x-1/2 w-24 h-1 bg-primary"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <Star className="text-primary" size={14} />
            <span className="text-white/80 text-sm font-bold uppercase tracking-wider">
              Official Gear
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[Chakra_Petch] text-white uppercase leading-[0.9] mb-6">
            Wear the <span className="text-primary">Battle</span>
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Rep the promotion that built New England's top fighters. Premium apparel that hits as
            hard as our athletes.
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Featured Product Image */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative bg-black rounded-lg overflow-hidden border border-white/10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary z-10" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary z-10" />

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 z-20 text-xs font-bold uppercase tracking-wider">
                New Collection
              </div>

              <img
                src={merchImg}
                alt="Combat Zone Official Merchandise"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - Product Info & Categories */}
          <div className="text-white">
            {/* Product categories */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/[0.03] border border-white/10 p-6 hover:border-primary/50 hover:bg-white/[0.06] transition-all cursor-pointer group">
                <div className="text-3xl font-bold font-[Chakra_Petch] text-primary mb-1">01</div>
                <div className="font-bold uppercase tracking-wider mb-1">Hoodies</div>
                <div className="text-sm text-neutral-500">Premium heavyweight</div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-6 hover:border-primary/50 hover:bg-white/[0.06] transition-all cursor-pointer group">
                <div className="text-3xl font-bold font-[Chakra_Petch] text-primary mb-1">02</div>
                <div className="font-bold uppercase tracking-wider mb-1">T-Shirts</div>
                <div className="text-sm text-neutral-500">Event & signature tees</div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-6 hover:border-primary/50 hover:bg-white/[0.06] transition-all cursor-pointer group">
                <div className="text-3xl font-bold font-[Chakra_Petch] text-primary mb-1">03</div>
                <div className="font-bold uppercase tracking-wider mb-1">Fight Kits</div>
                <div className="text-sm text-neutral-500">Official training gear</div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 p-6 hover:border-primary/50 hover:bg-white/[0.06] transition-all cursor-pointer group">
                <div className="text-3xl font-bold font-[Chakra_Petch] text-primary mb-1">04</div>
                <div className="font-bold uppercase tracking-wider mb-1">Accessories</div>
                <div className="text-sm text-neutral-500">Hats, bags & more</div>
              </div>
            </div>

            {/* CTA */}
            <Link href="/shop">
              <Button
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider h-16 text-lg group"
              >
                <ShoppingBag className="mr-3" size={22} />
                Shop the Collection
                <ArrowRight
                  className="ml-3 group-hover:tranneutral-x-1 transition-transform"
                  size={22}
                />
              </Button>
            </Link>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-sm text-neutral-600 uppercase tracking-wider">
                  Free Shipping
                </div>
                <div className="text-white font-bold">Orders $75+</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-sm text-neutral-600 uppercase tracking-wider">Quality</div>
                <div className="text-white font-bold">Premium Materials</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-sm text-neutral-600 uppercase tracking-wider">Support</div>
                <div className="text-white font-bold">Fighter-Owned</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Star separator at BOTTOM - closer together */}
      <div className="absolute bottom-0 left-0 right-0 h-6 flex items-center justify-center z-[1]">
        <div className="flex items-center gap-4 w-full max-w-4xl px-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3 h-3 fill-primary/40 text-primary/40" />
            ))}
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
