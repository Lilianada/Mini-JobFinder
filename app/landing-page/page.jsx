"use client";
import React from "react";
import "@app/global.scss";
import UnauthorizedHeader from "@components/unauthorized/Header";
import Hero from "@components/unauthorized/Hero";
import Footer from "@components/unauthorized/Footer";
import CallToAction from "@components/unauthorized/CallToAction";
import BrowseJobs from "@components/unauthorized/Jobs";

export default function HomePage() {
  return (
    <section className="hero__main">
      <UnauthorizedHeader />
      <Hero />
      <BrowseJobs />
      <CallToAction />
      <Footer />
    </section>
  );
}
