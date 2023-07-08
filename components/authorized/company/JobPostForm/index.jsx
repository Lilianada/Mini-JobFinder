import React, { useState } from "react";
import axios from "axios";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./style.scss";

const JobPostForm = () => {
  const [isEditMode, setIsEditMode] = useState(true);
  const initialFormData = {
    jobTitle: "",
    jobDescription: "",
    location: "",
    industry: "",
    requirements: "",
    benefits: "",
    salaryMin: "",
    salaryMax: "",
    salaryType: "",
    employmentType: "",
    jobLevel: "",
    educationExperience: "",
    experience: "",
    deadline: "",
    qualifications: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://minujob.com/api/job-listings",
        formData
      );
      console.log(response.data); // Handle the response
      setIsEditMode(false);
      setFormData(initialFormData);
    } catch (error) {
      console.error(error); // Handle the error
    }
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
        <p className="section__subtitle">
          Share the details of your job advert.
        </p>
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
          <textarea
            name="jobDescription"
            className="text__field"
            cols="30"
            rows="10"
            value={formData.jobDescription}
            onChange={handleChange}
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
          <label htmlFor="qualifications">Qualifications:</label>
          <Editor
            name="qualifications"
            editorState={formData.qualifications}
            onEditorStateChange={(editorState) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                qualifications: editorState,
              }))
            }
            required
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="education-experience">Education & Experience:</label>
          <Editor
            name="educationExperience"
            editorState={formData.educationExperience}
            onEditorStateChange={(editorState) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                educationExperience: editorState,
              }))
            }
            required
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="industry">Industry:</label>
          <input
            type="text"
            className="input__field"
            name="location"
            value={formData.industry}
            onChange={handleChange}
            required
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
          <label htmlFor="salary-type">Salary Type:</label>
          <select
            className="select__field"
            id="salary-type"
            name="salaryType"
            value={formData.salaryType}
            onChange={handleChange}
            required
          >
            <option value="">Select Salary Type</option>
            <option value="hourly">Hourly</option>
            <option value="yearly">Yearly</option>
          </select>
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
            name="jobLevel"
            value={formData.jobLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Experience Level</option>
            <option value="entry-level">Entry Level</option>
            <option value="mid-level">Mid Level</option>
            <option value="senior-level">Senior Level</option>
          </select>
        </div>

        <div className="input__wrap">
          <label htmlFor="experience">Years of Experience:</label>
          <input
            type="number"
            className="input__field"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input__wrap">
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            className="input__field"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>

        {isEditMode ? (
          <button type="submit" className="submit__button">
            Create Job Posting
          </button>
        ) : (
          <button
            type="button"
            className="edit__button"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </form>
    </section>
  );
};

export default JobPostForm;
