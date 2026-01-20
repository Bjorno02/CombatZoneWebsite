import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { ExternalLink, PlayCircle } from "lucide-react";
import { YouTubeFeed } from "@/components/media/YouTubeFeed";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

// Featured video configuration
const FEATURED_VIDEO_ID = "u4KfsNQrJqw";
const FEATURED_VIDEO_START = 150; // Start at 2:30 (150 seconds)

export default function MediaPage() {
  useSEO(SEO_CONFIG.media);

  return (
    <PageLayout className="pt-20">
      {/* Featured Video */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24">
        <Container>
          <div className="text-center mb-8">
            <a
              href="https://www.youtube.com/@CombatZoneMMA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider transition-all text-xl md:text-2xl lg:text-3xl py-6 px-8 md:py-8 md:px-12 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              <span>Subscribe to Combat Zone MMA YouTube Channel</span>
              <ExternalLink size={28} className="md:w-7 md:h-7" />
            </a>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] uppercase mb-6 border-l-4 border-primary pl-4">
            FEATURED VIDEO
          </h2>
          <a
            href={`https://www.youtube.com/watch?v=${FEATURED_VIDEO_ID}&t=${FEATURED_VIDEO_START}`}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-video bg-slate-900 w-full relative overflow-hidden rounded-lg shadow-2xl block group"
          >
            {/* YouTube Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/maxresdefault.jpg`}
              alt="Combat Zone MMA Featured Video"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback to standard quality if maxres not available
                (e.target as HTMLImageElement).src =
                  `https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/hqdefault.jpg`;
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              {/* Play Button */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-red-600 group-hover:bg-red-700 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-2xl">
                <PlayCircle className="w-12 h-12 md:w-14 md:h-14 text-white" />
              </div>
            </div>

            {/* Watch on YouTube badge */}
            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              <ExternalLink size={16} />
              Watch on YouTube
            </div>
          </a>
        </Container>
      </section>

      {/* Latest Videos - YouTube Feed */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase mb-12">Latest Videos</h2>
          <YouTubeFeed />
        </Container>
      </section>

      {/* Photo Galleries */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold font-[Chakra_Petch] uppercase">Photo Galleries</h2>
            <a href="#" className="text-primary font-bold uppercase text-sm hover:underline">
              View Archive
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-slate-100 relative group overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold uppercase border-b-2 border-primary">
                    View Gallery
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
