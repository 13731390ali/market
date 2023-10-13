import React from "react";
import "./VideoHero.css";
import CardSec from "./cardSec/CardSec";

const VideoHero = () => {
  return (
    <div className="secSt" style={{ backgroundColor: "#f2f5f8", textAlign: "center" }}>
      <div className="VideoStyle">
        <h1>در کمتر از 10 دقیقه ثبت نام کنید و به ناوگان اسنپ بپیوندید.</h1>
        <p>
          بدون نیاز به مراجعه ی حضوری، از طریق این صفحه، تمام مراحل ثبت نام را
          اینترنتی انجام دهید.
        </p>
        <button>ثبت نام رانندگان</button>
        
      </div>
      <video controls>
          <source src="./video/jazbranandeh1.mp4" type="video/mp4" />
        </video>
        <div style={{marginTop:"40px"}}>
          <CardSec/>
        </div>
    </div>
  );
};

export default VideoHero;
