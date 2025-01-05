export interface AcademicYear {
  id: string;
  label: string;
  desc?: string;
  created_at: Date;
  updated_at: Date;
}

export type AcademicYears = Array<AcademicYear>;
