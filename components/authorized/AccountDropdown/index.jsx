import React from "react";
import Link from "next/link";
import "./style.scss";

export default function AccountDropdown({ closeMenu }) {
  return (
    <div className="account__menu">
      <ul className="dropdown__list">
        <li className="dropdown__link">
          <Link href="/candidate/profile" className="link" onClick={closeMenu}>
            Profile
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/settings" className="link" onClick={closeMenu}>
            Settings
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/candidate/resume" className="link" onClick={closeMenu}>
            My Resume
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/candidate/testimonials" className="link" onClick={closeMenu}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
}
