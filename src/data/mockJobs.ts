import { Job, Sector } from '../types';

export const SECTORS: Sector[] = [
  {
    id: 'ai-advanced-systems',
    name: 'Neural Design & AI Ventures',
    count: 8,
    icon: 'Cpu',
    tagline: 'Orchestrating the minds shaping the next computational epoch.'
  },
  {
    id: 'luxury-experience-heritage',
    name: 'Haute Luxury & Heritage Brands',
    count: 5,
    icon: 'Crown',
    tagline: 'Curating stewards for timeless legacies and high-experience houses.'
  },
  {
    id: 'sovereign-wealth-private-capital',
    name: 'Sovereign Wealth & Private Capital',
    count: 12,
    icon: 'TrendingUp',
    tagline: 'Guiding asset-architects across global structural investments.'
  },
  {
    id: 'aerospace-next-mobility',
    name: 'Deep-Tech Mobility & Aerospace',
    count: 4,
    icon: 'Orbit',
    tagline: 'Elevating visionary engineers into outer-atmosphere infrastructure.'
  },
  {
    id: 'biotech-longevity-science',
    name: 'Bio-Computing & Longevity Labs',
    count: 6,
    icon: 'Dna',
    tagline: 'Securing minds at the critical frontier of life-extension architectures.'
  }
];

export const MOCK_JOBS: Job[] = [
  {
    id: 'aura-001',
    title: 'Chief of Intelligence Products',
    category: 'ai-advanced-systems',
    sector: 'Neural Design & AI Ventures',
    location: 'Zurich, Switzerland (Hybrid)',
    salary: 'CHF 680,000 - 820,000 + Equity',
    prestigeScore: 99,
    type: 'Executive',
    confidentialClient: 'Tier-1 Cognitive Intelligence Lab',
    brief: 'We are seeking an architectural leader to navigate the deployment of global-scale multi-modal neural matrices. This role reports directly to the Founders Council and bridges frontier theory with enterprise deployment models.',
    responsibilities: [
      'Architect the cognitive product map for three next-generation foundation models.',
      'Govern global privacy compliance matrices spanning EU and Pan-Asian jurisdictions.',
      'Sustain relationships with sovereign compute infrastructure providers and silicon trusts.',
      'Manage a select cohort of 40 elite PhD research product engineers.'
    ],
    requirements: [
      'Prior tenure directing tier-one neural models with millions of inference requests per minute.',
      'Doctoral-level publication pedigree in machine behavior or multi-tier neural structures.',
      'Flawless operational protocol handling highly sensitive algorithmic source code.'
    ],
    benefits: [
      'Unrestricted allocation of Tier-0 compute networks for personal research budgets.',
      'Bespoke executive medical concierge and private wellness coaching.',
      'Multi-million franc compound yield compensation program.'
    ],
    postedAt: '2 hours ago'
  },
  {
    id: 'aura-002',
    title: 'Managing Director, Artisanal Heritage Presence',
    category: 'luxury-experience-heritage',
    sector: 'Haute Luxury & Heritage Brands',
    location: 'Paris, France (Bespoke Presence)',
    salary: '€520,000 - 640,000 + Prestige Incentives',
    prestigeScore: 98,
    type: 'Partner',
    confidentialClient: 'Preeminent European Haute Couture Conglomerate',
    brief: 'A multi-century absolute luxury house requires a master-steward to curate digital-physical fusion experiences. This role dictates artistic-strategic synergy across European, Asian, and Americas atelier grids.',
    responsibilities: [
      'Define physical-presence architecture for select client sanctuaries in major world capitals.',
      'Moderate partnerships with globally recognized visionary artists and digital creators.',
      'Preserve deep heritage preservation archives while implementing Web3-secured authenticity tags.',
      'Direct strategic acquisitions of specialized multi-generation craftsmanship ateliers.'
    ],
    requirements: [
      'Minimum standard of 15 years within ultra-tier luxury brand strategy or fine-art curation.',
      'Strong dual-mindset: respecting ancient manual traditions while leveraging premium digital clienteling.',
      'Bilingual fluency across French, Italian, and English professional registers.'
    ],
    benefits: [
      'Unlimited seasonal luxury wardrobe allocation from exclusive capsule files.',
      'Annual private lodge retreat access in Courchevel.',
      'Dedicated global lifestyle liaison advisor.'
    ],
    postedAt: '1 day ago'
  },
  {
    id: 'aura-003',
    title: 'General Partner, Relational Wealth & Future Assets',
    category: 'sovereign-wealth-private-capital',
    sector: 'Sovereign Wealth & Private Capital',
    location: 'Singapore / Dubai (Dual Mandate)',
    salary: '$800,000 - 1,100,000 + Carrying Interest',
    prestigeScore: 99,
    type: 'Executive',
    confidentialClient: 'Multi-Family Sovereign Trust Consortium',
    brief: 'Seeking a dynamic strategic lead to direct global digital resource holdings, orbital logistics infrastructure, and post-scarcity wealth asset matrices for ultra-high-net-worth sovereign stakeholders.',
    responsibilities: [
      'Administer a private allocation portfolio valued at over $2.4B USD.',
      'Deliver strategic capital syndication vectors for tier-1 deep-space payload systems.',
      'Provide regular confidential statecraft reports to diplomatic and crown family offices.',
      'Review and originate joint wealth vehicles crossing major global technology epicenters.'
    ],
    requirements: [
      'Extensive experience managing massive capital allocations with positive alpha over multiple system-cycles.',
      'Strong relationships with global financial institutions and regulatory commissions.',
      'Unshakeable alignment to extreme confidentiality ethics.'
    ],
    benefits: [
      'Bespoke diplomatic-grade security protocols for worldwide travel.',
      'Custom investment syndication pool access with high carried interest returns.',
      'Private air-mile allowance for business-grade charter operations.'
    ],
    postedAt: '3 days ago'
  },
  {
    id: 'aura-004',
    title: 'Principal Systems General, High-Orbit Defense Integrity',
    category: 'aerospace-next-mobility',
    sector: 'Deep-Tech Mobility & Aerospace',
    location: 'Munich, Germany (On-Site Secured Chamber)',
    salary: '€380,000 - 460,000 + Security Bonus',
    prestigeScore: 97,
    type: 'Advisory',
    confidentialClient: 'Next-Generation Continental Orbital Network Provider',
    brief: 'We are seeking an executive engineer to champion safety, integrity, and command-response infrastructure across our fleet of critical low-orbit observation satellites.',
    responsibilities: [
      'Oversee safe-handling code implementations in high-altitude automated navigation grids.',
      'Synthesize security mitigation exercises with European defence agencies.',
      'Redesign flight-control systems utilizing highly localized real-time machine intelligence.'
    ],
    requirements: [
      'Secured clean security clearance dossier with NATO or EU affiliated agency.',
      'Mastery of micro-second deterministic communication architectures (Rust/C level).',
      'At least 10 launches managed at top aerospace entities.'
    ],
    benefits: [
      'Dedicated state-of-the-art secure residential chamber within proximity of HQ Munich.',
      'Comprehensive full-family luxury lifestyle defense program.',
      'Tailored fitness and bio-tuning regimes supervised by high-altitude medical officers.'
    ],
    postedAt: '5 days ago'
  },
  {
    id: 'aura-005',
    title: 'Executive Director, Longevity Bio-Synthesis',
    category: 'biotech-longevity-science',
    sector: 'Bio-Computing & Longevity Labs',
    location: 'Basel, Switzerland (Secured Lab Suite)',
    salary: 'CHF 420,000 - 550,000 + Milestone Bonuses',
    prestigeScore: 96,
    type: 'Executive',
    confidentialClient: 'Bespoke Gene Therapeutics & Rejuvenation Consortium',
    brief: 'Leading the bridge between algorithmic biology and cellular rejuvenation services. This strategist will navigate multi-center clinical diagnostics to restore metabolic vitality standards for select elite clients.',
    responsibilities: [
      'Translate deep molecular research patterns into customized metabolic treatment guidelines.',
      'Coordinate between academic longevity hubs in California and clinical labs in Switzerland.',
      'Sustain rigorous regulatory compliance paths across Switzerland and select world health clinics.'
    ],
    requirements: [
      'MD or PhD in computational biochemistry, genetic medicine, or metabolic health interfaces.',
      'Proven leadership in biotech venture structures resulting in highly successful phase trials.',
      'Exemplary discretion when communicating with high-level biological donors.'
    ],
    benefits: [
      'Direct, supervised access to next-gen bio-tuning cellular therapeutics.',
      'Comprehensive private research infrastructure for self-directed clinical discovery.',
      'Private estate membership for personal relaxation in the Swiss Alps.'
    ],
    postedAt: '1 week ago'
  }
];
