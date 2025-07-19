import { motion } from 'framer-motion'
import React from 'react'



function Pricing() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-10 h-screen bg-[#18181b] px-20 py-16 text-[#f8f8ff] font-['Neue_Montreal'] flex flex-col md:flex-row justify-between gap-10 leading-normal tracking-wider"
    >
      {/* Left content */}
      <motion.div 
        className="md:w-1/2 flex flex-col justify-center space-y-6"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Transparent Pricing <br /> for Every Ride
        </motion.h2>
        
        <motion.p 
          className="text-[#f8f8ff]/70 max-w-lg"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Choose a plan that fits your travel needs. Whether it's a daily city commute or an intercity trip, we have you covered.
        </motion.p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div 
        className="md:w-1/2 grid gap-6 mt-12 md:mt-0 md:overflow-y-auto md:max-h-[80vh] md:pr-4
                  [scrollbar-width:thin] [scrollbar-color:#7389f4_transparent] hover:[scrollbar-color:#7389f4_#2a2b3d]
                  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-[#7389f4]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* Card 1 */}
        <motion.div 
          className="bg-gradient-to-br from-[#2a2b3d] to-[#2a2b3d]/80 rounded-2xl p-8 shadow-lg border border-[#7389f4]/20 hover:border-[#7389f4]/40 transition-colors"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#7389f4]">Local Ride</h3>
          <div className="flex justify-between text-base mb-3">
            <span>Base Fare</span><span className="font-medium">₹50</span>
          </div>
          <div className="flex justify-between text-base mb-3">
            <span>Per Km</span><span className="font-medium">₹12</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Waiting Charges</span><span className="font-medium">₹2/min</span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="bg-gradient-to-br from-[#2a2b3d] to-[#2a2b3d]/80 rounded-2xl p-8 shadow-lg border border-[#7389f4]/20 hover:border-[#7389f4]/40 transition-colors"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#7389f4]">Airport Transfer</h3>
          <div className="flex justify-between text-base mb-3">
            <span>Base Fare</span><span className="font-medium">₹150</span>
          </div>
          <div className="flex justify-between text-base mb-3">
            <span>Per Km</span><span className="font-medium">₹15</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Toll Charges</span><span className="font-medium">Included</span>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="bg-gradient-to-br from-[#2a2b3d] to-[#2a2b3d]/80 rounded-2xl p-8 shadow-lg border border-[#7389f4]/20 hover:border-[#7389f4]/40 transition-colors"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#7389f4]">Outstation</h3>
          <div className="flex justify-between text-base mb-3">
            <span>Base Fare</span><span className="font-medium">₹300</span>
          </div>
          <div className="flex justify-between text-base mb-3">
            <span>Per Km</span><span className="font-medium">₹18</span>
          </div>
          <div className="flex justify-between text-base">
            <span>Driver Allowance</span><span className="font-medium">₹500/day</span>
          </div>
        </motion.div>

        {/* gradient fade */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#18181b] to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.div>
    </motion.section>
  )
}

export default Pricing