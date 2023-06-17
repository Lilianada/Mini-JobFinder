import React from "react";
import "./style.scss";
import Link from "next/link";

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
          Looking for a new role? Create a profile on Hired to connect directly with growing tech teams. Hiring? We're the go-to platform for sourcing the best tech talent out there.
          </h6>
        </div>
        <div className="hero__buttons">
        <Link href="/signup">
         <button className="hero__button">Find jobs</button> 
          </Link>
        <Link href="/signup">
         <button  className="hero__button_border">Hire talents</button> 
         </Link>
        </div>
      </div>
    </section>
  );
}
