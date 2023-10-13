import React from "react";
import "./FooterReg.css";
const FooterReg = () => {
  return (
    <div>
      <div className="footerSt">
        <ul style={{ borderBottom: "1px solid #fff" }}>
          <li className="ImgLi">
            <img src={require("../image/logofooter.png")} />
          </li>
          <li>دریافت اسنپ</li>
          <li>فرصت های شغلی</li>
          <li>قوانین و مقررات</li>
          <li>حریم خصوصی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
          <li>سوالات متداول</li>
        </ul>
        <div className="CopyRi">
          <p>
            کپی رایت تمامی حقوق مادی و معنوی این سرویس (وب سایت و اپلیکیشن های
            موبایل) متعلق به ایده گزین ارتباطات روماک (اسنپ) است.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterReg;
