import { Crown, ShieldAlert, FileWarning, HelpCircle, Search, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const offices = [
    { city: 'Zurich Office', street: 'Bahnhofstrasse 28', zip: '8001 Zurich, CH', tel: '+41 44 212 9000' },
    { city: 'Singapore Office', street: '6 Marina Boulevard', zip: '018985 Singapore, SG', tel: '+65 6832 9000' },
    { city: 'Silicon Valley Office', street: '530 University Avenue', zip: 'Palo Alto, CA 94301', tel: '+1 650 324 8000' }
  ];

  return (
    <footer className="bg-[#0F172A] pt-20 pb-10 text-left relative overflow-hidden border-t border-neutral-800" id="trust">
      {/* Decorative clean radial bloom */}
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-tr from-primary-dark/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start" id="footer-layout">
          {/* Logo brand info panel */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                <Search className="w-4 h-4 stroke-[3]" />
              </div>
              <span className="font-sans font-extrabold text-2xl tracking-tight text-white">
                Quiety<span className="text-primary font-extrabold">.</span>
              </span>
            </div>

            <p className="font-sans text-neutral-400 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
              Quiety is a high-fidelity recruitment agency and specialized placement group focusing on bridging premium operators with rapid-scaling tech environments. Transparent, smooth, and absolute.
            </p>

            <div className="flex items-center gap-2.5 font-mono text-[9px] text-neutral-400 uppercase tracking-wider pt-2 font-bold">
              <ShieldAlert className="w-4.5 h-4.5 text-primary shrink-0" />
              <span>GDPR compliant • encrypted candidate data ledger</span>
            </div>
          </div>

          {/* Locations list */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-primary font-extrabold">
              Global Sourcing Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offices.map((office) => (
                <div key={office.city} className="space-y-1 font-sans text-xs">
                  <span className="block font-sans text-xs font-extrabold text-white">
                    {office.city}
                  </span>
                  <span className="block text-neutral-400 font-medium">{office.street}</span>
                  <span className="block text-neutral-500 font-mono text-[9px]">{office.zip}</span>
                  <span className="block text-primary font-mono text-[9px] pt-1 font-bold">{office.tel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick legal covenants links */}
          <div className="lg:col-span-3 space-y-4 font-sans text-xs">
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-primary font-extrabold">
              Legal Covenants
            </h4>
            <ul className="space-y-2.5 text-neutral-400 font-semibold text-xs">
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                <FileWarning className="w-3.5 h-3.5 text-neutral-600" />
                <span>NDA & Secrecy Clauses</span>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-neutral-600" />
                <span>Candidate Protection Rules</span>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                <span>Terms of Engagement Contract</span>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                <span>Switzerland Privacy Guidelines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-500 font-bold">
          <div className="flex items-center gap-1">
            © {new Date().getFullYear()} Quiety Sourcing International Inc. All Rights Reserved.
          </div>
          <div className="flex gap-4 uppercase tracking-wider text-neutral-500">
            <span>SECURE handshake</span>
            <span className="text-emerald-500">•</span>
            <span>SYSTEM v5.12</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
