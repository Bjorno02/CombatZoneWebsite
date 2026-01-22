import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Trophy, Shield, Target, Award, Flame, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";
import elvinJohnsonImg from "@assets/IMAGES/CZ90ChampElvinJohnson.jpg";
import connorMorrillImg from "@assets/IMAGES/CZ90ChampConnorMorrill.jpg";

const CHAMPIONS = [
  {
    id: 1,
    name: "Elvin Johnson",
    nickname: "The Phenom",
    weightClass: "Middleweight",
    division: "Kickboxing",
    defenses: 1,
    record: "8-2-0",
    image: elvinJohnsonImg,
    wonAt: "Combat Zone 90",
    hometown: "Boston, MA",
    age: 28,
    stance: "Orthodox",
    bio: "Elvin Johnson has been a dominant force in the New England kickboxing scene since his amateur debut in 2019. Known for his devastating leg kicks and patient counter-striking, Johnson captured the CZ Middleweight Kickboxing title with a third-round TKO victory at Combat Zone 90. His combination of technical precision and knockout power has made him one of the most exciting fighters on the roster.",
    stats: {
      koTko: 5,
      decisions: 3,
      finishRate: "63%",
    },
    signature: "Leg kicks & Counter right hand",
  },
  {
    id: 2,
    name: "Connor Morrill",
    nickname: "The Natural",
    weightClass: "Bantamweight",
    division: "Kickboxing",
    defenses: 1,
    record: "11-1-0",
    image: connorMorrillImg,
    wonAt: "Combat Zone 90",
    hometown: "Manchester, NH",
    age: 25,
    stance: "Southpaw",
    bio: "Connor Morrill is widely regarded as one of the most technically sound bantamweights in regional kickboxing. A product of the New Hampshire combat sports scene, Morrill combines elite footwork with razor-sharp boxing to dominate opponents. His championship victory at Combat Zone 90 came via unanimous decision in what many called a masterclass performance. With only one loss on his record, Morrill is eyeing bigger opportunities.",
    stats: {
      koTko: 4,
      decisions: 7,
      finishRate: "36%",
    },
    signature: "Footwork & Precision combinations",
  },
];

export default function ChampionsPage() {
  useSEO({
    title: "Current Champions | Combat Zone MMA",
    description:
      "Meet the current Combat Zone MMA champions. Elvin Johnson and Connor Morrill reign as the Middleweight and Bantamweight Kickboxing champions.",
  });

  return (
    <PageLayout>
      {/* Hero - Gold/Championship themed */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden bg-neutral-950">
        {/* Background with championship gold accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />

        {/* Gold accent gradients */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-500/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-amber-500/5 to-transparent" />

        {/* Trophy pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,215,0,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,.2) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-amber-500/20 rotate-45" />
        <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-amber-500/20 rotate-12" />

        <Container className="relative z-10 pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-amber-500" />
              <p className="text-sm font-medium text-amber-500 tracking-widest uppercase">
                Title Holders
              </p>
              <Trophy className="w-5 h-5 text-amber-500" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Chakra_Petch] text-white leading-[1.05] mb-6">
              CURRENT <span className="text-amber-500">CHAMPIONS</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              The elite fighters who have proven themselves at the highest level of Combat Zone
              competition.
            </p>
          </div>
        </Container>

        {/* Bottom gold accent bar - championship theme */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />
      </section>

      {/* Champions Grid - Individual Profiles */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Championship diagonal stripes - like a belt */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(245,158,11,1) 35px, rgba(245,158,11,1) 70px)",
          }}
        />

        {/* Radial gold glow from center - spotlight effect */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient opacity-[0.88]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.3) 0%, transparent 60%)",
          }}
        />

        {/* Corner laurel-inspired gold accents */}
        <div
          className="absolute top-0 left-0 w-96 h-96 opacity-[0.06]"
          style={{
            background:
              "conic-gradient(from 135deg at 0% 0%, rgba(245,158,11,0.8) 0deg, transparent 90deg)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.06]"
          style={{
            background:
              "conic-gradient(from -45deg at 100% 100%, rgba(245,158,11,0.8) 0deg, transparent 90deg)",
          }}
        />

        <Container className="relative z-10">
          <div className="space-y-24 md:space-y-32">
            {CHAMPIONS.map((champion, index) => (
              <div
                key={champion.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                    <img
                      src={champion.image}
                      alt={champion.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Weight class badge */}
                    <div className="absolute top-0 left-0 bg-primary text-white text-sm font-bold uppercase px-4 py-2 skew-x-[-10deg] ml-[-5px]">
                      <span className="skew-x-[10deg] block pl-1">{champion.weightClass}</span>
                    </div>

                    {/* Champion badge */}
                    <div className="absolute top-4 right-4 bg-amber-500 text-black px-4 py-2 flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Champion</span>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-amber-500 text-sm font-bold uppercase tracking-wider">
                          "{champion.nickname}"
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] text-white uppercase">
                        {champion.name}
                      </h2>
                    </div>
                  </div>

                  {/* Defense badge */}
                  <div className="absolute -bottom-4 -right-4 bg-neutral-900 text-white px-6 py-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-amber-500" />
                      <div>
                        <div className="text-2xl font-bold font-[Chakra_Petch]">
                          {champion.defenses}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-neutral-400">
                          Title {champion.defenses === 1 ? "Defense" : "Defenses"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Side */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Division & Title Info */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
                      <Award className="w-4 h-4" />
                      {champion.division} Division
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-neutral-900 uppercase mb-2">
                      {champion.weightClass} {champion.division} Champion
                    </h3>
                    <p className="text-neutral-500 font-medium">Title won at {champion.wonAt}</p>
                  </div>

                  {/* Quick Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-neutral-50 border border-neutral-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold font-[Chakra_Petch] text-neutral-900">
                        {champion.record}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-neutral-500 mt-1">
                        Record
                      </div>
                    </div>
                    <div className="text-center border-x border-neutral-200">
                      <div className="text-2xl font-bold font-[Chakra_Petch] text-neutral-900">
                        {champion.age}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-neutral-500 mt-1">
                        Age
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold font-[Chakra_Petch] text-neutral-900">
                        {champion.stance}
                      </div>
                      <div className="text-xs uppercase tracking-wider text-neutral-500 mt-1">
                        Stance
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-8">
                    <p className="text-neutral-600 leading-relaxed">{champion.bio}</p>
                  </div>

                  {/* Fight Stats */}
                  <div className="mb-8 p-6 bg-neutral-900 text-white">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-amber-500 mb-4 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Fight Statistics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-3xl font-bold font-[Chakra_Petch]">
                          {champion.stats.koTko}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-neutral-400">
                          KO/TKO Wins
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold font-[Chakra_Petch]">
                          {champion.stats.decisions}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-neutral-400">
                          Decisions
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold font-[Chakra_Petch]">
                          {champion.stats.finishRate}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-neutral-400">
                          Finish Rate
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Signature & Hometown */}
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-primary" />
                      <span className="text-neutral-500">Signature:</span>
                      <span className="font-bold text-neutral-900">{champion.signature}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-500">From:</span>
                      <span className="font-bold text-neutral-900">{champion.hometown}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-neutral-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold font-[Chakra_Petch] text-white mb-3">
                WATCH THE CHAMPIONS DEFEND
              </h2>
              <p className="text-neutral-400 max-w-lg">
                Don't miss the next Combat Zone event where our champions put their titles on the
                line.
              </p>
            </div>
            <Link href="/events">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider h-14 px-8 whitespace-nowrap"
              >
                View Upcoming Events
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
