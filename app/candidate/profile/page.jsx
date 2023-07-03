"use client";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import "./style.scss";
import { profile } from "../../../public/assets/images/logo.jpeg";
import { AiOutlineEnvironment } from "react-icons/ai";

export default function CandidateProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
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
    socialLinks: "https://www.linkedin.com/in/john-doe/",
    address: " Lorem Street, Ipsum, State, Country",
    phone: " 1234567890",
    mobile: " 1234567890",
    resume: null,
    skills: " HTML, CSS, JavaScript, React, Node.js",
  });

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform save operation here, e.g., send updated details to the server

    // After saving, exit edit mode
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

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
    socialLinks,
    address,
    phone,
    mobile,
    resume,
    skills,
  } = formData;

  return (
    <div className="profile__page">
      {isEditMode ? (
        <div className="profile__form">
          {/* <label htmlFor="profileImage">Profile Picture:</label> */}

          <div className="profile__image">
            <div className="edit__image">
              <MdEdit size={20} fill="#2563eb" />
              <input
                type="file"
                accept="image/*"
                name="profileImage"
                onChange={handleInputChange}
                className="form__input"
              />
            </div>
            {profileImage && (
              <img src={profileImage} alt="Profile" className="image" />
            )}
          </div>

          <div className="form__group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="bio">Bio:</label>
            <textarea
              name="bio"
              value={bio}
              onChange={handleInputChange}
              className="form__text"
            />
          </div>

          <div className="form__group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="text"
              name="dob"
              value={dob}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="gender">Gender:</label>
            <div className="gender__wrap">
              <label className="gender__label">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleInputChange}
                  className="gender__input"
                />{" "}
                Male
              </label>
              <label className="gender__label">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleInputChange}
                  className="gender__input"
                />{" "}
                Female
              </label>
            </div>
          </div>

          <div className="form__group">
            <label htmlFor="pronouns">Pronouns:</label>
            <select name="pronouns" id="">
                <option value="she/her">She/Her</option>
                <option value="he/him">He/Him</option>
                <option value="they/them">They/Them</option>
            </select>
          </div>

          <div className="form__group">
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={jobTitle}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="desiredSalary">Desired Salary:</label>
            <input
              type="text"
              name="desiredSalary"
              value={desiredSalary}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="socialLinks">Social Links:</label>
            <input
              type="text"
              name="socialLinks"
              value={socialLinks}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="resume">Update Resume:</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              name="resume"
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="skills">Skills:</label>
            <textarea
              name="skills"
              value={skills}
              onChange={handleInputChange}
              className="form__text"
            />
          </div>

          <button onClick={handleSaveClick} className="save__button">
            Save
          </button>
        </div>
      ) : (
        <div className="profile__details">
          <h4 className="note">
            This is a preview of your profile. Please review all your
            information before submitting.
          </h4>
          <div className="profile__top">
            <div className="profile__column">
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile__image"
                />
              )}

              <div className="profile__row">
                <p className="user__address">{jobTitle}</p>
                <p className="user__name">{name}</p>

                <p className="user__address">
                  <AiOutlineEnvironment />
                  {address}
                </p>
              </div>
            </div>
          </div>

          <div className="profile__bottom">
            <div className="profile__box">
              <h4 className="title">Personal Details</h4>
              <p className="text">{gender}</p>
              <p className="text">{dob}</p>
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
              <h4 className="title">Contact</h4>
              <p className="text">{email}</p>
              <p className="text">{phone}</p>
              <div className="profile__row"></div>
            </div>

            <div className="profile__box">
              <h4 className="title">Social Links</h4>
              <p className="text">
                <strong>Github:</strong> {" "}
                {socialLinks}</p>
              <p className="text">
                <strong>LinkedIn:</strong> {" "}
                {socialLinks}</p>
              <p className="text">
                <strong>Twitter:</strong> {" "}
                {socialLinks}</p>
              <p className="text">
                <strong>Portfolio:</strong> {" "}
                {socialLinks}</p>
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
                    <strong>Desired Salary:</strong> {" "}
                    {desiredSalary}</p>
                <p className="text">{}</p>
            </div>
          </div>

          <button onClick={handleEditClick} className="edit__button">
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
