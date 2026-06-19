import { Crown, ShieldAlert, FileWarning, HelpCircle } from 'lucide-react';

export default function Footer() {
  const offices = [
    { city: 'Zürich', street: 'Bahnhofstrasse 28', zip: '8001 Zürich, SG', tel: '+41 44 212 9000' },
    { city: 'Paris', street: '14 Rue du Faubourg', zip: '75008 Paris, FR', tel: '+33 1 42 68 8000' },
    { city: 'Singapore', street: '6 Marina Boulevard', zip: '018985 Singapore, SG', tel: '+65 6832 9000' },
    { city: 'Geneva', street: '18 Rue du Rhône', zip: '1204 Geneva, CH', tel: '+41 22 312 9000' }
  ];

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 text-left relative overflow-hidden" id="trust">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start" id="footer-layout">
          {/* Logo brand info panel */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-black/50">
                <Crown className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-serif text-xl tracking-[0.2em] text-white">
                  AURA
                </span>
                <span className="block text-[8px] tracking-[0.35em] uppercase text-primary font-mono -mt-1 font-semibold">
                  Elite Search
                </span>
              </div>
            </div>

            <p className="font-sans text-neutral-400 text-xs font-light leading-relaxed tracking-wide">
              AURA is a worldwide boutique advisory trust specialized in the alignment of sovereign board talent and leading computational intelligence groups. We operate at 100% verified physical and legal secrecy benchmarks.
            </p>

            <div className="flex items-center gap-3 font-mono text-[9px] text-neutral-500 uppercase tracking-widest pt-2">
              <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
              <span>Protected under Swiss Secrecy Code</span>
            </div>
          </div>

          {/* Sactuary locations list */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#aa7c11] font-bold">
              Global Sanctuaries
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {offices.map((office) => (
                <div key={office.city} className="space-y-1 font-sans text-xs">
                  <span className="block font-serif text-sm font-semibold text-white">
                    {office.city} Office
                  </span>
                  <span className="block text-neutral-400 font-light">{office.street}</span>
                  <span className="block text-neutral-500 font-mono text-[10px]">{office.zip}</span>
                  <span className="block text-primary/80 font-mono text-[10px] pt-1">{office.tel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick legal covenants links */}
          <div className="lg:col-span-3 space-y-4 font-sans text-xs">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#aa7c11] font-bold">
              Legal Covenants
            </h4>
            <ul className="space-y-2 text-neutral-400 font-light">
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                <FileWarning className="w-3.5 h-3.5 text-neutral-600" />
                <span>NDA & Anonymity Clauses</span>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-neutral-600" />
                <span>Sovereign Trust Guidelines</span>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                <span>Switzerland Secrecy Act Compliance</span>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                <span>SEC/FINMA Sovereign Reporting rules</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} AURA EXECUTIVE TRUST INC. ALL CONFIDENTIAL COVENANTS RESERVED WORLDWIDE.
          </div>
          <div className="flex gap-4 uppercase tracking-widest text-neutral-600">
            <span>VERIFIED SECURE CONNECTION</span>
            <span className="text-emerald-500">•</span>
            <span>SYSTEM VERSION v4.18</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
