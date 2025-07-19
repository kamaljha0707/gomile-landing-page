import React from "react"
import Navbar from "./Components/Navbar"
import HeroSection from "./components/HeroSection"
import Marquee from "./components/Marquee"
import About from "./components/About"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import LocomotiveScroll from 'locomotive-scroll';


function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <div className="w-full min-h-full pt-8 bg-[#18181b]"> 
  <Navbar/>
  <HeroSection/>
  <Marquee/>
  <About/>
  <Services/>
  <div className="relative h-[300vh] bg-[#2a2b3d]"> 
    <Pricing/>
    <Footer/>
  </div>
</div>
</>
  )
}

export default App
