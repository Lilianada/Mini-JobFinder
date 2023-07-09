"use client";
import TestimonialsLayout from "@components/authorized/TestimonialsLayout";
import React, { useState } from "react";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget sapien nisl. Proin ut hendrerit sapien.",
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 3,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 4,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 5,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 6,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 7,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 8,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 9,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 10,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },
  {
    id: 11,
    name: "Jane Smith",
    testimonial:
      "Sed quis mauris quis nunc interdum tristique. Vivamus posuere enim eget purus placerat, eget molestie ex iaculis.",
  },

  // Add more testimonials here
];

export default function CandidateTestimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonial = testimonialsData.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  const pageNumbers = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextClick = () => {
    if (currentPage < pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <TestimonialsLayout
      data={currentTestimonial}
      handleClick={handleClick}
      handleNextClick={handleNextClick}
      handlePreviousClick={handlePreviousClick}
      currentPage={currentPage}
      pageNumbers={pageNumbers}
    />
  );
}
