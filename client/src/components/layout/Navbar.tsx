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
  // On home page: Transparent -> White on scroll
  // On other pages: Always White (or black depending on design preference, let's go with UFC style White bar)
  
  const navBackground = isHome 
    ? (scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white") 
    : "bg-white text-black shadow-md";

  const logoColor = isHome && !scrolled ? "text-white" : "text-black";
  const linkColor = isHome && !scrolled ? "text-white hover:text-primary" : "text-black hover:text-primary";
  const buttonVariant = isHome && !scrolled ? "secondary" : "default";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        navBackground,
        !isHome && "border-b"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className={cn("text-3xl font-bold italic tracking-tighter font-[Oswald] flex items-center gap-1", logoColor)}>
            <span className="text-primary">COMBAT</span>ZONE
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-bold tracking-wider transition-colors font-[Oswald] uppercase",
                  linkColor,
                  location === link.href && "text-primary"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
           <button className={cn("hover:text-primary transition-colors", linkColor)}>
              <User size={20} />
           </button>
           <Button 
            className={cn("font-bold uppercase tracking-wider skew-x-[-10deg] px-6", 
                isHome && !scrolled ? "bg-white text-black hover:bg-gray-200" : "bg-primary text-white hover:bg-primary/90"
            )}
           >
            <span className="skew-x-[10deg]">Get Tickets</span>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden", isHome && !scrolled ? "text-white" : "text-black")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white text-black border-t border-gray-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-xl">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-lg font-bold hover:text-primary block py-3 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full bg-primary font-bold text-white uppercase">GET TICKETS</Button>
        </div>
      )}
    </nav>
  );
}
