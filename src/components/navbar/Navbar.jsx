import React, { useEffect, useState } from "react";
import h from "./NavBar.module.css";
import flag from "../../assets/imgs/flag.png";
import logo from "../../assets/imgs/logo.6335003.svg";
import axios from "axios";
import Links from "./Links/Links";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [nav, usenav] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/menu").then((resp) => {
      let allNav = resp.data.data;
      usenav(allNav);
    });
  });

  return (
    <div className="container">
      <div className={h.navbar}>
        <NavLink to="/">
          <img className={h.logo} src={logo} alt="" />
        </NavLink>
        <ul className={h.ul}>
          {nav.map((item, index) => {
            return (
              <Links slug={item.slug} key={index} title={item.title}></Links>
            );
          })}
        </ul>
        <div className={h.df}>
          <NavLink to="">
            <button type="button" className={h.shop}>
              <h1 className={h.shoptitle}>Купить Онлайн</h1>
            </button>
          </NavLink>
          <button type="button" className={h.lang}>
            <img src={flag} className={h.flag} alt="" />
            <h1 className={h.rus}>Русский</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
