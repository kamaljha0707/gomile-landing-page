import React from "react"
import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import Marquee from "./components/Marquee.jsx"
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import Pricing from "./components/Pricing.jsx"
import Footer from "./components/Footer.jsx"
import LocomotiveScroll from 'locomotive-scroll';
import '../src/App.css'


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
