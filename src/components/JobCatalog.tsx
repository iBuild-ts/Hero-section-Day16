import { useState, useMemo } from 'react';
import { MOCK_JOBS, SECTORS } from '../data/mockJobs';
import { Job } from '../types';
import { Search, Sliders, ChevronRight, AlertCircle, Award, MapPin, DollarSign, FileText, BadgeDollarSign, Compass } from 'lucide-react';

interface JobCatalogProps {
  onApplyForJob: (job: Job) => void;
  overrideSearchTerm: string;
  overrideCategory: string;
}

export default function JobCatalog({ onApplyForJob, overrideSearchTerm, overrideCategory }: JobCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [minPrestige, setMinPrestige] = useState(95);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Sync parent searches from the Hero section!
  const currentSearchTerm = overrideSearchTerm || searchTerm;
  const currentSector = overrideCategory !== 'all' ? overrideCategory : selectedSector;

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
        job.brief.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(currentSearchTerm.toLowerCase());
      
      const matchesSector = currentSector === 'all' || job.category === currentSector;
      const matchesPrestige = job.prestigeScore >= minPrestige;

      return matchesSearch && matchesSector && matchesPrestige;
    });
  }, [currentSearchTerm, currentSector, minPrestige]);

  return (
    <section id="catalog" className="py-24 md:py-32 bg-white relative border-t border-neutral-100">
      <div className="absolute inset-0 bg-radial-[circle_at_bottom_left,rgba(255,94,54,0.01)_0%,transparent_50%] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block styled with immense breathing space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 border-b border-neutral-100 pb-10" id="catalog-header">
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary block">
              Global Openings Database
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl text-brand-blue font-extrabold tracking-tight leading-none">
              Explore Active Positions
            </h2>
            <p className="font-sans text-neutral-500 text-sm font-medium tracking-wide max-w-xl leading-relaxed">
              Explore current placements currently authorized for active recruitment. Filter by sector or matching prestige vectors instantly.
            </p>
          </div>
          
          {/* Refined Elite Ledger Count */}
          <div className="lg:col-span-4 flex items-end justify-start lg:justify-end">
            <div className="border border-neutral-200 bg-neutral-50/50 rounded-2xl p-5 space-y-2 text-left w-full sm:w-auto min-w-[200px]">
              <span className="block font-mono text-[9px] font-bold uppercase tracking-widest text-neutral-450">
                ACTIVE JOBS METRIC
              </span>
              <div className="flex items-baseline justify-between">
                <span className="font-sans text-2xl text-brand-blue font-bold">
                  {filteredJobs.length} Live Openings
                </span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-pulse ml-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Filter Bar (Quiety styling matching tabs) */}
        <div className="flex border-b border-neutral-100 overflow-x-auto pb-4 scrollbar-none gap-6 sm:gap-8" id="sector-filters">
          <button
            onClick={() => {
              setSelectedSector('all');
              // Also reset parent sync properties
              if (overrideCategory) setSelectedSector('all');
            }}
            className={`font-sans text-xs sm:text-sm font-semibold tracking-wide pb-3 whitespace-nowrap transition-colors relative focus:outline-none cursor-pointer ${
              currentSector === 'all'
                ? 'text-primary'
                : 'text-neutral-505 hover:text-brand-blue'
            }`}
          >
            All Sectors ({MOCK_JOBS.length})
            {currentSector === 'all' && (
              <span className="absolute bottom-[-17px] left-0 right-0 h-[2.5px] bg-primary rounded-full" />
            )}
          </button>
          {SECTORS.map((sec) => {
            const count = MOCK_JOBS.filter(j => j.category === sec.id).length;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedSector(sec.id)}
                className={`font-sans text-xs sm:text-sm font-semibold tracking-wide pb-3 whitespace-nowrap transition-colors relative focus:outline-none cursor-pointer ${
                  currentSector === sec.id
                    ? 'text-primary'
                    : 'text-neutral-500 hover:text-brand-blue'
                }`}
              >
                {sec.name} ({count})
                {currentSector === sec.id && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[2.5px] bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Refined Search Controls Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b border-neutral-100 mb-12 items-center" id="search-controls">
          <div className="md:col-span-6 relative">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by keywords, location coordinates, or platform role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none py-3 pl-8 pr-4 font-sans text-xs md:text-sm text-brand-blue placeholder-neutral-400 focus:outline-none focus:ring-0"
              id="search-input"
            />
          </div>

          <div className="md:col-span-4 flex items-center gap-4">
            <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest whitespace-nowrap font-bold">
              MATCH INDEX:
            </span>
            <input
              type="range"
              min="95"
              max="99"
              step="1"
              value={minPrestige}
              onChange={(e) => setMinPrestige(Number(e.target.value))}
              className="w-full h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
              id="prestige-range-slider"
            />
            <span className="font-sans text-xs text-primary font-bold whitespace-nowrap">
              {minPrestige}%+ Confidence
            </span>
          </div>

          <div className="md:col-span-2 flex items-center justify-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSector('all');
                setMinPrestige(95);
                window.location.hash = '#catalog';
              }}
              className="text-neutral-500 hover:text-brand-blue font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer font-bold"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>

        {/* Dynamic Catalog Grid - Landscape standard layout as Quiety style */}
        <div className="grid grid-cols-1 gap-6" id="catalog-results-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-stretch justify-between gap-6 cursor-pointer hover:border-primary/20 hover:shadow-[0_20px_45px_rgba(255,94,54,0.06)] transition-all duration-400 relative"
                onClick={() => setSelectedJob(job)}
                id={`job-card-${job.id}`}
              >
                {/* Left block: Title, category badge and brief */}
                <div className="flex-1 text-left space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold">
                      {job.sector}
                    </span>
                    <span className="bg-primary-light text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/10">
                      {job.prestigeScore}% MATCH INDEX
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-sans text-xl md:text-2xl font-extrabold text-brand-blue group-hover:text-primary transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="font-sans text-neutral-500 text-xs md:text-sm font-medium leading-relaxed max-w-3xl">
                      {job.brief}
                    </p>
                  </div>

                  {/* Symmetrical specification badges inside cards */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-500 pt-2">
                    <div className="flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-100">
                      <BadgeDollarSign className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                {/* Right action block */}
                <div className="shrink-0 flex flex-col md:flex-row lg:flex-col justify-between items-start md:items-end lg:items-end border-t lg:border-t-0 lg:border-l border-neutral-100 pt-6 lg:pt-0 lg:pl-8 min-w-[180px]">
                  <div className="text-left md:text-right lg:text-right space-y-1">
                    <span className="block text-[9px] text-neutral-400 font-bold uppercase tracking-wider">
                      POSTED TIMESTAMP
                    </span>
                    <span className="font-sans text-xs text-neutral-600 font-bold">
                      {job.postedAt}
                    </span>
                  </div>

                  <span className="text-primary group-hover:text-brand-blue transition-all uppercase tracking-widest text-[11px] font-bold flex items-center gap-1.5 pt-4 md:pt-0">
                    <span>Inspect Mandate</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center border border-dashed border-neutral-200 rounded-3xl space-y-4 bg-neutral-50/50">
              <AlertCircle className="w-12 h-12 text-primary/40 mx-auto" />
              <div className="space-y-1">
                <p className="font-sans text-lg text-brand-blue font-bold">No Catalog Fits Found</p>
                <p className="font-sans text-xs sm:text-sm text-neutral-500 font-medium max-w-md mx-auto">
                  Adjust your search text, lower the confidence filter, or submit a custom inquiry to our team.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Modal Panel */}
        {selectedJob && (
          <div 
            className="fixed inset-0 z-50 bg-brand-blue/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
            onClick={() => setSelectedJob(null)}
            id="job-modal-backdrop"
          >
            <div 
              className="bg-white rounded-3xl w-full max-w-3xl p-6 sm:p-8 md:p-10 space-y-6 relative max-h-[90vh] overflow-y-auto text-left shadow-2xl border border-neutral-100"
              onClick={(e) => e.stopPropagation()}
              id="job-details-panel"
            >
              {/* Modal header details */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-neutral-100 pb-5">
                <div className="space-y-2 text-left">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary block">
                    {selectedJob.sector}
                  </span>
                  <h3 className="font-sans text-2xl sm:text-3xl text-brand-blue font-extrabold tracking-tight">
                    {selectedJob.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5 text-neutral-600 font-sans text-xs font-semibold pt-1">
                    <span className="bg-neutral-50 border border-neutral-100 px-3 py-1 rounded-full text-neutral-700">
                      Work: {selectedJob.type}
                    </span>
                    <span className="bg-primary-light px-3 py-1 rounded-full text-primary border border-primary/15">
                      Match Index: {selectedJob.prestigeScore}%
                    </span>
                    <span>📍 {selectedJob.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 right-6 text-neutral-400 hover:text-brand-blue font-sans text-md border border-neutral-200 rounded-full w-9 h-9 flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Brief Content */}
              <div className="space-y-6">
                <div className="border border-primary/10 rounded-2xl p-4 sm:p-5 font-sans text-xs sm:text-sm text-primary flex items-start gap-3 bg-primary-light/40">
                  <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold uppercase tracking-wider mb-1">
                      CLIENT SECURITY BOUNDS: {selectedJob.confidentialClient}
                    </span>
                    <p className="text-neutral-700 leading-relaxed font-medium">
                      All communications are strictly handled inside our secure pipeline to guarantee privacy. Candidate anonymity is fully pre-secured.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-lg font-bold text-brand-blue">Mission Profile</h4>
                  <p className="font-sans text-xs sm:text-sm text-neutral-605 text-neutral-500 font-medium leading-relaxed tracking-wide">
                    {selectedJob.brief}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h5 className="font-sans text-sm font-bold text-brand-blue border-b border-neutral-100 pb-2">
                      Core Responsibilities
                    </h5>
                    <ul className="list-disc list-inside font-sans text-xs text-neutral-550 text-neutral-500 space-y-2 font-medium tracking-wide pl-1.5 text-left">
                      {selectedJob.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-sans text-sm font-bold text-brand-blue border-b border-neutral-100 pb-2">
                      Required Mastery
                    </h5>
                    <ul className="list-disc list-inside font-sans text-xs text-neutral-550 text-neutral-500 space-y-2 font-medium tracking-wide pl-1.5 text-left">
                      {selectedJob.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h5 className="font-sans text-sm font-bold text-brand-blue">Exclusive Team Privileges</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedJob.benefits.map((benefit, i) => (
                      <div key={i} className="border border-neutral-100 p-3.5 rounded-2xl font-sans text-xs text-neutral-600 font-bold bg-neutral-50/50">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action area */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-neutral-100">
                <div className="text-left font-sans flex flex-col">
                  <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                    TARGET EMOLUMENT BRACKET
                  </span>
                  <span className="text-lg font-extrabold text-brand-blue">
                    {selectedJob.salary}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 sm:flex-none px-5 py-3 border border-neutral-200 text-neutral-600 hover:text-brand-blue rounded-full text-xs font-semibold hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    Withdraw
                  </button>
                  <button
                    onClick={() => {
                      const temp = selectedJob;
                      setSelectedJob(null);
                      onApplyForJob(temp);
                    }}
                    className="flex-1 sm:flex-none px-6 py-3 bg-primary hover:bg-brand-blue text-white font-bold rounded-full text-xs font-sans tracking-wide hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-primary/20"
                    id="modal-apply-btn"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Apply Placement</span>
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
