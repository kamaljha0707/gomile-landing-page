import React from 'react'


import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      data-scroll
      data-scroll-speed='.1'
      className='w-full h-full py-22 px-20 bg-[#7389f4] text-[#f8f8ff] rounded-tl-3xl rounded-tr-3xl'
    >
      <motion.h1 
        className='text-[3.5vw] font-["Neue_Montreal"] leading-[4vw]'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        GoMile is a modern taxi platform for busy commuters who need to book rides, track drivers, save time, and travel safely with just a few taps.
      </motion.h1>

      <motion.div 
        className="w-full flex justify-between items-start border-t-[1px] font-['Neue_Montreal'] pt-6 mt-20 border-[#f8f8ff]/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.div 
          className="w-1/2"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          <motion.h1 
            className='text-6xl  text-[#f8f8ff]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Our approach :
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="flex gap-4 items-center mt-10 px-12 py-4 bg-white hover:bg-gray-100 rounded-full text-gray-800 tracking-wider cursor-pointer font-['Neue_Montreal'] uppercase transition-all duration-300 group border border-gray-200">
              <span className="group-hover:-translate-x-2 transition-transform duration-300">
                Read More
              </span>
              <span className="relative w-8 h-8 flex items-center justify-center">
                <span className="absolute w-3 h-3 bg-gray-700 rounded-full transition-all duration-400 group-hover:w-12 group-hover:h-12 group-hover:bg-gray-300/80" />
                <svg
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-1/2 h-[70vh] rounded-xl bg-[#f8f8ff]/10 backdrop-blur-sm border border-[#f8f8ff]/20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, type: 'spring' }}
        />
        
      </motion.div>
    </motion.div>
  )
}

export default About