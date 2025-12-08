import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { EventSection } from "@/components/home/EventSection";
import { NewsSection } from "@/components/home/NewsSection";
import { MerchSection } from "@/components/home/MerchSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <EventSection />
        <NewsSection />
        <MerchSection />
      </main>
      <Footer />
    </div>
  );
}
