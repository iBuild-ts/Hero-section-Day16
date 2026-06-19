import { useState, useMemo } from 'react';
import { MOCK_JOBS, SECTORS } from '../data/mockJobs';
import { Job } from '../types';
import { Search, Sliders, ChevronRight, ShieldAlert, Award, MapPin, DollarSign, Calendar, Eye, FileText } from 'lucide-react';

interface JobCatalogProps {
  onApplyForJob: (job: Job) => void;
}

export default function JobCatalog({ onApplyForJob }: JobCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [minPrestige, setMinPrestige] = useState(95);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Filter jobs based on states
  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.brief.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSector = selectedSector === 'all' || job.category === selectedSector;
      const matchesPrestige = job.prestigeScore >= minPrestige;

      return matchesSearch && matchesSector && matchesPrestige;
    });
  }, [searchTerm, selectedSector, minPrestige]);

  return (
    <section id="catalog" className="py-24 bg-[#0d0d0d] relative">
      <div className="absolute inset-0 bg-radial-[circle_at_bottom_left,rgba(197,160,89,0.03)_0%,transparent_50%]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="catalog-header">
          <div className="space-y-4 text-left">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Institutional Vault
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-normal text-white">
              Executive Placement Catalog
            </h2>
            <p className="font-sans text-neutral-400 text-xs md:text-sm font-light tracking-wide max-w-xl">
              Confidential placements currently authorized for vetted active recruitment. Credentials matching a Prestige Index over 96% are invited to apply.
            </p>
          </div>
          
          {/* Active Counters */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-4 font-mono text-left">
            <div>
              <span className="block text-[9px] text-neutral-500 uppercase">Available Vault Positions</span>
              <span className="text-xl text-white font-serif font-bold">{MOCK_JOBS.length} Active</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <span className="block text-[9px] text-neutral-500 uppercase">Latest Dispatch</span>
              <span className="text-xs text-primary font-semibold">Today 14:02 Zurich</span>
            </div>
          </div>
        </div>

        {/* Sector Quick-Select Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 scrollbar-none" id="sector-filters">
          <button
            onClick={() => setSelectedSector('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
              selectedSector === 'all'
                ? 'bg-gold-gradient text-black border-transparent font-medium shadow-[0_5px_15px_rgba(197,160,89,0.15)]'
                : 'bg-black/30 text-neutral-400 border-white/5 hover:border-primary/20 hover:text-white'
            }`}
          >
            All Sectors ({MOCK_JOBS.length})
          </button>
          {SECTORS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSector(sec.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest whitespace-nowrap transition-all duration-300 border ${
                selectedSector === sec.id
                  ? 'bg-gold-gradient text-black border-transparent font-medium shadow-[0_5px_15px_rgba(197,160,89,0.15)]'
                  : 'bg-black/30 text-neutral-400 border-white/5 hover:border-primary/20 hover:text-white'
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>

        {/* Search & Sliders Filter Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white/5 border border-white/5 rounded-2xl p-6 mb-10" id="search-controls">
          <div className="lg:col-span-6 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search by key attributes, strategic fields or geographic hubs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 font-sans text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary/50 transition-colors"
              id="search-input"
            />
          </div>

          <div className="lg:col-span-4 flex items-center gap-4">
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest whitespace-nowrap">
              Prestige threshold:
            </span>
            <input
              type="range"
              min="95"
              max="99"
              step="1"
              value={minPrestige}
              onChange={(e) => setMinPrestige(Number(e.target.value))}
              className="w-full accent-primary bg-neutral-800 h-1.5 rounded-lg cursor-pointer"
              id="prestige-range-slider"
            />
            <span className="font-mono text-xs font-semibold text-primary whitespace-nowrap">
              {minPrestige}%+ Index
            </span>
          </div>

          <div className="lg:col-span-2 flex items-center justify-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSector('all');
                setMinPrestige(95);
              }}
              className="text-neutral-500 hover:text-white font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Sliders className="w-3 h-3" />
              <span>Reset Vault</span>
            </button>
          </div>
        </div>

        {/* Dynamic Catalog Stream Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="catalog-results-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="glass-card rounded-2xl border border-white/5 p-6 space-y-5 cursor-pointer hover:border-primary/30 transition-all duration-500 group relative flex flex-col justify-between"
                onClick={() => setSelectedJob(job)}
                id={`job-card-${job.id}`}
              >
                {/* Visual accent top right */}
                <span className="absolute top-4 right-4 bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider font-semibold">
                  Prestige: {job.prestigeScore}%
                </span>

                <div className="space-y-4">
                  <div className="space-y-1 text-left">
                    <span className="block font-mono text-[8px] uppercase tracking-widest text-[#aa7c11]">
                      {job.sector}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-white group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed tracking-wide text-left">
                    {job.brief}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5 text-left font-mono text-[10px]">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <MapPin className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <DollarSign className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span className="truncate">{job.salary}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                  <span className="font-mono text-[8px] text-neutral-500">
                    POSTED: {job.postedAt}
                  </span>
                  
                  <button
                    className="flex items-center gap-1.5 font-mono text-[10px] text-primary group-hover:text-white uppercase tracking-widest transition-colors font-medium cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                    }}
                  >
                    <span>Inspect Brief</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center border border-white/5 rounded-2xl bg-black/40 space-y-4">
              <ShieldAlert className="w-12 h-12 text-primary/40 mx-auto" />
              <div className="space-y-1">
                <p className="font-serif text-lg text-white font-medium">No Matches inside Authorized Vault</p>
                <p className="font-sans text-xs text-neutral-500">Lower the prestige index or modify key attributes of your alignment.</p>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Detail Modal / Overlay Panel */}
        {selectedJob && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
            onClick={() => setSelectedJob(null)}
            id="job-modal-backdrop"
          >
            <div 
              className="bg-[#0b0b0b] border border-white/10 rounded-2xl w-full max-w-3xl p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto text-left"
              onClick={(e) => e.stopPropagation()}
              id="job-details-panel"
            >
              {/* Modal header details */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/5 pb-6">
                <div className="space-y-2 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#aa7c11]">
                    {selectedJob.sector}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-medium">
                    {selectedJob.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-neutral-400 font-mono text-[10px] pt-1">
                    <span className="bg-white/5 px-2.5 py-1 rounded text-white border border-white/5">
                      Type: {selectedJob.type}
                    </span>
                    <span className="bg-primary/5 px-2.5 py-1 rounded text-primary border border-primary/20">
                      Match Index: {selectedJob.prestigeScore}%
                    </span>
                    <span>📍 {selectedJob.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white font-mono text-sm border border-white/10 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Brief Content */}
              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 text-xs font-mono text-primary flex items-start gap-3">
                  <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold uppercase tracking-wider mb-1">Confidential Client Spec: {selectedJob.confidentialClient}</span>
                    <p className="font-sans text-neutral-300">Identity protected by AURA Stealth protocol. Vetted disclosure provided only during Phase III symposium.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-white font-medium">Mission Profile</h4>
                  <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed tracking-wide">
                    {selectedJob.brief}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <h5 className="font-serif text-base text-white font-medium">Sovereign Responsibilities</h5>
                    <ul className="list-disc list-inside font-sans text-xs text-neutral-400 space-y-2 font-light tracking-wide pl-2">
                      {selectedJob.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-serif text-base text-white font-medium">Required Core Mastery</h5>
                    <ul className="list-disc list-inside font-sans text-xs text-neutral-400 space-y-2 font-light tracking-wide pl-2">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <h5 className="font-serif text-base text-white font-medium">Besopke Compensation and Premium Privileges</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedJob.benefits.map((benefit, i) => (
                      <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5 font-sans text-xs text-neutral-300 font-light">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action area */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
                <div className="text-left font-mono">
                  <span className="block text-[8px] text-neutral-500 uppercase">Target Compensation Pack</span>
                  <span className="text-sm font-semibold text-primary">{selectedJob.salary}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setSelectedJob(null);
                    }}
                    className="flex-1 sm:flex-none px-5 py-3 border border-white/10 text-neutral-400 hover:text-white rounded-xl text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Withdraw View
                  </button>
                  <button
                    onClick={() => {
                      const temp = selectedJob;
                      setSelectedJob(null);
                      onApplyForJob(temp);
                    }}
                    className="flex-1 sm:flex-none px-6 py-3 bg-gold-gradient text-black font-semibold rounded-xl text-xs font-mono uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(197,160,89,0.2)]"
                    id="modal-apply-btn"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Initiate Secure Protocol App</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
