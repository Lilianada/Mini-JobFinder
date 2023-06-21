import React from "react";
import Link from "next/link";
import "./style.scss";

export default function AccountDropdown() {
 
  return (
    <div className="account__menu">
      <ul className="dropdown__list">
        <li className="dropdown__link">
          <Link href="/candidate/profile" className="link">
            Profile
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/become-talent" className="link">
            Account
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
