import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className='stylefooter'>
    <ul>
        <li>فرصت های شغلی</li>
        <li>بلاگ</li>
        <li>شرایط و قوانین</li>
        <li>پنل سازمانی</li>
        <li>سوالات متداول</li>
        <li>باشگاه رانندگان</li>
        <li>ثبت نام راننده اسنپ</li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
    </ul>
    <ul>
        <li><img src={require('./image/icons8-twitter-20.png')}/></li>
        <li><img src={require('./image/icons8-instagram-20.png')}/></li>
        <li><img src={require('./image/icons8-play-20.png')}/></li>
        <li><img src={require('./image/icons8-in-20.png')}/></li>
        <li><img src={require('./image/icons8-telegram-20.png')}/></li>
       
    </ul>
    <ul>
        <li><img src={require('./image/2.png')}/></li>
        <li></li>
    </ul>
      </div>
    </div>
  )
}

export default Footer
