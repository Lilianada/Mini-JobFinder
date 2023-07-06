"use client";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import "./style.scss";
import { profile } from "../../../public/assets/images/logo.jpeg";
import { AiOutlineEnvironment } from "react-icons/ai";

export default function CompanyProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "AliStudio",
    email: "career@aliStudio.com",
    bio: "The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency. The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.",
    profileImage:
      "https://ouch-cdn2.icons8.com/-JZptPGuKRXkyuzdLeFBi71mdKqKYQHlVYx_4AQFhdQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png",
    teamSize: "50-100",
    linkedInLink: "https://www.linkedin.com/in/john-doe/",
    companySite: "https://www.johndoe.com/",
    address: " Lorem Street, Ipsum, State, Country",
    phone: " 1234567890",
    mobile: " 1234567890",
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
    teamSize,
    linkedInLink,
    companySite,
    address,
    phone,
    mobile,
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
            <label htmlFor="dob">Team Size</label>
            <input
              type="text"
              name="dob"
              value={dob}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="teamSize">Team Size:</label>
            <div className="teamSize__wrap">
              <label className="teamSize__label">
                <input
                  type="radio"
                  name="teamSize"
                  value="teamSize"
                  checked={teamSize === "1-10"}
                  onChange={handleInputChange}
                  className="teamSize__input"
                />{" "}
                1-10
              </label>
              <label className="teamSize__label">
                <input
                  type="radio"
                  name="teamSize"
                  value="10-50"
                  checked={teamSize === "10-50"}
                  onChange={handleInputChange}
                  className="teamSize__input"
                />{" "}
                10-50
              </label>
              <label className="teamSize__label">
                <input
                  type="radio"
                  name="teamSize"
                  value="50-100"
                  checked={teamSize === "50-100"}
                  onChange={handleInputChange}
                  className="teamSize__input"
                />{" "}
                10-50
              </label>
            </div>
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
            <label htmlFor="socialLinks">LinkedIn Link:</label>
            <input
              type="text"
              name="linkedInLink"
              value={linkedInLink}
              onChange={handleInputChange}
              className="form__input"
            />
          </div>

          <div className="form__group">
            <label htmlFor="socialLinks">Company Link:</label>
            <input
              type="text"
              name="portfolioLink"
              value={portfolioLink}
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
          
          <button onClick={handleSaveClick} className="save__button">
            Save
          </button>
        </div>
      ) : (
        <div className="profile__details">
          <h4 className="note">
            This is a preview of your company's profile. Please review all the
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
                  <h4 className="user__name">Welcome to {name}</h4>
                  <p className="user__address">
                    <AiOutlineEnvironment />
                    {address}
                  </p>
              </div>
            </div>
          </div>

          <div className="profile__bottom">
            {/* <div className="profile__box">
              <h4 className="title">Welcom to {name}</h4>
              <p className="text">
                <strong>Team Size:</strong> {teamSize}
              </p>
            </div> */}

            <div className="profile__box">
              <h4 className="title">About Us</h4>
              <p className="text">{bio}</p>
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
                <strong>LinkedIn:</strong> {linkedInLink}
              </p>
              <p className="text">
                <strong>Portfolio:</strong> {companySite}
              </p>
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
