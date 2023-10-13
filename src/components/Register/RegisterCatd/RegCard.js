import React from "react";
import "./RegCard.css";

const evryBody = [
  {
    name: "احسان عزیزی",
    src:"./imgs/1.png",
    text: "وقتی فهمیدم اسنپ به راننده‌هاش لاستیک با قیمت دولتی میده، راغب شدم که ثبت‌نام کنم ولی اصلا فرصت نمی‌کردم و همیشه یادم می‌رفت. الان با ثبت‌نام آنلاین خیلی راحت و سریع مدارکمو ارسال کردمو کارامو انجام دادم و بلاخره اسنپی شدم.",
  },
  {
    name: "محمد عزیزی",
    src:"./imgs/2.png",
    text: "بنده از کودکی دچار نوعی معلولیت بودم و چون خجالت می‌کشیدم که مشکلم رو‌ با بقیه به‌ صورت حضوری بیان کنم، تا به امروز نمی تونستم به صورت حظوری ثبت‌نام کنم. با ثبت‌نام آنلاین خیلی راحت کارها رو انجام و الان عضوی از خانواده اسنپم.",
  },
  {
    name: "داوود افتخاری",
    src:"./imgs/3.png",
    text: "من اینستاگرام باشگاه رانندگان اسنپ رو دنبال می‌کردم و تخفیف‌ها و طرح‌هایی که می ذاشتن همیشه برام جذاب بود، ولی بخاطر دور بودن خونه‌مون فرصت نمی شد ثبت‌نام کنم. با این ثبت‌نام آنلاین خیلی سریع کارام رو انجام دادم و الان تواسنپم.",
  },
  {
    name: "مهدی بابایی",
    src:"./imgs/4.png",
    text: "بخاطر ویروس کرونا، کارم رو از دست دادم و می‌ترسیدم که برای ثبت‌نام حضوری بیام. ولی الان با گوشیم خیلی راحت تمام کارای ثبت‌نام رو انجام دادم. خوشحالم که میتونم از این به بعد یک درآمد ثابت و مطمئن داشته باشم از کار قبلیمم بهتره.",
  },

];

const RegCard = () => {
  return (
    <div>
      <div className="Cardinfo">
        <div className="CardFlex">
            {evryBody.map((item,index) => (
                <div className="CardBody" key={index}>
                    <img src={require(`${item.src}`)}/>
                    <h5>{item.name}</h5>
                    <p>{item.text}</p>
                </div>
            ))}
   
        </div>
      </div>
    </div>
  );
};

export default RegCard;
