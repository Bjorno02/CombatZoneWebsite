import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  const isHome = location === "/";
  const navBackground = isHome 
    ? (scrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-white/10" : "bg-transparent") 
    : "bg-slate-900 border-b border-white/10";

  return (
    <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300", navBackground)}>
      <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="text-3xl font-bold italic tracking-tighter font-[Chakra_Petch] flex items-center gap-1 text-white z-50">
            <span className="text-primary">COMBAT</span>ZONE
          </a>
        </Link>

        {/* Desktop Nav - Rebuilt with Shadcn NavigationMenu for Dropdowns */}
        <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
                <NavigationMenuList>
                    {/* Events Dropdown */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                            Events
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-[400px] bg-slate-900 border border-white/10">
                                <ListItem href="/events" title="Upcoming Events">
                                    Next: CZ 91 at SNHU Arena
                                </ListItem>
                                <ListItem href="/fight-card" title="Fight Card">
                                    View the full lineup
                                </ListItem>
                                <ListItem href="/results" title="Past Events & Results">
                                    Archive of previous shows
                                </ListItem>
                                <ListItem href="/vip" title="VIP Experience">
                                    Exclusive access & premium seating
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* About Dropdown */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                            About
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-[400px] bg-slate-900 border border-white/10">
                                <ListItem href="/about" title="Our Story">
                                    Mission, History & Leadership
                                </ListItem>
                                <ListItem href="/sponsors" title="Sponsors">
                                    Partner with Combat Zone
                                </ListItem>
                                <ListItem href="/contact" title="Contact">
                                    Get in touch with us
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Fighters Link */}
                    <NavigationMenuItem>
                        <Link href="/fighters">
                            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-[Chakra_Petch]">
                                Fighters
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Media Link */}
                    <NavigationMenuItem>
                        <Link href="/media">
                            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-[Chakra_Petch]">
                                Media
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Store Link */}
                    <NavigationMenuItem>
                        <Link href="/shop">
                            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-[Chakra_Petch]">
                                Store
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-4">
           <Button 
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-6 rounded-none skew-x-[-10deg]"
           >
            <span className="skew-x-[10deg]">Get Tickets</span>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-900 z-40 pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col gap-6">
            <MobileLink href="/events" onClick={() => setIsOpen(false)}>Events</MobileLink>
            <MobileLink href="/about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="/fighters" onClick={() => setIsOpen(false)}>Fighters</MobileLink>
            <MobileLink href="/media" onClick={() => setIsOpen(false)}>Media</MobileLink>
            <MobileLink href="/shop" onClick={() => setIsOpen(false)}>Store</MobileLink>
            <MobileLink href="/sponsors" onClick={() => setIsOpen(false)}>Sponsors</MobileLink>
            <MobileLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
            <Button className="w-full bg-primary font-bold text-white uppercase mt-4">GET TICKETS</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <Link href={href}>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 hover:text-primary focus:bg-white/5 focus:text-primary",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none text-white font-[Chakra_Petch] uppercase">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-400">
            {children}
          </p>
        </a>
      </Link>
    </li>
  );
};

const MobileLink = ({ href, children, onClick }: any) => (
    <Link href={href}>
        <a onClick={onClick} className="text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-2">
            {children}
        </a>
    </Link>
)
