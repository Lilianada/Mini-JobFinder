"use client"
import Footer from "@components/unauthorized/Footer";
import UnauthorizedHeader from "@components/unauthorized/Header";
import Terms from "@components/unauthorized/Terms";
import React from "react";

export default function TermsPage() {
  return (
    <main className="main">
      <UnauthorizedHeader />
      <Terms />
      <Footer />
    </main>
  );
}
