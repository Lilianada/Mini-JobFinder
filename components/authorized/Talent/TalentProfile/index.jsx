"use client";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { AiOutlineEnvironment } from "react-icons/ai";
import "./style.scss";
import TalentForm from "./form";
import TalentDetails from "./details";

export default function TalentProfileInfo() {
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
    minSalary: "80,000",
    maxSalary: "120,000",
    linkedInLink: "https://www.linkedin.com/in/john-doe/",
    portfolioLink: "https://www.johndoe.com/",
    address: " Lorem Street, Ipsum, State, Country",
    phone: " 1234567890",
    mobile: " 1234567890",
    resume: null,
    skills: " HTML, CSS, JavaScript, React, Node.js",
    institute: "University of Toronto, Canada",
    degree: " Bachelor of Art",
    company: "Google",
    position: "Frontend Developer",
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

  return (
    <div className="profile__page">
      {isEditMode ? (
       <TalentForm formData={formData} handleInputChange={handleInputChange} handleSaveClick={handleSaveClick} />
      ) : (
       <TalentDetails formData={formData} handleEditClick={handleEditClick} />
      )}
    </div>
  );
}
