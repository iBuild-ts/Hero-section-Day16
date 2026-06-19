import { Shield, Users, Compass, Award } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      phase: 'Phase I',
      title: 'Discreet Audit and NDA Covenant',
      desc: 'We initiate our protocol with immediate bilateral NDA covenants. Candidate metadata is encrypted and stored on self-sovereign cryptographic matrices. Our elite counsel maps your corporate pedigree with absolute physical and digital isolation.',
      icon: Shield,
      accentColor: 'text-[#d4af37]',
      bgAccent: 'bg-[#d4af37]/5',
      borderAccent: 'border-[#d4af37]/20',
      duration: 'Timeline: 5 Business Days'
    },
    {
      phase: 'Phase II',
      title: 'Strategic Profile Calibration',
      desc: 'We map candidate capability indexes against the exact operational, ethical, and artistic values of our selective institutional clients. Rather than matching keyword lists, we align long-term ambition vectors and structural wealth models.',
      icon: Compass,
      accentColor: 'text-[#f3e5ab]',
      bgAccent: 'bg-[#f3e5ab]/5',
      borderAccent: 'border-[#f3e5ab]/20',
      duration: 'Timeline: 10 Business Days'
    },
    {
      phase: 'Phase III',
      title: 'Bespoke Private Symposium',
      desc: 'Instead of traditional clinical interview channels, we organize highly private dinner gatherings or high-security advisory panels inside custom sanctuary offices in Zurich, Paris, Geneva, or London. Absolute privacy is maintained.',
      icon: Users,
      accentColor: 'text-white',
      bgAccent: 'bg-white/5',
      borderAccent: 'border-white/10',
      duration: 'Timeline: Structured Alignment'
    },
    {
      phase: 'Phase IV',
      title: 'Sovereign Onboarding & VIP Concierge',
      desc: 'Upon matchmaking consensus, our legal concierge coordinates custom equity structures, multi-jurisdiction fiscal pathways, and executive wellness benefits. We support the transitional offset period to ensure perfect organizational launch.',
      icon: Award,
      accentColor: 'text-[#aa7c11]',
      bgAccent: 'bg-[#aa7c11]/5',
      borderAccent: 'border-[#aa7c11]/20',
      duration: 'Timeline: End-to-End Delivery'
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-gradient-to-b from-[#050505] to-[#0d0d0d] relative overflow-hidden">
      {/* Decorative ambient background flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[20rem] h-[20rem] bg-neutral-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20" id="methodology-intro">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            The Selection Protocol
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-normal text-white">
            Our Multi-Phase Placement Method
          </h2>
          <div className="h-[1px] w-20 bg-gold-gradient mx-auto my-6" />
          <p className="font-sans text-neutral-400 text-sm md:text-base font-light tracking-wide leading-relaxed">
            The path to prestige placements demands absolute structure, complete discretion, and world-class evaluation criteria. Here is how AURA shepherds elite placements.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-12" id="methodology-steps-container">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.phase}
                className="glass-card p-8 rounded-2xl border border-white/5 space-y-6 relative overflow-hidden group hover:border-primary/20 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(197,160,89,0.03)]"
                id={`timeline-card-${idx}`}
              >
                {/* Micro hover ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                    {step.phase}
                  </span>
                  <div className={`p-3 rounded-xl ${step.bgAccent} border ${step.borderAccent} ${step.accentColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-medium text-white tracking-wide group-hover:text-primary-light transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed tracking-wide">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-neutral-500">
                  <span>METRIC: SECURE TRANSIT</span>
                  <span className="text-white bg-white/5 px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Absolute Statement Box */}
        <div className="mt-16 glass-card rounded-2xl p-8 border border-white/5 text-center max-w-4xl mx-auto space-y-4" id="methodology-statement">
          <p className="font-serif italic text-lg md:text-xl text-neutral-300">
             "Trust is the supreme catalyst of absolute human alignment."
          </p>
          <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary">
            AURA Sovereign Governing Principle
          </div>
        </div>
      </div>
    </section>
  );
}
