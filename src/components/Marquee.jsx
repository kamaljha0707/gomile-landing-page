import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-0.3"
            className='w-full py-20 h-full rounded-tl-3xl rounded-tr-3xl bg-[#2a2b3d] text-[#f8f8ff] overflow-hidden z-[999]'
        >
            <div className='relative  border-t border-b border-zinc-200/30 flex whitespace-nowrap overflow-hidden'>
                {[...Array(4)].map((_, i) => (
                    <motion.h1
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                            ease: "linear",
                            repeat: Infinity,
                            duration: 10
                        }}
                        className='text-[18vw] font-["Barlow_Condensed"] 
                mx-8 uppercase font-medium tracking-[-0.015em] leading-[0.9] 
                text-[#7389f4] flex items-center'
                    >
                        Move smart. GoMile.
                    </motion.h1>
                ))}
            </div>
        </div>
    )
}

export default Marquee;