import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TICKETMASTER_EVENT_URL } from "@/lib/constants";
import { Star, Crown, Users, Camera, UtensilsCrossed, Ticket, CheckCircle2, MapPin, HelpCircle } from "lucide-react";
import vip1Img from "@assets/IMAGES/VIP1.jpg";
import vip2Img from "@assets/IMAGES/VIP2.jpg";
import vip3Img from "@assets/IMAGES/VIP3.jpg";
import vip4Img from "@assets/IMAGES/VIP4.jpg";
import vip5Img from "@assets/IMAGES/VIP5.jpg";
import vip6Img from "@assets/IMAGES/VIP6.jpg";

const VIP_PACKAGES = {
  risingStar: {
    name: "Rising Star Package",
    price: 120.00,
    section: "Upper Level Bowl Seating",
    icon: Star,
  },
  elite: {
    name: "Elite Level Package",
    price: 125.00,
    section: "Lower Level Bowl Seating",
    icon: Crown,
  },
};

const SHARED_FEATURES = [
  "Official CZ event ticket",
  "In Venue Hospitality with UFC athlete appearances",
  "Cash Bar & Food Buffet sponsored by Alltown Fresh",
  "14 x 10 event poster signed by fighters on the card",
  "Dedicated VIP Entrance to SNHU Arena",
];

const VIP_IMAGES = [
  vip1Img,
  vip2Img,
  vip3Img,
  vip4Img,
  vip5Img,
  vip6Img,
];

const FAQS = [
  {
    question: "Can I purchase tickets over the phone?",
    answer: "No, please contact us here to secure your VIP Package.",
  },
  {
    question: "Do the packages have a minimum age requirement?",
    answer: "There is typically no age requirement to attend the event and our hospitality. However, you will need an ID to check in at the event.",
  },
  {
    question: "Can I choose my seat?",
    answer: "You can request a certain section and row if available on the seating chart. However, the exact seat number is not confirmed until tickets are in your possession.",
  },
  {
    question: "How & when will I receive my tickets?",
    answer: "Tickets will be available for pick up at the VIP table along with your credentials the night of the event. An informational email will also be sent explaining details 24 hours prior to event as well.",
  },
  {
    question: "Can I purchase the VIP upgrade if I've already purchased a ticket to the event?",
    answer: "Yes, if you already have an event ticket purchased and would like to upgrade to a VIP package please email jmsnkattar@czmma.com and someone will be happy to assist you.",
  },
  {
    question: "What time does hospitality open and how long does it last?",
    answer: "Hospitality starts when doors open for the event. The food usually lasts till about the start of the main card. Typically for about 3 or so hours. A private cash bar is available throughout the entirety of the event.",
  },
  {
    question: "Is VIP parking included?",
    answer: "Parking is not included in these packages however, there is parking available around the venue. Please refer to the venue's website for more information regarding parking here.",
  },
  {
    question: "What if I change my mind and don't want my package?",
    answer: "All packages are non-refundable and cannot be returned once purchased.",
  },
];

export default function VIPPage() {
  return (
    <PageLayout>
      <PageHero 
        title={
          <>
            VIP <span className="text-primary">Experience</span>
          </>
        }
        subtitle="Premium Experience"
        description="Secure the ultimate VIP access to our live events. From access to the all-inclusive VIP lounge to exclusive photo opportunities with UFC athletes, every detail is designed to place you closer to the action."
        alignment="center"
        minHeight="tall"
        titleMaxWidth="wide"
      />

      {/* Info Strip */}
      <section className="py-6 bg-primary text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <Ticket className="text-white" size={20} />
              <div>
                <div className="font-bold">VIP Packages Available</div>
                <div className="text-sm text-white/90">Rising Star & Elite Level packages</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
              <span className="text-sm font-bold uppercase tracking-wider">⚠️ Limited Availability</span>
            </div>
          </div>
        </Container>
      </section>

      {/* VIP Packages Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-4">
              VIP Packages
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-4">
              Choose your experience.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 border-2 border-primary/30 px-6 py-2 rounded-lg">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">⚠️ Limited Availability</span>
            </div>
          </div>
          
          {/* Packages Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Rising Star Package */}
            <div>
              {/* Package Card */}
              <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center border-2 border-primary/20">
                      <Star className="text-primary" size={28} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase text-slate-900">
                      Rising Star
                    </h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Price</div>
                    <div className="text-4xl md:text-5xl font-bold text-primary">
                      ${VIP_PACKAGES.risingStar.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="text-primary" size={18} />
                      <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Seating</span>
                    </div>
                    <div className="font-bold text-slate-900">{VIP_PACKAGES.risingStar.section}</div>
                  </div>

                  <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary text-white hover:bg-primary/90 font-bold uppercase h-14 text-lg shadow-lg shadow-primary/20"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Ticket className="w-5 h-5" /> Buy Now
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Elite Level Package */}
            <div>
              {/* Package Card */}
              <div className="bg-gradient-to-br from-black via-slate-900 to-black border-2 border-primary rounded-xl overflow-hidden shadow-lg shadow-primary/20 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border-2 border-primary/30">
                      <Crown className="text-primary" size={28} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase text-white">
                      Elite Level
                    </h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Price</div>
                    <div className="text-4xl md:text-5xl font-bold text-primary">
                      ${VIP_PACKAGES.elite.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="text-primary" size={18} />
                      <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Seating</span>
                    </div>
                    <div className="font-bold text-white">{VIP_PACKAGES.elite.section}</div>
                  </div>

                  <a href={TICKETMASTER_EVENT_URL} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase h-14 text-lg shadow-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Ticket className="w-5 h-5" /> Buy Now
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Shared Features Section */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-8 md:p-10">
            <h4 className="text-xl md:text-2xl font-bold font-[Chakra_Petch] uppercase mb-6 text-center">
              Both Packages Include
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SHARED_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                  <span className="text-slate-700 text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What VIP Feels Like - Images with Breakdown */}
      <section className="py-20 md:py-28 bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Experience</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] uppercase mb-4">
              What VIP <span className="text-primary">Feels Like</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {VIP_IMAGES.map((image, index) => (
              <div key={index} className="group">
                <div className="aspect-square rounded-xl overflow-hidden relative shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/30">
                  <img 
                    src={image} 
                    alt={`VIP Experience ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VIP FAQs */}
      <section className="py-16 md:py-24 bg-primary">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <HelpCircle className="text-white" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase text-white">
                VIP FAQs
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border-2 border-white/30 rounded-lg px-6 py-2 shadow-lg"
                >
                  <AccordionTrigger className="text-left font-bold font-[Chakra_Petch] uppercase text-slate-900 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
