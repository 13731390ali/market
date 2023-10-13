import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="Sectionss">
      <div className="row">
        <div className="col-lg-6 col-backround" style={{ padding: "0",zIndex:"99" }}>
          <div className="backround">
            <h1>
              تجربه زندگی راحت تر، سریع تر و به صرفه تر با سوپراپلیکیشن اسنپ!
            </h1>
            <p>
              از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط
              سفر، رزرو هتل و... را میتوانید با اسنپ انجام دهید.
            </p>
            <input type="tel" placeholder="6789****09" />
            <button className="butt1">ارسال لینک</button>
            <div className="butt2">
              <NavLink to="/PageLogin">
              <button>ورود به اپلیکیشن اسنپ</button>
              </NavLink>
         
            </div>
          </div>
         
        </div>
        <div className="col-lg-6 hero-image" style={{ padding: "0" }}>
          <div className="style-img">
            <img style={{transform:"rotateY(180deg)"}} src={require("./image/intro_desktop.jpg")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
