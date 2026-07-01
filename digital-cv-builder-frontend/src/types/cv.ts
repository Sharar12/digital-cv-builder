// src/types/cv.ts

export interface CVData {
  fullName: string;
  role: string;
  skills: string[];
}

// Default empty state to prevent null errors
export const initialCVData: CVData = {
  fullName: "",
  role: "",
  skills: [],
};