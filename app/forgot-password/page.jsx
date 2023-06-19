import React from "react";
import "./style.scss";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function ForgotPassword() {

  return (
    <section className="forgot__password_form">
      <div className="form__container">
        <div className="password__form">
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
          <div className="signup__info">
            <p className="text">Remember your password?</p>{" "}
            <Link href={"/signin"} className="signin__text">
              Sign In
            </Link>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
}
