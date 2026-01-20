import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 text-white">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Top Section: CTA & Newsletter - Red/Black Diagonal Stripe Design */}
        <div className="relative rounded-lg overflow-hidden mb-12 md:mb-16">
          {/* Diagonal stripe background - Red with black stripes */}
          <div className="absolute inset-0 bg-primary" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 18px,
                #000000 18px,
                #000000 26px,
                transparent 26px,
                transparent 44px
              )`,
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 p-8 md:p-12">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-bold font-[Chakra_Petch] uppercase italic mb-4">
                Join the Fight Club
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Get exclusive pre-sale access, fighter news, and sponsor offers delivered to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border border-white/20 px-4 py-3 w-full sm:max-w-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-primary rounded"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase w-full sm:w-auto whitespace-nowrap px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-center">
              <h3 className="text-xl sm:text-2xl font-bold font-[Chakra_Petch] uppercase italic mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/combatzonemma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/CZMMA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@CombatZoneMMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://x.com/czmma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="flex justify-center mb-20">
          <div className="text-center max-w-3xl">
            <Link href="/">
              <a className="text-2xl font-bold italic tracking-tighter text-white font-[Chakra_Petch] mb-6 block">
                COMBAT<span className="text-primary">ZONE</span>
              </a>
            </Link>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-2xl mx-auto">
              New England's longest-running MMA promotion. Owned and operated by UFC veteran Calvin
              Kattar. The proving ground for the region's top talent chasing the big stage.
            </p>
            <div className="flex flex-col items-center gap-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>SNHU Arena, Manchester, NH</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>info@combatzonemma.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Combat Zone MMA. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
