import "./style.scss";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
    experienceLevel: "",
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
    <section className="jobPostings__section">
      <div className="section__header">
        <h2 className="section__title">Job Postings</h2>
        <p className="section__subtitle">Share the details of your job advert.</p>
      </div>
      <form className="jobPosting__form" onSubmit={handleSaveClick}>
        <div className="input__wrap">
          <label htmlFor="job-title">Job Title:</label>
          <input
            type="text"
            className="input__field"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="job-description">Job Description:</label>
          <Editor
            id="job-description"
            name="jobDescription"
            editorState={formData.jobDescription}
            onEditorStateChange={(editorState) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                jobDescription: editorState,
              }))
            }
            required
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="requirements">Requirements:</label>
          <Editor
            name="requirements"
            editorState={formData.requirements}
            onEditorStateChange={(editorState) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                requirements: editorState,
              }))
            }
            required
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="benefits">Benefits:</label>
          <Editor
            name="benefits"
            editorState={formData.benefits}
            onEditorStateChange={(editorState) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                benefits: editorState,
              }))
            }
            required
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            className="input__field"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            className="input__field"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="employment-type">Employment Type:</label>
          <select
            className="select__field"
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
        </div>

        <div className="input__wrap">
          <label htmlFor="experience-level">Experience Level:</label>
          <select
            className="select__field"
            id="experience-level"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Experience Level</option>
            <option value="entry-level">Entry Level</option>
            <option value="mid-level">Mid Level</option>
            <option value="senior-level">Senior Level</option>
          </select>
        </div>

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
