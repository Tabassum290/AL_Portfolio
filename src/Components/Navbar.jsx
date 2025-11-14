import image from "/src/image/banner.jpg"
import React from "react";
const Navbar = () => {
  return (
    <div className="bg-gray-100 sticky z-10 top-0">
      <div className="navbar max-w-7xl m-auto">
        <div className="navbar-start">
        
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             <a href="#home" className="btn text-[#9929FB]">
              <li>Home</li>
            </a>
            <a href="#about" className="btn text-[#9929FB]">
              <li>About</li>
            </a>
            <a href="#education" className="btn text-[#9929FB] ">
              <li>Education</li>
            </a>
            <a href="#service" className="btn text-[#9929FB] ">
              <li>Services</li>
            </a>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-2">
            <img src={image} className="h-12 w-12 rounded-full object-cover" alt="" />
            <a className="btn font-semibold text-xl lg:text-[32px]" href="#home">daisyUI</a>
          </div>
         
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-6 font-semibold text-[16px]">
            <a href="#home" className="btn btn-outline text-[#9929FB]">
              <li>Home</li>
            </a>
            <a href="#about" className="btn btn-outline mx-8 text-[#9929FB]">
              <li>About</li>
            </a>
            <a href="#education" className="btn btn-outline text-[#9929FB] ">
              <li>Education</li>
            </a>
            <a href="#service" className="btn btn-outline  mx-8 text-[#9929FB] ">
              <li>Services</li>
            </a>
          </ul>
        </div>

        <div className="navbar-end relative flex items-center gap-2">
         <a
  className="btn bg-purple-600 text-white px-6 hover:bg-purple-700 transition"
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
