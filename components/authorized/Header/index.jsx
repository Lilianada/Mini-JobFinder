'use client'
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import Link from "next/link";
import "./style.scss";
// import HireTalent from "../Dropdowns/HireTalent/";
// import FindJob from "../Dropdowns/FindJob";

export default function AuthorizedHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [jobDropdown, setJobDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleJobDropdown = () => {
    setJobDropdown(!jobDropdown);
    setHireDropdown(false); // Close the hireDropdown
  };

  const toggleAccountDropdown = () => {
    setAccountDropdown(!accountDropdown);
    setJobDropdown(false); // Close the jobDropdown
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="authorized__header">
      {/* Desktop Header */}
      <div className="desktop__header">
        <div className="header__logo">
          <h2 className="logo__name">MinuJobs</h2>
        </div>
        <nav className="nav__bar">
          <ul className="nav__list">
            <li className="nav__link">
              <Link href="/home" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/jobs" className="nav__link">
                Jobs
              </Link>
            </li>
            <li
              className={accountDropdown ? "active__menu" : "nav__menu"}
              onClick={toggleAccountDropdown}
            >
              Account
              <BsChevronDown fill="#827f7f" size={10} />
              <div
                className={`${accountDropdown ? "account__modal" : "no__show"}`}
              >
                {/* <Account /> */}
              </div>
            </li>
            <li className="nav__item">
              <Link href="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/signout" className="nav__button">
                Sign Out
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
          <FiMenu size={32} stroke="#2563eb" fill="#2563eb" />
        </button>
        <nav className={`nav__bar ${showMenu ? "show__navbar" : "nav__bar"}`}>
          <div className="nav__header">
            <h2 className="logo__name">MinuJobs</h2>
            <button type="button" className="close__menu" onClick={closeMenu}>
              <CgClose size={24} />
            </button>
          </div>
          {/* Navigation List */}
          <ul className="nav__list">
            <li className="nav__item pd_btm">
              <Link href="/home" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/jobs" className="nav__link">
                Jobs
              </Link>
            </li>
          </ul>
          <ul className="dropdown__list">
            <h4 className="nav__head">
              Profile
              <BsChevronDown fill="#827f7f" size={10} />
            </h4>
            <li className="dropdown__link">
              <Link href="/profile-settings" className="link">
                Profile Settings
              </Link>
            </li>
            <li className="dropdown__link">
              <Link href="/account" className="link">
                Account
              </Link>
            </li>
          </ul>
          <ul className="nav__list">
            <li className="nav__item pd_btm">
              <Link href="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/signout" className="nav__button">
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
