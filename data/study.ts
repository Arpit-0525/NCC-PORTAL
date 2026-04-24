import { StudyMaterial } from "@/types/study";

export const studyMaterials: StudyMaterial[] = [
  {
    id: "1",
    title: "Drill Basics",
    category: "B Certificate",
    type: "PDF",
    uploadedAt: "2025-01-10",
    url: "/files/drill.pdf", // place in /public/files/
  },
  {
    id: "2",
    title: "Weapon Training",
    category: "C Certificate",
    type: "PPT",
    uploadedAt: "2025-01-12",
    url: "/files/weapon.pptx",
  },
];