import React from 'react'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'
import './Container.css'
import ReceiveApp from '../receive/ReceiveApp'
import AllNeeds from '../allneeds/AllNeeds'
import Hero2 from '../hero2/Hero2'
import Hero3 from '../hero3/Hero3'
import VideoHero from '../videosection/VideoHero'
import Footer from '../footer/Footer'
const Container = () => {
  return (
    <div className="mar">
        <Navbar/>
        <hr/>
         <Hero/>
         <ReceiveApp/>
         <AllNeeds/>
         <Hero2/>
         <Hero3/>
         <VideoHero/>
         <Footer/>
    </div>
  )
}

export default Container
