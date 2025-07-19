import React from 'react'
import { CiFacebook, CiTwitter } from "react-icons/ci";
// import { TelegramLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";

function Footer() {
    return (
        <>
  <footer className="absolute h-[80vh] bottom-0 w-full z-20 bg-[#18181b] text-[#f8f8ff] px-6 md:px-16 py-12 rounded-t-3xl border-t border-[#7389f4]/20">
    {/* Main Footer Content */}
    <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-[#7389f4]/10 pb-10">
      {/* Footer Left  */}
      <div className="md:w-1/3 space-y-6">
        <div className="flex items-center gap-2">
          <h1 id="logo" className='flex font-["Barlow_Condensed"] items-center text-3xl font-bold leading-none  cursor-pointer tracking-widest'>
                    GoMile
                    <span className="w-2 mx-1 h-2 bg-[#7389f4] rounded-full"></span>
                </h1>
        </div>
        <p className="text-[#f8f8ff]/70 text-base leading-relaxed">
          Gomile is a modern taxi platform offering reliable, real-time and affordable ride services across the city and beyond.
        </p>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#7389f4]">Company</h3>
          <ul className="space-y-3 text-[#f8f8ff]/80">
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">News</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#7389f4]">Services</h3>
          <ul className="space-y-3 text-[#f8f8ff]/80">
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">Local Rides</a></li>
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">Airport Transfer</a></li>
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">Outstation Travel</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#7389f4]">Support</h3>
          <ul className="space-y-3 text-[#f8f8ff]/80">
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-[#7389f4] transition-colors">Safety</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* Social & Subscribe */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10">
      <div className="flex gap-4">
        <a href="#" className="bg-[#2a2b3d] p-3 rounded-full hover:bg-[#7389f4] transition-colors">
          <CiInstagram className="text-xl" />
        </a>
        <a href="#" className="bg-[#2a2b3d] p-3 rounded-full hover:bg-[#7389f4] transition-colors">
          <CiTwitter className="text-xl" />
        </a>
        <a href="#" className="bg-[#2a2b3d] p-3 rounded-full hover:bg-[#7389f4] transition-colors">
          <CiFacebook className="text-xl" />
        </a>
      </div>

      <div className="w-full md:w-auto">
        <div className="flex items-center bg-[#2a2b3d] rounded-full overflow-hidden w-full max-w-md border border-[#7389f4]/30">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-6 py-3 text-sm w-full text-[#f8f8ff] placeholder-[#f8f8ff]/50 outline-none"
          />
          <button className="bg-[#7389f4] hover:bg-[#5a70e0] px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[#7389f4]/10">
      <p className="text-[#f8f8ff]/50 text-sm">© 2025 Gomile. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="text-[#f8f8ff]/70 hover:text-[#7389f4] text-sm transition-colors">Terms of Service</a>
        <a href="#" className="text-[#f8f8ff]/70 hover:text-[#7389f4] text-sm transition-colors">Privacy Policy</a>
        <a href="#" className="text-[#f8f8ff]/70 hover:text-[#7389f4] text-sm transition-colors">Cookies</a>
      </div>
    </div>
</footer>
        </>
    )
}

export default Footer