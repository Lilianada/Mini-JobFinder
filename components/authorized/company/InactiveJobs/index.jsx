"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.scss";

export default function ActiveJobs() {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewMore = () => {
    setShowDetails(!showDetails);
  };

  const handleActivateJob = (jobId) => {
    // Implement the logic to activate the job posting with the given jobId
    console.log(`Activating job ${jobId}`);
  };

  // Mock data for the total number of candidates
  const totalCandidates = 5;

  return (
    <section className="activeJobs__section">
      <div className="activeJobs__container">
        <div className="section__header">
          <h2 className="section__title">Inactive Jobs</h2>
        </div>
        <div className="section__body">
          <ul className="activePostings__list">
            <li className="jobPosting">
              <div className="jobPosting__header">
                <h4 className="jobPosting__title">Frontend Developer</h4>
                <button
                  className="activate__button"
                  onClick={() => handleActivateJob(jobId)}
                >
                  Activate
                </button>
              </div>
              <div className="job__description">
                <h5 className="job__subtitle">Description:</h5>
                <p className="job__text">
                  We are looking for a qualified Front-end developer to join our
                  IT team. You will be responsible for building the
                  ‘client-side’ of our web applications. You should be able to
                  translate our company and customer needs into functional and
                  appealing interactive applications. Ultimately, you should be able
                  to create a functional and attractive digital environment for
                  our company, ensuring great user experience.
                </p>
              </div>
              <div className="post__column">
                <div className="post__container">
                  <h5 className="jobPosting__subtitle">Employment Type:</h5>
                  <ul className="jobPosting__listItem">
                    <li>Full-time</li>
                  </ul>
                </div>
                <div className="post__container">
                  <h5 className="jobPosting__subtitle">Location:</h5>
                  <ul className="jobPosting__listItem">
                    <li>San Francisco, CA</li>
                  </ul>
                </div>
                <div className="post__container">
                  <h5 className="jobPosting__subtitle">Salary:</h5>
                  <ul className="jobPosting__listItem">
                    <li>$90,000 - $120,000 per year</li>
                  </ul>
                </div>
                <div className="post__container">
                  <h5 className="jobPosting__subtitle">Experience:</h5>
                  <ul className="jobPosting__listItem">
                    <li>Mid-level</li>
                  </ul>
                </div>
              </div>
              {showDetails && (
                <div className="post__row">
                  <div className="post__container">
                    <h5 className="jobPosting__subtitle">Requirements:</h5>
                    <ul className="jobPosting__listItem">
                      <li>Experience with HTML, CSS, and JavaScript</li>
                      <li>Strong problem-solving skills</li>
                      <li>
                        Excellent communication and collaboration abilities
                      </li>
                    </ul>
                  </div>
                  <div className="post__container">
                    <h5 className="jobPosting__subtitle">Benefits:</h5>
                    <ul className="jobPosting__listItem">
                      <li>Healthcare coverage</li>
                      <li>Flexible work hours</li>
                      <li>401(k) retirement plan</li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="jobPosting__actions">
                <div className="candidate__info">
                  <p className="total-candidates">
                    {totalCandidates} candidates applied
                  </p>
                  <button className="view__button" onClick={handleViewMore}>
                    {showDetails ? "View Less" : "View More"}
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
