import React, { useState } from 'react';
import { ShieldCheck, Building, HelpCircle, Lock, Compass, ClipboardCheck, MessageCircle } from 'lucide-react';

export default function AdvisoryForm() {
  const [formData, setFormData] = useState({
    orgName: '',
    repName: '',
    repTitle: '',
    missionScope: '',
    compensationBracket: '$600,000 - $1,000,000Base',
    timeline: 'Confidential Scouting',
    contactPreference: 'Encrypted Video Stream'
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="advisory" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-neutral-100">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[35rem] h-[35rem] bg-indigo-50/50 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Creative Editorial Pitch */}
        <div className="lg:col-span-5 space-y-6 text-left" id="advisory-promo-panel">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary block">
              Client Advisory Protocol
            </span>
          </div>

          <h2 className="font-sans text-4xl md:text-5xl font-extrabold leading-tight text-brand-blue tracking-tight !font-sans">
            Commission a <br />
            <span className="text-primary italic font-serif">Bespoke Sourcing Search</span>
          </h2>

          <p className="font-sans text-neutral-500 text-sm sm:text-base font-medium tracking-wide leading-relaxed">
            Quiety delivers highly targeted headhunting mandates for companies wishing to acquire world-changing 0.1% design, product, and engineering operators.
          </p>

          {/* Symmetrical list blocks */}
          <div className="space-y-5 pt-4 text-xs sm:text-sm font-sans text-neutral-600">
            <div className="flex items-start gap-4 border-l-4 border-primary pl-4 py-1">
              <div>
                <span className="block font-bold text-brand-blue tracking-tight text-base">Unshakeable Trust</span>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                  We handle outreach with the utmost privacy to shield your product directions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-4 border-primary pl-4 py-1">
              <div>
                <span className="block font-bold text-brand-blue tracking-tight text-base">Elite Sourcing Depth</span>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                  Access non-public talent pools, top community contributors, and active builders.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-4 border-primary pl-4 py-1">
              <div>
                <span className="block font-bold text-brand-blue tracking-tight text-base">Sustained Acceleration</span>
                <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                  We guide transition timelines and assist with complex relocation packages or equity setups.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Clean Form Panel */}
        <div className="lg:col-span-7 w-full" id="advisory-form-wrapper">
          <div className="bg-neutral-50/50 border border-neutral-100 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-lg shadow-neutral-100">
            
            {loading && (
              <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center space-y-4 text-center">
                <span className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                  Transmitting Search Slog...
                </span>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fade-in" id="advisory-success-view">
                <div className="inline-flex p-3.5 bg-primary-light rounded-2xl text-primary border border-primary/10">
                  <ShieldCheck className="w-12 h-12" />
                </div>
                <div className="space-y-3">
                  <h4 className="font-sans text-2xl text-brand-blue font-extrabold dropdown-heading">Mandate Authenticated!</h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 font-medium max-w-md mx-auto leading-relaxed">
                    Under strict Finma secrecy compliance standards, your corporate talent registry has been securely filed. A Senior Managing Partner will contact you within 24 hours.
                  </p>
                </div>
                <div className="border border-neutral-200 rounded-2xl p-4 max-w-xs mx-auto text-left space-y-1.5 font-mono text-[9px] text-neutral-500 bg-white">
                  <div className="flex justify-between">
                    <span>MANDATE REGISTER STATUS:</span> 
                    <span className="text-primary font-bold">VETTED ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COMMUNICATION GATEWAY:</span> 
                    <span className="text-brand-blue font-bold">SECURE PIPELINE</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border border-neutral-200 hover:border-primary text-neutral-505 text-neutral-600 font-bold hover:text-primary rounded-full text-xs font-sans tracking-wide transition-all cursor-pointer"
                >
                  Create Secondary Mandate
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitAdvisory} className="space-y-6">
                <div className="border-b border-neutral-105 border-neutral-100 pb-5 text-left">
                  <div className="flex items-center gap-1.5 text-primary font-mono text-[9px] uppercase tracking-widest font-bold">
                    <Lock className="w-4 h-4 shrink-0" />
                    <span>Quiety Sourcing Gateway v5</span>
                  </div>
                  <h3 className="font-sans text-xl sm:text-2xl text-brand-blue font-extrabold mt-2">
                    Commission Search Protocols
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="orgName" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Organization / Company Name
                    </label>
                    <input
                      type="text"
                      id="orgName"
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      placeholder="e.g. Vance Digital Sourcing"
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary py-2.5 px-4 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors rounded-xl placeholder-neutral-350"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="repName" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="repName"
                      required
                      value={formData.repName}
                      onChange={(e) => setFormData({ ...formData, repName: e.target.value })}
                      placeholder="e.g. Jean-Luc Chevalier"
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary py-2.5 px-4 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors rounded-xl placeholder-neutral-350"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="repTitle" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Managing Seat / Title
                    </label>
                    <input
                      type="text"
                      id="repTitle"
                      value={formData.repTitle}
                      onChange={(e) => setFormData({ ...formData, repTitle: e.target.value })}
                      placeholder="e.g. VP of Product engineering"
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary py-2.5 px-4 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors rounded-xl placeholder-neutral-350"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="compensationBracket" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Estimated Compensation Plan
                    </label>
                    <select
                      id="compensationBracket"
                      value={formData.compensationBracket}
                      onChange={(e) => setFormData({ ...formData, compensationBracket: e.target.value })}
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary py-2.5 px-3.5 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors rounded-xl cursor-pointer font-semibold"
                    >
                      <option value="$400,000 - $600,000Base">$400k - $600k Base Package</option>
                      <option value="$600,000 - $1,000,000Base">$600k - $1M Sovereign Package</option>
                      <option value="$1,000,000 - $2,500,000+">$1.0M - $2.5M+ Board Level</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="missionScope" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                    Core Mission & Placement Objectives
                  </label>
                  <textarea
                    id="missionScope"
                    rows={2}
                    value={formData.missionScope}
                    onChange={(e) => setFormData({ ...formData, missionScope: e.target.value })}
                    placeholder="Describe the operational challenge, team dynamics, or system requirements..."
                    className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary py-2.5 px-4 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors rounded-xl placeholder-neutral-350 font-sans resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="timeline" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Estimated Timeline Target
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary py-2.5 px-3.5 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors rounded-xl cursor-pointer font-semibold"
                    >
                      <option value="Immediate Placement">Immediate (30 Days)</option>
                      <option value="Structured Transition">Structured Phase (3-6 Months)</option>
                      <option value="Confidential Scouting">Discreet Executive Scouting</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="contactPreference" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Communication Preferences
                    </label>
                    <select
                      id="contactPreference"
                      value={formData.contactPreference}
                      onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary py-2.5 px-3.5 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors rounded-xl cursor-pointer font-semibold"
                    >
                      <option value="Encrypted Video Stream">Authorized Video Consultation</option>
                      <option value="Physical Boardroom Meeting">Physical HQ Sourcing meeting</option>
                      <option value="Encrypted Messaging Exchange">Secure Communication channel</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 text-left">
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-primary/20 cursor-pointer hover:scale-101"
                    id="submit-advisory-btn"
                  >
                    <span>Authorize Commission Protocols</span>
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
