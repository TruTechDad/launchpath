import type { Job } from "@/types/Jobs";

// Temporary sample data used while building the frontend.
// Later, these jobs will come from our backend API and PostgreSQL database.
export const jobs: Job[] = [
  {
    id: 1,
    title: "Junior Full Stack Developer",
    company: "TechNova",
    location: "Charlotte, NC",
    matchScore: 91,
    status: "Saved",
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Carolina Digital",
    location: "Charlotte, NC",
    matchScore: 87,
    status: "Applied",
  },
  {
    id: 3,
    title: "QA Engineer",
    company: "BrightStack",
    location: "Remote",
    matchScore: 82,
    status: "Interview",
  },
];
