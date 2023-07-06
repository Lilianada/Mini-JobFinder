import React from "react";
import Link from "next/link";

export default function ActiveJobs() {
  // Function to handle viewing candidates
  const handleViewCandidates = (jobId) => {
    // No changes needed for Next.js Link usage
  };

  // Mock data for the total number of candidates
  const totalCandidates = 5;

  return (
    <section className="activeJobs__section">
      <div className="activeJobs__container">
        <div className="section__header">
          <h2 className="section__title">Active Jobs</h2>
        </div>
        <div className="section__body">
          <ul className="active-postings__list">
            <li className="job-posting">
              <h4 className="job-posting__title">Frontend Developer</h4>
              <p className="job-posting__location">Location: New York, NY</p>
              <p className="job-posting__salary">Salary: $80,000 - $100,000 per year</p>
              <p className="job-posting__employment-type">Employment Type: Full-Time</p>
              <h5 className="job-posting__subtitle">Requirements:</h5>
              <ul className="job-posting__requirements">
                <li>Experience with HTML, CSS, and JavaScript</li>
                <li>Strong problem-solving skills</li>
                <li>Excellent communication and collaboration abilities</li>
              </ul>
              <h5 className="job-posting__subtitle">Benefits:</h5>
              <ul className="job-posting__benefits">
                <li>Healthcare coverage</li>
                <li>Flexible work hours</li>
                <li>401(k) retirement plan</li>
              </ul>
              <div className="job-posting__actions">
                <div className="candidate-info">
                  <p className="total-candidates">{totalCandidates} candidates</p>
                  {/* <Link href={`/candidates/${jobId}`}> */}
                  <Link href={`/`}className="view-candidates__button">
                    View Candidates
                  </Link>
                </div>
                <button className="edit__button">Edit</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
