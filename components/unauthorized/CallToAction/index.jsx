import React from "react";
import "./style.scss";
import Image from "next/image";
import backdrop from "../../../public/assets/images/cta-bg.svg";

export default function CallToAction() {
  return (
    <section className="cta__component">
      <div className="cta__container" style={{
        backgroundImage: `url('./assets/images/cta-bg.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} >

        <div className="cta__description">
          <h3 className="description">
            Recruiting online that helps you
            <br />
            find the right talent.
          </h3>

          <button className="cta__button">Find talents now</button>
        </div>
      </div>
    </section>
  );
}
