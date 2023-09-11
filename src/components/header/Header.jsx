import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const menuItems = [
  { link: "home", name: "Home" },
  { link: "blog", name: "Blog" },
  { link: "todos", name: "To do List" },
];

const Header = () => {
  return (
    <div className="header">
      <p className="title">Header my lesson page</p>
      <div className="header-bottom">
        <Nav>
          <Nav.Item>
            <Link to="home" className="nav-link">
              <span>Home</span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="todos" className="nav-link">
              <span>Todo List</span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="useReducer" className="nav-link">
              <span>useReducer</span>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="useRef" className="nav-link">
              <span>useRef</span>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="useCallback" className="nav-link">
              <span>useCallBack</span>
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default Header;
