import React, { useState } from "react";
import "./navbar.css";
import logo from "./image/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [shnav, setShnav] = useState(false);

  const hadleOpen = () => {
    setShnav(true);
    console.log("ali");
  };
  const handleClose = () => {
    setShnav(false);
  };
  return (
    <div className="poss">
      <div className="row style-respons">
        <div className="col-2">
          <img
            onMouseEnter={() => {
              hadleOpen();
            }}
            onClick={() => {
              handleClose();
            }}
            src={require("./image/icons8-menu-20.png")}
          />
        </div>
        <div className="col-6">
          <img src={logo} />
        </div>

        <div className="nav-response">
          {shnav ? (
            <ul>
              <li>فرصت های شغلی</li>
              <NavLink to="/blog" style={{color:"#000"}}>
              <li>بلاگ</li>
              </NavLink>
              

              <li>باشگاه رانندگان</li>
              <NavLink to="/Register" style={{color:"#000"}}>
              <li>ثبت نام راننده اسنپ</li>
              </NavLink>
              
              <li>پنل سازمانی</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
          ) : null}
        </div>
      </div>
      <div className="bg-style">
        <div className="row style">
          <div className="col-lg-1">
            <div>
              <img src={logo} />
            </div>
          </div>
          <div className="col-lg-10 styleItems">
            <ul>
              <li>فرصت های شغلی</li>
              <NavLink to="/blog" style={{color:"#000"}}>
              <li>بلاگ</li>
              </NavLink>
              
              <li>باشگاه رانندگان</li>
              <NavLink to="/Register" style={{color:"#000"}}>
              <li>ثبت نام راننده اسنپ</li>
              </NavLink>
              
              <li>پنل سازمانی</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
