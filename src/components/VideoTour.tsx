import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, VolumeX, Sparkles, ShieldCheck, Cpu, Database, Eye } from 'lucide-react';

export default function VideoTour() {
  const [isMuted, setIsMuted] = useState(true);
  const [showFullPlayer, setShowFullPlayer] = useState(false);

  return (
    <section id="video-tour" className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Bounded Immersive Background Video Banner */}
        <div className="relative min-h-[440px] md:min-h-[500px] rounded-[32px] overflow-hidden bg-neutral-950 border border-neutral-800/80 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.4)] flex items-center">
          
          {/* Looping Silent Background HTML5 MP4 Video */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            <video
              src="https://www.image2url.com/r2/default/videos/1781833169026-ce8e9554-3760-4c4c-878f-852407e2ab9c.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-75 max-w-none"
            />
          </div>

          {/* Premium High-Contrast Color and Light Vignette Mask - Dark gradient on left for text legibility, transparent on right for full video clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10" />

          {/* Banner Content Layout */}
          <div className="relative z-20 max-w-3xl px-8 py-16 md:px-16 text-left space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/15 text-primary border border-primary/20 backdrop-blur-md px-3 py-1.5 rounded-xl"
            >
              <Sparkles className="w-3.5 h-3.5 fill-primary/20" />
              <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest">
                Platform Machinery Telemetry
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sans text-3xl md:text-4xl text-white font-extrabold tracking-tight leading-tight !font-sans"
            >
              The Match Engine, <br className="hidden sm:inline" />
              <span className="text-primary">Fully Autonomous & Secured.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-neutral-400 text-xs md:text-sm leading-relaxed max-w-xl font-medium"
            >
              Our coordinate processing telemetry screens active engineering applications through private secure handshakes. Senior profiles remain fully masked until corporate covenant thresholds harmonize.
            </motion.p>

            {/* Micro Stats Indicators */}
            <div className="grid grid-cols-2 gap-4 max-w-md pt-2 border-t border-neutral-800/60">
              <div className="space-y-1">
                <span className="block font-mono text-primary font-bold text-lg">90 Seconds</span>
                <span className="block font-sans text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Average Session Duration</span>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-white font-bold text-lg">Continuous Loop</span>
                <span className="block font-sans text-neutral-400 text-[10px] uppercase font-bold tracking-wider">Live Coordination Signal</span>
              </div>
            </div>

            {/* Interactive Actions Overlay Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.button
                onClick={() => setShowFullPlayer(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-3 rounded-2xl bg-primary text-white font-sans text-xs font-bold hover:bg-primary-dark transition-all shadow-[0_4px_24px_rgba(255,94,54,0.3)] flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Initialize Full Presentation</span>
              </motion.button>

              <div className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl border border-neutral-800 bg-neutral-900/40 text-neutral-400 font-mono text-[9px] tracking-wider uppercase font-extrabold select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>ACTIVE AUDIO ROUTE SECURE</span>
              </div>
            </div>
          </div>

          {/* Absolute decorative telemetry lines on target side */}
          <div className="hidden lg:flex absolute right-12 bottom-12 z-20 flex-col items-end space-y-2.5 text-right font-mono text-[9px] text-neutral-500">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-primary" />
              <span>COORDINATE ANALYZER: HIGH CALIBER</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-neutral-500" />
              <span>PRIVATE KEYS PRESERVED</span>
            </div>
          </div>

        </div>

      </div>

      {/* Full-Screen High-Fidelity Modal Overlay Player representing an OS Console */}
      <AnimatePresence>
        {showFullPlayer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-[32px] overflow-hidden shadow-2xl p-2 relative"
            >
              {/* Top Control Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800/50 bg-neutral-950/60 rounded-t-[24px]">
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => setShowFullPlayer(false)}
                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" 
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[9px] text-neutral-400 tracking-wider">SECURE PLATFORM OUTLET STREAM</span>
                <button 
                  onClick={() => setShowFullPlayer(false)}
                  className="font-mono text-[9px] text-neutral-400 hover:text-white uppercase tracking-widest font-extrabold px-2 py-1 rounded border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer"
                >
                  CLOSE
                </button>
              </div>

              {/* Player Body */}
              <div className="relative aspect-[16/9] w-full bg-neutral-950 rounded-[22px] overflow-hidden">
                <video
                  src="https://www.image2url.com/r2/default/videos/1781833169026-ce8e9554-3760-4c4c-878f-852407e2ab9c.mp4"
                  autoPlay
                  muted={isMuted}
                  loop
                  controls
                  playsInline
                  className="w-full h-full object-contain absolute inset-0"
                />
                
                {/* Embedded sound controller */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-3 rounded-full bg-neutral-950/90 hover:bg-neutral-900 border border-neutral-800 text-white cursor-pointer shadow-lg transition-all"
                    title={isMuted ? "Unmute sound" : "Mute sound"}
                  >
                    {isMuted ? <VolumeX className="w-4.5 h-4.5" /> : <Volume2 className="w-4.5 h-4.5 text-emerald-400" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
