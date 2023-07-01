"use client";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import "./style.scss";

export default function CandidateProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [bio, setBio] = useState(
    "I am a passionate candidate seeking job opportunities."
  );
  const [profileImage, setProfileImage] = useState(null);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform save operation here, e.g., send updated details to the server

    // After saving, exit edit mode
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "bio") {
      setBio(value);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

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
                onChange={handleImageUpload}
                className="edit__input"
              />
            </div>
            {profileImage && (
              <img src={profileImage} alt="Profile" className="image" />
            )}
          </div>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="edit__input"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="edit__input"
          />

          <label htmlFor="bio">Bio:</label>
          <textarea name="bio" value={bio} onChange={handleInputChange} className="edit__bio"/>

          <button onClick={handleSaveClick} className="edit__button">Save</button>
        </div>
      ) : (
        <div className="profile__form">
          {profileImage && (
            <img src={profileImage} alt="Profile" className="profile__image" />
          )}

          <p className="profile__text">
            <strong>Name:</strong> {name}
          </p>
          <p className="profile__text">
            <strong>Email:</strong> {email}
          </p>
          <p className="profile__text">
            <strong>Bio:</strong> {bio}
          </p>
          <p className="profile__text">
            <strong>DOB:</strong> {bio}
          </p>

          <button onClick={handleEditClick} className="edit__button">
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
