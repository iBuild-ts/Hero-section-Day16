export interface Job {
  id: string;
  title: string;
  category: string;
  sector: string;
  location: string;
  salary: string;
  prestigeScore: number; // e.g. 98% Match/Purity
  type: 'Executive' | 'Advisory' | 'Fellowship' | 'Partner';
  brief: string;
  responsibilities: string[];
  requirements: string[];
  confidentialClient: string; // E.g. "Decentralized AI Unicorn", "Tier-1 Swiss Wealth House"
  benefits: string[];
  postedAt: string;
}

export interface Sector {
  id: string;
  name: string;
  count: number;
  icon: string;
  tagline: string;
}

export interface Application {
  fullName: string;
  email: string;
  linkedin: string;
  sector: string;
  resumeSummary: string;
  expectedCompensation: string;
  confidentialFileUploaded: boolean;
  ndaAccepted: boolean;
}
