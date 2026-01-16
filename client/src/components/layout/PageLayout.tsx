import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  showNavbar?: boolean;
  showFooter?: boolean;
}

export function PageLayout({ 
  children, 
  className = "",
  showNavbar = true,
  showFooter = true 
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-background text-foreground font-sans ${className}`}>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
}
