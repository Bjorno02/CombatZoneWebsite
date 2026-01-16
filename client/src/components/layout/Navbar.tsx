import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import logoImg from "/logo.png";
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
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open and ensure menu fills screen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
      // Reset expanded menu when closing
      setExpandedMenu(null);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  const isHome = location === "/";
  const navBackground = isHome 
    ? (scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10" : "bg-transparent") 
    : "bg-black border-b border-white/10";

  return (
    <nav className={cn("fixed top-0 w-full z-[50] transition-all duration-300 pointer-events-auto", navBackground)}>
      <div className="container mx-auto px-4 h-20 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/">
          <a className="text-3xl font-bold italic tracking-tighter font-[Chakra_Petch] flex items-center gap-1 text-white relative z-[51]">
            <span className="text-primary">COMBAT</span>ZONE
          </a>
        </Link>

        {/* Desktop Nav - Rebuilt with Shadcn NavigationMenu for Dropdowns */}
        <div className="hidden lg:flex items-center gap-2 relative z-[51]">
            <NavigationMenu>
                <NavigationMenuList>
                    {/* Events Dropdown */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                            Events
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-[400px] bg-black border border-white/10">
                                <li className="mb-2 pb-3 border-b border-white/10">
                                    <Link href="/">
                                        <a className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                                            <img src={logoImg} alt="Combat Zone" className="h-5 w-5" />
                                            <span className="text-base font-bold font-[Chakra_Petch] uppercase">CombatZone</span>
                                        </a>
                                    </Link>
                                </li>
                                <ListItem href="/events" title="Upcoming Events">
                                    Next: CZ 91 at SNHU Arena
                                </ListItem>
                                <ListItem href="/fight-card" title="Fight Card">
                                    View the full lineup
                                </ListItem>
                                <ListItem href="/events/past" title="Past Events & Results">
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
                            <ul className="grid gap-3 p-4 w-[400px] bg-black border border-white/10">
                                <li className="mb-2 pb-3 border-b border-white/10">
                                    <Link href="/">
                                        <a className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                                            <img src={logoImg} alt="Combat Zone" className="h-5 w-5" />
                                            <span className="text-base font-bold font-[Chakra_Petch] uppercase">CombatZone</span>
                                        </a>
                                    </Link>
                                </li>
                                <ListItem href="/about" title="About Combat Zone">
                                    Mission Statement & Story
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Sponsors Dropdown */}
                    <NavigationMenuItem>
                         <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                            Sponsors
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-[400px] bg-black border border-white/10">
                                <li className="mb-2 pb-3 border-b border-white/10">
                                    <Link href="/">
                                        <a className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                                            <img src={logoImg} alt="Combat Zone" className="h-5 w-5" />
                                            <span className="text-base font-bold font-[Chakra_Petch] uppercase">CombatZone</span>
                                        </a>
                                    </Link>
                                </li>
                                <ListItem href="/sponsors" title="Why Sponsor">
                                    Brand identity & Audience Stats
                                </ListItem>
                                <ListItem href="/sponsor-packages" title="Packages">
                                    Tiers & Opportunities
                                </ListItem>
                                <ListItem href="/contact" title="Contact Partnerships">
                                    Partner with Combat Zone
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Media Dropdown */}
                    <NavigationMenuItem>
                         <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                            Media
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-[400px] bg-black border border-white/10">
                                <li className="mb-2 pb-3 border-b border-white/10">
                                    <Link href="/">
                                        <a className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                                            <img src={logoImg} alt="Combat Zone" className="h-5 w-5" />
                                            <span className="text-base font-bold font-[Chakra_Petch] uppercase">CombatZone</span>
                                        </a>
                                    </Link>
                                </li>
                                <ListItem href="/media" title="Media Hub">
                                    Featured Videos & Photos
                                </ListItem>
                                <ListItem href="/news" title="Press & News">
                                    Breaking Updates
                                </ListItem>
                                <ListItem href="/social" title="Social Hub">
                                    Connect with us
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Store Dropdown */}
                    <NavigationMenuItem>
                         <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                            Store
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-[400px] bg-black border border-white/10">
                                <li className="mb-2 pb-3 border-b border-white/10">
                                    <Link href="/">
                                        <a className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                                            <img src={logoImg} alt="Combat Zone" className="h-5 w-5" />
                                            <span className="text-base font-bold font-[Chakra_Petch] uppercase">CombatZone</span>
                                        </a>
                                    </Link>
                                </li>
                                <ListItem href="/shop" title="All Products">
                                    Shop Official Gear
                                </ListItem>
                                <ListItem href="/shop/best-sellers" title="Best Sellers">
                                    Fan Favorites
                                </ListItem>
                                <ListItem href="/shop/kattarmania" title="Kattarmania">
                                    Exclusive Collection
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Fighters Dropdown */}
                    <NavigationMenuItem>
                         <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary data-[state=open]:bg-white/10 font-[Chakra_Petch] uppercase font-bold tracking-wide text-sm">
                            Fighters
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 w-[400px] bg-black border border-white/10">
                                <li className="mb-2 pb-3 border-b border-white/10">
                                    <Link href="/">
                                        <a className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                                            <img src={logoImg} alt="Combat Zone" className="h-5 w-5" />
                                            <span className="text-base font-bold font-[Chakra_Petch] uppercase">CombatZone</span>
                                        </a>
                                    </Link>
                                </li>
                                <ListItem href="/champions" title="Champions">
                                    Current Title Holders
                                </ListItem>
                                <ListItem href="/fighters/checklist" title="Fighter Checklist">
                                    Rules, Licensing & Medicals
                                </ListItem>
                                <ListItem href="/fighters/forms" title="Forms Table">
                                    Download Required Docs
                                </ListItem>
                                <ListItem href="/apply" title="Onboarding">
                                    Fighter Application
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                     {/* Contact Link */}
                    <NavigationMenuItem>
                        <Link href="/contact">
                            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10 hover:text-primary focus:bg-white/10 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 font-[Chakra_Petch]">
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-4 relative z-[51]">
           <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
             <Button 
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-6 rounded-none skew-x-[-10deg]"
             >
              <span className="skew-x-[10deg]">Get Tickets</span>
            </Button>
           </a>
        </div>

        {/* Mobile Toggle - Wrapped in container to ensure it's always on top */}
        <div className="lg:hidden relative z-[60]">
          <button
            className="text-white p-2 -mr-2 touch-manipulation pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="lg:hidden fixed bg-black z-[55] overflow-y-auto"
          style={{ 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            width: '100vw',
            height: '100vh',
            position: 'fixed'
          }}
        >
          <div className="min-h-full flex flex-col pt-20 px-6 pb-6">
            <div className="flex flex-col gap-2">
              {/* Events Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === 'events' ? null : 'events')}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Events
                  <ChevronDown className={cn("transition-transform", expandedMenu === 'events' && "rotate-180")} size={20} />
                </button>
                {expandedMenu === 'events' && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/events" onClick={() => setIsOpen(false)} isSubItem>Upcoming Events</MobileLink>
                    <MobileLink href="/fight-card" onClick={() => setIsOpen(false)} isSubItem>Fight Card</MobileLink>
                    <MobileLink href="/events/past" onClick={() => setIsOpen(false)} isSubItem>Past Events & Results</MobileLink>
                    <MobileLink href="/vip" onClick={() => setIsOpen(false)} isSubItem>VIP Experience</MobileLink>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === 'about' ? null : 'about')}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  About
                  <ChevronDown className={cn("transition-transform", expandedMenu === 'about' && "rotate-180")} size={20} />
                </button>
                {expandedMenu === 'about' && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/about" onClick={() => setIsOpen(false)} isSubItem>About Combat Zone</MobileLink>
                  </div>
                )}
              </div>

              {/* Sponsors Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === 'sponsors' ? null : 'sponsors')}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Sponsors
                  <ChevronDown className={cn("transition-transform", expandedMenu === 'sponsors' && "rotate-180")} size={20} />
                </button>
                {expandedMenu === 'sponsors' && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/sponsors" onClick={() => setIsOpen(false)} isSubItem>Why Sponsor</MobileLink>
                    <MobileLink href="/sponsor-packages" onClick={() => setIsOpen(false)} isSubItem>Packages</MobileLink>
                    <MobileLink href="/contact" onClick={() => setIsOpen(false)} isSubItem>Contact Partnerships</MobileLink>
                  </div>
                )}
              </div>

              {/* Media Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === 'media' ? null : 'media')}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Media
                  <ChevronDown className={cn("transition-transform", expandedMenu === 'media' && "rotate-180")} size={20} />
                </button>
                {expandedMenu === 'media' && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/media" onClick={() => setIsOpen(false)} isSubItem>Media Hub</MobileLink>
                    <MobileLink href="/news" onClick={() => setIsOpen(false)} isSubItem>Press & News</MobileLink>
                    <MobileLink href="/social" onClick={() => setIsOpen(false)} isSubItem>Social Hub</MobileLink>
                  </div>
                )}
              </div>

              {/* Fighters Dropdown */}
              <div>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === 'fighters' ? null : 'fighters')}
                  className="w-full text-left text-xl sm:text-2xl font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase border-b border-white/10 pb-3 pt-1 touch-manipulation flex items-center justify-between"
                >
                  Fighters
                  <ChevronDown className={cn("transition-transform", expandedMenu === 'fighters' && "rotate-180")} size={20} />
                </button>
                {expandedMenu === 'fighters' && (
                  <div className="pl-4 pt-2 pb-2 space-y-2">
                    <MobileLink href="/fighters" onClick={() => setIsOpen(false)} isSubItem>Fighter Portal</MobileLink>
                    <MobileLink href="/apply" onClick={() => setIsOpen(false)} isSubItem>Fighter Application</MobileLink>
                  </div>
                )}
              </div>

              <MobileLink href="/shop" onClick={() => setIsOpen(false)}>Store</MobileLink>
              <MobileLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
              <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-primary font-bold text-white uppercase mt-2 py-6 text-base touch-manipulation">GET TICKETS</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
}

const ListItem = ({ className, title, children, href, ...props }: ListItemProps) => {
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

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isSubItem?: boolean;
}

const MobileLink = ({ href, children, onClick, isSubItem = false }: MobileLinkProps) => (
    <Link href={href}>
        <a 
            onClick={onClick} 
            className={cn(
                "font-bold text-white hover:text-primary font-[Chakra_Petch] uppercase touch-manipulation block",
                isSubItem 
                    ? "text-base sm:text-lg border-b border-white/5 pb-2 pt-1" 
                    : "text-xl sm:text-2xl border-b border-white/10 pb-3 pt-1"
            )}
        >
            {children}
        </a>
    </Link>
)
