import React, {useState} from 'react';
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
    const [activeSlide, setActiveSlide] = useState(0);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: (current) => setActiveSlide(current),
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
        <div className="testimonials__navigation">
          <button className="testimonials__prev" onClick={() => setActiveSlide(activeSlide - 1)}>
            Previous
          </button>
          <button className="testimonials__next" onClick={() => setActiveSlide(activeSlide + 1)}>
            Next
          </button>
        </div>
      </section>
    );
  }