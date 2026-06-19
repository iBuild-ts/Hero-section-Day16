import React, { useState, useEffect } from 'react';
import { Job } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import JobCatalog from './components/JobCatalog';
import Timeline from './components/Timeline';
import AdvisoryForm from './components/AdvisoryForm';
import Footer from './components/Footer';
import ClubChamber from './components/ClubChamber';
import ApplicationForm from './components/ApplicationForm';
import { Sparkles, ArrowDown, Lock, Check } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [clubChamberOpen, setClubChamberOpen] = useState(false);
  
  // Ambient preferences
  const [ambientOpacity, setAmbientOpacity] = useState(0.4);
  const [selectedHQ, setSelectedHQ] = useState('Zürich');
  const [visualTheme, setVisualTheme] = useState('obsidian');
  const [mockMusicPlaying, setMockMusicPlaying] = useState(false);

  // Application model
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Track scroll position to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['hero', 'catalog', 'methodology', 'advisory', 'trust'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update body styles programmatically mapping to the premium visual themes selected in ClubChamber
  useEffect(() => {
    const root = document.documentElement;
    if (visualTheme === 'obsidian') {
      root.style.setProperty('--color-primary', '#C5A059');
      root.style.setProperty('--color-primary-dark', '#a38141');
      root.style.setProperty('--color-primary-light', '#f3e2c3');
    } else if (visualTheme === 'champagne') {
      root.style.setProperty('--color-primary', '#E5C384');
      root.style.setProperty('--color-primary-dark', '#a8813f');
      root.style.setProperty('--color-primary-light', '#fdfaf2');
    } else if (visualTheme === 'platinum') {
      root.style.setProperty('--color-primary', '#D1D5DB');
      root.style.setProperty('--color-primary-dark', '#4B5563');
      root.style.setProperty('--color-primary-light', '#F9FAFB');
    } else if (visualTheme === 'emerald') {
      root.style.setProperty('--color-primary', '#10B981');
      root.style.setProperty('--color-primary-dark', '#065F46');
      root.style.setProperty('--color-primary-light', '#ECFDF5');
    }
  }, [visualTheme]);

  // Smooth scroll helper
  const handleScrollToElement = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-black">
      
      {/* Dynamic ambient color glow filter behind everything, changes depending on the curating theme */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 opacity-60"
        style={{
          background: visualTheme === 'emerald'
            ? 'radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.03) 0%, transparent 60%)'
            : visualTheme === 'platinum'
              ? 'radial-gradient(circle at 50% 30%, rgba(209, 213, 219, 0.02) 0%, transparent 50%)'
              : visualTheme === 'champagne'
                ? 'radial-gradient(circle at 50% 30%, rgba(229, 195, 132, 0.04) 0%, transparent 60%)'
                : 'radial-gradient(circle at 50% 30%, rgba(197, 160, 89, 0.03) 0%, transparent 50%)'
        }}
      />

      {/* Elite Header */}
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenClubRoom={() => setClubChamberOpen(true)}
      />

      {/* Premium Video Hero */}
      <div style={{ '--video-opacity': ambientOpacity } as React.CSSProperties}>
        <Hero 
          onExploreCatalog={() => handleScrollToElement('catalog')}
          onInitiateAdvisory={() => handleScrollToElement('advisory')}
        />
      </div>

      {/* Trust & Prestige Credentials Strip (Bento-style Elite Achievements) */}
      <section className="bg-black py-16 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-2 border-l-2 border-primary pl-5">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">Governance Trust Index</span>
            <div className="font-serif text-3xl text-white font-medium tracking-tight">Vetted Secrecy Tier-1</div>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
              Every strategic profile file undergoes physical validation inside secure isolated compartments in Switzerland, preventing information tracing.
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-primary pl-5">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">Institutional Asset Alignment</span>
            <div className="font-serif text-3xl text-white font-medium tracking-tight">Sovereign Asset Backing</div>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
              Serving premium corporations representing more than $24 Billion in global aggregate computational, luxury heritage, and private wealth capital assets.
            </p>
          </div>

          <div className="space-y-2 border-l-2 border-primary pl-5">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">Bespoke Strategic Delivery</span>
            <div className="font-serif text-3xl text-white font-medium tracking-tight">1:1 Concierge Care</div>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
              Candidates matched with elite partners are offered integrated global wealth structure advisory, VIP relocation management, and personal biological health concierge coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Global Interactive Catalog */}
      <JobCatalog 
        onApplyForJob={(job) => setSelectedJob(job)}
      />

      {/* Timeline Methodology Protocol */}
      <Timeline />

      {/* Secure Advisory Mandate Registry */}
      <AdvisoryForm />

      {/* Refined Elite Secrecy Compliance & Mission Statement block */}
      <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex p-3 rounded-full bg-primary/5 border border-primary/20 text-primary">
            <Lock className="w-8 h-8" />
          </div>
          <div className="space-y-3">
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.25em] font-medium block">Institutional Trust Alliance</span>
            <h3 className="font-serif text-3xl md:text-5xl text-white font-normal leading-tight">
              A System Ratified On Secrecy And Absolute Precision.
            </h3>
            <p className="font-sans text-neutral-400 text-xs md:text-sm font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
              Our methods diverge from high-frequency algorithms and modern recruitment noise. We operate under strict Swiss privacy guidelines (FINMA aligned criteria) ensuring candidate dossiers never reach central web index matrices. This is the AURA Secrecy System.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 font-mono text-[10px] text-neutral-500">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> GDPR DISCREET PROTOCOL
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> FINMA SECRECY STANDARD
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> ISO-PRESTIGE COEFFICIENT
            </span>
          </div>
        </div>
      </section>

      {/* Modular Footer */}
      <Footer />

      {/* Customizer Side Chamber */}
      <ClubChamber 
        isOpen={clubChamberOpen}
        onClose={() => setClubChamberOpen(false)}
        ambientOpacity={ambientOpacity}
        setAmbientOpacity={setAmbientOpacity}
        selectedHQ={selectedHQ}
        setSelectedHQ={setSelectedHQ}
        visualTheme={visualTheme}
        setVisualTheme={setVisualTheme}
        mockMusicPlaying={mockMusicPlaying}
        setMockMusicPlaying={setMockMusicPlaying}
      />

      {/* Multi-Step Confidential Application Drawer Form */}
      {selectedJob && (
        <ApplicationForm 
          selectedJob={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

    </div>
  );
}
