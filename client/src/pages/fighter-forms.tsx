import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { FighterHero } from "@/components/fighters/FighterHero";
import { FileText, ArrowDownToLine } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

// Form data - centralized for easy maintenance
const FIGHTER_FORMS = [
  {
    id: "nh-medical",
    title: "NH Medical Forms",
    description: "New Hampshire State Required Medical Forms for fighters.",
    fileName: "NH_Medical_Forms.pdf",
    fileType: "PDF",
    number: "01",
  },
  {
    id: "nh-mma-rules",
    title: "NH MMA Rules",
    description: "New Hampshire Professional MMA Unified Rules for fighters.",
    fileName: "NH_Professional_MMA_Rules.pdf",
    fileType: "PDF",
    number: "02",
  },
  {
    id: "cz-fighter-info",
    title: "CZ Fighter Info Form",
    description: "Combat Zone Fighter Information form for fighters competing.",
    fileName: "CZ_Fighter_Information_Form.docx",
    fileType: "DOCX",
    number: "03",
  },
  {
    id: "cz-kickboxing-rules",
    title: "CZ Kickboxing Rules",
    description:
      "Combat Zone Kickboxing Rules & Regulations for Professional and Amateur Fighters.",
    fileName: "CZ_Kickboxing_Rules.docx",
    fileType: "DOCX",
    number: "04",
  },
  {
    id: "ma-mma-rules",
    title: "MA MMA Rules",
    description: "Massachusetts Professional MMA Rules for fighters.",
    fileName: "MA_Professional_MMA_Rules.pdf",
    fileType: "PDF",
    number: "05",
  },
];

export default function FighterFormsPage() {
  useSEO({
    title: "Fighter Forms | Combat Zone MMA",
    description:
      "Download required fighter documentation including medical clearance, bout agreements, liability waivers, and licensing applications.",
  });

  const formsBasePath = "/forms";

  // Split forms: first 3 on top, last 2 on bottom
  const topRow = FIGHTER_FORMS.slice(0, 3);
  const bottomRow = FIGHTER_FORMS.slice(3);

  return (
    <PageLayout>
      <FighterHero
        label="Fighter Resources"
        title="FIGHTER"
        highlightedTitle="FORMS"
        description="Download required documentation for competing at Combat Zone events."
      />

      {/* Forms Section */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {topRow.map((form) => (
              <FormCard key={form.id} form={form} basePath={formsBasePath} />
            ))}
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[calc(66.666%-0.75rem)] mx-auto">
            {bottomRow.map((form) => (
              <FormCard key={form.id} form={form} basePath={formsBasePath} />
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

// Extracted Form Card Component
interface FormCardProps {
  form: (typeof FIGHTER_FORMS)[0];
  basePath: string;
}

function FormCard({ form, basePath }: FormCardProps) {
  return (
    <div className="bg-neutral-50 border border-neutral-200 p-6 md:p-8 flex flex-col h-full group hover:border-primary/30 hover:shadow-md transition-all">
      {/* Header with number and icon */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold font-[Chakra_Petch] text-primary">{form.number}</span>
          <div className="h-6 w-px bg-neutral-300" />
          <FileText className="w-5 h-5 text-neutral-400" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 mb-6">
        <h3 className="text-xl font-bold font-[Chakra_Petch] text-neutral-900 mb-3">
          {form.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed">{form.description}</p>
      </div>

      {/* View/Download Button */}
      {form.fileType === "DOCX" ? (
        <a
          href={`${basePath}/${form.fileName}`}
          download
          className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-primary text-white py-3 px-4 font-bold text-sm uppercase tracking-wider transition-colors"
        >
          <ArrowDownToLine className="w-4 h-4" />
          <span>Download {form.fileType}</span>
        </a>
      ) : (
        <a
          href={`${basePath}/${form.fileName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-primary text-white py-3 px-4 font-bold text-sm uppercase tracking-wider transition-colors"
        >
          <ArrowDownToLine className="w-4 h-4" />
          <span>View {form.fileType}</span>
        </a>
      )}
    </div>
  );
}
