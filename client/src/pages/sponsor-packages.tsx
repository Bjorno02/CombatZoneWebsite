import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function SponsorPackagesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white relative overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center justify-center pt-24 md:pt-28 pb-10 md:pb-14">
        {/* Subtle diagonal pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        {/* Gradient accents */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10"></div>
        
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16 relative z-10 w-full">
          <div className="flex flex-col justify-center items-center text-center">
            <span className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block text-sm m-0">Packages</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[Chakra_Petch] uppercase max-w-5xl m-0">
              Sponsorship <span className="text-primary">Tiers</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tier 1 */}
            <div className="bg-white p-8 border-2 border-slate-200 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-6">Event Partner</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-slate-600">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  Logo on Event Poster
                </li>
                <li className="flex gap-2 text-sm text-slate-600">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  Social Media Shoutouts
                </li>
                <li className="flex gap-2 text-sm text-slate-600">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  2 VIP Tickets
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full font-bold uppercase border-2 border-slate-900 hover:bg-slate-900 hover:text-white">
                  Inquire
                </Button>
              </Link>
            </div>
            
            {/* Tier 2 */}
            <div className="bg-gradient-to-br from-black via-slate-900 to-black text-white p-8 border-2 border-primary rounded-lg shadow-xl scale-105 relative">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 uppercase mb-4 inline-block rounded">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-6">Cage Sponsor</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-slate-300">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  Logo on Cage Canvas/Pad
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  In-Cage Announcement
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  4 VIP Tickets
                </li>
                <li className="flex gap-2 text-sm text-slate-300">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  Booth at Event
                </li>
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 font-bold uppercase border-none">
                  Inquire
                </Button>
              </Link>
            </div>
            
            {/* Tier 3 */}
            <div className="bg-white p-8 border-2 border-slate-200 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-6">Title Sponsor</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-slate-600">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  "Presented By" Naming Rights
                </li>
                <li className="flex gap-2 text-sm text-slate-600">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  Center Canvas Logo
                </li>
                <li className="flex gap-2 text-sm text-slate-600">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  10 VIP Tickets (Table)
                </li>
                <li className="flex gap-2 text-sm text-slate-600">
                  <Check className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" /> 
                  Fighter Kit Branding
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full font-bold uppercase border-2 border-slate-900 hover:bg-slate-900 hover:text-white">
                  Inquire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
