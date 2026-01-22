import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function AboutPage() {
  useSEO(SEO_CONFIG.about);
  return (
    <PageLayout>
      {/* Hero - Matching clean style */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background with diagonal split */}
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-[-6deg] origin-top-right" />
        <div className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-primary to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-primary/50 to-transparent" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Container className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">
              Est. 2000
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-6">
              ABOUT <span className="text-primary">COMBAT ZONE</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              For 24 years, Combat Zone has been where New England's fighters become champions.
            </p>
          </div>
        </Container>

        {/* Bottom red accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </section>

      {/* Stats Bar - Minimal & Impactful */}
      <section className="bg-white border-b border-neutral-200">
        <Container>
          <div className="grid grid-cols-3 divide-x divide-neutral-200">
            {[
              { number: "24+", label: "Years" },
              { number: "90+", label: "Events" },
              { number: "100+", label: "Fighters" },
            ].map((stat, i) => (
              <div key={i} className="py-8 md:py-12 text-center">
                <div className="text-4xl md:text-6xl font-bold font-[Chakra_Petch] text-neutral-900">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section - Editorial Layout */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Large Quote */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-primary/10" size={80} />
                <blockquote className="text-3xl md:text-4xl font-[Chakra_Petch] text-neutral-900 leading-tight relative z-10">
                  "We're not just hosting fights—we're building careers, creating champions."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-16 h-px bg-primary" />
                  <span className="text-sm uppercase tracking-widest text-neutral-500">
                    Our Mission
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Story Content */}
            <div className="lg:col-span-7">
              <div className="space-y-8 text-lg text-neutral-600 leading-relaxed">
                <p className="text-xl text-neutral-900">
                  Combat Zone MMA was born from a vision to create a professional platform where New
                  England's combat sports athletes could showcase their skills and build their
                  legacies.
                </p>

                <p>
                  What started as a family-owned promotion has evolved into a cornerstone of New
                  England's combat sports community. Our reputation for integrity, fighter safety,
                  and professional production has made us the longest-running MMA promotion in the
                  region.
                </p>

                <p>
                  Today, Combat Zone continues to honor its legacy while pushing forward under new
                  leadership. We maintain the same commitment to excellence that has defined us for
                  decades—strengthening the fabric of New England's combat sports community one
                  fight at a time.
                </p>

                <div className="pt-8 border-t border-neutral-200">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-6">
                    What We Stand For
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: "Integrity", desc: "Transparency in every decision" },
                      { title: "Safety", desc: "Fighter wellbeing is paramount" },
                      { title: "Community", desc: "Building New England together" },
                      { title: "Excellence", desc: "Professional standards always" },
                    ].map((value, i) => (
                      <div key={i} className="group">
                        <h4 className="font-[Chakra_Petch] font-bold text-neutral-900 mb-1 group-hover:text-primary transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-sm text-neutral-500">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Section - Modern Card */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
                Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-neutral-900 mt-4">
                UFC VETERAN OWNED
              </h2>
            </div>

            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-sm shadow-2xl shadow-neutral-200/50 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Visual Side */}
                  <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-12 md:p-16 flex items-center justify-center min-h-[300px]">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(220,20,60,0.3),transparent_50%)]" />
                    </div>
                    <div className="relative text-center">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/30 mb-6">
                        <span className="text-5xl font-bold font-[Chakra_Petch] text-white">
                          CK
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold font-[Chakra_Petch] text-white">
                        Calvin Kattar
                      </h3>
                      <p className="text-primary text-sm uppercase tracking-widest mt-2">
                        Owner & Operator
                      </p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-12 md:p-16 flex flex-col justify-center">
                    <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                      When UFC Featherweight contender and New England native{" "}
                      <strong className="text-neutral-900">Calvin Kattar</strong> acquired Combat
                      Zone, it marked a new chapter in our history.
                    </p>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                      His vision goes beyond ownership—it's about giving back to the regional scene
                      that built him. With firsthand experience at the highest levels, Calvin brings
                      unique insight into what fighters need to succeed.
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                      <div className="flex-1">
                        <div className="text-2xl font-bold font-[Chakra_Petch] text-neutral-900">
                          UFC Experience
                        </div>
                        <div className="text-sm text-neutral-500">
                          Bringing the highest standards to regional MMA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-sm -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-sm -z-10" />
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">
              Legacy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-[Chakra_Petch] text-neutral-900 mt-4">
              24 YEARS OF EXCELLENCE
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-neutral-200 transform md:-tranneutral-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {[
                {
                  year: "2000",
                  title: "The Beginning",
                  desc: "Combat Zone MMA launches as a family-owned promotion in New England, establishing itself as a platform for regional fighters.",
                },
                {
                  year: "2010",
                  title: "Regional Dominance",
                  desc: "After a decade of consistent excellence, Combat Zone becomes the premier destination for New England's top combat sports talent.",
                },
                {
                  year: "2020",
                  title: "New Era",
                  desc: "Calvin Kattar acquires Combat Zone, bringing UFC-level experience and vision to elevate the regional MMA scene.",
                },
                {
                  year: "Today",
                  title: "SNHU Arena",
                  desc: "Operating at Manchester's prestigious venue, Combat Zone continues its mission of developing world-class fighters.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -tranneutral-x-1/2 border-4 border-white shadow-lg z-10" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <span className="text-primary font-mono text-sm tracking-widest">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold font-[Chakra_Petch] text-neutral-900 mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* New England Section - Full Width */}
      <section className="relative py-24 md:py-32 bg-neutral-900 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold font-[Chakra_Petch] text-white mb-8">
              THIS IS <span className="text-primary">NEW ENGLAND</span>
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed mb-6">
              New England has a rich combat sports tradition, and Combat Zone is proud to be at its
              heart. We represent the grit, determination, and excellence that defines this region.
            </p>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Hosted at the prestigious SNHU Arena in Manchester, New Hampshire, our events bring
              together fighters, fans, and families from across the region. This is our home. These
              are our fighters. This is our legacy.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section - Clean & Minimal */}
      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-neutral-900">
                Experience Combat Zone
              </h2>
              <p className="text-lg text-neutral-600 mt-4">
                Join us for our next event and be part of New England's premier MMA experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/events">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8 group"
                >
                  View Events
                  <ArrowRight
                    className="ml-2 group-hover:tranneutral-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>
              <Link href="/vip">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white font-bold uppercase tracking-wider h-14 px-8"
                >
                  VIP Experience
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
