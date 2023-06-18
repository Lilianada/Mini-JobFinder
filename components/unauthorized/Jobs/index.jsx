import React from "react";
import "./style.scss";
import { CgBriefcase } from "react-icons/cg";
import { AiOutlineClockCircle, AiOutlineEnvironment } from "react-icons/ai";

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
  // Add more job postings as needed
];

export default function BrowseJobs() {
  return (
    <section className="browse__jobs">
      <div className="jobs__container">
        <div className="jobs__header">
          <h2 className="jobs__title">Browse Jobs</h2>
          <p className="jobs__subtitle">Search and find the most exciting remote friendly jobs.</p>
        </div>
        <div className="jobs__categories">
          <ul className="categories__list">
            <li className="list__tab">Human Resources</li>
            <li className="list__tab">Software Engineer</li>
            <li className="list__tab">Marketing and Sales</li>
            <li className="list__tab">Finance</li>
            <li className="list__tab">Content Writers</li>
          </ul>
        </div>
        <div className="jobs__listings">
          {jobPostings.map((job) => {
            return (
              <div className="jobs__card" key={job.id}>
                <div className="card__info">
                  <h4 className="card__title">{job.title}</h4>
                  <div className="card__flex">
                    <p className="card__location">
                      <CgBriefcase />
                      {job.location}
                    </p>
                    <p className="card__time">
                      <AiOutlineClockCircle />
                      {job.timePosted}
                    </p>
                  </div>
                  <ul className="card__tags">
                    {job.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div className="card__company">
                  <div className="card__logo">
                    <img src={job.company.logo} alt={job.company.name} />
                    <div className="company__info">
                      <h5 className="company__name">{job.company.name}</h5>
                      <p className="company__location">
                        {/* <AiOutlineEnvironment /> */}
                        {job.company.location}
                      </p>
                    </div>
                  </div>
                  <p className="company__pay">{job.company.pay}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="browse__btn">Browse More Jobs</button>
      </div>
    </section>
  );
}
