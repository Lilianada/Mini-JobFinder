"use client"
import TestimonialsLayout from '@components/TestimonialsLayout';
import React, {useState} from 'react';


const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien nisl. Proin ut hendrerit sapien.",
      candidate: "ABC candidate",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
      candidate: "XYZ Corporation",
    },
    {
      id: 3,
      name: "Jane Smith",
      testimonial:
        "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
      candidate: "XYZ Corporation",
    },
    {
      id: 4,
      name: "Jane Smith",
      testimonial:
        "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
      candidate: "XYZ Corporation",
    },
    {
      id: 5,
      name: "Jane Smith",
      testimonial:
        "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
      candidate: "XYZ Corporation",
    },
    {
      id: 6,
      name: "Jane Smith",
      testimonial:
        "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
      candidate: "XYZ Corporation",
    },
    {
      id: 7,
      name: "Jane Smith",
      testimonial:
        "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
      candidate: "XYZ Corporation",
    },
    // Add more testimonials here
  ];
  
export default function CandidateTestimonials() {
  return (
    <TestimonialsLayout id={testimonialsData.id} name={testimonialsData.name} testimonial={testimonialsData.testimonial}  />
  )
}
