import React from "react";

const ApplyForJob = () => {
  return (
    <section className="applyJobs__section">
      <div className="applyJobs__container">
        <div className="section__header">
          <h2 className="section__title">Apply for Jobs</h2>
        </div>
        <div className="section__body">
          <ul className="applyJobs__list">
            <li className="job-posting">
              <div className="job-posting__header">
                <h4 className="job-posting__title">Frontend Developer</h4>
                <button className="edit__button">Edit</button>
              </div>
              <p className="job-posting__text">
                <strong>Location: </strong>
                New York, NY
              </p>
              <p className="job-posting__text">
                <strong>Salary: </strong>
                $80,000 - $100,000 per year
              </p>
              <p className="job-posting__text">
                <strong>Employment Type: </strong>
                Full-Time
              </p>
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
                <button className="apply__button">Apply Now</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ApplyForJob;
