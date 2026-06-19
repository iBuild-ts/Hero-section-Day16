import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search, Briefcase, Compass } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenClubRoom: () => void;
}

export default function Header({ activeSection, setActiveSection, onOpenClubRoom }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: 'Home', id: 'hero' },
    { label: 'Find Jobs', id: 'catalog' },
    { label: 'Our Methodology', id: 'methodology' },
    { label: 'For Employers', id: 'advisory' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-100 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo "Quiety" matching screen exactly */}
        <div 
          role="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('hero');
          }}
          className="flex items-center gap-2 cursor-pointer group"
          id="brand-logo"
        >
          {/* Friendly modern logo mark representing double dynamic search rings */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md shadow-primary/20 group-hover:rotate-12 transition-transform duration-300">
            <Search className="w-4 h-4 stroke-[3]" />
          </div>
          <span className="font-sans font-extrabold text-2xl tracking-tight text-brand-blue group-hover:text-primary transition-colors duration-300">
            Quiety<span className="text-primary font-extrabold">.</span>
          </span>
        </div>

        {/* Elegant Centered Navigation */}
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
              className={`font-sans text-sm font-semibold tracking-wide transition-colors relative py-1 focus:outline-none ${
                activeSection === item.id 
                  ? 'text-primary' 
                  : 'text-neutral-600 hover:text-brand-blue'
              }`}
              id={`nav-item-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-[-2px] left-0 right-0 h-[2.5px] bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* High-end clean Entry Call To Action matching Quiety screenshot Button */}
        <div className="hidden md:flex items-center gap-4" id="header-system-specs">
          <button
            onClick={onOpenClubRoom}
            className="bg-brand-blue hover:bg-primary text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 font-sans shadow-md hover:shadow-lg hover:shadow-primary/10 hover:scale-105 active:scale-95 cursor-pointer"
            id="ambient-control-btn"
          >
            <span>Get Started</span>
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenClubRoom}
            className="bg-brand-blue text-white px-4 py-2 rounded-full text-[10px] font-semibold font-sans hover:bg-primary transition-all"
          >
            Get Started
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 backdrop-blur-2xl z-45 border-t border-neutral-100 p-8 flex flex-col justify-between animate-fade-in"
          id="mobile-menu-panel"
        >
          <div className="flex flex-col gap-6 pt-6">
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
                className={`text-left font-sans text-lg font-bold tracking-tight transition-colors py-1 ${
                  activeSection === item.id ? 'text-primary' : 'text-neutral-700 hover:text-primary'
                }`}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-neutral-100 pt-8 pb-12 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClubRoom();
              }}
              className="w-full py-4 bg-primary hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 rounded-full"
            >
              <span>Launch Dashboard Portal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
