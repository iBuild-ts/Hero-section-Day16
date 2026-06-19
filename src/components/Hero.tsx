import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronDown, Award, Users, Star, BookOpen, Layers } from 'lucide-react';

interface HeroProps {
  onSearch: (term: string, sector: string) => void;
  onExploreCatalog: () => void;
}

export default function Hero({ onSearch, onExploreCatalog }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Interactive mouse tracking states for 3D illustration tilt
  const [illustrationHover, setIllustrationHover] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 0, py: 0 });

  // Interactive mouse tracking states for ambient section background spotlight
  const [sectionHover, setSectionHover] = useState(false);
  const [sectionMouse, setSectionMouse] = useState({ x: 0, y: 0 });

  const handleIllustrationMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Normalized offset from -1 to 1
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;
    
    setTilt({
      rx: -dy * 15, // tilt up/down (rotate X)
      ry: dx * 15,  // tilt right/left (rotate Y)
      px: dx * 14,  // displacement X
      py: dy * 14   // displacement Y
    });
  };

  const handleIllustrationMouseLeave = () => {
    setIllustrationHover(false);
    setTilt({ rx: 0, ry: 0, px: 0, py: 0 });
  };

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSectionMouse({ x, y });
    setSectionHover(true);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, selectedCategory);
    // Smooth scroll to catalog
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePopularClick = (tag: string) => {
    setSearchTerm(tag);
    onSearch(tag, 'all');
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={() => setSectionHover(false)}
      className="relative min-h-screen w-full bg-[#F4F6FA] pt-32 pb-24 overflow-hidden"
    >
      {/* Background Highly Sophisticated Fluid Loop Motion system */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Radial mesh screen lines to anchor style */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 mix-blend-multiply" />

        {/* Fluid Orb 1 - Coral-Orange/Primary Ambient Liquid Blob */}
        <motion.div
          className="absolute -top-20 left-[10%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-br from-primary/25 via-primary-light/15 to-transparent blur-[110px]"
          animate={{
            x: [0, 70, -40, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.12, 0.95, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fluid Orb 2 - Indigo/Purple Deep Atmospheric Bloom */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-[#818CF8]/20 via-primary-light/10 to-transparent blur-[130px]"
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 70, -40, 0],
            scale: [1, 1.18, 0.9, 1],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fluid Orb 3 - Gentle Brightening Warm Glow (Pulsating and shifting) */}
        <motion.div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-gradient-to-r from-amber-400/12 via-[#FF9F1C]/5 to-transparent blur-[95px]"
          animate={{
            x: [-30, 40, -20, -30],
            y: [40, -30, 20, 40],
            scale: [0.95, 1.08, 0.92, 0.95],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating golden particle vector decorations doing subtle drift loops */}
        <motion.div 
          className="absolute top-36 left-[8%] text-primary opacity-60 hidden md:block"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.div 
          className="absolute top-1/2 right-[6%] text-[#818CF8] opacity-50 hidden md:block"
          animate={{
            y: [0, 22, 0],
            rotate: [0, -35, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      {/* Dynamic Cursor-Responsive Ambient Spotlight Bloom */}
      {sectionHover && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-[110px] bg-primary/[0.045] w-[40rem] h-[40rem] z-0"
          animate={{
            x: sectionMouse.x - 320,
            y: sectionMouse.y - 320,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Title Block exactly mirroring Quiety styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <h1 className="font-sans text-brand-blue text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] !font-sans">
            <motion.span 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-block"
            >
              Modernizing
            </motion.span>{" "}
            <motion.span 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.25, duration: 0.6 }}
              className="inline-block text-primary"
            >
              the_Job
            </motion.span> <br />
            <span className="relative inline-block text-brand-blue">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="inline-block"
              >
                Search Experience
              </motion.span>
              {/* Custom Underline Brush vector to mimic the underlined logo accent */}
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-1 left-0 right-0 h-[4px] bg-primary rounded-full opacity-80" 
              />
            </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="font-sans text-neutral-500 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Connecting brilliant digital pioneers, deep developers, and product creatives with top-tier modern workspaces. Smooth. Vested. Infinite potential.
          </motion.p>
        </motion.div>

        {/* Quiety Styled Rounded Pill Search Form */}
        <motion.form
          onSubmit={handleSearchSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-2xl mt-12 mb-6 bg-white rounded-full p-2.5 shadow-[0_15px_35px_rgba(15,23,42,0.06)] border border-neutral-100 flex flex-col sm:flex-row items-center gap-2 relative z-25"
          id="hero-rounded-search-pill"
        >
          {/* Main search text space */}
          <div className="flex-1 flex items-center pl-4 w-full">
            <Search className="w-5 h-5 text-neutral-400 shrink-0 mr-3" />
            <input
              type="text"
              placeholder="etc: Search Your Needs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none py-2 text-sm text-brand-blue placeholder-neutral-400 focus:outline-none focus:ring-0"
              id="hero-main-search-input"
            />
          </div>

          <div className="h-[24px] w-[1px] bg-neutral-200 hidden sm:block" />

          {/* Symmetrical Category Choice Selector */}
          <div className="relative shrink-0 flex items-center px-4 w-full sm:w-auto mt-2 sm:mt-0">
            <Layers className="w-4 h-4 text-neutral-400 shrink-0 mr-2 visible sm:hidden lg:inline" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-transparent border-none pr-8 py-2 text-xs font-bold text-neutral-700 focus:outline-none cursor-pointer"
              id="hero-search-category-dropdown"
            >
              <option value="all">Web Development</option>
              <option value="ai-advanced-systems">AI Solutions</option>
              <option value="luxury-experience-heritage">Creative & Brand</option>
              <option value="sovereign-wealth-private-capital">Sovereign Fin</option>
              <option value="aerospace-next-mobility">Deep Tech</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>

          {/* Bright brand orange circular action search button */}
          <button
            type="submit"
            className="w-full sm:w-12 sm:h-12 rounded-full bg-primary hover:bg-brand-blue hover:scale-105 active:scale-95 text-white flex items-center justify-center transition-all duration-300 py-3 sm:py-0 font-bold shrink-0 cursor-pointer shadow-md shadow-primary/20"
            id="hero-rounded-button-orange"
            aria-label="Submit search"
          >
            <Search className="w-5 h-5" />
          </button>
        </motion.form>

        {/* Popular searches keywords strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3 text-neutral-500 text-xs font-medium relative z-20"
          id="hero-popular-keywords"
        >
          <span className="text-neutral-400">Popular Jobs:</span>
          {['Designer', 'React Developer', 'Chief of Intelligence', 'Director', 'Systems Specialist'].map((tag) => (
            <button
              key={tag}
              onClick={() => handlePopularClick(tag)}
              className="bg-white hover:bg-primary-light hover:text-primary border border-neutral-100 text-neutral-600 px-3 py-1.5 rounded-full transition-colors text-xs font-medium cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Centered Graphic illustration with surrounding interactive bubbles (replicates screenshot) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mt-16 w-full max-w-4xl"
          id="hero-illustration-container"
          onMouseMove={handleIllustrationMouseMove}
          onMouseEnter={() => setIllustrationHover(true)}
          onMouseLeave={handleIllustrationMouseLeave}
          style={{ perspective: 1200 }}
        >
          {/* Main Character Image Mockup matching screenshot composition */}
          <motion.div
            className="relative mx-auto max-w-[580px] aspect-[4/3] rounded-[40px] overflow-visible select-none"
            animate={{
              rotateX: illustrationHover ? tilt.rx : 0,
              rotateY: illustrationHover ? tilt.ry : 0,
              x: illustrationHover ? tilt.px : 0,
              y: illustrationHover ? tilt.py : 0,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Soft decorative shadow background circle */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-primary-light to-brand-indigo/10 blur-3xl opacity-65 -z-10 animate-pulse" />
            
            <motion.img
              src="/src/assets/images/quiety_hero_character_1781834946907.jpg"
              alt="Quiety Developer Character Illustration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              id="hero-developer-img"
              animate={{
                z: illustrationHover ? 30 : 0
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </motion.div>

          {/* Interactive Floating Card 1 (Top Categories widget - bottom-left) */}
          <motion.div
            className="absolute bottom-6 left-[-15px] sm:left-4 md:left-[5%] z-20"
            animate={{
              y: [0, -12, 0],
              x: [0, 6, 0],
              rotate: [0, 1.5, -1.5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="glass-card p-4 rounded-2xl w-[170px] sm:w-[210px] text-left shadow-lg cursor-pointer group"
              animate={{
                rotateX: illustrationHover ? tilt.rx * 1.4 : 0,
                rotateY: illustrationHover ? tilt.ry * 1.4 : 0,
                z: illustrationHover ? 40 : 0
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                Top Categories
              </span>
              <div className="flex gap-1 items-end h-[60px] pb-1 border-b border-neutral-100">
                <div className="flex-1 bg-amber-400 rounded-sm h-[30%] animate-pulse" />
                <div className="flex-1 bg-primary rounded-sm h-[80%] animate-pulse" />
                <div className="flex-1 bg-primary rounded-sm h-[50%]" />
                <div className="flex-1 bg-brand-indigo rounded-sm h-[90%] animate-pulse" />
                <div className="flex-1 bg-teal-400 rounded-sm h-[40%]" />
              </div>
              <div className="flex justify-between text-[8px] font-bold text-neutral-400 mt-1.5">
                <span>Category A</span>
                <span>Category B</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Floating Card 2 (Pink basketball circle bubble - left) */}
          <motion.div
            className="absolute top-[35%] left-[-20px] sm:left-10 md:left-[12%] z-20"
            animate={{
              y: [0, 15, -15, 0],
              x: [0, -8, 8, 0],
              scale: [1, 1.08, 0.94, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FF5E89] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#FF5E89]/20 cursor-pointer hover:scale-115 transition-all duration-300"
              animate={{
                rotateX: illustrationHover ? tilt.rx * 1.8 : 0,
                rotateY: illustrationHover ? tilt.ry * 1.8 : 0,
                z: illustrationHover ? 70 : 0
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <circle cx="12" cy="12" r="10"/>
                <path d="M6.2 6.2c2.4 2.4 2.4 6.4 0 8.8"/>
                <path d="M17.8 6.2c-2.4 2.4-2.4 6.4 0 8.8"/>
                <path d="M2 12h20"/>
                <path d="M12 2v20"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Interactive Floating Card 3 (Customer Success widget - right-center) */}
          <motion.div
            className="absolute top-[38%] right-[-15px] sm:right-6 md:right-[10%] z-20"
            animate={{
              y: [0, -14, 0],
              x: [0, -6, 0]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="bg-white border border-neutral-100 p-3 sm:p-4 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.04)] flex items-center gap-3 text-left w-[190px] sm:w-[220px] cursor-pointer"
              animate={{
                rotateX: illustrationHover ? tilt.rx * 1.3 : 0,
                rotateY: illustrationHover ? tilt.ry * 1.3 : 0,
                z: illustrationHover ? 35 : 0
              }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-brand-indigo shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="truncate text-left">
                <span className="block text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                  Customer Success
                </span>
                <span className="block text-sm font-bold text-brand-blue">
                  98.5% Matching
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Circle Logo Google style top right */}
          <motion.div
            className="absolute top-10 right-[-10px] sm:right-[15%] z-20"
            animate={{
              y: [0, 8, -8, 0],
              rotate: [0, 360]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 32, repeat: Infinity, ease: "linear" }
            }}
          >
            <motion.div
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-neutral-100 cursor-pointer"
              animate={{
                rotateX: illustrationHover ? tilt.rx * 1.7 : 0,
                rotateY: illustrationHover ? tilt.ry * 1.7 : 0,
                z: illustrationHover ? 60 : 0
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Aesthetic team widget - bottom-right */}
          <motion.div
            className="absolute bottom-6 right-[-15px] sm:right-6 md:right-[12%] z-20"
            animate={{
              y: [0, -8, 0],
              x: [0, 4, 0]
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="text-left max-w-[190px] sm:max-w-[210px] space-y-2 cursor-pointer bg-white/70 backdrop-blur-md p-3.5 rounded-2xl border border-neutral-100 shadow-sm"
              animate={{
                rotateX: illustrationHover ? tilt.rx * 1.2 : 0,
                rotateY: illustrationHover ? tilt.ry * 1.2 : 0,
                z: illustrationHover ? 30 : 0
              }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden inline-block font-sans text-[9px] flex items-center justify-center font-bold">JD</span>
                <span className="w-8 h-8 rounded-full border-2 border-white bg-amber-200 overflow-hidden inline-block font-sans text-[9px] flex items-center justify-center font-bold">AL</span>
                <span className="w-8 h-8 rounded-full border-2 border-white bg-indigo-200 overflow-hidden inline-block font-sans text-[9px] flex items-center justify-center font-bold">MC</span>
              </div>
              <p className="font-sans text-[10px] text-neutral-400 font-semibold leading-relaxed">
                We work towards ensuring a life free from inequality.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Symmetrical Stats Section embedded cleanly with beautiful boxes */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-12 border-t border-neutral-100 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white rounded-2xl border border-neutral-50 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-primary shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-brand-blue">
                99.8% Success
              </h3>
              <p className="font-sans text-xs text-neutral-400 font-medium mt-1 leading-normal">
                Verifiably vetted, customized candidate matching rate.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-50 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-brand-indigo shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-brand-blue">
                Live Insights
              </h3>
              <p className="font-sans text-xs text-neutral-400 font-medium mt-1 leading-normal">
                Transparent global tracking systems on executive placements.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-50 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans text-xl font-bold text-brand-blue">
                Elite Retainer
              </h3>
              <p className="font-sans text-xs text-neutral-400 font-medium mt-1 leading-normal">
                Partner network of 500+ rapid-scaling world platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
