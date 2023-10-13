import React, { useRef, useState, useEffect } from "react";
// import "./CarouselBox.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  //   CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./Register.css";
import Document from "./RegisterLogin/Document";
import RegCard from "./RegisterCatd/RegCard";
import FooterReg from "./footerReg/FooterReg";

const items = [
  {
    src: "./image/2.jpg",
    altText: "",
    caption: "",
    id: 1,
  },
  {
    src: "./image/3.jpg",
    altText: "",
    caption: "",
    id: 2,
  },
  {
    src: "./image/4.jpg",
    altText: "",
    caption: "",
    id: 3,
  },
  {
    src: "./image/5.jpg",
    altText: "",
    caption: "",
    id: 4,
  },
  {
    src: "./image/6.jpg",
    altText: "",
    caption: "",
    id: 5,
  },
];

const Register = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [place, setPlace] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef(0);

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  //   const goToIndex = (newIndex) => {
  //     if (animating) return;
  //     setActiveIndex(newIndex);
  //   };

  const toggleClass = () => {
    setPlace(!place);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        style={{ position: "relative" }}
      >
        <div style={{ position: "relative", width: "80%", margin: "0 auto" }}>
          <img
            src={require(`${item.src}`)}
            style={{ width: "100%", height: "200px" }}
            alt={item.altText}
          />

          <span className="nextSt">
            <img
              direction="next"
              directionText="Next"
              onClick={next}
              src={require("./image/icons8-next-30.png")}
            />
          </span>
          <span className="prevSt">
            <img
              direction="prev"
              directionText="Previous"
              onClick={previous}
              src={require("./image/icons8-previous-30.png")}
            />
          </span>
        </div>
        <CarouselCaption
          key={item.id}
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <div className="row" style={{ position: "relative" }}>
        <div className="col-sm-12 col-lg-5 col1" style={{ height: "35rem" }}>
          <div className="login">
            <h3>همین حالا ثبت نام کنید!</h3>
            <label>
              لطفاشماره موبایلتان را وارد کنید تا بتوانیم کد تائید را برایتان
              ارسال کنیم.
            </label>
            <input
              onClick={toggleClass}
              type="tel"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={place ? "مثلا:0912549874" : "شماره موبایل"}
            />

            <span>
              پر کردن فرم ثبت نام به معنی موافقت با
              <a href="#">قوانین و مقررات</a> اسنپ است.
            </span>

            <button
              disabled={!inputValue}
              style={{ backgroundColor: inputValue ? "green" : "#989e98" }}
            >
              ثبت نام سواری،وانت و موتوری
            </button>
            <span>
              شما می توانید از بخش{" "}
              <a href="#" style={{ color: "#77c356" }}>
                پیگیری ثبت نام
              </a>
              ، وضعیت ثبت نام خود را دنبال کنید.
            </span>
          </div>
        </div>
        <div className="col-sm-12 col-lg-7" style={{ height: "35rem" }}>
          <div className="LoginLeft">
            <div className="row">
              <div>
                <img src={require("./image/1.svg").default} />
              </div>
              <div className="content">
                <h4>کتر از 10 دقیقه ثبت نام کنید و به ناوگان اسنپ بپیوندید!</h4>
                <p>
                  بدون نیاز به مراجعه حضوری، از طریق این صفحه، تمام مراحل
                  ثبت‌نام را اینترنتی انجام دهید. شرایط و مدارک لازم را از
                  همینجا بخوانید.
                </p>
              </div>
              <div>
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                  {...args}
                  className="carpos"
                  style={{ marginTop: "20px" }}
                >
                  {/* <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  /> */}

                  {slides}

                  {/* <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                  /> */}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="row allCard">
          <div className="col-sm-12 col-lg-4 col">
            <div className="cardBg">
              <img src={require("./image/2.svg").default} />
              <h3>شرط پیوستن به ناوگان اسنپ!</h3>
              <p>-سه ماه از تاریخ صدور گواهینامه گذشته باشد.</p>
              <p>-یک گوشی هوشمند در اختیار داشته باشید.</p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="cardBg">
              <img src={require("./image/3.svg").default} />
              <h3>مزایای ثبت نام شما در اسنپ!</h3>
              <p>-درآمد تضمینی + ساعت کاری دلخواه</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "12rem" }}>
        <Document />
      </div>

      <div className="information">
        <h3>نکات مهمی که قبل از ثبت‌نام در ناوگان اسنپ خودرو باید بدانید:</h3>
        <ul>
          <li>-این پنل ویژه ثبت‌نام رانندگان جدید است.</li>
          <li>-تمامی مدارک مورد نیاز متعلق به یک نفر باشد.</li>
          <li>-تصویر مدرک خوانا و واضح باشد.</li>
          <li>
            -در صورت خروج از پنل ثبت‌نام اینترنتی، با وارد کردن شماره موبایل خود
            می‌توانید از همان مرحله،‌ ثبت‌نام را ادامه دهید.
          </li>
          <li>
            -پس از ثبت‌نام و بررسی اطلاعات شما «کد فعال‌سازی حساب کاربری» از
            طریق پیامک برای‌تان ارسال می‌شود. ارسال این کد به منزله‌ی ثبت‌نام
            قطعی و فعال‌شدن حساب کاربری شماست.
          </li>
          <li>
            -توجه داشته باشید که فعال‌سازی و فرآیند بررسی حساب‌های متقاضیان در
            بازه‌ی زمانی تقریبی یک هفته‌ای انجام می‌پذیرد.
          </li>
          <li>
            -توجه داشته باشید که اسنپ تایید صلاحیت همه‌جانبه‌ی رانندگان را به
            پلیس نظارت بر اماکن عمومی ناجا سپرده است و پس از اتمام ثبت‌نام و
            ارائه‌ی مدارک، نتیجه‌ی درخواست تایید صلاحیت متقاضیان از طرف ناجا به
            شرکت اسنپ اعلام می‌شود.
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3 snapImg">
            <div>
              <img src={require("./image/4.svg").default} />
            </div>
          </div>
          <div className="col-sm-12 col-lg-8">
            <div className="SnapInfo">
              <h3>از رانندگان اسنپ!بیشتر بدانید</h3>
              <p>
                باشگاه رانندگان خدمتی برای کاربران راننده عضو خانواده اسنپ است.
                کاربران راننده با پیوستن به مجموعه اسنپ، علاوه بر کسب درآمد
                بالا، می‌توانند از خدمات باشگاه رانندگان نیز بهره‌مند شوند.
                امکان استفاده از تخفیف‌های خدمات خودرویی، رفاهی، درمانی و
                طرح‌های تشویقی بخشی از خدمات این باشگاه است.
              </p>
              <button>اطلاعات بیشتر</button>
            </div>
          </div>
        </div>
      </div>
      <div >
        <RegCard/>
      </div>
      <div className="row" style={{marginBottom:"50px"}}>
          <div className="col-sm-12 col-lg-6 col1">
          <div className="login">
            <h3>همین حالا ثبت نام کنید!</h3>
            <label>
              لطفاشماره موبایلتان را وارد کنید تا بتوانیم کد تائید را برایتان
              ارسال کنیم.
            </label>
            <input
              onClick={toggleClass}
              type="tel"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={place ? "مثلا:0912549874" : "شماره موبایل"}
            />

            <span>
              پر کردن فرم ثبت نام به معنی موافقت با
              <a href="#">قوانین و مقررات</a> اسنپ است.
            </span>

            <button
              disabled={!inputValue}
              style={{ backgroundColor: inputValue ? "green" : "#989e98" }}
            >
              ثبت نام سواری،وانت و موتوری
            </button>
            <span>
              شما می توانید از بخش{" "}
              <a href="#" style={{ color: "#77c356" }}>
                پیگیری ثبت نام
              </a>
              ، وضعیت ثبت نام خود را دنبال کنید.
            </span>
          </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="carImg">
              <img src={require('./image/5.svg').default}/>
            </div>
          </div>
      </div>
      <div>
        <FooterReg/>
      </div>
    </div>
  );
};

export default Register;
