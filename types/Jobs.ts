// Defines the shape of a job opportunity throughout the application.
// Keeping this type in one place makes it reusable across pages, components,
// API responses, and eventually our database layer.
export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  status: "Saved" | "Applied" | "Interview" | "Rejected";
};
