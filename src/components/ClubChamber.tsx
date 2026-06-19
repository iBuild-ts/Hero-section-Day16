import { useState } from 'react';
import { Volume2, VolumeX, Eye, Radio, X, MapPin, Sparkles, Check, Sparkle, Brain, Cpu, Rocket, Code2 } from 'lucide-react';

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
  onFilterFromSkills?: (selectedSkills: string[]) => void;
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
  setMockMusicPlaying,
  onFilterFromSkills
}: ClubChamberProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  if (!isOpen) return null;

  const hqOptions = [
    { name: 'Zurich Office', region: 'Europe Central Node', details: 'Bahnhofstrasse Secrecy Suite' },
    { name: 'Singapore Office', region: 'Asia Capital Node', details: 'Marina Bay Advisory Penthouse' },
    { name: 'Silicon Valley Office', region: 'Global Technology Node', details: 'Palo Alto Advisory Center' }
  ];

  const skillOptions = [
    { id: 'react', name: 'React & Frontend Mastery', icon: Code2, desc: 'Interactive SPA development with responsive motion frameworks.' },
    { id: 'ai', name: 'AI & Systems Design', icon: Brain, desc: 'Generative AI pipeline modeling with large foundation models.' },
    { id: 'infrastructure', name: 'Distributed Infrastructure', icon: Cpu, desc: 'Sovereign cloud compute scaling with multi-region replication.' },
    { id: 'product', name: 'Product Leadership', icon: Rocket, desc: 'Zero-to-one developer community and ecosystem growth.' }
  ];

  const handleToggleSkill = (skillId: string) => {
    let nextSkills: string[];
    if (selectedSkills.includes(skillId)) {
      nextSkills = selectedSkills.filter(s => s !== skillId);
    } else {
      nextSkills = [...selectedSkills, skillId];
    }
    setSelectedSkills(nextSkills);
    
    // Smoothly filter positions based on selected skills if callback provided
    if (onFilterFromSkills) {
      onFilterFromSkills(nextSkills);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-brand-blue/60 backdrop-blur-sm flex justify-end animate-fade-in text-left"
      onClick={onClose}
      id="club-chamber-backdrop"
    >
      <div 
        className="w-full max-w-md bg-white border-l border-neutral-100 h-full p-6 md:p-8 flex flex-col justify-between overflow-y-auto animate-slide-in-right shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        id="club-chamber-panel"
      >
        <div className="space-y-8">
          
          {/* Symmetrical Title Block */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>MANDATE MATCH WORKSPACE</span>
              </span>
              <h3 className="font-sans text-2xl text-brand-blue font-extrabold">Candidate Center</h3>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 text-neutral-450 hover:text-brand-blue transition-colors cursor-pointer text-xs"
            >
              ✕
            </button>
          </div>

          {/* Sourcing Location selection mockup */}
          <div className="space-y-3">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-extrabold">
              Primary Sourcing Node
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {hqOptions.map((hq) => (
                <button
                  key={hq.name}
                  onClick={() => setSelectedHQ(hq.name)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    selectedHQ === hq.name 
                      ? 'bg-primary-light border-primary/30 text-brand-blue' 
                      : 'bg-neutral-50/50 border-neutral-100 hover:border-primary/20 text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="block font-sans text-sm font-bold text-brand-blue flex items-center gap-1.5">
                      <MapPin className={`w-4 h-4 ${selectedHQ === hq.name ? 'text-primary' : 'text-neutral-400'}`} />
                      {hq.name}
                    </span>
                    <span className="block text-[10px] text-neutral-400 font-medium">{hq.details}</span>
                  </div>
                  {selectedHQ === hq.name && <Check className="w-4 h-4 text-primary shrink-0 stroke-[3]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Skill Analyzer Simulator */}
          <div className="space-y-3">
            <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-extrabold">
              Skills-Matching Matrix Simulator
            </span>
            <p className="font-sans text-[11px] text-neutral-500 font-medium leading-relaxed mb-2">
              Select your masteries below to simulate real-time filtering score changes inside the global openings database:
            </p>
            <div className="grid grid-cols-1 gap-2.5">
              {skillOptions.map((skill) => {
                const SkillIcon = skill.icon;
                const isSelected = selectedSkills.includes(skill.id);
                return (
                  <button
                    key={skill.id}
                    onClick={() => handleToggleSkill(skill.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-3 cursor-pointer ${
                      isSelected 
                        ? 'bg-neutral-50 border-primary/30' 
                        : 'bg-white border-neutral-100 hover:border-primary/10'
                    }`}
                  >
                    <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${isSelected ? 'bg-primary-light text-primary' : 'bg-neutral-100 text-neutral-400'}`}>
                      <SkillIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="block font-sans text-xs font-bold text-brand-blue">
                          {skill.name}
                        </span>
                        {isSelected && <Sparkle className="w-3.5 h-3.5 text-primary fill-primary animate-pulse" />}
                      </div>
                      <span className="block text-[9px] text-neutral-400 font-medium leading-snug mt-1">
                        {skill.desc}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Background Video Sound toggle control */}
          <div className="space-y-3 bg-neutral-55 bg-neutral-50/50 rounded-2xl p-4 border border-neutral-100">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#B45309] font-bold">
                  Ambient Lounge Stream
                </span>
                <span className="block font-sans text-xs text-neutral-500 font-semibold leading-normal">
                  "Quiety Solace Soundscape" (Continuous Loop)
                </span>
              </div>
              
              <button
                onClick={() => setMockMusicPlaying(!mockMusicPlaying)}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  mockMusicPlaying 
                    ? 'bg-primary-light border-primary/30 text-primary animate-pulse' 
                    : 'bg-white border-neutral-200 text-neutral-400 hover:text-brand-blue'
                }`}
                title={mockMusicPlaying ? 'Mute Audio' : 'Play Audio'}
              >
                {mockMusicPlaying ? <Volume2 className="w-4.5 h-4.5 stroke-[2.5]" /> : <VolumeX className="w-4.5 h-4.5" />}
              </button>
            </div>
            {mockMusicPlaying && (
              <p className="font-sans text-[9px] text-emerald-500 font-bold tracking-wider animate-pulse uppercase flex items-center gap-1">
                <span>● AUDIO ENGAGED • CONFIDENTIAL SOURCE STREAM LIVE</span>
              </p>
            )}
          </div>

          {/* Quick interactive utility to clear simulators */}
          {selectedSkills.length > 0 && (
            <button
              onClick={() => {
                setSelectedSkills([]);
                if (onFilterFromSkills) onFilterFromSkills([]);
              }}
              className="text-primary hover:text-brand-blue font-mono text-[9px] uppercase tracking-wider font-extrabold flex items-center gap-1 cursor-pointer transition-colors pt-2 mx-auto"
            >
              Clear Skills Filter Simulate ({selectedSkills.length})
            </button>
          )}

        </div>

        {/* Footer specifications */}
        <div className="border-t border-neutral-100 pt-5 text-center space-y-2 mt-8">
          <div className="flex items-center justify-center gap-1.5 text-emerald-500 font-mono text-[9px] uppercase tracking-wider font-bold">
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>Secured Session: Active Port 3000 Node</span>
          </div>
          <p className="font-sans text-[10px] text-neutral-400 font-medium leading-relaxed">
            Authorized for test preview operations in AI Studio Workspace.
          </p>
        </div>

      </div>
    </div>
  );
}
