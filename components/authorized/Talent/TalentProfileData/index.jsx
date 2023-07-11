import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineEnvironment } from "react-icons/ai";
require("dotenv").config();
import "./style.scss";

export default function TalentProfileData({ handleEditClick }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username,
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
  });

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${apiUrl}/talents`);
      const talentData = response.data;

      setFormData(talentData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="profile__page">
      <div className="profile__details">
        <h4 className="note">
          This is a preview of your profile. Please review all your information
          and make needed changes.
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
              <h4 className="user__name">{username}</h4>
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
              {institute}
            </p>
            <p className="text">
              <strong>Degree: </strong>
              {degree}
            </p>
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button onClick={handleEditClick} className="edit__button">
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
