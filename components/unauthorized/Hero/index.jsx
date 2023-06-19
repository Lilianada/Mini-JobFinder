import React from "react";
import "./style.scss";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="hero__section">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Hire
            <span className="primary__text"> a rising talent</span>
            <br />
            Find
            <span className="primary__text"> your next job</span>
          </h1>
          <h6 className="hero__description">
            Looking for a new role? Create a profile on Hired to connect
            directly with growing tech teams. Hiring? We're the go-to platform
            for sourcing the best tech talent out there.
          </h6>
        </div>
        <div className="hero__searchBar">
          <input
            type="search"
            name="search-bar"
            className="search__bar"
            placeholder="Job Title, Skill or Company"
          />
          <Link href="/search" className="hero__button">
            <HiOutlineArrowNarrowRight className="search__icon" />
            <p>Find Jobs</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
