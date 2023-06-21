import React from "react";
// import './global.scss';
import AuthorizedHeader from "@components/authorized/Header";

export const metadata = {
  title: "MinuJobs",
  description: "Hire the best talent or get hired for your dream job",
  keywords: "hire, talents, jobs, remote, malta",
};

export default function CandidateLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthorizedHeader />
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
