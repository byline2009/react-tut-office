import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { link: "home", name: "Home" },
  { link: "blog", name: "Blog" },
];

const Header = () => {
  return (
    <div className="header">
      <p className="title">Header my lesson page</p>
      <div className="header-bottom">
        <div className="navigation">
          <div className="nav-item" key="home">
            <Link to="home">
              <span>Home</span>
            </Link>
          </div>
          <div className="nav-item" key="blog">
            <Link to="blog">
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
