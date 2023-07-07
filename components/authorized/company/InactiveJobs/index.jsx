import React, { useState } from "react";
import Link from "next/link";
import "./style.scss";

export default function InactiveJobs() {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewMore = () => {
    setShowDetails(!showDetails);
  };

  const handleActivateJob = (jobId) => {
    // Implement the logic to activate the job posting with the given jobId
    console.log(`Activating job ${jobId}`);
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
              <div className="job-posting__header">
                <h4 className="job-posting__title">UI/UX Designer</h4>
                <button className="edit__button">Edit</button>
              </div>
              <div className="post__column">
                <div className="post__container">
                  <h5 className="job-posting__subtitle">Location:</h5>
                  <p className="job-posting__location">San Francisco, CA</p>
                </div>
                <div className="post__container">
                  <h5 className="job-posting__subtitle">Salary:</h5>
                  <p className="job-posting__salary">$90,000 - $120,000 per year</p>
                </div>
                <div className="post__container">
                  <h5 className="job-posting__subtitle">Employment Type:</h5>
                  <p className="job-posting__employment-type">Remote</p>
                </div>
              </div>
              {showDetails && (
                <div className="post__row">
                  <div className="post__container">
                    <h5 className="job-posting__subtitle">Requirements:</h5>
                    <ul className="job-posting__requirements">
                      <li>Proficiency in user interface design tools</li>
                      <li>Experience with user research and usability testing</li>
                      <li>Strong portfolio demonstrating UI/UX design skills</li>
                    </ul>
                  </div>
                  <div className="post__container">
                    <h5 className="job-posting__subtitle">Benefits:</h5>
                    <ul className="job-posting__benefits">
                      <li>Work-from-home flexibility</li>
                      <li>Generous vacation policy</li>
                      <li>Professional development opportunities</li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="job-posting__actions">
                <div className="candidate-info">
                  <p className="total-candidates">{totalCandidates} candidates</p>
                  {/* <Link href={`/candidates/${jobId}`}> */}
                  <Link href={`/`} className="view-candidates__button">
                    View Candidates
                  </Link>
                </div>
                <button
                  className="activate__button"
                  onClick={() => handleActivateJob(jobId)}
                >
                  Activate
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
