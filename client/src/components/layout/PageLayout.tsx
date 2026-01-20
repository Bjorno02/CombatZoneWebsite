import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SkipToContent } from "../SkipToContent";

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
      <SkipToContent />
      {showNavbar && <Navbar />}
      <main id="main-content">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
