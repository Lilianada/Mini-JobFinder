import React from "react";
import CandidateHeader from "@components/authorized/CandidateHeader";
import Footer from "@components/authorized/Footer";

export const metadata = {
  title: "MinuJobs",
  description: "Hire the best talent or get hired for your dream job",
  keywords: "hire, talents, jobs, remote, malta",
};

export default function CandidateLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CandidateHeader />
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
