export type Activity = {
  id: string;

  title: string;
  type: "Parade" | "Camp" | "Event";

  date: string; // ISO format
  location?: string;

  cadetIds: string[]; // who attended

  createdAt: string;
};