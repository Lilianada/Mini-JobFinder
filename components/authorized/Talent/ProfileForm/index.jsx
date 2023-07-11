import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import "./style.scss";

export default function TalentProfileForm() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const initialFormData = {
    id: "",
    username: "",
    email: "",
    bio: "",
    photo: null,
    dob: "",
    gender: "",
    pronouns: "",
    jobTitle: "",
    minSalary: "",
    maxSalary: "",
    linkedin: "",
    portfolio: "",
    address: "",
    phone: "",
    mobile: "",
    resume: null,
    skills: "",
    institute: "",
    degree: "",
    company: "",
    position: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(process.env.NEXT_PUBLIC_API_URL)
      // Configure the request headers to include the JWT token
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setIsLoading(true);
      // console.log(config);
      const response = await axios.get(`${apiUrl}/users/me`, header);
      const userData = response.data;
      console.log(userData);
      console.log(userData.username);
      console.log("fetched");
      console.log(apiUrl);
      //Populate the form data with user name and email
      setFormData((prevFormData) => ({
        ...prevFormData,
        id: userData.id,
        username: userData.username,
        email: userData.email,
      }));
    } catch (error) {
      console.error(error);
      console.log("error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file); // Create object URL for the file
      
      setFormData((prevState) => ({
        ...prevState,
        [name]: imageUrl, // Store the object URL in the form state
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };  

  const handleSaveClick = async (e) => {
    e.preventDefault();
    // Create the payload object
    const payload = {
      username: formData.username,
      email: formData.email,
      bio: formData.bio,
      photo: formData.photo,
      dob: formData.dob,
      gender: formData.gender,
      pronouns: formData.pronouns,
      jobTitle: formData.jobTitle,
      minSalary: formData.minSalary,
      maxSalary: formData.maxSalary,
      linkedin: formData.linkedin,
      portfolio: formData.portfolio,
      address: formData.address,
      phone: formData.phone,
      mobile: formData.mobile,
      resume: formData.resume,
      skills: formData.skills,
      institute: formData.institute,
      degree: formData.degree,
      company: formData.company,
      position: formData.position,
    };

    console.log("Data to be sent:", payload); // Log the data

    try {
      setIsLoading(true);
      const response = await axios.post(`${apiUrl}/talents/`, payload);
      console.log(response.data); // Handle the response
      setFormData(initialFormData);
      setTimeout(() => {
        setIsSuccess(true);
      }, 3000);
      setIsEditMode(false);
    } catch (error) {
      console.error(error); // Handle the error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="profile__page">
      <div className="profile__form">
        <div className="profile__image">
          <div className="edit__image">
            <MdEdit size={20} fill="#2563eb" />
            <input
              type="file"
              accept="image/*"
              name="photo"
              onChange={handleInputChange}
              className="form__input"
            />
          </div>
          {formData.photo && (
            <img src={formData.photo} alt="Profile" className="image" />
          )}
        </div>
        <div className="form__group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
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
            value={formData.email}
            onChange={handleInputChange}
            className="form__input"
            placeholder="Enter your email address"
          />
        </div>

        <div className="form__group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="form__text"
            placeholder="Enter your bio"
          />
        </div>

        <div className="form__group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
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
                checked={formData.gender === "male"}
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
                checked={formData.gender === "female"}
                onChange={handleInputChange}
                className="gender__input"
              />{" "}
              Female
            </label>
          </div>
        </div>

        <div className="form__group">
          <label htmlFor="pronouns">Pronouns:</label>
          <select
            name="pronouns"
            className="form__select"
            value={formData.pronouns}
            onChange={handleInputChange}
          >
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
            value={formData.jobTitle}
            onChange={handleInputChange}
            className="form__input"
            placeholder="Enter your job title"
          />
        </div>

        <div className="form__group">
          <label htmlFor="socialLinks">LinkedIn Link:</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
            className="form__input"
            placeholder="Enter your LinkedIn link"
          />
        </div>

        <div className="form__group">
          <label htmlFor="socialLinks">Portfolio Link:</label>
          <input
            type="link"
            name="portfolio"
            value={formData.portfolio}
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
            value={formData.address}
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
            value={formData.phone}
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
            value={formData.mobile}
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
            value={formData.skills}
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
            value={formData.institute}
            onChange={handleInputChange}
            className="form__input"
            placeholder="Enter your institute"
          />
          <input
            type="text"
            name="degree"
            value={formData.degree}
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
            value={formData.company}
            onChange={handleInputChange}
            className="form__input"
            placeholder="Enter your company"
          />
          <input
            type="text"
            name="position"
            value={formData.position}
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
            value={formData.minSalary}
            onChange={handleInputChange}
            className="form__input"
            placeholder="Enter your desired minimum salary"
          />
          <input
            type="num"
            name="maxSalary"
            value={formData.maxSalary}
            onChange={handleInputChange}
            className="form__input"
            placeholder="Enter your desired maximum salary"
          />
        </div>

        <button onClick={handleSaveClick} className="save__button">
          {
            isLoading ? (
              <div className="spinner"> 
              </div>
            ) : "Save"
          }
        </button>
      </div>
    </div>
  );
}
