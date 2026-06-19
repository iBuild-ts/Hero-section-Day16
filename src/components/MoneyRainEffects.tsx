import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DollarSign } from 'lucide-react';

interface MoneyParticle {
  id: number;
  x: number; // % left
  y: number; // % top
  z: number; // 3D depth translation
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  speed: number;
  swingSpeed: number;
  swingRange: number;
  scale: number;
  type: 'hundred' | 'gold-coin' | 'thousand';
  phase: number;
}

interface PreloaderProps {
  onEnter: () => void;
}

export function MoneyRainPreloader({ onEnter }: PreloaderProps) {
  const [particles, setParticles] = useState<MoneyParticle[]>([]);
  const [isUnzipping, setIsUnzipping] = useState(false);
  const [unzipProgress, setUnzipProgress] = useState(0);

  const playZipSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 1.2);
      
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {}
  };

  useEffect(() => {
    // Populate rich 3D money blocks
    const items: MoneyParticle[] = Array.from({ length: 42 }).map((_, i) => {
      const isBigMoney = i % 5 === 0;
      return {
        id: i,
        x: Math.random() * 92 + 4,
        y: Math.random() * 100 - 10,
        z: isBigMoney ? Math.random() * 200 + 150 : Math.random() * -100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        speed: 1.2 + Math.random() * 2.8,
        swingSpeed: 1 + Math.random() * 2,
        swingRange: 15 + Math.random() * 30,
        scale: isBigMoney ? 1.6 + Math.random() * 0.7 : 0.7 + Math.random() * 0.5,
        type: i % 3 === 0 ? 'hundred' : i % 3 === 1 ? 'gold-coin' : 'thousand',
        phase: Math.random() * Math.PI * 2,
      };
    });
    setParticles(items);

    let frameId: number;
    let time = 0;
    const update = () => {
      time += 0.012;
      setParticles((prev) =>
        prev.map((p) => {
          const nextY = p.y + p.speed * 0.35;
          const nextRotX = p.rotationX + Math.sin(time * p.swingSpeed + p.phase) * 1.5;
          const nextRotY = p.rotationY + Math.cos(time * p.swingSpeed + p.phase) * 1.2;
          const nextRotZ = p.rotationZ + 0.5;

          return {
            ...p,
            y: nextY > 115 ? -25 : nextY,
            rotationX: nextRotX,
            rotationY: nextRotY,
            rotationZ: nextRotZ,
          };
        })
      );
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const triggerAutomaticUnzip = () => {
    if (isUnzipping) return;
    setIsUnzipping(true);
    playZipSound();

    let start = 0;
    const interval = setInterval(() => {
      start += 2.5;
      if (start >= 100) {
        clearInterval(interval);
        onEnter();
      }
      setUnzipProgress(start);
    }, 16);
  };

  return (
    <div 
      onClick={triggerAutomaticUnzip}
      className="fixed inset-0 z-[1000] bg-[#090D1A] overflow-hidden select-none cursor-pointer" 
      style={{ perspective: 1400 }}
    >
      {/* 3D Splitting Top Curtain Panel */}
      <div 
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#0C1222] border-b border-primary/45 z-40 transition-transform duration-100 ease-out origin-top flex items-end justify-center shadow-[0_15px_60px_rgba(0,0,0,0.8)]"
        style={{
          transform: `translateY(${-unzipProgress}%) rotateX(${unzipProgress * 0.4}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-90 shadow-lg flex justify-between" />
      </div>

      {/* 3D Splitting Bottom Curtain Panel */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0C1222] border-t border-primary/45 z-40 transition-transform duration-100 ease-out origin-bottom flex items-start justify-center shadow-[0_-15px_60px_rgba(0,0,0,0.8)]"
        style={{
          transform: `translateY(${unzipProgress}%) rotateX(${-unzipProgress * 0.4}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-90 shadow-lg" />
      </div>

      {/* Embedded Ambient Sovereign Background grid behind zipper */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_2px,transparent_2px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* Raining Money Interactive 3D Canvas */}
      <div className="absolute inset-0 z-50 pointer-events-auto" style={{ transformStyle: 'preserve-3d' }}>
        {particles.map((p) => {
          return (
            <div
              key={p.id}
              onClick={(e) => {
                e.stopPropagation();
                triggerAutomaticUnzip();
              }}
              className="absolute cursor-pointer transition-all duration-300 preserve-3d group"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: `translateZ(${p.z}px) rotateX(${p.rotationX}deg) rotateY(${p.rotationY}deg) rotateZ(${p.rotationZ}deg) scale(${p.scale})`,
                zIndex: Math.floor(p.z + 500),
                transformStyle: 'preserve-3d',
              }}
            >
              {p.type === 'hundred' && (
                <div className="relative w-36 h-16 bg-emerald-600/90 border-2 border-emerald-300/60 rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between p-1.5 text-emerald-100 hover:brightness-125 hover:border-emerald-200 transition-all duration-200 hover:shadow-cyan-400/20 hover:shadow-2xl">
                  <div className="flex justify-between items-center text-[7px] font-mono tracking-widest text-emerald-300 uppercase font-extrabold">
                    <span>QUIETY BANK</span>
                    <span>$100</span>
                  </div>
                  <div className="flex items-center justify-center my-1">
                    <div className="w-8 h-8 rounded-full border border-emerald-400/30 flex items-center justify-center bg-emerald-800/50">
                      <DollarSign className="w-4 h-4 text-emerald-300 animate-pulse" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[7px] font-mono font-bold text-emerald-300">
                    <span>SERIES 2026</span>
                    <span>ONE HUNDRED DOLLARS</span>
                  </div>
                </div>
              )}

              {p.type === 'thousand' && (
                <div className="relative w-40 h-18 bg-neutral-900/90 border-2 border-primary/50 rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between p-2 text-white hover:brightness-125 hover:border-primary transition-all duration-200 hover:shadow-primary/30 hover:shadow-2xl">
                  <div className="flex justify-between items-center text-[7px] font-mono tracking-widest text-primary font-extrabold">
                    <span>SOVEREIGN STAKE</span>
                    <span>$1000</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-7 h-7 rounded bg-primary/20 text-primary flex items-center justify-center font-bold text-xs animate-bounce">
                      $
                    </div>
                  </div>
                  <div className="flex justify-between text-[6px] font-mono font-bold text-neutral-400 uppercase">
                    <span>Handshake protocol</span>
                    <span>SYSTEM VERIFIED</span>
                  </div>
                </div>
              )}

              {p.type === 'gold-coin' && (
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 border-2 border-yellow-200 shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center justify-center text-amber-900 font-extrabold text-sm transition-all hover:scale-115 hover:brightness-110">
                  <div className="w-9 h-9 rounded-full border border-yellow-300/40 flex items-center justify-center font-mono">
                    $
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ScrollMoneyParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    let lastKnownScrollPosition = 0;

    const handleScroll = () => {
      lastKnownScrollPosition = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastKnownScrollPosition > 600) {
            setScrollY(650);
          } else {
            setScrollY(lastKnownScrollPosition);
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (scrollY > 550) return null;

  const opacity = Math.max(0, 1 - scrollY / 420);

  const parallaxNodes = [
    { id: 101, left: 5, bg: 'emerald', initialY: 60, speed: 0.95, scale: 0.9 },
    { id: 102, left: 16, bg: 'coin', initialY: 150, speed: 0.65, scale: 1.1 },
    { id: 103, left: 24, bg: 'dark', initialY: 90, speed: 0.8, scale: 0.75 },
    { id: 104, left: 78, bg: 'emerald', initialY: 120, speed: 1.1, scale: 1.2 },
    { id: 105, left: 88, bg: 'coin', initialY: 70, speed: 0.7, scale: 1.35 },
    { id: 106, left: 63, bg: 'dark', initialY: 200, speed: 0.5, scale: 0.8 },
  ];

  return (
    <div
      className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden z-[45]"
      style={{ opacity }}
    >
      {parallaxNodes.map((node) => {
        const dynamicY = node.initialY - scrollY * node.speed;
        const driftRotation = (scrollY * 0.12) * (node.id % 2 === 0 ? 1 : -1);

        return (
          <div
            key={node.id}
            className="absolute transition-transform duration-75"
            style={{
              left: `${node.left}%`,
              top: `${dynamicY}px`,
              transform: `rotate(${driftRotation}deg) scale(${node.scale})`,
            }}
          >
            {node.bg === 'emerald' ? (
              <div className="w-28 h-12 bg-emerald-600/35 border border-emerald-400/20 rounded shadow-md flex flex-col justify-between p-1 text-emerald-100 font-mono text-[8px] opacity-75">
                <div className="flex justify-between font-bold">
                  <span>QUIETY</span>
                  <span>100</span>
                </div>
                <div className="text-center font-bold text-[10px] text-emerald-300">
                  $
                </div>
              </div>
            ) : node.bg === 'coin' ? (
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600/30 to-yellow-300/30 border border-yellow-200/20 shadow-md flex items-center justify-center text-amber-300 font-extrabold text-[10px] opacity-80">
                $
              </div>
            ) : (
              <div className="w-32 h-14 bg-neutral-900/30 border border-primary/20 rounded shadow-md flex flex-col justify-between p-1 text-[7px] text-primary opacity-70">
                <div className="flex justify-between font-bold">
                  <span>DIVIDEND</span>
                  <span>1000</span>
                </div>
                <div className="text-center font-bold font-mono text-xs">
                  $
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
