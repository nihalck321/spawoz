import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav har">
      <div className="nav_container">
        <div className="navbar">
          <div className="logo">Nihal</div>
          <div className="menu_toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin " : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin " : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav_overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav_links">
            <li className="nav_items">
              <Link to="/" onClick={() => setNavOpen(!navOpen )} style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.8s" : "0s",
              }}>Home</Link>
              <div className="nav_item_wrapper"></div>
            </li>
            <li className="nav_items">
              <Link to="/industries" onClick={() => setNavOpen(!navOpen )} style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.9s" : "0s",
              }}>Industries</Link>
              <div className="nav_item_wrapper"></div>
            </li>
            <li className="nav_items">
              <Link to="/ourworks" onClick={() => setNavOpen(!navOpen )} style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1s" : "0s",
              }}>Our Works</Link>
              <div className="nav_item_wrapper"></div>
            </li>
            <li className="nav_items">
              <Link to="/blog" onClick={() => setNavOpen(!navOpen )} style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.1s" : "0s",
              }}>Blog</Link>
              <div className="nav_item_wrapper"></div>
            </li>
            <li className="nav_items">
              <Link to="/contact" onClick={() => setNavOpen(!navOpen )} style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.2s" : "0s",
              }}>Contact</Link>
              <div className="nav_item_wrapper"></div>
            </li>
          </ul>
          <div className="nav_footer">
            <div className="location">
                <span>Calicut, india</span>
            </div>
            <div className="nav_social_media">
                <ul>
                    <li>
                        <a href="#fg">Instagram</a>
                    </li>
                    <li>
                        <a href="#fab">Facebook</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
