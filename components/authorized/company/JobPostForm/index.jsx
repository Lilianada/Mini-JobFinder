import "./style.scss" ;
import React, { useState } from "react";

const JobPostForm = () => {
  const [isEditMode, setIsEditMode] = useState(true);
  const initialFormData = {
    jobTitle: "",
    jobDescription: "",
    location: "",
    requirements: "",
    benefits: "",
    salary: "",
    employmentType: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    // Add logic to save the job posting to the database
    setIsEditMode(false);
    setFormData(initialFormData); // Clear the form fields
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="job-postings__section">
      <h2 className="section__title">Create Job Posting</h2>
      <form className="job-posting__form" onSubmit={handleSaveClick}>
        <label htmlFor="job-title">Job Title:</label>
        <input
          type="text"
          id="job-title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />

        <label htmlFor="job-description">Job Description:</label>
        <textarea
          id="job-description"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label htmlFor="requirements">Requirements:</label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="benefits">Benefits:</label>
        <textarea
          id="benefits"
          name="benefits"
          value={formData.benefits}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />

        <label htmlFor="employment-type">Employment Type:</label>
        <select
          id="employment-type"
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          required
        >
          <option value="">Select Employment Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="contract">Contract</option>
        </select>

        {/* Add more necessary fields for a job posting */}
        
        {isEditMode ? (
          <button type="submit" className="submit__button">
            Create Job Posting
          </button>
        ) : (
          <button type="button" className="edit__button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </form>
    </section>
  );
};

export default JobPostForm;
