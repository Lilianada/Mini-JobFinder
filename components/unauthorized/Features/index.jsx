import React from "react";
import "./style.scss";
import { BsCloudUpload, BsBriefcaseFill } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";

export default function TalentFeatures() {
  return (
    <section className="talentFeatures__section">
      <div className="features__container">
        <div className="section__header">
          <h2 className="section__title">Becoming a Minu Talent</h2>
          <h3 className="section__subtitle">Explore what you can do as a new talent in the rising.</h3>
        </div>
        <div className="features__cards">
            <div className="card">
          <div className="features__card">
              <IoCreate className="card__icon" />
              <h4 className="card__title">Create Account</h4>
              <p className="card__description">
                Sign up and create your talent account.
              </p>
            </div>
          </div>
            <div className="card">
          <div className="features__card">
              <BsCloudUpload className="card__icon" />
              <h4 className="card__title">Upload Resume</h4>
              <p className="card__description">
                Upload your resume to showcase your skills and experience.
              </p>
            </div>
          </div>
            <div className="card">
          <div className="features__card">
              <BsBriefcaseFill className="card__icon" />
              <h4 className="card__title">Find Job</h4>
              <p className="card__description">
                Browse through job listings and find your dream job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
