import React, {useState} from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { IoStatsChartOutline } from "react-icons/io5";
import { RxPencil2, RxPerson } from "react-icons/rx";
import { GrStar } from "react-icons/gr";
import {IoBookmarksOutline} from "react-icons/io5"

export default function ProfileMenu() {
    const [showMenu, setShowMenu] = useState(false);

  const isActive = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="dropdown_menu">
      <div className="dropdown_head">
        <div className="dropdown_image"></div>
        <div className="dropdown_dets">
          <h3 className="dropdown_name">Lilian Okeke</h3>
          <p className="dropdown_email">Lilibest@gmail.com</p>
        </div>
      </div>
      <ul className="dropdown_list">
        <li className="dropdown_link">
          <NavLink to="/profile"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            <RxPerson size={20} fill="#7f7d7d" />
            Profile
          </NavLink>
        </li>
        <li className="dropdown_link">
          <NavLink to="/write"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            <RxPencil2 size={20} fill="#7f7d7d" />
            Start Writing
          </NavLink>
        </li>
        <li className="dropdown_link">
          <NavLink to="/bookmark"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            <IoBookmarksOutline size={20} fill="#7f7d7d" />
            Bookmark
          </NavLink>
        </li>
        <li className="dropdown_link">
          <NavLink to="/stories"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            <CgNotes size={20} fill="#7f7d7d" />
            Stories
          </NavLink>
        </li>
        <li className="dropdown_link">
          <NavLink to="/stats"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            <IoStatsChartOutline size={20} fill="#7f7d7d" />
            Stats
          </NavLink>
        </li>
      </ul>
      <ul className="dropdown_list">
        <li className="dropdown_link">
          <NavLink to="/settings"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            Settings
          </NavLink>
        </li>
        <li className="dropdown_link">
          <NavLink to="/support"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            Support
          </NavLink>
        </li>
        <li className="dropdown_link">
          <NavLink to="/signout"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            Sign out
          </NavLink>
        </li>
      </ul>
      <NavLink to="/become-member" className={({ isActive }) =>
                  isActive ? "linkk active__link" : "linkk inactive__link"
                }>
        Become a member 
        <GrStar fill="#f5a623" />
      </NavLink>
      <ul className="dropdown_bottom">
        <li className="dropdown_link">
          <NavLink to="/about"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
           About
          </NavLink>
        </li>
        <li className="dropdown_link">
          <NavLink to="/privacy"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            Privacy
          </NavLink>
        </li>
        <li className="dropdown_link">
          <NavLink to="/terms"  className={({ isActive }) =>
                  isActive ? "link active__link" : "link inactive__link"
                }>
            Terms
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
