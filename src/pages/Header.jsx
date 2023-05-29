import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HeaderLayout from "../components/HeaderLayout";
import BigCircle from "../components/BigCircle";
function Header() {
  return (
    <div>
      <BigCircle />
      <Nav />
      <Hero />
      <HeaderLayout />
    </div>
  );
}

export default Header;
