import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Trophy, Users, MapPin, Target, Heart, Shield, TrendingUp, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero 
        title={
          <>
            The Proving Ground of <span className="text-primary">New England</span>
          </>
        }
        subtitle="Our Story"
        alignment="center"
        titleMaxWidth="wide"
      />

      {/* Brand Identity Snapshot */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <Trophy className="mx-auto mb-3" size={32} />
              <div className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] mb-1">24+ Years</div>
              <div className="text-sm text-white/90">New England's Longest-Running MMA Promotion</div>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-3" size={32} />
              <div className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] mb-1">90+ Events</div>
              <div className="text-sm text-white/90">Professional Shows & Championships</div>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-3" size={32} />
              <div className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] mb-1">UFC-Owned</div>
              <div className="text-sm text-white/90">Operated by Calvin Kattar</div>
            </div>
            <div className="text-center">
              <MapPin className="mx-auto mb-3" size={32} />
              <div className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] mb-1">SNHU Arena</div>
              <div className="text-sm text-white/90">Premier Regional Venue</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Full Brand Story */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-8 border-l-4 border-primary pl-4 md:pl-6">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                <span className="text-primary font-bold">Combat Zone MMA</span> was born from a vision to create a professional platform 
                where New England's combat sports athletes could showcase their skills and build their legacies. For over 24 years, 
                we've been the region's premier proving ground, hosting fighters who have gone on to compete at the highest levels 
                of mixed martial arts.
              </p>
              <p>
                What started as a family-owned promotion has evolved into a cornerstone of New England's combat sports community. 
                Our reputation for integrity, fighter safety, and professional production has made us the longest-running MMA promotion 
                in the region, with over 90 events under our belt.
              </p>
              <p>
                Today, Combat Zone continues to honor its legacy while pushing forward under new leadership, maintaining the same 
                commitment to excellence that has defined us for decades. We're not just hosting fights—we're building careers, 
                creating champions, and strengthening the fabric of New England's combat sports community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* UFC-Owned Advantage */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-6">
                The <span className="text-primary">UFC-Owned</span> Advantage
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  When <span className="text-primary font-bold">Calvin Kattar</span>, UFC Featherweight contender and New England native, 
                  acquired Combat Zone, it marked a new chapter in our history. Calvin's vision goes beyond ownership—it's about giving 
                  back to the regional scene that built him.
                </p>
                <p>
                  This UFC connection matters because it brings <span className="font-bold">real-world experience</span> from the highest 
                  level of the sport directly to our promotion. Calvin understands what fighters need to succeed, what fans want to see, 
                  and how to elevate the standard of regional MMA.
                </p>
                <p>
                  Under his leadership, Combat Zone combines decades of tradition with modern production values, ensuring every event 
                  meets the professional standards fighters and fans deserve. This isn't just a business—it's a mission to elevate 
                  New England's combat sports scene.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-black via-slate-900 to-black p-8 md:p-12 rounded-xl border-2 border-primary/30 shadow-xl">
              <div className="text-center">
                <Trophy className="mx-auto mb-6 text-primary" size={64} />
                <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase text-white mb-4">
                  UFC Veteran Leadership
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Direct insight from the world's premier MMA organization, ensuring Combat Zone operates at the highest professional standards.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Mission Statement */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase">
                  Mission Statement
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                To provide a professional platform for New England's combat sports athletes to showcase their skills, build their 
                legacies, and launch their careers to the global stage. We are committed to integrity, fighter safety, and delivering 
                an unforgettable experience for our fans.
              </p>
            </div>

            {/* Vision Statement */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase">
                  Vision Statement
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                To become the premier regional MMA promotion in the United States, recognized for developing world-class talent, 
                maintaining the highest standards of production, and serving as the definitive proving ground for fighters pursuing 
                careers at the highest levels of the sport.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-12 text-center">
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Integrity & Respect", desc: "We operate with transparency, fairness, and respect for all fighters, fans, and partners." },
                { icon: Heart, title: "Fighter Safety First", desc: "The well-being of our athletes is paramount in every decision we make." },
                { icon: Users, title: "Community Impact", desc: "We're committed to strengthening New England's combat sports community." },
                { icon: Trophy, title: "Professionalism", desc: "Every event meets the highest standards of production and execution." },
              ].map((value, index) => (
                <div key={index} className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-primary transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase text-slate-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Legacy & Impact */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-12 text-center">
            Legacy & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold font-[Chakra_Petch] text-primary mb-4">90+</div>
              <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-3">Events Hosted</h3>
              <p className="text-slate-600">
                Professional shows featuring hundreds of fighters across multiple weight classes
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold font-[Chakra_Petch] text-primary mb-4">24+</div>
              <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-3">Years of Excellence</h3>
              <p className="text-slate-600">
                New England's longest-running MMA promotion, building champions since 2000
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold font-[Chakra_Petch] text-primary mb-4">100+</div>
              <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-3">Fighters Developed</h3>
              <p className="text-slate-600">
                Athletes who have competed at Combat Zone and advanced to higher levels of competition
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto bg-slate-50 border-2 border-slate-200 rounded-lg p-8 md:p-10">
            <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-6 text-center">
              Long-Term Goals
            </h3>
            <ul className="space-y-4">
              {[
                "Continue developing world-class talent and providing pathways to the highest levels of MMA",
                "Expand our community footprint through partnerships, youth programs, and regional engagement",
                "Maintain our position as New England's premier MMA promotion while elevating production standards",
                "Build lasting relationships with fighters, fans, sponsors, and the broader combat sports community"
              ].map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* The New England Connection */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <MapPin className="text-primary" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase">
                The New England Connection
              </h2>
            </div>
            <div className="bg-white border-2 border-slate-200 rounded-lg p-8 md:p-10">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                New England has a rich combat sports tradition, and <span className="text-primary font-bold">Combat Zone</span> is 
                proud to be at its heart. We're not just a promotion—we're part of the region's identity, representing the grit, 
                determination, and excellence that defines New England fighters.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Hosted at the prestigious <span className="font-bold">SNHU Arena</span> in Manchester, New Hampshire, our events 
                bring together fighters, fans, and families from across the region. We're building something that New England can 
                be proud of—a promotion that honors the past while building the future.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                This is our home. These are our fighters. This is our legacy. <span className="text-primary font-bold">Combat Zone</span> 
                is New England's proving ground, and we're here to stay.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-12 text-center">
            Leadership
          </h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border-4 border-primary/30 flex-shrink-0">
                <Trophy className="text-primary" size={80} />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-2">
                  Calvin Kattar
                </h3>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block">
                  Owner & Operator
                </span>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  UFC Featherweight contender and New England native <span className="text-primary font-bold">Calvin Kattar</span> 
                  acquired Combat Zone to give back to the regional scene that built him. His vision is to elevate the standard 
                  of regional MMA while maintaining the promotion's legacy of excellence.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  With firsthand experience competing at the highest levels of the sport, Calvin brings unique insight into what 
                  fighters need to succeed and what fans want to see. Under his leadership, Combat Zone continues to be the 
                  proving ground where New England's best fighters launch their careers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-6">
              Experience Combat Zone
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Join us for our next event and be part of New England's premier MMA experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/events">
                <Button size="lg" variant="outline" className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-wider h-14">
                  <ExternalLink className="mr-2" size={20} />
                  Events
                </Button>
              </Link>
              <Link href="/fight-card">
                <Button size="lg" variant="outline" className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-wider h-14">
                  <ExternalLink className="mr-2" size={20} />
                  Fight Card
                </Button>
              </Link>
              <Link href="/vip">
                <Button size="lg" variant="outline" className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-wider h-14">
                  <ExternalLink className="mr-2" size={20} />
                  VIP Experience
                </Button>
              </Link>
              <Link href="/sponsors">
                <Button size="lg" variant="outline" className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase tracking-wider h-14">
                  <ExternalLink className="mr-2" size={20} />
                  Sponsors
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
