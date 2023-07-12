import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../img/logo.png";

import Menu from "./Menu";

function Header() {
  const [menuCilck, setMenuClick] = useState(false);
  function handleMenuClick() {
    setMenuClick(!menuCilck);
  }
  return (
    <header>
      <Link to="/">
        <img src={logo} />
      </Link>
      <span className="title">COZ Shopping</span>
      <div className="burger">
        <div className="menuIcon" onClick={handleMenuClick}>
          <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
        {menuCilck ? <Menu /> : null}
      </div>
    </header>
  );
}

export default Header;
