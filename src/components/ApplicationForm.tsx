import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { Job, Application } from '../types';
import { ShieldCheck, Eye, Upload, CheckCircle, FileText, ArrowRight, ArrowLeft, RefreshCw, Sparkles, Lock, FolderHeart } from 'lucide-react';

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
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [computedMatchIndex, setComputedMatchIndex] = useState(98.4);
  const [success, setSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const processingPhases = [
    'Opening secure talent handshake channels...',
    'Analyzing candidate technological competency markers...',
    'Performing real-time structural asset alignment checks...',
    'Calculating matching coefficient indices...',
    'Finalizing private portal placement application secure entry...'
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
    
    const interval = setInterval(() => {
      setProcessingStep(prev => {
        if (prev < processingPhases.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            const randIdx = parseFloat((96.5 + Math.random() * 3.3).toFixed(2));
            setComputedMatchIndex(randIdx);
            setIsProcessing(false);
            setSuccess(true);
          }, 600);
          return prev;
        }
      });
    }, 900);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-brand-blue/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      id="application-overlay-backdrop"
    >
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto text-left shadow-2xl border border-neutral-100"
        id="application-modal"
      >
        
        {/* Modal Close Button */}
        {!isProcessing && !success && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-brand-blue border border-neutral-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer text-xs"
            aria-label="Close form"
          >
            ✕
          </button>
        )}

        {/* Processing State Animated Glass Loading Overlay */}
        {isProcessing && (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-8 animate-pulse">
            <div className="relative">
              <RefreshCw className="w-16 h-16 text-primary animate-spin stroke-[2]" />
              <Lock className="w-6 h-6 text-brand-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="space-y-3 max-w-md">
              <h4 className="font-sans text-2xl text-brand-blue font-extrabold">Analyzing Match Potential</h4>
              <p className="font-mono text-[10px] text-primary tracking-wider uppercase font-bold">
                ALIGNING CANDIDATE PROFILE MATRIX
              </p>
              
              <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden mt-6">
                <div 
                  className="h-full bg-primary transition-all duration-700 rounded-full"
                  style={{ width: `${((processingStep + 1) / processingPhases.length) * 100}%` }}
                />
              </div>

              <p className="font-sans text-xs text-neutral-500 font-semibold italic min-h-[40px] pt-2">
                "{processingPhases[processingStep]}"
              </p>
            </div>
          </div>
        )}

        {/* Victory Success Screen */}
        {success && (
          <div className="py-6 text-center space-y-6 animate-fade-in" id="application-success-view">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 border border-emerald-250 relative">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
              <div className="absolute -inset-2 rounded-full border border-emerald-400/20 animate-ping" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase text-emerald-500 tracking-wider font-extrabold block">
                Application Successfully Generated
              </span>
              <h3 className="font-sans text-3xl text-brand-blue font-extrabold leading-tight">
                Secure Handshake Completed!
              </h3>
              <p className="font-sans text-neutral-500 text-xs sm:text-sm font-medium max-w-md mx-auto leading-relaxed">
                Your credentials have been encrypted and queued inside our partner review portal. If an alignment is ratified, our managing council will contact you within 24 hours.
              </p>
            </div>

            {/* Match Badge Widget */}
            <div className="bg-neutral-50 border border-neutral-100 p-6 rounded-2xl max-w-sm mx-auto space-y-2">
              <div className="flex items-center justify-between font-mono text-[9px] text-neutral-400 font-bold">
                <span>PORTAL FIT COEFFICIENT</span>
                <span className="text-primary font-bold">CALCULATED</span>
              </div>
              <div className="font-sans text-3.5xl text-primary font-extrabold">
                {computedMatchIndex}% Purity Match
              </div>
              <p className="font-sans text-[10px] text-neutral-400 font-medium leading-relaxed">
                Applicant meets all technical competencies and cultural parameters. Match reference:
                <span className="block font-mono text-brand-blue text-xs mt-1 font-bold">QUIETY-TX-849{-Math.floor(Math.random() * 10000)}Y</span>
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-brand-blue hover:bg-primary text-white transition-all rounded-full text-xs font-sans font-bold cursor-pointer"
              >
                Return to Directory
              </button>
            </div>
          </div>
        )}

        {/* Regular Interactive Step Flow */}
        {!isProcessing && !success && (
          <div className="space-y-6">
            
            {/* Form Title & Stepper Header */}
            <div className="border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-1.5 text-primary font-mono text-[10px] uppercase tracking-wider font-bold">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Confidential Application Workflow</span>
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl text-brand-blue font-extrabold mt-1">
                {selectedJob ? `Application: ${selectedJob.title}` : 'Bespoke Executive Assessment'}
              </h3>

              {/* Step indicator */}
              <div className="flex justify-between items-center mt-6 text-[10px] font-mono text-neutral-400 font-bold">
                <span>Phase {step} of 3</span>
                <div className="flex gap-1.5">
                  <span className={`w-8 h-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-neutral-200'}`} />
                  <span className={`w-8 h-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-neutral-200'}`} />
                  <span className={`w-8 h-1 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-neutral-200'}`} />
                </div>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              
              {/* STEP 1: Securing Identity */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-in" id="step-identity">
                  <div className="text-left font-sans text-base font-bold text-brand-blue mb-1">
                    Personal Sizing Details
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label htmlFor="fullName" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Dr. Catherine Vance"
                        className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl p-3 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1 text-left">
                      <label htmlFor="email" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                        Communications Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        required
                        onChange={handleInputChange}
                        placeholder="e.g. cvance@protonmail.com"
                        className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl p-3 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="linkedin" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      LinkedIn Profiling Link or GitHub Citation
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      id="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="e.g. linkedin.com/in/executiveprofile"
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl p-3 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Compensation Spec & Bilateral NDA */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-in" id="step-compensation">
                  <div className="text-left font-sans text-base font-bold text-brand-blue mb-1">
                    Compensation Covenants and Vectors
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="expectedCompensation" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Target Compensation Target Tier
                    </label>
                    <select
                      name="expectedCompensation"
                      id="expectedCompensation"
                      value={formData.expectedCompensation}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl p-3 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors font-semibold"
                    >
                      <option value="$150,000 - $250,000">$150,000 - $250,000 (Lead Engineer / PM)</option>
                      <option value="$250,000 - $400,000">$250,000 - $400,000 (Principal / Director)</option>
                      <option value="$400,000 - $1,000,000">$400,000 - $1M+ (C-Level Elite Executive)</option>
                    </select>
                  </div>

                  {/* Covenants Clause Box */}
                  <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-4 space-y-2 font-sans text-xs text-neutral-600 font-medium text-left leading-relaxed">
                    <div className="flex items-center gap-1.5 text-primary font-mono text-[9px] uppercase tracking-wider font-bold">
                      <Lock className="w-4 h-4" />
                      <span>Security Covenant and Secrecy Consent</span>
                    </div>
                    <p>
                      Candidate acknowledges that all corporate disclosures, team frameworks, specific tech architectures, and compensatory benefits are trade secrets covered by deep mutual non-disclosure criteria. We safeguard candidate credentials securely to prevent unauthorized headhunter indexing.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <input
                        type="checkbox"
                        checked={formData.ndaAccepted}
                        name="ndaAccepted"
                        id="ndaAccepted"
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 rounded border-neutral-300 text-primary bg-white focus:ring-primary accent-primary cursor-pointer"
                      />
                      <label htmlFor="ndaAccepted" className="font-sans text-[10px] text-brand-blue uppercase tracking-wider font-bold cursor-pointer">
                        I ratify and accept the mutual security covenants.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Professional Sync Abstract & Premium Drag and Drop Dossier Uploader */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-in" id="step-dossier">
                  <div className="text-left font-sans text-base font-bold text-brand-blue mb-1">
                    Dossier Synchronizer
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="resumeSummary" className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Core Highlights (Brief Synthesis)
                    </label>
                    <textarea
                      name="resumeSummary"
                      id="resumeSummary"
                      value={formData.resumeSummary}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Summarize your key venture accomplishments, core frameworks built, or budget boundaries managed..."
                      className="w-full bg-white border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl p-3 text-xs sm:text-sm text-brand-blue focus:outline-none transition-colors font-sans resize-none"
                    />
                  </div>

                  {/* File Upload drag-and-drop / select fallback */}
                  <div className="space-y-1 text-left" id="dossier-uploader">
                    <span className="block text-[10px] font-sans text-neutral-500 uppercase tracking-wider font-bold">
                      Confidential Dossier / resume File
                    </span>

                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileSelect}
                      className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-350 ${
                        isDragging 
                          ? 'border-primary bg-primary-light/50 scale-[1.01]' 
                          : formData.confidentialFileUploaded 
                            ? 'border-emerald-500 bg-emerald-50/50' 
                            : 'border-neutral-200 hover:border-primary/40 bg-white'
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
                        <div className="space-y-1 animate-fade-in">
                          <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                          <div className="space-y-1">
                            <span className="block font-sans text-xs text-brand-blue font-bold max-w-[280px] truncate mx-auto">
                              {uploadedFileName || 'CONFIDENTIAL_CV.pdf'}
                            </span>
                            <span className="block font-mono text-[9px] text-emerald-500 uppercase font-bold">
                              Dossier Verified & Ready
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="w-8 h-8 text-neutral-400 mx-auto" />
                          <div className="space-y-1">
                            <span className="block font-sans text-xs text-neutral-600 font-medium">
                              Drag and drop dossier file here, or <span className="text-primary hover:underline font-bold">browse folders</span>
                            </span>
                            <span className="block font-mono text-[8px] text-neutral-400 uppercase font-bold">
                              PDF or Word Document accepted
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="flex items-center justify-between pt-5 border-t border-neutral-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(prev => prev - 1)}
                    className="px-4 py-2 border border-neutral-200 text-neutral-600 hover:text-brand-blue rounded-full text-xs font-sans font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 border border-neutral-200 text-neutral-650 text-neutral-600 hover:text-neutral-900 rounded-full text-xs font-sans font-bold transition-colors cursor-pointer"
                  >
                    Abort Sizing
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (step === 1 && (!formData.fullName || !formData.email)) {
                        alert('Required attributes (Full Name, Contact Email) are missing.');
                        return;
                      }
                      setStep(prev => prev + 1);
                    }}
                    className="px-5 py-2.5 bg-brand-blue hover:bg-primary text-white rounded-full text-xs font-sans font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Proceed Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={startSecurityCalibration}
                    disabled={!formData.ndaAccepted}
                    className={`px-6 py-2.5 bg-primary text-white font-bold rounded-full text-xs font-sans tracking-wide transition-all cursor-pointer flex items-center gap-2 shadow-md shadow-primary/20 ${
                      !formData.ndaAccepted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-blue'
                    }`}
                    id="submit-auth-app"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Inquire Match Alignment</span>
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
