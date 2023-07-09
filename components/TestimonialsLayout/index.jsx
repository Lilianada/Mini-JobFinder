import React from "react";
import "./style.scss";

export default function TestimonialsLayout({ id, name, testimony, company}) {
  return (
    <section className="testimonials__section">
      <div className="testimonials__container">
        <div className="section__header">
          <h2 className="section__title">Testimonials</h2>
          <p className="section__subtitle">
            Let's know what our clients say about us
          </p>
        </div>
        <div className="testimonials__navigation">
          <button className="testimonials__prev" onClick={goToPrevSlide}>
            <HiOutlineArrowNarrowLeft />
          </button>
          <button className="testimonials__next" onClick={goToNextSlide}>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonials__slide">
            <div className="testimonials__content">
              <FaQuoteLeft className="icon__left" />
              <div className="content__img">
                <img
                  src="http://themes.potenzaglobalsolutions.com/html/jobber/images/avatar/04.jpg"
                  alt="testifier profile"
                />
              </div>
              <p className="testimonials__name">{testimonial.name}</p>
              <p className="testimonials__company">{testimonial.company}</p>
              <p className="testimonials__testimonial">
                {testimonial.testimonial}
              </p>
              <FaQuoteRight className="icon__right" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
