export type Cadet = {
  id: string;

  // Basic Info
  name: string;
  parentName: string;

  // Contact
  phone: string;
  parentPhone: string;

  // Personal
  bloodGroup: string;

  // Sensitive (will be masked in UI)
  aadhaar: string;
  bankAccount: string;

  // Metadata
  rank?: string;
  joinedAt: string;

  performance: PerformanceEntry[];
};

export interface PerformanceEntry {
  month: string;     // ✅ THIS MUST EXIST
  drill: number;
  physical: number;
  theory: number;
  social: number;
}