"use client";
import React, { useState } from "react";
import { MdEdit, MdPeopleOutline } from "react-icons/md";
import "./style.scss";
import { AiOutlineEnvironment, AiOutlineMail } from "react-icons/ai";

export default function CompanyProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "Lovehoney Group",
    email: "career@lovehoneygroup.com",
    bio: "The Lovehoney Group is the world’s leading sexual wellbeing company. We offer exciting brands with innovative, high-quality sex toys, lingerie, and accessories in a smooth online shopping experience.\n\nLovehoney employs over 900 awesome, diverse & driven people throughout our 9 offices across the globe, celebrating a broad spectrum of talents in engineering, industrial design, sales, and marketing.\n\nWe are proud to be a company that thrives by doing things differently, challenging expectations and stereotypes while making a positive impact on our customers’ lives.",
    profileImage: "https://ouch-cdn2.icons8.com/-JZptPGuKRXkyuzdLeFBi71mdKqKYQHlVYx_4AQFhdQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png",
    teamSize: "500-1000",
    linkedInLink: "https://www.linkedin.com/company/lovehoney-group/",
    companySite: "https://www.lovehoneygroup.com/",
    address: "Berlin, Germany (hybrid)",
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
            <label htmlFor="pronouns">Team Size:</label>
            <select name="pronouns" className="form__select">
              <option value="1-10">1 - 10</option>
              <option value="10-50">10 - 50</option>
              <option value="50-100">50 - 100</option>
              <option value="100-500">100 - 500</option>
              <option value="500-1000">500 - 1000</option>
            </select>
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
              name="companySite"
              value={companySite}
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
              <h4 className="user__name">Welcome to {name}</h4>

              <div className="profile__row">
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

          <div className="profile__bottom">
            <div className="profile__box">
              <h4 className="title">About Us</h4>
              <p className="text">{bio}</p>
            </div>

            <div className="profile__box">
              <h4 className="title">Open Positions</h4>
              <p className="text">Nil </p>
              <p className="text"> </p>
            </div>

            <div className="profile__box">
              <h4 className="title">Social Links</h4>
              <p className="text">
                <strong>LinkedIn:</strong> {" "}
                <a href={linkedInLink} className="text">{linkedInLink}</a>
                
              </p>
              <p className="text">
                <strong>Portfolio:</strong> {" "}
                <a href={companySite} className="text">{companySite}</a>
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
