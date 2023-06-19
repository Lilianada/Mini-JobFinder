import React from "react";
import "./style.scss";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function ForgotPassword() {

  return (
    <section className="forgot-password__form">
      <div className="forgot-password__form__container">
        <div className="forgot-password__signin">
          <div className="header">
            <h1 className="title">Forgot Password</h1>
            <p className="subtitle">
              Enter your email address to reset your password.
            </p>
          </div>
          <form className="form__wrap">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input__field"
            />
            <button className="reset__btn">Reset Password</button>
          </form>
          <div className="signup__info">
            <p className="text">Remember your password?</p>{" "}
            <Link href={"/signin"} className="signin__text">
              Sign In
            </Link>
          </div>
        </div>
        <div className="forgot-password__signup">
          <h1 className="title">Hello Friend!</h1>
          <p className="subtitle">
            Discover new talents, become a talent, and connect with the community.
          </p>
        </div>
      </div>
    </section>
  );
}
