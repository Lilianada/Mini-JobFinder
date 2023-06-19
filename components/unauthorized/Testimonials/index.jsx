import React from 'react';
import Slider from 'react-slick';
import './style.scss';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien nisl. Proin ut hendrerit sapien.',
    company: 'ABC Company',
  },
  {
    id: 2,
    name: 'Jane Smith',
    testimonial: 'Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.',
    company: 'XYZ Corporation',
  },
  {
    id: 3,
    name: 'Jane Smith',
    testimonial: 'Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.',
    company: 'XYZ Corporation',
  },
  {
    id: 4,
    name: 'Jane Smith',
    testimonial: 'Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.',
    company: 'XYZ Corporation',
  },
  {
    id: 5,
    name: 'Jane Smith',
    testimonial: 'Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.',
    company: 'XYZ Corporation',
  },
  {
    id: 6,
    name: 'Jane Smith',
    testimonial: 'Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.',
    company: 'XYZ Corporation',
  },
  {
    id: 7,
    name: 'Jane Smith',
    testimonial: 'Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.',
    company: 'XYZ Corporation',
  },
  // Add more testimonials here
];

export default function TestimonialsSection() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <button className="testimonials__prev">Previous</button>,
      nextArrow: <button className="testimonials__next">Next</button>,
    };
  
    return (
      <section className="testimonials">
        <h2 className="testimonials__title">Testimonials</h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonials__slide">
              <div className="testimonials__content">
                <p className="testimonials__testimonial">{testimonial.testimonial}</p>
                <p className="testimonials__name">{testimonial.name}</p>
                <p className="testimonials__company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  }