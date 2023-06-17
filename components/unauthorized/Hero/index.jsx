import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero__component">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Hire
            <span className="primary__text"> a rising talent</span>
            <br />
            Find
            <span className="primary__text"> your next job</span>
          </h1>
          <h6 className="hero__description">
            Everyone has an opinion that needs to be heard, we provide you the
            platform that helps you get heard. Enjoy beautiful stories written
            by talented writers.
          </h6>
        </div>
        <div className="hero__buttons">
        <a href="/signup">
         <button className="hero__button">Find job</button> 
          </a>
        <a href="/signup">
         <button  className="hero__button_border">Hire talent</button> 
         </a>
        </div>
      </div>
    </section>
  );
}
