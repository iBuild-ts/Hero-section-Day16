import { useState, useEffect } from 'react';
import { Lock, ShieldCheck, Globe, Menu, X, Crown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenClubRoom: () => void;
}

export default function Header({ activeSection, setActiveSection, onOpenClubRoom }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Update clock every second to represent world time zones
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Zurich time as default primary elite HQ
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTime(new Intl.DateTimeFormat('fr-CH', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Executive Catalog', id: 'catalog' },
    { label: 'Our Methodology', id: 'methodology' },
    { label: 'Bespoke Advisory', id: 'advisory' },
    { label: 'Institutional Trust', id: 'trust' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Elite Brand Logo */}
        <div 
          role="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('hero');
          }}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-black/50 overflow-hidden">
            <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
            <Crown className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -inset-0.5 rounded-full border border-primary/20 animate-pulse" />
          </div>
          <div>
            <span className="font-serif text-xl tracking-[0.2em] text-white group-hover:text-primary transition-colors duration-300">
              AURA
            </span>
            <span className="block text-[8px] tracking-[0.35em] uppercase text-primary font-mono -mt-1 font-medium">
              Elite Search
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className={`font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 relative py-2 ${
                activeSection === item.id 
                  ? 'text-primary' 
                  : 'text-neutral-400 hover:text-white'
              }`}
              id={`nav-item-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gold-gradient" />
              )}
            </button>
          ))}
        </nav>

        {/* Prestige System Specs & CTA Indicators */}
        <div className="hidden md:flex items-center gap-6" id="header-system-specs">
          {/* Real-time Zurich Clock */}
          <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-400 border border-white/5 rounded-full px-3 py-1 bg-white/5">
            <Globe className="w-3 h-3 text-primary animate-spin-slow" />
            <span>ZURICH HQ • {currentTime}</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 border border-emerald-500/20 rounded-full px-3 py-1 bg-emerald-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <Lock className="w-3 h-3 inline -mt-0.5" />
            <span>AURA PROTOCOL ACTIVE</span>
          </div>

          <button
            onClick={onOpenClubRoom}
            className="group px-4 py-2 rounded-full border border-primary/40 bg-black hover:border-primary text-xs uppercase tracking-widest font-mono text-primary hover:text-white hover:bg-gold-gradient transition-all duration-500 flex items-center gap-2 shadow-[0_0_15px_rgba(197,160,89,0.05)] hover:shadow-[0_0_20px_rgba(197,160,89,0.2)]"
            id="ambient-control-btn"
          >
            <span>Club Chamber</span>
            <ShieldCheck className="w-3.5 h-3.5 text-primary group-hover:text-black transition-colors" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenClubRoom}
            className="px-3 py-1.5 rounded-full border border-primary/30 text-[10px] uppercase font-mono text-primary"
          >
            Chamber
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-primary transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[73px] bg-black/95 backdrop-blur-2xl z-40 border-t border-white/5 p-8 flex flex-col justify-between animate-fade-in"
          id="mobile-menu-panel"
        >
          <div className="flex flex-col gap-6 pt-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`text-left font-serif text-2xl tracking-widest transition-colors py-2 ${
                  activeSection === item.id ? 'text-primary' : 'text-neutral-400'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-4 font-mono text-[11px] text-neutral-400">
            <div className="flex justify-between items-center text-xs">
              <span>ZURICH NETWORK STATUS</span>
              <span className="text-emerald-400">ONLINE</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span>SECURITY CERTIFICATE</span>
              <span className="text-primary font-mono tracking-wider">AURA-SSLv128</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClubRoom();
              }}
              className="mt-4 w-full py-3 text-center border border-primary text-primary hover:bg-gold-gradient hover:text-black uppercase tracking-widest text-xs font-semibold rounded"
            >
              Enter Club Chamber
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
