"use client";
import React, { useState } from "react";
import "./style.scss";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Register() {
  const [activeTab, setActiveTab] = useState("talents");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="registeration__form">
      <div className="registeration__form_container">
        <div className="registeration__signin">
          <h1 className="title">Welcome To MinuJobs!</h1>
          <p className="subtitle">
            Become our member and get access to over  {activeTab === "talents" ? "a 100 companies" : "3,000 talents"}
            {" "} in Malta.
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
                {activeTab === "talents" ? "a talent" : "a company"}, kindly fill in your info below.
              </p>
            </div>
            <form className="form__wrap">
              {activeTab === "talents" && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input__field"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input__field"
                  />
                </>
              )}
              {activeTab === "companies" && (
                <>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="input__field"
                  />
                  <input
                    type="email"
                    name="companyEmail"
                    placeholder="Company Email"
                    className="input__field"
                  />
                </>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input__field"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input__field"
              />
              <div className="checkbox__field">
                <input type="checkbox" id="marketingEmails" name="marketingEmails" />
                <label htmlFor="marketingEmails">
                I've read and agree to the Privacy Policy and Terms & Conditions for {" "} {activeTab === "talents" ? "Talents" : "Companies"}.
                </label>
              </div>
              <button className="signup__btn">Sign Up</button>
            <div className="signin__info">
              <p className="text">Already have an account?</p>{" "}
              <Link href={"/login"} className="signin__text">
                Sign In
              </Link>
            </div>
            </form>
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
