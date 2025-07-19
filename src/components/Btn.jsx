import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'



function Btn() {
    return (
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
    )
}

export default Btn;