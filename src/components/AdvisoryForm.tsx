import React, { useState } from 'react';
import { Crown, Sparkles, Send, CheckCircle2, Lock, ShieldCheck, PhoneCall, Building } from 'lucide-react';

export default function AdvisoryForm() {
  const [formData, setFormData] = useState({
    orgName: '',
    repName: '',
    repTitle: '',
    missionScope: '',
    compensationBracket: '$600,000 - $1,000,000Base',
    timeline: 'Confidential Scouting',
    contactPreference: 'Swiss Physical Meeting'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitAdvisory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.orgName || !formData.repName) {
      alert('Please fill out critical organizational and representative markers.');
      return;
    }
    setLoading(true);
    // Mimic secure server syncing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="advisory" className="py-24 bg-gradient-to-t from-[#050505] via-[#0b0b0b] to-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[30rem] h-[30rem] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Visual Content Column */}
        <div className="lg:col-span-5 space-y-6 text-left" id="advisory-promo-panel">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-black/60">
            <Crown className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary">
              Client Advisory Protocol
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl leading-tight text-white tracking-normal">
            Commission a <br />
            <span className="text-gold-gradient italic font-serif">Bespoke Talent Search</span>
          </h2>

          <p className="font-sans text-neutral-400 text-xs md:text-sm font-light tracking-wide leading-relaxed">
            AURA provides boutique headhunting mandates for sovereign foundations, board coalitions, and family offices wishing to acquire top 0.1% leadership minds.
          </p>

          <div className="space-y-4 pt-4 text-xs font-sans text-neutral-300">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-white/5 border border-white/5 text-primary">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-semibold text-white">Guaranteed Press Anonymity</span>
                <p className="text-[11px] text-neutral-400 font-light mt-0.5">We conduct sourcing entirely in offline, direct-contact channels with no public postings.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-white/5 border border-white/5 text-primary">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-semibold text-white">Multi-Jurisdiction Alignment</span>
                <p className="text-[11px] text-neutral-400 font-light mt-0.5">Perfect tax compliance setup spanning Switzerland, EU, USA, and Singapore financial guidelines.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-white/5 border border-white/5 text-primary">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-semibold text-white">Bespoke Strategic Counsel</span>
                <p className="text-[11px] text-neutral-400 font-light mt-0.5">Every mandate is directed directly by a Senior Managing Trust Partner of AURA.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Interactive Column */}
        <div className="lg:col-span-7" id="advisory-form-wrapper">
          <div className="glass-card rounded-2xl border border-white/10 p-6 md:p-8 relative overflow-hidden">
            
            {loading && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-4 text-center">
                <span className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <span className="font-mono text-xs uppercase tracking-widest text-primary">Syncing Mandate Securely...</span>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in" id="advisory-success-view">
                <div className="inline-flex p-3 rounded-full bg-primary/10 border border-primary/30 text-primary">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl text-white font-medium">Mandate Registration Complete</h4>
                  <p className="font-sans text-xs text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
                    Under strict Swiss secrecy parameters, your request has been logged. A Managing Trust Partner will reach out via your selected channel to schedule a highly private exploratory brief.
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl max-w-xs mx-auto text-left space-y-1 border border-white/5 font-mono text-[9px] text-neutral-400">
                  <div className="flex justify-between"><span>MANDATE STATUS:</span> <span className="text-primary font-bold">VETTED ACTIVE</span></div>
                  <div className="flex justify-between"><span>HQ ROUTING NODE:</span> <span className="text-white">COGNITIVE-ZURICH</span></div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-white/5 border border-white/5 hover:border-primary/40 rounded-lg text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-all cursor-pointer"
                >
                  Create Secondary Search Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitAdvisory} className="space-y-6">
                <div className="border-b border-white/5 pb-4 text-left">
                  <div className="flex items-center gap-2 text-primary font-mono text-[9px] uppercase tracking-widest">
                    <Lock className="w-3.5 h-3.5" />
                    <span>AURA Confidential Advisory Link v12</span>
                  </div>
                  <h3 className="font-serif text-2xl text-white font-medium mt-1">
                    Register Commission Brief
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="orgName" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                      Company or Asset Fund Name
                    </label>
                    <input
                      type="text"
                      id="orgName"
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      placeholder="e.g. Vance Digital-Sovereign Trust"
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="repName" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="repName"
                      required
                      value={formData.repName}
                      onChange={(e) => setFormData({ ...formData, repName: e.target.value })}
                      placeholder="e.g. Jean-Luc Chevalier"
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="repTitle" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                      Director or Board Title
                    </label>
                    <input
                      type="text"
                      id="repTitle"
                      value={formData.repTitle}
                      onChange={(e) => setFormData({ ...formData, repTitle: e.target.value })}
                      placeholder="e.g. Chief of Steering Council"
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="compensationBracket" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                      Target Remuneration Budget Range
                    </label>
                    <select
                      id="compensationBracket"
                      value={formData.compensationBracket}
                      onChange={(e) => setFormData({ ...formData, compensationBracket: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                    >
                      <option value="$400,000 - $600,000Base" className="bg-[#0a0a0a]">$400k - $600k Base</option>
                      <option value="$600,000 - $1,000,000Base" className="bg-[#0a0a0a]">$600k - $1M Sovereign Level</option>
                      <option value="$1,000,000 - $2,500,000+" className="bg-[#0a0a0a]">$1M - $2.5M+ Board/Carrying</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="missionScope" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                    Core Operational Mission Details (High-level Goals)
                  </label>
                  <textarea
                    id="missionScope"
                    rows={3}
                    value={formData.missionScope}
                    onChange={(e) => setFormData({ ...formData, missionScope: e.target.value })}
                    placeholder="Briefly define the leadership challenge, structural assets involved, and core prestige indicators of the desired candidates..."
                    className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors font-sans leading-relaxed text-left"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="timeline" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                      Critical Hiring Timeline Window
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors animate-fade-in"
                    >
                      <option value="Immediate Placement" className="bg-[#0a0a0a]">Immediate (Next 30 Days)</option>
                      <option value="Structured Transition" className="bg-[#0a0a0a]">Structured Transition (3-6 Months)</option>
                      <option value="Confidential Scouting" className="bg-[#0a0a0a]">Discreet Executive Scouting</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contactPreference" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                      Preferred Secure Communications Channel
                    </label>
                    <select
                      id="contactPreference"
                      value={formData.contactPreference}
                      onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                    >
                      <option value="Encrypted Video Stream" className="bg-[#0a0a0a]">Authorized Cryptographic Call</option>
                      <option value="Swiss Physical Meeting" className="bg-[#0a0a0a]">Zürich Physical Sanctuary Boardroom</option>
                      <option value="Encrypted Messaging Exchange" className="bg-[#0a0a0a]">AES-Secure Email Brief Exchange</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 text-left">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-gradient hover:brightness-110 active:scale-95 text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(197,160,89,0.15)] cursor-pointer"
                    id="submit-advisory-btn"
                  >
                    <span>Authorize Commission Protocols</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
