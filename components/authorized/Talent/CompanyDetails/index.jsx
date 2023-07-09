import React, {useState} from "react";
import {  MdPeopleOutline } from "react-icons/md";
import "./style.scss";
import { AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai";

export default function CompanyDetails() {
  const formData = {
    name: "Lovehoney Group",
    email: "career@lovehoneygroup.com",
    bio:
      "The Lovehoney Group is the world’s leading sexual wellbeing company. We offer exciting brands with innovative, high-quality sex toys, lingerie, and accessories in a smooth online shopping experience.\n\nLovehoney employs over 900 awesome, diverse & driven people throughout our 9 offices across the globe, celebrating a broad spectrum of talents in engineering, industrial design, sales, and marketing.\n\nWe are proud to be a company that thrives by doing things differently, challenging expectations and stereotypes while making a positive impact on our customers’ lives.",
    profileImage:
      "https://ouch-cdn2.icons8.com/-JZptPGuKRXkyuzdLeFBi71mdKqKYQHlVYx_4AQFhdQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png",
    teamSize: "500-1000",
    linkedInLink: "https://www.linkedin.com/company/lovehoney-group/",
    companySite: "https://www.lovehoneygroup.com/",
    address: "Berlin, Germany (hybrid)",
    openPositions: [
      {
        title: "Marketing and Communications",
        company: "Fast Systems Consultants",
        location: "Wellesley Rd, London",
        industry: "Accountancy",
        employmentType: "Freelance",
        postedAgo: "1M ago",
      },
      {
        title: "Web Developer – .net",
        company: "Pendragon Green Ltd",
        location: "Needham, MA",
        industry: "IT & Telecoms",
        employmentType: "Part-Time",
        postedAgo: "3D ago",
      },
      {
        title: "Payroll and Office Administrator",
        company: "Wight Sound Hearing LLC",
        location: "New Castle, PA",
        industry: "Banking",
        employmentType: "Temporary",
        postedAgo: "2W ago",
      },
      {
        title: "Data Entry Administrator",
        company: "Tan Electrics Ltd",
        location: "Park Avenue, Mumbai",
        industry: "Charity & Voluntary",
        employmentType: "Full-time",
        postedAgo: "3M ago",
      },
      {
        title: "Operational manager part-time",
        company: "Fleet Home Improvements Pvt",
        location: "Green Lanes, London",
        industry: "Accountancy (Qualified)",
        employmentType: "Part-Time",
        postedAgo: "N/A",
      },
    ],
  };

  const {
    name,
    email,
    bio,
    profileImage,
    teamSize,
    linkedInLink,
    companySite,
    address,
    openPositions,
  } = formData;

  return (
    <section className="details__page">
      <div className="details__container">
        <div className="details__top">
          <div className="details__column">
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="details__image"
              />
            )}
            <h4 className="user__name">Welcome to {name}</h4>

            <div className="details__row">
              <p className="user__address">
                <AiOutlineEnvironment />
                {address}
              </p>
              <p className="user__address">
                <AiOutlineMail />
                {email}
              </p>
              <p className="user__address">
                <MdPeopleOutline />
                {teamSize} employees
              </p>
            </div>
          </div>
        </div>

        <div className="details__bottom">
          <div className="details__box">
            <h4 className="title">About Us</h4>
            <p className="text">{bio}</p>
          </div>

          <div className="details__box">
            <h4 className="title">Open Positions</h4>
            {openPositions.length > 0 ? (
              openPositions.map((position, index) => (
                <div className="position" key={index}>
                  <h5>{position.title}</h5>
                  <p>{`via ${position.company}`}</p>
                  <p>{position.location}</p>
                  <p>{position.industry}</p>
                  <p>{position.employmentType}</p>
                  <p>{position.postedAgo}</p>
                </div>
              ))
            ) : (
              <p className="text">No open positions available.</p>
            )}
          </div>

          <div className="details__box">
            <h4 className="title">Social Links</h4>
            <p className="text">
              <strong>LinkedIn:</strong>{" "}
              <a href={linkedInLink} className="text">
                {linkedInLink}
              </a>
            </p>
            <p className="text">
              <strong>Portfolio:</strong>{" "}
              <a href={companySite} className="text">
                {companySite}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
