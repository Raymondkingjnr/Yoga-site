import React from "react";
import logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import MobileView from "./MobileView";

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  const closeMenu = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav>
      <main>
        <img src={logo} alt="logo" />
        <ul className="nav-links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">classes</a>
          </li>
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">contacts</a>
          </li>
        </ul>
      </main>
      <aside className="aside-btn">
        <button type="button" className="btn">
          sign in
        </button>
        <button type="button" className="btn">
          sign up
        </button>
      </aside>

      {/* responsive bar */}

      <button
        type="button"
        className=" open-nav"
        onClick={() => setOpenNav(!openNav)}
      >
        <RxHamburgerMenu />
      </button>
      {openNav && <MobileView closeMenu={closeMenu} />}
    </nav>
  );
}

export default Nav;
