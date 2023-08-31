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
          {menuItems.map((item) => {
            return (
              <div className="nav-item" key={item.name}>
                <Link>
                  <a href={item.link}>{item.name} </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
