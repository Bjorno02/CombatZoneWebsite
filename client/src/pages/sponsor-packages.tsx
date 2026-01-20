import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHero } from "@/components/layout/SectionHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Check, Mail, Star } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import { SPONSOR_PACKAGES } from "@/data/sponsors";

export default function SponsorPackagesPage() {
  useSEO(SEO_CONFIG.sponsorPackages);
  return (
    <PageLayout>
      <SectionHero
        label="Sponsorship Tiers"
        title="PARTNERSHIP\nPACKAGES"
        highlightWord="PACKAGES"
        description="Choose the partnership level that fits your brand and marketing goals."
        breadcrumbs={[
          { label: "Why Sponsor", href: "/sponsors" },
          { label: "Packages" },
        ]}
        align="center"
        size="short"
      />

      {/* Packages Grid */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SPONSOR_PACKAGES.map((pkg, index) => (
              <div 
                key={index}
                className={`relative ${pkg.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider flex items-center gap-1">
                      <Star size={12} />
                      {pkg.badge}
                    </div>
                  </div>
                )}
                
                <div className={`h-full ${
                  pkg.featured 
                    ? 'bg-slate-900 text-white border-2 border-primary shadow-2xl shadow-primary/20' 
                    : 'bg-white border border-slate-200 hover:border-slate-300'
                } transition-all`}>
                  {/* Header */}
                  <div className={`p-8 border-b ${pkg.featured ? 'border-slate-700' : 'border-slate-200'}`}>
                    <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Benefits */}
                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {pkg.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            pkg.featured ? 'bg-primary' : 'bg-primary/10'
                          }`}>
                            <Check className={`${pkg.featured ? 'text-white' : 'text-primary'}`} size={12} />
                          </div>
                          <span className={`text-sm ${pkg.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <Button 
                        className={`w-full font-bold uppercase tracking-wider h-12 ${
                          pkg.featured 
                            ? 'bg-primary hover:bg-primary/90 text-white' 
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        Inquire Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-500">
              Looking for something custom? <Link href="/contact" className="text-primary font-bold hover:underline">Contact us</Link> to discuss tailored partnership opportunities.
            </p>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-primary text-white px-4 py-2 font-bold font-[Chakra_Petch] uppercase tracking-wider text-sm">
                All Packages Include
              </div>
              <div className="h-px flex-1 bg-slate-300" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Professional Production", desc: "Your brand featured in UFC-quality production and broadcasts" },
                { title: "Engaged Audience", desc: "Access to 5,000+ passionate live attendees per event" },
                { title: "Social Media Exposure", desc: "Content shared across our 50k+ social media reach" },
                { title: "Community Connection", desc: "Direct connection to New England's combat sports community" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white border border-slate-200">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold font-[Chakra_Petch] text-slate-900 uppercase mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white mb-2">
                READY TO GET STARTED?
              </h2>
              <p className="text-slate-400">
                Contact our partnerships team to discuss your sponsorship goals.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8 whitespace-nowrap group">
                <Mail className="mr-2" size={20} />
                Contact Partnerships
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
