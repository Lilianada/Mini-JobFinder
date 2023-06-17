"use client";

import React, { useState } from "react";
import UnauthorizedHeader from "@components/unauthorized/Header";
import "@styles/global.css";
import Hero from "@components/unauthorized/Hero";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  const isActive = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="main">
     <UnauthorizedHeader />
      <Hero/>
    </div>
  );
}
