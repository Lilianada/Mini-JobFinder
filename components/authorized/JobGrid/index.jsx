import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

const JobGrid = () => {
  const [jobs, setJobs] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);

  const isFilterToggled = () => {
    setToggleFilter(!toggleFilter);
  };

  const isSortToggled = () => {
    setToggleSort(!toggleSort);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://jobsearch4.p.rapidapi.com/api/v1/Jobs/Search",
          {
            params: {
              SearchQuery: "java",
            },
            headers: {
              "X-RapidAPI-Key":
                "0e0b03802dmsh0ff85f33cd9c03cp167843jsne657c6b58de7",
              "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
            },
          }
        );
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="job__grid">
      <div className="grid__header">
        <div className="header__left">
          <h5 className="total__jobs">
            Showing
            <span className="job__number"> 1 - 23</span> of available jobs
          </h5>
        </div>

        <div className="header__right">
          <div className="sort__item">
            {/* <label htmlFor="sortBy" className="sort__label">
               
            </label>{" "} */}
            <button className="sort__button" onClick={isSortToggled}>
              Sort by:
            </button>
            <div className={toggleSort ? "show__sort" : "sort__group"}></div>
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
      <div>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              {/* Render additional job details */}
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </section>
  );
};

export default JobGrid;
