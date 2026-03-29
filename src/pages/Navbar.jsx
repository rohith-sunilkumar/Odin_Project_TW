import { useState } from "react";

import logo from "../assets/logo.png";
import darkmode from "../assets/dark-mode.png";
import about from "../assets/about.png";
import community from "../assets/community.png";
import heart from "../assets/heart.png";
import home from "../assets/home.png";
import map from "../assets/map.png";
import rocket from "../assets/rocket.png";
import signin from "../assets/sign-in.png";


const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    {/* Desktop Version */}
      <div className="flex justify-between px-5 h-14 mt-2 relative">
        <div className="flex items-center">
          <img src={logo} alt="" className="" />
          <p className="font-serif font-bold hidden sm:flex whitespace-nowrap">
            THE ODIN PROJECT
          </p>
        </div>
        <div className="hidden gap-7 items-center text-gray-500 text-sm font-bold sm:flex">
          <button className="hover:text-black border-b-2 border-transparent hover:border-gray-200 p-2 cursor-pointer transition duration-300">
            All Paths
          </button>
          <button className="hover:text-black border-b-2 border-transparent hover:border-gray-200 p-2 cursor-pointer transition duration-300">
            About
          </button>
          <button className="hover:text-black border-b-2 border-transparent hover:border-gray-200 p-2 cursor-pointer transition duration-300">
            Community
          </button>
          <button className="hover:text-black border-b-2 border-transparent hover:border-gray-200 p-2 cursor-pointer transition duration-300">
            Support Us
          </button>
          <button className="hover:text-black border-b-2 border-transparent hover:border-gray-200 p-2 cursor-pointer transition duration-300">
            Sign in
          </button>
          <button>
            <img src={darkmode} alt="" className="w-7 h-7" />
          </button>
          <button className="bg-green-700 text-white p-3 rounded-xl">
            Get Started
          </button>
        </div>
        <div className="sm:hidden flex items-center">
          <button className="text-2xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Version Menu */}
      {open && (
        <div className="fixed inset-0 z-40"
        onClick={()=>setOpen(false)}></div>
      )}
      {open && (
        <div className="absolute right-4 top-12 bg-white w-50 p-4 h-fit  transition duration-300 shadow-2xl rounded-3xl z-50 border border-gray-200">
          <div className="flex flex-col gap-3 border-b-2 px-5 py-3">
            <button className="w-full left-0 flex items-center gap-2"><img src={home} alt="" className="w-4 h-4"/>Home</button>
            <button className="w-full left-0 flex items-center gap-2"><img src={map} alt="" className="w-4 h-4"/>All Paths</button>
            <button className="w-full left-0 flex items-center gap-2"><img src={about} alt="" className="w-4 h-4"/>About</button>
            <button className="w-full left-0 flex items-center gap-2"><img src={heart} alt="" className="w-4 h-4"/>Support Us</button>
            <button className="w-full left-0 flex items-center gap-2"><img src={community} alt="" className="w-4 h-4"/>Community</button>
          </div>
          <div className="flex flex-col gap-2 p-3">
            <button className="w-full left-0 p-1 flex items-center gap-2"><img src={rocket} alt="" className="w-4 h-4"/>Get Started</button>
            <button className="w-full left-0 p-1 flex items-center gap-2"><img src={darkmode} alt="" className="w-4 h-4"/>Light Mode</button>
            <button className="w-full left-0 p-1 flex items-center gap-2"><img src={signin} alt="" className="w-4 h-4"/>Sign in</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
