export type StudyMaterial = {
  id: string;
  title: string;
  category: "B Certificate" | "C Certificate" | "Camps";
  type: "PDF" | "PPT";
  uploadedAt: string;
  url: string;
};