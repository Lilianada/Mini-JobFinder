import React from "react";
import Footer from "@components/authorized/Footer";
import TalentHeader from "@components/authorized/Talent/TalentHeader";

export const metadata = {
  title: "MinuJobs",
  description: "Hire the best talent or get hired for your dream job",
  keywords: "hire, talents, jobs, remote, malta",
};

export default function TalentLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <TalentHeader />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
