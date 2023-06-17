import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import "./style.scss";
import HireTalent from "../Dropdowns/HireTalent/";
import FindJob from "../Dropdowns/FindJob";
export default function UnauthorizedHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [jobDropdown, setJobDropdown] = useState(false);
  const [hireDropdown, setHireDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleJobDropdown = () => {
    setJobDropdown(!jobDropdown);
    setHireDropdown(false); // Close the hireDropdown
  };

  const toggleHireDropdown = () => {
    setHireDropdown(!hireDropdown);
    setJobDropdown(false); // Close the jobDropdown
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="unauthorized__header">
      {/* Desktop Header */}
      <div className="desktop__header">
        <div className="header__logo">
          <h2 className="logo__name">MinuJobs</h2>
        </div>
        <nav className="nav__bar">
          <ul className="nav__list">
            <li
              className={jobDropdown ? "active__menu" : "nav__menu"}
              onClick={toggleJobDropdown}
            >
              Find job
              <BsChevronDown fill="#827f7f" size={10} />
              <div className={`${jobDropdown ? "findJob_modal" : "no__show"}`}>
                <FindJob />
              </div>
            </li>
            <li
              className={hireDropdown ? "active__menu" : "nav__menu"}
              onClick={toggleHireDropdown}
            >
              Hire talent
              <BsChevronDown fill="#827f7f" size={10} />
              <div
                className={`${hireDropdown ? "hireTalent__modal" : "no__show"}`}
              >
                <HireTalent />
              </div>
            </li>
            <li className="nav__item">
              <Link href="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/login" className="nav__link">
                Sign In
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/signup" className="nav__button">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="mobile__header">
        <div className="header__logo">
          <h2 className="logo__name">MinuJobs</h2>
        </div>
        <button type="button" className="menu__button" onClick={toggleMenu}>
          <FiMenu size={32} stroke="white" fill="white" />
        </button>

        <nav className={`nav__bar ${showMenu ? "show__navbar" : "nav__bar"}`}>
          <button type="button" className="close__menu" onClick={closeMenu}>
            <GrClose />
          </button>
          <ul className="nav__list">
            <li className="nav__item">
              <h6 className="nav__title">Menu</h6>
            </li>
          </ul>

          {/* Navigation List */}
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="/login" className="nav__link">
                Resources
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/login" className="nav__link">
                Start Writing
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/login" className="nav__link">
                Login
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/signup" className="nav__button">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
