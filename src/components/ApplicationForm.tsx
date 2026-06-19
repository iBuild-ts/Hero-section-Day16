import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Job, Application } from '../types';
import { ShieldCheck, Eye, Upload, CheckCircle, FileText, ArrowRight, ArrowLeft, RefreshCw, Sparkles, Lock } from 'lucide-react';

interface ApplicationFormProps {
  selectedJob: Job | null;
  onClose: () => void;
}

export default function ApplicationForm({ selectedJob, onClose }: ApplicationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Application>({
    fullName: '',
    email: '',
    linkedin: '',
    sector: selectedJob ? selectedJob.sector : '',
    resumeSummary: '',
    expectedCompensation: '$400,000 - $600,000',
    confidentialFileUploaded: false,
    ndaAccepted: false
  });

  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  
  // Security processing state simulation
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [computedMatchIndex, setComputedMatchIndex] = useState(98.4);
  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const processingPhases = [
    'Establishing military-grade TLS tunnel with Munich & Zürich nodes...',
    'Performing biometric name verification & anti-sleaze checking...',
    'Encrypting candidate portfolio via decentralized AES-256-GCM cipher Suite...',
    'Calculating prestige alignment matching coefficients...',
    'Securing private transaction ledger entry...'
  ];

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setUploadedFileName(file.name);
      setFormData(prev => ({ ...prev, confidentialFileUploaded: true }));
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploadedFileName(file.name);
      setFormData(prev => ({ ...prev, confidentialFileUploaded: true }));
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const startSecurityCalibration = () => {
    if (!formData.ndaAccepted) {
      alert('You must accept the bilateral Non-Disclosure Agreement covenants to proceed.');
      return;
    }
    
    setIsProcessing(true);
    setProcessingStep(0);
    
    // Staggered loading simulation to add extreme visual suspense
    const interval = setInterval(() => {
      setProcessingStep(prev => {
        if (prev < processingPhases.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            // Compute a random top tier match index
            const randIdx = parseFloat((97 + Math.random() * 2.8).toFixed(2));
            setComputedMatchIndex(randIdx);
            setIsProcessing(false);
            setSuccess(true);
          }, 600);
          return prev;
        }
      });
    }, 1000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      id="application-overlay-backdrop"
    >
      <div 
        className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-2xl p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto text-left"
        id="application-modal"
      >
        
        {/* Modal Close Button */}
        {!isProcessing && !success && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white border border-white/5 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close form"
          >
            ✕
          </button>
        )}

        {/* Processing State Animated Glass Loading Overaly */}
        {isProcessing && (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-8 animate-pulse">
            <div className="relative">
              <RefreshCw className="w-16 h-16 text-primary animate-spin" />
              <Lock className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="space-y-3 max-w-md">
              <h4 className="font-serif text-2xl text-white font-medium">Securing Executive Connection</h4>
              <p className="font-mono text-[10px] text-primary tracking-wider uppercase">
                AURA SECURITY PROTOCOL IN PROGRESS
              </p>
              
              <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden mt-6">
                <div 
                  className="h-full bg-gold-gradient transition-all duration-1000"
                  style={{ width: `${((processingStep + 1) / processingPhases.length) * 100}%` }}
                />
              </div>

              <p className="font-sans text-xs text-neutral-400 font-light italic min-h-[40px] pt-2">
                "{processingPhases[processingStep]}"
              </p>
            </div>
          </div>
        )}

        {/* Victory Success Premium Screen */}
        {success && (
          <div className="py-8 text-center space-y-8 animate-fade-in" id="application-success-view">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 relative">
              <CheckCircle className="w-10 h-10 text-primary" />
              <div className="absolute -inset-2 rounded-full border border-primary/10 animate-ping" />
            </div>

            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase text-emerald-400 tracking-[0.2em] font-bold">
                Dossier Enrolled & Authenticated Successfully
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                Secure Transmission Completed
              </h3>
              <p className="font-sans text-neutral-400 text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
                Your credentials have been encrypted and published to our discrete Zurich advisory network. If an alignment is ratified, our premium partner council will contact you directly within 48 hours.
              </p>
            </div>

            {/* Prestige Match Badge Widget */}
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl max-w-sm mx-auto space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400">
                <span>PRESTIGE MATCH COEFFICIENT</span>
                <span className="text-primary font-bold">CALCULATED</span>
              </div>
              <div className="font-serif text-4xl text-gold-gradient font-bold">
                {computedMatchIndex}% Purity
              </div>
              <p className="font-sans text-[10px] text-neutral-500 font-light">
                Candidate meets rigorous integrity requirements. Authorization verified under transaction code:
                <span className="block font-mono text-primary text-xs mt-1 font-bold">AURA-TX-849{-Math.floor(Math.random() * 10000)}X</span>
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-white/5 border border-white/10 hover:border-primary text-white hover:text-primary transition-all rounded-xl text-xs font-mono uppercase tracking-widest cursor-pointer"
              >
                Close Secure Vault Interface
              </button>
            </div>
          </div>
        )}

        {/* Regular Interactive Step Flow */}
        {!isProcessing && !success && (
          <div className="space-y-6">
            
            {/* Form Title & Stepper Header */}
            <div className="border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 text-primary font-mono text-[9px] uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span>CONFIDENTIAL APPLICATION PROCEDURE</span>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal mt-1">
                {selectedJob ? `Candidate Alignment: ${selectedJob.title}` : 'Bespoke Executive Assessment'}
              </h3>

              {/* Step indicator */}
              <div className="flex justify-between items-center mt-6 text-[10px] font-mono text-neutral-500">
                <span>Step {step} of 3</span>
                <div className="flex gap-1.5">
                  <span className={`w-8 h-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-neutral-800'}`} />
                  <span className={`w-8 h-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-neutral-800'}`} />
                  <span className={`w-8 h-1 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-neutral-800'}`} />
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* STEP 1: Securing Identity */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in" id="step-identity">
                  <div className="text-left font-serif text-lg text-white font-medium mb-3">
                    Personal Pedigree Details
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="fullName" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                        Full Name (Confidential Status)
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Dr. Catherine Vance"
                        className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label htmlFor="email" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                        Confidential Communications Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        required
                        onChange={handleInputChange}
                        placeholder="e.g. cvance@protonmail.com"
                        className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="linkedin" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      LinkedIn, Portfolio link, or Vetted Registry Citation
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="e.g. linkedin.com/in/executiveprofile"
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Compensation Spec & Bilateral NDA */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in" id="step-compensation">
                  <div className="text-left font-serif text-lg text-white font-medium mb-3">
                    Covenants and Compensation Matrices
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="expectedCompensation" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      Desired Base Annual Compensation Sector
                    </label>
                    <select
                      name="expectedCompensation"
                      id="expectedCompensation"
                      value={formData.expectedCompensation}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors"
                    >
                      <option value="$400,000 - $600,000" className="bg-[#0a0a0a] text-white">$400,000 - $600,000 (Base Executive)</option>
                      <option value="$600,000 - $1,000,000" className="bg-[#0a0a0a] text-white">$600,000 - $1,000,000 (Sovereign Level)</option>
                      <option value="$1,000,000+" className="bg-[#0a0a0a] text-white">$1,000,000+ (Advisory & Equity Carry)</option>
                    </select>
                  </div>

                  {/* Covenants Clause Box */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 space-y-3 font-sans text-xs text-neutral-300 font-light text-left leading-relaxed">
                    <div className="flex items-center gap-2 text-primary font-mono text-[9px] uppercase tracking-wider font-semibold">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Bilateral Non-Disclosure and Anonymity Covenant</span>
                    </div>
                    <p>
                      Candidate acknowledges that all details and identifiers regarding the client company, product matrices, systems capabilities, and remuneration patterns are corporate trade secrets securely covered by absolute Non-disclosure structures. In turn, AURA guarantees physical and digital protection of candidate identifiers from any public leaks, press citations, or recruiter indexes.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <input
                        type="checkbox"
                        checked={formData.ndaAccepted}
                        name="ndaAccepted"
                        id="ndaAccepted"
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 rounded border-neutral-800 text-primary bg-black focus:ring-primary accent-primary cursor-pointer"
                      />
                      <label htmlFor="ndaAccepted" className="font-mono text-[10px] text-white uppercase tracking-wider font-semibold cursor-pointer">
                        I ratify and accept the bilateral NDA covenants.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Professional Sync Abstract & Premium Drag and Drop Dossier Uploader */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-in" id="step-dossier">
                  <div className="text-left font-serif text-lg text-white font-medium mb-3">
                    Discreet Dossier Synchronizer
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="resumeSummary" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      Career Synthesis / Board Highlights (Brief Summary)
                    </label>
                    <textarea
                      name="resumeSummary"
                      id="resumeSummary"
                      value={formData.resumeSummary}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Briefly synthesize key venture exits, managed compute budgets, or fashion brand stewardship milestones..."
                      className="w-full bg-black/40 border border-white/10 focus:border-primary rounded-xl p-3 text-xs text-white focus:outline-none transition-colors font-sans leading-relaxed"
                    />
                  </div>

                  {/* Flexible Drag & Drop candidate portfolio uploader with manual fallback */}
                  <div className="space-y-2 text-left" id="dossier-uploader">
                    <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      Full Confidential Dossier / Curriculum Vitae
                    </span>

                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileSelect}
                      className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
                        isDragging 
                          ? 'border-primary bg-primary/5 scale-[1.01]' 
                          : formData.confidentialFileUploaded 
                            ? 'border-emerald-500/50 bg-emerald-500/5' 
                            : 'border-white/10 hover:border-primary/40 bg-black/40'
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        accept=".pdf,.docx,.doc"
                        className="hidden"
                      />

                      {formData.confidentialFileUploaded ? (
                        <div className="space-y-2 animate-fade-in">
                          <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                          <div className="space-y-1">
                            <span className="block font-mono text-xs text-white font-bold max-w-[280px] truncate mx-auto">
                              {uploadedFileName || 'CONFIDENTIAL_DOSSIER.aes256'}
                            </span>
                            <span className="block font-mono text-[9px] text-emerald-400 uppercase font-semibold">
                              Encrypted, Verified & Ready
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Upload className="w-10 h-10 text-neutral-500 mx-auto group-hover:text-primary transition-colors" />
                          <div className="space-y-1">
                            <span className="block font-sans text-xs text-white">
                              Drag and drop your secure dossier, or <span className="text-primary hover:underline font-medium">browse local files</span>
                            </span>
                            <span className="block font-mono text-[9px] text-neutral-500 uppercase">
                              PREFER SECURE PDF OR DOCX • AES256 PROTECTED
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Action Area */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(prev => prev - 1)}
                    className="px-5 py-3 border border-white/10 text-neutral-400 hover:text-white rounded-xl text-xs font-mono uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Phase</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 border border-white/10 text-neutral-400 hover:text-white rounded-xl text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Abort Alignment
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === 1 && (!formData.fullName || !formData.email)) {
                        alert('Required personal pedigree fields (Full Name, Secure Email) are missing.');
                        return;
                      }
                      setStep(prev => prev + 1);
                    }}
                    className="px-6 py-3 bg-neutral-900 border border-white/10 hover:border-primary text-white rounded-xl text-xs font-mono uppercase tracking-widest hover:text-primary transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={startSecurityCalibration}
                    disabled={!formData.ndaAccepted}
                    className={`px-8 py-3 bg-gold-gradient text-black font-semibold rounded-xl text-xs font-mono uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2 shadow-[0_4px_25px_rgba(197,160,89,0.2)] ${
                      !formData.ndaAccepted ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110 active:scale-95'
                    }`}
                    id="submit-auth-app"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Inquire Placement Match</span>
                  </button>
                )}
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
