import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { SPONSORS } from "@/data/sponsors";

export default function SponsorsPage() {
  useSEO(SEO_CONFIG.sponsors);
  return (
    <PageLayout>
      {/* Hero - Dark & Impactful */}
      <section className="min-h-[90vh] flex items-center justify-center bg-slate-950 relative overflow-hidden">
        {/* Background gradient accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        <Container className="relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-8">
              Combat Zone MMA — Partnership Opportunities
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-8">
              Reach 5,000+ engaged fans at every event
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
              Partner with New England's longest-running MMA promotion. 24 years of excellence. UFC-owned credibility. Real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sponsor-packages">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-14 px-8 text-base">
                  View Partnership Packages
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900 font-medium h-14 px-8 text-base">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

      {/* Metrics Bar */}
      <section className="py-16 bg-slate-900 text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">5,000+</div>
              <div className="text-slate-400 text-sm">Live attendance per event</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">50K+</div>
              <div className="text-slate-400 text-sm">Combined social reach</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">90+</div>
              <div className="text-slate-400 text-sm">Professional events hosted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] mb-2">24</div>
              <div className="text-slate-400 text-sm">Years in operation</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Proposition */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left - Section intro */}
            <div className="lg:col-span-4">
              <p className="text-sm font-medium text-primary tracking-wide mb-4">Why Partner With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-slate-900 leading-tight">
                A platform built for brand visibility
              </h2>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-5">01</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">UFC Veteran Ownership</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Owned and operated by Calvin Kattar, active UFC featherweight contender. Direct connection to the highest level of the sport ensures professional standards at every event.
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-5">02</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Engaged Demographics</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our audience skews 21-45, predominantly male, with strong purchasing power. They're loyal followers who engage with sponsors both at events and online.
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-5">03</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Regional Market Leader</h3>
                  <p className="text-slate-600 leading-relaxed">
                    24 consecutive years as New England's premier MMA promotion. Deep roots in the community with a reputation for quality and integrity.
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-5">04</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Measurable ROI</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Multiple touchpoints per partnership: in-venue signage, social media features, email marketing, and live event exposure. Track your brand's impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Current Partners */}
      <section className="py-24 md:py-32 bg-slate-50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-medium text-primary tracking-wide mb-4">Our Partners</p>
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-slate-900">
                Brands that trust Combat Zone
              </h2>
            </div>
            <Link href="/sponsor-packages">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white">
                Become a Partner
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
          
          {/* Clean Logo Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 border border-slate-200">
            {SPONSORS.map((sponsor, index) => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white p-8 md:p-12 flex items-center justify-center aspect-[3/2] hover:bg-slate-50 transition-all relative ${
                  index % 3 !== 2 ? 'border-r border-slate-200' : ''
                } ${index < 6 ? 'border-b border-slate-200' : ''}`}
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="max-w-[80%] max-h-[80%] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
                <ExternalLink className="absolute top-4 right-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium text-primary tracking-wide mb-8 text-center">Partner Feedback</p>
            
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl text-slate-900 leading-relaxed mb-10">
                "The engagement from their fanbase translated directly into brand awareness and customer interest. Combat Zone delivered exactly what they promised."
              </p>
              <footer className="text-slate-500">
                <span className="font-medium text-slate-700">Regional Business Partner</span>
                <span className="mx-2">·</span>
                <span>Cage Sponsor, 2024</span>
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Partnership Tiers Preview */}
      <section className="py-24 md:py-32 bg-slate-900 text-white">
        <Container>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-wide mb-4">Partnership Levels</p>
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch]">
              Flexible packages for every budget
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-lg font-bold mb-3">Event Partner</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Logo placement, social media features, and VIP tickets for your team.
              </p>
            </div>
            <div className="bg-white/10 border border-primary/50 p-8 relative">
              <span className="absolute -top-3 left-6 bg-primary text-xs font-bold px-3 py-1 uppercase">Popular</span>
              <h3 className="text-lg font-bold mb-3">Cage Sponsor</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium cage placement, in-ring announcements, event booth, and expanded VIP access.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <h3 className="text-lg font-bold mb-3">Title Sponsor</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                "Presented by" naming rights, center canvas logo, fighter branding, and premium perks.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/sponsor-packages">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium h-14 px-10">
                View All Packages
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-slate-900 mb-6">
              Ready to reach our audience?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Contact our partnerships team to discuss how Combat Zone can help grow your brand.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-medium h-14 px-10">
                <Mail className="mr-2" size={18} />
                Get in Touch
              </Button>
            </Link>
            <p className="text-sm text-slate-500 mt-6">
              Inquiries reviewed by our partnerships team within 48 hours
            </p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
