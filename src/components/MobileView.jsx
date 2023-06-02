import React from "react";
import { AiOutlineClose } from "react-icons/ai";
function MobileView({ closeMenu }) {
  return (
    <div className="mobile-nav">
      <button type="button" className=" close-btn" onClick={closeMenu}>
        <AiOutlineClose />
      </button>
      <ul className="mobile-nav-links">
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
    </div>
  );
}

export default MobileView;
