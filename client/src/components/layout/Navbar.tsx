import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "EVENTS", href: "/events" },
    { name: "RANKINGS", href: "/rankings" },
    { name: "ATHLETES", href: "/fighters" },
    { name: "NEWS", href: "/news" },
    { name: "CONNECT", href: "/connect" },
    { name: "WATCH", href: "/watch" },
  ];

  const isHome = location === "/";
  // Always dark background for this more robust theme, but transparent at top of home
  const navBackground = isHome 
    ? (scrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10" : "bg-transparent") 
    : "bg-slate-900 border-b border-white/10";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        navBackground
      )}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="text-3xl font-bold italic tracking-tighter font-[Chakra_Petch] flex items-center gap-1 text-white">
            <span className="text-primary">COMBAT</span>ZONE
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-bold tracking-wide transition-colors font-[Chakra_Petch] uppercase text-gray-300 hover:text-white relative group",
                  location === link.href && "text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
           <button className="text-white hover:text-primary transition-colors">
              <User size={20} />
           </button>
           <Button 
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-6 rounded-none skew-x-[-10deg]"
           >
            <span className="skew-x-[10deg]">Get Tickets</span>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-xl h-screen">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-xl font-bold text-white hover:text-primary block py-3 border-b border-white/5 font-[Chakra_Petch]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full bg-primary font-bold text-white uppercase mt-4">GET TICKETS</Button>
        </div>
      )}
    </nav>
  );
}
