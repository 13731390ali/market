import React from "react";
import "./CardSec.css";

const Advantages = [
  {
    title: "درآمد تضمینی + پاداش های ماهانه و هفتگی",
    src: "./img/1.png",
    text: "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.",
  },
  {
    title: "ساعت کاری دلخواه",
    src: "./img/2.png",
    text: "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.",
  },
  {
    title: "مزایا و خدمات باشگاه رانندگان",
    src: "./img/3.png",
    text: "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.",
  },
  {
    title: "کارفیکس",
    src: "./img/4.png",
    text: "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.",
  },
];

const CardSec = () => {
  return (
    <div className="container">
      <div className="row" style={{justifyContent:"center"}}>
        {Advantages.map((item,index) => (
          <div className="col-lg-5 resColl">
            <div className="backCard">
                <div className="row" style={{justifyContent:"space-between"}}>
                <div className="col-2 Image">
                    <img src={require(`${item.src}`)} />
                </div>
                <div className="col-9 TEXT">
                    <h6>{item.title}</h6>
                    <span>{item.text}</span>
                </div>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSec;
