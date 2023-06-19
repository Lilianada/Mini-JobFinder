import React from "react";
import "./style.scss";
import Link from "next/link";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Login() {

  return (
    <section className="login__form">
      <div className="login__form__container">
        <div className="login__signin">
          <div className="header">
            <h1 className="title">Sign In</h1>
            <p className="subtitle">
              To keep connected with us please login with your personal info.
            </p>
          </div>
          <form className="form__wrap">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input__field"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input__field"
            />
            <div className="flex">
              <div className="remember__me">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember" className="remember__me__text">
                  Remember Me
                </label>
              </div>
              <Link href="/" className="forgot__password">
                Forgot your password?
              </Link>
            </div>
            <button className="signin__btn">Sign In</button>
           
            <div className="signup__info">
              <p className="text">Do not have an account?</p>{" "}
              <Link href={"/signup"} className="signup__text">
                Sign Up
              </Link>
            </div>
          </form>
          <div className="socials__signin">
              <button className="google__signin_btn">
                <AiFillGoogleCircle size={28} fill="#c8ccda" />
              </button>
              <button
                className="facebook__signin_btn"
              >
                <BsFacebook size={24} fill="#c8ccda" />
              </button>
            </div>
        </div>
        <div className="login__signup">
          {/* <img src={logo} alt="Logo" /> */}
          <h1 className="title">Hello Friend!</h1>
          <p className="subtitle">
            Discover new talents, become a talent, and connect with the
            community.
          </p>
        </div>
      </div>
    </section>
  );
}
