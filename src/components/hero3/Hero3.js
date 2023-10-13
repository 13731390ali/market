import React from "react";
import "./Hero3.css";

const intial = [
  {
    id: 201,
    title: "آسان",
    text: "برای استفاده از هرکدام از خدمات سوپراپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.",
    src: "./image/1.png",
  },
  {
    id: 202,
    title: "سریع",
    text: "برای استفاده از هرکدام از خدمات سوپراپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.",
    src: "./image/2.png",
  },
  {
    id: 203,
    title: "به صرفه",
    text: "برای استفاده از هرکدام از خدمات سوپراپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.",
    src: "./image/3.png",
  },
];
const Hero3 = () => {
  return (
    <div style={{ marginTop: "5rem",marginBottom:"18rem" }}>
      <div className="row heroPosi">
        <div className="col-lg-6">
          <div className="ImageHero">
            <img src={require("./image/super-app.jpg")} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="HeroText">
            <h3>سوپر اسنپ،پاسخی به تمام نیاز ها</h3>
            <span>
              اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی
              تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ
              راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن
              می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از
              جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و
              فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو
              هتل، پرداخت قبض و خرید شارژ استفاده کنید.
            </span>
          </div>
        </div>
        <div className="cardPosi">
            <div className="container">
            
          <div className="row" style={{justifyContent:"center"}}>
            {intial.map((item,index) => (
                <div className="col-12 col-lg-3 stcard" key={index}>
                    <img src={require(`${item.src}`)}/>
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
               </div>
            ))}
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
