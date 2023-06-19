import React, { useState } from "react";
import Link from "next/link";
import "./style.scss";

export default function FindJob() {
  const [showMenu, setShowMenu] = useState(false);
  const [hireDropdown, setHireDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleHireDropdown = () => {
    setHireDropdown(!hireDropdown);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="findJob__menu">
      <ul className="dropdown__list">
        <li className="dropdown__link">
          <Link href="/minu" className="link">
            Browse Jobs
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/become-talent" className="link">
            Find Companies
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/testimonials" className="link">
            Testimonials
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/terms" className="link">
            Terms
          </Link>
        </li>
      </ul>
    </div>
  );
}
