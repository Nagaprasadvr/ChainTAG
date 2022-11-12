import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuData } from "./MenuData";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo">
        <div className="w3-animate-opacity">
          <i
            className="fa-solid fa-fingerprint"
            style={{ color: "white", paddingRight: "15px" }}
          ></i>
        </div>
        ChainTAG
      </p>
      <ul className="nav-menu">
        {MenuData.map((menu, index) => {
          return (
            <li key={index}>
              <Link to={menu.url} className={menu.cName}>
                <i className={menu.icon} style={{ paddingRight: "10px" }}></i>
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
