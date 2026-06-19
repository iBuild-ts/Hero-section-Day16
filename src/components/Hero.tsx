import { Play, ShieldCheck, ArrowDown, ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreCatalog: () => void;
  onInitiateAdvisory: () => void;
}

export default function Hero({ onExploreCatalog, onInitiateAdvisory }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end lg:justify-center items-center pt-32 pb-16 lg:py-0 px-6 md:px-12 bg-black"
    >
      {/* Absolute background video with luxury vignette layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-65 scale-[1.03] filter brightness-75 contrast-110"
          id="hero-bg-video"
          src="https://www.image2url.com/r2/default/videos/1781833169026-ce8e9554-3760-4c4c-878f-852407e2ab9c.mp4"
        />
        {/* Radical dark overlay and premium gradient vignette to maintain high contrast ratio on texts */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,rgba(5,5,5,0.7)_80%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Typography & High-End Slogan */}
        <div className="lg:col-span-8 space-y-8 text-left" id="hero-title-container">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-black/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-light">
              By Invitation Only
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white">
            Where Elite Mindset <br />
            <span className="text-gold-gradient italic font-normal font-serif">
              Meets Global Command
            </span>
          </h1>

          <p className="font-sans text-neutral-300 text-sm md:text-lg lg:text-xl font-light tracking-wide max-w-2xl leading-relaxed">
            AURA orchestrates bespoke placements for elite human intelligence. We connect visionary boards, sovereign wealth trustees, and state-of-the-art AI studios with unparalleled global executive talent at 100% confidentiality tiers.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4" id="hero-cta-group">
            <button
              onClick={onExploreCatalog}
              className="px-8 py-4 bg-gold-gradient text-black hover:text-white font-medium text-xs uppercase tracking-widest rounded-full transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_4px_30px_rgba(197,160,89,0.25)] hover:shadow-[0_4px_40px_rgba(197,160,89,0.45)] cursor-pointer flex items-center justify-center gap-3 border border-primary/20"
              id="hero-explore-catalog-btn"
            >
              <span>Explore Selective Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onInitiateAdvisory}
              className="px-8 py-4 bg-black/50 hover:bg-neutral-900 border border-white/10 hover:border-primary/50 text-white font-medium text-xs uppercase tracking-widest rounded-full transition-all duration-500 hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer flex items-center justify-center gap-3"
              id="hero-advisory-btn"
            >
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Bespoke Board Registry</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Mini Status Card / Widget on Hero (Representing Real-time Placements & Confidence metrics) */}
        <div className="lg:col-span-4" id="hero-stats-panel">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 space-y-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial-[circle_at_top_right,rgba(197,160,89,0.1)_0%,transparent_50%]" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-primary uppercase">
                  Network Integrity
                </span>
                <span className="font-serif text-lg text-white font-medium">Metric Suite</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse border border-emerald-400/50" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                  Sovereign Capital
                </span>
                <span className="block font-serif text-xl text-white font-bold tracking-tight">
                  $6.4B+
                </span>
                <span className="block text-[8px] font-mono text-primary/70">Matched</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                  Retention rate
                </span>
                <span className="block font-serif text-xl text-white font-bold tracking-tight">
                  99.4%
                </span>
                <span className="block text-[8px] font-mono text-primary/70">3-Year Index</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                  Mean Package
                </span>
                <span className="block font-serif text-xl text-white font-bold tracking-tight">
                  $580k
                </span>
                <span className="block text-[8px] font-mono text-primary/70">Base compensation</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
                  Active Advisors
                </span>
                <span className="block font-serif text-xl text-white font-bold tracking-tight">
                  14 Board
                </span>
                <span className="block text-[8px] font-mono text-primary/70">Members</span>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Play className="w-3 h-3 text-primary" />
                <span className="font-mono text-[9px] tracking-widest uppercase text-white font-semibold">
                  Live Placement Broadcast
                </span>
              </div>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                Secure executive matching in Geneva, Munich & Singapore completed this fiscal week. Next VIP Panel scheduled for July 1.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant visual down-arrow indicator */}
      <div 
        onClick={onExploreCatalog}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group scale-75 md:scale-100 z-10"
        role="button"
        id="hero-scroll-control"
      >
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-neutral-500 group-hover:text-primary transition-colors duration-300">
          Scroll Secure Panel
        </span>
        <ArrowDown className="w-4 h-4 text-neutral-600 group-hover:text-primary group-hover:translate-y-1 transition-all duration-300" />
      </div>
    </section>
  );
}
