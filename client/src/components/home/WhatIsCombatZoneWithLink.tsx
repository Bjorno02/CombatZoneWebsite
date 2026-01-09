export function WhatIsCombatZoneWithLink() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-700 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* New Professional Texture - Diagonal Lines */}
      <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_21px)]"></div>
      
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Gradient Mesh for Depth */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.4),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.3),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: What is CombatZone */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Welcome to</span>
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase italic mb-4 leading-tight">
                What is <span className="text-primary">Combat Zone</span>?
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl p-6 md:p-8 rounded-lg">
              <p className="text-base md:text-lg leading-relaxed font-medium text-slate-800 mb-4">
                <span className="text-primary font-bold">Combat Zone MMA</span> is New England's longest-running mixed martial arts promotion. 
                For over 24 years, we've been the proving ground where the region's top fighters showcase their skills, 
                compete for championships, and launch their careers toward the highest levels of the sport.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Owned and operated by UFC veteran <span className="text-primary font-bold">Calvin Kattar</span>, 
                Combat Zone combines decades of tradition with modern production values, hosting professional events 
                at the prestigious <span className="font-bold">SNHU Arena</span> in Manchester, New Hampshire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg p-5 rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all">
                <div className="text-xs font-bold font-[Chakra_Petch] uppercase text-slate-800 mb-2">Championship</div>
                <div className="text-xs text-slate-700">Professional title fights</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg p-5 rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all">
                <div className="text-xs font-bold font-[Chakra_Petch] uppercase text-slate-800 mb-2">Talent Pipeline</div>
                <div className="text-xs text-slate-700">Path to the UFC</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg p-5 rounded-lg text-center hover:shadow-xl hover:scale-105 transition-all">
                <div className="text-xs font-bold font-[Chakra_Petch] uppercase text-slate-800 mb-2">Premier Venue</div>
                <div className="text-xs text-slate-700">SNHU Arena</div>
              </div>
            </div>
          </div>

          {/* Right: Link Placeholder */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-3 block">Watch Live</span>
              <h2 className="text-3xl md:text-4xl font-bold font-[Chakra_Petch] uppercase italic mb-4 leading-tight">
                Pay-Per-<span className="text-primary">View</span>
              </h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl p-8 rounded-lg">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-[Chakra_Petch] uppercase">
                  PPV Link
                </h3>
                <p className="text-slate-700 text-base">
                  Greatness in progress
                </p>
                <button 
                  className="bg-slate-200 text-slate-600 hover:bg-slate-300 font-bold uppercase px-6 py-3 rounded-none cursor-not-allowed opacity-60 text-sm w-full mt-6"
                  disabled
                >
                  Link Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

