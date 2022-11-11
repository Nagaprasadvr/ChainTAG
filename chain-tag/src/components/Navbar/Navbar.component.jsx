import React from "react";
import "./Navbar.css";
import { MenuData } from "./MenuData";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo">
        <img src="./ChainTAG.png" alt="" width="60px" height="60px" />
        ChainTAG
      </p>
      <ul className="nav-menu">
        {MenuData.map((menu, index) => {
          return (
            <li key={index}>
              <a href={menu.url} className={menu.cName}>
                <i className={menu.icon}></i> {menu.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
