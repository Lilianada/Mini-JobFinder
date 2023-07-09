import React from "react";
import Footer from "@components/authorized/Footer";
import CompanyHeader from "@components/authorized/Company/CompanyHeader";

export const metadata = {
  title: "MinuJobs",
  description: "Hire the best talent or get hired for your dream job",
  keywords: "hire, talents, jobs, remote, malta",
};

export default function CandidateLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <CompanyHeader />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
