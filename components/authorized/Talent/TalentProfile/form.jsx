import React from 'react';
import { MdEdit } from 'react-icons/md';
import './style.scss';

export default function TalentForm({
    formData, handleInputChange, handleSaveClick
}) {
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
    <div className="profile__form">
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
        placeholder="Enter your name"
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
        placeholder="Enter your email address"
      />
    </div>

    <div className="form__group">
      <label htmlFor="bio">Bio:</label>
      <textarea
        name="bio"
        value={bio}
        onChange={handleInputChange}
        className="form__text"
        placeholder="Enter your bio"
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
        placeholder="Enter your date of birth"
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
      <select name="pronouns" className="form__select">
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
        placeholder="Enter your job title"
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
        placeholder="Enter your LinkedIn link"
      />
    </div>

    <div className="form__group">
      <label htmlFor="socialLinks">Portfolio Link:</label>
      <input
        type="text"
        name="portfolioLink"
        value={portfolioLink}
        onChange={handleInputChange}
        className="form__input"
        placeholder="Enter your portfolio link"
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
        placeholder="Enter your address"
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
        placeholder="Enter your phone number"
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
        placeholder="Enter your mobile number"
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
        placeholder="Upload your resume"
      />
    </div>

    <div className="form__group">
      <label htmlFor="skills">Skills:</label>
      <input
        type="text"
        name="skills"
        value={skills}
        onChange={handleInputChange}
        className="form__input"
        placeholder="Enter your skills"
      />
    </div>
    <div className="form__group">
      <label htmlFor="skills">Education:</label>
      <input
        type="text"
        name="institute"
        value={institute}
        onChange={handleInputChange}
        className="form__input"
        placeholder="Enter your institute"
      />
      <input
        type="text"
        name="degree"
        value={degree}
        onChange={handleInputChange}
        className="form__input"
        placeholder="Enter your degree"
      />
    </div>

    <div className="form__group">
      <label htmlFor="skills">Experience:</label>
      <input
        type="text"
        name="company"
        value={company}
        onChange={handleInputChange}
        className="form__input"
        placeholder="Enter your company"
      />
      <input
        type="text"
        name="position"
        value={position}
        onChange={handleInputChange}
        className="form__input"
        placeholder="Enter your position"
      />
    </div>

    <div className="form__group">
      <label htmlFor="desiredSalary">Desired Salary:</label>
      <input
        type="number"
        name="minSalary"
        value={minSalary}
        onChange={handleInputChange}
        className="form__input"
        placeholder="Enter your desired minimum salary"
      />
      <input
        type="num"
        name="maxSalary"
        value={maxSalary}
        onChange={handleInputChange}
        className="form__input"
        placeholder="Enter your desired maximum salary"
      />
    </div>

    <button onClick={handleSaveClick} className="save__button">
      Save
    </button>
  </div>
  )
}
