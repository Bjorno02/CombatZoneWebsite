import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { FighterHero } from "@/components/fighters/FighterHero";
import { FileText, ExternalLink, Shield, ClipboardCheck } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function FighterApplicationPage() {
  useSEO({
    title: "Fighter Application | Combat Zone MMA",
    description:
      "Apply to compete at Combat Zone MMA events. Download and complete the official onboarding form to begin your journey.",
  });

  const applicationUrl =
    "https://onlineforms.nh.gov/nform/app/?allowAnonymous=true#/formversion/1b6abfab-1cf9-4bde-983c-eccced7ff72f";

  return (
    <PageLayout>
      <FighterHero
        label="Start Your Journey"
        title="FIGHTER"
        highlightedTitle="APPLICATION"
        description="Ready to step into the Combat Zone? Complete the official onboarding form to begin your path to the cage."
      />

      {/* Application Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Featured Form Card */}
            <div className="relative bg-neutral-950 border border-neutral-800 p-8 md:p-12 overflow-hidden group">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-4 border-t-4 border-primary" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary/20 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest mb-1">
                      Official Document
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white">
                      Fighter Onboarding Form
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl">
                  Complete the official New Hampshire State online form to apply for competing at
                  Combat Zone events. Fill out all sections thoroughly to expedite the review
                  process.
                </p>

                {/* Info badges */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-neutral-300 text-sm">Secure Submission</span>
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2">
                    <ClipboardCheck className="w-4 h-4 text-primary" />
                    <span className="text-neutral-300 text-sm">All-in-One Application</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white py-4 px-8 font-bold text-lg uppercase tracking-wider transition-colors"
                >
                  <span>Open Application</span>
                  <ExternalLink className="w-5 h-5" />
                </a>

                {/* File info */}
                <p className="text-neutral-500 text-sm mt-4">
                  NH Online Forms System • Opens in new tab
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
