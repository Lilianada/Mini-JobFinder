"use client";
import React, { useState } from "react";
import "./style.scss";
import Link from "next/link";
import axios from "axios";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Register() {
  const [activeTab, setActiveTab] = useState("talents");
  const [talentFormData, setTalentFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    marketingEmails: false,
  });
  
  const [companyFormData, setCompanyFormData] = useState({
    companyName: "",
    companyEmail: "",
    password: "",
    confirmPassword: "",
    marketingEmails: false,
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
  
    if (activeTab === "talents") {
      setTalentFormData((prevTalentFormData) => ({
        ...prevTalentFormData,
        [name]: fieldValue,
      }));
    } else if (activeTab === "companies") {
      setCompanyFormData((prevCompanyFormData) => ({
        ...prevCompanyFormData,
        [name]: fieldValue,
      }));
    }
  };
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
  
    if (activeTab === "talents") {
      setTalentFormData((prevTalentFormData) => ({
        ...prevTalentFormData,
        [name]: value,
      }));
      setPasswordMatch(validatePassword(value));
    } else if (activeTab === "companies") {
      setCompanyFormData((prevCompanyFormData) => ({
        ...prevCompanyFormData,
        [name]: value,
      }));
      setPasswordMatch(validatePassword(value));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (activeTab === "talents") {
      handleTalentSub(talentFormData);
    } else if (activeTab === "companies") {
      handleCompanySub(companyFormData);
    }
  };

  const handleTalentSub = async (talentFormData) => {
  if (passwordMatch) {
    try {
      const response = await axios.post(
        "https://minujob.com/api/users",
        talentFormData
      );
      console.log(response.data); // Do something with the response
    } catch (error) {
      console.log(error); // Handle the error
    }
  }
};

const handleCompanySub = async (companyFormData) => {
  if (passwordMatch) {
    try {
      const response = await axios.post(
        "https://minujob.com/companies",
        companyFormData
      );
      console.log(response.data); // Do something with the response
    } catch (error) {
      console.log(error); // Handle the error
    }
  }
};


const validatePassword = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const isLengthValid = password.length >= 6;

  return hasUppercase && hasNumber && isLengthValid;
};

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section className="registeration__form">
      <div className="registeration__form_container">
        <div className="registeration__signin">
          <h1 className="title">Welcome To MinuJobs!</h1>
          <p className="subtitle">
            Become our member and get access to over{" "}
            {activeTab === "talents" ? "a 100 companies" : "3,000 talents"} in
            Malta.
          </p>
          <Link href={"/signin"} className="signin__btn">
            Sign In
          </Link>
        </div>

        <div className="registeration__signup">
          <div className="registeration__tabs">
            <div
              className={`tab ${activeTab === "talents" ? "active" : ""}`}
              onClick={() => handleTabChange("talents")}
            >
              For Talents
            </div>
            <div
              className={`tab ${activeTab === "companies" ? "active" : ""}`}
              onClick={() => handleTabChange("companies")}
            >
              For Companies
            </div>
          </div>
          <div className="signup__form">
            <div className="header">
              <h1 className="title">
                Sign Up
                {/* {activeTab === "talents" ? "Talent Sign Up" : "Company Sign Up"} */}
              </h1>
              <p className="subtitle">
                To join us as{" "}
                {activeTab === "talents" ? "a talent" : "a company"}, kindly
                fill in your info below.
              </p>
            </div>
            {activeTab === "talents" && (
              <form className="form__wrap" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input__field"
                  value={talentFormData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input__field"
                  value={talentFormData.email}
                  onChange={handleChange}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input__field"
                  value={talentFormData.password}
                  onChange={handlePasswordChange}
                />
                <div className="show__password">
                  <input
                    type="checkbox"
                    id="showPassword"
                    name="showPassword"
                    checked={showPassword}
                    onChange={handleTogglePasswordVisibility}
                  />
                  <label htmlFor="showPassword">Show Password</label>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input__field"
                  value={talentFormData.confirmPassword}
                  onChange={handlePasswordChange}
                />
                {!passwordMatch && (
                  <p className="error">
                    {talentFormData.password.length < 6 &&
                      "Password must be at least 6 characters long. "}
                    {!/[A-Z]/.test(talentFormData.password) &&
                      "Password must contain an uppercase letter. "}
                    {!/\d/.test(talentFormData.password) &&
                      "Password must contain a number. "}
                    {talentFormData.confirmPassword &&
                      talentFormData.password !== talentFormData.confirmPassword &&
                      "Password does not match. "}
                  </p>
                )}

                {/* <div className="checkbox__field">
                  <input
                    type="checkbox"
                    id="marketingEmails"
                    name="marketingEmails"
                    checked={talentFormData.marketingEmails}
                    onChange={handleChange}
                  />
                  <label htmlFor="marketingEmails">
                    I've read and agree to the Privacy Policy and Terms &
                    Conditions for Talents.
                  </label>
                </div> */}
                <button
                  className="signup__btn"
                  type="submit"
                  disabled={!passwordMatch}
                >
                  Sign Up as Talent
                </button>
              </form>
            )}
            {activeTab === "companies" && (
              <form className="form__wrap" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="input__field"
                  value={companyFormData.companyName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="companyEmail"
                  placeholder="Company Email"
                  className="input__field"
                  value={companyFormData.companyEmail}
                  onChange={handleChange}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input__field"
                  value={companyFormData.password}
                  onChange={handlePasswordChange}
                />
                <div className="show__password">
                  <input
                    type="checkbox"
                    id="showPassword"
                    name="showPassword"
                    checked={showPassword}
                    onChange={handleTogglePasswordVisibility}
                  />
                  <label htmlFor="showPassword">Show Password</label>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input__field"
                  value={companyFormData.confirmPassword}
                  onChange={handlePasswordChange}
                />
                {!passwordMatch && (
                  <p className="error">
                    {companyFormData.password.length < 6 &&
                      "Password must be at least 6 characters long. "}
                    {!/[A-Z]/.test(companyFormData.password) &&
                      "Password must contain an uppercase letter. "}
                    {!/\d/.test(companyFormData.password) &&
                      "Password must contain a number. "}
                    {companyFormData.confirmPassword &&
                      companyFormData.password !== companyFormData.confirmPassword &&
                      "Password does not match. "}
                  </p>
                )}

                {/* <div className="checkbox__field">
                  <input
                    type="checkbox"
                    id="marketingEmails"
                    name="marketingEmails"
                    checked={companyFormData.marketingEmails}
                    onChange={handleChange}
                  />
                  <label htmlFor="marketingEmails">
                    I've read and agree to the Privacy Policy and Terms &
                    Conditions for Companies.
                  </label>
                </div> */}
                <button
                  className="signup__btn"
                  type="submit"
                  disabled={!passwordMatch}
                >
                  Sign Up as Company
                </button>
              </form>
            )}
            <div className="socials__signin">
              <button className="google__signin_btn">
                <AiFillGoogleCircle size={28} fill="#c8ccda" />
              </button>
              <button className="facebook__signin_btn">
                <BsFacebook size={24} fill="#c8ccda" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
