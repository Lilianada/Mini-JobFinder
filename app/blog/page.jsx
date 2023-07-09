"use client";
import BlogsPage from "@components/unauthorized/BlogList";
import Hero from "@components/unauthorized/Hero";
import Sidebar from "@components/unauthorized/SideBar";
import React from "react";

export default function Blog() {
  return (
    <div className="wrapper">
      <div className="body__grid">
        <BlogsPage />
        <Sidebar />
      </div>
    </div>
  );
}
