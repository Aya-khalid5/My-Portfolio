export interface Certification {
  name: string;
  provider: string;
  issueDate: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    name: "Advanced Data Analytics — Summer Training",
    provider: "National Telecommunication Institute (NTI) / ITIDA",
    issueDate: "August – September 2026",
    image: "/certificates/nti-advanced-data-analytics.png",
  },
  {
    name: "Machine Learning & AI Training Program (120 Hours)",
    provider: "CREATIVA Innovation Hub, Mansoura",
    issueDate: "",
    image: "/certificates/creativa-machine-learning-ai.jpeg",
  },
  {
    name: "Data Analysis Training Course",
    provider: "Microsoft Egypt — Tawar & Bayar",
    issueDate: "September 2025",
    image: "/certificates/microsoft-data-analysis.png",
  },
  {
    name: "Data Analysis, Power BI and Power Query",
    provider: "KorsatCode",
    issueDate: "November 2025",
    image: "/certificates/korsatcode-power-bi.jpg",
  },
  {
    name: "SQL (Basic)",
    provider: "HackerRank",
    issueDate: "February 2026",
    image: "/certificates/hackerrank-sql-basic.png",
  },
  {
    name: "Programming Diploma — Training Scholarship",
    provider: "Semicolon",
    issueDate: "",
    image: "/certificates/semicolon-programming-diploma.jpeg",
  },
];
