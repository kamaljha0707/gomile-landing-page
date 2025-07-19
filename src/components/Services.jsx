import React from 'react'
import localRide from "../assets/images/man-driving-car-with-girlfriend-giving-direction.jpg"
import airportRide from '../assets/images/taxi-driver-getting-ready-customer.jpg'
import outstationRide from '../assets/images/young-adult-traveling-using-sustainable-mobility.jpg'
import officeTravel from "../assets/images/portrait-businessman-using-his-mobile-phone-way-work-cab.jpg"
import rentalCar from "../assets/images/young-couple-choosing-car-car-show-room.jpg"
import { easeInOut, motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap'
import { useState } from 'react'

function Services() {
  const cardsAnimation = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()]
  const handleHover = (index) => {
    cardsAnimation[index].start({ y: "0" })
  }
  const handleHoverEnd = (index) => {
    cardsAnimation[index].start({
      y: "100%",
      transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 0.4
      }
    });
  };


  return (
    <>
      <div data-scroll
      data-scroll-speed='-.1' className='w-full py-10 bg-[#f8f8ff]'>
        <div className='w-full px-20 border-b-[1px] pb-10 border-[#7389f4]/30'>
          <h1 className='text-[#2a2b3d] text-6xl font-["Neue_Montreal"]'>Services</h1>
        </div>
        <div className='mx-20 mb-20'>
          <div className="cards w-full flex gap-5 mt-20">
            <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className="card-container relative w-1/2 h-[70vh] mb-10 cursor-pointer">
              <p className='flex gap-3 items-center text-md tracking-wide uppercase mb-3 font-["Neue_Montreal"] text-[#2a2b3d]'>
                <span className='block w-2.5 h-2.5 bg-[#7389f4] rounded-full'></span>
                Local Ride Booking
              </p>
              <motion.h1 className="card-text absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-wide text-7xl w-full text-center z-20 font-['Neue_Montreal'] text-[#7389f4] font-bold overflow-hidden">
                {"Local Ride Booking".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardsAnimation[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                      duration: 0.6
                    }}
                    className='inline-block'
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className="card relative bg-[#2a2b3d] h-full w-full overflow-hidden rounded-xl group"
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
                }}
              >
                <motion.img
                  src={localRide}
                  className="h-full w-full object-cover"
                  alt=""
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }
                  }}
                />
                <div className="absolute inset-0 bg-[#18181b]/40 z-10 group-hover:bg-[#18181b]/30 transition-all duration-700"></div>
              </motion.div>
              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>Quick Rides</button>
              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase mx-4 cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>City Travel</button>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="card-container relative w-1/2 h-[70vh] mb-10 cursor-pointer"
            >
              <p className='flex gap-3 items-center text-md tracking-wide uppercase mb-3 font-["Neue_Montreal"] text-[#2a2b3d]'>
                <span className='block w-2.5 h-2.5 bg-[#7389f4] rounded-full'></span>
                Airport Transfers
              </p>

              <motion.h1
                className="card-text absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-wide text-7xl w-full text-center z-20 font-['Neue_Montreal'] text-[#7389f4] font-bold overflow-hidden"
              >
                {"Airport Transfers".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardsAnimation[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                      duration: 0.6
                    }}
                    className='inline-block'
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className="card relative bg-[#2a2b3d] h-full w-full overflow-hidden rounded-xl group"
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
                }}
              >
                <motion.img
                  src={airportRide}
                  className="h-full w-full object-cover"
                  alt=""
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }
                  }}
                />
                <div className="absolute inset-0 bg-[#18181b]/40 z-10 group-hover:bg-[#18181b]/30 transition-all duration-700"></div>
              </motion.div>

              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>
                Airport Cab
              </button>
            </motion.div>
          </div>
        </div>

        <div className='mx-20 mb-20'>
          <div className="cards w-full flex gap-5 mt-20">
            <motion.div onHoverStart={() => handleHover(2)} onHoverEnd={() => handleHoverEnd(2)} className="card-container relative w-1/2 h-[70vh] mb-10 cursor-pointer">
              <p className='flex gap-3 items-center text-md tracking-wide uppercase mb-3 font-["Neue_Montreal"] text-[#2a2b3d]'>
                <span className='block w-2.5 h-2.5 bg-[#7389f4] rounded-full'></span>
                Outstation Travel
              </p>
              <motion.h1 className="card-text absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-wide text-7xl w-full text-center z-20 font-['Neue_Montreal'] text-[#7389f4] font-bold overflow-hidden">
                {"Outstation Travel".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardsAnimation[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                      duration: 0.6
                    }}
                    className='inline-block'
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className="card relative bg-[#2a2b3d] h-full w-full overflow-hidden rounded-xl group"
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
                }}
              >
                <motion.img
                  src={outstationRide}
                  className="h-full w-full object-cover"
                  alt=""
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }
                  }}
                />
                <div className="absolute inset-0 bg-[#18181b]/40 z-10 group-hover:bg-[#18181b]/30 transition-all duration-700"></div>
              </motion.div>
              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>Long Ride</button>
              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase mx-4 cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>Outstation Trip</button>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="card-container relative w-1/2 h-[70vh] mb-10 cursor-pointer"
            >
              <p className='flex gap-3 items-center text-md tracking-wide uppercase mb-3 font-["Neue_Montreal"] text-[#2a2b3d]'>
                <span className='block w-2.5 h-2.5 bg-[#7389f4] rounded-full'></span>
                Company Transport
              </p>

              <motion.h1
                className="card-text absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-wide text-7xl w-full text-center z-20 font-['Neue_Montreal'] text-[#7389f4] font-bold overflow-hidden"
              >
                {"Company Transport".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardsAnimation[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                      duration: 0.6
                    }}
                    className='inline-block'
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className="card relative bg-[#2a2b3d] h-full w-full overflow-hidden rounded-xl group"
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
                }}
              >
                <motion.img
                  src={officeTravel}
                  className="h-full w-full object-cover"
                  alt=""
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }
                  }}
                />
                <div className="absolute inset-0 bg-[#18181b]/40 z-10 group-hover:bg-[#18181b]/30 transition-all duration-700"></div>
              </motion.div>

              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>Work Ride</button>
              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase mx-4 cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>Office Cab</button>
              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>Employee Transport</button>
            </motion.div>
          </div>
        </div>

        <div className='mx-20 mb-20'>
          <div className="cards w-full flex gap-5 mt-20">
            <motion.div onHoverStart={() => handleHover(4)} onHoverEnd={() => handleHoverEnd(4)} className="card-container relative w-1/2 h-[70vh] mb-10 cursor-pointer">
              <p className='flex gap-3 items-center text-md tracking-wide uppercase mb-3 font-["Neue_Montreal"] text-[#2a2b3d]'>
                <span className='block w-2.5 h-2.5 bg-[#7389f4] rounded-full'></span>
                Rental Packages
              </p>
              <motion.h1 className="card-text absolute top-1/2 -translate-y-1/2 tracking-wide text-7xl w-full text-center z-20 font-['Neue_Montreal'] text-[#7389f4] font-bold overflow-hidden">
                {"Rental Packages".split('').map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cardsAnimation[4]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                      duration: 0.6
                    }}
                    className='inline-block'
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className="card relative bg-[#2a2b3d] h-full w-full overflow-hidden rounded-xl group"
                whileHover={{
                  scale: 0.95,
                  transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
                }}
              >
                <motion.img
                  src={rentalCar}
                  className="h-full w-full object-cover"
                  alt=""
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 }
                  }}
                />
                <div className="absolute inset-0 bg-[#18181b]/40 z-10 group-hover:bg-[#18181b]/30 transition-all duration-700"></div>
              </motion.div>
              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>Cab Rental</button>
              <button className='bg-transparent border-2 my-2 border-[#7389f4] text-[#2a2b3d] rounded-full px-3.5 py-1 font-["Neue_Montreal"] uppercase mx-4 cursor-pointer hover:bg-[#7389f4]/10 transition-colors'>Hourly Ride</button>
            </motion.div>
          </div>
        </div>

        <div className='w-full h-full flex justify-center items-center mb-20'>
          <button className="flex gap-4 items-center px-12 py-4 bg-[#7389f4] hover:bg-[#5a70e0] rounded-full text-[#f8f8ff] tracking-wider cursor-pointer font-['Neue_Montreal'] uppercase transition-all duration-300 group">
            <span className="group-hover:-translate-x-2 transition-transform duration-300">
              View all rides
            </span>
            <span className="relative w-7 h-7 flex items-center justify-center">
             
              <span className="absolute w-3 h-3 bg-[#f8f8ff] rounded-full transition-all duration-400 group-hover:w-7 group-hover:h-7 group-hover:bg-[#f8f8ff]/20" />

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
        </div>
      </div>
    </>
  )
}

export default Services