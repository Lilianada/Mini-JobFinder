'use client';
import React from "react";
import "./global.scss";
require("dotenv").config();
import HomePage from "./landing-page/page";

export default function Home() {


  return (
    <div className="app">
       <HomePage/>
    </div>
  );
}
