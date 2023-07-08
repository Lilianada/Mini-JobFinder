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
          <Link href="/settings" className="link">
            Setting
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/candidate/testimonials" className="link">
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
}
