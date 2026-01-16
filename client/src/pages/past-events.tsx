import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Calendar } from "lucide-react";

export default function PastEventsPage() {
  return (
    <PageLayout>
      <PageHero 
        title="Past Events & Results"
        subtitle="Archive"
        alignment="left"
      />

      {/* Info Strip */}
      <section className="py-6 bg-primary text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <Calendar className="text-white" size={20} />
              <div>
                <div className="font-bold">Event Archive</div>
                <div className="text-sm text-white/90">Browse past events and results</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Past Events - Barebones Base */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase mb-8 md:mb-12 border-l-4 border-primary pl-4 md:pl-6">
            Past Events
          </h2>
          
          <div className="text-center py-16">
            <Calendar className="mx-auto text-slate-300 mb-4" size={64} />
            <p className="text-slate-600 text-lg">Past events archive coming soon</p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
