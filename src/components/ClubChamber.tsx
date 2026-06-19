import { Volume2, VolumeX, Eye, Radio, X, MapPin, Sparkles, Check } from 'lucide-react';

interface ClubChamberProps {
  isOpen: boolean;
  onClose: () => void;
  ambientOpacity: number;
  setAmbientOpacity: (val: number) => void;
  selectedHQ: string;
  setSelectedHQ: (hq: string) => void;
  visualTheme: string;
  setVisualTheme: (theme: string) => void;
  mockMusicPlaying: boolean;
  setMockMusicPlaying: (val: boolean) => void;
}

export default function ClubChamber({
  isOpen,
  onClose,
  ambientOpacity,
  setAmbientOpacity,
  selectedHQ,
  setSelectedHQ,
  visualTheme,
  setVisualTheme,
  mockMusicPlaying,
  setMockMusicPlaying
}: ClubChamberProps) {
  if (!isOpen) return null;

  const hqOptions = [
    { name: 'Zürich', region: 'Europe Central Node', details: 'Bahnhofstrasse Secrecy Suite' },
    { name: 'Paris', region: 'Haute Fashion Node', details: 'Rue du Faubourg Saint-Honoré Sanctuary' },
    { name: 'Singapore', region: 'Asia Capital Node', details: 'Marina Bay Advisory Penthouse' },
    { name: 'Geneva', region: 'Global Wealth Node', details: 'Rue du Rhône Private Vault' }
  ];

  const themeOptions = [
    { id: 'obsidian', name: 'Obsidian Noir', desc: 'Midnight black with subtle champagne text outlines.' },
    { id: 'champagne', name: 'Champagne Gold', desc: 'Sunkissed luxury gold gradients & micro-glows.' },
    { id: 'platinum', name: 'Platinum Ice', desc: 'Ultra-clean high contrast platinum & cold steel tones.' },
    { id: 'emerald', name: 'Sovereign Emerald', desc: 'Aristocratic deep forest marble and golden linings.' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in text-left"
      onClick={onClose}
      id="club-chamber-backdrop"
    >
      <div 
        className="w-full max-w-md bg-[#080808] border-l border-white/10 h-full p-6 md:p-8 flex flex-col justify-between overflow-y-auto animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
        id="club-chamber-panel"
      >
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-5">
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-primary" />
                <span>The AURA Club Room</span>
              </span>
              <h3 className="font-serif text-2xl text-white font-medium">Ambient Curator</h3>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Secure Node Routing Selector */}
          <div className="space-y-3">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-[#aa7c11] font-bold">
              Secure HQ Routing Node
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {hqOptions.map((hq) => (
                <button
                  key={hq.name}
                  onClick={() => setSelectedHQ(hq.name)}
                  className={`w-full p-3 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group ${
                    selectedHQ === hq.name 
                      ? 'bg-primary/5 border-primary/40 text-white' 
                      : 'bg-black/40 border-white/5 hover:border-primary/20 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block font-serif text-sm font-medium text-white flex items-center gap-1.5">
                      <MapPin className={`w-3.5 h-3.5 ${selectedHQ === hq.name ? 'text-primary' : 'text-neutral-600'}`} />
                      {hq.name} HQ
                    </span>
                    <span className="block text-[10px] text-neutral-500 font-mono">{hq.details}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-500 group-hover:block hidden">
                      Select
                    </span>
                    {selectedHQ === hq.name && <Check className="w-4 h-4 text-primary" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Luxury Visual Theme Selector */}
          <div className="space-y-3">
            <span className="block font-mono text-[9px] uppercase tracking-widest text-[#aa7c11] font-bold">
              Luxury Visual Theme
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              {themeOptions.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setVisualTheme(theme.id)}
                  className={`p-3 rounded-xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[85px] group ${
                    visualTheme === theme.id 
                      ? 'bg-white/5 border-primary/50 text-white' 
                      : 'bg-black/30 border-white/5 hover:border-white/10 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="block font-serif text-xs font-semibold text-white">
                      {theme.name}
                    </span>
                    <span className="block text-[8px] text-neutral-500 font-sans leading-tight leading-3">
                      {theme.desc}
                    </span>
                  </div>
                  {visualTheme === theme.id && (
                    <span className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Background Video Opacity control */}
          <div className="space-y-3 bg-white/5 rounded-xl p-4 border border-white/5">
            <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400">
              <span className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span>VIDEO DENSITY (BACKGROUND BLEND)</span>
              </span>
              <span className="text-primary font-bold">{Math.round(ambientOpacity * 100)}%</span>
            </div>
            
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={ambientOpacity}
              onChange={(e) => setAmbientOpacity(parseFloat(e.target.value))}
              className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <p className="font-sans text-[9px] text-neutral-500 leading-normal">
              Fine-tune the contrast ratios of the 8K-inspired loop video to perfectly match your surrounding ambient room lighting.
            </p>
          </div>

          {/* Chamber Chillout Soundtrack Mock Controller */}
          <div className="space-y-3 bg-white/5 rounded-xl p-4 border border-white/5">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#aa7c11] font-bold">
                  Ambient Audio Stream
                </span>
                <span className="block font-sans text-[11px] text-neutral-400 font-light">
                  "Solace in Secrecy" — Lounge Mix (Confidential)
                </span>
              </div>
              
              <button
                onClick={() => setMockMusicPlaying(!mockMusicPlaying)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  mockMusicPlaying 
                    ? 'bg-primary/20 border-primary text-primary animate-pulse' 
                    : 'bg-black/40 border-white/10 text-neutral-500 hover:text-white'
                }`}
                title={mockMusicPlaying ? 'Mute Soundtrack' : 'Play Soundtrack'}
              >
                {mockMusicPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Footer info in sidebar */}
        <div className="border-t border-white/5 pt-4 text-center space-y-2 mt-8">
          <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-mono text-[9px] uppercase tracking-wider">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>HQ Matrix Secure Connection Status: Verified</span>
          </div>
          <p className="font-sans text-[10px] text-neutral-500 font-light">
            You are browsing inside the private AURA Client Sandbox. Custom tokens reset every hour.
          </p>
        </div>

      </div>
    </div>
  );
}
