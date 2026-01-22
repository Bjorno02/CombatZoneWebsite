import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export default function SocialPage() {
  return (
    <PageLayout className="pt-20">
      {/* Social Hub */}
      <section className="pt-8 md:pt-12 pb-20 md:pb-32 bg-white">
        <Container>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto">
              Stay connected with the latest updates, behind-the-scenes content, fighter highlights,
              and exclusive Combat Zone moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/combatzonemma/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-8 md:p-10 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 flex flex-col items-center justify-center text-center min-h-[280px]"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 md:p-6 mb-5 group-hover:bg-white/30 transition-all group-hover:scale-110">
                <Instagram className="text-white w-12 h-12 md:w-14 md:h-14" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold font-[Chakra_Petch] uppercase text-base md:text-lg tracking-wider mb-2">
                Instagram
              </span>
              <span className="text-white/90 text-sm">@combatzonemma</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/CZMMA/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 flex flex-col items-center justify-center text-center min-h-[280px]"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 md:p-6 mb-5 group-hover:bg-white/30 transition-all group-hover:scale-110">
                <Facebook className="text-white w-12 h-12 md:w-14 md:h-14" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold font-[Chakra_Petch] uppercase text-base md:text-lg tracking-wider mb-2">
                Facebook
              </span>
              <span className="text-white/90 text-sm">CZMMA</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@CombatZoneMMA"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-red-600 to-red-800 p-8 md:p-10 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/50 flex flex-col items-center justify-center text-center min-h-[280px]"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 md:p-6 mb-5 group-hover:bg-white/30 transition-all group-hover:scale-110">
                <Youtube className="text-white w-12 h-12 md:w-14 md:h-14" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold font-[Chakra_Petch] uppercase text-base md:text-lg tracking-wider mb-2">
                YouTube
              </span>
              <span className="text-white/90 text-sm">@CombatZoneMMA</span>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/czmma"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-neutral-800 to-black p-8 md:p-10 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-neutral-500/50 flex flex-col items-center justify-center text-center min-h-[280px] border-2 border-neutral-700 group-hover:border-neutral-500"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 md:p-6 mb-5 group-hover:bg-white/30 transition-all group-hover:scale-110">
                <Twitter className="text-white w-12 h-12 md:w-14 md:h-14" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold font-[Chakra_Petch] uppercase text-base md:text-lg tracking-wider mb-2">
                X (Twitter)
              </span>
              <span className="text-white/90 text-sm">@czmma</span>
            </a>
          </div>

          <div className="text-center mt-16 md:mt-20">
            <p className="text-neutral-600 text-base md:text-lg max-w-2xl mx-auto">
              Join thousands of fans and never miss a moment of the action. Follow us for exclusive
              content, fighter updates, event announcements, and behind-the-scenes access.
            </p>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
