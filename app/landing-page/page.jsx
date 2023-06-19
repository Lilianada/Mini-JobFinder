"use client";
import React from "react";
import "@app/global.scss";
import UnauthorizedHeader from "@components/unauthorized/Header";
import Hero from "@components/unauthorized/Hero";
import Footer from "@components/unauthorized/Footer";
import CallToAction from "@components/unauthorized/CallToAction";
import BrowseJobs from "@components/unauthorized/Jobs";
import TalentFeatures from "@components/unauthorized/Features";
import TestimonialsSection from "@components/unauthorized/Testimonials";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomePage() {
  return (
    <section className="main">
      <div className="hero__main">
        <UnauthorizedHeader />
        <Hero />
      </div>
      <TalentFeatures/>
      <BrowseJobs />
      <TestimonialsSection/>
      <CallToAction />
      <Footer />
    </section>
  );
}
