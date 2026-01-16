import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Check, Trophy, Users, TrendingUp, Star, Quote, Building2, Mail } from "lucide-react";
import { Link } from "wouter";
import sponsor1Img from "@assets/IMAGES/Sponsor1.jpg";
import sponsor2Img from "@assets/IMAGES/Sponsor2.jpg";
import sponsor3Img from "@assets/IMAGES/Sponsor3.png";
import sponsor4Img from "@assets/IMAGES/Sponsor4.jpeg";
import sponsor5Img from "@assets/IMAGES/Sponsor5.avif";
import sponsor6Img from "@assets/IMAGES/Sponsor6.jpeg";
import sponsor7Img from "@assets/IMAGES/Sponsor7.jpeg";
import sponsor8Img from "@assets/IMAGES/Sponsor8.jpg";
import sponsor9Img from "@assets/IMAGES/Sponsor9.jpg";

const SPONSORS = [
  { id: 1, image: sponsor1Img, name: "SIG SAUER Academy", url: "https://sigsaueracademy.com/" },
  { id: 2, image: sponsor2Img, name: "Modelo USA", url: "https://www.modelousa.com/" },
  { id: 3, image: sponsor3Img, name: "Bollards Direct USA", url: "https://www.bollardsdirectusa.com/" },
  { id: 4, image: sponsor4Img, name: "GED Lawyers", url: "https://www.gedlawyers.com/" },
  { id: 5, image: sponsor5Img, name: "Goat City Transport", url: "https://goatcitytransport.com/" },
  { id: 6, image: sponsor6Img, name: "Alltown Fresh", url: "https://alltownfresh.com/" },
  { id: 7, image: sponsor7Img, name: "Brunt Workwear", url: "https://bruntworkwear.com/?srsltid=AfmBOopk5e_zDrekzxWOXVbBkGx0H69N2Zt6Urj9zKFledyeXkSs1DCE" },
  { id: 8, image: sponsor8Img, name: "Goat Barn Nation", url: "https://goatbarnation.com/" },
  { id: 9, image: sponsor9Img, name: "Bell and Williams", url: "https://bellandwilliams.com/" },
];

export default function SponsorsPage() {
  return (
    <PageLayout>
      <PageHero 
        title={
          <>
            Partner with <span className="text-primary">Combat Zone</span>
          </>
        }
        subtitle="Partnerships"
        alignment="center"
        titleMaxWidth="wide"
      />

      {/* Why Combat Zone */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-12 text-center">
            Why Combat Zone
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Brand Identity and Credibility */}
            <div>
              <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-6 border-l-4 border-primary pl-4">
                Brand Identity & Credibility
              </h3>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  <span className="text-primary font-bold">Combat Zone MMA</span> is New England's longest-running MMA promotion, 
                  with over 24 years of excellence and 90+ professional events. Our reputation for integrity, fighter safety, 
                  and professional production has made us a trusted brand in the combat sports community.
                </p>
                <p>
                  Owned and operated by <span className="font-bold">UFC veteran Calvin Kattar</span>, Combat Zone combines 
                  decades of tradition with modern production values. This UFC connection brings real-world experience from 
                  the highest level of the sport, ensuring every event meets professional standards.
                </p>
                <p>
                  When you partner with Combat Zone, you're aligning your brand with a promotion that values excellence, 
                  community impact, and long-term relationships. We're not just hosting fights—we're building careers, 
                  creating champions, and strengthening New England's combat sports community.
                </p>
              </div>
            </div>

            {/* Audience Stats */}
            <div>
              <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-6 border-l-4 border-primary pl-4">
                Audience Stats
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-lg p-6 text-center">
                  <Users className="mx-auto mb-3 text-primary" size={32} />
                  <span className="block text-4xl font-bold font-[Chakra_Petch] text-primary mb-2">5k+</span>
                  <span className="text-sm font-bold uppercase text-slate-600">Live Attendance</span>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-lg p-6 text-center">
                  <TrendingUp className="mx-auto mb-3 text-primary" size={32} />
                  <span className="block text-4xl font-bold font-[Chakra_Petch] text-primary mb-2">50k+</span>
                  <span className="text-sm font-bold uppercase text-slate-600">Social Reach</span>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-lg p-6 text-center">
                  <Trophy className="mx-auto mb-3 text-primary" size={32} />
                  <span className="block text-4xl font-bold font-[Chakra_Petch] text-primary mb-2">24+</span>
                  <span className="text-sm font-bold uppercase text-slate-600">Years Running</span>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-lg p-6 text-center">
                  <Star className="mx-auto mb-3 text-primary" size={32} />
                  <span className="block text-4xl font-bold font-[Chakra_Petch] text-primary mb-2">90+</span>
                  <span className="text-sm font-bold uppercase text-slate-600">Events Hosted</span>
                </div>
              </div>
              <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-6">
                <p className="text-slate-700 leading-relaxed">
                  Our audience is passionate, loyal, and engaged. They're not just spectators—they're part of the Combat Zone 
                  community, following fighters' careers, attending events regularly, and actively engaging with our content 
                  across all platforms.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Meet the Sponsors */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-12 text-center">
            Meet the Sponsors
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {SPONSORS.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-primary transition-all hover:shadow-xl cursor-pointer flex flex-col"
              >
                <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-slate-200 group-hover:border-primary/30 transition-all">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-contain p-3"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image for ${sponsor.name}:`, sponsor.image);
                    }}
                  />
                </div>
                <div className="text-center mt-auto">
                  <div className="font-bold font-[Chakra_Petch] uppercase text-slate-900 group-hover:text-primary transition-colors text-sm md:text-base">
                    {sponsor.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 group-hover:text-slate-600 transition-colors">Visit Website</div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies and Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-12 text-center">
            Case Studies & Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="text-primary" size={24} />
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase">Success Story</h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "Partnering with Combat Zone has been incredible for our brand visibility. The engagement from their passionate 
                fanbase translated directly into increased awareness and customer interest. The professional production and 
                community connection made it a perfect fit."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Building2 className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Local Business Partner</div>
                  <div className="text-sm text-slate-600">Event Sponsor, 2024</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-4">
                <Quote className="text-primary" size={24} />
                <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase">Brand Impact</h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "The exposure we received through Combat Zone exceeded our expectations. The combination of live event presence, 
                social media coverage, and community engagement created a comprehensive marketing opportunity that delivered 
                measurable results."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Building2 className="text-primary" size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Regional Sponsor</div>
                  <div className="text-sm text-slate-600">Cage Sponsor, 2023-2024</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold font-[Chakra_Petch] uppercase mb-4">
              Proven Results
            </h3>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Our sponsors consistently report increased brand awareness, customer engagement, and community connection. 
              Combat Zone's passionate fanbase and professional production create an ideal environment for brand partnerships 
              that deliver real value.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white rounded-xl p-8 md:p-12 text-center border-2 border-primary/30">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-6">
              Ready to Partner?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Join the Combat Zone family and connect with New England's most passionate combat sports audience. 
              Let's discuss how we can help grow your brand.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-8 py-6 text-lg">
                <Mail className="mr-2" size={20} />
                Contact Partnerships
              </Button>
            </Link>
            <p className="text-sm text-slate-400 mt-6">
              Inquiries will be forwarded to Jamison for review by Calvin
            </p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
