'use client';
import React from "react";
import "@app/global.scss";
import UnauthorizedHeader from "@components/unauthorized/Header";
import Hero from "@components/unauthorized/Hero";

export default function HomePage() {
  return (
    <div className="main">
        <section className="hero__main">
            <UnauthorizedHeader />
            <Hero/>
        </section>
    </div>
  );
}
