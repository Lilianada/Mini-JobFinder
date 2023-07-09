"use client"
import React from "react";
import Footer from "@components/unauthorized/Footer";
import UnauthorizedHeader from "@components/unauthorized/Header";
import PrivacyPolicy from "@components/unauthorized/PrivacyPolicy";


export default function PrivacyPage() {
  return (
    <main className="main">
      <UnauthorizedHeader />
      <PrivacyPolicy />
      <Footer />
    </main>
  )
}
