import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-20 pb-10 text-white">
      <div className="container mx-auto px-4">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10 pb-12 mb-12">
            <div>
                <h3 className="text-3xl font-bold font-[Chakra_Petch] uppercase italic mb-2">Join the Fight Club</h3>
                <p className="text-slate-400 mb-6">Get exclusive pre-sale access, fighter news, and sponsor offers delivered to your inbox.</p>
                <div className="flex gap-2">
                    <input type="email" placeholder="Enter your email" className="bg-white/5 border border-white/10 px-4 py-2 w-full max-w-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-primary" />
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold uppercase">Subscribe</Button>
                </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-center">
                 <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase italic mb-4">Connect With Us</h3>
                 <div className="flex gap-4">
                    {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                        <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                            <Icon size={20} />
                        </a>
                    ))}
                 </div>
            </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/">
                <a className="text-2xl font-bold italic tracking-tighter text-white font-[Chakra_Petch] mb-6 block">
                COMBAT<span className="text-primary">ZONE</span>
                </a>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
              New England's longest-running MMA promotion. Owned and operated by UFC veteran Calvin Kattar. The proving ground for the region's top talent chasing the big stage.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                <MapPin size={16} className="text-primary" />
                <span>SNHU Arena, Manchester, NH</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail size={16} className="text-primary" />
                <span>info@combatzonemma.com</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-[Chakra_Petch] uppercase tracking-wider mb-6 text-primary">Company</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white transition-colors">Mission & Values</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white transition-colors">Leadership</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Careers</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-[Chakra_Petch] uppercase tracking-wider mb-6 text-primary">Events</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/events"><a className="hover:text-white transition-colors">Upcoming Events</a></Link></li>
              <li><Link href="/results"><a className="hover:text-white transition-colors">Past Results</a></Link></li>
              <li><Link href="/vip"><a className="hover:text-white transition-colors">VIP Experience</a></Link></li>
              <li><Link href="/tickets"><a className="hover:text-white transition-colors">Group Sales</a></Link></li>
              <li><Link href="/arena"><a className="hover:text-white transition-colors">Arena Info</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-[Chakra_Petch] uppercase tracking-wider mb-6 text-primary">Fighters</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/fighters"><a className="hover:text-white transition-colors">Roster</a></Link></li>
              <li><Link href="/champions"><a className="hover:text-white transition-colors">Champions</a></Link></li>
              <li><Link href="/apply"><a className="hover:text-white transition-colors">Fighter Application</a></Link></li>
              <li><Link href="/forms"><a className="hover:text-white transition-colors">Medical Forms</a></Link></li>
              <li><Link href="/media"><a className="hover:text-white transition-colors">Photo Access</a></Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Combat Zone MMA. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
