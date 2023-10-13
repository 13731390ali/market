import React from "react";
import './PageLogin.css'
const PageLogin = () => {
  return (
    <div>
      <div className=" Login">
        <h3>خوش آمدید!</h3>
        <p>
          لطفا شماره موبایلتان را وارد کنید تا بتوانیم با شما در ارتباط باشیم
        </p>
        <input type="tel" placeholder=""/>
        <p>با ثبت نام در اسنپ، <a href="#">قوانین و شرایط </a> را قبول می کنم.</p>
      </div>
    </div>
  );
};

export default PageLogin;
