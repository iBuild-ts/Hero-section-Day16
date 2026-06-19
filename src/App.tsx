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
import { Sparkles, ArrowDown, Lock, Check, ShieldCheck, DollarSign, ArrowUp, Zap } from 'lucide-react';
import { MoneyRainPreloader, ScrollMoneyParallax } from './components/MoneyRainEffects';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [clubChamberOpen, setClubChamberOpen] = useState(false);
  
  // Ambient customizer preferences
  const [ambientOpacity, setAmbientOpacity] = useState(0.4);
  const [selectedHQ, setSelectedHQ] = useState('Zurich Office');
  const [visualTheme, setVisualTheme] = useState('obsidian');
  const [mockMusicPlaying, setMockMusicPlaying] = useState(false);

  // Synchronized search criteria
  const [overrideSearchTerm, setOverrideSearchTerm] = useState('');
  const [overrideCategory, setOverrideCategory] = useState('all');

  // Application model
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // High fidelity preloader and portfolio bag lock states
  const [isPreloaderActive, setIsPreloaderActive] = useState(true);

  // Active section scroll tracking & auto-preloader transition on top scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['hero', 'catalog', 'methodology', 'advisory'];
      
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

      // If user scrolls back up to the absolute top, seamlessly re-engage preloader
      if (window.scrollY === 0 && lastScrollY > 10) {
        setIsPreloaderActive(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update brand colors based on the customizer theme chosen in our sidebar
  useEffect(() => {
    const root = document.documentElement;
    if (visualTheme === 'obsidian') {
      // Quiety Premium Orange
      root.style.setProperty('--color-primary', '#FF5E36');
      root.style.setProperty('--color-primary-dark', '#D9441E');
      root.style.setProperty('--color-primary-light', '#FFEFEA');
    } else if (visualTheme === 'champagne') {
      // Warm Premium Amber Gold
      root.style.setProperty('--color-primary', '#D97706');
      root.style.setProperty('--color-primary-dark', '#B45309');
      root.style.setProperty('--color-primary-light', '#FEF3C7');
    } else if (visualTheme === 'platinum') {
      // Minimal Stark Slate
      root.style.setProperty('--color-primary', '#334155');
      root.style.setProperty('--color-primary-dark', '#0F172A');
      root.style.setProperty('--color-primary-light', '#F1F5F9');
    } else if (visualTheme === 'emerald') {
      // Sovereign Emerald Green
      root.style.setProperty('--color-primary', '#10B981');
      root.style.setProperty('--color-primary-dark', '#047857');
      root.style.setProperty('--color-primary-light', '#ECFDF5');
    }
  }, [visualTheme]);

  const handleHeroSearch = (term: string, category: string) => {
    setOverrideSearchTerm(term);
    setOverrideCategory(category);
  };

  // Interactive Match Simulator callback from side panel
  const handleFilterFromSkills = (skills: string[]) => {
    if (skills.length === 0) {
      setOverrideSearchTerm('');
      setOverrideCategory('all');
    } else {
      // Trigger search based on selected skills
      const query = skills.join(' ');
      setOverrideSearchTerm(query);
    }
  };

  if (isPreloaderActive) {
    return (
      <MoneyRainPreloader 
        onEnter={() => setIsPreloaderActive(false)}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-[#F8FAF1] selection:bg-primary selection:text-white transition-colors duration-500">
      
      {/* Scroll Parallax Money Effect */}
      <ScrollMoneyParallax />

      {/* Soft atmospheric gradient glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 opacity-55"
        style={{
          background: visualTheme === 'emerald'
            ? 'radial-gradient(circle at 50% 25%, rgba(16, 185, 129, 0.04) 0%, transparent 60%)'
            : visualTheme === 'platinum'
              ? 'radial-gradient(circle at 50% 25%, rgba(51, 65, 85, 0.04) 0%, transparent 60%)'
              : visualTheme === 'champagne'
                ? 'radial-gradient(circle at 50% 25%, rgba(217, 119, 6, 0.04) 0%, transparent 60%)'
                : 'radial-gradient(circle at 50% 25%, rgba(255, 94, 54, 0.04) 0%, transparent 60%)'
        }}
      />

      {/* Primary Fixed Header */}
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenClubRoom={() => setClubChamberOpen(true)}
      />

      {/* Main Hero Component */}
      <Hero 
        onSearch={handleHeroSearch}
        onExploreCatalog={() => {
          const el = document.getElementById('catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      {/* Premium Positions Catalog */}
      <JobCatalog 
        onApplyForJob={(job) => setSelectedJob(job)}
        overrideSearchTerm={overrideSearchTerm}
        overrideCategory={overrideCategory}
      />

      {/* Our Methodology Step Timeline */}
      <Timeline />

      {/* Partner Advisory Corporate Intake Form */}
      <AdvisoryForm />

      {/* Sovereign Trust & Security Standards Strip */}
      <section className="py-24 bg-white border-t border-neutral-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="inline-flex p-3.5 rounded-2xl bg-primary-light text-primary border border-primary/20">
            <Lock className="w-8 h-8" />
          </div>
          
          <div className="space-y-3">
            <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold block">
              Quiety Compliance Alliance
            </span>
            <h3 className="font-sans text-3xl md:text-4xl text-brand-blue font-extrabold tracking-tight leading-tight">
              An ecosystem structured on data hygiene & strict confidentiality.
            </h3>
            <p className="font-sans text-neutral-500 text-xs sm:text-sm font-medium leading-relaxed tracking-wide max-w-2xl mx-auto">
              Our placement protocols diverge entirely from automated web indexing bots and low-integrity scraping procedures. All resume assets submitted are kept isolated from open internet repositories. That is the Quiety difference.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 font-mono text-[9px] sm:text-[10px] text-neutral-440 text-neutral-400 font-bold">
            <span className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-full">
              <Check className="w-3.5 h-3.5 text-primary stroke-[3]" /> GDPR DISCREET
            </span>
            <span className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-full">
              <Check className="w-3.5 h-3.5 text-primary stroke-[3]" /> TLS SECURE TRANSMISSION
            </span>
            <span className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-100 px-3 py-1.5 rounded-full">
              <Check className="w-3.5 h-3.5 text-primary stroke-[3]" /> MUTUAL NDA COVENANTS
            </span>
          </div>
        </div>
      </section>

      {/* Standard Footer */}
      <Footer />

      {/* Customizer Side Panel Drawer */}
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
        onFilterFromSkills={handleFilterFromSkills}
      />

      {/* Candidate Placement Multi-step Overlay Form */}
      {selectedJob && (
        <ApplicationForm 
          selectedJob={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

    </div>
  );
}
