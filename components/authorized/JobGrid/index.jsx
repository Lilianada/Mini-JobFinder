import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { AiOutlineClockCircle, AiOutlineEnvironment } from "react-icons/ai";
import { CgBriefcase } from "react-icons/cg";

const jobPostings = [
  {
    id: 1,
    title: "Software Engineer",
    location: "San Francisco",
    timePosted: "2 hours ago",
    tags: ["Full-Time", "JavaScript", "React"],
    company: {
      name: "Paypal",
      location: "San Francisco",
      pay: "$120,000/year",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 2,
    title: "Marketing Specialist",
    location: "New York City",
    timePosted: "1 day ago",
    tags: ["Part-Time", "Digital Marketing"],
    company: {
      name: "LinkedIn",
      location: "New York City",
      pay: "$50/hour",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 3,
    title: "Marketing Specialist",
    location: "New York City",
    timePosted: "1 day ago",
    tags: ["Part-Time", "Digital Marketing"],
    company: {
      name: "LinkedIn",
      location: "New York City",
      pay: "$50/hour",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 4,
    title: "Marketing Specialist",
    location: "New York City",
    timePosted: "1 day ago",
    tags: ["Part-Time", "Digital Marketing"],
    company: {
      name: "LinkedIn",
      location: "New York City",
      pay: "$50/hour",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 5,
    title: "Marketing Specialist",
    location: "New York City",
    timePosted: "1 day ago",
    tags: ["Part-Time", "Digital Marketing"],
    company: {
      name: "LinkedIn",
      location: "New York City",
      pay: "$50/hour",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 6,
    title: "Software Engineer",
    location: "San Francisco",
    timePosted: "2 hours ago",
    tags: ["Full-Time", "JavaScript", "React"],
    company: {
      name: "Paypal",
      location: "San Francisco",
      pay: "$120,000/year",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 7,
    title: "Software Engineer",
    location: "San Francisco",
    timePosted: "2 hours ago",
    tags: ["Full-Time", "JavaScript", "React"],
    company: {
      name: "Teamway",
      location: "San Francisco",
      pay: "$120,000/year",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 8,
    title: "Software Engineer",
    location: "San Francisco",
    timePosted: "2 hours ago",
    tags: ["Full-Time", "JavaScript", "React"],
    company: {
      name: "Twitter",
      location: "San Francisco",
      pay: "$120,000/year",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 9,
    title: "Software Engineer",
    location: "San Francisco",
    timePosted: "2 hours ago",
    tags: ["Full-Time", "JavaScript", "React"],
    company: {
      name: "Paypal",
      location: "San Francisco",
      pay: "$120,000/year",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 10,
    title: "Marketing Specialist",
    location: "New York City",
    timePosted: "1 day ago",
    tags: ["Part-Time", "Digital Marketing"],
    company: {
      name: "LinkedIn",
      location: "New York City",
      pay: "$50/hour",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 11,
    title: "Marketing Specialist",
    location: "New York City",
    timePosted: "1 day ago",
    tags: ["Part-Time", "Digital Marketing"],
    company: {
      name: "LinkedIn",
      location: "New York City",
      pay: "$50/hour",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 12,
    title: "Marketing Specialist",
    location: "New York City",
    timePosted: "1 day ago",
    tags: ["Part-Time", "Digital Marketing"],
    company: {
      name: "LinkedIn",
      location: "New York City",
      pay: "$50/hour",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
  {
    id: 13,
    title: "Marketing Specialist",
    location: "New York City",
    timePosted: "1 day ago",
    tags: ["Part-Time", "Digital Marketing"],
    company: {
      name: "LinkedIn",
      location: "New York City",
      pay: "$50/hour",
      logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
    },
  },
];

const JobGrid = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);

  const isFilterToggled = () => {
    setToggleFilter(!toggleFilter);
    setToggleSort(false);
  };

  const isSortToggled = () => {
    setToggleSort(!toggleSort);
    setToggleFilter(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobPostings.slice(indexOfFirstJob, indexOfLastJob);

  const pageNumbers = Math.ceil(jobPostings.length / jobsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="job__grid">
      <div className="grid__header">
        <div className="header__left">
          <h5 className="total__jobs">
            Showing{" "}
            <span className="job__number">
              {indexOfFirstJob + 1} -{" "}
              {indexOfLastJob > jobPostings.length
                ? jobPostings.length
                : indexOfLastJob}
            </span>{" "}
            of available jobs
          </h5>
        </div>

        <div className="header__right">
          <div className="sort">
            {/* <label htmlFor="sortBy" className="sort__label">
               
            </label>{" "} */}
            <button className="sort__button" onClick={isSortToggled}>
              Sort by:
            </button>
            <div className={toggleSort ? "show__sort" : "sort__group"}>
              <div className="sort__item">
                <input
                  type="checkbox"
                  className="sort__check"
                  value="select Option"
                />
                <p>Select an option</p>
              </div>
              <div className="sort__item">
                <input
                  type="checkbox"
                  className="sort__check"
                  value="last Hour"
                />
                <p>Last hour</p>
              </div>
              <div className="sort__item">
                <input
                  type="checkbox"
                  className="sort__check"
                  value="last 24 hours"
                />
                <p>Last 24 hours</p>
              </div>
              <div className="sort__item">
                <input
                  type="checkbox"
                  className="sort__check"
                  value="last 7 days"
                />
                <p>Last 7 days</p>
              </div>
              <div className="sort__item">
                <input
                  type="checkbox"
                  className="sort__check"
                  value="last 30 days"
                />
                <p>Last 30 days</p>
              </div>
              <div className="sort__item">
                <input
                  type="checkbox"
                  className="sort__check"
                  value="all time"
                />
                <p>All time</p>
              </div>
            </div>
          </div>

          <div className="filter">
            <button className="filter__button" onClick={isFilterToggled}>
              Show Filter
            </button>

            <div className={toggleFilter ? "show__filter" : "filter__group"}>
              <div className="filter__item">
                <label htmlFor="location">Date Posted:</label>
                <div className="items">
                  <div className="check__item">
                    {" "}
                    <input
                      type="checkbox"
                      className="sort__check"
                      value="select Option"
                    />
                    <p>Select an option</p>
                  </div>
                  <div className="check__item">
                    {" "}
                    <input
                      type="checkbox"
                      className="sort__check"
                      value="last Hour"
                    />
                    <p>Last hour</p>
                  </div>
                  <div className="check__item">
                    {" "}
                    <input
                      type="checkbox"
                      className="sort__check"
                      value="last 24 Hours"
                    />
                    <p>Last 24 hours</p>
                  </div>
                  <div className="check__item">
                    {" "}
                    <input
                      type="checkbox"
                      className="sort__check"
                      value="last7 Days"
                    />
                    <p>Last 7 days</p>
                  </div>
                  <div className="check__item">
                    {" "}
                    <input
                      type="checkbox"
                      className="sort__check"
                      value="last 14 Days"
                    />
                    <p>Last 14 days</p>
                  </div>
                  <div className="check__item">
                    {" "}
                    <input
                      type="checkbox"
                      className="sort__check"
                      value="last 30 Days"
                    />
                    <p>Last 30 days</p>
                  </div>
                </div>
              </div>
              <div className="filter__item">
                <label htmlFor="specialism">Specialism:</label>
                <div className="items">
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="IT Contractor"
                    />
                    <p> IT Contractor </p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Charity & Voluntary"
                    />
                    <p> Charity & Voluntary </p>
                  </div>
                  <div className="check__item">
                    <input type="checkbox" name="" value="Digital & Creative" />
                    <p>Digital & Creative</p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Estate Agency"
                    />
                    Estate Agency
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Graduate"
                    />
                    Graduate
                  </div>
                </div>
              </div>
              <div className="filter__item">
                <label htmlFor="jobType">Job Type:</label>
                <div className="items">
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Full Time"
                    />
                    <p> Full Time </p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Part-Time"
                    />
                    <p>Part-Time</p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Freelance"
                    />
                    <p>Freelance</p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Temporary"
                    />
                    <p>Temporary</p>
                  </div>
                </div>
              </div>
              <div className="filter__item">
                <label htmlFor="experience">Experience:</label>
                <div className="items">
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Fresher"
                    />
                    <p>Fresher</p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="Less than 1 year"
                    />
                    <p>Less than 1 year</p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="2 Year"
                    />
                    <p>2 Year</p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="3 Year"
                    />
                    <p>3 Year</p>
                  </div>
                  <div className="check__item">
                    <input
                      type="checkbox"
                      name=""
                      id="filter__checkbox"
                      value="4 Year"
                    />
                    <p>4 Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job listings */}
      <div className="grid__body">
        {jobPostings.length > 0 ? (
          currentJobs.map((job) => {
            return (
              <div className="jobs__card" key={job.id}>
                <div className="card__info">
                  <div className="card__company">
                    <div className="card__logo">
                      <img src={job.company.logo} alt={job.company.name} />
                      <div className="company__info">
                        <h5 className="company__name">{job.company.name}</h5>
                        <p className="company__location">
                          <AiOutlineEnvironment />
                          {job.company.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h4 className="card__title">{job.title}</h4>
                  <div className="card__flex">
                    <p className="card__location">
                      <CgBriefcase />
                      Full-time
                    </p>
                    <p className="card__time">
                      <AiOutlineClockCircle />
                      {job.timePosted}
                    </p>
                  </div>
                    <p className="card__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.
                    </p>
                  <ul className="card__tags">
                    {job.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="card__flex">
                  <p className="company__pay">{job.company.pay}</p>
                  <button className="apply__button">Apply Now</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No jobs found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination__button"
          onClick={handlePreviousClick}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              className={`pagination__button ${
                currentPage === pageNumber ? "pagination__active" : ""
              }`}
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}

        <button
          className="pagination__button"
          onClick={handleNextClick}
          disabled={currentPage === pageNumbers}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default JobGrid;
