import React from "react";
import { AiOutlineEnvironment } from "react-icons/ai";

const TalentDetails = ({ handleEditClick, formData = {} }) => {
  const {
    name,
    email,
    bio,
    profileImage,
    dob,
    gender,
    pronouns,
    jobTitle,
    minSalary,
    maxSalary,
    linkedInLink,
    portfolioLink,
    address,
    phone,
    mobile,
    resume,
    skills,
    degree,
    institute,
    company,
    position,
  } = formData;

  return (
    <div className="profile__details">
      <h4 className="note">
        This is a preview of your profile. Please review all your information
        before submitting.
      </h4>

      <div className="profile__top">
        <div className="profile__column">
          {profileImage && (
            <img src={profileImage} alt="Profile" className="profile__image" />
          )}

          <div className="profile__row">
            <h4 className="user__name">{name}</h4>
            <p className="user__address">
              <AiOutlineEnvironment />
              {address}
            </p>
          </div>
          <p className="user__title">{jobTitle}</p>
        </div>
      </div>

      <div className="profile__bottom">
        <div className="profile__box">
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

        <div className="profile__box">
          <h4 className="title">About</h4>
          <p className="text">{bio}</p>
        </div>

        <div className="profile__box">
          <h4 className="title">Skills</h4>
          <p className="text">{skills}</p>
        </div>

        <div className="profile__box">
          <h4 className="title">Education</h4>
          <p className="text">
            <strong>Institution: </strong>
            {institute}</p>
          <p className="text">
          <strong>Degree: </strong>{degree}</p>
        </div>

        <div className="profile__box">
          <h4 className="title">Experience</h4>
          <p className="text">
            <strong>Company: </strong>
            {company}
          </p>
          <p className="text">
            <strong>Position: </strong>
            {position}
          </p>
        </div>

        <div className="profile__box">
          <h4 className="title">Contact</h4>
          <p className="text">
            <strong>Email: </strong>
            {email}
          </p>
          <p className="text">
            <strong>Phone: </strong>
            {phone}
          </p>
          <p className="text">
            <strong>Mobile: </strong>
            {mobile}
          </p>
        </div>

        <div className="profile__box">
          <h4 className="title">Social Links</h4>
          <p className="text">
            <strong>LinkedIn:</strong> {linkedInLink}
          </p>
          <p className="text">
            <strong>Portfolio:</strong> {portfolioLink}
          </p>
        </div>

        <div className="profile__box">
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

        <div className="profile__box">
          <h4 className="title">Additional Information</h4>
          <p className="text">
            <strong>Desired Salary:</strong> ${minSalary} - ${maxSalary}
          </p>
        </div>
      </div>

      <button onClick={handleEditClick} className="edit__button">
        Edit
      </button>
    </div>
  );
};

export default TalentDetails;
