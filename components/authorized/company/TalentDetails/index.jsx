"use client";
import React, { useState } from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import "./style.scss";

export default function TalentDetails() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
    profileImage:
      "https://ouch-cdn2.icons8.com/-JZptPGuKRXkyuzdLeFBi71mdKqKYQHlVYx_4AQFhdQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png",
    dob: "4, July 1990",
    gender: "Female",
    pronouns: "She/Her",
    jobTitle: "Frontend Developer",
    desiredSalary: "80,000",
    linkedInLink: "https://www.linkedin.com/in/john-doe/",
    portfolioLink: "https://www.johndoe.com/",
    address: " Lorem Street, Ipsum, State, Country",
    phone: " 1234567890",
    mobile: " 1234567890",
    resume: null,
    skills: " HTML, CSS, JavaScript, React, Node.js",
    school: "University of Toronto, Canada",
    degree: " Bachelor of Art"
  });

  const {
    name,
    email,
    bio,
    profileImage,
    dob,
    gender,
    pronouns,
    jobTitle,
    desiredSalary,
    linkedInLink,
    portfolioLink,
    address,
    phone,
    resume,
    skills,
    degree,
    school,
  } = formData;

  return (
    <section className="talent__detsPage">
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

            <div className="details__row">
              <h4 className="user__name">{name}</h4>
              <p className="user__address">
                <AiOutlineEnvironment />
                {address}
              </p>
            </div>
            <p className="user__title">{jobTitle}</p>
          </div>
        </div>

        <div className="details__bottom">
          <div className="details__box">
            <h4 className="title">Personal Details</h4>
            <p className="text">
              <strong>Pronouns:</strong> {pronouns}
            </p>
            <p className="text">
              <strong>Gender:</strong> {gender}
            </p>
            <p className="text">
              <strong>DOB:</strong> {dob}
            </p>
          </div>
          <div className="details__box">
            <h4 className="title">About</h4>
            <p className="text">{bio}</p>
          </div>

          <div className="details__box">
            <h4 className="title">Skills</h4>
            <p className="text">{skills}</p>
          </div>

          <div className="details__box">
            <h4 className="title">Education</h4>
            <p className="text">{school}</p>
            <p className="text">{degree}</p>
          </div>

          <div className="details__box">
            <h4 className="title">Contact</h4>
            <p className="text">{email}</p>
            <p className="text">{phone}</p>
            <div className="details__row"></div>
          </div>

          <div className="details__box">
            <h4 className="title">Social Links</h4>
            <p className="text">
              <strong>LinkedIn:</strong> {linkedInLink}
            </p>
            <p className="text">
              <strong>Portfolio:</strong> {portfolioLink}
            </p>
          </div>

          <div className="details__box">
            <h4 className="title">Resume*</h4>
            {resume === null ? (
              <p className="text">No resume uploaded</p>
            ) : (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text"
              >
                View Resume
              </a>
            )}
          </div>

          <div className="details__box">
            <h4 className="title">Additional Information</h4>
            <p className="text">
              <strong>Desired Salary:</strong> {desiredSalary}
            </p>
            <p className="text">{}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
