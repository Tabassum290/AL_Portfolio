// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import image from "/src/image/banner.jpg";
import Theme from "./Theme";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
    useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };
  return (
    <div className="bg-base-200 sticky z-10 top-0"> {/* use daisyui base so it adapts */}
      <div className="navbar max-w-7xl m-auto">
        <div className="navbar-start">
          {/* mobile dropdown (kept as you have) */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <a href="#home" className="btn text-[#9929FB]"><li>Home</li></a>
              <a href="#about" className="btn text-[#9929FB]"><li>About</li></a>
               <a href="#services" className="btn text-[#9929FB] "><li>Services</li></a>
              <a href="#education" className="btn text-[#9929FB] "><li>Education</li></a>
             
            </ul>
          </div>

          <div className="flex justify-between items-center gap-2">
            <img src={image} className="h-12 w-12 rounded-full object-cover" alt="logo" />
            <a className="btn btn-ghost font-semibold text-md text-black lg:text-[32px]" href="#home">Al Imran Bhuiya</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-6 font-semibold text-[16px]">
            <a href="#home" className="btn btn-outline text-[#9929FB]"><li>Home</li></a>
            <a href="#about" className="btn btn-outline mx-8 text-[#9929FB]"><li>About</li></a>
              <a href="#services" className="btn btn-outline text-[#9929FB] "><li>Services</li></a>
            <a href="#education" className="btn btn-outline mx-8 text-[#9929FB] "><li>Education</li></a>
          
          </ul>
        </div>

        <div className="navbar-end relative flex items-center gap-2">
         <Theme/>

          <a
            className="btn bg-purple-600 text-white px-3 hover:bg-purple-700 transition"
            href="https://wa.me/8801740366889?text=Hello%20I%20want%20to%20contact%20you"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
