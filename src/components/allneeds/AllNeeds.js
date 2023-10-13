import React from "react";
import "./AllNeeds.css";
import logo1 from "./image/logo1.svg";
import logo2 from "./image/logo2.svg";
import logo3 from "./image/logo3.svg";
import logo4 from "./image/logo4.svg";
import logo8 from "./image/logo8.svg";
import logo9 from "./image/logo9.svg";
import logo10 from "./image/logo10.svg";
import logo11 from "./image/logo11.svg";
import logo12 from "./image/logo12.svg";
import logo13 from "./image/logo13.svg";
import logo14 from "./image/logo14.svg";
import logo15 from "./image/logo15.svg";
import logo16 from "./image/logo16.svg";
import logo17 from "./image/logo17.svg";
import logo18 from "./image/logo18.svg";
import logo19 from "./image/logo19.svg";
import logo20 from "./image/logo20.svg";
import logo21 from "./image/logo21.svg";

const allneed = [
  { id: 101, title: "تاکسی اینترنتی", text: "امکان درخواست آنلاین خودرو با اسنپ", src: logo1 },
  { id: 102, title: "پیک موتوری", text: "حمل و نقل با اسنپ", src: logo2 },
  { id: 103, title: "درخواست وانت", text: "حمل و نقل با اسنپ", src: logo3 },
  { id: 104, title: "سفارش آنلاین غذا", text: "سفارش غذا، نان و شیرینی با اسنپ", src: logo4 },
  { id: 105, title: "سوپرمارکت آنلاین", text: "تهیه اقلام روزانه با اسنپ", src: logo1 },
  { id: 106, title: "اسنپ اکسپرس", text: "تحویل کمتر از ۳۰ دقیقه", src: logo2 },
  { id: 114, title: "بلیط قطار", text: "گردشگری با اسنپ", src: logo3 },
  { id: 107, title: "بلیط پرواز داخلی", text: "گردشگری با اسنپ", src: logo8 },
  { id: 115, title: "داروخانه", text: "خرید آنلاین بیمه با اسنپ", src: logo9 },
  { id: 108, title: "بلیط پرواز خارجی", text: "گردشگری با اسنپ", src: logo10 },
  { id: 116, title: "اسباب کشی منزل", text: "گردشگری با اسنپ", src: logo11 },
  { id: 109, title: "بیمه", text: "گردشگری با اسنپ", src: logo12 },
  { id: 117, title: "ثبت نام راننده", text: "گردشگری با اسنپ", src: logo13 },
  { id: 110, title: "رزرو هتل", text: "گردشگری با اسنپ", src: logo14 },
  { id: 118, title: "فروشگاه", text: "گردشگری با اسنپ", src: logo15 },
  { id: 111, title: "رزرو اقامتگاه", text: "گردشگری با اسنپ", src: logo16 },
  { id: 119, title: "سرمایه گذاری", text: "گردشگری با اسنپ", src: logo17 },
  { id: 112, title: "پزشک و مشاور", text: "گردشگری با اسنپ", src: logo18 },
  { id: 120, title: "سرویس اعتباری", text: "گردشگری با اسنپ", src: logo19 },
  { id: 113, title: "بلیط اتوبوس", text: "گردشگری با اسنپ", src: logo20 },
  { id: 121, title: "اسنپ!کلاب", text: "گردشگری با اسنپ", src: logo21 },
];

const AllNeeds = () => {
  return (
    <div>
      <div className="styleNeed">
        <h1>یک اپلیکیشن برای تمام نیاز ها</h1>
        <div className="row" style={{ margin: "auto" }}>
          {allneed.map((item, index) => (
            
              <div key={index} className="col-sm-4">
                <div className="styleCard">
                  <div className="row respon" style={{justifyContent:"space-between"}}>
                    <div className="col-2 ImageRes" >
                      <img src={item.src} style={{width:"62px"}}/>
                    </div>
                    <div className="col-sm-9 SPANres">
                      <h6>{item.title}</h6>
                      <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNeeds;
