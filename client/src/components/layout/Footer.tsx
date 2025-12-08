import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold italic text-white mb-4 font-[Oswald]">
              COMBAT<span className="text-primary">ZONE</span>
            </h2>
            <p className="text-muted-foreground max-w-md mb-6">
              New England's Longest Running MMA Promotion. We bring you the most exciting fights, the toughest competitors, and an unforgettable live experience.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-[Oswald] tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-4">
              {["Events", "Fighters", "News", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#">
                    <a className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wide">
                      {item}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-[Oswald] tracking-wider">CONTACT</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Manchester, NH</li>
              <li>info@combatzonemma.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Combat Zone MMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
