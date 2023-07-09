import React from 'react'

const companiesPostings = [
    {
      id: 1,
      industry: ["Full-Time", "JavaScript", "React"],
      company: {
        name: "Paypal",
        location: "San Francisco",
        pay: "$120,000/yr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 2,
      industry: ["Part-Time", "Digital Marketing"],
      company: {
        name: "LinkedIn",
        location: "New York City",
        pay: "$50/hr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      industry: ["Part-Time", "Digital Marketing"],
      company: {
        name: "LinkedIn",
        location: "New York City",
        pay: "$50/hr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 4,
      industry: ["Part-Time", "Digital Marketing"],
      company: {
        name: "LinkedIn",
        location: "New York City",
        pay: "$50/hr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 5,
      industry: ["Part-Time", "Digital Marketing"],
      company: {
        name: "LinkedIn",
        location: "New York City",
        pay: "$50/hr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 6,
      industry: ["Full-Time", "JavaScript", "React"],
      company: {
        name: "Paypal",
        location: "San Francisco",
        pay: "$120,000/yr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 7,
      industry: ["Full-Time", "JavaScript", "React"],
      company: {
        name: "Teamway",
        location: "San Francisco",
        pay: "$120,000/yr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 8,
      industry: ["Full-Time", "JavaScript", "React"],
      company: {
        name: "Twitter",
        location: "San Francisco",
        pay: "$120,000/yr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 9,
      industry: ["Full-Time", "JavaScript", "React"],
      company: {
        name: "Paypal",
        location: "San Francisco",
        pay: "$120,000/yr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 10,
      industry: ["Part-Time", "Digital Marketing"],
      company: {
        name: "LinkedIn",
        location: "New York City",
        pay: "$50/hr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 11,
      industry: ["Part-Time", "Digital Marketing"],
      company: {
        name: "LinkedIn",
        location: "New York City",
        pay: "$50/hr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 12,
      industry: ["Part-Time", "Digital Marketing"],
      company: {
        name: "LinkedIn",
        location: "New York City",
        pay: "$50/hr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
    {
      id: 13,
      industry: ["Part-Time", "Digital Marketing"],
      company: {
        name: "LinkedIn",
        location: "New York City",
        pay: "$50/hr",
        logo: "https://plus.unsplash.com/premium_photo-1666533177885-64832208c5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60", // Replace with actual logo URL
      },
    },
  ];

export default function CompaniesListing() {
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
  const companiesPerPage = 8;

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = jobPostings.slice(indexOfFirstCompany, indexOfLastCompany);

  const pageNumbers = Math.ceil(jobPostings.length / companiesPerPage);

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
    <section className="companies__grid">
    <div className="grid__header">
      <div className="header__left">
        <h5 className="total__companies">
          Showing{" "}
          <span className="companies__number">
            {indexOfFirstCompany + 1} -{" "}
            {indexOfLastCompany > companiesPostings.length
              ? companiesPostings.length
              : indexOfLastCompany}
          </span>{" "}
          of registered companies
        </h5>
      </div>

      <div className="header__right">

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
                    value="last Hr"
                  />
                  <p>Last hr</p>
                </div>
                <div className="check__item">
                  {" "}
                  <input
                    type="checkbox"
                    className="sort__check"
                    value="last 24 Hrs"
                  />
                  <p>Last 24 hrs</p>
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
              <label htmlFor="companiesType">companies Type:</label>
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

    {/* companies listings */}
    <div className="grid__body">
      {companiesPostings.length > 0 ? (
        currentCompanies.map((companies) => {
          return (
            <div className="companiess__card" key={companies.id}>
              <div className="card__info">
                <div className="card__company">
                  <div className="card__logo">
                    <img src={companies.company.logo} alt={companies.company.name} />
                    <div className="company__info">
                      <h5 className="company__name">{companies.company.name}</h5>
                      <p className="company__location">
                        <AiOutlineEnvironment />
                        {companies.company.location}
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="card__title">{companies.title}</h4>
                <div className="card__flex">
                  <p className="card__location">
                    <CgBriefcase />
                    Full-time
                  </p>
                  <p className="card__time">
                    <AiOutlineClockCircle />
                    {companies.timePosted}
                  </p>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae architecto eveniet, dolor quo repellendus
                  pariatur.
                </p>
                <ul className="card__industry">
                  {companies.industry.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="card__flex">
                <p className="company__pay">{companies.company.pay}</p>
                <Link href="/candidate/companiess/details">
                  <button className="apply__button">
                    {/* <Link to={`/companies/${companies.id}`}>Apply Now</Link> */}
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p>No companiess found.</p>
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
  )
}
