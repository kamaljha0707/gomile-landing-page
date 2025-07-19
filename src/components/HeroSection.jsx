import React, { useState, useEffect, useRef } from 'react';
import LeftImage from '../assets/images/left-phone.png';
import RightImage from '../assets/images/right-phone.png';
import { motion } from "framer-motion";

function HeroSection() {
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({
        x: (x - 0.5) * 5,
        y: (y - 0.5) * 3
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        onComplete: () => setTextAnimationComplete(true)
      },
    },
  };

  const imageWrapperVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-.1" 
      className="w-full h-full flex justify-center items-center px-4 md:px-20 pt-20 pb-4  overflow-hidden relative z-0 "
      ref={containerRef}
    >
      <div className="textstructure flex flex-col items-center relative max-w-[1100px] px-4">
        <motion.div 
          className="relative w-[300px] sm:w-[480px] h-[460px]"
          initial="hidden"
          animate={textAnimationComplete ? "visible" : "hidden"}
          variants={imageWrapperVariant}
        >
          <motion.img
            src={LeftImage}
            className="h-[460px] translate-x-[-30px]"
            alt="Left phone"
            style={{ 
              rotate: -1.2,
              x: mousePosition.x * -0.5,
              y: mousePosition.y * -0.3,
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)" 
            }}
          />
          
          <motion.img
            src={RightImage}
            className="absolute top-0 left-[40px] h-[460px]"
            alt="Right phone"
            style={{ 
              rotate: 1.2,
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.3,
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          />

          <div className="absolute inset-0 pointer-events-none h-[500px] w-[550px]">
            <div className="absolute left-0 h-full bg-gradient-to-r from-zinc-900 to-transparent" />
            <div className="absolute right-0 h-full w-16 bg-gradient-to-l from-zinc-900 to-transparent" />
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-zinc-900 via-zinc-900/90 to-transparent" />
          </div>
        </motion.div>

        <div className="relative z-20 -mt-24 sm:-mt-24 text-center">
          <div className="inline-block px-6 py-4">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={textVariant} 
              className="font-sans text-[#f8f8ff] text-4xl sm:text-7xl font-bold tracking-wide leading-tight bg-gradient-to-b from-white to-white/80 bg-clip-text"
            >
              Taxi booking software to
            </motion.h1>
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={textVariant} 
              className="font-sans text-white text-4xl sm:text-7xl font-bold tracking-wide mt-1 leading-18 bg-gradient-to-b from-white to-white/80 bg-clip-text"
            >
              grow your local business
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;