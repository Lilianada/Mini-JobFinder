import React from "react";
import Link from "next/link";

export default function InactiveJobs() {
  // Function to handle activating a job posting
  const handleActivateJob = (jobId) => {
    // Implement the logic to activate the job posting with the given jobId
  };

  // Mock data for the total number of candidates
  const totalCandidates = 3;

  return (
    <section className="inactiveJobs__section">
      <div className="inactiveJobs__container">
        <div className="section__header">
          <h2 className="section__title">Inactive Jobs</h2>
        </div>
        <div className="inactiveJobs__body">
          <ul className="inactive-postings__list">
            <li className="job-posting">
              <h4 className="job-posting__title">UI/UX Designer</h4>
              <p className="job-posting__location">Location: San Francisco, CA</p>
              <p className="job-posting__salary">Salary: $90,000 - $120,000 per year</p>
              <p className="job-posting__employment-type">Employment Type: Remote</p>
              <h5 className="job-posting__subtitle">Requirements:</h5>
              <ul className="job-posting__requirements">
                <li>Proficiency in user interface design tools</li>
                <li>Experience with user research and usability testing</li>
                <li>Strong portfolio demonstrating UI/UX design skills</li>
              </ul>
              <h5 className="job-posting__subtitle">Benefits:</h5>
              <ul className="job-posting__benefits">
                <li>Work-from-home flexibility</li>
                <li>Generous vacation policy</li>
                <li>Professional development opportunities</li>
              </ul>
              <div className="job-posting__actions">
                <div className="candidate-info">
                  <p className="total-candidates">{totalCandidates} candidates</p>
                  {/* <Link href={`/candidates/${jobId}`}> */}
                  <Link href={`/`}className="view-candidates__button">
                    View Candidates
                  </Link>
                </div>
                <button className="activate__button" onClick={() => handleActivateJob(jobId)}>
                  Activate
                </button>
                <button className="edit__button">Edit</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
