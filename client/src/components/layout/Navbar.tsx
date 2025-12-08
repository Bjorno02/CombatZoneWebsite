import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
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
    { name: "HOME", href: "/" },
    { name: "EVENTS", href: "/events" },
    { name: "FIGHTERS", href: "/fighters" },
    { name: "NEWS", href: "/news" },
    { name: "SHOP", href: "/shop" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-black/90 backdrop-blur-md border-white/10 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold italic tracking-tighter text-white font-[Oswald]">
            COMBAT<span className="text-primary">ZONE</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-bold tracking-wider hover:text-primary transition-colors font-[Oswald]",
                  location === link.href ? "text-primary" : "text-white/80"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white font-bold skew-x-[-10deg]">
            <span className="skew-x-[10deg]">GET TICKETS</span>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-lg font-bold text-white hover:text-primary block py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full bg-primary font-bold">GET TICKETS</Button>
        </div>
      )}
    </nav>
  );
}
