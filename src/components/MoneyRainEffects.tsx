import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DollarSign, Landmark, Coins, Heart, TrendingUp, Sparkles, Star, ChevronDown, Check, Lock, Unlock, Play, Volume2, VolumeX } from 'lucide-react';

// Highly customizable falling bill or coin object
interface MoneyParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  speed: number;
  rotationSpeed: number;
  scale: number;
  type: 'dollar' | 'coin' | 'euro' | 'gold-bar';
  depth: number;
  isClicked: boolean;
  value: number;
}

// Sparkle element for physical interactive clicks
interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface PreloaderProps {
  onEnterMainApp: () => void;
  earnings: number;
  setEarnings: React.Dispatch<React.SetStateAction<number>>;
}

export function MoneyRainPreloader({ onEnterMainApp, earnings, setEarnings }: PreloaderProps) {
  const [particles, setParticles] = useState<MoneyParticle[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isReadyToEnter, setIsReadyToEnter] = useState(false);
  const [unzippedPercent, setUnzippedPercent] = useState(0);

  // Generate particles
  useEffect(() => {
    const initialParticles: MoneyParticle[] = Array.from({ length: 48 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of viewport width
      y: Math.random() * -120 - 20, // start above viewport
      rotation: Math.random() * 360,
      speed: 2 + Math.random() * 5, // vertical velocity
      rotationSpeed: -3 + Math.random() * 6,
      scale: 0.5 + Math.random() * 0.9,
      type: i % 4 === 0 ? 'dollar' : i % 4 === 1 ? 'coin' : i % 4 === 2 ? 'euro' : 'gold-bar',
      depth: Math.floor(Math.random() * 3), // layers for mock depth of field blur
      isClicked: false,
      value: i % 2 === 0 ? 100 : i % 3 === 0 ? 500 : 1000,
    }));
    setParticles(initialParticles);

    // Continuous physics tick
    let animationFrameId: number;
    const updatePhysics = () => {
      setParticles((prev) =>
        prev.map((p) => {
          if (p.isClicked) {
            // Float to target or disappear
            return {
              ...p,
              y: p.y - 12,
              scale: p.scale * 0.92,
            };
          }
          let nextY = p.y + p.speed * 0.45;
          let nextDec = p.rotation + p.rotationSpeed;
          // Loop particles when they fall off screen
          if (nextY > 110) {
            nextY = -20;
          }
          return {
            ...p,
            y: nextY,
            rotation: nextDec,
          };
        })
      );
      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleParticleClick = (e: React.MouseEvent, p: MoneyParticle) => {
    e.stopPropagation();
    if (p.isClicked) return;

    setEarnings((prev) => prev + p.value);
    
    // Add interactive feedback sparkles
    const rect = e.currentTarget.getBoundingClientRect();
    const newSparkles = Array.from({ length: 6 }).map((_, idx) => ({
      id: Date.now() + idx,
      x: e.clientX,
      y: e.clientY,
      color: p.type === 'dollar' ? '#10B981' : '#F59E0B',
    }));
    setSparkles((prev) => [...prev, ...newSparkles].slice(-24));

    setParticles((prev) =>
      prev.map((item) => (item.id === p.id ? { ...item, isClicked: true } : item))
    );
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative High-End Sovereign Blueprint lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      {/* Raining Money Particle Field */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((p) => {
          const depthBlur = p.depth === 0 ? 'blur-[1.5px]' : p.depth === 2 ? 'blur-[0.3px]' : '';
          return (
            <div
              key={p.id}
              className={`absolute transition-opacity duration-300 pointer-events-auto cursor-pointer ${depthBlur}`}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
                zIndex: 20 + p.depth,
                opacity: p.isClicked ? 0 : 0.85,
              }}
              onClick={(e) => handleParticleClick(e, p)}
            >
              {p.type === 'dollar' ? (
                <div className="bg-emerald-600/90 border border-emerald-400/30 px-3 py-1.5 rounded shadow-lg text-white font-mono text-xs flex items-center gap-1 hover:brightness-125 hover:scale-110 active:scale-95 transition-transform">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-300" />
                  <span>100</span>
                </div>
              ) : p.type === 'coin' ? (
                <div className="w-8 h-8 rounded-full bg-amber-500/95 border border-amber-300/30 shadow-lg text-white flex items-center justify-center hover:brightness-125 transition-transform hover:scale-110">
                  <Coins className="w-4 h-4 text-amber-100" />
                </div>
              ) : p.type === 'euro' ? (
                <div className="bg-[#FF5E89]/90 border border-pink-400/30 px-2.5 py-1 rounded-full shadow-lg text-white font-mono text-[10px] flex items-center gap-1 hover:brightness-125 transition-transform hover:scale-110">
                  <span>€</span>
                  <span className="font-bold">500</span>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-amber-400 to-yellow-600 border border-amber-200/40 px-3 py-1 rounded shadow-xl text-white font-serif text-[10px] font-bold tracking-widest flex items-center gap-1 hover:scale-115 transition-transform">
                  <Landmark className="w-3 h-3" />
                  <span>BAR</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Sparkle Feedback Layer */}
      <div className="absolute inset-0 pointer-events-none z-45">
        <AnimatePresence>
          {sparkles.map((sp) => (
            <motion.div
              key={sp.id}
              initial={{ opacity: 1, scale: 0.5, x: sp.x, y: sp.y }}
              animate={{
                opacity: 0,
                scale: 1.5,
                x: sp.x + (Math.random() * 80 - 40),
                y: sp.y + (Math.random() * -120 - 40),
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-2 h-2 rounded-full z-50 pointer-events-none"
              style={{ backgroundColor: sp.color }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Centered Sophisticated Display Board Content */}
      <div className="relative z-30 max-w-2xl px-6 text-center space-y-8 flex flex-col items-center select-none pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Sourcing insignia badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono font-bold tracking-wider text-primary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>SECURE EXECUTIVE SYSTEM INTRO v6.0</span>
          </div>

          <h1 className="font-sans text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] !font-sans">
            Secure the Absolute<br />
            <span className="text-primary tracking-wide relative">
              Wealth Exchange.
              <span className="absolute bottom-1.5 left-0 right-0 h-[3px] bg-primary rounded-full" />
            </span>
          </h1>

          <p className="font-sans text-neutral-400 text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Catch the raining premium cash flows to secure your sign-on bonus! Double-click capital nodes to fill your sovereign placement briefcase.
          </p>
        </motion.div>

        {/* Real-time Earnings Meter Board */}
        <motion.div
          className="bg-neutral-950/80 border border-neutral-800 backdrop-blur-md rounded-2xl px-8 py-5 text-center min-w-[280px] sm:min-w-[340px] shadow-2xl relative overflow-hidden"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute top-0 left-0 bg-primary h-[2px] w-full" />
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
            Sign-On Bonus Accrued
          </span>
          <div className="text-4xl sm:text-5xl font-mono font-extrabold text-emerald-400 tracking-tight">
            ${earnings.toLocaleString()}
          </div>
          <div className="flex justify-center gap-2 items-center text-[10px] text-neutral-400 font-bold mt-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>PLACEMENTS SECURE • READY TO UNLOCK</span>
          </div>
        </motion.div>

        {/* Portal Entry Slider / Action Trigger Button with glowing loops */}
        <motion.button
          onClick={onEnterMainApp}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-white text-white hover:text-brand-blue font-sans text-sm font-bold tracking-wider transition-all duration-300 shadow-xl shadow-primary/20 cursor-pointer overflow-hidden uppercase"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <span className="relative z-10 flex items-center gap-2.5">
            <Unlock className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform" />
            Enter Quiety Sourcing
          </span>
        </motion.button>

        <div className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
          Supported by Swiss Sovereign Custody Standards
        </div>
      </div>
    </div>
  );
}

// Global Custom Sound Synthesizer Node
function playClickBeep(freq: number, type: 'sine' | 'square' | 'triangle' = 'sine', duration: number = 0.15) {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Silence audio failure gracefully
  }
}

// Custom Zipper / Sovereign Money Bag Overlay Component when page is locked or scrolled up
interface MoneyBagSovereignProps {
  onUnlockMainApp: () => void;
  earnings: number;
}

export function MoneyBagSovereignSystem({ onUnlockMainApp, earnings }: MoneyBagSovereignProps) {
  const [zipperPercent, setZipperPercent] = useState(0);
  const [isZipping, setIsZipping] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);

  const handleZipClick = () => {
    playClickBeep(440, 'triangle', 0.2);
    playClickBeep(660, 'sine', 0.15);
    setIsZipping(true);

    // Animate zipper track pulling down
    let currentPct = 0;
    const interval = setInterval(() => {
      currentPct += 4;
      if (currentPct >= 100) {
        clearInterval(interval);
        playClickBeep(880, 'sine', 0.35);
        setSuccessStatus(true);
        setTimeout(() => {
          onUnlockMainApp();
        }, 600);
      }
      setZipperPercent(currentPct);
    }, 16);
  };

  return (
    <div className="fixed inset-0 z-[990] bg-[#0A0F1D]/98 flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Structural background lines and vault bloom */}
      <div className="absolute inset-0 bg-[#0F172A] z-0 opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="text-center space-y-8 max-w-md w-full relative z-10 flex flex-col items-center">
        
        {/* Physical Money Bag Graphical Vector with Dynamic Zipper */}
        <div className="relative w-64 h-64 bg-slate-900 border border-slate-800 rounded-[50px] shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
          
          {/* Symmetrical Sovereign Crest */}
          <div className="absolute top-6 flex flex-col items-center select-none pointer-events-none">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mb-1 animate-pulse" />
            <span className="text-[8px] font-mono tracking-widest text-neutral-500 font-bold uppercase">SECURE HOLDING</span>
          </div>

          <DollarSign className="w-16 h-16 text-primary animate-pulse select-none mb-2" />
          
          <div className="text-center select-none pointer-events-none">
            <span className="block text-[10px] text-neutral-400 font-mono font-bold tracking-widest uppercase">Zipped Valuation</span>
            <span className="block text-2xl font-mono text-emerald-400 font-extrabold pt-0.5">
              ${earnings.toLocaleString()}
            </span>
          </div>

          {/* Zipper Line overlaying the center of the wallet */}
          <div className="absolute bottom-10 left-6 right-6 h-[8px] bg-slate-950 rounded-full border border-slate-800 overflow-hidden flex items-center">
            {/* Filled zippered track */}
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${zipperPercent}%` }}
            />
          </div>

          <div className="absolute bottom-2 text-[8px] font-mono text-neutral-500 uppercase tracking-widest">
            QUIETY v5.12 SECURITY BAG
          </div>
        </div>

        {/* Instructions and Header */}
        <div className="space-y-3">
          <h2 className="font-sans text-white text-3xl font-extrabold tracking-tight">
            Your Wealth is Secured
          </h2>
          <p className="font-sans text-neutral-400 text-xs leading-relaxed max-w-sm">
            The database portfolio has been compiled and safely packed inside your sovereign executive briefcase. Drag or click the zipper to decode.
          </p>
        </div>

        {/* High-fidelity un-zipping interaction trigger */}
        <motion.button
          onClick={handleZipClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white font-mono text-xs font-bold tracking-widest px-8 py-4 rounded-full shadow-lg cursor-pointer max-w-xs w-full justify-center group overflow-hidden"
          disabled={isZipping}
        >
          {successStatus ? (
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-white stroke-[3] animate-bounce" />
              UNLOCKED & DECODED
            </span>
          ) : (
            <span className="flex items-center gap-2.5">
              <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" />
              PULL ZIP TO DECODE & ENTER
            </span>
          )}
        </motion.button>

        <div className="flex gap-4 uppercase font-mono text-[9px] text-neutral-600 tracking-wider">
          <span>PORTFOLIO v5.1</span>
          <span>•</span>
          <span>DISCREET</span>
        </div>
      </div>
    </div>
  );
}
