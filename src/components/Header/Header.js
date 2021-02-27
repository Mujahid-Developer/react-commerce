import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-section">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="nav-items">
        <nav>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/manage">Manage Inventory</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
