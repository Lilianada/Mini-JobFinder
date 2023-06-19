import React, { useState } from "react";
import Link from "next/link";
import "./style.scss";

export default function HireTalent() {
  const [showMenu, setShowMenu] = useState(false);

  const isActive = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="hireTalent__menu">
      <ul className="dropdown__list">
        <li className="dropdown__link">
          <Link href="/post-job" className="link">
            Post Jobs
          </Link>
        </li>
        <li className="dropdown__link">
          <Link href="/browse-candidates" className="link">
            Find Candidates
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
