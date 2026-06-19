import { motion } from 'motion/react';
import { Shield, Compass, Users, Award, CornerDownRight } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      num: '01',
      phase: 'Requirement Audit & Alignment Sourcing',
      desc: 'We start by deeply analyzing the culture, technological ambitions, and team energy. We construct a multi-dimensional persona matrix that identifies high-impact leaders suited for extreme acceleration.',
      duration: '3-5 Days Phase',
      icon: Shield,
      bg: 'bg-orange-50',
      text: 'text-primary'
    },
    {
      num: '02',
      phase: 'Global Network Activation & Outreach',
      desc: 'Using private circles, local engineering guilds, and top-tier product networks, we perform direct, friendly outreach. We never spray spam messages — we pitch bespoke creative opportunities.',
      duration: '7-10 Days Phase',
      icon: Compass,
      bg: 'bg-indigo-50',
      text: 'text-brand-indigo'
    },
    {
      num: '03',
      phase: 'Symmetrical Evaluation & Interviews',
      desc: 'Rather than standardized screening quizzes, candidates engage in constructive workshops or direct coffee syncs to review alignment parameters, equity structures, and product roadmaps.',
      duration: 'Interactive Sprints',
      icon: Users,
      bg: 'bg-teal-50',
      text: 'text-teal-600'
    },
    {
      num: '04',
      phase: 'Contract Closure & Seamless Transition',
      desc: 'Our senior consultants steer complex package structuring, global relocation support, and equity bonus negotiations. We stand next to you during the critical 100 days of transition.',
      duration: 'Continuous Success',
      icon: Award,
      bg: 'bg-pink-50',
      text: 'text-pink-600'
    }
  ];

  // Exquisite spring-powered card animations that auto-reverse as suggested by the user!
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 90, 
      scale: 0.95,
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 16,
        mass: 0.8,
        restDelta: 0.001
      }
    }
  };

  return (
    <section id="methodology" className="py-24 md:py-32 bg-[#F8FAF1] relative overflow-hidden border-t border-neutral-100">
      {/* Visual background details to matching a clean modern corporate workspace */}
      <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-indigo-50 rounded-full blur-[140px] pointer-events-none opacity-60" />
      <div className="absolute bottom-12 right-12 w-[30rem] h-[30rem] bg-orange-50 rounded-full blur-[140px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header with spacious clean layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 border-b border-neutral-150 pb-12" id="methodology-intro">
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-primary block">
              The Selection Protocol
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-brand-blue font-extrabold tracking-tight leading-none !font-sans">
              Our Methodology
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="font-sans text-neutral-500 text-sm md:text-base font-medium leading-relaxed text-left lg:border-l lg:border-neutral-200 lg:pl-10">
              Simplifying premium headhunting and product matching. Watch our sequential landscape step cards pop into view beautifully as you scroll down, and recede gracefully when you scroll up.
            </p>
          </div>
        </div>

        {/* Sequential Steps List rendered inside Animated landscape cards */}
        <div className="space-y-8" id="methodology-steps-container">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={cardVariants}
                className="bg-white border border-neutral-100 p-8 rounded-3xl flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-10 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative group"
                id={`timeline-card-${idx}`}
              >
                {/* 1. Large Display Identifier Column */}
                <div className="flex flex-row md:flex-col justify-between items-start shrink-0 min-w-[130px] md:border-r md:border-neutral-100 md:pr-6">
                  <div className="space-y-1 text-left">
                    <span className="font-sans text-5xl md:text-6xl font-extrabold text-neutral-200 group-hover:text-primary transition-colors duration-500 block">
                      {step.num}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.25em] font-bold text-neutral-400 block uppercase">
                      PHASE RUNTIME
                    </span>
                  </div>
                  <div className={`p-3 rounded-2xl ${step.bg} ${step.text} mt-4`}>
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* 2. Main content column */}
                <div className="flex-1 text-left space-y-3 flex flex-col justify-center">
                  <h3 className="font-sans text-2xl font-extrabold text-brand-blue tracking-tight hover:text-primary transition-colors duration-300">
                    {step.phase}
                  </h3>
                  <p className="font-sans text-neutral-500 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>

                {/* 3. Operational badge */}
                <div className="shrink-0 flex flex-col justify-between items-start md:items-end text-left md:text-right border-t md:border-t-0 md:border-l border-neutral-100 pt-4 md:pt-0 md:pl-8 min-w-[150px]">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] tracking-[0.2em] font-bold text-neutral-400 block">
                      TARGET WINDOW
                    </span>
                    <span className="font-sans text-base font-extrabold text-brand-blue block">
                      {step.duration}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-primary font-bold uppercase tracking-widest pt-4 md:pt-0">
                    <CornerDownRight className="w-3 h-3 text-primary animate-bounce" />
                    <span>LIAISON LIVE</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic quote block to match Quiety friendly tone */}
        <div className="mt-20 pt-12 border-t border-neutral-100 text-center space-y-2 animate-fade-in" id="methodology-statement">
          <p className="font-serif italic text-xl md:text-2xl text-neutral-600 font-medium max-w-2xl mx-auto">
             "The secret to building great companies is alignment across human desires, creative power, and capital safety."
          </p>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary block">
            Quiety Global Vision
          </span>
        </div>

      </div>
    </section>
  );
}
