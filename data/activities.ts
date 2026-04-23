import { Activity } from "@/types/activity";

export const activities: Activity[] = [
  {
    id: "1",
    title: "Morning Parade",
    type: "Parade",
    date: "2025-01-10",
    location: "College Ground",
    cadetIds: ["1", "2"],
    createdAt: "2025-01-09",
  },
  {
    id: "2",
    title: "Republic Day Camp",
    type: "Camp",
    date: "2025-01-26",
    location: "Delhi",
    cadetIds: ["2"],
    createdAt: "2025-01-20",
  },
];