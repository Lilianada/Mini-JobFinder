import React from "react";
import "./style.css";

export default function UnauthorizedHeader() {
 
  return (
    <header className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {/* <li>
          <a>Item 1</a>
        </li> */}
          <li>
            <a>Find Job</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Hire Talent</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">MinuJobs</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {/* <li>
        <a>Item 1</a>
      </li> */}
        <li tabIndex={0}>
          <details>
            <summary>Find Job</summary>
            <ul className="p-2">
              <li>
                <a>Success Stories</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </details>
        </li>
        <li tabIndex={0}>
          <details>
            <summary>Hire Talent</summary>
            <ul className="p-2">
              <li>
                <a>Why MinuJobs</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Success Stories</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Get Started</a>
    </div>
  </header>
  );
}
