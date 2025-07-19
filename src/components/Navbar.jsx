import React from 'react'
import { motion } from 'framer-motion';
import { IoIosArrowRoundUp } from 'react-icons/io';



function Navbar() {
    return (
        <motion.div
            id="navbar"
            className='w-full flex justify-between px-20 py-6 items-center text-[#f8f8ff] font-["Neue_Montreal"] fixed top-0 z-50 bg-[#18181b]/90 backdrop-blur-md'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Logo */}
            <motion.div
                className='flex items-center'
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
            >
                <h1 id="logo" className='flex font-["Barlow_Condensed"] items-center text-3xl font-bold leading-none  cursor-pointer tracking-widest'>
                    GoMile
                    <span className="w-2 mx-1 h-2 bg-[#7389f4] rounded-full"></span>
                </h1>
            </motion.div>

            {/* Links */}
            <div id="navlinks" className='flex space-x-10 cursor-pointer'>
                {["Services", "Product", "Pricing", "About", "Learn"].map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative"
                        whileHover="hover"
                        initial="initial"
                    >
                        <motion.a
                            className="text-md font-light capitalize pb-1 block"
                            variants={{
                                initial: { y: 0 },
                                hover: { y: -2 }
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeOut"
                            }}
                        >
                            {item}
                        </motion.a>

                        <motion.div
                            className="absolute bottom-0 left-0 w-full h-px bg-[#7389f4] origin-left"
                            variants={{
                                initial: { scaleX: 0 },
                                hover: { scaleX: 1 }
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Button */}
            <motion.div
                        id='btn'
                        className='bg-[#7389f4] text-[#f8f8ff] py-3 px-6 flex items-center rounded-full cursor-pointer gap-3'
                        whileHover={{
                            backgroundColor: "#5a70e0",
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span 
                            className='text-sm font-medium tracking-wide'
                            whileHover={{ 
                                x: -4,
                                transition: { 
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 7
                                } 
                            }}
                        >
                            Sign in
                        </motion.span>
                        
                        <motion.div
                            className='relative w-6 h-6 flex items-center justify-center'
                        >
                            <motion.span
                                className='absolute w-full h-full bg-white/90 rounded-full'
                                whileHover={{
                                    scale: 1.3,
                                    opacity: 0.7,
                                    transition: { 
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 5
                                    }
                                }}
                            />
                            
                            <motion.span
                                whileHover={{
                                    rotate: 90,
                                    scale: 1.2,
                                    transition: { 
                                        type: "spring",
                                        stiffness: 700,
                                        damping: 5
                                    }
                                }}
                            >
                                <IoIosArrowRoundUp className='text-[#7389f4] text-2xl relative' />
                            </motion.span>
                        </motion.div>
                    </motion.div>
        </motion.div>
    )
}

export default Navbar;